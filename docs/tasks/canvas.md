# Canvas 2D, rAF and game input

Status: implemented locally; workspace `check` blocked by unrelated files

## Goal and scope

Optional Canvas 2D plugin, base-host rAF, generated
Listener/MouseRegion/KeyboardListener snapshots, embedded demo and standalone navigation
entry. No DOM. UI protocol 18, ABI 2. Private canvas `commandVersion` 1.

## Acceptance criteria

- Plugin `bindingModules`, `exposeObject`/`requireObject`, rAF order.
- `CanvasView` jsName and snapshot inheritance/errors.
- Command decode vs `dart:ui` without goldens; 1k/10k metrics via `debugPrint`.
- JS plugin path: rAF flush, shared views, resize reset, input snapshots.
- `check` then `check:ui` and `check:ui:v8`.

## Approach

JS encodes a private v1 buffer; Dart records Pictures; paint never decodes. rAF uses
`scheduleFrameCallback` plus `drainMicrotasks`. See
[decision 0016](../decisions/0016-canvas-command-buffer.md) and
[canvas contract](../architecture/canvas.md).

## Results and validation

- Packages: `packages/flax_canvas`, `js/canvas`, `bindings/canvas`.
- ABI 2 still copies command bytes twice.
- Opaque canvases force alpha 255 on write paths (`putImageData` keeps RGB; batch
  `dstOver` black fills holes). `putImageData` is a sync RGBA blit.
- `CanvasView` holds the `OffscreenCanvas`. Patterns and bitmaps share one WeakRef
  release token. SVG paths keep current/subpath. Gradient stops sort by offset.
- Targeted: `@flax/canvas` typecheck; Node `js/canvas` 21/21;
  `flutter test packages/flax_canvas` 10/10; Hermes `canvas_test.dart` 3/3; `host:check`
  (31670 JS bytes); `bindings:check` passed.
- `dart run melos run check` failed at `analyze` on untracked
  `examples/embedded/test/framework/deferred_generics_test.dart` unused
  `package:flax/flax.dart` import, and would also fail `format:check` on unrelated
  `collections.dart` / codegen files. Canvas sources format clean.
- `dart run melos run check:ui` EXIT:0. Hermes runtime, `flax_canvas` 10/10, framework
  285/285 including canvas, example 8/8, macOS integration 4/4, embedded release build.
- `dart run melos run check:ui:v8` EXIT:0. V8 runtime, `flax_canvas` 10/10, framework
  285/285 including canvas, example 8/8, macOS integration 4/4, embedded release build.

## Handoff

Do not commit unless asked. Do not format or fix unrelated dirty tree files to green the
workspace `check`.
