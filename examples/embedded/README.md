# Flax Playground

A runnable component gallery with one entrance per capability. The host supplies the
maintained engine and plugins; JavaScript owns the directory and navigation. Wide
windows use three columns, medium windows use two, and narrow windows use a single
scrolling column.

This application is the combined presentation and cross-module check. Develop and test
each capability in its package-owned example; see the
[single-package commands](../README.md#package-development-and-gallery-presentation).

## Browse the examples

| Entrance       | Package-owned example                 | What to try                                              |
| -------------- | ------------------------------------- | -------------------------------------------------------- |
| Core & signals | `packages/flax/example`               | Counter, computed values and callbacks                   |
| Material UI    | `packages/flax_material_ui/example`   | Five collections, editing, selection, dialogs and routes |
| Cupertino UI   | `packages/flax_cupertino_ui/example`  | Four collections, segmented controls, lists and overlays |
| Canvas 2D      | `packages/flax_canvas/example`        | Palette changes and clearing a native drawing surface    |
| Fetch          | `packages/flax_fetch/example`         | Requests, response content and cancellation              |
| WebSocket      | `packages/flax_websocket/example`     | Connection state, messages and disconnecting             |
| Local storage  | `packages/flax_local_storage/example` | Saved counter, notes and persistence across visits       |

From the repository root, with the maintained Flutter SDK and local engine selected:

```sh
dart run melos run example:run
```

The launch command starts a Dart server on a random loopback port for Fetch and
WebSocket. It supplies JSON at `/status`, a five-second response at `/slow`, and an echo
WebSocket at `/socket`; no separate service setup is needed. Requests and connections
start only when an action is pressed. Enter a full public URL to use a different
endpoint. Failed connections remain visible in the example.

Keep the launch command running. Quitting or detaching closes its test server and
connections; packaged applications do not contain this development service.

The host's **Unmount Flax** / **Mount Flax** control demonstrates recreating a Session.
Transient component state starts fresh; the gallery's explicitly named storage area
keeps saved data. **Clear area** affects that example area only.

## Ownership and reuse

Each capability exports `./showcase` from its private `@flax/example-*` workspace
package. Its local `main.ts` runs that same widget. Importing the showcase has no
`runApp` side effect. The aggregate lists entrances and creates a selected example; it
does not reimplement package behavior or install a second copy of a binding.

The Core example's `./ui` export contains presentation helpers for example pages,
sections, editable fields and accessible controls. These helpers are example code, not a
production Flax UI framework. Package examples remain independently runnable with their
own plugin requirements. Material and Cupertino keep their native app and theme
environments inside their selected preview.

## Verification

`test/aggregate_test.dart` checks missing-plugin rejection, shared module identity, all
seven entrances, state reset after remount, narrow layout and zero runtime handles at
Session disposal, including an open dialog during unmount.
`test/network_lifecycle_test.dart` repeats Fetch and WebSocket page exits and reentry,
checks transport closure and callback removal, and verifies zero handles at Session
disposal. Its observations use weak references so they do not retain departed pages.
`integration_test/app_test.dart` follows the same gallery tour in a real macOS
application and emits the `embedded-module-aggregate` receipt.

Owner examples test their own controls. Material and Cupertino exercise their full
listed collections at desktop and phone widths. Network examples use loopback servers;
local storage verifies shared and isolated areas. These representative collections do
not claim a demonstration of every generated SDK declaration.

Run `dart run melos run check:aggregate` for the aggregate, or
`dart run tool/package.dart integration flax_material_ui --engine=v8` for one owner. The
full `check:ui` command runs owner checks and examples before the aggregate.
