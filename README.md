# Node TS Boilerplate

This repository hosts the code for the **Node TS Boilerplate**.

## Table of Contents

- [Introduction](#introduction)
  - [Technology Stack](#technology-stack)
- [Local Installation](#local-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the Project](#run-the-project)
- [Debugging](#Debugging)
- [Tests](#tests)
- [Coding Styles](#coding-styles)
- [Deployment](#deployment)
- [Further Documentation](#further-documentation)
- [Versions](#versions)
- [License](#license)

## Introduction

Node TS Boilerplate is a fully setup Node.js + Typescript basecode template to speed up the initial development of any new project.

[⇧ back to top](#table-of-contents)

### Technology Stack

The project is built with the following technologies:

- [Jest](https://jestjs.io) - Javascript Testing Framework
- [NodeJS](https://jestjs.io/) - Server Side JavaScript Engine

[⇧ back to top](#table-of-contents)

## Local Installation

This section describes how to run the project locally, so that you can develop and
test the code. To learn how to deploy the project, see the [Deployment](#deployment) section.

### Prerequisites

To run the project locally, install the following packages:

- [Homebrew](https://brew.sh)
- [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03#file-mac-md)
- [Node (10.14.1 - 14.x)](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/docker-for-mac/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

**Note:** Optionally, you can use [nvm](https://github.com/creationix/nvm) or
[nave](https://github.com/isaacs/nave) to manage your Node environments.

[⇧ back to top](#table-of-contents)

### Installation

After installing the prerequisites, open a terminal and follow the next steps to
install the project:

1. Clone the repository:

   ```shell
   git clone https://github.com/vikgmdev/node-ts-boilerplate.git
   ```

1. Move into the newly created folder:

   ```shell
   cd node-ts-boilerplate
   ```

1. Install the project dependencies:

   ```shell
   npm install
   ```

1. [Optional] Create a local `.env` file. This can be used to point the server and set local variables.

   To use `.env.sample` as a starting place, you can copy it to `.env` with the following command:

   ```shell
   cp .env.sample .env
   ```

1. Start the server:

   ```shell
   npm start
   ```

[⇧ back to top](#table-of-contents)

### Run the Project

To run the project, open a terminal and start the project in one of
the following modes:

- **Development mode**. Run this while developing. It auto-updates the
  application as you make changes in the code. To run the project in
  development mode, use the following command:

  ```shell
  npm start
  ```

- **Production mode**. To run the project in production
  mode, use the following command:

  ```shell
  npm run compile
  node dist/server/index.js
  ```

- **Docker container**. To create a docker container and run your project, use
  the following command:

  ```shell
  make dc-start
  ```

To verify that the project is running, open a web browser and enter the
following URL in the address bar:

```txt
http://localhost:4000
```

The following message appears:

> 🚀 Welcome to node-ts-boilerplate

[⇧ back to top](#table-of-contents)

## Debugging

To run the project in a way that allows an inspector to be attached to the process, execute the following command:

```shell
npm run start-debug
```

For [VS Code](https://code.visualstudio.com/), use the following `.vscode/launch.json` file to enable debugging directly from your editor:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Process",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```

## Tests

To run the tests, execute the following command:

```shell
npm test
```

[⇧ back to top](#table-of-contents)

## Coding Styles

This project uses TypeScript. While developing, use ESLint and follow the
Airbnb JavaScript Styling Guide. To run the linter and the static type checker,
execute:

```shell
npm run lint
```

[⇧ back to top](#table-of-contents)

## Deployment

Once CI/CD is in place, the build process triggers as soon as your PR
is merged into master.

[⇧ back to top](#table-of-contents)

## Versions

TBD

[⇧ back to top](#table-of-contents)

## License

TBD
