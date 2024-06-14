---
title: Links vs Buttons
date: 2024-03-05
spoiler: A brief discussion on the purpose, semantics and default behaviours of buttons and links and how this impacts accessibility.
category: accessibility
---

## Semantics

Links are very specific in their intended use, while buttons are more general as they imply less and give the user less options.

Links take you to a new location — it could be a new page or a section of the current page.

A link should have the following behaviours:

-   it should be activated with the Enter key
-   it should semantically "go" somewhere (rather than "do" something)
-   it should allow the user to open in new tab or new window
-   it should never cause a change in data — e.g. delete something or send an email

If some of these don't make sense then it probably shouldn't be a link.

Similarly, if you are disabling the ability to open the link in a new tab or window, then it's also probably not a link.

In particular, opening/closing a modal is rarely suitable for a link (unless the modal dialog has its own URL, more on this later).

Buttons, on the other hand, perform an action without affecting the user's current location. Examples of actions performed by buttons are
submitting a form, opening a modal (as long as the URL does not change), revealing or hiding content, and playing or pausing audio or video.

As mentioned before, buttons are more general and there are less expectations on what they do: clicking on a button could do anything, more
vague and less specific than a link.

Buttons come in different flavours:

-   `type="button"`
-   `type="submit"`: A submit button always causes a change in context, like going to a new page, or replacing the contents of the page —
    this can lower user surprise.
-   `type="reset"`

The semantics of both these elements is important because it affects user expectations: if a screen reader announces an element as a "link"
or "button", users have expectations about what will happen when they activate that element. If something else happens, this can be
disorienting.

For links, some of these expectations/affordances include supporting opening the target location in a new tab/window (including a private
one), allowing a page refresh without losing my current location, having different states (active, focus, hover, visited), etc.

## State

Links have the following states:

-   [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
-   [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
-   [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
-   [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
-   [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

If you are suppressing any of these, then your link probably shouldn't be one.

Similarly, buttons can be in any of the following states:

-   [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled)

## Tab order

Both buttons and links are interactive elements and as such are, by default, in the tab order, with some exceptions:

-   Links will not be in the tab order if they don’t have an `href` attribute.
-   Buttons will not be in the tab order if they are `disabled`.

## Interactions

Buttons can be activated by both the Enter key and the Space key. Links, however, can only be activated by pressing the Enter key. If you
press the Space key while focused on a link, the browser will scroll down the page (this is the default behaviour of the Space key for text
content).

## Rotor

In VoiceOver's rotor, links will appear in the "Links" section. Buttons, on the other hand, will appear in both the "Form controls" and
"Buttons" sections. You can play around with this demo, launch VoiceOver (Cmd + F5) and then open the rotor by pressing VO + U (VO being
Ctrl + Opt). You can navigate through the different sections of the rotor by pressing VO + left/right arrows.
