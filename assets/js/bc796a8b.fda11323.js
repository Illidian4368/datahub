"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90151],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),c=i,y=p["".concat(s,".").concat(c)]||p[c]||g[c]||o;return t?a.createElement(y,l(l({ref:n},u),{},{components:t})):a.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},63814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>p});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const r={title:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md"},s="Developing on Metadata Ingestion",d={unversionedId:"metadata-ingestion/developing",id:"version-0.14.1/metadata-ingestion/developing",title:"Developing on Metadata Ingestion",description:"If you just want to use metadata ingestion, check the user-centric guide.",source:"@site/versioned_docs/version-0.14.1/metadata-ingestion/developing.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/developing",permalink:"/docs/0.14.1/metadata-ingestion/developing",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md",tags:[],version:"0.14.1",frontMatter:{title:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/developing.md"},sidebar:"overviewSidebar",previous:{title:"Using Docker Images During Development",permalink:"/docs/0.14.1/docker/development"},next:{title:"Creating a New GraphQL Endpoint in GMS",permalink:"/docs/0.14.1/api/graphql/graphql-endpoint-development"}},u={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Set up your Python environment",id:"set-up-your-python-environment",level:3},{value:"(Optional) Set up your Python environment for developing on Airflow Plugin",id:"optional-set-up-your-python-environment-for-developing-on-airflow-plugin",level:3},{value:"(Optional) Set up your Python environment for developing on Dagster Plugin",id:"optional-set-up-your-python-environment-for-developing-on-dagster-plugin",level:3},{value:"(Optional) Set up your Python environment for developing on Prefect Plugin",id:"optional-set-up-your-python-environment-for-developing-on-prefect-plugin",level:3},{value:"(Optional) Set up your Python environment for developing on GX Plugin",id:"optional-set-up-your-python-environment-for-developing-on-gx-plugin",level:3},{value:"Common setup issues",id:"common-setup-issues",level:3},{value:"Using Plugins in Development",id:"using-plugins-in-development",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Code layout",id:"code-layout",level:2},{value:"Code style",id:"code-style",level:2},{value:"Dependency Management",id:"dependency-management",level:2},{value:"Guidelines for Ingestion Configs",id:"guidelines-for-ingestion-configs",level:2},{value:"Naming",id:"naming",level:4},{value:"Content",id:"content",level:4},{value:"Coding",id:"coding",level:4},{value:"Testing",id:"testing",level:2},{value:"Updating golden test files",id:"updating-golden-test-files",level:3},{value:"Testing the Airflow plugin",id:"testing-the-airflow-plugin",level:3}],g={toc:p},c="wrapper";function y(e){var{components:n}=e,t=l(e,["components"]);return(0,a.yg)(c,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"developing-on-metadata-ingestion"},"Developing on Metadata Ingestion"),(0,a.yg)("p",null,"If you just want to use metadata ingestion, check the ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/metadata-ingestion"},"user-centric")," guide.\nThis document is for developers who want to develop and possibly contribute to the metadata ingestion framework."),(0,a.yg)("p",null,"Also take a look at the guide to ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/metadata-ingestion/adding-source"},"adding a source"),"."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("h3",{id:"requirements"},"Requirements"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Python 3.8+ must be installed in your host environment."),(0,a.yg)("li",{parentName:"ol"},"Java 17 (gradle won't work with newer or older versions)"),(0,a.yg)("li",{parentName:"ol"},"On Debian/Ubuntu: ",(0,a.yg)("inlineCode",{parentName:"li"},"sudo apt install python3-dev python3-venv")),(0,a.yg)("li",{parentName:"ol"},"On Fedora (if using LDAP source integration): ",(0,a.yg)("inlineCode",{parentName:"li"},"sudo yum install openldap-devel"))),(0,a.yg)("h3",{id:"set-up-your-python-environment"},"Set up your Python environment"),(0,a.yg)("p",null,"From the repository root:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion\n../gradlew :metadata-ingestion:installDev\nsource venv/bin/activate\ndatahub version  # should print "DataHub CLI version: unavailable (installed in develop mode)"\n')),(0,a.yg)("h3",{id:"optional-set-up-your-python-environment-for-developing-on-airflow-plugin"},"(Optional) Set up your Python environment for developing on Airflow Plugin"),(0,a.yg)("p",null,"From the repository root:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion-modules/airflow-plugin\n../../gradlew :metadata-ingestion-modules:airflow-plugin:installDev\nsource venv/bin/activate\ndatahub version  # should print "DataHub CLI version: unavailable (installed in develop mode)"\n\n# start the airflow web server\nexport AIRFLOW_HOME=~/airflow\nairflow webserver --port 8090 -d\n\n# start the airflow scheduler\nairflow scheduler\n\n# access the airflow service and run any of the DAG\n# open http://localhost:8090/\n# select any DAG and click on the `play arrow` button to start the DAG\n\n# add the debug lines in the codebase, i.e. in ./src/datahub_airflow_plugin/datahub_listener.py\nlogger.debug("this is the sample debug line")\n\n# run the DAG again and you can see the debug lines in the task_run log at,\n#1. click on the `timestamp` in the `Last Run` column\n#2. select the task\n#3. click on the `log` option\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"P.S. if you are not able to see the log lines, then restart the ",(0,a.yg)("inlineCode",{parentName:"strong"},"airflow scheduler")," and rerun the DAG"))),(0,a.yg)("h3",{id:"optional-set-up-your-python-environment-for-developing-on-dagster-plugin"},"(Optional) Set up your Python environment for developing on Dagster Plugin"),(0,a.yg)("p",null,"From the repository root:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion-modules/dagster-plugin\n../../gradlew :metadata-ingestion-modules:dagster-plugin:installDev\nsource venv/bin/activate\ndatahub version  # should print "DataHub CLI version: unavailable (installed in develop mode)"\n')),(0,a.yg)("h3",{id:"optional-set-up-your-python-environment-for-developing-on-prefect-plugin"},"(Optional) Set up your Python environment for developing on Prefect Plugin"),(0,a.yg)("p",null,"From the repository root:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion-modules/prefect-plugin\n../../gradlew :metadata-ingestion-modules:prefect-plugin:installDev\nsource venv/bin/activate\ndatahub version   # should print "DataHub CLI version: unavailable (installed in develop mode)"\n')),(0,a.yg)("h3",{id:"optional-set-up-your-python-environment-for-developing-on-gx-plugin"},"(Optional) Set up your Python environment for developing on GX Plugin"),(0,a.yg)("p",null,"From the repository root:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd metadata-ingestion-modules/gx-plugin\n../../gradlew :metadata-ingestion-modules:gx-plugin:installDev\nsource venv/bin/activate\ndatahub version  # should print "DataHub CLI version: unavailable (installed in develop mode)"\n')),(0,a.yg)("h3",{id:"common-setup-issues"},"Common setup issues"),(0,a.yg)("p",null,"Common issues (click to expand):"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"datahub command not found with PyPI install"),(0,a.yg)("p",null,"If you've already run the pip install, but running ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," in your command line doesn't work, then there is likely an issue with your PATH setup and Python."),(0,a.yg)("p",null,"The easiest way to circumvent this is to install and run via Python, and use ",(0,a.yg)("inlineCode",{parentName:"p"},"python3 -m datahub")," in place of ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade acryl-datahub\npython3 -m datahub --help\n"))),(0,a.yg)("details",null,(0,a.yg)("summary",null,'Wheel issues e.g. "Failed building wheel for avro-python3" or "error: invalid command \'bdist_wheel\'"'),(0,a.yg)("p",null,"This means Python's ",(0,a.yg)("inlineCode",{parentName:"p"},"wheel")," is not installed. Try running the following commands and then retry."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install --upgrade pip wheel setuptools\npip cache purge\n"))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Failure to install confluent_kafka: \"error: command 'x86_64-linux-gnu-gcc' failed with exit status 1\""),(0,a.yg)("p",null,"This sometimes happens if there's a version mismatch between the Kafka's C library and the Python wrapper library. Try running ",(0,a.yg)("inlineCode",{parentName:"p"},"pip install confluent_kafka==1.5.0")," and then retrying.")),(0,a.yg)("h3",{id:"using-plugins-in-development"},"Using Plugins in Development"),(0,a.yg)("p",null,"The syntax for installing plugins is slightly different in development. For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"- pip install 'acryl-datahub[bigquery,datahub-rest]'\n+ pip install -e '.[bigquery,datahub-rest]'\n")),(0,a.yg)("h2",{id:"architecture"},"Architecture"),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/datahub-metadata-ingestion-framework.png"})),(0,a.yg)("p",null,"The architecture of this metadata ingestion framework is heavily inspired by ",(0,a.yg)("a",{parentName:"p",href:"https://gobblin.apache.org/"},"Apache Gobblin")," (also originally a LinkedIn project!). We have a standardized format - the MetadataChangeEvent - and sources and sinks which respectively produce and consume these objects. The sources pull metadata from a variety of data systems, while the sinks are primarily for moving this metadata into DataHub."),(0,a.yg)("h2",{id:"code-layout"},"Code layout"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The CLI interface is defined in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/entrypoints.py"},"entrypoints.py")," and in the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/cli"},"cli")," directory."),(0,a.yg)("li",{parentName:"ul"},"The high level interfaces are defined in the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api"},"API directory"),"."),(0,a.yg)("li",{parentName:"ul"},"The actual ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source"},"sources")," and ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/sink"},"sinks")," have their own directories. The registry files in those directories import the implementations."),(0,a.yg)("li",{parentName:"ul"},"The metadata models are created using code generation, and eventually live in the ",(0,a.yg)("inlineCode",{parentName:"li"},"./src/datahub/metadata")," directory. However, these files are not checked in and instead are generated at build time. See the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/scripts/codegen.sh"},"codegen")," script for details."),(0,a.yg)("li",{parentName:"ul"},"Tests live in the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/tests"},(0,a.yg)("inlineCode",{parentName:"a"},"tests"))," directory. They're split between smaller unit tests and larger integration tests.")),(0,a.yg)("h2",{id:"code-style"},"Code style"),(0,a.yg)("p",null,"We use black, isort, flake8, and mypy to ensure consistent code style and quality."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Assumes: pip install -e '.[dev]' and venv is activated\nblack src/ tests/\nisort src/ tests/\nflake8 src/ tests/\nmypy src/ tests/\n")),(0,a.yg)("p",null,"or you can run from root of the repository"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./gradlew :metadata-ingestion:lintFix\n")),(0,a.yg)("p",null,"Some other notes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Prefer mixin classes over tall inheritance hierarchies."),(0,a.yg)("li",{parentName:"ul"},"Write type annotations wherever possible."),(0,a.yg)("li",{parentName:"ul"},"Use ",(0,a.yg)("inlineCode",{parentName:"li"},"typing.Protocol")," to make implicit interfaces explicit."),(0,a.yg)("li",{parentName:"ul"},"If you ever find yourself copying and pasting large chunks of code, there's probably a better way to do it."),(0,a.yg)("li",{parentName:"ul"},"Prefer a standalone helper method over a ",(0,a.yg)("inlineCode",{parentName:"li"},"@staticmethod"),"."),(0,a.yg)("li",{parentName:"ul"},"You probably should not be defining a ",(0,a.yg)("inlineCode",{parentName:"li"},"__hash__")," method yourself. Using ",(0,a.yg)("inlineCode",{parentName:"li"},"@dataclass(frozen=True)")," is a good way to get a hashable class."),(0,a.yg)("li",{parentName:"ul"},'Avoid global state. In sources, this includes instance variables that effectively function as "global" state for the source.'),(0,a.yg)("li",{parentName:"ul"},"Avoid defining functions within other functions. This makes it harder to read and test the code."),(0,a.yg)("li",{parentName:"ul"},"When interacting with external APIs, parse the responses into a dataclass rather than operating directly on the response object.")),(0,a.yg)("h2",{id:"dependency-management"},"Dependency Management"),(0,a.yg)("p",null,'The vast majority of our dependencies are not required by the "core" package but instead can be optionally installed using Python "extras". This allows us to keep the core package lightweight. We should be deliberate about adding new dependencies to the core framework.'),(0,a.yg)("p",null,"Where possible, we should avoid pinning version dependencies. The ",(0,a.yg)("inlineCode",{parentName:"p"},"acryl-datahub")," package is frequently used as a library and hence installed alongside other tools. If you need to restrict the version of a dependency, use a range like ",(0,a.yg)("inlineCode",{parentName:"p"},">=1.2.3,<2.0.0")," or a negative constraint like ",(0,a.yg)("inlineCode",{parentName:"p"},">=1.2.3, !=1.2.7")," instead. Every upper bound and negative constraint should be accompanied by a comment explaining why it's necessary."),(0,a.yg)("p",null,"Caveat: Some packages like Great Expectations and Airflow frequently make breaking changes. For such packages, it's ok to add a \"defensive\" upper bound with the current latest version, accompanied by a comment. It's critical that we revisit these upper bounds at least once a month and broaden them if possible."),(0,a.yg)("h2",{id:"guidelines-for-ingestion-configs"},"Guidelines for Ingestion Configs"),(0,a.yg)("p",null,"We use ",(0,a.yg)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/"},"pydantic")," to define the ingestion configs.\nIn order to ensure that the configs are consistent and easy to use, we have a few guidelines:"),(0,a.yg)("h4",{id:"naming"},"Naming"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Most important point: we should ",(0,a.yg)("strong",{parentName:"li"},"match the terminology of the source system"),". For example, snowflake shouldn\u2019t have a ",(0,a.yg)("inlineCode",{parentName:"li"},"host_port"),", it should have an ",(0,a.yg)("inlineCode",{parentName:"li"},"account_id"),"."),(0,a.yg)("li",{parentName:"ul"},"We should prefer slightly more verbose names when the alternative isn\u2019t descriptive enough. For example ",(0,a.yg)("inlineCode",{parentName:"li"},"client_id")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"tenant_id")," over a bare ",(0,a.yg)("inlineCode",{parentName:"li"},"id")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"access_secret")," over a bare ",(0,a.yg)("inlineCode",{parentName:"li"},"secret"),"."),(0,a.yg)("li",{parentName:"ul"},"AllowDenyPatterns should be used whenever we need to filter a list. The pattern should always apply to the fully qualified name of the entity. These configs should be named ",(0,a.yg)("inlineCode",{parentName:"li"},"*_pattern"),", for example ",(0,a.yg)("inlineCode",{parentName:"li"},"table_pattern"),"."),(0,a.yg)("li",{parentName:"ul"},"Avoid ",(0,a.yg)("inlineCode",{parentName:"li"},"*_only")," configs like ",(0,a.yg)("inlineCode",{parentName:"li"},"profile_table_level_only")," in favor of ",(0,a.yg)("inlineCode",{parentName:"li"},"profile_table_level")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"profile_column_level"),". ",(0,a.yg)("inlineCode",{parentName:"li"},"include_tables")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"include_views")," are a good example.")),(0,a.yg)("h4",{id:"content"},"Content"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All configs should have a description."),(0,a.yg)("li",{parentName:"ul"},"When using inheritance or mixin classes, make sure that the fields and documentation is applicable in the base class. The ",(0,a.yg)("inlineCode",{parentName:"li"},"bigquery_temp_table_schema")," field definitely shouldn\u2019t be showing up in every single source\u2019s profiling config!"),(0,a.yg)("li",{parentName:"ul"},"Set reasonable defaults!",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The configs should not contain a default that you\u2019d reasonably expect to be built in. As a ",(0,a.yg)("strong",{parentName:"li"},"bad")," example, the Postgres source\u2019s ",(0,a.yg)("inlineCode",{parentName:"li"},"schema_pattern")," has a default deny pattern containing ",(0,a.yg)("inlineCode",{parentName:"li"},"information_schema"),". This means that if the user overrides the schema_pattern, they\u2019ll need to manually add the information_schema to their deny patterns. This is a bad, and the filtering should\u2019ve been handled automatically by the source\u2019s implementation, not added at runtime by its config.")))),(0,a.yg)("h4",{id:"coding"},"Coding"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use a single pydantic validator per thing to validate - we shouldn\u2019t have validation methods that are 50 lines long."),(0,a.yg)("li",{parentName:"ul"},"Use ",(0,a.yg)("inlineCode",{parentName:"li"},"SecretStr")," for passwords, auth tokens, etc."),(0,a.yg)("li",{parentName:"ul"},"When doing simple field renames, use the ",(0,a.yg)("inlineCode",{parentName:"li"},"pydantic_renamed_field")," helper."),(0,a.yg)("li",{parentName:"ul"},"When doing field deprecations, use the ",(0,a.yg)("inlineCode",{parentName:"li"},"pydantic_removed_field")," helper."),(0,a.yg)("li",{parentName:"ul"},"Validator methods must only throw ValueError, TypeError, or AssertionError. Do not throw ConfigurationError from validators."),(0,a.yg)("li",{parentName:"ul"},"Set ",(0,a.yg)("inlineCode",{parentName:"li"},"hidden_from_docs")," for internal-only config flags. However, needing this often indicates a larger problem with the code structure. The hidden field should probably be a class attribute or an instance variable on the corresponding source.")),(0,a.yg)("h2",{id:"testing"},"Testing"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Follow standard install from source procedure - see above.\n\n# Install, including all dev requirements.\npip install -e '.[dev]'\n\n# For running integration tests, you can use\npip install -e '.[integration-tests]'\n\n# Run the full testing suite\npytest -vv\n\n# Run unit tests.\npytest -m 'not integration'\n\n# Run Docker-based integration tests.\npytest -m 'integration'\n\n# You can also run these steps via the gradle build:\n../gradlew :metadata-ingestion:lint\n../gradlew :metadata-ingestion:lintFix\n../gradlew :metadata-ingestion:testQuick\n../gradlew :metadata-ingestion:testFull\n../gradlew :metadata-ingestion:check\n# Run all tests in a single file\n../gradlew :metadata-ingestion:testSingle -PtestFile=tests/unit/test_bigquery_source.py\n# Run all tests under tests/unit\n../gradlew :metadata-ingestion:testSingle -PtestFile=tests/unit\n")),(0,a.yg)("h3",{id:"updating-golden-test-files"},"Updating golden test files"),(0,a.yg)("p",null,'If you made some changes that require generating new "golden" data files for use in testing a specific ingestion source, you can run the following to re-generate them:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pytest tests/integration/<source>/<source>.py --update-golden-files\n")),(0,a.yg)("p",null,"For example,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pytest tests/integration/dbt/test_dbt.py --update-golden-files\n")),(0,a.yg)("h3",{id:"testing-the-airflow-plugin"},"Testing the Airflow plugin"),(0,a.yg)("p",null,"For the Airflow plugin, we use ",(0,a.yg)("inlineCode",{parentName:"p"},"tox")," to test across multiple sets of dependencies."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd metadata-ingestion-modules/airflow-plugin\n\n# Run all tests.\ntox\n\n# Run a specific environment.\n# These are defined in the `tox.ini` file\ntox -e py310-airflow26\n\n# Run a specific test.\ntox -e py310-airflow26 -- tests/integration/test_plugin.py\n\n# Update all golden files.\ntox -- --update-golden-files\n\n# Update golden files for a specific environment.\ntox -e py310-airflow26 -- --update-golden-files\n")))}y.isMDXComponent=!0}}]);