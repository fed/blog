---
title: Building a mental model of the Elm Architecture (for React developers)
date: 2025-07-22
tags: elm
---

If you, like me, are coming to Elm from Reactland, the Elm Architecture will feel familiar in some ways and weirdly strict in others. Figured I'd jot down some notes on what the main concepts are, how they compare to React, and how I think about this.

## The main concepts

The Elm Architecture is a cycle with three main moving parts: a Model, a View, and an Update function. Model holds your app data. View takes that data and renders it as HTML. Update handles anything that happens and produces a new Model. That's it.

When something happens in your app, it sends a message to Update, which returns a new Model, which causes View to re-render. It's a one way loop, every time, no exceptions.

### Messages

Messages are a union type called `Msg`, which means every possible thing that can happen in your app is declared upfront as a specific type. The compiler knows about all of them, and if your Update function doesn't handle one, it won't compile.

Let's say we are building a surf forecast app where you type in a beach name and fetch the forecast. For this app your messages might look like this:

```elm
type Msg
    = BeachInputChanged String
    | FetchForecast
    | ForecastReceived (Result Http.Error Forecast)
```

That Msg type can only ever be one of those three things.

*Side note:* A union type is a type that can be one of several predefined variants. So instead of a string that could be anything, you explicitly list every possible value upfront.

### Model

The Model is just a record that holds your app state. In Elm we model every possible state explicitly rather than leaving fields that might or might not have a value. For the surf app, that means a Status union type that can only be one of four things:

```elm
type Status
    = Idle
    | Loading
    | Success Forecast
    | Failure String
```

There's no `isLoading: true` floating around with no corresponding data, and no `forecast` field that may or may not be `null`. Every possible state has a name and the compiler knows about all of them.

### Update

The Update function takes the current Model and a message, and returns a new Model along with any side effects. It's a case expression over Msg, which means the compiler double checks that every variant is handled. Add a new message type and forget to update this function, and it won't compile.

Update always returns a tuple of `(Model, Cmd Msg)`. When there's nothing async to do, you return `Cmd.none`. When you need a side effect, like firing an HTTP request, you return a command alongside the new Model.

### View

The View function takes the Model and returns some HTML. It's a pure function, meaning the same Model always produces the same HTML. Because Status is a union type, your view has to handle all four cases (the compiler won't let you skip one).

### Commands and subscriptions

Side effects (like HTTP requests) never live inside your logic. They're kicked out to/handled separately through commands (`Cmd`) and subscriptions (`Sub`).

A command is something you ask the Elm runtime to do on your behalf, like fetching data. You hand it back from Update and the runtime handles the actual request. When the response comes back, the runtime sends a message back into your Update function.

A subscription is how you listen for ongoing events like timers or websocket messages. The point is that side effects never sneak into your logic. They're always explicit, always declared, and always handled in one place.

In Elm the rule is: your functions are pure and the runtime handles everything else. This is way different from React where `useEffect` hooks are scattered through your components and side effects can happen pretty much anywhere.

## How it compares to MVC

In some places online you can see this architecture described as Model/View/Update rather than Model/View/Controller. In traditional MVC, your controller can directly manipulate both the model and the view, which means you get two way data binding and all the unpredictability that comes with it.

Elm doesn't let you do that. Data flows down from Model to View, and messages flow up from View to Update. That's the only direction things move, and it's enforced by the architecture.

## How it compares to Flux

