---
title: Getting started with Elm tooling
date: 2025-06-29
tags: elm
draft: true
---

## Installing Elm

First step is to install Elm globally. You can either download the installer from the [official Elm website](https://guide.elm-lang.org/install/elm.html) or use npm: `npm install --global elm`.

The current version at the time of this writing is `v0.19.1`.

## Initialising a new Elm project

To start a new Elm project we need to run `elm init`, which will create an `elm.json` file and a `src` directory where your code will live. This file would be equivalent to a `package.json` file, and `elm init` similar to `npm init`.

```txt
~/workspace
❯ mkdir elm-demo

~/workspace
❯ cd elm-demo

~/workspace/elm-demo
❯ elm init
Hello! Elm projects always start with an elm.json file. I can create them!

Now you may be wondering, what will be in this file? How do I add Elm files to
my project? How do I see it in the browser? How will my code grow? Do I need
more directories? What about tests? Etc.

Check out <https://elm-lang.org/0.19.1/init> for all the answers!

Knowing all that, would you like me to create an elm.json file now? [Y/n]:
Okay, I created it. Now read that link!

~/workspace/elm-demo
❯ ls -la
total 8
drwxr-xr-x@  4 fed  staff  128 29 Jun 12:24 .
drwxr-xr-x@ 12 fed  staff  384 29 Jun 12:24 ..
-rw-r--r--@  1 fed  staff  517 29 Jun 12:24 elm.json
drwxr-xr-x@  2 fed  staff   64 29 Jun 12:24 src
```

Now we are going to create a `Main.elm` file inside the `src` directory. For now, just paste this into this file:

```elm
module Main exposing (..)
```

## Configuring Visual Studio Code

The only Elm-specific VSCode extension I currently have installed is [“Elm” package published by “Elm tooling”](https://marketplace.visualstudio.com/items?itemName=Elmtooling.elm-ls-vscode).

Here’s some of the things this extension does for you:

- Errors and informations on save
- Format on save (as long as you also enable the "Editor: Format on Save" setting of VSCode)
- Suggests completions and snippets
- Lists all references to a type alias, module, custom type or function
- Jump to the definition of a type alias, module, custom type or function
- Shows type annotations and documentation on hover for type alias, module, custom type or function
- Type inference, etc.

## Code formatting

The VSCode extension formats your code for you, but you’ll need to do these two

- Install the `elm-format` package: `npm install -g elm-test elm-format`
- Enable the "Editor: Format on Save" setting of VSCode

## Elm Review

## Elm Reactor

## Building the app

To build the app, you need to compile src/Main.elm to public/app.js. Do this with:

```txt
elm make src/Main.elm --output=public/app.js
```

For development, you'll probably want to add the --debug flag, but if you're finished development and want to upload, use --optimize.

## Dev environment with live reload

For a live reload environment, you can use elm-live. Install it globally with `npm install -g elm-live`, and then start it with:

```txt
elm-live --dir public -- src/Main.elm --output=public/app.js --debug
```
