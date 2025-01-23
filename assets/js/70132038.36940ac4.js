"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95069],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>d});n(96540);var o=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"Monitoring DataHub",slug:"/advanced/monitoring",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md"},s="Monitoring DataHub",l={unversionedId:"docs/advanced/monitoring",id:"version-0.15.0/docs/advanced/monitoring",title:"Monitoring DataHub",description:"Monitoring DataHub's system components is critical for operating and improving DataHub. This doc explains how to add",source:"@site/versioned_docs/version-0.15.0/docs/advanced/monitoring.md",sourceDirName:"docs/advanced",slug:"/advanced/monitoring",permalink:"/docs/0.15.0/advanced/monitoring",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md",tags:[],version:"0.15.0",frontMatter:{title:"Monitoring DataHub",slug:"/advanced/monitoring",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/monitoring.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Database Retention",permalink:"/docs/0.15.0/advanced/db-retention"},next:{title:"Telemetry",permalink:"/docs/0.15.0/deploy/telemetry"}},p={},d=[{value:"Tracing",id:"tracing",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Enable monitoring through docker-compose",id:"enable-monitoring-through-docker-compose",level:2},{value:"Health check endpoint",id:"health-check-endpoint",level:2}],u={toc:d},m="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"monitoring-datahub"},"Monitoring DataHub"),(0,o.yg)("p",null,"Monitoring DataHub's system components is critical for operating and improving DataHub. This doc explains how to add\ntracing and metrics measurements in the DataHub containers."),(0,o.yg)("h2",{id:"tracing"},"Tracing"),(0,o.yg)("p",null,"Traces let us track the life of a request across multiple components. Each trace is consisted of multiple spans, which\nare units of work, containing various context about the work being done as well as time taken to finish the work. By\nlooking at the trace, we can more easily identify performance bottlenecks."),(0,o.yg)("p",null,"We enable tracing by using\nthe ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation"},"OpenTelemetry java instrumentation library"),".\nThis project provides a Java agent JAR that is attached to java applications. The agent injects bytecode to capture\ntelemetry from popular libraries."),(0,o.yg)("p",null,"Using the agent we are able to"),(0,o.yg)("p",null,"1) Plug and play different tracing tools based on the user's setup: Jaeger, Zipkin, or other tools\n2) Get traces for Kafka, JDBC, and Elasticsearch without any additional code\n3) Track traces of any function with a simple ",(0,o.yg)("inlineCode",{parentName:"p"},"@WithSpan")," annotation"),(0,o.yg)("p",null,"You can enable the agent by setting env variable ",(0,o.yg)("inlineCode",{parentName:"p"},"ENABLE_OTEL")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," for GMS and MAE/MCE consumers. In our\nexample ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose"),", we export metrics to a local Jaeger\ninstance by setting env variable ",(0,o.yg)("inlineCode",{parentName:"p"},"OTEL_TRACES_EXPORTER")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"jaeger"),"\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_JAEGER_ENDPOINT")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"http://jaeger-all-in-one:14250"),", but you can easily change this behavior by\nsetting the correct env variables. Refer to\nthis ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk-extensions/autoconfigure/README.md"},"doc")," for\nall configs."),(0,o.yg)("p",null,"Once the above is set up, you should be able to see a detailed trace as a request is sent to GMS. We added\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"@WithSpan")," annotation in various places to make the trace more readable. You should start to see traces in the\ntracing collector of choice. Our example ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose")," deploys\nan instance of Jaeger with port 16686. The traces should be available at http://localhost:16686."),(0,o.yg)("h2",{id:"metrics"},"Metrics"),(0,o.yg)("p",null,"With tracing, we can observe how a request flows through our system into the persistence layer. However, for a more\nholistic picture, we need to be able to export metrics and measure them across time. Unfortunately, OpenTelemetry's java\nmetrics library is still in active development."),(0,o.yg)("p",null,"As such, we decided to use ",(0,o.yg)("a",{parentName:"p",href:"https://metrics.dropwizard.io/4.2.0/"},"Dropwizard Metrics")," to export custom metrics to JMX,\nand then use ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"Prometheus-JMX exporter")," to export all JMX metrics to\nPrometheus. This allows our code base to be independent of the metrics collection tool, making it easy for people to use\ntheir tool of choice. You can enable the agent by setting env variable ",(0,o.yg)("inlineCode",{parentName:"p"},"ENABLE_PROMETHEUS")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," for GMS and MAE/MCE\nconsumers. Refer to this example ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose")," for setting the\nvariables."),(0,o.yg)("p",null,"In our example ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/monitoring/docker-compose.monitoring.yml"},"docker-compose"),", we have configured prometheus to\nscrape from 4318 ports of each container used by the JMX exporter to export metrics. We also configured grafana to\nlisten to prometheus and create useful dashboards. By default, we provide two\ndashboards: ",(0,o.yg)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14845"},"JVM dashboard")," and DataHub dashboard."),(0,o.yg)("p",null,"In the JVM dashboard, you can find detailed charts based on JVM metrics like CPU/memory/disk usage. In the DataHub\ndashboard, you can find charts to monitor each endpoint and the kafka topics. Using the example implementation, go\nto http://localhost:3001 to find the grafana dashboards! (Username: admin, PW: admin)"),(0,o.yg)("p",null,"To make it easy to track various metrics within the code base, we created MetricUtils class. This util class creates a\ncentral metric registry, sets up the JMX reporter, and provides convenient functions for setting up counters and timers.\nYou can run the following to create a counter and increment."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'MetricUtils.counter(this.getClass(),"metricName").increment();\n')),(0,o.yg)("p",null,"You can run the following to time a block of code."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'try(Timer.Context ignored=MetricUtils.timer(this.getClass(),"timerName").timer()){\n    ...block of code\n    }\n')),(0,o.yg)("h2",{id:"enable-monitoring-through-docker-compose"},"Enable monitoring through docker-compose"),(0,o.yg)("p",null,"We provide some example configuration for enabling monitoring in\nthis ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/docker/monitoring"},"directory"),". Take a look at the docker-compose\nfiles, which adds necessary env variables to existing containers, and spawns new containers (Jaeger, Prometheus,\nGrafana)."),(0,o.yg)("p",null,"You can add in the above docker-compose using the ",(0,o.yg)("inlineCode",{parentName:"p"},"-f <<path-to-compose-file>>")," when running docker-compose commands.\nFor instance,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker-compose \\\n  -f quickstart/docker-compose.quickstart.yml \\\n  -f monitoring/docker-compose.monitoring.yml \\\n  pull && \\\ndocker-compose -p datahub \\\n  -f quickstart/docker-compose.quickstart.yml \\\n  -f monitoring/docker-compose.monitoring.yml \\\n  up\n")),(0,o.yg)("p",null,"We set up quickstart.sh, dev.sh, and dev-without-neo4j.sh to add the above docker-compose when MONITORING=true. For\ninstance ",(0,o.yg)("inlineCode",{parentName:"p"},"MONITORING=true ./docker/quickstart.sh")," will add the correct env variables to start collecting traces and\nmetrics, and also deploy Jaeger, Prometheus, and Grafana. We will soon support this as a flag during quickstart. "),(0,o.yg)("h2",{id:"health-check-endpoint"},"Health check endpoint"),(0,o.yg)("p",null,"For monitoring healthiness of your DataHub service, ",(0,o.yg)("inlineCode",{parentName:"p"},"/admin")," endpoint can be used."))}g.isMDXComponent=!0}}]);