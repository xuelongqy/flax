# Task: Engine Canvas batch migration and semantics

Status: implemented in the paired experimental branches; the selected WPT workers and
all three reference grids pass. This is not complete browser conformance.

## Scope and branches

Continue Flax `feat/canvas-shared-buffer` and Flutter `feat/canvas-native-prototype`.
Decode and record in C++, preserve JS call forms, correct reset/transfer/straight
pixels, and complete the priority composition, shadow, filter and text behavior. Changes
remain local and uncommitted.

## Implementation

All 48 command opcodes and 13 path operations decode/record in C++. Dart owns widgets,
picture history, codec scheduling/upload and asynchronous delivery. Commits borrow
shared JS bytes synchronously, validate atomically and retain no command storage. Native
host/surface/image registrations have explicit isolate ownership and disposal.

Private Canvas API 5 retains the existing filter and spacing payloads with validated
numeric filter steps and original CSS lengths, and adds an explicit RGBA8 snapshot
operation. Legacy payloads remain readable. Runtime ABI 2 and the UI protocol are
unchanged; both header copies and generated FFI match. Published engine pins remain
unchanged, so this requires the paired local engine.

Composition processes transparent source pixels across the final clip. Native drawing
applies global alpha, ordered filters, shadow creation and separate shadow/source
composition. Shadows use filtered source alpha, device-coordinate offsets and
shadowBlur/2 sigma. Consecutive Gaussian blurs compose by variance. Plain source-over
rectangles retain the direct DisplayList path. Opaque result alpha is discarded after
each operation. Color/global alpha remain floating point until rendering. Effects
materialize their source in a retained layer before reuse, preserving the RGBA8 bitmap
boundary in Canvas snapshots. Source coverage bounds the layer, with an antialiasing
margin; ordinary source-over rectangles keep their direct path.

The Metal validation also exposed two shared Impeller defects: color-dodge/color-burn
boundary precedence and tiled snapshots reusing an entire texture for cropped or
transformed geometry. Both are corrected in the independent engine worktree. The
isolated build helper recompiles the affected renderer objects and embedded Metal
libraries while leaving the maintained base build untouched.

Text normalizes supported absolute and Offscreen-relative font units, preserves relative
spacing across font changes, selects primary-face metrics and OpenType BASE baselines,
and measures fractional glyph outlines. maxWidth retains shader coordinates. The six
upstream baseline drawing tests verify actual pixels, in addition to metrics. The old
Dart renderer remains an oracle for unchanged paths/styles/images; corrected effects and
baselines use independent upstream assertions instead.

## WPT provenance and adapter

The [pinned suite](../../packages/flax_canvas/test/wpt/README.md) contains 370 unchanged
worker tests and three 26-operator reference grids: 448 scenes in total. The worker
sources, HTML, PNG and font hashes pin upstream commit
`f6880eca1af36e5572d433b6032915d1fd7e3725`. Original assertions and fuzzy thresholds are
retained. Flutter preloads the exact CanvasTest fonts; this does not certify browser
font loading or Workers.

Grid references compare composited white-page pixels and preserve the upstream channel
limit of 4 and differing-pixel budget of 33,000. Additional Flax regressions cover
filter order, repeated blur variance, device distances, filter style-source units,
filtered pattern/shadow alpha, shader alpha, zero/fractional fonts, destructive opaque
composition, and color-dodge/burn boundaries.

## Reference-grid diagnosis

Independent PNG decoding agrees with Flutter's premultiplied PNG bytes. The adapter now
retains upstream transferToImageBitmap before compositing the transferred image on a
white output canvas. It does not reconstruct actual RGB from straight-alpha bytes.

Two engine precision defects were confirmed independently of the reference budget:

- Canvas snapshots inherited the display's 10-bit offscreen format. A half-alpha green
  sample composed to [154,255,154] through a retained bitmap but [153,255,153] through
  PNG decoding. The original PNG output reported 10 significant bits. Canvas snapshots,
  compression and reads now explicitly use RGBA8, including filter intermediates.
