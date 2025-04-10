---
title: Choosing between links and buttons
date: 2024-03-05
spoiler:
    A discussion on the purpose, semantics, states and default behaviours of buttons and links, and how choosing the wrong one can impact
    accessibility.
category: accessibility
---

This write-up is a collection of rules of thumb to help you decide whether your interactive control should be a link or a button, and the
accessibility implications of choosing one over the other. We'll explore five different categories: semantics, state, tab order,
interactions, and using Voiceover's rotor or similar.

## Semantics

Both links and buttons are interactive elements and allow users to perform an action. However, links are very specific in how they get used,
while buttons are more general as they "imply" less and give the user less options.

Let's start with **links**. Links take you to a new location, which could be a new page, a section of the current page or even a file to
download (e.g. a PDF file). This location is defined via the `href` attribute, which should not be blank or have a value of `#`.

A link should have the following behaviours:

- it should be activated with the Enter key
- it should semantically "go" somewhere (rather than "do" something)
- it should allow the user to open the destination in either a new tab or a new window
- it should never trigger an action such us submitting a form or deleting something from the page

If some of these don't make sense, then your control probably shouldn't be a link.

Similarly, if you are disabling the ability to open a link in a new tab or window, then it's also most likely not a link.

In particular, opening/closing a modal is rarely suitable for a link, unless the modal dialog has its own URL and gets automatically
rendered whenever the user visits that URL.

**Buttons**, on the other hand, perform an action without affecting the user's current location. Users would not expect their location in
the application to change after pressing a button.

Examples of actions performed by buttons could be submitting a form, opening a modal (as long as the URL does not change), opening a popup,
revealing or hiding content (e.g. an accordion), playing or pausing audio or video, triggering an action in the backend (e.g. deleting an
element), etc.

As mentioned before, buttons are more general and there are less expectations on what they do: clicking on a button could do anything, it's
typically more vague and less specific than a link.

Buttons come in different flavours:

- `type="button"`: this is a generic button that does not trigger a form submission by default, and requires us to use JavaScript to define
  its behaviour.
- `type="submit"`: this comes with some additional built-in information, as a submit button always causes a change in context, like going to
  a new page, or replacing the contents of the page. Using this particular button type provides some extra information that can help users
  understand what's about to happen.
- `type="reset"`: this is a special button that clears/resets all form fields to their default values. There should be no change in
  context/location after using a reset button.

For both links and buttons, semantics is really important because it directly affects user expectations: if a screen reader announces an
element as a "link" or "button", users have expectations about what will happen when they activate that control. If something else happens,
this can be disorienting or jarring to some users.

For links, some of these expectations/affordances include supporting functionality such as opening the target location in the current tab
(by default, if you don't do anything) or a new tab/window (including a private one) if you choose to do so, allowing you to "Save as" which
is particularly useful for some filetypes including PDF or images, as well as allowing a page refresh without losing my current location.

## State

Another difference between these two controls is the states they can be in.

Links have the following states:

- [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) (this is an element that has not yet been visited)
- [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
- [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

Sighted users can sometimes recognise visited links from the text colour used (by default this is typically implemented as a purple link
instead of a blue one), while screen reader users get this piece of information announced when they navigate to the link. If you are
suppressing any of these states, then you should consider whether your control is in fact a link.

Buttons, on the other hand, don't have the concept of whether they have already been pressed (and I'm referring to the same `:visited` state
links have, and not `aria-pressed` for toggles). We can however style different states:
[`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus), [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) and
[`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active).

Buttons can also be either enabled or [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled). Disabled
buttons warrant a whole blog post of their own. For now, if you are going to disable a button make sure to provide enough information on how
to get to be enabled again. And if possible look at a different user experience such as inline validation for forms instead of relying on
disabled buttons.

## Tab order

Both buttons and links are interactive elements and as such are, by default, in the tab order, with some exceptions:

- Links will not be in the tab order if they don't have an `href` attribute, or if the `href` attribute is empty.
- Buttons will not be in the tab order if they are `disabled`.

Be careful when adding `tabindex="-1"` to an element as this will remove it from the tab order. This means that even though you would still
be able to focus on it programatically using JavaScript, users would not be able to tab onto it.

And while we are at it, never remove the outline of any of these interactive elements on focus. Keyboard-only sighted users rely on this
outline (or any other similar visual cue) to keep track of what the active element currently is.

## Interactions

There's also a subtle but major difference in how users would go about activating these two controls:

- Buttons can be activated by both the `Enter` and `Space` keys.
- Links, however, can **only** be activated by pressing the `Enter` key. If you press the `Space` key while focusing on a link, the browser
  will scroll down the page, as this is the default behaviour of the `Space` key.

This is why affordances are important. People perceive cues that tell them what to do with an object. For example, a door handle invites you
to grasp and pull down, but a door knob requires you to grasp and turn, engaging a different motion to open the door. Going back to our
links and buttons, and focusing on sighted users, if an interactive control looks like a button, you wouldn't expect a "page down" event to
be triggered if you are trying to activate the control using the `Space` key. Same for screen reader users, you want to be able to activate
a button with the `Space` key if it gets announced as a button.

## Rotor and Quick Keys

In [VoiceOver's rotor](https://support.apple.com/en-gb/guide/voiceover/mchlp2719/mac), links will appear in the "Links" section, while
buttons would be listed in both the "Form controls" and "Buttons" sections. The same applies to similar tools, e.g.
[Navigation Quick Keys](https://support.freedomscientific.com/SurfsUp/QuickKeys.htm) in JAWS.

Discoverability is important, and we need to consider all our users. If your interactive control is not coded properly then it will show up
in the wrong place (or not show up at all!).

## Building your own accessible button

Now that we understand how a button is supposed to behave, let's look at how we could implement one from scratch in a way that the end
result is accessible.

Let's make it very clear though that **this is not recommended** and ideally you'd use a semantic `button` instead. But if you absolutely
cannot do that because of restrictions outside of your control, then you'll need to make sure you support a number of behaviours:

- Add `role="button"` so that your element has the right semantics
- Add `tabIndex={0}` to add your element to the tab order
- Add an `onClick` event handler so that you can click or tap on your element
- Add an `onKeyDown` event handler so that you can activate your control using both the `Enter` and `Space` keys
- Add custom styles to make sure we at least have a focus ring or similar for the `focus` state.

This is what a simplified end result would look like:

```jsx
function CustomButton() {
    const handleClick = () => {
        // ... your logic here
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space press
            handleClick();
        }
    };

    return (
        <span role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown} className="custom-button">
            Click me
        </span>
    );
}
```

Also note that even though I used React for the code example above, this is not React-specific and applies regardless of the
library/framework you are using.
