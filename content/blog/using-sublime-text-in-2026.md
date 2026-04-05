---
title: Configuring and using Sublime Text in 2026
date: 2026-04-03
description: A step-by-step guide to setting up Sublime Text 4 as a full VS Code replacement for a Turborepo monorepo running TypeScript, React, Next.js, CSS modules and Biome.
tags: tools
---

I wanted to share (and mostly document for future me) my Sublime Text setup for a Turborepo monorepo running TypeScript, React, Next.js, CSS modules and Biome.

This is the second time I write about Sublime Text. As I said in my [first post](/blog/sublimetext-prettier-eslint), I've been a Sublime Text user for the longest time and I still enjoy using it. It's very fast and supports most of the features I need every day. It's also as minimalist as it gets and, after years of daily use, the keyboard shortcuts are muscle memory at this point.

## 1) Package control

If not already installed, go to `Tools > Install Package Control`. This is the extension marketplace equivalent.

## 2) Core packages

Open the command palette (`Cmd+Shift+P`), run `Package Control: Install Package`, and install the following packages:

**LSP and language support:**

-   [LSP](https://packagecontrol.io/packages/LSP): the base LSP client
-   [LSP-typescript](https://packagecontrol.io/packages/LSP-typescript): TypeScript/JS via tsserver
-   [LSP-biome](https://packagecontrol.io/packages/LSP-biome): Biome linting, formatting, and code actions
-   [LSP-css](https://packagecontrol.io/packages/LSP-css): CSS language server
-   [LSP-copilot](https://packagecontrol.io/packages/LSP-copilot): GitHub Copilot support

**Developer experience:**

-   [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements): adds missing file operations to the sidebar
-   [A File Icon](https://packagecontrol.io/packages/A%20File%20Icon): file type icons
-   [BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter): bracket pair matching
-   [AutoFileName](https://packagecontrol.io/packages/AutoFileName): path autocomplete in import strings
-   [Pretty JSON](https://packagecontrol.io/packages/Pretty%20JSON): to parse and format JSON files
-   [MDX](https://packagecontrol.io/packages/MDX): MDX syntax definitions

> We use Biome for linting and code formatting, but [if your codebase uses ESLint and Prettier instead of Biome, check out this other post](/blog/sublimetext-prettier-eslint).

**Tip:** you can use the `Package Control: Advanced Install Packages` option to install multiple packages in one go.

**Note:** I don't use any Git packages in Sublime Text because I use [Sublime Merge](https://www.sublimemerge.com) for things like visually scanning diffs more easily, resolving merge conflicts, and checking the history of a file. For most other things I use Git directly in my terminal ([iTerm](https://iterm2.com)). If you'd like to use both Git and the terminal from within Sublime Text, look into the [Terminus](https://packagecontrol.io/packages/Terminus) and [GitSavvy](https://packagecontrol.io/packages/GitSavvy) packages.

## 3) TypeScript support

To get TypeScript to work you'll need to point `LSP-typescript` at your monorepo root's TypeScript install. Go to `Settings > Package Settings > LSP-typescript > Settings` and add:

```json
// Settings in here override those in "LSP-typescript/LSP-typescript.sublime-settings"
{
    "typescript-tsdk": "/Users/fed/workspace/repository-name/node_modules/typescript/lib"
}
```

**Note:** the `~` home directory shortcut does not work in Sublime settings. You'll need to use the full absolute path.

Something handy to add is support for "jump to definition" using `Option+click`. For this we'll add a new mouse shortcut (`Settings > Mouse Bindings`) and add the following:

```json
[
    {
        "button": "button1", // left mouse button
        "count": 1, // single click
        "modifiers": ["option"],
        "press_command": "drag_select",
        "command": "lsp_symbol_definition"
    }
]
```

## 4) LSP settings

Go to `Settings > Package Settings > LSP > Settings`. This is where the global LSP configuration lives. This is the full config I ended up with:

```json
// Settings in here override those in "LSP/LSP.sublime-settings"
{
    "lsp_format_on_save": true,
    "clients": {
        "LSP-biome": {
            "enabled": true,
            "initializationOptions": {
                "requireConfiguration": true
            }
        },
        "LSP-typescript": {
            "enabled": true,
            "settings": {
                "typescript.format.enable": false,
                "javascript.format.enable": false
            }
        }
    }
}
```

**Note:** `requireConfiguration: true` ensures Biome only starts running where a `biome.json` exists. TypeScript formatting is disabled because Biome (or Prettier) handles that instead.

## 5) Project file

Create a `<something>.sublime-project` file at your repo root. Don't call it `.sublime-project` with a leading dot as Sublime will append `.sublime-project` again and produce a broken double extension filename. The name could be anything, it doesn't really matter. If you are set on not using a name, make sure you don't have a double extension.

Here's the content of my `.sublime-project` file:

```json
{
    "folders": [
        {
            "path": ".",
            "folder_exclude_patterns": ["node_modules", ".turbo", "dist", ".cache"],
            "file_exclude_patterns": ["*.lock"]
        }
    ]
}
```

To open the codebase in Sublime Text, we'll open the project via `Project > Open Project` (and not `File > Open`). If the Open button is disabled, click the `.sublime-project` file itself rather than just navigating to the folder. If you can't see it because it starts with a dot, press `Cmd+Shift+.` to show all hidden files.

If you get an error like `Unable to read project .sublime-project.sublime-project`, delete the `.sublime-workspace` file, as it may still reference the old broken filename, and Sublime will regenerate it:

```bash
rm <something>.sublime-workspace
```

Alternatively, you could also open the project from your terminal (more on this later):

```bash
subl /path/to/project/.sublime-project
```

## 6) Solving the Node.js PATH problem

This step took me a while to figure out. When you open Sublime from the Dock or Finder, it won't inherit your shell's PATH. This means it can't find Node when nvm manages it, and in turn, LSP packages that depend on Node (like `LSP-biome` and `LSP-typescript`) cannot find the Node runtime.

This is the error message I was getting:

```txt
Could not start LSP-biome due to not being able to resolve suitable Node.js runtime on the PATH.
```

The easiest solution is to install a stable Node via Homebrew:

```bash
brew install node
```

This gets you a copy of Node at `/opt/homebrew/bin/node`, which never changes regardless of what you are doing with nvm. Your nvm Node is still active in the terminal for any actual project work, and more importantly they don't conflict.

**Note:** If you're disciplined about always using opening your projects using `subl`, you don't strictly need this setting (see below).

## 7) Opening a project from the terminal

Similarly, when you launch Sublime from your terminal using `open -a "Sublime Text"`, macOS starts it as a GUI application outside of your shell environment. Again, this doesn't load `.zshrc` or `.zprofile`, so Sublime Text has no knowledge of anything you've set up there, including nvm, Homebrew's bin directory, or your custom PATH.

To properly open Sublime from the terminal you need the `subl` binary on your PATH. Apparently there's no UI option for this in Sublime Text 4 on Mac, so the workaround is to [add the Sublime bin folder to your PATH](https://www.sublimetext.com/docs/command_line.html#mac) in your `~/.zprofile`:

```bash
echo 'export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"' >> ~/.zprofile
```

Now you can open your project with:

```bash
subl /path/to/<something>.sublime-project
```

## 8) User settings

Besides your editor preferences in `Settings > Settings`, we'll need to add these two settings:

```json
{
    // ... the rest of your user settings ...
    "index_files": false,
    "show_definitions": false
}
```

-   `index_files: false` disables Sublime's built-in code indexing, which is redundant when LSP is running and just wastes CPU.
-   `show_definitions: false` prevents Sublime's native hover popup from conflicting with LSP hovers.

This is what my entire `Preferences.sublime-settings` file looks like:

```json
{
    "font_size": 20,
    "index_files": false,
    "line_padding_top": 4,
    "line_padding_bottom": 4,
    "word_wrap": true,
    "highlight_line": true,
    "block_caret": true,
    "caret_style": "smooth",
    "scroll_past_end": 0.5,
    "show_definitions": false,
    "mini_diff": true,
    "highlight_modified_tabs": true,
    "indent_guide_options": ["draw_normal", "draw_active"],
    "rulers": [100, 120]
}
```

## 9) Using Copilot via LSP-copilot

Once the LSP-copilot plugin is installed, make sure to log in with the browser.

I wrote this [lsp-copilot-chat-context plugin](https://github.com/fed/lsp-copilot-chat-context) to get the file and line(s) context automatically populated in the Copilot chat window, and also disabled the autocompletion functionality in the LSP-copilot settings:

```json
// Settings in here override those in "LSP-copilot/LSP-copilot.sublime-settings"
{
    "settings": {
        "auto_ask_completions": false
    }
}
```

## 10) Wishlist

Something I couldn't get to work is **CSS Modules class name autocompletion**. It seems there's no Sublime equivalent to the VSCode CSS Modules extension. LSP-css gives us vanilla CSS completions but won't resolve `styles.myClass` across files.