- RGBA8 MSAA resolve textures used lossy compression, changing a pixel's alpha from 128
  to 136. Explicit formats and RGBA8 intermediates now use lossless textures. The
  render-target cache rejects a texture whose format differs from the requested format.
  Snapshot rendering restores the previous display format after encoding.

Equal storage formats alone did not align primitive quantization. An 18-scene Metal
probe compared rectangles, scaled images and patterns at six stages, both as straight
RGBA and as transferred bitmaps on white. The source-only results were identical. After
drop-shadow, a source-over overlap had alpha 191 for fillRect/drawImage and 192 for
pattern. Keeping 0.5 in the direct paths differed from the pattern's already-stored
128/255 alpha. A diagnostic 128/255 input made every stage agree, confirming the
boundary rather than an adapter or PNG difference; application/WPT inputs stay
unchanged.

| Stage                   | fillRect/drawImage pixels differing from pattern before | After |
| ----------------------- | ------------------------------------------------------: | ----: |
| Source                  |                                                       0 |     0 |
| Drop-shadow filter      |                                                     775 |     0 |
| Canvas shadow           |                                                     160 |     0 |
| Filter and shadow       |                                                   1,495 |     0 |
| Effects over background |                                                   1,360 |     0 |
| Effects with copy       |                                                     775 |     0 |

The common native drawing path now materializes the effect source before reusing it. Src
prevents opacity layer elision; every reuse composites the source within its own layer
so Src cannot clear a previously drawn drop-shadow. Source-over effect layers use source
bounds, and the bitmap layer has a source-coverage clip, avoiding full-canvas
allocations for small shapes. Destructive final operators retain full-clip behavior. The
final Metal stage probe has zero pixel differences, including white composition. All
three reference grids pass at 22,642 / 33,000 with the original channel limit of 4.
Additional regressions assert exact stage alpha for all three draw types. Skia's RGB
rounding can differ between draw types; color conformance remains covered by the
unchanged upstream assertions rather than a new assumption of bit-identical RGB on every
backend.

Final-source validation logs and build/source hashes are kept in ignored
.local/canvas-native/. run-release-verified-effect-source.log is the fresh AOT/Metal
acceptance run; diagnostic application replays have separate names. A passing benchmark
or worker subset does not override a failing reference grid.

## Previous font/color/image acceptance

- API 5 Debug/Skia: 270 Canvas UI checks passed, including 257 upstream workers, three
  reference grids and the font/image regressions. Core UI 377, Canvas JS 29, Core JS 86,
  TypeScript, V8 runtime/joint GC 45, FFI/binding reproduction, Dart analysis and
  documentation checks passed. Debug grids have 23,034 / 23,034 / 24,392 differing
  pixels, within the original budget and channel limit.
- API 5 Release/AOT/Metal: the application passed 293 checks, including 20 decoder
  comparisons, the expanded WPT selection and Session-font/image-codec regressions. All
  three grids passed at **22,642 / 33,000** differing pixels each, satisfying the
  channel limit of 4. The application reports CANVAS_NATIVE_PASSED.
- iOS Simulator/Hermes and Android/V8: final Canvas runtime and five renderer/snapshot
  C++ sources compile. No mobile shader-library rebuild, link or runtime acceptance is
  claimed. Source/object hashes are recorded before temporary objects are removed.
- Earlier API 4 release median JS loop + commit + Picture times: 1,000 rectangles C++
  186.2 us, Dart 404.1 us; 10,000 rectangles C++ 1,812.5 us, Dart 3,956.8 us (2.18x
  throughput). Minimal batch/direct probes at 10,000 measured 1,510.5/3,281.7 us. These
  exclude raster work, frame scheduling and presentation; they do not measure drawImage
  costs or establish GPU frame rate.

The earlier receipt is .local/canvas-native/verification-api5.json. Historical API 4
receipts verification-effect-source.json and wpt-stage-quantization.json retain the
earlier stage comparisons and build/source hashes. The API 5 receipt also records
unmodified worker/image/font hashes, the expanded suite and native font release.

