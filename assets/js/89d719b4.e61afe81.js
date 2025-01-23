"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22069],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},44510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"v0.2.10",slug:"/managed-datahub/release-notes/v_0_2_10",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md"},s="v0.2.10",u={unversionedId:"docs/managed-datahub/release-notes/v_0_2_10",id:"docs/managed-datahub/release-notes/v_0_2_10",title:"v0.2.10",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_10.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_10",permalink:"/docs/managed-datahub/release-notes/v_0_2_10",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md",tags:[],version:"current",frontMatter:{title:"v0.2.10",slug:"/managed-datahub/release-notes/v_0_2_10",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.11",permalink:"/docs/managed-datahub/release-notes/v_0_2_11"},next:{title:"v0.2.9",permalink:"/docs/managed-datahub/release-notes/v_0_2_9"}},c={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI/SDK",id:"recommended-clisdk",level:2},{value:"Release Changelog",id:"release-changelog",level:2},{value:"Some notable features in this SaaS release",id:"some-notable-features-in-this-saas-release",level:2}],p={toc:d},b="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"v0210"},"v0.2.10"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,r.yg)("p",null,"09-Aug-2023"),(0,r.yg)("h2",{id:"recommended-clisdk"},"Recommended CLI/SDK"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"v0.10.5.5")," with release notes at ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.5.5"},"https://github.com/acryldata/datahub/releases/tag/v0.10.5.5"))),(0,r.yg)("p",null,"If you are using an older CLI/SDK version then please upgrade it. This applies for all CLI/SDK usages, if you are using it through your terminal, github actions, airflow, in python SDK somewhere, Java SKD etc. This is a strong recommendation to upgrade as we keep on pushing fixes in the CLI and it helps us support you better."),(0,r.yg)("p",null,"Special Notes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"We have a new search and browse experience. We cannot enable it unless all of your CLI/SDK usages are upgraded. If you are using a custom source then you need to upgrade your source to produce ",(0,r.yg)("inlineCode",{parentName:"li"},"browsePathv2")," aspects. Details are in ",(0,r.yg)("a",{parentName:"li",href:"/docs/browsev2/browse-paths-v2"},"this doc"),"."),(0,r.yg)("li",{parentName:"ul"},"[Breaking change]"," For all sql-based sources that support profiling, you can no longer specify ",(0,r.yg)("inlineCode",{parentName:"li"},"profile_table_level_only")," together with ",(0,r.yg)("inlineCode",{parentName:"li"},"include_field_xyz")," config options to ingest certain column-level metrics. Instead, set ",(0,r.yg)("inlineCode",{parentName:"li"},"profile_table_level_only")," to false and individually enable / disable desired field metrics."),(0,r.yg)("li",{parentName:"ul"},"[Breaking change]"," The ",(0,r.yg)("inlineCode",{parentName:"li"},"bigquery-beta")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"snowflake-beta")," source aliases have been dropped. Use ",(0,r.yg)("inlineCode",{parentName:"li"},"bigquery")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"snowflake")," as the source type instead."),(0,r.yg)("li",{parentName:"ul"},"[Behaviour change]"," Ingestion runs created with Pipeline.create will show up in the DataHub ingestion tab as CLI-based runs. To revert to the previous behavior of not showing these runs in DataHub, pass ",(0,r.yg)("inlineCode",{parentName:"li"},"no_default_report=True"),"."),(0,r.yg)("li",{parentName:"ul"},"[Behaviour change]"," snowflake connector will use user's email attribute as is, as the urn. To revert to previous behavior disable ",(0,r.yg)("inlineCode",{parentName:"li"},"email_as_user_identifier")," in recipe.")),(0,r.yg)("h2",{id:"release-changelog"},"Release Changelog"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ",(0,r.yg)("inlineCode",{parentName:"li"},"v0.2.9")," these changes from OSS DataHub ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/1f0723fad109658a69bb1d4279100de8514f35d7...2b0952195b7895df0a2bf92b28e71aac18217781"},"https://github.com/datahub-project/datahub/compare/1f0723fad109658a69bb1d4279100de8514f35d7...2b0952195b7895df0a2bf92b28e71aac18217781")," have been pulled in.")),(0,r.yg)("h2",{id:"some-notable-features-in-this-saas-release"},"Some notable features in this SaaS release"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"New search and Browse v2 experience. This can only be enabled if you upgrade all your CLI/SDK usage as per our recommendation provided above."),(0,r.yg)("li",{parentName:"ul"},"We will be enabling these features selectively. If you are interested in trying it and providing feedback, please reach out to your Acryl Customer Success representative.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Acryl Observe Freshness Assertions available in private beta as shared ",(0,r.yg)("a",{parentName:"li",href:"/docs/managed-datahub/observe/freshness-assertions"},"here"),". "),(0,r.yg)("li",{parentName:"ul"},"New notifications and Subscriptions feature available.")))))}g.isMDXComponent=!0}}]);