---
title: A gente intro to monorepos with Turborepo
date: 2025-07-31
tags: general
draft: true
---

A monorepo is a single repository that houses multiple projects like frontend apps, shared UI libraries, utilities and configurations, all managed together.

A huge benefit of using a monorepo is having a simplified/unified dependency management which makes it easy to share code and components across consumers. Since all the consuming apps of the design system and other libraries live in the same repo, you avoid the problem of different versions coexisting and having to update them separately (think of vulnerabilities, different features and bugfixes across versions etc.). This means, for example, upgrading a design system component can be done once, tested across all apps, and deployed consistently, all in an atomic change and with no version drift.

Monorepos also provide an improved developer experience by hosting everything in a single place. This not only allows for an easier navigation and onboarding, but also consistent tooling/scripts across projects and an easier CI/CD management. Additionally tools like Turborepo or Nx can intelligently build/test only what's affected, which results in faster builds and more efficient pipelines.

## Turborepo

The recommended file and directory structure for a Turborepo monorepo is something along the lines of:

```
my-monorepo/
  package.json
  pnpm-workspace.yaml
  turbo.json
  tsconfig.base.json
  apps/
    web/       ← Next.js or frontend app
    docs/      ← Docusaurus, etc.
    api/       ← Express.js, etc.
  packages/
    ui/        ← Shared UI components
    utils/     ← Shared utility functions
    types/     ← Shared TypeScript types
```

Splitting into main directories like `apps/` and `packages/` is a best practice.

- `apps/`: houses runnable applications (e.g. frontend and backend).
- `packages/`: shared code like UI components, utilities, TypeScript types.

Ideally we want to centralise any shared logic in `packages/` (such as UI libraries, utility modules, etc.). Each package is versioned and tied into the workspace.

Apps consume packages as dependencies, for example:

```
import { Button } from "@my-app/ui/button";
```

Note that the `@my-app/ui` package name is defined in the package.json file for the `@my-app/ui` package:

```
{
  "name": "@my-app/ui",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./*": "./src/*.tsx"
  },
  // ...
}
```

Here's a [simple monorepo example powered by Turborepo](https://github.com/vercel/turborepo/tree/main/examples/basic), as well as another [example for a basic design system, also powered by Turborepo](https://github.com/vercel/turborepo/tree/main/examples/design-system).

## Package managers

Turborepo uses package managers with workspace support such as pnpm and Yarn to manage interproject dependencies via `workspace:*` specifiers. This ensures local linking and consistent dependency resolution. This means that the version for any package we install in an app will be `workspace:*` instead of some specific semver version number.

## Configuration

We place shared configuration files like `package.json`, `pnpm‑workspace.yaml`, `turbo.json`, `tsconfig.base.json`, ESLint and Prettier configs at the monorepo root for consistency across projects.

We also define a `turbo.json` file at the root to orchestrate tasks like build, lint, test, and dev.

## Workspaces, packages and apps

A workspace is a folder containing a `package.json` file. Each workspace can declare its own dependencies, run its own scripts, and export code for other workspaces to use:

```json
/* ./packages/button/package.json */
{
  "main": "./index.tsx",
  "types": "./index.tsx"
}
```

`main` defines the entry point for this package, while `types` indicates where the TypeScript types are located.

Apps consume these packages as dependencies, for example:


```js
import { Button } from "@my-app/ui/button";
```

Note that the `@my-app/ui` package name is defined in the `package.json` file for the "ui" package:

```json
{
  "name": "@my-app/ui",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./*": "./src/*.tsx"
  },
  // ...
}
```

Turborepo uses workspace enabled package managers like PNPM, Yarn, Bun, or npm workspaces to manage dependencies via `workspace:*` specifiers. This ensures local linking and consistent dependency resolution. This means that the version for any package we install in an app will be `workspace:*` instead of some specific semver version number.

This is how the package/library is listed as a dependency in the consuming application:

```json
{
  "dependencies": {
    "@my-app/tokens": "workspace:*",
    "@my-app/button": "workspace:*",
    "@my-app/link": "workspace:*",
    "@my-app/toggle": "workspace:*"
  }
}
```

## Adding dependencies and running scripts

We can add dependencies to a specific workspace by passing a filter:

```sh
# pnpm
pnpm --filter WORKSPACE_NAME add PACKAGE_NAME

# yarn
yarn workspace WORKSPACE_NAME add PACKAGE_NAME
```

To add a dependency to the root workspace, pass the `-w` or `--workspace-root` flag, without any filter:

```sh
# pnpm
pnpm add -w PACKAGE_NAME
```

To add a workspace dependency use the `--workspace` boolean flag:

```sh
# pnpm
pnpm --filter WORKSPACE_NAME add PACKAGE_NAME --workspace
```

For example:

```sh
# pnpm
pnpm --filter @my-app/link add @my-app/tokens --workspace
```

Removing dependencies is similar, using the `--filter` flag:

```sh
# pnpm
pnpm --filter WORKSPACE_NAME remove PACKAGE_NAME
```

Runnings scripts on a single workspace also works the same way. With pnpm we can use the `--filter` flag, and with yarn we simply pass in the workspace name. For example, this is how you'd run the dev script on the "docs" workspace:

```sh
# pnpm
pnpm --filter @my-app/link run storybook

# yarn
yarn workspace @my-app/link run storybook
```

Alternatively it's also possible to cd into the workspace itself and run pnpm run dev.

If you are using Yarn, to scope your command use workspace  instead of the `--filter` flag:

```sh
# pnpm
pnpm --filter @my-app/link add PACKAGE_NAME

# yarn
yarn workspace WORKSPACE_NAME add PACKAGE_NAME
```