The separate
[real-window drawImage experiment](../../experiments/canvas_native/README.md#drawimage-in-a-real-window)
uses normal Release/vsync rendering without pixel readback. All 30 timing phases and ten
operation-profile phases pass on the paired macOS V8/Metal engine, with native
registrations returning from zero to zero. For 128 static 256-pixel sprites per frame,
per-draw Canvas snapshots measured 4.185 ms CPU submission and 59.7 FPS; reusing an
ImageBitmap measured 0.780 ms and 109.5 FPS. Both issue 257 Canvas host calls per frame.
Scalar no-op Dart host calls cost about 2.048 us each in the isolated loop. These frame
cadence results do not measure physical presentation or GPU completion and do not
replace the WPT pixel acceptance above.

## Fonts, colors and image export

API 5 passes the existing Session font collection into both native measurement and
paragraph drawing. This branch reuses the module-font resource layer from the isolated
font experiment: native FlaxFontCollection, AssetBundle manifest/digest checks,
generated FlaxFont and FlaxFontScope bindings, and Session ownership. There is no
Canvas-specific font registry. Public Flutter fonts remain the fallback, including fonts
loaded after a Canvas has already cached a family lookup. Two private Sessions can
register different bytes under the same logical family without changing each other's
glyphs or a public-only Session. Integration checks compare metrics, real pixels and
native ownership counts after unmount/close. Native paragraph synthesis handles absent
bold/italic faces.

Font parsing now includes size keywords, reference-font ex/ch/ic and explicit system
shorthand fallback, with escaped/multiword family serialization. CSS colors include all
148 named colors, legacy/modern RGB and HSL, HWB, hue units, percentage alpha and
canonical getters. Oversized CSS channels are clamped before command encoding. Saved
state keeps unrounded RGBA separately from serialized getter strings.

PNG, JPEG and WebP convertToBlob export has MIME fallback, codec quality and correct
alpha behavior. JPEG/WebP run the existing Skia encoders through CPU-only dispatch on a
Dart worker isolate; no UI handles cross isolates. ImageBitmap transforms explicitly use
RGBA8. Empty sources and broken image decoding use the corresponding DOM exceptions;
invalid drawImage source types are rejected before geometry can become a no-op. Plugin
installation loads its generated surface prototypes even for global-only Canvas use.

The WPT selection adds all 138 fillStyle parsing workers, two font parsing workers and
26 drawImage workers from the same pinned revision, with six original image assets. The
adapter decodes real Blobs and checks actual DOMException instances. Upstream source
assertions and the channel-4 / 33,000-pixel reference limits remain unchanged. Codec and
Session-font regressions are additional integration checks, not upstream WPT counts.

## Geometry and font grammar

roundRect follows Web IDL scalar/dictionary/iterable radii conversion, checks non-finite
and negative inputs in specification order, preserves winding/dash origin under flips,
and leaves the new subpath at (x,y). SVG parsing retains the valid prefix before the
first error and delegates curves/arcs to Skia. SVG construction and addPath leave the
required independent final subpath. The test-only Dart oracle is updated for those
specified subpath boundaries, rather than treating its old continuation as correct. The
original exact-pixel roundRect zero-size worker exposed an Impeller-only point stroke.
Zero-by-zero rectangles now create only the required move, avoiding a closed degenerate
contour that Metal rasterized differently from Skia.

Font shorthand now uses CSS tokens instead of an expanding regular expression. Comments,
string/identifier escapes, decimal weights, oblique angles and typed calc/min/max/clamp
are supported. The native font path preserves decimal wght/slnt coordinates; static
oblique uses baseline shear and corresponding ink bounds. The existing Session/private
and public Flutter font collections remain the lookup source. Math-function ranges are
clamped after evaluation; out-of-range literal tokens remain invalid. Line height is
validated and discarded, as required by Canvas font state.

The unchanged upstream selection adds all 56 roundRect workers. Two original CSS font
scripts provide 315 valid and 16 invalid inputs, adapted to Canvas computed
serialization rather than browser CSSOM. Additional exact-pixel SVG and dashed-geometry
checks and real font metrics/drawing regressions are local tests. Original WPT worker
tolerances and reference budgets remain unchanged.

The preceding geometry/font acceptance was 330 Debug/Skia checks through flutter_tester
and 353 checks in the actual Release/AOT/Metal application, plus 31 Canvas JS tests,
TypeScript and Dart analysis. V8 runtime/joint GC passes 45 checks. Public types and
module metadata reproduce; the WPT importer reproduces the pinned fixtures. All three
Metal reference grids remain at 22,642 / 33,000 differing pixels, with the original
channel limit of 4. Debug grids remain at 23,034 / 23,034 / 24,392. Source/build hashes
and logs are recorded in .local/canvas-native/verification-geometry-font.json.

The isolated builder now produces both the Debug test executable and a separate
FlutterMacOS.framework, including changed renderer objects and shaders. It replaces the
base XCFramework link with an owned copy containing that framework, verifies Canvas
exports and records hashes for all products. The Release path uses the same packaging
checks. Base engine artifacts remain unchanged.

The independent Debug/Metal and Release/AOT/Metal applications each pass all 353 checks,
including the unchanged WPT selection. Their three reference grids each report 22,642 /
33,000 differing pixels. The rebuilt Debug/Skia tester also passes 330 checks.
Application gates compare the selected and packaged framework after removing signatures
from temporary copies, and assert inside the process that dyld loaded the framework from
that application bundle. The current packaging receipt is
.local/canvas-native/verification-debug-framework.json; application-debug-app.json and
application-release.json record the packaged/loaded paths and normalized framework
hashes. Temporary applications are removed afterward.

The earlier mobile receipts compiled the runtime/decoder only. The installed mobile
application runs below supersede those compile-only results for their tested targets.

## API contracts and bitmap processing

Existing call forms remain compatible. Numeric geometry/pixel inputs are converted
before validation; invalid fill rules, gradient stops and pattern repetition use the
specified errors. ImageData metadata and the context's canvas reference are readonly.
Detached buffers fail before encoding. Format attributes describe the actual sRGB/RGBA8
storage, and unsupported wider settings are rejected. getTransform returns an
independent 2D affine value with aliases, inverse/composition, point mapping and
typed-array export; no DOM global or browser integration is introduced.

Blob decoding now runs SkCodec on a worker isolate. EXIF orientation, flipY's raw-image
orientation, Display-P3 ICC to sRGB conversion and explicit profile bypass are checked
against pinned image assets. Explicit straight-alpha bitmap creation retains its source
bytes through clone/crop/resize; premultiplication occurs at the selected boundary.
Pixelated scaling uses nearest integer scaling followed by the bilinear remainder.
Native dimension validation rejects overflow before narrowing. UI image upload and async
delivery remain in Dart; no UI handles cross worker isolates.

drawImage(ImageData) now uses command 48 and the same native image draw path for all
three overloads, honoring transform, clip, alpha, effects and composition. Its source
bytes are captured when called. The old three-argument putImageData shortcut is removed;
putImageData retains its state-independent behavior. Ordinary drawImage adds no
readback; CPU readback is limited to explicit bitmap conversions that need GPU source
pixels.

The selection adds 51 original WPT workers and an unchanged ImageBitmap script with 12
source/premultiplication combinations. All previous 334 pinned source hashes and the
assertion harness remain unchanged. The premultiplication tolerance stays at 2; the
reference grids keep channel limit 4 and differing-pixel budget 33,000. Local image
regressions are counted separately. An initial local assertion incorrectly required a
PQ/HDR fixture's default decode to differ from profile bypass; the unmodified upstream
bypass assertions are retained, and an additional Display-P3 fixture now checks exact
converted and unconverted pixels. This does not certify HDR tone mapping.

Final-source acceptance passes 33 Canvas JS tests, 384 Debug/Skia UI checks, 21 decoder
checks, 45 V8 runtime/joint-GC checks and 408 checks in each independent Debug/Metal and
Release/AOT/Metal application. Both applications verify their packaged and actually
loaded Canvas framework. All three Metal grids remain at 22,642 / 33,000; tester grids
remain at 23,034 / 23,034 / 24,392. TypeScript, Dart analysis, public-type/host/module
reproduction and documentation checks pass. Build/source hashes and logs are recorded in
.local/canvas-native/verification-canvas-contracts-images.json. Temporary applications
and test scratch are removed after recording results; engine builds are retained.

## Mobile runtime acceptance

The iOS frame-pacing follow-up corrects two Hermes scheduling defects: young-generation
completion no longer escalates to a full Dart collection, and the idle timer waits
while Flutter frames arrive within 100 ms. Completed old-generation pressure and Dart
pressure still request joint collection. Delayed statistics from a joint collection
cannot request another pass. No JS API or tracing/reachability rule changes.

Three policies with three launches each cover 16,200 measured frames on the 60 Hz
iOS 27.0 simulator. Lightweight Canvas improves from 55.52 to 60.00 FPS; the allocation
pressure case improves from 32.43 to 56.54 FPS. Timer-triggered full collections disappear
from the retained animation traces, while pressure and post-animation idle collection
remain exercised. The final independent simulator gate passes 427 ordinary bodies
(413 Canvas + 14 existing GC tests), with all 417 Widget journal entries successful.
The 370 workers, 78 reference scenes, three grids and six protected hashes are unchanged.
See the [pacing record](../../experiments/canvas_native/afterglow.md#ios-simulator-frame-pacing-and-joint-gc)
for controls, raw evidence and the Debug/physical-device limits. The earlier shared
simulator run interrupted by another app is excluded from acceptance.

The paired branches now run the same Canvas command, UI, font/image and WPT suites in
installed Debug applications. Complete isolated builds refresh the renderer shaders,
patched SDK and framework/JAR together; the maintained base builds remain untouched. The
runner checks runtime identity, packaged engine content, SDK library hashes and native
Canvas resource cleanup. Existing JS APIs, worker sources and thresholds stay unchanged.

Two mobile compatibility defects were corrected:

- Android's export list hid the Canvas dispatch and probe symbols. The shared engine now
  exports them, allowing the installed APK to use the existing native interface.
- Hermes treated negative canonical numeric TypedArray keys as ordinary properties,
  failing the unchanged `2d.imageData.get.invalid` worker. A pinned native Hermes patch
  rejects invalid numeric indices while preserving value conversion, ordinary named
  properties, native TypedArray identity and valid-index fast paths. The fix covers
  computed and named reads/writes and property definitions; it adds no JS wrapper. A
  separate Hermes producer/cache keeps the maintained SDK intact.

| Target                                   | Runtime                          | Application suite | Differing pixels per fillRect / drawImage / pattern grid |
| ---------------------------------------- | -------------------------------- | ----------------- | -------------------------------------------------------- |
| Pixel 4, Android 13, arm64 device        | V8, Debug, Impeller              | Pass              | 22,686 / 22,686 / 22,686                                 |
| iPhone 18 Pro simulator, iOS 27.0, arm64 | Hermes interpreter, Debug, Metal | Pass              | 23,171 / 23,171 / 23,171                                 |

The initial gates passed all 364 selected upstream workers, 78 reference scenes, the 12
adapted ImageBitmap combinations, 331 CSS font-grammar inputs and the shared local
Canvas/decoder regressions. Every grid keeps channel limit 4 and pixel budget 33,000.
Their per-case journals contain the same case names and all-success results; the iOS
binding additionally reports platform semantics initialization. A pre-fix iOS run had
one genuine TypedArray failure; an earlier background-suspended simulator run is
excluded from semantic conclusions.

The patched Hermes host CLI also passes 143 numeric-index cases in ordinary and
optimized modes, plus six unchanged upstream TypedArray/ArrayBuffer regression files
checked with FileCheck. The Hermes producer integrity test, three SDK verifier tests, 45
macOS V8 runtime/GC checks, runner analysis and documentation checks pass. Evidence,
source/SDK/build hashes and application audits are recorded in
.local/canvas-native/verification-canvas-mobile.json. The runner removes its installed
app and copied project; the dedicated simulator is deleted after acceptance.

The current iPhone 18 Pro / iOS 27.0 simulator Debug gate has also been refreshed
with the latest renderer and the current 370-worker selection. All 413 ordinary
test bodies and 403 Widget journal entries pass, with each grid unchanged at
23,171 / 33,000. Its engine and physical Release build contain the same 23 recorded
Canvas/renderer source hashes. Three Afterglow launches record 4,320 timed frames;
all 12 repeated PNG comparisons match exactly. The simulator reports 60 Hz and uses
an unoptimized Debug engine with framebuffer fetch disabled by the existing
simulator guard. At 880 × 480, soft Bloom / Weave reach 8.4 / 15.3 FPS, with raster
p50 114.18 / 61.98 ms. These are simulator diagnostics, not physical Release results.
The [simulator fixture record](../../experiments/canvas_native/afterglow.md#ios-simulator-measurements)
contains the complete table and limits. Raw evidence is retained in
.local/canvas-native/afterglow/mobile/verification-ios-simulator.json.

The Hermes producer now verifies overlapping patches by unwinding the stack in a
disposable copy. This fixes reuse of the same correctly patched cache for simulator
and device builds while preserving source-hash, missing-patch and recipe checks.
The existing integrity regression covers overlapping patches, reuse without source
changes and tampered inputs. Temporary simulator apps/projects are removed; the
pre-existing simulator and maintained engine builds are retained.

Physical Release/AOT acceptance now passes on Pixel 4 / Android 13 / V8 / Impeller
OpenGLES and iPhone 14 Pro / iOS 27.0.1 / Hermes / Metal. Each completes 413 ordinary
test bodies; binding journals contain 402 Android Widget cases and 403 iOS cases,
including the platform semantics initialization. The current selection has 370 upstream
workers and 78 reference scenes. All three grids remain 22,686 / 33,000 on Android and
23,236 / 33,000 on physical iOS, with the original channel limit 4. Original WPT,
adapter, public API and drawing hashes remain unchanged.

The mobile helper adds a complete physical iOS Release build, an independent patched
Hermes producer and active-Xcode SDK resolution when a cloned SDK path has disappeared.
Application audits verify the selected engine and iOS AOT/Hermes closure. Physical iOS
test logs are routed to the CoreDevice console. The performance consumer omits the
unused integration-test plugin and retrieves completed evidence through device file
transfer; platform logs truncate long lines and can drop bursts. Both temporary
applications and their copied projects are removed after execution.

Three fresh launches per device measure six Afterglow scenes at two output sizes,
totalling 8,640 measured frames without pixel readback during timing. Repeated PNGs
match exactly in all 24 within-device comparisons. At 880 × 480, soft Bloom / Weave
median FPS is 23.4 / 17.5 on Android (active 60 Hz) and 45.3 / 67.3 on iOS (reported 120
Hz). Android's older Adreno falls back to GLES and does not use the Metal optimizations.
Its corresponding raster p50 is 40.50 / 57.25 ms; iOS measures 13.24 / 12.99 ms. iOS
also has periodic callback gaps in crisp scenes whose build/raster times are short;
scheduling or collection attribution remains unverified. The
[fixture](../../experiments/canvas_native/afterglow.md#physical-mobile-measurements)
records all six scenes, screen-fit results and limitations. Raw evidence and hashes are
under `.local/canvas-native/afterglow/mobile/`. No mobile HTML comparison or
before/after engine performance pair is claimed, and no new renderer change was made in
this run.

## Afterglow rendering and animation acceptance

The shared browser/native workload now has a reproducible
[comparison fixture](../../experiments/canvas_native/afterglow.md): six fixed scenes, 30
warmup frames, 120 measured frames, identical 880 × 480 backing pixels and no pixel
readback during animation. PNG comparisons happen after timing.

Two actual defects were corrected. Gradients now follow the draw-time CTM, including
baked current paths, with six unchanged upstream transform workers. The V8 engine no
longer escalates intermediate GC phases into repeated full joint Dart/V8 passes. Idle
collection and active-job ownership protection remain unchanged.

An initial paired 60 Hz run measured both hosts around 59–60 FPS. The subsequent 120 Hz
comparison uses two runs per variant, with both native variants reporting `resumed`.
Metal Gaussian blur now records its three existing passes in one command buffer,
retaining pass order, textures and sampling. The isolated buffer change keeps all six
phase-zero PNGs byte-identical and reduces soft-scene raster p50 by 10–15%. Bloom and
Weave remain over the 8.33 ms frame budget; separate operation effects are not merged.
See the fixture for the complete paired FPS/raster table and raw samples.

The real Release/Metal gate additionally exposed seven existing exact-color gradient
failures. Gradient dithering used a 1/64 amplitude rather than one RGBA8 code value,
allowing pure-color plateaus to become 254. The corrected 1/255 amplitude fixes the
original assertions, including baked-path draw-time CTM checks. This separate rounding
correction intentionally changes gradient bytes; no WPT threshold or assertion changes.

All 390 Canvas/UI checks (370 selected WPT workers and 78 reference scenes), 45 V8
runtime/GC checks, 33 JS checks and the standalone interactive example test pass. The
maintained macOS engine rejects Hermes selection, so that command supplies no additional
runtime acceptance. The final renderer also passes all 414 checks in a real
Release/Metal application. The selected WPT sources, adapter and public Canvas type
hashes are unchanged. Raw samples, phase-zero PNGs, engine receipts, logs and the visual
report are retained under `.local/canvas-native/afterglow/soft-120hz/`.
Background-interrupted and externally accessibility-initialized runs are excluded from
aggregate acceptance. Other Apple GPUs, mobile performance and cross-browser results
remain unverified.

Small Metal decal blurs additionally skip an integer-aligned identity copy: the vertical
pass samples the existing matching unorm texture with transparent decal padding. Source
bitmap layers and both kernels remain unchanged. Fresh paired 120 Hz runs improve soft
Bloom from 71.4 to 77.4 FPS and Weave from 86.8 to 95.5 FPS, reducing raster p50 by 6.9%
and 10.1%. Stage ablations identify retained source/restore/composition layers as
substantial remaining work. Removing source materialization changes pixels; hardware
screen blending gives no meaningful additional improvement. Both probes are discarded.
All six PNG pairs and both actual display captures remain identical. The final paired
engines pass 390 Canvas/UI and 414 Release/Metal checks with original WPT/API/drawing
hashes unchanged. The fixture documents stage results and limits; concise receipts and
the current interactive preview are in `.local/canvas-native/afterglow/stages-120hz/`.

Metal child-layer command continuation now defers scissor-only pass creation and submits
a plain child restore with its unused offscreen parent. All source textures, resolves,
quantization and per-operation blending remain. The no-MSAA copy probe was
pixel-identical but had no meaningful gain and was removed. Two fresh 120 Hz runs per
variant measure soft Bloom at 77.6 to 86.3 FPS and soft Weave at 95.5 to 104.2 FPS;
raster p50 falls by 10.8% and 9.5%. Fresh HTML runs measure 108.2 and 120.0 FPS. Both
native scenes remain over the 8.33 ms budget. The final engines pass 391 Canvas/UI and
415 real Release/Metal checks, including exact first-draw clip/filter/composition
regressions. All six PNG pairs, repeated PNGs and four display captures are identical.
Original WPT/API/drawing hashes and thresholds remain unchanged. Concise receipts and
the interactive report are under `.local/canvas-native/afterglow/layers-120hz/`.

A pinned Chromium/Skia source review and three further local probes are documented in
the
[Afterglow fixture](../../experiments/canvas_native/afterglow.md#chromium-and-skia-source-review).
Small-kernel unrolling, in-place cache retirement and a per-frame cache index did not
establish a reliable gain and were restored exactly. Fresh restored SDKs pass 391
Canvas/UI and 415 real Release/Metal checks; original API, drawing and WPT hashes are
unchanged. Reduced profiles and probe receipts are in
`.local/canvas-native/afterglow/effects-120hz/`.

Metal blur/color-matrix filters now prepare dependencies before opening an unused output
encoder and share a command buffer with that output. Source submission stays early; all
textures, resolves, quantization and screen operations remain. Successful creation
counters fall from 228 to 156 command buffers for soft Bloom and 177 to 122 for soft
Weave per main-window replay, while encoder counts stay at 376 and 291. Four controls,
three retained-renderer runs and two fresh HTML runs at 120 Hz measure Bloom at 80.7 →
79.8 FPS (HTML 102.7) and Weave at 97.8 → 98.5 FPS (HTML 119.0). These changes do not
establish a throughput improvement for either scene; Orbit soft raster p50 falls 17.8%.
The whole-source-chain grouping and zero-hit texture-alias probes are removed. Final
checks pass 392 Canvas/UI and 416 each in real Debug/Metal and Release/Metal apps,
including exact translucent-image/filter/draw-order regressions. All 36 repeated native
PNG comparisons and four actual display pairs are exact. Original API, drawing and WPT
hashes/thresholds remain unchanged. The
[fixture](../../experiments/canvas_native/afterglow.md#filter-to-output-pass-scheduling)
records methods and limitations; receipts and the interactive comparison are in
`.local/canvas-native/afterglow/schedule-120hz/`. Mobile performance is not remeasured.

Resolved Metal source textures now bypass a redundant copy into unused filter-input
layers, retaining integer placement and materializing the copy before later drawing.
Transparent padding is omitted only for translation-only, unit-opacity source-over
parents with non-downsampled decal blur and transparent-black-preserving matrices.
Source resolve, blur/color outputs and screen quantization remain. Successful encoder
counts fall from 376 to 303 for soft Bloom and 291 to a median 237 for soft Weave;
command-buffer counts stay unchanged. Four controls, four final runs and three fresh
HTML rounds at 120 Hz measure Bloom at 85.5 → 103.9 FPS (HTML 115.2), Weave at 103.5 →
118.5 FPS (HTML 119.1), and raster reductions of 19.2% / 24.5%. All 42 PNG comparisons
and four display pairs are exact. Final checks pass 392 Canvas/UI and 416 each in
Debug/Metal and Release/Metal, including painted-parent and fractional-scissor
regressions. Original WPT/API/drawing hashes and thresholds remain unchanged. The
[fixture](../../experiments/canvas_native/afterglow.md#reusing-resolved-filter-inputs)
records the conditions, remaining Bloom cost and measurement limits; receipts and the
interactive report are in `.local/canvas-native/afterglow/input-reuse-120hz/`.

## Other limits

- CSS parsing remains a subset: DOM-dependent font variables/units, newer math
  functions, missing small-cap feature synthesis, Lab/LCH/OKLab/color(), relative colors
  and SVG url() filters remain open. System font shorthands use Flutter's fallback
  family at 14px; system colors use a fixed light palette without DOM/theme inheritance.
- Actual display-p3/float16 storage, PQ/HDR tone mapping and output density metadata
  require separate renderer/codec acceptance. Display-P3 input conversion to sRGB is
  covered by the current bitmap tests.
- Mobile acceptance covers the selected Android/iOS devices in Release/AOT, Android
  Debug and the refreshed iOS simulator Debug gate. Other mobile GPUs, GPU-loss recovery,
  extended thermal stress and a mobile HTML comparison remain unverified. DOM/video and
  Worker/structured-clone integration remain outside the Canvas scope.
- This maintained macOS engine selects V8; the Hermes runtime check rejects that
  unsupported selection. The mobile Hermes results do not certify a macOS Hermes engine.

See the [Canvas contract](../architecture/canvas.md),
[module fonts](../architecture/fonts.md) and
[coverage audit](../architecture/canvas-api-coverage.md).
