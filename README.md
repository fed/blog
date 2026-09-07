# blog

## Prerequisites

- Node.js (https://nodejs.org)

## Development Tasks

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm install`     | Fetch dependencies and build binaries for any of the modules |
| `npm start`       | Start the app on http://localhost:6789 and watch for changes |
| `npm run build`   | Create a production build in the `dist` directory            |
| `npm run preview` | Serve the production build locally                           |

Posts live in `src/content/blog`, either as `a-post.md` or as `a-post/index.md` when the post has
its own images. Both produce `/blog/a-post/`. Mark a post with `draft: true` to keep it out of
production builds while still seeing it on the dev server.

## Deployments

All commits to `master` trigger a deployment to the production environment: `https://fedknu.com`.
