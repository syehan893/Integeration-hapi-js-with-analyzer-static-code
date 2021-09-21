# Integeration Hapi

[![N|Solid](https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png)](https://hapi.dev/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Integeration hapi with analyze static code

## Requirements

  - hapi js (rest API)
  - sonarqube : 7.8 (static code analyzer) 
   - ngrok (Public URLs for exposing your local web server)
   - sonarscanner (plugin in hapi js)
   - gitlab runner (used to run project tasks and send back to gitlab)
   - jest (plugin in hapi js for integration testing)
  
## Documentation
*  https://hapi.dev/
*  https://www.sonarqube.org/
*  https://ngrok.com/
*  https://www.npmjs.com/package/sonarqube-scanner
*  https://docs.gitlab.com/runner
*  http://niralar.com/testing-hapi-js-with-jest/

### Installation

Install all tools on your local computer and  [setup your sonaeqube](https://medium.com/@harith.sankalpa/how-to-integrate-sonarqube-into-your-node-js-ts-application-for-better-analysis-of-your-code-91d830e80ec3).

## Quick Start
1) Add file .gitlab-ci.yml in root directory on hapi js project.
2) Configure .gitlab-ci.yml in local root directory.

    ![config-ci](https://i.ibb.co/F35SpJj/ci-yml.png)

3) Start sonarqube (on windows)

    > C:\sonarqube-7.8\bin\windows-x86-64>startsonar.bat

    ![start-sonar](https://i.ibb.co/sK88f16/Start-Sonar.png)

4) To expose a web server running on your local machine to the internet.

    > ngrok http 9000

    ![rest-hapi-demo-alt-optimized](https://i.ibb.co/YyrKmj3/ngrok-9000.png)

5) Add sonar-project.js in local root directory
    
    ![sonar-project](https://i.ibb.co/GnjYncV/sonar-project.png)
    
6) In serverUrl use a Forwarding http from ngrok.
    
    
