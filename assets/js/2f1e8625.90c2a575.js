"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[71804],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Hello World",slug:"/actions/actions/hello_world",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md"},c="Hello World",s={unversionedId:"docs/actions/actions/hello_world",id:"version-0.15.0/docs/actions/actions/hello_world",title:"Hello World",description:"Certified",source:"@site/versioned_docs/version-0.15.0/docs/actions/actions/hello_world.md",sourceDirName:"docs/actions/actions",slug:"/actions/actions/hello_world",permalink:"/docs/0.15.0/actions/actions/hello_world",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md",tags:[],version:"0.15.0",frontMatter:{title:"Hello World",slug:"/actions/actions/hello_world",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/hello_world.md"},sidebar:"overviewSidebar",previous:{title:"Ingestion Executor",permalink:"/docs/0.15.0/actions/actions/executor"},next:{title:"Slack",permalink:"/docs/0.15.0/actions/actions/slack"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Supported Events",id:"supported-events",level:3},{value:"Action Quickstart",id:"action-quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the Plugin(s)",id:"install-the-plugins",level:3},{value:"Configure the Action Config",id:"configure-the-action-config",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p},g="wrapper";function y(e){var{components:t}=e,n=l(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hello-world"},"Hello World"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This Action is an example action which simply prints all Events it receives as JSON."),(0,r.yg)("h3",{id:"capabilities"},"Capabilities"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Printing events that are received by the Action to the console. ")),(0,r.yg)("h3",{id:"supported-events"},"Supported Events"),(0,r.yg)("p",null,"All event types, including"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"EntityChangeEvent_v1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MetadataChangeLog_v1"))),(0,r.yg)("h2",{id:"action-quickstart"},"Action Quickstart"),(0,r.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"No prerequisites. This action comes pre-loaded with ",(0,r.yg)("inlineCode",{parentName:"p"},"acryl-datahub-actions"),". "),(0,r.yg)("h3",{id:"install-the-plugins"},"Install the Plugin(s)"),(0,r.yg)("p",null,"This action comes with the Actions Framework by default:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub-actions'")),(0,r.yg)("h3",{id:"configure-the-action-config"},"Configure the Action Config"),(0,r.yg)("p",null,"Use the following config(s) to get started with this Action. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},'name: "pipeline-name"\nsource:\n  # source configs\naction:\n  type: "hello_world"\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"View All Configuration Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `to_upper` | \u274c| `False` | Whether to print events in upper case. |"),(0,r.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.yg)("p",null,"N/A"))}y.isMDXComponent=!0}}]);