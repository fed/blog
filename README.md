# fknussel.com [![Netlify Status](https://api.netlify.com/api/v1/badges/779ca632-50c8-4539-8863-230cf7c7cdbc/deploy-status)](https://app.netlify.com/sites/epic-mccarthy-4985de/deploys)

## Prerequisites

-   Node.js (https://nodejs.org/)
-   Yarn (https://yarnpkg.com/)

## Development Tasks

| Command        | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start`   | Start the app on http://localhost:8000 and watch for changes |
| `yarn build`   | Create a production build in the `public` directory          |

## Continuous Deployment

All commits to `master` trigger a deployment to the production environment: https://fknussel.com.
