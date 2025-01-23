"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20190],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,y=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return t?a.createElement(y,s(s({ref:n},u),{},{components:t})):a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},15873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});t(96540);var a=t(15680);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={sidebar_position:32,title:"Query",slug:"/generated/metamodel/entities/query",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md"},l="Query",c={unversionedId:"docs/generated/metamodel/entities/query",id:"docs/generated/metamodel/entities/query",title:"Query",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/query.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/query",permalink:"/docs/generated/metamodel/entities/query",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,title:"Query",slug:"/generated/metamodel/entities/query",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/query.md"},sidebar:"overviewSidebar",previous:{title:"ErModelRelationship",permalink:"/docs/generated/metamodel/entities/ermodelrelationship"},next:{title:"DataProduct",permalink:"/docs/generated/metamodel/entities/dataproduct"}},u={},d=[{value:"Aspects",id:"aspects",level:2},{value:"queryProperties",id:"queryproperties",level:3},{value:"querySubjects",id:"querysubjects",level:3},{value:"status",id:"status",level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",level:3},{value:"subTypes",id:"subtypes",level:3},{value:"queryUsageStatistics (Timeseries)",id:"queryusagestatistics-timeseries",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],m={toc:d},p="wrapper";function y(e){var{components:n}=e,t=s(e,["components"]);return(0,a.yg)(p,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"query"},"Query"),(0,a.yg)("h2",{id:"aspects"},"Aspects"),(0,a.yg)("h3",{id:"queryproperties"},"queryProperties"),(0,a.yg)("p",null,"Information about a Query against one or more data assets (e.g. Tables or Views)."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "queryProperties"\n  },\n  "name": "QueryProperties",\n  "namespace": "com.linkedin.query",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "QueryStatement",\n        "namespace": "com.linkedin.query",\n        "fields": [\n          {\n            "type": "string",\n            "name": "value",\n            "doc": "The query text"\n          },\n          {\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "SQL": "A SQL Query"\n              },\n              "name": "QueryLanguage",\n              "namespace": "com.linkedin.query",\n              "symbols": [\n                "SQL"\n              ]\n            },\n            "name": "language",\n            "default": "SQL",\n            "doc": "The language of the Query, e.g. SQL."\n          }\n        ],\n        "doc": "A query statement against one or more data assets."\n      },\n      "name": "statement",\n      "doc": "The Query Statement."\n    },\n    {\n      "Searchable": {},\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "MANUAL": "The query was entered manually by a user (via the UI).",\n          "SYSTEM": "The query was discovered by a crawler."\n        },\n        "name": "QuerySource",\n        "namespace": "com.linkedin.query",\n        "symbols": [\n          "MANUAL",\n          "SYSTEM"\n        ]\n      },\n      "name": "source",\n      "doc": "The source of the Query"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "name",\n      "default": null,\n      "doc": "Optional display name to identify the query."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "The Query description."\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "createdBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "createdAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "doc": "Audit stamp capturing the time and actor who created the Query."\n    },\n    {\n      "Searchable": {\n        "/actor": {\n          "fieldName": "lastModifiedBy",\n          "fieldType": "URN"\n        },\n        "/time": {\n          "fieldName": "lastModifiedAt",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "lastModified",\n      "doc": "Audit stamp capturing the time and actor who last modified the Query."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "origin",\n      "default": null,\n      "doc": "The origin of the Query.\\nThis is the source of the Query (e.g. a View, Stored Procedure, dbt Model, etc.) that the Query was created from."\n    }\n  ],\n  "doc": "Information about a Query against one or more data assets (e.g. Tables or Views)."\n}\n'))),(0,a.yg)("h3",{id:"querysubjects"},"querySubjects"),(0,a.yg)("p",null,"Information about the subjects of a particular Query, i.e. the assets\nbeing queried."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "querySubjects"\n  },\n  "name": "QuerySubjects",\n  "namespace": "com.linkedin.query",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "QuerySubject",\n          "namespace": "com.linkedin.query",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "dataset",\n                  "schemaField"\n                ],\n                "name": "IsAssociatedWith"\n              },\n              "Searchable": {\n                "fieldName": "entities",\n                "fieldType": "URN"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "entity",\n              "doc": "An entity which is the subject of a query."\n            }\n          ],\n          "doc": "A single subject of a particular query.\\nIn the future, we may evolve this model to include richer details\\nabout the Query Subject in relation to the query."\n        }\n      },\n      "name": "subjects",\n      "doc": "One or more subjects of the query.\\n\\nIn single-asset queries (e.g. table select), this will contain the Table reference\\nand optionally schema field references.\\n\\nIn multi-asset queries (e.g. table joins), this may contain multiple Table references\\nand optionally schema field references."\n    }\n  ],\n  "doc": "Information about the subjects of a particular Query, i.e. the assets\\nbeing queried."\n}\n'))),(0,a.yg)("h3",{id:"status"},"status"),(0,a.yg)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,a.yg)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,a.yg)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "platformInstance",\n        "fieldType": "URN",\n        "filterNameOverride": "Platform Instance"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,a.yg)("h3",{id:"subtypes"},"subTypes"),(0,a.yg)("p",null,"Sub Types. Use this aspect to specialize a generic Entity\ne.g. Making a Dataset also be a View or also be a LookerExplore"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "subTypes"\n  },\n  "name": "SubTypes",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldType": "KEYWORD",\n          "filterNameOverride": "Sub Type",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "typeNames",\n      "doc": "The names of the specific types."\n    }\n  ],\n  "doc": "Sub Types. Use this aspect to specialize a generic Entity\\ne.g. Making a Dataset also be a View or also be a LookerExplore"\n}\n'))),(0,a.yg)("h3",{id:"queryusagestatistics-timeseries"},"queryUsageStatistics (Timeseries)"),(0,a.yg)("p",null,"Stats corresponding to dataset's usage."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "queryUsageStatistics",\n    "type": "timeseries"\n  },\n  "name": "QueryUsageStatistics",\n  "namespace": "com.linkedin.query",\n  "fields": [\n    {\n      "type": "long",\n      "name": "timestampMillis",\n      "doc": "The event timestamp field as epoch at UTC in milli seconds."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "TimeWindowSize",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "name": "CalendarInterval",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "SECOND",\n                  "MINUTE",\n                  "HOUR",\n                  "DAY",\n                  "WEEK",\n                  "MONTH",\n                  "QUARTER",\n                  "YEAR"\n                ]\n              },\n              "name": "unit",\n              "doc": "Interval unit such as minute/hour/day etc."\n            },\n            {\n              "type": "int",\n              "name": "multiple",\n              "default": 1,\n              "doc": "How many units. Defaults to 1."\n            }\n          ],\n          "doc": "Defines the size of a time window."\n        }\n      ],\n      "name": "eventGranularity",\n      "default": null,\n      "doc": "Granularity of the event if applicable"\n    },\n    {\n      "type": [\n        {\n          "type": "record",\n          "name": "PartitionSpec",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "TimeseriesField": {},\n              "type": "string",\n              "name": "partition",\n              "doc": "A unique id / value for the partition for which statistics were collected,\\ngenerated by applying the key definition to a given row."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "TimeWindow",\n                  "namespace": "com.linkedin.timeseries",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "startTimeMillis",\n                      "doc": "Start time as epoch at UTC."\n                    },\n                    {\n                      "type": "com.linkedin.timeseries.TimeWindowSize",\n                      "name": "length",\n                      "doc": "The length of the window."\n                    }\n                  ]\n                }\n              ],\n              "name": "timePartition",\n              "default": null,\n              "doc": "Time window of the partition, if we are able to extract it from the partition key."\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "name": "PartitionType",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "FULL_TABLE",\n                  "QUERY",\n                  "PARTITION"\n                ]\n              },\n              "name": "type",\n              "default": "PARTITION",\n              "doc": "Unused!"\n            }\n          ],\n          "doc": "A reference to a specific partition in a dataset."\n        },\n        "null"\n      ],\n      "name": "partitionSpec",\n      "default": {\n        "partition": "FULL_TABLE_SNAPSHOT",\n        "type": "FULL_TABLE",\n        "timePartition": null\n      },\n      "doc": "The optional partition specification."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "messageId",\n      "default": null,\n      "doc": "The optional messageId, if provided serves as a custom user-defined unique identifier for an aspect value."\n    },\n    {\n      "TimeseriesField": {},\n      "type": [\n        "null",\n        "int"\n      ],\n      "name": "queryCount",\n      "default": null,\n      "doc": "Total query count in this bucket"\n    },\n    {\n      "TimeseriesField": {},\n      "type": [\n        "null",\n        "double"\n      ],\n      "name": "queryCost",\n      "default": null,\n      "doc": "Query cost for this query and bucket"\n    },\n    {\n      "TimeseriesField": {},\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "lastExecutedAt",\n      "default": null,\n      "doc": "Last executed timestamp"\n    },\n    {\n      "TimeseriesField": {},\n      "type": [\n        "null",\n        "int"\n      ],\n      "name": "uniqueUserCount",\n      "default": null,\n      "doc": "Unique user count"\n    },\n    {\n      "TimeseriesFieldCollection": {\n        "key": "user"\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": {\n            "type": "record",\n            "name": "DatasetUserUsageCounts",\n            "namespace": "com.linkedin.dataset",\n            "fields": [\n              {\n                "java": {\n                  "class": "com.linkedin.common.urn.Urn"\n                },\n                "type": "string",\n                "name": "user",\n                "doc": "The unique id of the user."\n              },\n              {\n                "TimeseriesField": {},\n                "type": "int",\n                "name": "count",\n                "doc": "Number of times the dataset has been used by the user."\n              },\n              {\n                "TimeseriesField": {},\n                "type": [\n                  "null",\n                  "string"\n                ],\n                "name": "userEmail",\n                "default": null,\n                "doc": "If user_email is set, we attempt to resolve the user\'s urn upon ingest"\n              }\n            ],\n            "doc": "Records a single user\'s usage counts for a given resource"\n          }\n        }\n      ],\n      "name": "userCounts",\n      "default": null,\n      "doc": "Users within this bucket, with frequency counts"\n    }\n  ],\n  "doc": "Stats corresponding to dataset\'s usage."\n}\n'))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"outgoing"},"Outgoing"),(0,a.yg)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IsAssociatedWith"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"querySubjects.subjects.entity")),(0,a.yg)("li",{parentName:"ul"},"SchemaField via ",(0,a.yg)("inlineCode",{parentName:"li"},"querySubjects.subjects.entity"))))),(0,a.yg)("h2",{id:"global-metadata-model"},(0,a.yg)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}y.isMDXComponent=!0}}]);