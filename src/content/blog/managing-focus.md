---
title: Managing focus
date: 2023-05-16
description:
tags: accessibility
draft: true
---

Focus management provides a way for users who rely on a keyboard or an external input device to navigate through contents of a page without
the aid of the mouse.

So as engineers, whenever you're coding for mouse interactions, you must provide that keyboard equivalent. Because, when you code it
correctly, you've actually improved the experience for multiple disability cohorts, we've got sighted keyboard users, users who rely on a
screen reader and as well to users with cognitive challenges, who may rely on a keyboard or a screen reader.

## Tabindex

`tabindex="0"` puts elements in the tab order. But standard actionable elements, such as buttons, anchors with an href, inputs, text areas -
they automatically receive keyboard focus, so they do not necessarily need that `tabindex="0"`. Some form controls, such as radio buttons
and select menus get initial tab focus, but then we use the arrow keys to navigate.

Only place actionable (i.e. interactive) controls in the tab order. We don't want to be placing everything, such as divs, spans, paragraphs
with a `tabindex="0"` because now what's happening is you are forcing keyboard only users to navigate through everything, and that can be
frustrating. Also there is no longer a clear distinction of what's interactive and what is static.

Keep in mind that users on a screen reader don't typically tab through everything, rather use the screen reader's quick navigation command,
or quick keys as sometimes they're referred to.

Avoid using a positive value other than 0, because what happens with that is now we've got an unpredictable tab order and that varies
greatly amongst operating systems and browsers. And in complex applications it could be really difficult to maintain as well. We also have
to keep in mind it doesn't necessarily mean that it's going to match that reading order and some assistive technology like screen readers
and text to speech tools tend to read content based on that DOM order, or that HTML output order.

And I know you may be wondering, why would I ever add it in standard HTML controls? And while you typically would not need to add
`tabindex="0"`, it is important to know what it does, particularly as you get into some of these custom components.

So, we learned that `tabindex="0"` puts items in the tab order. `tabindex="-1"`, on the other hand, removes those actionable elements from
the tab order.

So, for example, if you wanted a button element and not put it in the tab order, you can set a tabindex=-1 on that, I would not advise doing
that, but that is viable HTML code.

It also allows non-interactive elements to receive Javascript or programmatic focus. This is arguably the main use case for `tabindex="-1"`.

We sometimes need to focus on elements that are not actionable, like headings, divs or spans. This is often done by using the
`HTMLElement.focus()` method. In order to do that, the element that is receiving focus needs to have `tabindex="-1"`.

What this does is allow users to navigate from that point on using a keyboard. But it does not place that control in the tab order. Some
more of a common standard controls would be a skip or skip to main content link.
