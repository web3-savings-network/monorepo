# Web3 Savings Network Backend API

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Requirements

- Node.js 14+ and npm

## Getting started

The AccessControlGateway is setup for deployment to an AWS Lambda Server.

Deployment is handled via the [Serverless](https://www.serverless.com/) framework.

https://www.serverless.com/

### Running Locally

The API can be run locally: emulating an AWS Lambda endpoint using a `localhost` endpoint.

```
npm run dev
```

The local server is now listening at http://localhost:4000

### Deploy to production

You can deploy to production with the following command:

```
npm run deploy-prod
```

<hr/>

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.
