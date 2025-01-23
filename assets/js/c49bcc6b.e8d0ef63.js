"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79641],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=o,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});r(96540);var n=r(15680);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Build Debugging Guide",slug:"/troubleshooting/build",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md"},s="Build Debugging Guide",d={unversionedId:"docs/troubleshooting/build",id:"version-0.14.1/docs/troubleshooting/build",title:"Build Debugging Guide",description:"For when Local Development did not work out smoothly.",source:"@site/versioned_docs/version-0.14.1/docs/troubleshooting/build.md",sourceDirName:"docs/troubleshooting",slug:"/troubleshooting/build",permalink:"/docs/0.14.1/troubleshooting/build",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md",tags:[],version:"0.14.1",frontMatter:{title:"Build Debugging Guide",slug:"/troubleshooting/build",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/troubleshooting/build.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Debugging Guide",permalink:"/docs/0.14.1/troubleshooting/quickstart"},next:{title:"General Debugging Guide",permalink:"/docs/0.14.1/troubleshooting/general"}},c={},u=[{value:"Getting <code>Unsupported class file major version 57</code>",id:"getting-unsupported-class-file-major-version-57",level:2},{value:"Getting <code>cannot find symbol</code> error for <code>javax.annotation.Generated</code>",id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated",level:2},{value:"<code>:metadata-models:generateDataTemplate</code> task fails with <code>java.nio.file.InvalidPathException: Illegal char &lt;:&gt; at index XX</code> or <code>Caused by: java.lang.IllegalArgumentException: &#39;other&#39; has different root</code> error",id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error",level:2},{value:"Various errors related to <code>generateDataTemplate</code> or other <code>generate</code> tasks",id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks",level:2},{value:"<code>Execution failed for task &#39;:metadata-service:restli-servlet-impl:checkRestModel&#39;</code>",id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel",level:2},{value:"<code>java.io.IOException: No space left on device</code>",id:"javaioioexception-no-space-left-on-device",level:2},{value:"<code>Build failed</code> for task <code>./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint</code>",id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint",level:2}],p={toc:u},g="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"build-debugging-guide"},"Build Debugging Guide"),(0,n.yg)("p",null,"For when ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/developers"},"Local Development")," did not work out smoothly."),(0,n.yg)("h2",{id:"getting-unsupported-class-file-major-version-57"},"Getting ",(0,n.yg)("inlineCode",{parentName:"h2"},"Unsupported class file major version 57")),(0,n.yg)("p",null,"You're probably using a Java version that's too new for gradle. Run the following command to check your Java version"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"java --version\n")),(0,n.yg)("p",null,"While it may be possible to build and run DataHub using newer versions of Java, we currently only support ",(0,n.yg)("a",{parentName:"p",href:"https://openjdk.org/projects/jdk/17/"},"Java 17")," (aka Java 17)."),(0,n.yg)("h2",{id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated"},"Getting ",(0,n.yg)("inlineCode",{parentName:"h2"},"cannot find symbol")," error for ",(0,n.yg)("inlineCode",{parentName:"h2"},"javax.annotation.Generated")),(0,n.yg)("p",null,"Similar to the previous issue, please use Java 17 to build the project.\nYou can install multiple version of Java on a single machine and switch between them using the ",(0,n.yg)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. See ",(0,n.yg)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E21454_01/html/821-2531/inst_jdk_javahome_t.html"},"this document")," for more details."),(0,n.yg)("h2",{id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error"},(0,n.yg)("inlineCode",{parentName:"h2"},":metadata-models:generateDataTemplate")," task fails with ",(0,n.yg)("inlineCode",{parentName:"h2"},"java.nio.file.InvalidPathException: Illegal char <:> at index XX")," or ",(0,n.yg)("inlineCode",{parentName:"h2"},"Caused by: java.lang.IllegalArgumentException: 'other' has different root")," error"),(0,n.yg)("p",null,"This is a ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/issues/287"},"known issue")," when building the project on Windows due a bug in the Pegasus plugin. Please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/developers#windows-compatibility"},"Windows Compatibility"),"."),(0,n.yg)("h2",{id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks"},"Various errors related to ",(0,n.yg)("inlineCode",{parentName:"h2"},"generateDataTemplate")," or other ",(0,n.yg)("inlineCode",{parentName:"h2"},"generate")," tasks"),(0,n.yg)("p",null,"As we generate quite a few files from the models, it is possible that old generated files may conflict with new model changes. When this happens, a simple ",(0,n.yg)("inlineCode",{parentName:"p"},"./gradlew clean")," should reosolve the issue."),(0,n.yg)("h2",{id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel"},(0,n.yg)("inlineCode",{parentName:"h2"},"Execution failed for task ':metadata-service:restli-servlet-impl:checkRestModel'")),(0,n.yg)("p",null,"This generally means that an ",(0,n.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"incompatible change")," was introduced to the rest.li API in GMS. You'll need to rebuild the snapshots/IDL by running the following command once"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,n.yg)("h2",{id:"javaioioexception-no-space-left-on-device"},(0,n.yg)("inlineCode",{parentName:"h2"},"java.io.IOException: No space left on device")),(0,n.yg)("p",null,"This means you're running out of space on your disk to build. Please free up some space or try a different disk."),(0,n.yg)("h2",{id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint"},(0,n.yg)("inlineCode",{parentName:"h2"},"Build failed")," for task ",(0,n.yg)("inlineCode",{parentName:"h2"},"./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint")),(0,n.yg)("p",null,"This could mean that you need to update your ",(0,n.yg)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," version"))}m.isMDXComponent=!0}}]);