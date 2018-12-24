# fknussel.com

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Start the app on http://localhost:8000 and watch for changes |

## CI/CD

Continuous integration and deployment is handled by [CircleCI](https://circleci.com/gh/fknussel/smartline-api). A new build will get automatically triggered every time a commit gets merged in or pushed to **any** branch.

All commits to `master` trigger a deployment to the `production` environment: https://fknussel.com.

# Credits

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.
