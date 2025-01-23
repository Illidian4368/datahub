"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21673],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});t(96540);var a=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={sidebar_position:20,title:"MlModelDeployment",slug:"/generated/metamodel/entities/mlmodeldeployment",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelDeployment.md"},l="MlModelDeployment",c={unversionedId:"docs/generated/metamodel/entities/mlModelDeployment",id:"docs/generated/metamodel/entities/mlModelDeployment",title:"MlModelDeployment",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/mlModelDeployment.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/mlmodeldeployment",permalink:"/docs/generated/metamodel/entities/mlmodeldeployment",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelDeployment.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"MlModelDeployment",slug:"/generated/metamodel/entities/mlmodeldeployment",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelDeployment.md"},sidebar:"overviewSidebar",previous:{title:"MlModelGroup",permalink:"/docs/generated/metamodel/entities/mlmodelgroup"},next:{title:"MlFeatureTable",permalink:"/docs/generated/metamodel/entities/mlfeaturetable"}},m={},d=[{value:"Aspects",id:"aspects",level:2},{value:"mlModelDeploymentKey",id:"mlmodeldeploymentkey",level:3},{value:"mlModelDeploymentProperties",id:"mlmodeldeploymentproperties",level:3},{value:"ownership",id:"ownership",level:3},{value:"status",id:"status",level:3},{value:"deprecation",id:"deprecation",level:3},{value:"globalTags",id:"globaltags",level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",level:3},{value:"testResults",id:"testresults",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],p={toc:d},u="wrapper";function y(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(u,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},p,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mlmodeldeployment"},"MlModelDeployment"),(0,a.yg)("h2",{id:"aspects"},"Aspects"),(0,a.yg)("h3",{id:"mlmodeldeploymentkey"},"mlModelDeploymentKey"),(0,a.yg)("p",null,"Key for an ML model deployment"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlModelDeploymentKey"\n  },\n  "name": "MLModelDeploymentKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Standardized platform urn for the model Deployment"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the MLModelDeployment"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "TEXT_PARTIAL",\n        "filterNameOverride": "Environment",\n        "queryByDefault": false\n      },\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "CORP": "Designates corporation fabrics",\n          "DEV": "Designates development fabrics",\n          "EI": "Designates early-integration fabrics",\n          "NON_PROD": "Designates non-production fabrics",\n          "PRE": "Designates pre-production fabrics",\n          "PROD": "Designates production fabrics",\n          "QA": "Designates quality assurance fabrics",\n          "RVW": "Designates review fabrics",\n          "SANDBOX": "Designates sandbox fabrics",\n          "STG": "Designates staging fabrics",\n          "TEST": "Designates testing fabrics",\n          "UAT": "Designates user acceptance testing fabrics"\n        },\n        "name": "FabricType",\n        "namespace": "com.linkedin.common",\n        "symbols": [\n          "DEV",\n          "TEST",\n          "QA",\n          "UAT",\n          "EI",\n          "PRE",\n          "STG",\n          "NON_PROD",\n          "PROD",\n          "CORP",\n          "RVW",\n          "SANDBOX"\n        ],\n        "doc": "Fabric group type"\n      },\n      "name": "origin",\n      "doc": "Fabric type where model Deployment belongs to or where it was generated"\n    }\n  ],\n  "doc": "Key for an ML model deployment"\n}\n'))),(0,a.yg)("h3",{id:"mlmodeldeploymentproperties"},"mlModelDeploymentProperties"),(0,a.yg)("p",null,"Properties associated with an ML Model Deployment"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlModelDeploymentProperties"\n  },\n  "name": "MLModelDeploymentProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "TEXT",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalUrl",\n      "default": null,\n      "doc": "URL where the reference exist"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT",\n        "hasValuesFieldName": "hasDescription"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the MLModelDeployment"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "createdAt",\n      "default": null,\n      "doc": "Date when the MLModelDeployment was developed"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "VersionTag",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "versionTag",\n              "default": null\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "MetadataAttribution",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When this metadata was updated."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) responsible for applying the assocated metadata. This can\\neither be a user (in case of UI edits) or the datahub system for automation."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "source",\n                      "default": null,\n                      "doc": "The DataHub source responsible for applying the associated metadata. This will only be filled out\\nwhen a DataHub source is responsible. This includes the specific metadata test urn, the automation urn."\n                    },\n                    {\n                      "type": {\n                        "type": "map",\n                        "values": "string"\n                      },\n                      "name": "sourceDetail",\n                      "default": {},\n                      "doc": "The details associated with why this metadata was applied. For example, this could include\\nthe actual regex rule, sql statement, ingestion pipeline ID, etc."\n                    }\n                  ],\n                  "doc": "Information about who, why, and how this metadata was applied"\n                }\n              ],\n              "name": "metadataAttribution",\n              "default": null\n            }\n          ],\n          "doc": "A resource-defined string representing the resource state for the purpose of concurrency control"\n        }\n      ],\n      "name": "version",\n      "default": null,\n      "doc": "Version of the MLModelDeployment"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "enum",\n          "symbolDocs": {\n            "CREATING": "Deployments being created.",\n            "DELETING": "Deployments being deleted.",\n            "FAILED": "Deployments with an error state.",\n            "IN_SERVICE": "Deployments that are active.",\n            "OUT_OF_SERVICE": "Deployments out of service.",\n            "ROLLING_BACK": "Deployments being reverted to a previous version.",\n            "UNKNOWN": "Deployments with unknown/unmappable state.",\n            "UPDATING": "Deployments being updated."\n          },\n          "name": "DeploymentStatus",\n          "namespace": "com.linkedin.ml.metadata",\n          "symbols": [\n            "OUT_OF_SERVICE",\n            "CREATING",\n            "UPDATING",\n            "ROLLING_BACK",\n            "IN_SERVICE",\n            "DELETING",\n            "FAILED",\n            "UNKNOWN"\n          ],\n          "doc": "Model endpoint statuses"\n        }\n      ],\n      "name": "status",\n      "default": null,\n      "doc": "Status of the deployment"\n    }\n  ],\n  "doc": "Properties associated with an ML Model Deployment"\n}\n'))),(0,a.yg)("h3",{id:"ownership"},"ownership"),(0,a.yg)("p",null,"Ownership information of an entity."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "CUSTOM": "Set when ownership type is unknown or a when new one is specified as an ownership type entity for which we have no\\nenum value for. This is used for backwards compatibility",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "CUSTOM",\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "ownershipType"\n                ],\n                "name": "ownershipType"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "typeUrn",\n              "default": null,\n              "doc": "The type of the ownership\\nUrn of type O"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "MAP_ARRAY",\n          "queryByDefault": false\n        }\n      },\n      "type": [\n        {\n          "type": "map",\n          "values": {\n            "type": "array",\n            "items": "string"\n          }\n        },\n        "null"\n      ],\n      "name": "ownerTypes",\n      "default": {},\n      "doc": "Ownership type to Owners map, populated via mutation hook."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0,\n        "message": null\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,a.yg)("h3",{id:"status"},"status"),(0,a.yg)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,a.yg)("h3",{id:"deprecation"},"deprecation"),(0,a.yg)("p",null,"Deprecation status of an entity"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "deprecation"\n  },\n  "name": "Deprecation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 0.5\n        }\n      },\n      "type": "boolean",\n      "name": "deprecated",\n      "doc": "Whether the entity is deprecated."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "decommissionTime",\n      "default": null,\n      "doc": "The time user plan to decommission this entity."\n    },\n    {\n      "type": "string",\n      "name": "note",\n      "doc": "Additional information about the entity deprecation plan, such as the wiki, doc, RB."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actor",\n      "doc": "The user URN which will be credited for modifying this deprecation content."\n    }\n  ],\n  "doc": "Deprecation status of an entity"\n}\n'))),(0,a.yg)("h3",{id:"globaltags"},"globalTags"),(0,a.yg)("p",null,"Tag aspect used for applying tags to an entity"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/tag": {\n          "entityTypes": [\n            "tag"\n          ],\n          "name": "TaggedWith"\n        }\n      },\n      "Searchable": {\n        "/*/tag": {\n          "addToFilters": true,\n          "boostScore": 0.5,\n          "fieldName": "tags",\n          "fieldType": "URN",\n          "filterNameOverride": "Tag",\n          "hasValuesFieldName": "hasTags",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            },\n            {\n              "Searchable": {\n                "/actor": {\n                  "fieldName": "tagAttributionActors",\n                  "fieldType": "URN",\n                  "queryByDefault": false\n                },\n                "/source": {\n                  "fieldName": "tagAttributionSources",\n                  "fieldType": "URN",\n                  "queryByDefault": false\n                },\n                "/time": {\n                  "fieldName": "tagAttributionDates",\n                  "fieldType": "DATETIME",\n                  "queryByDefault": false\n                }\n              },\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "MetadataAttribution",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When this metadata was updated."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) responsible for applying the assocated metadata. This can\\neither be a user (in case of UI edits) or the datahub system for automation."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "source",\n                      "default": null,\n                      "doc": "The DataHub source responsible for applying the associated metadata. This will only be filled out\\nwhen a DataHub source is responsible. This includes the specific metadata test urn, the automation urn."\n                    },\n                    {\n                      "type": {\n                        "type": "map",\n                        "values": "string"\n                      },\n                      "name": "sourceDetail",\n                      "default": {},\n                      "doc": "The details associated with why this metadata was applied. For example, this could include\\nthe actual regex rule, sql statement, ingestion pipeline ID, etc."\n                    }\n                  ],\n                  "doc": "Information about who, why, and how this metadata was applied"\n                }\n              ],\n              "name": "attribution",\n              "default": null,\n              "doc": "Information about who, why, and how this metadata was applied"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,a.yg)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,a.yg)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "platformInstance",\n        "fieldType": "URN",\n        "filterNameOverride": "Platform Instance"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,a.yg)("h3",{id:"testresults"},"testResults"),(0,a.yg)("p",null,"Information about a Test Result"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "testResults"\n  },\n  "name": "TestResults",\n  "namespace": "com.linkedin.test",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/test": {\n          "entityTypes": [\n            "test"\n          ],\n          "name": "IsFailing"\n        }\n      },\n      "Searchable": {\n        "/*/test": {\n          "fieldName": "failingTests",\n          "fieldType": "URN",\n          "hasValuesFieldName": "hasFailingTests",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TestResult",\n          "namespace": "com.linkedin.test",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "test",\n              "doc": "The urn of the test"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "FAILURE": " The Test Failed",\n                  "SUCCESS": " The Test Succeeded"\n                },\n                "name": "TestResultType",\n                "namespace": "com.linkedin.test",\n                "symbols": [\n                  "SUCCESS",\n                  "FAILURE"\n                ]\n              },\n              "name": "type",\n              "doc": "The type of the result"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "testDefinitionMd5",\n              "default": null,\n              "doc": "The md5 of the test definition that was used to compute this result.\\nSee TestInfo.testDefinition.md5 for more information."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "AuditStamp",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "impersonator",\n                      "default": null,\n                      "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "message",\n                      "default": null,\n                      "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                    }\n                  ],\n                  "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                }\n              ],\n              "name": "lastComputed",\n              "default": null,\n              "doc": "The audit stamp of when the result was computed, including the actor who computed it."\n            }\n          ],\n          "doc": "Information about a Test Result"\n        }\n      },\n      "name": "failing",\n      "doc": "Results that are failing"\n    },\n    {\n      "Relationship": {\n        "/*/test": {\n          "entityTypes": [\n            "test"\n          ],\n          "name": "IsPassing"\n        }\n      },\n      "Searchable": {\n        "/*/test": {\n          "fieldName": "passingTests",\n          "fieldType": "URN",\n          "hasValuesFieldName": "hasPassingTests",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "com.linkedin.test.TestResult"\n      },\n      "name": "passing",\n      "doc": "Results that are passing"\n    }\n  ],\n  "doc": "Information about a Test Result"\n}\n'))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"outgoing"},"Outgoing"),(0,a.yg)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"OwnedBy"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Corpuser via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,a.yg)("li",{parentName:"ul"},"CorpGroup via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"ownershipType"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"OwnershipType via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"TaggedWith"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Tag via ",(0,a.yg)("inlineCode",{parentName:"li"},"globalTags.tags")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IsFailing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Test via ",(0,a.yg)("inlineCode",{parentName:"li"},"testResults.failing")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IsPassing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Test via ",(0,a.yg)("inlineCode",{parentName:"li"},"testResults.passing"))))),(0,a.yg)("h3",{id:"incoming"},"Incoming"),(0,a.yg)("p",null,"These are the relationships stored in other entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"DeployedTo"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MlModel via ",(0,a.yg)("inlineCode",{parentName:"li"},"mlModelProperties.deployments"))))),(0,a.yg)("h2",{id:"global-metadata-model"},(0,a.yg)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}y.isMDXComponent=!0}}]);