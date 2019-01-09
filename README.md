# fknussel.com

## Prerequisites

-   Node.js (https://nodejs.org/)
-   Yarn (https://yarnpkg.com/)

## Development Tasks

| Command        | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start`   | Start the app on http://localhost:8000 and watch for changes |

## CI/CD

Continuous integration and deployment is handled by [CircleCI](https://circleci.com/gh/fknussel/fknussel.com).

-   A new build will get automatically triggered every time a commit gets merged in or pushed to **any** branch.
-   All commits to `master` trigger a deployment to the `production` environment: https://fknussel.com.

# Credits

Forked from [Dan Abramov's personal blog](https://github.com/gaearon/overreacted.io) which is in turn a fork of the [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).
