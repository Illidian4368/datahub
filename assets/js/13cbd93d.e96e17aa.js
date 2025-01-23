"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8712],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,g=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Migrate Graph Service Implementation to Elasticsearch",slug:"/how/migrating-graph-service-implementation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md"},l="Migrate Graph Service Implementation to Elasticsearch",s={unversionedId:"docs/how/migrating-graph-service-implementation",id:"version-0.15.0/docs/how/migrating-graph-service-implementation",title:"Migrate Graph Service Implementation to Elasticsearch",description:"We currently support either Elasticsearch or Neo4j as backend implementations for the graph service. We recommend",source:"@site/versioned_docs/version-0.15.0/docs/how/migrating-graph-service-implementation.md",sourceDirName:"docs/how",slug:"/how/migrating-graph-service-implementation",permalink:"/docs/0.15.0/how/migrating-graph-service-implementation",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md",tags:[],version:"0.15.0",frontMatter:{title:"Migrate Graph Service Implementation to Elasticsearch",slug:"/how/migrating-graph-service-implementation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/migrating-graph-service-implementation.md"},sidebar:"overviewSidebar",previous:{title:"React Analytics",permalink:"/docs/0.15.0/datahub-web-react/src/app/analytics"},next:{title:"SchemaFieldPath Specification (Version 2)",permalink:"/docs/0.15.0/advanced/field-path-spec-v2"}},p={},u=[{value:"Docker-compose",id:"docker-compose",level:2},{value:"Helm",id:"helm",level:2}],m={toc:u},h="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"migrate-graph-service-implementation-to-elasticsearch"},"Migrate Graph Service Implementation to Elasticsearch"),(0,n.yg)("p",null,"We currently support either Elasticsearch or Neo4j as backend implementations for the graph service. We recommend\nElasticsearch for those looking for a lighter deployment or do not want to manage a Neo4j database.\nIf you started using Neo4j as your graph service backend, here is how you can migrate to Elasticsearch."),(0,n.yg)("h2",{id:"docker-compose"},"Docker-compose"),(0,n.yg)("p",null,"If you are running your instance through docker locally, you will want to spin up your Datahub instance with\nelasticsearch as the backend. On a clean start, this happens by default. However, if you've written data to\nNeo4j you need to explicitly ask DataHub to start in Elastic mode."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-aidl"},"datahub docker quickstart --graph-service-impl=elasticsearch\n")),(0,n.yg)("p",null,"Next, run the following command from root to rebuild your graph index."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices\n")),(0,n.yg)("p",null,"After this command completes, you should be migrated. Open up the DataHub UI and verify your relationships are\nvisible."),(0,n.yg)("p",null,"Once you confirm the migration is successful, you must remove your neo4j volume by running"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-aidl"},"docker volume rm datahub_neo4jdata\n")),(0,n.yg)("p",null,"This prevents your DataHub instance from coming up in neo4j mode in the future."),(0,n.yg)("h2",{id:"helm"},"Helm"),(0,n.yg)("p",null,"First, adjust your helm variables to turn off neo4j and set your graph_service_impl to elasticsearch."),(0,n.yg)("p",null,"To turn off neo4j in your prerequisites file, set ",(0,n.yg)("inlineCode",{parentName:"p"},"neo4j-community"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),"\nin this ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/prerequisites/values.yaml#L54"},"values.yaml"),"."),(0,n.yg)("p",null,"Then, set ",(0,n.yg)("inlineCode",{parentName:"p"},"graph_service_impl")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"elasticsearch")," in the\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/values.yaml#L63"},"values.yaml")," of datahub."),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/deploy/kubernetes#components"},"deployment helm guide")," for more details on how to\nset up your helm deployment."),(0,n.yg)("p",null,"Finally, follow the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/how/restore-indices"},"restore-indices helm guide")," to re-build\nyour graph index."),(0,n.yg)("p",null,"Once the job completes, your data will be migrated."))}g.isMDXComponent=!0}}]);