---
title: Building better info triggers
description: A guide to building accessible tooltips and popovers.
date: 2026-04-30
tags: accessibility
draft: true
---

This in particular is a good example of something that is not accessible. The trigger of the tooltip needs to be the info button on the right, and not the text itself. This is because the heading is not interactive.

Something important is that that info icon MUST be a button. You cannot trigger a tooltip from an image, again because it's not interactive. HOWEVER, and this is where it gets interesting, you can't have a button whose sole purpose is to render the tooltip, because such a button would have no `on click` action. A focusable element that does nothing when activated is confusing, users may assume the site is lagging or that the button is disabled.

So in this case this is not so much about the number of lines in the tooltip, but rather about the pattern in and of itself.

Instead of a hover/focus-only tooltip, we should use the "click to reveal" pattern/the Popover component. With this pattern we treat the info icon as a toggle. And when the user clicks or taps the button, the information appears and stays there until they click away or press Escape. This way the button does have a valid `on click` action defined.

The only caveat here is that if the information conveyed by the tooltip/popover is critical for the user to understand a specific part of the app, the most accessible solution is to remove the button/popover entirely and place the text directly on the page. This eliminates the need for any interaction to access information that is really important. But I don't think that's the case here.

Something else that i didn't mention about popovers is that they are dialogs, meaning you can include interactive elements like a learn more link or a close button. Tooltips on the other hand are, by definition, "read only". They cannot contain any interactive elements.

And in terms of purpose, you could say that tooltips are more for discovery (you find a button in the video player toolbar, and ask yourself "what is this"... they help you quickly discover what the control is... that's why they are usually used with image buttons). Popovers on the other hand are more for whenever you want to learn more about something or get more additional details that do not fit on the screen. This is for cases where the user makes a conscious decision to seek more information/context.

In terms of semantic roles
- You should use `role="tooltip"` for the container. The trigger button points to it using `aria-describedby`. This tells the screen reader "this button has a description" which is then read out after the button label.
- A popover usually uses `role="dialog"` or `role="menu"`. The trigger uses `aria-haspopup="dialog"` and `aria-expanded="true|false"`. This signals to the user that clicking the button will reveal a new layer of the interface.

As a rule of thumb, Popovers allow for interactivity (links/buttons) and proper focus management, while Tooltips are strictly for short, non interactive descriptions. Tooltips have their place but need to be use sparingly. A toolbar like the media player's toolbar/controls, the share button in Listen, the "add to watchlist" toggle in iview, or the social media icon links in the footer, those are perfect usages. This on the other hand is a good example of where not to use one.
