---
title: Monorepos
date: 2025-07-31
tags: general
draft: true
---

A monorepo is a single repository that houses multiple projects like frontend apps, shared UI libraries, utilities and configurations, all managed together.

A huge benefit of using a monorepo is having a simplified/unified dependency management which makes it easy to share code and components across consumers. Since all the consuming apps of the design system and other libraries live in the same repo, you avoid the problem of different versions coexisting and having to update them separately (think of vulnerabilities, different features and bugfixes across versions etc.). This means, for example, upgrading a design system component can be done once, tested across all apps, and deployed consistently, all in an atomic change and with no version drift.

Monorepos also provide an improved developer experience by hosting everything in a single place. This not only allows for an easier navigation and onboarding, but also consistent tooling/scripts across projects and an easier CI/CD management. Additionally tools like Turborepo or Nx can intelligently build/test only what’s affected, which results in faster builds and more efficient pipelines.

## Turborepo

The recommended file and directory structure for a Turborepo monorepo is:

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

Splitting into main directories like `apps/` and `packages/` is a best practice.

- `apps/`: houses runnable applications (e.g., frontend and backend).
- `packages/`: shared code like UI components, utilities, TypeScript types.

Ideally we want to centralise any shared logic in `packages/` (such as UI libraries, utility modules, etc.). Each package is versioned and tied into the workspace.

Apps consume these packages as dependencies, for example:

```
import { Button } from "@repo/ui/button";
```

Note that the `@repo/ui` package name is defined in the package.json file for the “ui” package:

```
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "exports": {
    "./*": "./src/*.tsx"
  },
  // ...
}
```

Turborepo uses workspace-enabled package managers like PNPM, Yarn, Bun, or npm workspaces to manage interproject dependencies via `workspace:*` specifiers. This ensures local linking and consistent dependency resolution. This means that the version for any package we install in an app will be `workspace:*` instead of some specific semver version number.

We place shared configuration files like `package.json`, `pnpm‑workspace.yaml`, `turbo.json`, `tsconfig.base.json`, ESLint and Prettier configs at the monorepo root for consistency across projects.

We also define a `turbo.json` file at the root to orchestrate tasks like build, lint, test, and dev.

Here’s a simple monorepo example powered by Turborepo: https://github.com/vercel/turborepo/tree/main/examples/basic

Here’s another example, this time for a basic design system: https://github.com/vercel/turborepo/tree/main/examples/design-system
