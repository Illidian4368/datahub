"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43552],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},17158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"v0.3.2",slug:"/managed-datahub/release-notes/v_0_3_2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_2.md"},s="v0.3.2",u={unversionedId:"docs/managed-datahub/release-notes/v_0_3_2",id:"docs/managed-datahub/release-notes/v_0_3_2",title:"v0.3.2",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_3_2.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_3_2",permalink:"/docs/managed-datahub/release-notes/v_0_3_2",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_2.md",tags:[],version:"current",frontMatter:{title:"v0.3.2",slug:"/managed-datahub/release-notes/v_0_3_2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_2.md"},sidebar:"overviewSidebar",previous:{title:"v0.3.3",permalink:"/docs/managed-datahub/release-notes/v_0_3_3"},next:{title:"v0.3.1",permalink:"/docs/managed-datahub/release-notes/v_0_3_1"}},c={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI/SDK",id:"recommended-clisdk",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],p={toc:d},b="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"v032"},"v0.3.2"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,r.yg)("p",null,"16-May-2024"),(0,r.yg)("h2",{id:"recommended-clisdk"},"Recommended CLI/SDK"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"v0.13.2.3")," with release notes at ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.13.2.3"},"https://github.com/acryldata/datahub/releases/tag/v0.13.2.3"))),(0,r.yg)("p",null,"If you are using an older CLI/SDK version then please upgrade it. This applies for all CLI/SDK usages, if you are using it through your terminal, github actions, airflow, in python SDK somewhere, Java SKD etc. This is a strong recommendation to upgrade as we keep on pushing fixes in the CLI and it helps us support you better."),(0,r.yg)("h2",{id:"release-changelog"},"Release Changelog"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ",(0,r.yg)("inlineCode",{parentName:"li"},"v0.3.1")," these changes from OSS DataHub ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/57de905c66b6992aefb2051708fa83898fa82cec...6ed21bd1bc70a3ceb7dddb43ea7db4ca56874547"},"https://github.com/datahub-project/datahub/compare/57de905c66b6992aefb2051708fa83898fa82cec...6ed21bd1bc70a3ceb7dddb43ea7db4ca56874547")," have been pulled in."),(0,r.yg)("li",{parentName:"ul"},"OpenAPI Entitites v3 (Entity-registry generated endpoints)"),(0,r.yg)("li",{parentName:"ul"},"Business Attributes Support (disabled by default)"),(0,r.yg)("li",{parentName:"ul"},"Graph Retriever (validators, mutators, side-effects)"),(0,r.yg)("li",{parentName:"ul"},"New Lineage Graphql Endpoints (optimizations for the UI)"),(0,r.yg)("li",{parentName:"ul"},"Metadata Tests Tracks Unique Hash"),(0,r.yg)("li",{parentName:"ul"},"SCIM Support"),(0,r.yg)("li",{parentName:"ul"},"V3 CLL Across DataJob Nodes Upgrade"),(0,r.yg)("li",{parentName:"ul"},"Subscribe to assertion errors: Get notified when assertion errors occur"),(0,r.yg)("li",{parentName:"ul"},"Group owners are labeled in slack incident notifications"),(0,r.yg)("li",{parentName:"ul"},"Field assertions now raise incidents when they go in error (if configured to do so)"),(0,r.yg)("li",{parentName:"ul"},"Assertion timeline viz handles missing data more gracefully"),(0,r.yg)("li",{parentName:"ul"},"Freshness assertions on Snowflake using the AUDIT_LOG will no longer consider no-op queries as valid 'updates' to the dataset"),(0,r.yg)("li",{parentName:"ul"},"[NEW]"," Schema Assertions: Allows users to configure a set of columns and expected types and verify that they actually exist in the tabe schema. Disabled by default. Please reach out to Acryl team if you wish to have this enabled."),(0,r.yg)("li",{parentName:"ul"},"Adding polish and fixing bugs throughout the new UI"),(0,r.yg)("li",{parentName:"ul"},"Ability to add and remove lineage manually in the new UI"),(0,r.yg)("li",{parentName:"ul"},"Ability to configure the default time filter on lineage"),(0,r.yg)("li",{parentName:"ul"},"Ability to collapse lineage in the lineage graph (new UI)"),(0,r.yg)("li",{parentName:"ul"},"Support rich text on metadata form descriptions")))}g.isMDXComponent=!0}}]);