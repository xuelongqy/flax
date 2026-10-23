# Canvas API coverage

Audit date: 2026-10-22. Scope: the
[WHATWG OffscreenCanvas 2D context](https://html.spec.whatwg.org/multipage/canvas.html#the-offscreen-2d-rendering-context),
compared with the [public declarations](../../packages/flax_canvas/js/src/types.ts),
[encoder](../../packages/flax_canvas/js/src/canvas.ts), and the paired engine decoder.
This combines a source/IDL audit with selected upstream Web Platform Tests. It is not a
full browser conformance result.

## Member names and overloads

Flax now declares all **72 unique member names** in the context's sixteen standard
mixins plus `canvas`. The previous audit counted 64. The eight additions are
`isContextLost`, `isPointInStroke`, synchronous `getImageData`, `lang`, `fontKerning`,
`fontStretch`, `fontVariantCaps`, and `textRendering`. `getImageDataAsync` remains a
Flax extension. Name coverage does not establish complete WebIDL, color, text, exception
or pixel conformance.

| Area                 | Implemented in the paired experiment                                                                                                                                                                  | Remaining limits                                                                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State and transforms | Pixel-clearing reset, save/restore, context-lifetime query, partial matrix dictionaries and six alias pairs with conflict validation                                                                  | getTransform returns a 2D affine value with matrix aliases and math methods, not a DOMMatrix global; no context-loss events or simulated GPU-loss acceptance                                                                                                                                   |
| Paths                | Native fill/stroke hit tests, dash/cap/join/miter/CTM-aware stroke hits, iterable elliptical roundRect radii, dash origin and post-shape subpaths, SVG prefix recovery, transformed addPath           | 56 upstream roundRect workers pass; SVG command/error/addPath regressions pass; not the complete SVG geometry suite                                                                                                                                                                            |
| Paint                | Full-surface composition, filtered-source-alpha shadows, ordered CSS filters, all named colors, hex, modern/legacy RGB/HSL and HWB with canonical getters                                             | No Lab/LCH/OKLab/color() or relative colors; fixed light system palette; no external SVG url() filters; renderer precision remains subject to selected WPT tolerances                                                                                                                          |
| Text                 | maxWidth; twelve metrics; absolute/relative units and size keywords, system shorthand fallback, native bold/italic synthesis, Session module fonts and public Flutter fonts                           | CSS escapes/comments, fractional weights, oblique angles and typed calc/min/max/clamp supported; DOM-dependent units/variables and newer CSS math remain outside the parser; system shorthand uses a 14px Flutter fallback; no missing small-caps synthesis; missing BASE uses metric fallback |
| Images and pixels    | Three drawImage overloads in runtime and types; createImageData(ImageData); dirty rectangle writes; sync/async straight RGBA8 readback; bitmap crop, resize, aspect ratio, flipY and sampling quality | sRGB/RGBA8 only; no display-p3 or float16 pixel settings; Blob profiles/EXIF and alpha conversion are implemented; wide-gamut storage remains deferred                                                                                                                                         |
| OffscreenCanvas      | Size, 2D context, PNG/JPEG/WebP blob with quality and transfer that preserves drawing state/path                                                                                                      | No EventTarget/structured-clone/Worker transfer; desynchronized is reported as false; willReadFrequently remains a hint; output density metadata is not validated                                                                                                                              |

`isContextLost()` reports the lifetime of this retained drawing surface; a temporary GPU
snapshot failure is reported by the readback operation and does not discard its
DisplayList. The platform context-loss/restoration event model is not implemented.

The Offscreen 2D standard omits the DOM-only `CanvasUserInterface` mixin.
`drawFocusIfNeeded`, HTMLCanvasElement, toDataURL, video/DOM image sources, WebGL and
WebGPU remain outside this package's scope.

## Corrected semantics

1. `reset()` clears pixels from previous commits and earlier commands in the same batch,
   resets the state/stack/path and removes clipping. Opaque canvases become black.
2. `transferToImageBitmap()` clears the source pixels while retaining its state, save
   stack, path and clip. It requires an existing context. Closed bitmaps expose zero
   dimensions; pending draws and patterns retain their own image references.
3. ImageData is straight RGBA. Uploads explicitly premultiply for Flutter, and both
   readback methods return straight RGBA. Fractional alpha can lose precision in the
   premultiplication round trip, as allowed by the standard.
4. `putImageData` ignores transform, clip, alpha, composite and filters. Dirty
   rectangles are normalized and clipped to the source. Negative read sizes select the
   opposite direction; pixels outside the canvas are transparent black.
5. Non-finite geometry is ignored before encoding. Invalid native packets still fail
   atomically. A failed batch prepares state for the next explicit operation without
   scheduling an endless resynchronization loop.

## Text and synchronous reads

Text attributes affect native shaping: `lang` selects the locale, `fontStretch` selects
font width, kerning/caps select OpenType features, and `textRendering` supplies shaping
and hinting preferences. Native shaping synthesizes missing bold/italic faces; missing
small-cap features are not synthesized. The twelve TextMetrics fields use outline ink
bounds, primary-face font metrics and OpenType BASE tables for hanging/ideographic
baselines. Fonts without BASE use ascent/descent fallbacks. Selected CanvasTest font
variants verify reduced ascent, zero descent, small fractional glyphs and baseline
coordinates.

Canvas uses the Session's existing module-font ownership, not another font registry.
Private families take precedence over public Flutter families; both measurement and
drawing use the same collection. Actual integration checks exercise same-name private
fonts in separate Sessions, host fallback, escaped family names, late public
registration and release. See [module fonts](fonts.md).

Synchronous `getImageData()` flushes pending commands and waits for an engine snapshot
and actual renderer readback. It uses the same recorded image content under Skia and
Impeller, rather than a separate CPU renderer that would omit GPU images. No Dart buffer
is pinned while waiting. A stopped renderer produces an error after a bounded 10-second
wait. Frequent reads can stall the UI; `getImageDataAsync()` remains available.

## Selected WPT validation

The [pinned WPT suite](../../packages/flax_canvas/test/wpt/README.md) includes 364
worker tests and three upstream PNG reference grids with 26 operators each (442
worker/reference scenes). Worker assertions retain their original tolerances; reference
grids keep the upstream maximum channel difference of 4 and differing-pixel budget of
33,000. The adapter preloads the original fonts and nine image assets and runs drawing
in Flax, rather than emulating browser DOM/Worker/font-loading APIs. An additional
original ImageBitmap script checks 12 premultiplication/source combinations with canvas
creation adapted to OffscreenCanvas. Two CSS font scripts separately cover 315 valid and
16 invalid grammar inputs through a Canvas property adapter; their specified-value CSSOM
serialization is not certified.

Canvas snapshots/readback explicitly use lossless RGBA8, independently of display HDR
format. The adapter retains the upstream bitmap transfer before white-page composition.
All three Debug and Release Metal reference grids pass (22,642 / 33,000 differing pixels
each), with channel errors at most 4. Effects materialize their source before reuse,
aligning solid, scaled-image and pattern quantization. A six-stage Metal probe confirms
equal pixels before and after bitmap transfer. See the experiment record for
final-source evidence and platform limits; this selection does not establish full WPT
conformance.

Installed Debug applications also pass the shared selection on an Android 13 Pixel 4
with V8 and an iOS 27.0 arm64 simulator with Hermes. Their three grids report 22,686
and 23,171 differing pixels respectively, with the same original thresholds. The
mobile gate audits packaged engine content and SDK libraries. Android exports the
Canvas entry points; the pinned Hermes patch corrects invalid numeric TypedArray
indices used by ImageData without replacing the native pixel array or changing JS APIs.

## Remaining priority

1. Expand WPT to further SVG curve/arc edges and text cases.
2. Add remaining CSS font forms and missing small-caps synthesis with font-specific
   cases.
3. Add wide-gamut storage and float16 when their corresponding Flutter/renderer paths
   can be verified; Lab/LCH/OKLab/color() and relative colors also remain.
4. Extend mobile acceptance to physical iOS and Release/AOT; verify context-loss recovery
   and extended stress. The current mobile gate covers installed Debug applications.
5. Treat DOM, Worker/structured-clone, video and GPU APIs as separate integration scope.

See the [Canvas contract](canvas.md) for ownership and the
[experiment record](../tasks/canvas-native-migration.md) for validation and timings.
