---
title: Building a mental model of the Elm Architecture (for React developers)
date: 2025-07-22
tags: elm
draft: true
---

The Elm architecture is basically a cycle with three parts: Model holds your app's data, View displays it, and Update handles changes. When something happens, it sends a message to Update, which creates a new Model, and View re-renders. It's like a one-way loop that keeps your app predictable.

Key points: Elm architecture basics

- Model: holds your app's data/state
- View: displays the model as HTML
- Update: handles messages and changes, and creates new models
- One-way data flow cycle
- Predictable state management

## Similarities with the Model View Controller (MVC) design pattern

The Elm Architecture and the MVC design pattern are similar but with key differences. Elm architecture is more like Model-View-Update instead of Model-View-Controller. The biggest difference is that Elm enforces one-way data flow - data only flows down from Model to View, and messages only flow up from View to Update. In traditional MVC, the controller can directly manipulate both model and view, creating two-way binding.

This makes Elm much more predictable since you always know exactly how data flows through your app.

Key points: MVC vs Elm architecture

- MVC allows two-way data binding
- Elm enforces one-way data flow
- Controller vs Update function differences
- Elm more predictable and functional
- No direct view manipulation

## Elm and Flux

The Elm architecture is actually very similar to Flux, but even more simplified and enforced:

Similarities:

- Both use unidirectional data flow
- Actions/Messages trigger state changes
- Centralised state management
- Predictable update cycles

Key Differences:

Flux has multiple pieces:

- Actions (events)
- Dispatcher (routes actions)
- Stores (hold state, can have multiple)
- Views (React components)

Elm simplifies this to just three:

- Messages (like Flux actions)
- Update (combines dispatcher + store logic)
- View (pure functions, no components)

The biggest difference is that Flux allows multiple stores that can have complex interactions, while Elm forces everything through one Update function with one Model. Elm also guarantees immutability and pure functions everywhere, while Flux implementations can vary. Think of Elm as "Flux with training wheels" - it takes Flux's good ideas but removes the flexibility that can lead to complexity and bugs.

---

🔁 Core Concepts:
Model – a single source of truth (the application state).
Update – a pure function that takes a Msg (message) and the current Model, and returns a new Model (and optionally a command for side effects).
View – a function that renders HTML based on the Model.
Messages (Msg) – a union type representing all possible events or actions that can occur in the app.
✅ Characteristics:
Fully pure functional.
Emphasises immutability and type safety.
All side effects (e.g., HTTP requests) are handled via commands (Cmd) and subscriptions (Sub), ensuring clear separation of effects and logic.

⚡ Flux Pattern (by Facebook)

Origin: Designed to complement React and address limitations of MVC.

🔁 Core Concepts:
Actions – payloads of information sent by the application.
Dispatcher – a central hub that manages all data flow.
Stores – containers for application state and logic, reacting to actions via registered callbacks.
Views – React components that observe store changes and re-render accordingly.
✅ Characteristics:
Emphasizes unidirectional data flow.
Dispatcher is the central message bus.
Encourages multiple stores, each handling a slice of the state.
Side effects often handled within actions or via middleware (in extensions like Redux).
🔍 Comparison Table

Feature Elm Architecture Flux
Language Origin Elm (functional) JavaScript (React ecosystem)
Data Flow Unidirectional Unidirectional
State Container Single Model Multiple Stores
Message Handling Pattern-matched Msg in pure update Actions handled via dispatcher
Side Effects Explicit via Cmd / Sub Often implicit or handled externally
Dispatcher No (not needed due to pure update logic) Yes (central part of architecture)
Immutability Enforced by Elm Encouraged but not enforced
Type Safety Strong static types (with union types) Optional via TypeScript
Complexity Management Through nesting and modularity Through stores and action creators
Popular Derivatives Redux, TEA-style apps in JS or TypeScript Redux (evolved version of Flux)
🧠 Philosophical Differences

Elm Architecture embraces pure functional programming, requiring developers to model all interactions declaratively and explicitly. The strictness leads to predictable code and very few runtime errors.
Flux is more flexible and was designed to work within the less strict constraints of JavaScript and React. It allows more freedom but less guarantees.
🧩 Redux as a Middle Ground

Redux takes heavy inspiration from the Elm Architecture while being implemented in JavaScript. It differs from classic Flux by removing the dispatcher and consolidating state into a single store, making it closer to Elm in practice.

## Elm and React

React and Elm are both functional and use one-way data flow, but Elm is much stricter. In React you have hooks, direct state mutations, and side effects scattered throughout components. Elm forces everything through the Update function - no useState, no useEffect, just pure functions and a single update cycle.

The main adjustment is that in Elm you can't just setState anywhere - every change must go through a message to Update.

Key points: React vs Elm differences

- React: State scattered throughout components with hooks (useState, useEffect), direct mutations
- Elm: All state changes must go through the single Update function via messages. Elm has stricter architecture rules, and there are no direct state mutations.
- Single centralized state management with unidirectional data flow: Data flows down (Model → View), messages flow up (View → Update)
- No direct state manipulation: Can't just setState anywhere - every change becomes a message

The mindset shift from React to Elm is tough because I’m used to having state everywhere. Here's a mental trick: think of your entire app as one big reducer function like in Redux, where every interaction creates a message, and Update is like your reducer that returns new state.

Think of Elm like Redux but even simpler - your entire app is basically one giant reducer function. Instead of multiple reducers combined together, Elm has literally just one Update function that takes the current model and a message, and then returns a new model.

Key points: Learning Elm from React

- Think like Redux with one reducer
- Start with simple counter example
- Trace message flow step by step
- Every interaction becomes a message
- Central state instead of local state

So imagine Redux but even simpler - you have one giant reducer that handles your entire app state. In Redux you might have multiple reducers combined, but Elm is literally just one Update function that takes the current model and a message, then returns a new model.

The key insight is that every single thing that can happen in your app - button clicks, form inputs, HTTP responses - becomes a specific message type. Everything flows through that single Update function, which is like a big switch statement that says "if I get this message, here's how the model changes”.

Think of it like your app is a state machine where every possible action is predefined.

Every single interaction in your app becomes a specific message type:

Button clicks → messages
Form inputs → messages
HTTP responses → messages
Timer events → messages

Your Update function is like a big switch statement that says "if I get this message type, here's exactly how the model changes."

Unlike React's flexibility, Elm's constraints make your app completely predictable - you always know exactly how data flows and changes happen. It's stricter but eliminates many classes of bugs.

Key points: Elm as a single reducer

- One Update function for entire app
- Every interaction becomes specific message
- Like giant switch statement
- Predefined state machine approach
- No scattered state like React components
