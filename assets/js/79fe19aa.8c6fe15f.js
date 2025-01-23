"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[77456],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,y=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md"},l="High Cardinality Relationships",c={unversionedId:"docs/advanced/high-cardinality",id:"version-0.15.0/docs/advanced/high-cardinality",title:"High Cardinality Relationships",description:"As explained in What is a Relationship, the raw metadata for forming relationships is captured directly inside of a Metadata Aspect. The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user URNs. However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged.",source:"@site/versioned_docs/version-0.15.0/docs/advanced/high-cardinality.md",sourceDirName:"docs/advanced",slug:"/advanced/high-cardinality",permalink:"/docs/0.15.0/advanced/high-cardinality",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md",tags:[],version:"0.15.0",frontMatter:{title:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/high-cardinality.md"}},p={},d=[{value:"1:N Relationships",id:"1n-relationships",level:3},{value:"M:N Relationships",id:"mn-relationships",level:3}],h={toc:d},u="wrapper";function y(e){var{components:t}=e,r=o(e,["components"]);return(0,n.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"high-cardinality-relationships"},"High Cardinality Relationships"),(0,n.yg)("p",null,"As explained in ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/what/relationship"},"What is a Relationship"),", the raw metadata for forming relationships is captured directly inside of a ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/what/aspect"},"Metadata Aspect"),". The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/what/urn"},"URNs"),". However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged."),(0,n.yg)("p",null,"Depending on the type of relationships, there are different strategies for dealing with high cardinality. "),(0,n.yg)("h3",{id:"1n-relationships"},"1:N Relationships"),(0,n.yg)("p",null,"When ",(0,n.yg)("inlineCode",{parentName:"p"},"N")," is large, simply store the relationship as a reverse pointer on the ",(0,n.yg)("inlineCode",{parentName:"p"},"N")," side, instead of an ",(0,n.yg)("inlineCode",{parentName:"p"},"N"),"-element array on the ",(0,n.yg)("inlineCode",{parentName:"p"},"1")," side. In other words, instead of doing this"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"record MemberList {\n  members: array[UserUrn]\n}\n")),(0,n.yg)("p",null,"do this"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"record Membership {\n  group: GroupUrn\n}\n")),(0,n.yg)("p",null,"One drawback with this approach is that batch updating the member list becomes multiple DB operations and non-atomic. If the list is provided by an external metadata provider via ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/what/mxe"},"MCEs"),", this also means that multiple MCEs will be required to update the list, instead of having one giant array in a single MCE."),(0,n.yg)("h3",{id:"mn-relationships"},"M:N Relationships"),(0,n.yg)("p",null,"When one side of the relation (",(0,n.yg)("inlineCode",{parentName:"p"},"M")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"N"),") has low cardinality, you can apply the same trick in ","[1:N Relationship]"," by creating the array on the side with low-cardinality. For example, assuming a user can only be part of a small number of groups but each group can have a large number of users, the following model will be more efficient than the reverse."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"record Membership {\n  groups: array[GroupUrn]\n}\n")),(0,n.yg)("p",null,"When both ",(0,n.yg)("inlineCode",{parentName:"p"},"M")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"N"),' are of high cardinality (e.g. millions of users, each belongs to million of groups), the only way to store such relationships efficiently is by creating a new "Mapping Entity" with a single aspect like this'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"record UserGroupMap {\n  user: UserUrn\n  group: GroupUrn\n}\n")),(0,n.yg)("p",null,"This means that the relationship now can only be created & updated at a single source-destination pair granularity."))}y.isMDXComponent=!0}}]);