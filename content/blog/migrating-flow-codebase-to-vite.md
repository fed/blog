---
title: Migrating a Flow create-react-app to vite
date: 2025-11-08
tags: react
draft: true
---

https://thinkdrastic.net/journal/2023/09/20/migrating-a-flow-typed-react-spa-project-from-create-react-app-and-webpack-to-vite/
https://thinkdrastic.net/journal/2024/01/02/using-flow-types-with-vite-the-hermes-way/

Add : React.Node to all components
export default function ClassifiedCreateRoute(): React.Node {

.js -> .jsx extension

environments:
https://flow-typed.github.io/flow-typed/#/flow-typed-config

env vars:

```
// @flow
declare interface Import$Meta extends Import$Meta {
	env: {
		[key: string]: string
	};
}
```
