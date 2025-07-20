---
title: Configuring Sublime Text to work with Prettier and ESLint
date: 2022-03-12
description: Instructions on how to configure Sublime Text to automatically fix errors and format files on save using ESLint and Prettier.
tags: tools
---

I've been a Sublime Text user for the longest time. Even though I didn't switch to Visual Studio Code right away when it got mainstream, I
did change in the end. However I'm still a massive Sublime Text fan to this day and still use it daily for a bunch of different things.

Here are some instructions, just for fun, on how to configure Sublime Text to automatically fix errors and format files on save using ESLint
and Prettier.

## Install [JsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)

For this package to work you need to make sure `prettier` is installed either globally (`yarn global add prettier`) or locally in your
current project (`yarn add --dev prettier`).

Also, you'll have to specify the path to Node in your `JsPrettier.sublime-settings` config file:

```json
{
	"auto_format_on_save": true,
	"node_path": "~/.nvm/versions/node/v16.14.0/bin/node"
}
```

## Install [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter) and [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)

Again, you'll need to make sure `eslint` is installed either globally (`yarn global add eslint`) or locally in your current project
(`yarn add --dev eslint`).

You'll also need to update your `SublimeLinter.sublime-settings` config file to point to the location of Node:

```json
{
	"linters": {
		"eslint": {
			"env": {
				"PATH": "~/.nvm/versions/node/v16.14.0/bin/"
			},
			"args": ["--env=es6"]
		}
	}
}
```

## Install [ESLint-Formatter](https://github.com/TheSavior/ESLint-Formatter)

We'll need to install this package if we want to automatically fix any errors on file save. Once again we'll have to edit the config file
for this package, in this case `ESLint-Formatter.sublime-settings`, and point it to the right location of our Node install:

```json
{
	"node_path": {
		"osx": "~/.nvm/versions/node/v16.14.0/bin/node"
	},
	"format_on_save": true,
	"format_on_save_extensions": ["js", "jsx", "ts", "tsx"]
}
```
