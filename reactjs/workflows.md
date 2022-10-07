### How do you manage multiple environments in React ?

- Install command:

```
npm install env-cmd or npm install -g env-cmd
```

- Create environment files with required configuration.

  - .env.development
  - .env.production
  - .env.qa

- Add configuration for each environment

.env.development

```
REACT_APP_API_URL = "https://dev-api.com/"
REACT_APP_ENV = "dev"
```

.env.production

```
REACT_APP_API_URL = "https://prod-api.com/"
REACT_APP_ENV = "prod"
```

.env.qa

```
REACT_APP_API_URL = "https://qa-api.com/"
REACT_APP_ENV = "qa"
```

- update script for each environemnt in package.json

```
...

"scripts":{
  "build" : "react-scripts build"
  "build:qa" : "env-cmd -f .env.qa npm run build"
  "build:production": "env-cmd -f .env.production npm run production"
}
...

```

- build commands for each environment

```
// For QA
npm run build:qa

// For PROD
npm run build:production

```

- How to use enviroment variables in project.

process.env.REACT_APP_API_URL
