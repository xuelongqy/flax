# Canvas 2D

Optional `flax_canvas` / `@flax/canvas` adds OffscreenCanvas 2D without DOM, CSS, or
`HTMLCanvasElement`. Hermes and V8 share one JS encoder, Dart decoder and command
protocol. The UI protocol stays 20; native ABI stays 2. Canvas `commandVersion` remains
a private command-buffer version, not a host or UI protocol.

```text
JavaScript Canvas 2D
→ binary command buffer
→ one host commit
→ PictureRecorder
→ RenderObject paint
```

`OffscreenCanvas` owns pixels and drawing state. `CanvasView` only places that surface
in the Flutter tree. Paint never calls JS, reads JS objects, or decodes commands.

`FlaxCanvasView` caches the last laid-out surface pixel size. A surface size change
calls `markNeedsLayout()`; same-size picture updates only `markNeedsPaint()`. Explicit
widget `width` / `height` still relayout. Paint is a no-op when the surface is closed.

## Packages and installation

Dart `FlaxCanvasPlugin` contributes `canvasBindings` and installs constructors. JS
`CanvasView` wraps the generated binding with `surfaceOf(canvas)` and keeps a `WeakMap`
from the returned view description to the `OffscreenCanvas`, so a mounted view cannot
lose its surface to the hidden-resource sweep. `@flax/canvas` type-exports web-like
interfaces only (`OffscreenCanvas`, context, `Path2D`, `ImageData`, `ImageBitmap`,
`CanvasGradient`, `CanvasPattern`). Implementation fields such as command buffers, image
ids, `flush`, and style versions are not part of the public types. Type-only
`@flax/canvas/globals` declares those interfaces as globals; it does not install them.
Omit the plugin and those constructors and surfaces do not exist. Do not also put
`canvasBindings` in the application registry.

`requestAnimationFrame` / `cancelAnimationFrame` belong to the base host, not this
plugin.

## Command buffer

Private protocol v1, little-endian, 8-byte aligned records:

| Header field       | Size |
| ------------------ | ---- |
| magic `0x31435643` | u32  |
| commandVersion `1` | u32  |
| surfaceId          | u32  |
| generation         | u32  |
| sequence           | u32  |
| usedLength         | u32  |

Each record is `opcode:u16`, `flags:u16`, `payloadLength:u32`, payload, padding. JS
grows a reusable ArrayBuffer and submits `Uint8Array(buffer, 0, usedLength)`. One commit
per dirty surface per JS job or rAF. Drawing calls do not cross the bridge one-by-one.

ABI 2 copies those bytes twice: a native temporary buffer, then a Dart `Uint8List`. This
is not zero-copy.

Unknown opcodes fail the batch. The previous picture remains. `isPointInStroke` is not
implemented.

The current default path is baked when commands are added. Lines and curves map through
the CTM in JavaScript. `arc` / `ellipse` / `arcTo` under a non-identity CTM wrap
untransformed geometry in private path opcode `pathExtend` (13) so Dart can
`extendWithPath`, or `addPath` when there is no current point. Identity CTM still emits
`PATH.arc` / `ellipse` / `arcTo`. `fill` / `stroke` / `clip` of the current path then
draw with an identity transform. Explicit `Path2D` stays in user space and uses the CTM
at draw time. `Path2D.addPath` stays `pathAdd` and starts new contours.
`isPointInPath(x, y)` tests canvas coordinates; `isPointInPath(path, x, y)` inverts the
CTM, or returns false if the CTM is not invertible.

CSS color setters ignore values whose RGB or HSL components are not finite. The previous
style remains and no opcode is written. `ImageData` rejects non-positive sizes and
mismatched buffer lengths; `Path2D.roundRect` throws `RangeError` for negative radii.

## Paint and history

Decode records into a new `Picture`. Each batch rebuilds Flutter's save stack from
`CanvasDrawState.stack` before applying the current clip and transform, so
`save`/`restore` work across commits. Flutter paint clips the view, `saveLayer`s so
`clearRect` cannot erase sibling Flutter content, draws the optional base image, then
incremental pictures.

A full-surface `clearRect` drops recorded history only when the transform is identity,
the clip stack is empty, and there is no save stack. Translated or clipped clears only
draw `BlendMode.clear` on a transparent canvas. `alpha: false` freezes on the first
successful `getContext('2d')`. Opaque canvases initialize with black, use
`BlendMode.src` black for `clearRect`, force `putImageData` alpha to 255 while keeping
RGB, and restore opaque alpha at the end of each batch with `BlendMode.dstOver` black so
`copy` and `destination-out` cannot leave holes.

`putImageData` uploads one sync RGBA image and blits it with `BlendMode.src`. The Dart
image is disposed after the batch Picture is recorded. Pixel reads stay async.

