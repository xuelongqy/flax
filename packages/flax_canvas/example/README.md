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
dart run tool/example_run.dart --package=flax_canvas --engine=v8
dart run tool/package.dart integration flax_canvas --engine=v8
```

This experimental branch requires the maintained engine with the Canvas extension. Set
`FLUTTER_ENGINE` to the isolated engine source root before running these commands.

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
page is a visual comparison, not an FPS benchmark. A current browser with OffscreenCanvas,
`transferControlToOffscreen`, `roundRect` and context `reset` is required.
