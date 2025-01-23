"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97383],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return t?o.createElement(y,l(l({ref:n},u),{},{components:t})):o.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});t(96540);var o=t(15680);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Integrating with Confluent Cloud",slug:"/deploy/confluent-cloud",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md"},s="Integrating with Confluent Cloud",c={unversionedId:"docs/deploy/confluent-cloud",id:"docs/deploy/confluent-cloud",title:"Integrating with Confluent Cloud",description:"DataHub provides the ability to easily leverage Confluent Cloud as your Kafka provider. To do so, you'll need to configure DataHub to talk to a broker and schema registry hosted by Confluent.",source:"@site/genDocs/docs/deploy/confluent-cloud.md",sourceDirName:"docs/deploy",slug:"/deploy/confluent-cloud",permalink:"/docs/deploy/confluent-cloud",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md",tags:[],version:"current",frontMatter:{title:"Integrating with Confluent Cloud",slug:"/deploy/confluent-cloud",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/confluent-cloud.md"},sidebar:"overviewSidebar",previous:{title:"Deploying with Kubernetes",permalink:"/docs/deploy/kubernetes"},next:{title:"Deployment Environment Variables",permalink:"/docs/deploy/environment-vars"}},u={},p=[{value:"<strong>Step 1: Create topics in Confluent Control Center</strong>",id:"step-1-create-topics-in-confluent-control-center",level:2},{value:"Step 2: Configure DataHub Container to use Confluent Cloud Topics",id:"step-2-configure-datahub-container-to-use-confluent-cloud-topics",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"DataHub Actions",id:"datahub-actions",level:4},{value:"Helm",id:"helm",level:3},{value:"DataHub Actions",id:"datahub-actions-1",level:4},{value:"Contribution",id:"contribution",level:2}],d={toc:p},g="wrapper";function y(e){var{components:n}=e,t=l(e,["components"]);return(0,o.yg)(g,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integrating-with-confluent-cloud"},"Integrating with Confluent Cloud"),(0,o.yg)("p",null,"DataHub provides the ability to easily leverage Confluent Cloud as your Kafka provider. To do so, you'll need to configure DataHub to talk to a broker and schema registry hosted by Confluent."),(0,o.yg)("p",null,"Doing this is a matter of configuring the Kafka Producer and Consumers used by DataHub correctly. There are 2 places where Kafka configuration should be provided: the metadata service (GMS) and the frontend server (datahub-frontend). Follow the steps below to configure these components for your deployment."),(0,o.yg)("h2",{id:"step-1-create-topics-in-confluent-control-center"},(0,o.yg)("strong",{parentName:"h2"},"Step 1: Create topics in Confluent Control Center")),(0,o.yg)("p",null,"First, you'll need to create following new topics in the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/control-center/index.html"},"Confluent Control Center"),". By default they have the following names:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"MetadataChangeProposal_v1")," "),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"FailedMetadataChangeProposal_v1")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"MetadataChangeLog_Timeseries_v1")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"DataHubUsageEvent_v1"),": User behavior tracking event for UI"),(0,o.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,o.yg)("strong",{parentName:"li"},"MetadataChangeEvent_v4"),": Metadata change proposal messages"),(0,o.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,o.yg)("strong",{parentName:"li"},"MetadataAuditEvent_v4"),": Metadata change log messages"),(0,o.yg)("li",{parentName:"ol"},"(Deprecated) ",(0,o.yg)("strong",{parentName:"li"},"FailedMetadataChangeEvent_v4"),": Failed to process #1 event"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"MetadataGraphEvent_v4"),":"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"PlatformEvent_v1")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"DataHubUpgradeHistory_v1"),": Notifies the end of DataHub Upgrade job so dependants can act accordingly (",(0,o.yg)("em",{parentName:"li"},"eg"),", startup).\nNote this topic requires special configuration: ",(0,o.yg)("strong",{parentName:"li"},"Infinite retention"),". Also, 1 partition is enough for the occasional traffic.")),(0,o.yg)("p",null,"The first five are the most important, and are explained in more depth in ",(0,o.yg)("a",{parentName:"p",href:"/docs/advanced/mcp-mcl"},"MCP/MCL"),". The final topics are\nthose which are deprecated but still used under certain circumstances. It is likely that in the future they will be completely\ndecommissioned. "),(0,o.yg)("p",null,"To create the topics, navigate to your ",(0,o.yg)("strong",{parentName:"p"},"Cluster"),' and click "Create Topic". Feel free to tweak the default topic configurations to\nmatch your preferences.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/confluent-create-topic.png"})),(0,o.yg)("h2",{id:"step-2-configure-datahub-container-to-use-confluent-cloud-topics"},"Step 2: Configure DataHub Container to use Confluent Cloud Topics"),(0,o.yg)("h3",{id:"docker-compose"},"Docker Compose"),(0,o.yg)("p",null,"If you are deploying DataHub via docker compose, enabling connection to Confluent is a matter of a) creating topics in the Confluent Control Center and b) changing the default container environment variables."),(0,o.yg)("p",null,"First, configure GMS to connect to Confluent Cloud by changing ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/gms/env/docker.env"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\nKAFKA_SCHEMAREGISTRY_URL=https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n\n# Confluent Cloud Configs\nSPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nSPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\nSPRING_KAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nSPRING_KAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nSPRING_KAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nSPRING_KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,o.yg)("p",null,"Next, configure datahub-frontend to connect to Confluent Cloud by changing ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\n\n# Confluent Cloud Configs\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nKAFKA_PROPERTIES_SASL_JAAS_CONFIG=org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\nKAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nKAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nKAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nKAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,o.yg)("p",null,"Note that this step is only required if ",(0,o.yg)("inlineCode",{parentName:"p"},"DATAHUB_ANALYTICS_ENABLED")," environment variable is not explicitly set to false for the datahub-frontend\ncontainer. "),(0,o.yg)("p",null,"If you're deploying with Docker Compose, you do not need to deploy the Zookeeper, Kafka Broker, or Schema Registry containers that ship by default."),(0,o.yg)("h4",{id:"datahub-actions"},"DataHub Actions"),(0,o.yg)("p",null,"Configuring Confluent Cloud for DataHub Actions requires some additional edits to your ",(0,o.yg)("inlineCode",{parentName:"p"},"executor.yaml"),". Under the Kafka\nsource connection config you will need to add the Python style client connection information:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"    connection:\n        bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n        schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n        consumer_config:\n          security.protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:-PLAINTEXT}\n          sasl.mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM:-PLAIN}\n          sasl.username: ${KAFKA_PROPERTIES_SASL_USERNAME}\n          sasl.password: ${KAFKA_PROPERTIES_SASL_PASSWORD}\n        schema_registry_config:\n          basic.auth.user.info: ${KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO}\n")),(0,o.yg)("p",null,"Specifically ",(0,o.yg)("inlineCode",{parentName:"p"},"sasl.username")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"sasl.password")," are the differences from the base ",(0,o.yg)("inlineCode",{parentName:"p"},"executor.yaml")," example file."),(0,o.yg)("p",null,"Additionally, you will need to set up environment variables for ",(0,o.yg)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_USERNAME")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_PASSWORD"),"\nwhich will use the same username and API Key you generated for the JAAS config."),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions/blob/main/docker/README.md#overwriting-a-system-action-config"},"Overwriting a System Action Config")," for detailed reflection procedures."),(0,o.yg)("p",null,"Next, configure datahub-actions to connect to Confluent Cloud by changing ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/datahub-actions/env/docker.env"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"KAFKA_BOOTSTRAP_SERVER=pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\nSCHEMA_REGISTRY_URL=https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n\n# Confluent Cloud Configs\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nKAFKA_PROPERTIES_SASL_USERNAME=XFA45EL1QFUQP4PA\nKAFKA_PROPERTIES_SASL_PASSWORD=ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU\nKAFKA_PROPERTIES_SASL_MECHANISM=PLAIN\nKAFKA_PROPERTIES_CLIENT_DNS_LOOKUP=use_all_dns_ips\nKAFKA_PROPERTIES_BASIC_AUTH_CREDENTIALS_SOURCE=USER_INFO\nKAFKA_PROPERTIES_BASIC_AUTH_USER_INFO=P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\n")),(0,o.yg)("h3",{id:"helm"},"Helm"),(0,o.yg)("p",null,"If you're deploying on K8s using Helm, you can simply change the ",(0,o.yg)("strong",{parentName:"p"},"datahub-helm")," ",(0,o.yg)("inlineCode",{parentName:"p"},"values.yml")," to point to Confluent Cloud and disable some default containers:"),(0,o.yg)("p",null,"First, disable the ",(0,o.yg)("inlineCode",{parentName:"p"},"cp-schema-registry")," service:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cp-schema-registry:\n  enabled: false \n")),(0,o.yg)("p",null,"Next, disable the ",(0,o.yg)("inlineCode",{parentName:"p"},"kafkaSetupJob")," service:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kafkaSetupJob:\n    enabled: false\n")),(0,o.yg)("p",null,"Then, update the ",(0,o.yg)("inlineCode",{parentName:"p"},"kafka")," configurations to point to your Confluent Cloud broker and schema registry instance, along with the topics you've created in Step 1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"kafka:\n      bootstrap:\n        server: pkc-g4ml2.eu-west-2.aws.confluent.cloud:9092\n      schemaregistry:\n        url: https://plrm-qwlpp.us-east-2.aws.confluent.cloud\n")),(0,o.yg)("p",null,'Next, you\'ll want to create 2 new Kubernetes secrets, one for the JaaS configuration which contains the username and password for Confluent,\nand another for the user info used for connecting to the schema registry. You\'ll find the values for each within the Confluent Control Center. Specifically,\nselect "Clients" -> "Configure new Java Client". You should see a page like the following:'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/confluent-cloud-config.png"})),(0,o.yg)("p",null,"You'll want to generate both a Kafka Cluster API Key & a Schema Registry key. Once you do so,you should see the config\nautomatically populate with your new secrets:"),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/confluent-cloud-config-2.png"})),(0,o.yg)("p",null,"You'll need to copy the values of ",(0,o.yg)("inlineCode",{parentName:"p"},"sasl.jaas.config")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"basic.auth.user.info"),"\nfor the next step."),(0,o.yg)("p",null,"The next step is to create K8s secrets containing the config values you've just generated. Specifically, you can run the following commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'kubectl create secret generic confluent-secrets --from-literal=sasl_jaas_config="<your-sasl.jaas.config>"\nkubectl create secret generic confluent-secrets --from-literal=basic_auth_user_info="<your-basic.auth.user.info>"\n')),(0,o.yg)("p",null,"With your config values substituted as appropriate. For example, in our case we'd run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic confluent-secrets --from-literal=sasl_jaas_config=\"org.apache.kafka.common.security.plain.PlainLoginModule   required username='XFA45EL1QFUQP4PA' password='ltyf96EvR1YYutsjLB3ZYfrk+yfCXD8sQHCE3EMp57A2jNs4RR7J1bU9k6lM6rU';\"\nkubectl create secret generic confluent-secrets --from-literal=basic_auth_user_info=\"P2ETAN5QR2LCWL14:RTjqw7AfETDl0RZo/7R0123LhPYs2TGjFKmvMWUFnlJ3uKubFbB1Sfs7aOjjNi1m23\"\n")),(0,o.yg)("p",null,"Finally, we'll configure our containers to pick up the Confluent Kafka Configs by changing two config blocks in our ",(0,o.yg)("inlineCode",{parentName:"p"},"values.yaml")," file. You\nshould see these blocks commented at the bottom of the template. You'll want to uncomment them and set them to the following values: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"credentialsAndCertsSecrets:\n  name: confluent-secrets\n  secureEnv:\n    sasl.jaas.config: sasl_jaas_config\n    basic.auth.user.info: basic_auth_user_info\n\n\nspringKafkaConfigurationOverrides:\n      security.protocol: SASL_SSL\n      sasl.mechanism: PLAIN\n      client.dns.lookup: use_all_dns_ips\n      basic.auth.credentials.source: USER_INFO\n")),(0,o.yg)("p",null,"Then simply apply the updated ",(0,o.yg)("inlineCode",{parentName:"p"},"values.yaml")," to your K8s cluster via ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl apply"),". "),(0,o.yg)("h4",{id:"datahub-actions-1"},"DataHub Actions"),(0,o.yg)("p",null,"Configuring Confluent Cloud for DataHub Actions requires some additional edits to your ",(0,o.yg)("inlineCode",{parentName:"p"},"executor.yaml"),". Under the Kafka\nsource connection config you will need to add the Python style client connection information:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"    connection:\n        bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n        schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n        consumer_config:\n          security.protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:-PLAINTEXT}\n          sasl.mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM:-PLAIN}\n          sasl.username: ${KAFKA_PROPERTIES_SASL_USERNAME}\n          sasl.password: ${KAFKA_PROPERTIES_SASL_PASSWORD}\n        schema_registry_config:\n          basic.auth.user.info: ${KAFKA_PROPERTIES_BASIC_AUTH_USER_INFO}\n")),(0,o.yg)("p",null,"Specifically ",(0,o.yg)("inlineCode",{parentName:"p"},"sasl.username")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"sasl.password")," are the differences from the base ",(0,o.yg)("inlineCode",{parentName:"p"},"executor.yaml")," example file."),(0,o.yg)("p",null,"Additionally, you will need to set up secrets for ",(0,o.yg)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_USERNAME")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"KAFKA_PROPERTIES_SASL_PASSWORD"),"\nwhich will use the same username and API Key you generated for the JAAS config."),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions/blob/main/docker/README.md#overwriting-a-system-action-config"},"Overwriting a System Action Config")," for detailed reflection procedures."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"credentialsAndCertsSecrets:\n  name: confluent-secrets\n  secureEnv:\n    sasl.jaas.config: sasl_jaas_config\n    basic.auth.user.info: basic_auth_user_info\n    sasl.username: sasl_username\n    sasl.password: sasl_password\n")),(0,o.yg)("p",null,"The Actions pod will automatically pick these up in the correctly named environment variables when they are named this exact way."),(0,o.yg)("h2",{id:"contribution"},"Contribution"),(0,o.yg)("p",null,"Accepting contributions for a setup script compatible with Confluent Cloud!"),(0,o.yg)("p",null,"The kafka-setup-job container we ship with is only compatible with a distribution of Kafka wherein ZooKeeper\nis exposed and available. A version of the job using the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.confluent.io/confluent-cli/current/command-reference/kafka/topic/confluent_kafka_topic_create.html"},"Confluent CLI"),"\nwould be very useful for the broader community."))}y.isMDXComponent=!0}}]);