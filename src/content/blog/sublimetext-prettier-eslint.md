---
title: Configuring Sublime Text to work with Prettier and ESLint
date: 2022-03-12
description: Instructions on how to configure Sublime Text to automatically fix errors and format files on save using ESLint and Prettier.
tags: tools
---

I've been a Sublime Text user for the longest time. Even though I didn't switch to Visual Studio Code right away when it got mainstream, I did change in the end. However I'm still a massive Sublime Text fan to this day and still use it daily for a bunch of different things.

Here are some instructions, just for fun, on how to configure Sublime Text to automatically fix errors and format files on save using ESLint and Prettier.

## Enable the `subl` command line tool

First things first, we've got to make sure the `subl` command line tool is available and working by adding the Sublime Text bin folder to our PATH in `~/.zprofile` (as per the [official docs](https://www.sublimetext.com/docs/command_line.html#mac)):

```bash
echo 'export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"' >> ~/.zprofile
```

This will let us open Sublime Text from the terminal so it inherits our shell's PATH, and is particularly important for all the Node dependent packages below.

## Install [JsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)

For this package to work we'll need to make sure `prettier` is installed locally in our project:

```bash
# npm
npm install --save-dev prettier

# yarn
yarn add --dev prettier
```

In our `JsPrettier.sublime-settings` config file we'll point `node_path` at a stable Node install that won't change when we update Node (e.g. via nvm). A Homebrew-managed Node install works well for this and no, nvm's Node and Homebrew's Node won't clash. In your terminal, nvm controls which Node is active via your shell PATH, so your project work is unaffected. LSP on the other hand would only use the Homebrew Node because you've explicitly pointed `node_path` at it.

```json
{
	"auto_format_on_save": true,
	"node_path": "/opt/homebrew/bin/node",
	"prettier_cli_path": "/absolute/path/to/project/node_modules/prettier/bin-prettier.js"
}
```

Two things here:

- Sublime does not expand `~` in settings values, so paths like `~/.nvm/...` will not work. Always use full absolute paths.
- You may get away without setting `prettier_cli_path` explicitly, but this is particularly important if you are working in a monorepo, as leaving it empty causes JsPrettier to find the nearest `node_modules/.bin/prettier`, which may be a nested package rather than the root.

## Install [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter) and [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)

We need to make sure `eslint` is installed locally in our project:

```bash
# npm
npm install --save-dev eslint

# yarn
yarn add --dev eslint
```

In our `SublimeLinter.sublime-settings` config file, we'll point `PATH` at the directory containing the Node binary. Again, it's important that we use a full absolute path, as `~` is not expanded by Sublime:

```json
{
	"linters": {
		"eslint": {
			"env": {
				"PATH": "/opt/homebrew/bin"
			},
			"args": ["--env=es6"]
		}
	}
}
```

## Install [ESLint-Formatter](https://github.com/TheSavior/ESLint-Formatter)

We'll need to install this package if we want to automatically fix any errors on file save. Once again we'll have to edit the config file for this package, in this case `ESLint-Formatter.sublime-settings`, and point it to the right location of our Node install:

```json
{
	"node_path": {
		"osx": "/opt/homebrew/bin/node"
	},
	"format_on_save": true,
	"format_on_save_extensions": ["js", "jsx", "ts", "tsx"]
}
```
