# Selected Web Platform Tests

The paired engine runs **370 upstream worker tests and 78 reference scenes** from
[web-platform-tests/wpt at f6880eca](https://github.com/web-platform-tests/wpt/tree/f6880eca1af36e5572d433b6032915d1fd7e3725/html/canvas/offscreen).
The selection adds 45 ImageData read/write workers and six gradient/style contract
workers, plus six linear/radial gradient draw-time transform workers. An original
ImageBitmap script separately checks 12 source/premultiplication combinations. These
cover Porter-Duff composition, transparent/uncovered source pixels, clipping, shadow
source alpha and device coordinates, filter state, font parsing, spacing, ink bounds and
BASE metrics. The expanded selection adds 138 color parsing, two font parsing and 26
drawImage workers, including negative source/destination sizes, self-drawing, empty
canvases, invalid images and non-finite input. The three reference grids each exercise
26 composite/blend operators with a drop-shadow filter and a Canvas shadow, using
rectangles, images and patterns. All 56 roundRect workers cover radii conversion,
negative sizes, winding, degenerate shapes, scaling and subsequent path operations. Two
pinned CSS font-grammar scripts add 315 valid and 16 invalid inputs; these are reported
separately from the unmodified Canvas workers.

## Provenance and refresh

[manifest.json](manifest.json) pins the revision and SHA-256 of each upstream worker,
HTML reference, PNG and font. [cases.dart](cases.dart) contains the unmodified worker
sources, extracted inline CSS font-grammar scripts, grid drawing bodies and embedded
source assets. The BSD-3-Clause [license](LICENSE.md) and the
[CanvasTest MIT license](FONT-LICENSE.md) are retained. No network access is needed when
running tests.

Refresh only when intentionally changing the pinned selection:

```sh
python3 packages/flax_canvas/tool/import_wpt.py
```

The importer uses the authenticated GitHub CLI, Python's standard library and the
workspace Dart formatter. It checks the grid count and original fuzzy thresholds before
emitting the fixture.

## Adapter and limits

1. [wpt_test.dart](../ui/wpt_test.dart) executes worker bodies in real Flax sessions: V8
   on macOS/Android and Hermes on iOS. The [small harness](harness.dart) implements only
   the assertions and scheduling used by this selection. No worker assertions are
   removed or relaxed. DOMPoint is a dictionary-only fixture for the roundRect input
   tests. The two CSS scripts use a Canvas font property adapter: validity and round
   trips are checked after Canvas size resolution and line-height removal. They do not
   certify CSSOM specified-value serialization, DOM or layout.
2. Flutter preloads the exact three WPT font files. FontFace loading and worker harness
   imports are adapter operations; this does not test browser font loading or Workers.
   Fetch serves the nine pinned image files as real Blobs; the engine's CPU image codec
   decodes them. Missing fixture paths fail instead of returning generated substitute
   pixels.
3. Grid tests retain the drawing bodies and upstream transferToImageBitmap step. The
   bitmap and upstream Cairo PNG are composited onto white, matching the reference page.
   RGBA8 bitmap quantization happens before white-page composition; actual pixels are
   read only after that composition, without another straight-alpha round trip. They
   preserve the upstream maximum channel difference of 4 and total differing-pixel
   budget of 33,000 per 26-cell grid.
4. Additional Flax regressions check filter ordering, repeated Gaussian variance,
   CTM-independent blur, filtered shadow alpha, shadow sigma, solid-to-gradient alpha
   and opaque composition within one command batch. An exact-alpha regression checks
   source, filter, shadow, background and copy stages across rectangles, images and
   patterns. SVG regressions compare exact pixels for command families, relative forms,
   compact arc flags, valid-prefix error recovery, clone/addPath and subpath
   continuation. Font regressions exercise decoded family names, math, fractional
   weights and positive/negative oblique angles through real metrics and drawing. These
   are not counted as WPT.
5. The ImageBitmap premultiplication script retains its original 12 test bodies and
   channel tolerance of 2. Its canvas factory creates OffscreenCanvas objects in the
   test adapter only. Additional local Blob tests reuse pinned EXIF JPEG and ICC PNG
   assets; these are not counted as upstream worker tests. They check orientation,
   Display-P3 to sRGB conversion, and drawImage(ImageData) overload/state equivalence.
   The PQ/HDR fixture checks unconverted channels only; it does not certify tone
   mapping.
6. This selection is not a complete WPT browser run. DOM, Worker scheduling, CSS layout,
   external SVG filters, wide-gamut/float16 pixels, complete font synthesis and GPU-loss
   events are not certified.

Run against the isolated paired debug engine:

```sh
export FLUTTER_ROOT=/Volumes/MAC_HOME/Develop/Flutter/flutter
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp"
export TMP="$TMPDIR" TEMP="$TMPDIR"
export FLUTTER_ENGINE="$PWD/.local/canvas-native/engine-src"
pnpm --filter @flax/canvas-runtime run build
node tool/ui_bundle.mjs --package flax_canvas
FLAX_CHECK_PREPARED=1 dart --packages=.dart_tool/package_config.json \
  tool/ui_test.dart --package=flax_canvas --engine=v8
```

The [application experiment](../../../../experiments/canvas_native/README.md) packages
the same worker/reference suite, ordinary Canvas integration tests, decoder tests and
benchmark into actual Debug/Metal and Release/AOT/Metal applications using its debug-app
and release modes. Their gates also verify the packaged and loaded framework. Its mobile
runner reuses these sources in installed Android/V8 and iOS/Hermes Debug applications
and audits their packaged engine and SDK libraries.

## Current reference-grid results

All three Debug and Release Metal grids pass at 22,642 differing pixels each, within the
original 33,000 budget and channel limit of 4. All selected worker tests pass. Tests
remain enabled and thresholds unchanged. The experiment record documents independent
PNG/bitmap checks, explicit RGBA8 and lossless-MSAA fixes, and a six-stage comparison
that located and corrected the source-bitmap quantization boundary. See the
[experiment record](../../../../docs/tasks/canvas-native-migration.md) for final-source
evidence and platform limits.

Mobile Debug acceptance passes on a Pixel 4 (Android 13/V8) and an arm64 iPhone 18 Pro
simulator (iOS 27.0/Hermes). The three grids each report 22,686 and 23,171 differing
pixels respectively. All workers pass without assertion or threshold changes. Hermes's
invalid TypedArray index behavior was fixed in its native engine after the original
`2d.imageData.get.invalid` worker exposed it. This does not certify physical iOS, mobile
Release/AOT or complete ECMAScript conformance.
