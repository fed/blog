# blog

## Prerequisites

-   Yarn (https://yarnpkg.com/)

## Development Tasks

| Command           | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| `yarn install`    | Fetch dependencies and build binaries for any of the modules                       |
| `yarn start`      | Start the app on http://localhost:8000 and watch for changes                       |
| `yarn build`      | Create a production build in the `public` directory                                |
| `yarn lint`       | Run ESLint to identify any linting errors                                          |
| `yarn format`     | Run Prettier to format the code                                                    |
| `yarn test`       | Run the unit test suite and report the results                                     |
| `yarn test:watch` | Run the unit test suite in watch mode                                              |
| `yarn test:debug` | Run the unit test suite in a Node process that an external debugger can connect to |

## Continuous Deployment

All commits to `master` trigger a deployment to the production environment: `https://fedknu.com`.
