from typing import TYPE_CHECKING, overload

import datahub.metadata.schema_classes as models
from datahub.emitter.mcp import MetadataChangeProposalWrapper
from datahub.emitter.mcp_patch_builder import MetadataPatchProposal
from datahub.errors import ItemNotFoundError, SdkUsageError
from datahub.ingestion.graph.client import DataHubGraph
from datahub.metadata.urns import (
    ContainerUrn,
    DatasetUrn,
    DomainUrn,
    GlossaryTermUrn,
    TagUrn,
    Urn,
)
from datahub.sdk._shared import Entity, UrnOrStr

if TYPE_CHECKING:
    from datahub.sdk.container import Container
    from datahub.sdk.dataset import Dataset


class SDKGraph:
    def __init__(self, graph: DataHubGraph):
        self._graph = graph

    # TODO: Make things more generic across entity types.

    # TODO: Make all of these methods sync by default.

    @overload
    def get(self, urn: "ContainerUrn") -> "Container": ...

    @overload
    def get(self, urn: "DatasetUrn") -> "Dataset": ...

    @overload
    def get(self, urn: str) -> Entity: ...

    def get(self, urn: UrnOrStr) -> Entity:
        from datahub.sdk._all_entities import ENTITY_CLASSES

        if not isinstance(urn, Urn):
            urn = Urn.from_string(urn)

        # TODO: add error handling around this with a suggested alternative if not yet supported
        EntityClass = ENTITY_CLASSES[urn.entity_type]

        aspects = self._graph.get_entity_semityped(str(urn))

        # TODO: save the timestamp so we can use If-Unmodified-Since on the updates
        return EntityClass._new_from_graph(urn, aspects)

    def create(self, entity: Entity) -> None:
        mcps = []

        if self._graph.exists(str(entity.urn)):
            raise SdkUsageError(
                f"Entity {entity.urn} already exists, and hence cannot be created."
            )

        # Extra safety check: by putting this first, we can ensure that
        # the request fails if the entity already exists.
        mcps.append(
            MetadataChangeProposalWrapper(
                entityUrn=str(entity.urn),
                aspect=entity.urn.to_key_aspect(),
                changeType=models.ChangeTypeClass.CREATE_ENTITY,
            )
        )

        mcps.extend(entity._as_mcps(models.ChangeTypeClass.CREATE))

        self._graph.emit_mcps(mcps)

    def upsert(self, entity: Entity) -> None:
        mcps = entity._as_mcps(models.ChangeTypeClass.UPSERT)

        # TODO respect If-Unmodified-Since?
        # -> probably add a "mode" parameter that can be "upsert" or "update" (e.g. if not modified) or "update_force"

        self._graph.emit_mcps(mcps)

    def update(
        self, entity: MetadataPatchProposal, *, check_exists: bool = True
    ) -> None:
        if check_exists and not self._graph.exists(entity.urn):
            raise SdkUsageError(
                f"Entity {entity.urn} does not exist, and hence cannot be updated. "
                "You can bypass this check by setting check_exists=False."
            )

        mcps = entity.build()
        self._graph.emit_mcps(mcps)

    def get_domain_urn_by_name(self, domain_name: str, /) -> DomainUrn:
        # TODO: add caching to this method?
        urn_str = self._graph.get_domain_urn_by_name(domain_name)
        if urn_str is None:
            raise ItemNotFoundError(f"Domain with name {domain_name} not found")
        return DomainUrn.from_string(urn_str)

    def get_tag_urn_by_name(self, tag_name: str, /) -> TagUrn:
        raise NotImplementedError("TODO: need to implement this")

    def get_term_urn_by_name(self, term_name: str, /) -> GlossaryTermUrn:
        raise NotImplementedError("TODO: need to implement this")
