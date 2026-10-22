# Task: Modular example gallery

Status: complete

## Goal and scope

Make the examples useful for browsing and interacting with Flax capabilities. Keep
demonstrations in their owning package; the embedded application provides module
entrances and navigation. Expand the Material and Cupertino collections and retain
independently runnable package examples. Engine, binding and SDK changes are outside
this task.

## Acceptance criteria

- Package examples and the aggregate reuse the same exported example widgets.
- Material and Cupertino show common controls, selection, text input and feedback.
- The module directory reaches Core, Material, Cupertino, Canvas, Fetch, WebSocket and
  local storage without duplicating their implementations.
- Focused tests exercise actual interactions, navigation and Session cleanup, and the
  gallery is inspected at desktop and narrow widths.

## Approach

Use private example-package exports and a small Core-owned example presentation helper.
Preserve the existing prepared-module, plugin and native Widget paths. Update aggregate
assertions to browse the real examples instead of placeholder UI.

## Results and validation

The seven package-owned showcases are implemented on `feat/example-gallery`. Material
has five collections and Cupertino has four; controls update visible state, overlays
return results and routes use native transitions. Shared example presentation remains in
the private Core example package. The aggregate supplies seven responsive module
entrances without duplicating their implementations.

Package development uses `tool/example_run.dart --package=<owner>` to build and launch
only that package's example and dependencies. Omitting the selection launches only the
aggregate gallery. Existing `tool/package.dart integration <owner>` remains the local
package test entry; full UI and aggregate checks are separate acceptance commands. All
three entry points reuse sequential dependency builds and preserve build failure output;
shared public-type staging must not run concurrently.

Network examples declare their modules through the existing inventory. The development
launcher uses that selection to start a Dart server on a random loopback port, passes
its URL to Flutter and closes the server in `finally`. Fetch demonstrates JSON and
five-second cancellation; WebSocket demonstrates text echo. The server stays in tooling
and is not embedded in packaged applications. The automated owner tests retain their
package-owned loopback fixtures.

Validation passed with the maintained macOS V8 debug engine:

- Seven owner example tests cover signals and keyboard activation, Material/Cupertino
  collections at desktop and 390-pixel widths, canvas changes, real HTTP cancellation,
  WebSocket echo and connection cleanup, and shared/isolated storage with saved drafts.
- Three aggregate tests cover missing-plugin rejection, module identity, all entrances,
  state reset, narrow layout and zero handles at Session disposal, including unmounting
  while a dialog is open. A fourth test repeats network page exits and reentry twice,
  verifies transport and callback cleanup using weak observations, and checks zero
  handles after Session disposal. The formal aggregate command runs the complete test
  directory.
- The real macOS integration tour passed and emitted the `embedded-module-aggregate`
  receipt with seven entrances and zero handles at disposal.
- Strict TypeScript builds, scoped Dart analysis, formatting and diff checks passed.
  Documentation checks passed for 190 files and 801 local links. The example tooling and
  shared UI-selection tests passed 28 cases, including isolated package launch
  preparation, aggregate-only preparation and the shared local network server.
- Native visual inspection confirmed the directory and Material/Cupertino controls;
  explicit semantics actions make directory entrances accessible as named buttons. The
  Material-only launch command also opened its independent application and updated the
  button counter; aggregate, Cupertino and Canvas application bundles were not rewritten
  by that command. Fetch and WebSocket were also launched separately with their
  automatic servers: HTTP 200, cancellation, WebSocket echo/disconnect/reconnect and
  server-port closure after quitting were verified. Their two owner UI tests passed
  independently.

These collections demonstrate common controls rather than every generated declaration.
No production runtime, binding generator or engine changes were required. Mobile, Hermes
and release acceptance were not rerun for this example-only change.

## Handoff

Browse the playground with `dart run melos run example:run`. Package examples remain
independently runnable. The implementation and review are complete; no push or merge is
included in this task.
