---
title: Trading complexity for simplicity with 11ty
date: 2025-07-09
tags: general
---

After years of dealing with an unnecessarily complex codebase for my blog, this week I made the switch from Gatsby to 11ty.

Gatsby is a powerful framework full of advanced features, but for a simple blog like this it feels like a bit of an overkill. There's just too much overhead for what should be a simple workflow: we've got React components for static content with almost no interactivity, GraphQL queries to fetch markdown files from my own filesystem, CSS-in-JS solutions for styling what is a rather simple UI, and dozens of plugins each adding their own dependencies and potential breaking points, which is particularly painful when upgrading dependencies.

In an effort to make this codebase a bit simpler I decided to give 11ty a red hot go, and right away I realised it was exactly what I was after.

This is what my workflow looks like now:

- A few very simple and readable template files (using Nunjucks which works out of the box) handle the layout
- Good old CSS files that work exactly as you'd expect, especially now that CSS got better in the past few years
- Some vanilla JS code only when actually needed for interactivity
- Markdown files that become HTML pages

The migration itself was surprisingly smooth. Heaps of features work out of the box, and the rest were super simply to set up via plugins without much configuration (if any!).

And one of the best parts is that the build process is now _really quick_, especially when working locally, a stark contrast with my old Gatsby setup.

This goes to show that sometimes the best solution isn't the most powerful one but the one that's most appropriate for our particular use case. Of course your mileage may vary: for example if you are building a site with complex client-side interactions or a web app with dynamic content, then Gatsby or a similar tool may be the best choice. But at least for this blog 11ty's simplicity beats Gatsby's power every time.

I'm still learning everything 11ty has to offer, and I'm sure it can handle complex use cases like Gatsby, but so far it feels really optimised for simplicity, and I'm loving the dev experience.

If you are curious about the differences and the before/after comparison, you can check the old and new codebases here:

- [Gatsby-powered blog](https://github.com/fed/blog-gatsby)
- [11ty-powered blog](https://github.com/fed/blog)
