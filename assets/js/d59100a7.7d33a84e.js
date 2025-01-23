"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21844],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(96540);var i=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Aspect Versioning",slug:"/advanced/aspect-versioning",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md"},l="Aspect Versioning",c={unversionedId:"docs/advanced/aspect-versioning",id:"version-0.14.1/docs/advanced/aspect-versioning",title:"Aspect Versioning",description:"As each version of metadata aspect is immutable, any update to an existing aspect results in the creation of a new version. Typically one would expect the version number increases sequentially with the largest version number being the latest version, i.e. v1 (oldest), v2 (second oldest), ..., vN (latest). However, this approach results in major challenges in both rest.li modeling & transaction isolation and therefore requires a rethinking.",source:"@site/versioned_docs/version-0.14.1/docs/advanced/aspect-versioning.md",sourceDirName:"docs/advanced",slug:"/advanced/aspect-versioning",permalink:"/docs/0.14.1/advanced/aspect-versioning",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md",tags:[],version:"0.14.1",frontMatter:{title:"Aspect Versioning",slug:"/advanced/aspect-versioning",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md"},sidebar:"overviewSidebar",previous:{title:"Evaluate Tests Endpoint",permalink:"/docs/0.14.1/api/restli/evaluate-tests"},next:{title:"Python Emitter",permalink:"/docs/0.14.1/metadata-ingestion/as-a-library"}},p={},u=[{value:"Rest.li Modeling",id:"restli-modeling",level:2},{value:"Transaction Isolation",id:"transaction-isolation",level:2},{value:"Solution: Version 0",id:"solution-version-0",level:2},{value:"Rest.li Modeling",id:"restli-modeling-1",level:3},{value:"Transaction Isolation",id:"transaction-isolation-1",level:3}],d={toc:u},g="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,i.yg)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"aspect-versioning"},"Aspect Versioning"),(0,i.yg)("p",null,"As each version of ",(0,i.yg)("a",{parentName:"p",href:"/docs/0.14.1/what/aspect"},"metadata aspect")," is immutable, any update to an existing aspect results in the creation of a new version. Typically one would expect the version number increases sequentially with the largest version number being the latest version, i.e. ",(0,i.yg)("inlineCode",{parentName:"p"},"v1")," (oldest), ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," (second oldest), ..., ",(0,i.yg)("inlineCode",{parentName:"p"},"vN")," (latest). However, this approach results in major challenges in both rest.li modeling & transaction isolation and therefore requires a rethinking."),(0,i.yg)("h2",{id:"restli-modeling"},"Rest.li Modeling"),(0,i.yg)("p",null,"As it's common to create dedicated rest.li sub-resources for a specific aspect, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"/datasets/{datasetKey}/ownership"),", the concept of versions become an interesting modeling question. Should the sub-resource be a ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/modeling#simple"},"Simple")," or a ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/modeling#collection"},"Collection")," type?"),(0,i.yg)("p",null,"If Simple, the ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#get"},"GET")," method is expected to return the latest version, and the only way to retrieve non-latest versions is through a custom ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#action"},"ACTION")," method, which is going against the ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," principle. As a result, a Simple sub-resource doesn't seem to a be a good fit."),(0,i.yg)("p",null,"If Collection, the version number naturally becomes the key so it's easy to retrieve specific version number using the typical GET method. It's also easy to list all versions using the standard ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#get_all"},"GET_ALL")," method or get a set of versions via ",(0,i.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#batch_get"},"BATCH_GET"),". However, Collection resources don't support a simple way to get the latest/largest key directly. To achieve that, one must do one of the following"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a GET_ALL (assuming descending key order) with a page size of 1"),(0,i.yg)("li",{parentName:"ul"},"a ",(0,i.yg)("a",{parentName:"li",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#finder"},"FINDER")," with special parameters and a page size of 1"),(0,i.yg)("li",{parentName:"ul"},"a custom ACTION method again")),(0,i.yg)("p",null,"None of these options seems like a natural way to ask for the latest version of an aspect, which is one of the most common use cases."),(0,i.yg)("h2",{id:"transaction-isolation"},"Transaction Isolation"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)"},"Transaction isolation")," is a complex topic so make sure to familiarize yourself with the basics first. "),(0,i.yg)("p",null,"To support concurrent update of a metadata aspect, the following pseudo DB operations must be run in a single transaction,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"1. Retrieve the current max version (Vmax)\n2. Write the new value as (Vmax + 1)\n")),(0,i.yg)("p",null,"Operation 1 above can easily suffer from ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads"},"Phantom Reads"),". This subsequently leads to Operation 2 computing the incorrect version and thus overwrites an existing version instead of creating a new one."),(0,i.yg)("p",null,"One way to solve this is by enforcing ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Serializable"},"Serializable")," isolation level in DB at the ",(0,i.yg)("a",{parentName:"p",href:"https://logicalread.com/optimize-mysql-perf-part-2-mc13/#.XjxSRSlKh1N"},"cost of performance"),". In reality, very few DB even supports this level of isolation, especially for distributed document stores. It's more common to support ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Repeatable_reads"},"Repeatable Reads")," or ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed"},"Read Committed")," isolation levels\u2014sadly neither would help in this case."),(0,i.yg)("p",null,"Another possible solution is to transactionally keep track of ",(0,i.yg)("inlineCode",{parentName:"p"},"Vmax")," directly in a separate table to avoid the need to compute that through a ",(0,i.yg)("inlineCode",{parentName:"p"},"select")," (thus prevent Phantom Reads). However, cross-table/document/entity transaction is not a feature supported by all distributed document stores, which precludes this as a generalized solution."),(0,i.yg)("h2",{id:"solution-version-0"},"Solution: Version 0"),(0,i.yg)("p",null,'The solution to both challenges turns out to be surprisingly simple. Instead of using a "floating" version number to represent the latest version, one can use a "fixed/sentinel" version number instead. In this case we choose Version 0 as we want all non-latest versions to still keep increasing sequentially. In other words, it\'d be ',(0,i.yg)("inlineCode",{parentName:"p"},"v0")," (latest), ",(0,i.yg)("inlineCode",{parentName:"p"},"v1")," (oldest), ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," (second oldest), etc. Alternatively, you can also simply view all the non-zero versions as an audit trail."),(0,i.yg)("p",null,"Let's examine how Version 0 can solve the aforementioned challenges."),(0,i.yg)("h3",{id:"restli-modeling-1"},"Rest.li Modeling"),(0,i.yg)("p",null,"With Version 0, getting the latest version becomes calling the GET method of a Collection aspect-specific sub-resource with a deterministic key, e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"/datasets/{datasetkey}/ownership/0"),", which is a lot more natural than using GET_ALL or FINDER."),(0,i.yg)("h3",{id:"transaction-isolation-1"},"Transaction Isolation"),(0,i.yg)("p",null,"The pseudo DB operations change to the following transaction block with version 0,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"1. Retrieve v0 of the aspect\n2. Retrieve the current max version (Vmax)\n3. Write the old value back as (Vmax + 1)\n4. Write the new value back as v0\n")),(0,i.yg)("p",null,"While Operation 2 still suffers from potential Phantom Reads and thus corrupting existing version in Operation 3, Repeatable Reads isolation level will ensure that the transaction fails due to ",(0,i.yg)("a",{parentName:"p",href:"https://codingsight.com/the-lost-update-problem-in-concurrent-transactions/"},"Lost Update")," detected in Operation 4. Note that this happens to also be the ",(0,i.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html"},"default isolation level")," for InnoDB in MySQL."))}h.isMDXComponent=!0}}]);