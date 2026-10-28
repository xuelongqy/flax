# Afterglow — Canvas playground

Shape a light sculpture by dragging across the canvas. Switch between Bloom, Orbit and
Weave, choose an Aurora, Ember or Tidal palette, soften the light, and play or pause its
motion. Center light and Reset studio also work without dragging. All buttons support
keyboard activation; the layout adapts to narrow windows.

Capture postcard encodes the current 880 × 480 drawing as PNG, decodes and resizes it
into a separate 330 × 180 ImageBitmap, and displays the frozen result. It shows the
encoded size; it does not save a file to disk. Reset invalidates pending captures.

The artwork exercises SVG Path2D, Bézier curves, ellipses, roundRect clipping, gradient
fills, screen compositing, shadows, filters, dashed strokes, text and image scaling.
Animation reuses one ImageBitmap for its light particles and does no pixel readback. It
starts paused and cancels its animation callback when the widget is disposed.

The private `./showcase` widget is reused by the
[top-level playground](../../../examples/embedded/README.md). Both hosts use the same
Canvas and Core implementation. The shared widget/integration test verifies changed
pixels after dragging, controls, animation/pause, frozen PNG previews, reset, narrow
layout and disposal. Detailed Canvas contracts remain in the package's WPT/UI tests.

From the repository root:

```sh
dart run tool/example_run.dart --package=flax_canvas
dart run tool/package.dart integration flax_canvas
```

Use the maintained Flutter engine with the Canvas extension. `FLUTTER_ENGINE` may select
an isolated engine source root; otherwise the selected Flutter SDK's engine is used. The
launcher stages an application without the integration-test plugin; the source example
retains its test dependencies.

For Android, set `ANDROID_HOME`, put LLVM's `llvm-nm` and `llvm-readobj` on `PATH`
(available in the maintained checkout's
`engine/src/flutter/buildtools/mac-arm64/clang/bin` on Apple Silicon), then select a
connected arm64 device:

```sh
export FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=<adb-id>
dart run tool/example_run.dart --package=flax_canvas --release
```

For a booted iOS arm64 simulator:

```sh
export FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-id>
dart run tool/example_run.dart --package=flax_canvas
```

The maintained engine uses V8 JIT on Android/macOS arm64 and V8 jitless on iOS. Android
supports Debug and Release; the iOS simulator uses Debug. Physical iOS uses Release and
also requires `FLAX_IOS_TEAM`. The matching target engine and macOS host tools must be
built first.

Add `--build-only` to build and audit without launching. Products and a verification
receipt are saved under `build/examples/flax_canvas/<target>/<mode>/`. The audit checks
signatures, the native library closure, and Canvas exports without an exact Canvas
feature-version gate. Android also checks 16 KB page alignment. Launch commands use the
selected device and keep the staged project until Flutter exits or detaches. Animation
starts paused; tap **Play motion** to animate.

## Browser comparison

```sh
pnpm --filter @flax/example-canvas run build:html
open packages/flax_canvas/example/browser/dist/index.html
```

The generated HTML is self-contained and can be copied or opened offline. The browser
and Flax both use [drawing.ts](js/src/drawing.ts), including the sprite, paths, colors,
filters and animation phase. The browser transfers its visible canvas to OffscreenCanvas
and draws directly, without a per-frame snapshot or extra image copy. DOM code is
confined to the browser example's controls; it adds no DOM API to Flax.

Reset both studios to compare the same paused frame. Both use an 880 × 480 canvas and
the same PNG encode/decode/resize path for postcards. The browser keeps that bitmap
resolution regardless of display pixel ratio; Flax's CanvasView can rasterize at display
resolution. Fonts, antialiasing, filters and image scaling can therefore differ. This
page is a visual comparison, not an FPS benchmark. A current browser with
OffscreenCanvas, `transferControlToOffscreen`, `roundRect` and context `reset` is
required.
