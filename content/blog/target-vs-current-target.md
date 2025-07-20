---
title: event.target vs event.currentTarget
date: 2020-04-27
description:
tags: css
draft: true
---

https://codepen.io/fede/pen/qoYaPG?editors=1111

`event.target` is the element that we actually interacted with and that triggered the event. In this case, even though the event listener is
bound to the outer box, event.target will be whichever box we click on.

`event.currentTarget` is the element we attached the event listener to. In this case, we are only listening to click events on the outer
box.

Within the event handler, `event.currentTarget = this`.

Clicking on the inner box will cause the click event to bubble up, hence being captured by our outer box and running the `onClick` event
handler.
