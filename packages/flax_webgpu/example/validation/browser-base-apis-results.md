# Shared browser APIs on macOS

Core now installs `FileReader` and `ImageBitmapRenderingContext` on the session global.
The existing optional Fetch package adds data URLs and single Blob URL byte ranges. The
WebGPU frontend also rejects out-of-bounds Uint32Array dynamic-offset ranges before
calling Dawn. The engine, native ABI and ordinary GPU presentation path are unchanged.

## API ownership

| Owner           | Added behavior                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Core            | FileReader text, ArrayBuffer, data URL and binary-string reads; events, abort and close cleanup              |
| Core canvas     | `getContext('bitmaprenderer')`, consuming bitmap transfer, transparent reset, snapshots and native placement |
| Optional Fetch  | Percent-encoded/Base64 data URLs, MIME fallback, HEAD and Blob URL ranges                                    |
| Optional WebGPU | Compute-pass, render-pass and render-bundle dynamic-offset range errors                                      |

Applications use the root globals directly. Type-only imports from `@flax/core/host`
declare them without installing a plugin. Fetch remains optional and retains its
existing Dart `FlaxFetchPlugin` installation contract.

Bitmap transfer consumes the source, leaving its dimensions zero. The canvas bitmap
takes the image dimensions while the canvas width/height attributes remain unchanged.
Null transfer restores a transparent bitmap at the attribute dimensions. Native images
are retained without copying pixel data where a shared image is available; explicit
snapshot/encoding paths may copy pixels.

Blob ranges return 206, Content-Range and the selected Content-Length. Suffix and open
ranges work. Invalid, unsatisfied and multiple ranges reject with TypeError, matching
Edge's Blob fetch behavior. Data URLs do not report a Content-Length and ignore Range.
HTTP redirects remain restricted to HTTP/HTTPS.

## Verified results

The [receipt](../../validation/browser-base-apis-macos.json) records pinned inputs,
source hashes, environment, browser reference and native resource counters.

| Check                                                | Result                                               |
| ---------------------------------------------------- | ---------------------------------------------------- |
| Core / Fetch / Canvas / WebGPU JS / example metrics  | 112 / 17 / 35 / 6 / 2 passed                         |
| Core native canvas construction, placement and input | 3 passed                                             |
| Default runtime and explicit V8 runtime              | 58 passed in each invocation                         |
| Core, Fetch, Canvas, WebGPU and example TypeScript   | Passed                                               |
| Scoped Dart analysis                                 | No errors or warnings; 14 style information messages |
| Generated host reproducibility                       | Passed                                               |

The real macOS host first runs a Core-only session without Canvas 2D, WebGPU or Fetch.
It reads a Blob with FileReader, consumes a bitmap and verifies native composition. It
then runs three GPU sessions, including one without Canvas 2D, with 360 ordinary render
frames. All six native GPU counters return to zero after each of the four session
closures.

Three.js 0.186.1 exports an untextured PBR cube as both JSON glTF with an embedded data
URL buffer and binary GLB, then loads both with the original GLTFLoader. Geometry and
material values survive the round trip. The same fixture passes 17 assertions in Edge
156.0.4314.50 using an isolated headless CDP window. Bitmap transfer pixels match the
expected straight RGBA values on the GPU. Edge also confirms the dynamic-offset range
errors for all three programmable encoder kinds.

The existing textured glTF/GLB model loading, PBR lights, three shadow types, TSL
inversion and Bloom checks rerun successfully in all three GPU sessions. This change
does not repeat the previous full feature-image comparison or performance comparison.

## Reproduce

From the repository root, after the package's SDK and engine prerequisites:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 packages/flax_webgpu/tool/run_macos.py \
  --flutter-root /path/to/flutter \
  --sdk "$PWD/.local/webgpu-dawn/sdk"
```

The acceptance entry is [browser-base.js](../js/browser-base.js), called by the
maintained [acceptance application](../app/lib/acceptance.dart). The additional
Core-only session uses that profile's existing shared-image engine extension. The
ordinary debug engine lacks this extension; its separate widget test verifies
construction and mounting without attempting pixel decoding.

This is selected API acceptance, not complete File API or WebGPU conformance.
FileReaderSync/Workers, filesystem access and video external textures remain outside the
delivery. No new frame-rate or display-latency result is claimed.
