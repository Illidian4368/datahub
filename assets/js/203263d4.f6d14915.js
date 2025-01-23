"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[86359],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(m,i(i({ref:t},g),{},{components:n})):a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(96540);var a=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},l="Introduction to Metadata Ingestion",c={unversionedId:"metadata-ingestion/README",id:"metadata-ingestion/README",title:"Introduction to Metadata Ingestion",description:"Please see our Integrations page to browse our ingestion sources and filter on their features.",source:"@site/genDocs/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md",tags:[],version:"current",frontMatter:{slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"v0.1.69",permalink:"/docs/managed-datahub/release-notes/v_0_1_69"},next:{title:"Recipes",permalink:"/docs/metadata-ingestion/recipe_overview"}},g={},u=[{value:"Integration Methods",id:"integration-methods",level:2},{value:"Types of Integration",id:"types-of-integration",level:2},{value:"Push-based Integration",id:"push-based-integration",level:3},{value:"Pull-based Integration",id:"pull-based-integration",level:3},{value:"Core Concepts",id:"core-concepts",level:2}],d={toc:u},p="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction-to-metadata-ingestion"},"Introduction to Metadata Ingestion"),(0,a.yg)("admonition",{title:"Find Integration Source",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Please see our ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/integrations"},"Integrations page"))," to browse our ingestion sources and filter on their features.")),(0,a.yg)("h2",{id:"integration-methods"},"Integration Methods"),(0,a.yg)("p",null,"DataHub offers three methods for data ingestion:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/ui-ingestion"},"UI Ingestion")," : Easily configure and execute a metadata ingestion pipeline through the UI. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/cli-ingestion"},"CLI Ingestion guide")," : Configure the ingestion pipeline using YAML and execute by it through CLI. "),(0,a.yg)("li",{parentName:"ul"},"SDK-based ingestion : Use ",(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/as-a-library"},"Python Emitter")," or ",(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-integration/java/as-a-library"},"Java emitter")," to programmatically control the ingestion pipelines. ")),(0,a.yg)("h2",{id:"types-of-integration"},"Types of Integration"),(0,a.yg)("p",null,"Integration can be divided into two concepts based on the method:"),(0,a.yg)("h3",{id:"push-based-integration"},"Push-based Integration"),(0,a.yg)("p",null,"Push-based integrations allow you to emit metadata directly from your data systems when metadata changes.\nExamples of push-based integrations include ",(0,a.yg)("a",{parentName:"p",href:"/docs/lineage/airflow"},"Airflow"),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-integration/java/acryl-spark-lineage"},"Spark"),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/integration_docs/great-expectations"},"Great Expectations")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-integration/java/datahub-protobuf"},"Protobuf Schemas"),'. This allows you to get low-latency metadata integration from the "active" agents in your data ecosystem.'),(0,a.yg)("h3",{id:"pull-based-integration"},"Pull-based Integration"),(0,a.yg)("p",null,'Pull-based integrations allow you to "crawl" or "ingest" metadata from the data systems by connecting to them and extracting metadata in a batch or incremental-batch manner.\nExamples of pull-based integrations include BigQuery, Snowflake, Looker, Tableau and many others.'),(0,a.yg)("h2",{id:"core-concepts"},"Core Concepts"),(0,a.yg)("p",null,"The following are the core concepts related to ingestion:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_overview"},"Sources"),": Data systems from which extract metadata. (e.g. BigQuery, MySQL)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_overview"},"Sinks"),": Destination for metadata (e.g. File, DataHub)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/recipe_overview"},"Recipe"),": The main configuration for ingestion in the form or .yaml file")),(0,a.yg)("p",null,"For more advanced guides, please refer to the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/developing"},"Developing on Metadata Ingestion")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/adding-source"},"Adding a Metadata Ingestion Source")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/intro"},"Using Transformers"))))}m.isMDXComponent=!0}}]);