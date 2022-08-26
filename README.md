# blog

## Prerequisites

-   Yarn (https://yarnpkg.com/)

## Development Tasks

| Command        | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start`   | Start the app on http://localhost:8000 and watch for changes |
| `yarn build`   | Create a production build in the `public` directory          |

## Continuous Deployment

All commits to `master` trigger a deployment to the production environment: `https://fedknu.com`.
