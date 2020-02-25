const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://a008e835.ngrok.io',
       options : {
        'sonar.login':'admin',
        'sonar.password': 'admin',
        'sonar.sources': '.',
        'sonar.inclusions' : 'src/**', // Entry point of your code
      }
     }, () => {});