# Three.js animation, Meshopt and textured export

The WebGPU workspace is rebased onto main at `a4cfeaee1`. Existing changes are retained
without a new project commit. Core now owns the previous resource-loading extensions:
ProgressEvent, FileReader, session object URLs, data/Blob Fetch and single byte ranges.
HTTP clients remain lazy and session-owned. The acceptance app has no Fetch plugin or
Fetch package dependency.

## Verified library behavior

The original fixtures use Three.js 0.186.1 with WebGPURenderer at 192 x 192.

| Case            | Verification                                                                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Skinning        | GLTFLoader loads two joints and inverse bind matrices. AnimationMixer rotates the joint, changes GPU pixels and restores the original pose.                                             |
| Morph           | A glTF weight animation changes a relative position target, changes GPU pixels and restores the original pose.                                                                          |
| Meshopt         | The original compressed model requires EXT_meshopt_compression. Single-thread Wasm decodes interleaved attributes and triangle indices, with GPU output equal to uncompressed geometry. |
| Textured export | GLTFExporter writes PNG-bearing glTF/data URLs and GLB. GLTFLoader reloads both; texture dimensions and rendered pixels survive the round trip.                                         |

One extra draw initializes each animated model before sampling. An initial diagnostic
found the same Morph reset discrepancy in Edge and Flax: an early return in Three.js's
initial geometry/material observation left its cached influence at zero while the GPU
held the posed value. Resetting the CPU influence to zero then skipped the GPU update.
An additional delayed sample alone did not repair that state. Warming the new model
before changing its pose keeps the observer synchronized. The final fixture uses no
Three.js monkeypatch, Flax GPU workaround or diagnostic interception.

Textured export runs in both Canvas 2D coexistence sessions. The GPU-only session
explicitly records a skip because the pinned GLTFExporter image path requests `2d`.
Skinning, Morph and Meshopt run in all three GPU sessions. Compressed attributes and
indices use `ATTRIBUTES` and `TRIANGLES` with the `NONE` filter; other filters and glTF
extensions are not certified by these fixtures.

## Native and browser acceptance

The [receipt](../../validation/three-advanced-macos.json) contains the source hashes,
pinned inputs, browser version, native results and pixel comparison. Across 25 new
captures, all 921,600 decoded RGBA pixels match the isolated Edge reference exactly.
Joint and Morph poses change 4,014 and 4,194 pixels, respectively; restored-pose error
is zero. Meshopt and both textured export formats also have zero pixel error.

The maintained macOS app additionally runs a Core-only FileReader/bitmap session,
existing textured models, lights, PCF shadows, TSL/Bloom and 360 ordinary GPU render
frames. All six native counters must return to zero after each session closes.

| Gate                                            | Result                |
| ----------------------------------------------- | --------------------- |
| Core JS including Fetch                         | 130 passed            |
| Canvas / WebGPU conversion / example metrics JS | 35 / 6 / 2 passed     |
| Core native canvas                              | 3 passed              |
| Core host/network lifecycle                     | 21 passed             |
| Canvas native UI and bounded WPT                | 395 passed            |
| Maintained V8 runtime/joint GC                  | 58 passed             |
| Scoped TypeScript and Dart analysis             | No errors or warnings |

The current main branch has one maintained V8 runtime gate, `check:runtime`; the old
`check:runtime:v8` alias and UI `--engine=v8` argument have been removed. Gates use the
current commands. Generated bindings, declarations, host scripts and module deliveries
are regenerated from their sources.

## Reproduce

After the SDK and engine prerequisites in the package README:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
pnpm --filter @flax/example-webgpu run fixtures
python3 packages/flax_webgpu/tool/run_macos.py \
  --flutter-root /path/to/flutter \
  --sdk "$PWD/.local/webgpu-dawn/sdk"
```

The [fixture builder](../js/build-fixtures.mjs) uses the pinned development-only
meshoptimizer 0.25.0 encoder. The [acceptance module](../js/three-advanced.js) uses
Three.js's bundled decoder. These are original small test models; no external assets or
model services are needed. Browser capture uses the same module and files. Its
diagnostic `convertToBlob` helper delegates to native HTMLCanvasElement.toBlob.

This is macOS arm64 development-profile acceptance, not full Three.js/glTF or WebGPU
conformance. Draco/KTX2 Workers, video textures, HDR/P3 display and other platforms
remain outside this change. No fresh throughput or display-latency comparison is
claimed. Prior performance experiments and rejected optimizations are retained.
