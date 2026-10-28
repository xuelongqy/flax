# Canvas 2D

Optional `flax_canvas` / `@flax/canvas` adds OffscreenCanvas 2D without DOM, CSS, or
`HTMLCanvasElement`. V8 uses one JS encoder, engine C++ decoder and command protocol.
The UI protocol is unchanged; native ABI stays 2. Canvas `commandVersion` remains a
private command-buffer version, not a host or UI protocol.

```text
JavaScript Canvas 2D
→ binary command buffer
→ one host commit
→ one non-leaf engine call → C++ decoder → DisplayList
→ PictureRecorder wrapper
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
`CanvasGradient`, `CanvasPattern`, `TextMetrics` and option dictionaries).
Implementation fields such as command buffers, image ids, `flush`, and style versions
are not part of the public types. Type-only `@flax/canvas/globals` declares those
interfaces as globals; it does not install them. Omit the plugin and those constructors
and surfaces do not exist. Do not also put `canvasBindings` in the application registry.

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

The encoder retains command 47 for text options and adds command 48 for the existing
ImageData drawImage extension. It also supports an optional text maxWidth and an
optional gradient local matrix. The native decoder also accepts the original v1 record
payloads. The runtime ABI and UI protocol are unchanged.

Each record is `opcode:u16`, `flags:u16`, `payloadLength:u32`, payload, padding. JS
grows a reusable ArrayBuffer and submits `Uint8Array(buffer, 0, usedLength)`. One commit
per dirty surface per JS job or rAF. Drawing calls do not cross the bridge one-by-one.

Command commits use the runtime's shared `Uint8Array` view without copying the command
payload. Decoding is synchronous and does not retain that view, so JS may reuse or grow
its buffer after the commit returns. Recorded pictures own their decoded drawing data;
this does not eliminate image uploads, pixel snapshots, or GPU work. Other Canvas host
operations still use independent byte snapshots where their lifetimes require them.

Unknown opcodes fail the batch. The previous picture remains. Recovery waits for a new
operation rather than repeatedly scheduling the rejected state.

The optional plugin requires the Canvas engine extension declared in
[`canvas.h`](../../packages/flax_canvas/native/include/flax/canvas.h). Its generated FFI
declarations are independent of the runtime function table. Installation calls the
dispatch entry point directly; it does not require an exact engine version number. The
existing version query remains available to prior callers and diagnostics, and is not
bumped for compatible additions. Preserve existing operation IDs, argument meanings and
error behavior; append new operations instead of reinterpreting existing payloads.
Missing extensions and unsupported operations report errors. Binary framing and input
validation remain mandatory. One installation owns native surface states and image
registrations on its Flutter UI isolate. The decoder reads ordinary and external
Uint8List storage, validates record/path bounds and finite numbers, and releases its
byte access before returning. Decode uses a temporary state and DisplayList; a rejected
batch publishes neither. State, clips, shaders and image references never retain the
submitted command bytes. Path nesting is limited to 64; one dashed path is limited to
one million extracted segments.

Canvas snapshots, history compression and pixel reads explicitly use premultiplied RGBA8
storage. They do not inherit the display's HDR/10-bit offscreen format. Explicit
snapshots retain MSAA and use lossless resolve textures. API 4 adds a host-independent
snapshot operation that returns a Flutter-owned deferred image without a CPU pixel copy;
ordinary Flutter Picture snapshots retain their existing format selection.

Effects first materialize the source in a layer that cannot distribute its opacity into
later shadow/source draws. Source coverage bounds this layer, preserving the RGBA8
quantization boundary for rectangles, images and patterns without full-canvas
allocations for small shapes. Ordinary source-over drawing retains its direct path.

On Metal, save-layer blur/color-matrix chains prepare their inputs before opening the
output encoder and share a command buffer with that output. The source is still
submitted early; screen samples the completed output in its original order. This keeps
the source resolve, directional blur, color output and screen quantization boundaries.
Other filters, active output passes and other backends retain their existing scheduling.

An unused transparent Metal layer may hold the resolved source instead of copying it
into another texture. Different extents are allowed only for an unclipped, integer
placement under a translation-only, unity-scale decal-blur/matrix chain that preserves
transparent black. Logical layer bounds stay intact. If another draw arrives, the
original copy is materialized first. Rescaled, other-effect and clipped inputs retain
the original path. This removes eligible copy encoders without removing the source
quantization; it does not release render-target allocations early or reuse textures
between operations. See the
[measured fixture](../../experiments/canvas_native/afterglow.md).

Dart continues to own widgets, repaint/history composition, asynchronous image loading,
and pixel/blob delivery. JPEG/WebP encoding uses Skia's existing encoders on a Dart
worker isolate; PNG keeps Flutter's asynchronous encoder. It performs no command, path,
filter or text decoding. Native text uses Flutter's existing paragraph builder and the
Session's [font collection](fonts.md), falling back to public registered host fonts.
Both drawing and measurement refresh later public font registrations. The old decoder
exists only as a
[test reference](../../packages/flax_canvas/test/support/dart_decoder.dart).

The current default path is baked when commands are added. Lines and curves map through
the CTM in JavaScript. `arc` / `ellipse` / `arcTo` under a non-identity CTM wrap
untransformed geometry in private path opcode `pathExtend` (13) so the engine can extend
the contour, or append it when there is no current point. Identity CTM still emits
`PATH.arc` / `ellipse` / `arcTo`. `fill` / `clip` of the current path then draw with an
identity transform. `stroke` maps that baked geometry back through the inverse CTM so
line width, dash, cap and join use the draw-time transform. Explicit `Path2D` stays in
user space and uses the CTM at draw time. `Path2D.addPath` stays `pathAdd` and starts
new contours. `isPointInPath(x, y)` tests canvas coordinates;
`isPointInPath(path, x, y)` inverts the CTM, or returns false if the CTM is not
invertible. `isPointInStroke` uses the native stroke outline, dash and draw-time CTM for
both path forms.

CSS colors include all named sRGB colors, hex, legacy/modern RGB and HSL, HWB, hue
angles and percentage alpha. Numeric channels are clamped, including overflowing CSS
numbers; invalid tokens preserve the previous style. Getters serialize opaque values as
lowercase hex and translucent values as rgba(). Raw channels remain separate from getter
strings so save/restore and batch recovery preserve drawing precision. System colors use
a fixed light palette; currentColor resolves to black without a DOM element. `ImageData`
rejects non-positive sizes and mismatched buffer lengths; `Path2D.roundRect` accepts one
to four numeric or point radii and throws `RangeError` for invalid lengths or negative
radii, including iterable radius lists and Web IDL conversion/error ordering. The
rounded contour starts at the specified top edge (including flips), preserving dash
phase, and ends with a new subpath at the original (x,y). Non-finite geometry is ignored
before it reaches the native batch.

SVG Path2D accepts the ten SVG path command families and retains complete segments up to
the first syntax error. A linear grammar scan selects that prefix; Skia still owns curve
and arc geometry. Invalid SVG text does not roll back unrelated commands in the batch.
SVG construction and addPath append a fresh subpath at the last transformed point;
cloning preserves the source subpaths. This is path-data support, not SVG document
rendering.

## Paint and history

Decode records into a new `Picture`. Each batch rebuilds Flutter's save stack from the
native saved states before applying the current clip and transform, so `save`/`restore`
work across commits. Flutter paint clips the view, `saveLayer`s so `clearRect` cannot
erase sibling Flutter content, draws the optional base image, then incremental pictures.

A full-surface `clearRect` drops recorded history only when the transform is identity,
the clip stack is empty, and there is no save stack. Translated or clipped clears only
draw `BlendMode.clear` on a transparent canvas. `alpha: false` freezes on the first
successful `getContext('2d')`. Opaque canvases initialize with black, use
`BlendMode.src` black for `clearRect`, force `putImageData` alpha to 255 while keeping
RGB, and restore opaque alpha at the end of each batch with `BlendMode.dstOver` black so
`copy` and `destination-out` cannot leave holes.

`putImageData` creates an engine-owned RGBA image and blits it with `BlendMode.src`. The
DisplayList retains its image; Impeller uses Flutter's deferred image upload and Skia
uses Flutter's thread-safe image holder. Input bytes are straight RGBA and are
explicitly premultiplied for the renderer; readback returns straight RGBA. It ignores
all drawing state, including clip, and supports dirty rectangles. `createImageData` also
accepts another ImageData's dimensions. Synchronous `getImageData` waits for an engine
snapshot/readback with a 10-second failure bound and no pinned Dart bytes.
`getImageDataAsync` keeps its existing asynchronous behavior. Both normalize negative
sizes and return transparent black outside the surface.

Images are reference counted. `ImageBitmap` holds an owner reference; `CanvasPattern`
holds its own; a pending batch holds a temporary reference for `drawImage`. `close()`
drops only the owner and exposes zero width/height. Unknown image ids fail the batch.
Closed bitmaps throw `InvalidStateError`. Pattern snapshots from an OffscreenCanvas are
owned by the pattern. Empty source canvases throw `InvalidStateError` for drawImage and
return null from createPattern. Image decode failures reject createImageBitmap with
`InvalidStateError`. Hidden canvases, patterns, and `ImageBitmap`s are tracked with
`WeakRef` and swept on every canvas host `call` and `flush`. A dead canvas issues
`disposeSurface`; a dead pattern or bitmap `closeImage`s through one idempotent release
token so explicit `close()` plus sweep cannot double-decrement. There is no
`FinalizationRegistry` path and no public `CanvasPattern.close()`. Sweep is
opportunistic and needs a later canvas call, flush, or session dispose.

`drawImage(OffscreenCanvas)` synchronously creates a deferred snapshot handle and closes
it after flush, including a failed commit. GPU work runs on the raster task runner;
handle creation does not read pixels back to the CPU. Each draw takes a new source
snapshot. Reusing an `ImageBitmap` avoids that snapshot, while image-retain calls still
cross the host boundary. The fillRect benchmark does not measure these image costs.
Non-repeat pattern axes use `TileMode.decal`, so they do not smear edge pixels. Invalid
repetition values throw `SyntaxError`; `null`, `undefined`, and `''` mean `repeat`. Live
`CanvasGradient` / `CanvasPattern` mutations are rewritten before the next fill or
stroke. Gradient stops are sorted by offset without mutating insertion order in
JavaScript; equal offsets keep insertion order. Gradients use the drawing CTM; creating
or assigning a gradient does not capture a transform. Baked paths preserve that paint
transform while drawing geometry in canvas coordinates. Radial gradients map the two
circles onto the engine's conical gradient. Zero stops normalize to transparent black
and a single stop to a solid color before recording.

`reset()` clears committed and pending pixels, state, stack and path; the native reset
also removes the active clip. `transferToImageBitmap()` requires an existing context,
snapshots the previous pixels and starts a clear bitmap without resetting drawing state
or the path. `createImageBitmap` supports crop, resize (including inferred aspect
ratio), flipY and sampling quality. Blob decoding uses SkCodec in a worker isolate:
`from-image` applies EXIF orientation; `flipY` disregards the encoded orientation and
flips the cropped/resized raw image. Default color conversion targets sRGB, while `none`
ignores embedded profiles. `premultiplyAlpha: none` retains straight source bytes
alongside a premultiplied drawing image; clones preserve them until close. Explicit
conversions and pixelated resizing use worker-side crop/scale/flip before alpha
conversion. GPU sources need readback only for those bitmap conversions; ordinary
drawImage has no added readback. Default bitmaps do not retain a second pixel buffer.
Display-P3 ICC conversion to sRGB is pixel-verified. PQ/HDR tone mapping, wide-gamut
canvas storage and output density metadata are not certified.

The existing drawImage(ImageData) extension accepts all three drawImage overloads and
uses the current transform, clip, alpha, effects and composite operation. Bytes are
captured in the command batch, and the engine uses the same image drawing path. This
corrects the former three-argument putImageData shortcut while preserving call shapes.
`putImageData` continues to ignore drawing state.

ImageData exposes readonly width/height/data, colorSpace and pixelFormat. Only
sRGB/rgba-unorm8 storage is implemented: recognized wider formats raise
NotSupportedError instead of being silently ignored. Context attributes report unorm8;
unsupported P3 or float16 contexts return null. The desynchronized hint is reported as
false. Numeric pixel arguments are converted and range-checked before allocation or
dispatch; detached buffers and invalid source objects fail before encoding.

getTransform returns an independent two-dimensional affine value with a/b/c/d/e/f,
matching matrix aliases, inverse, multiply, translate/scale/rotate, transformPoint and
typed-array export. This is a Canvas math value, not a DOMMatrix global or a 3D/CSS
transform parser. Existing affine fields remain compatible.

`convertToBlob({type, quality})` asynchronously exports PNG, JPEG or WebP and falls back
to PNG for unsupported MIME types. Quality selects JPEG/WebP encoding within [0,1];
invalid values use the codec default. JPEG composites transparency onto black, while PNG
and WebP preserve alpha. Empty canvases reject with `IndexSizeError`. Worker encoding
holds only straight RGBA bytes, dimensions and options, with no UI image or Session
handles crossing isolates.

Text supports fill/stroke `maxWidth` without moving gradient/pattern coordinates,
quoted/fallback family lists, normalized font units, locale, kerning/caps OpenType
features and font width. `measureText` returns all twelve numeric fields with outline
ink bounds and primary-font metrics. Hanging/ideographic baselines consult OpenType BASE
before using metric fallbacks. See the API audit for limits.

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

Use generated `Listener`, `MouseRegion` and `KeyboardListener`. Core delivers ordinary
Dart references for pointer/key events, keys and Offset values. Read native fields such
as `event.position.dx` and `event.logicalKey.keyLabel`; use `instanceof KeyDownEvent`,
`KeyUpEvent` or `KeyRepeatEvent` instead of the former synthetic `KeyEvent.type`.
`PointerScrollEvent.scrollDelta` is an ordinary Offset reference. These values share
normal binding conversion and joint GC. `localPosition` is Flutter view coordinates;
applications scale to canvas pixels when display size differs.

## Support matrix

- Canvas: OffscreenCanvas 2D, Path2D, gradients, patterns, text, ImageBitmap, ImageData,
  PNG/JPEG/WebP convertToBlob. HTML canvas, WebGL, Worker transfer and `toDataURL`
  remain outside scope.
- State: save/restore/reset, transform, clip, line dash, shadow and ordered CSS filters,
  including drop-shadow. SVG `url()` filters remain unsupported.
- Pixels: synchronous `getImageData`, `getImageDataAsync`, dirty-rectangle putImageData,
  createImageData and bitmap crop/resize. Current format is sRGB/RGBA8.
- Composite: Flutter BlendMode-accurate names only. No silent approximate mappings.

`putImageData` is a synchronous RGBA blit. Image and text paints use the current
composite, alpha, shader and filter.

## Known limitations and verification

The [API coverage audit](canvas-api-coverage.md) separates the 72 declared standard
member names and their overloads from remaining color, text, compositing and platform
conformance work. Moving recording into the engine does not make the API
browser-conformant. The context-loss query reports retained surface lifetime; events and
GPU-loss recovery acceptance are not implemented.

The [JavaScript tests](../../packages/flax_canvas/js/test/) and
[Flutter pixel/state tests](../../packages/flax_canvas/test/ui/canvas_test.dart) cover
reset/transfer, alpha round trips, stroke hits, overloads, synchronous/async pixels,
gradient CTM and selected scene comparisons. The release runner exercises those tests
with the real macOS Impeller renderer. See the
[experiment record](../tasks/canvas-native-migration.md) for receipts and untested
targets.

## Composition, effects and text compatibility

The API 3 encoder adds validated numeric filter steps to command 38 and original CSS
spacing lengths to commands 43/44; legacy payload forms remain readable. It preserves
the 47 command and 13 path opcode set. API 4 retains these payloads and additionally
requires explicit RGBA8 snapshots. Older decoders cannot consume the optional tails. API
5 adds the Session font-collection argument, reference-font metrics and CPU-only
JPEG/WebP encoding. The command version and opcode set remain unchanged.

Native drawing applies global alpha, ordered filters, shadow generation and separate
shadow/source composition in that order. Effect sources are recorded without clipping in
device coordinates, so off-canvas geometry can cast a visible shadow. Shadow sigma is
half shadowBlur; CSS blur uses its stated sigma. Full-surface operators process
transparent source pixels within the final clipping region. Opaque surfaces discard
result alpha after each operation, including operations within a single batch. Plain
source-over rectangles retain the direct DisplayList path.

CSS filter functions include blur, brightness, contrast, grayscale, hue-rotate, invert,
opacity, saturate, sepia and drop-shadow. Function order and intermediate clamping are
preserved; repeated blurs compose. Offscreen filter font-relative lengths resolve at
assignment against the default 10px font-style source, while em/ex/ch/ic text spacing
follows the selected font. A 256-filter limit bounds native filter-chain depth. SVG
url() filters remain unsupported.

Font shorthand tokenization handles CSS comments, identifier/string escapes, optional
fields in any valid order, fractional weights and oblique angles. Typed
calc()/min()/max()/clamp() resolve supported lengths, percentages, weights and angles;
line-height is validated and discarded as required by Canvas. Invalid assignments
preserve the previous value. Absolute/relative units, size keywords and system
shorthands normalize to px, retaining quoted/fallback families and weight/style/stretch.
ex/ch/ic sizes use the default reference font's metrics; system shorthands use Flutter's
fallback family at 14px. Fractional weight reaches the wght variation axis; oblique
angles reach slnt where available and use baseline-relative shear for static faces, with
matching ink bounds and fixed shader coordinates. Missing bold/italic styles use native
paragraph synthesis; missing small-caps features are not synthesized. Text baselines use
the primary font's em box and OpenType BASE tables, with metric fallbacks when absent.
Glyph outlines keep fractional ink bounds. The parser does not implement DOM-dependent
font variables, viewport/container units, newer CSS math functions, or the complete
browser font-matching/synthesis algorithm; the [coverage audit](canvas-api-coverage.md)
lists the remaining forms and platform gaps. The
[WPT adapter](../../packages/flax_canvas/test/wpt/README.md) records exact provenance,
assertions, reference pixels and validation boundaries.