Images are reference counted. `ImageBitmap` holds an owner reference; `CanvasPattern`
holds its own; a pending batch holds a temporary reference for `drawImage`. `close()`
drops only the owner. Unknown image ids fail the batch. Closed bitmaps throw
`InvalidStateError`. Pattern snapshots from an OffscreenCanvas are owned by the pattern.
Hidden canvases, patterns, and `ImageBitmap`s are tracked with `WeakRef` and swept on
every canvas host `call` and `flush`. A dead canvas issues `disposeSurface`; a dead
pattern or bitmap `closeImage`s through one idempotent release token so explicit
`close()` plus sweep cannot double-decrement. There is no `FinalizationRegistry` path
and no public `CanvasPattern.close()`. Sweep is opportunistic and needs a later canvas
call, flush, or session dispose.

`drawImage(OffscreenCanvas)` takes a sync snapshot for that batch and closes it after
flush, including a failed commit. Non-repeat pattern axes use `TileMode.decal`, so they
do not smear edge pixels. Invalid repetition values throw `TypeError`; `null`,
`undefined`, and `''` mean `repeat`. Live `CanvasGradient` / `CanvasPattern` mutations
are rewritten before the next fill or stroke. Gradient stops are sorted by offset
without mutating insertion order in JavaScript; equal offsets keep insertion order.
Radial gradients map the two circles onto `Gradient.radial` `center`/`radius` and
`focal`/`focalRadius`.

SVG `Path2D` data sets the decoder current point and last subpath start so a later
`lineTo` continues the contour. Empty-path `lineTo` / `quadraticCurveTo` /
`bezierCurveTo` start an implicit subpath. `arc`/`ellipse` connect from the current
point, then add the swept arc. `arcTo` uses `(x1, y1)` as the control point: it lines to
the first tangent and arcs to the second, and does not draw through P2. Negative `arcTo`
radii throw.

A surface may keep a raster base plus pictures. Compression starts at 32 pictures or 8
MiB of decoded commands and must not drop frames. A finished snapshot subtracts only the
bytes it captured, so pictures added during raster still count. A failed compress raster
keeps history, clears the in-flight flag, and lets a later commit try again. Session
close disposes pictures, images, surfaces and pending raster work.

## Animation frames

Base host uses one `SchedulerBinding.scheduleFrameCallback` per frame:

```text
script → microtask → rAF callbacks → drain microtasks (canvas flush) → layout/paint
```

Same timestamp per frame. Callbacks run in registration order. Nested rAF waits for the
next frame. Cancelled ids do not run. Exceptions are reported independently.

## Input

Use generated `Listener`, `MouseRegion` and `KeyboardListener`. `callbackSnapshots` copy
selected Dart fields into a frozen JS object once per event. `KeyEvent.type` is
synthesized (`keydown` / `keyup` / `repeat`). `localPosition` is Flutter view
coordinates; applications scale to canvas pixels when display size differs.

## Support matrix

- Canvas: OffscreenCanvas 2D, Path2D, gradients, patterns, text, ImageBitmap, ImageData,
  PNG convertToBlob. Not HTML canvas, WebGL, Worker transfer, or `toDataURL`.
- State: save/restore/reset, transform, clip, line dash, shadow, CSS filter subset. Not
  `url()` / `drop-shadow` or `isPointInStroke`.
- Pixels: `getImageDataAsync`, putImageData, createImageBitmap. Not synchronous
  `getImageData`.
- Composite: Flutter BlendMode-accurate names only. No silent approximate mappings.

`putImageData` is a synchronous RGBA blit. Image and text paints use the current
composite, alpha, shader and filter.

## Known limitations and verification

The current `reset()` implementation resets drawing state, the stack and the current
path, but its decoder opcode does not clear already committed surface pictures. The
current `transferToImageBitmap()` also calls the context's `reset()`, so drawing state
is not preserved after transfer. These are implementation gaps, not completed fixes. See
the [encoder](../../packages/flax_canvas/js/src/canvas.ts) and
[decoder](../../packages/flax_canvas/lib/src/commands.dart).

Non-finite color components are ignored by the color setters, but this does not cover
all numeric drawing arguments. A non-finite number reaching the decoder throws
`FormatException('Non-finite canvas number')` and rejects the pending batch, including
otherwise valid commands in that batch. The previous committed picture remains.

The [JavaScript tests](../../packages/flax_canvas/js/test/) and
[Flutter pixel tests](../../packages/flax_canvas/test/ui/canvas_test.dart) cover
selected commands, resources and scene comparisons. They do not prove complete Canvas
behavior. Closing the gaps above requires dedicated pixel/state regressions and affected
Hermes and V8 checks; old aggregate passes do not substitute for those regressions.
