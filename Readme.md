# [Initial] Web Automation Framework

This is a base project to start from scratch with automation testing for a new project, supports multiple envs, uses POM antipattern, faker example, easy config, implements fixtures and mocked data, graphql calls (you can add another command to use the API calls), it also has prettier rules and git ignore file by default (cypress version 12).

Also you will find an example to intercept and check graphql request

TB Added: mocked data

# Before you start you will need to have already installed

- Git
- Node
- VsCode
- Google Chrome

# Dowload and installation

Download from: `https://github.com/luisgzvs/cypress12BaseProject.git`
Go inside project you recently dowloaded and do an npm install
Execute: `touch .env` in the terminal inside root project

.env example

```
#Environment to run the test
ENVIRONMENT=

#URLs of the diferent environments
PROD_BASE_URL=
STAGING_BASE_URL=
QA_BASE_URL=

# API base URLs
GRAPHQL_ENDPOINT=
API_ENDPOINT=

```

Finally do an `npm install` and wait to be completed and you are all set

Note: To use API please set ENVIRONMENT=API since this is just an initial set and resources used are all public the main page is not the same as the API one, leave empty the ENVIRONMENT variable to use guru99 as test page
