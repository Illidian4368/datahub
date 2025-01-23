"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94442],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"Java Emitter",slug:"/metadata-integration/java/as-a-library",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/as-a-library.md"},l="Java Emitter",p={unversionedId:"metadata-integration/java/as-a-library",id:"version-0.14.1/metadata-integration/java/as-a-library",title:"Java Emitter",description:"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. Use-cases are typically push-based and include emitting metadata events from CI/CD pipelines, custom orchestrators etc.",source:"@site/versioned_docs/version-0.14.1/metadata-integration/java/as-a-library.md",sourceDirName:"metadata-integration/java",slug:"/metadata-integration/java/as-a-library",permalink:"/docs/0.14.1/metadata-integration/java/as-a-library",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/as-a-library.md",tags:[],version:"0.14.1",frontMatter:{title:"Java Emitter",slug:"/metadata-integration/java/as-a-library",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/as-a-library.md"},sidebar:"overviewSidebar",previous:{title:"URNs",permalink:"/docs/0.14.1/python-sdk/urns"},next:{title:"CLI",permalink:"/docs/0.14.1/cli"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"REST Emitter",id:"rest-emitter",level:2},{value:"Usage",id:"usage",level:3},{value:"REST Emitter Code",id:"rest-emitter-code",level:3},{value:"Kafka Emitter",id:"kafka-emitter",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Kafka Emitter Code",id:"kafka-emitter-code",level:3},{value:"File Emitter",id:"file-emitter",level:2},{value:"Usage",id:"usage-2",level:3},{value:"File Emitter Code",id:"file-emitter-code",level:3},{value:"Support for S3, GCS etc.",id:"support-for-s3-gcs-etc",level:3},{value:"Other Languages",id:"other-languages",level:2}],d={toc:u},m="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"java-emitter"},"Java Emitter"),(0,n.yg)("p",null,"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. Use-cases are typically push-based and include emitting metadata events from CI/CD pipelines, custom orchestrators etc."),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.acryl/datahub-client"},(0,n.yg)("inlineCode",{parentName:"a"},"io.acryl:datahub-client"))," Java package offers REST emitter API-s, which can be easily used to emit metadata from your JVM-based systems. For example, the Spark lineage integration uses the Java emitter to emit metadata events from Spark jobs."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Pro Tip!")," Throughout our API guides, we have examples of using Java API SDK.\nLookout for the ",(0,n.yg)("inlineCode",{parentName:"p"},"| Java |")," tab within our tutorials.")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"Follow the specific instructions for your build system to declare a dependency on the appropriate version of the package. "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Note")),": Check the ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.acryl/datahub-client"},"Maven repository")," for the latest version of the package before following the instructions below."),(0,n.yg)("h3",{id:"gradle"},"Gradle"),(0,n.yg)("p",null,"Add the following to your build.gradle."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-gradle"},"implementation 'io.acryl:datahub-client:__version__'\n")),(0,n.yg)("h3",{id:"maven"},"Maven"),(0,n.yg)("p",null,"Add the following to your ",(0,n.yg)("inlineCode",{parentName:"p"},"pom.xml"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/io.acryl/datahub-client --\x3e\n<dependency>\n    <groupId>io.acryl</groupId>\n    <artifactId>datahub-client</artifactId>\n    \x3c!-- replace __version__ with the latest version number --\x3e\n    <version>__version__</version>\n</dependency>\n")),(0,n.yg)("h2",{id:"rest-emitter"},"REST Emitter"),(0,n.yg)("p",null,"The REST emitter is a thin wrapper on top of the ",(0,n.yg)("a",{parentName:"p",href:"https://hc.apache.org/httpcomponents-client-4.5.x/index.html"},(0,n.yg)("inlineCode",{parentName:"a"},"Apache HttpClient"))," library. It supports non-blocking emission of metadata and handles the details of JSON serialization of metadata aspects over the wire."),(0,n.yg)("p",null,"Constructing a REST Emitter follows a lambda-based fluent builder pattern. The config parameters mirror the Python emitter ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/metadata-ingestion/sink_docs/datahub#config-details"},"configuration")," for the most part. In addition, you can also customize the HttpClient that is constructed under the hood by passing in customizations to the HttpClient builder."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'import datahub.client.rest.RestEmitter;\n//...\nRestEmitter emitter = RestEmitter.create(b -> b\n                                              .server("http://localhost:8080")\n//Auth token for DataHub Cloud              .token(AUTH_TOKEN_IF_NEEDED)\n//Override default timeout of 10 seconds      .timeoutSec(OVERRIDE_DEFAULT_TIMEOUT_IN_SECONDS)\n//Add additional headers                      .extraHeaders(Collections.singletonMap("Session-token", "MY_SESSION"))\n// Customize HttpClient\'s connection ttl      .customizeHttpAsyncClient(c -> c.setConnectionTimeToLive(30, TimeUnit.SECONDS))\n                                    );\n')),(0,n.yg)("h3",{id:"usage"},"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'import com.linkedin.dataset.DatasetProperties;\nimport com.linkedin.events.metadata.ChangeType;\nimport datahub.event.MetadataChangeProposalWrapper;\nimport datahub.client.rest.RestEmitter;\nimport datahub.client.Callback;\n// ... followed by\n\n// Creates the emitter with the default coordinates and settings\nRestEmitter emitter = RestEmitter.createWithDefaults(); \n\nMetadataChangeProposalWrapper mcpw = MetadataChangeProposalWrapper.builder()\n        .entityType("dataset")\n        .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.my-dataset.user-table,PROD)")\n        .upsert()\n        .aspect(new DatasetProperties().setDescription("This is the canonical User profile dataset"))\n        .build();\n\n// Blocking call using future\nFuture<MetadataWriteResponse> requestFuture = emitter.emit(mcpw, null).get();\n\n// Non-blocking using callback\nemitter.emit(mcpw, new Callback() {\n      @Override\n      public void onCompletion(MetadataWriteResponse response) {\n        if (response.isSuccess()) {\n          System.out.println(String.format("Successfully emitted metadata event for %s", mcpw.getEntityUrn()));\n        } else {\n          // Get the underlying http response\n          HttpResponse httpResponse = (HttpResponse) response.getUnderlyingResponse();\n          System.out.println(String.format("Failed to emit metadata event for %s, aspect: %s with status code: %d",\n              mcpw.getEntityUrn(), mcpw.getAspectName(), httpResponse.getStatusLine().getStatusCode()));\n          // Print the server side exception if it was captured\n          if (response.getServerException() != null) {\n            System.out.println(String.format("Server side exception was %s", response.getServerException()));\n          }\n        }\n      }\n\n      @Override\n      public void onFailure(Throwable exception) {\n        System.out.println(\n            String.format("Failed to emit metadata event for %s, aspect: %s due to %s", mcpw.getEntityUrn(),\n                mcpw.getAspectName(), exception.getMessage()));\n      }\n    });\n')),(0,n.yg)("h3",{id:"rest-emitter-code"},"REST Emitter Code"),(0,n.yg)("p",null,"If you're interested in looking at the REST emitter code, it is available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-client/src/main/java/datahub/client/rest/RestEmitter.java"},"here"),"."),(0,n.yg)("h2",{id:"kafka-emitter"},"Kafka Emitter"),(0,n.yg)("p",null,"The Kafka emitter is a thin wrapper on top of the SerializingProducer class from ",(0,n.yg)("inlineCode",{parentName:"p"},"confluent-kafka")," and offers a non-blocking interface for sending metadata events to DataHub. Use this when you want to decouple your metadata producer from the uptime of your datahub metadata server by utilizing Kafka as a highly available message bus. For example, if your DataHub metadata service is down due to planned or unplanned outages, you can still continue to collect metadata from your mission critical systems by sending it to Kafka. Also use this emitter when throughput of metadata emission is more important than acknowledgement of metadata being persisted to DataHub's backend store."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Note")),": The Kafka emitter uses Avro to serialize the Metadata events to Kafka. Changing the serializer will result in unprocessable events as DataHub currently expects the metadata events over Kafka to be serialized in Avro."),(0,n.yg)("h3",{id:"usage-1"},"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'\n\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport com.linkedin.dataset.DatasetProperties;\nimport datahub.client.kafka.KafkaEmitter;\nimport datahub.client.kafka.KafkaEmitterConfig;\nimport datahub.event.MetadataChangeProposalWrapper;\n\n// ... followed by\n\n// Creates the emitter with the default coordinates and settings\nKafkaEmitterConfig.KafkaEmitterConfigBuilder builder = KafkaEmitterConfig.builder(); KafkaEmitterConfig config = builder.build();\nKafkaEmitter emitter = new KafkaEmitter(config);\n \n//Test if topic is available\n\nif(emitter.testConnection()){\n \n    MetadataChangeProposalWrapper mcpw = MetadataChangeProposalWrapper.builder()\n            .entityType("dataset")\n            .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.my-dataset.user-table,PROD)")\n            .upsert()\n            .aspect(new DatasetProperties().setDescription("This is the canonical User profile dataset"))\n            .build();\n    \n    // Blocking call using future\n    Future<MetadataWriteResponse> requestFuture = emitter.emit(mcpw, null).get();\n    \n    // Non-blocking using callback\n    emitter.emit(mcpw, new Callback() {\n    \n          @Override\n          public void onFailure(Throwable exception) {\n            System.out.println("Failed to send with: " + exception);\n          }\n          @Override\n          public void onCompletion(MetadataWriteResponse metadataWriteResponse) {\n            if (metadataWriteResponse.isSuccess()) {\n              RecordMetadata metadata = (RecordMetadata) metadataWriteResponse.getUnderlyingResponse();\n              System.out.println("Sent successfully over topic: " + metadata.topic());\n            } else {\n              System.out.println("Failed to send with: " + metadataWriteResponse.getUnderlyingResponse());\n            }\n          }\n        });\n\n}\nelse {\n    System.out.println("Kafka service is down.");\n}\n')),(0,n.yg)("h3",{id:"kafka-emitter-code"},"Kafka Emitter Code"),(0,n.yg)("p",null,"If you're interested in looking at the Kafka emitter code, it is available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-client/src/main/java/datahub/client/kafka/KafkaEmitter.java"},"here"),"."),(0,n.yg)("h2",{id:"file-emitter"},"File Emitter"),(0,n.yg)("p",null,"The File emitter writes metadata change proposal events (MCPs) into a JSON file that can be later handed off to the Python ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/generated/ingestion/sources/metadata-file"},"Metadata File source")," for ingestion. This works analogous to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/metadata-ingestion/sink_docs/metadata-file"},"Metadata File sink")," in Python. This mechanism can be used when the system producing metadata events doesn't have direct connection to DataHub's REST server or Kafka brokers. The generated JSON file can be transferred later and then ingested into DataHub using the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.1/generated/ingestion/sources/metadata-file"},"Metadata File source"),"."),(0,n.yg)("h3",{id:"usage-2"},"Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'\n\nimport datahub.client.file.FileEmitter;\nimport datahub.client.file.FileEmitterConfig;\nimport datahub.event.MetadataChangeProposalWrapper;\n\n// ... followed by\n\n\n// Define output file co-ordinates\nString outputFile = "/my/path/output.json";\n\n//Create File Emitter\nFileEmitter emitter = new FileEmitter(FileEmitterConfig.builder().fileName(outputFile).build());\n\n// A couple of sample metadata events\nMetadataChangeProposalWrapper mcpwOne = MetadataChangeProposalWrapper.builder()\n        .entityType("dataset")\n        .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.my-dataset.user-table,PROD)")\n        .upsert()\n        .aspect(new DatasetProperties().setDescription("This is the canonical User profile dataset"))\n        .build();\n\nMetadataChangeProposalWrapper mcpwTwo = MetadataChangeProposalWrapper.builder()\n        .entityType("dataset")\n        .entityUrn("urn:li:dataset:(urn:li:dataPlatform:bigquery,my-project.my-dataset.fact-orders-table,PROD)")\n        .upsert()\n        .aspect(new DatasetProperties().setDescription("This is the canonical Fact table for orders"))\n        .build();\n\nMetadataChangeProposalWrapper[] mcpws = { mcpwOne, mcpwTwo };\nfor (MetadataChangeProposalWrapper mcpw : mcpws) {\n   emitter.emit(mcpw);\n}\nemitter.close(); // calling close() is important to ensure file gets closed cleanly\n    \n')),(0,n.yg)("h3",{id:"file-emitter-code"},"File Emitter Code"),(0,n.yg)("p",null,"If you're interested in looking at the File emitter code, it is available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-client/src/main/java/datahub/client/file/FileEmitter.java"},"here"),"."),(0,n.yg)("h3",{id:"support-for-s3-gcs-etc"},"Support for S3, GCS etc."),(0,n.yg)("p",null,"The File emitter only supports writing to the local filesystem currently. If you're interested in adding support for S3, GCS etc., contributions are welcome! "),(0,n.yg)("h2",{id:"other-languages"},"Other Languages"),(0,n.yg)("p",null,"Emitter API-s are also supported for:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.14.1/metadata-ingestion/as-a-library"},"Python"))))}g.isMDXComponent=!0}}]);