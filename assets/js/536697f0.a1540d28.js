"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82729],{651:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>g});t(96540);var n=t(15680),s=t(53720),l=t(5400);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const o={sidebar_position:12,title:"DataHubGc",slug:"/generated/ingestion/sources/datahubgc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md"},d="DataHubGc",c={unversionedId:"docs/generated/ingestion/sources/datahubgc",id:"version-0.15.0/docs/generated/ingestion/sources/datahubgc",title:"DataHubGc",description:"Testing",source:"@site/versioned_docs/version-0.15.0/docs/generated/ingestion/sources/datahubgc.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/datahubgc",permalink:"/docs/0.15.0/generated/ingestion/sources/datahubgc",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md",tags:[],version:"0.15.0",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"DataHubGc",slug:"/generated/ingestion/sources/datahubgc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahubgc.md"},sidebar:"overviewSidebar",previous:{title:"DataHub",permalink:"/docs/0.15.0/generated/ingestion/sources/datahub"},next:{title:"dbt",permalink:"/docs/0.15.0/generated/ingestion/sources/dbt"}},y={},g=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:g},u="wrapper";function f(e){var{components:a}=e,t=p(e,["components"]);return(0,n.yg)(u,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){i(e,a,t[a])}))}return e}({},m,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"datahubgc"},"DataHubGc"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,n.yg)("p",null,"DataHubGcSource is responsible for performing garbage collection tasks on DataHub."),(0,n.yg)("p",null,"This source performs the following tasks:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Cleans up expired tokens."),(0,n.yg)("li",{parentName:"ol"},"Truncates Elasticsearch indices based on configuration."),(0,n.yg)("li",{parentName:"ol"},"Cleans up data processes and soft-deleted entities if configured.")),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-gc")," source works out of the box with ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"cleanup_expired_tokens"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to clean up expired tokens or not ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"dry_run"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to perform a dry run or not. This is only supported for dataprocess cleanup and soft deleted entities cleanup. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"truncate_index_older_than_days"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Indices older than this number of days will be truncated ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"30")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"truncate_indices"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to truncate elasticsearch indices or not which can be safely truncated ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"truncation_sleep_between_seconds"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Sleep between truncation monitoring. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"30")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"truncation_watch_until"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Wait for truncation of indices until this number of documents are left ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10000")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"dataprocess_cleanup"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"DataProcessCleanupConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Configuration for data process cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"batch_size"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of entities to get in a batch from API ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"500")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"delay"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"number"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Delay between each batch ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"0.25")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"delete_empty_data_flows"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to delete Data Flows without runs ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"delete_empty_data_jobs"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to delete Data Jobs without runs ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"hard_delete_entities"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to hard delete entities ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"keep_last_n"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of latest aspects to keep ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"5")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"max_workers"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of workers to use for deletion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"retention_days"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of days to retain metadata in DataHub ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup."),(0,n.yg)("span",{className:"path-main"},"aspects_to_clean"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of aspect names to clean up ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'","DataprocessInstance","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"dataprocess_cleanup.aspects_to_clean."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"execution_request_cleanup"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"DatahubExecutionRequestCleanupConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Configuration for execution request cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"execution_request_cleanup."),(0,n.yg)("span",{className:"path-main"},"batch_read_size"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of records per read operation ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"100")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"execution_request_cleanup."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Global switch for this cleanup task ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"execution_request_cleanup."),(0,n.yg)("span",{className:"path-main"},"keep_history_max_count"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of execution requests to keep, per ingestion source ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"1000")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"execution_request_cleanup."),(0,n.yg)("span",{className:"path-main"},"keep_history_max_days"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of days to keep execution requests for, per ingestion source ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"30")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"execution_request_cleanup."),(0,n.yg)("span",{className:"path-main"},"keep_history_min_count"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Minimum number of execution requests to keep, per ingestion source ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"soft_deleted_entities_cleanup"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"SoftDeletedEntitiesCleanupConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Configuration for soft deleted entities cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"batch_size"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of entities to get in a batch from GraphQL ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"500")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"delay"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"number"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Delay between each batch ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"0.25")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"limit_entities_delete"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Max number of entities to delete. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"25000")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"max_workers"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of workers to use for deletion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"platform"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Platform to cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"query"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Query to filter entities")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"retention_days"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of days to retain metadata in DataHub ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"10")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"runtime_limit_seconds"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Runtime limit in seconds")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Environment to cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup."),(0,n.yg)("span",{className:"path-main"},"entity_types"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of entity types to cleanup")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"soft_deleted_entities_cleanup.entity_types."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})))))),(0,n.yg)(l.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DataHubGcSourceConfig",\n  "type": "object",\n  "properties": {\n    "dry_run": {\n      "title": "Dry Run",\n      "description": "Whether to perform a dry run or not. This is only supported for dataprocess cleanup and soft deleted entities cleanup.",\n      "default": false,\n      "type": "boolean"\n    },\n    "cleanup_expired_tokens": {\n      "title": "Cleanup Expired Tokens",\n      "description": "Whether to clean up expired tokens or not",\n      "default": true,\n      "type": "boolean"\n    },\n    "truncate_indices": {\n      "title": "Truncate Indices",\n      "description": "Whether to truncate elasticsearch indices or not which can be safely truncated",\n      "default": true,\n      "type": "boolean"\n    },\n    "truncate_index_older_than_days": {\n      "title": "Truncate Index Older Than Days",\n      "description": "Indices older than this number of days will be truncated",\n      "default": 30,\n      "type": "integer"\n    },\n    "truncation_watch_until": {\n      "title": "Truncation Watch Until",\n      "description": "Wait for truncation of indices until this number of documents are left",\n      "default": 10000,\n      "type": "integer"\n    },\n    "truncation_sleep_between_seconds": {\n      "title": "Truncation Sleep Between Seconds",\n      "description": "Sleep between truncation monitoring.",\n      "default": 30,\n      "type": "integer"\n    },\n    "dataprocess_cleanup": {\n      "title": "Dataprocess Cleanup",\n      "description": "Configuration for data process cleanup",\n      "allOf": [\n        {\n          "$ref": "#/definitions/DataProcessCleanupConfig"\n        }\n      ]\n    },\n    "soft_deleted_entities_cleanup": {\n      "title": "Soft Deleted Entities Cleanup",\n      "description": "Configuration for soft deleted entities cleanup",\n      "allOf": [\n        {\n          "$ref": "#/definitions/SoftDeletedEntitiesCleanupConfig"\n        }\n      ]\n    },\n    "execution_request_cleanup": {\n      "title": "Execution Request Cleanup",\n      "description": "Configuration for execution request cleanup",\n      "allOf": [\n        {\n          "$ref": "#/definitions/DatahubExecutionRequestCleanupConfig"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DataProcessCleanupConfig": {\n      "title": "DataProcessCleanupConfig",\n      "type": "object",\n      "properties": {\n        "retention_days": {\n          "title": "Retention Days",\n          "description": "Number of days to retain metadata in DataHub",\n          "default": 10,\n          "type": "integer"\n        },\n        "aspects_to_clean": {\n          "title": "Aspects To Clean",\n          "description": "List of aspect names to clean up",\n          "default": [\n            "DataprocessInstance"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "keep_last_n": {\n          "title": "Keep Last N",\n          "description": "Number of latest aspects to keep",\n          "default": 5,\n          "type": "integer"\n        },\n        "delete_empty_data_jobs": {\n          "title": "Delete Empty Data Jobs",\n          "description": "Whether to delete Data Jobs without runs",\n          "default": false,\n          "type": "boolean"\n        },\n        "delete_empty_data_flows": {\n          "title": "Delete Empty Data Flows",\n          "description": "Whether to delete Data Flows without runs",\n          "default": false,\n          "type": "boolean"\n        },\n        "hard_delete_entities": {\n          "title": "Hard Delete Entities",\n          "description": "Whether to hard delete entities",\n          "default": false,\n          "type": "boolean"\n        },\n        "batch_size": {\n          "title": "Batch Size",\n          "description": "The number of entities to get in a batch from API",\n          "default": 500,\n          "type": "integer"\n        },\n        "max_workers": {\n          "title": "Max Workers",\n          "description": "The number of workers to use for deletion",\n          "default": 10,\n          "type": "integer"\n        },\n        "delay": {\n          "title": "Delay",\n          "description": "Delay between each batch",\n          "default": 0.25,\n          "type": "number"\n        }\n      },\n      "additionalProperties": false\n    },\n    "SoftDeletedEntitiesCleanupConfig": {\n      "title": "SoftDeletedEntitiesCleanupConfig",\n      "type": "object",\n      "properties": {\n        "retention_days": {\n          "title": "Retention Days",\n          "description": "Number of days to retain metadata in DataHub",\n          "default": 10,\n          "type": "integer"\n        },\n        "batch_size": {\n          "title": "Batch Size",\n          "description": "The number of entities to get in a batch from GraphQL",\n          "default": 500,\n          "type": "integer"\n        },\n        "delay": {\n          "title": "Delay",\n          "description": "Delay between each batch",\n          "default": 0.25,\n          "type": "number"\n        },\n        "max_workers": {\n          "title": "Max Workers",\n          "description": "The number of workers to use for deletion",\n          "default": 10,\n          "type": "integer"\n        },\n        "entity_types": {\n          "title": "Entity Types",\n          "description": "List of entity types to cleanup",\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "platform": {\n          "title": "Platform",\n          "description": "Platform to cleanup",\n          "type": "string"\n        },\n        "env": {\n          "title": "Env",\n          "description": "Environment to cleanup",\n          "type": "string"\n        },\n        "query": {\n          "title": "Query",\n          "description": "Query to filter entities",\n          "type": "string"\n        },\n        "limit_entities_delete": {\n          "title": "Limit Entities Delete",\n          "description": "Max number of entities to delete.",\n          "default": 25000,\n          "type": "integer"\n        },\n        "runtime_limit_seconds": {\n          "title": "Runtime Limit Seconds",\n          "description": "Runtime limit in seconds",\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    },\n    "DatahubExecutionRequestCleanupConfig": {\n      "title": "DatahubExecutionRequestCleanupConfig",\n      "type": "object",\n      "properties": {\n        "keep_history_min_count": {\n          "title": "Keep History Min Count",\n          "description": "Minimum number of execution requests to keep, per ingestion source",\n          "default": 10,\n          "type": "integer"\n        },\n        "keep_history_max_count": {\n          "title": "Keep History Max Count",\n          "description": "Maximum number of execution requests to keep, per ingestion source",\n          "default": 1000,\n          "type": "integer"\n        },\n        "keep_history_max_days": {\n          "title": "Keep History Max Days",\n          "description": "Maximum number of days to keep execution requests for, per ingestion source",\n          "default": 30,\n          "type": "integer"\n        },\n        "batch_read_size": {\n          "title": "Batch Read Size",\n          "description": "Number of records per read operation",\n          "default": 100,\n          "type": "integer"\n        },\n        "enabled": {\n          "title": "Enabled",\n          "description": "Global switch for this cleanup task",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.gc.datahub_gc.DataHubGcSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/gc/datahub_gc.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for DataHubGc, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);