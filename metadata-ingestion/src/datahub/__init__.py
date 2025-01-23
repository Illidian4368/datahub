import sys
import warnings

import datahub.metadata.schema_classes as models
from datahub.errors import SdkUsageError
from datahub.ingestion.graph.client import DataHubGraph, get_default_graph
from datahub.ingestion.graph.config import DatahubClientConfig
from datahub.metadata.urns import (
    ChartUrn,
    ContainerUrn,
    CorpGroupUrn,
    CorpUserUrn,
    DashboardUrn,
    DataPlatformInstanceUrn,
    DataPlatformUrn,
    DatasetUrn,
    DomainUrn,
    GlossaryTermUrn,
    SchemaFieldUrn,
    TagUrn,
)
from datahub.sdk.container import Container
from datahub.sdk.dataset import Dataset

# Published at https://pypi.org/project/acryl-datahub/.
__package_name__ = "acryl-datahub"
__version__ = "1!0.0.0.dev0"


def is_dev_mode() -> bool:
    return __version__.endswith("dev0")


def nice_version_name() -> str:
    if is_dev_mode():
        return "unavailable (installed in develop mode)"
    return __version__


if sys.version_info < (3, 8):
    warnings.warn(
        "DataHub requires Python 3.8 or newer. "
        "Please upgrade your Python version to continue using DataHub.",
        FutureWarning,
        stacklevel=2,
    )