Elm is actually very close to [Flux](https://facebookarchive.github.io/flux) conceptually: both use an unidirectional data flow, centralise state management, and have the concept of events triggering state changes.

The difference is that Flux has more moving parts. You've got actions, a dispatcher, multiple stores, and your React views all as separate concepts. Elm consolidates most of that into fewer concepts. Messages are like Flux actions, but your Update function combines the dispatcher and store logic into one place, and there's only ever one Model rather than multiple stores.

The other big difference is strictness. Flux runs in JavaScript, so immutability and pure functions are encouraged but never enforced. Elm is a proper functional language, so immutability isn't a convention you should try and follow, rather something baked in to the language itself. Your Update function and View function are both pure functions, and the compiler guarantees it.

As an aside, Redux kind of sits between the two. It ditched the Flux dispatcher and consolidated stores into a single one, which makes it much closer to the Elm Architecture in practice. The main thing it can't replicate is the compiler guarantees.

## How it compares to React

As we said before, state in React (via `useEffect` calls) lives wherever you put it, and side effects (via `useEffect` calls) can be handled pretty much anywhere in any component.

In Elm every single change to your app state has to go through the Update function via a message. There's no `useState` or `useEffect`. Every button click, every form input, every HTTP response becomes a specific message type, and Update handles it. Side effects are kicked out to commands and subscriptions rather than living inside component lifecycle hooks, and that is the only way anything changes.

A useful mental model to help think of this is: your entire app is basically one giant reducer function. Instead of combining multiple reducers, you've got a single Update function that takes the current Model and a message, and returns a new Model. Every possible thing that can happen in your app is a predefined message type, and Update is a big pattern match that says "if I get this message, here's how the Model changes".

## An example

Here's the code for the surf forecast app we've been using as an example so far. The idea is that you type in a beach name, hit the button, and get back the forecast.

The main function ties everything together and then hands it over to the Elm runtime. From there the runtime owns the loop: it calls view to render, listens for events, sends them to update as messages, gets back a new Model and any commands, executes the commands, and starts again.

```elm
module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode exposing (Decoder, field, float, map3)


-- MODEL

type alias Forecast =
    { waveHeight : Float
    , wavePeriod : Float
    , windSpeed : Float
    }

type Status
    = Idle
    | Loading
    | Success Forecast
    | Failure String

type alias Model =
    { beach : String
    , status : Status
    }

init : Model
init =
    { beach = ""
    , status = Idle
    }


-- MESSAGES

type Msg
    = BeachInputChanged String
    | FetchForecast
    | ForecastReceived (Result Http.Error Forecast)


-- UPDATE

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        BeachInputChanged input ->
            ( { model | beach = input }, Cmd.none )

        FetchForecast ->
            ( { model | status = Loading }, fetchForecast model.beach )

        ForecastReceived (Ok forecast) ->
            ( { model | status = Success forecast }, Cmd.none )

        ForecastReceived (Err _) ->
            ( { model | status = Failure "Couldn't fetch the forecast. Try again." }, Cmd.none )


-- COMMANDS

fetchForecast : String -> Cmd Msg
fetchForecast beach =
    Http.get
        { url = "https://api.surfline.com/surf?beach=" ++ beach
        , expect = Http.expectJson ForecastReceived forecastDecoder
        }

forecastDecoder : Decoder Forecast
forecastDecoder =
    map3 Forecast
        (field "wave_height" float)
        (field "wave_period" float)
        (field "wind_speed" float)


-- VIEW

view : Model -> Html Msg
view model =
    div []
        [ input
            [ placeholder "Enter a beach name"
            , value model.beach
            , onInput BeachInputChanged
            ]
            []
        , button [ onClick FetchForecast ] [ text "Get forecast" ]
        , viewStatus model.status
        ]

viewStatus : Status -> Html Msg
viewStatus status =
    case status of
        Idle ->
            text ""

        Loading ->
            p [] [ text "Fetching forecast..." ]

        Success forecast ->
            div []
                [ p [] [ text ("Wave height: " ++ String.fromFloat forecast.waveHeight ++ "m") ]
                , p [] [ text ("Wave period: " ++ String.fromFloat forecast.wavePeriod ++ "s") ]
                , p [] [ text ("Wind speed: " ++ String.fromFloat forecast.windSpeed ++ " km/h") ]
                ]

        Failure message ->
            p [] [ text message ]


-- MAIN

main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( init, Cmd.none )
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
```
