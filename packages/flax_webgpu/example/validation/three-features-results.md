# Three.js models, lighting, shadows and postprocessing

The macOS arm64 Dawn profile passes this bounded Three.js 0.186.1 acceptance. All three
sessions load original glTF/GLB fixtures over loopback HTTP and render the same 192 x
192 scenes as an isolated Edge WebGPU reference. Across 27 captures, all 995,328 decoded
RGBA pixels match Edge exactly. This is a correctness comparison, not a new performance
or display-latency measurement.

| Area           | Verified behavior                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Models         | GLTFLoader loads indexed geometry, normals, UVs and MeshStandardMaterial from glTF with external BIN/PNG files and GLB with an embedded PNG; download progress reports the actual content length |
| Lighting       | Ambient fill plus directional, point and spot lights change measured PBR output                                                                                                                  |
| Shadows        | PCF shadows from directional, point and spot lights darken 2,303, 4,305 and 4,238 pixels respectively, compared with the same unshadowed scenes                                                  |
| Postprocessing | WebGPU RenderPipeline/TSL scene-pass inversion has at most one channel unit of quantization error; Bloom runs intermediate passes and increases mean RGB brightness from 74.171 to 180.880       |

The [receipt](../../validation/three-features-macos.json) records the inputs, three
session results, pixel comparison and validation gates. The fixture is
[three-features.js](../js/three-features.js), with original model assets under
[fixtures/three](../fixtures/three/README.md). The middle session omits Canvas 2D; all
three install the optional Fetch plugin for model URLs. The existing 360-frame rendering
gate and all six native retirement counters also pass.

## Compatibility fixes

Core now supplies ProgressEvent and session-owned URL.createObjectURL/revokeObjectURL.
Fetch reads these Blob URLs as cancellable byte streams, preserving MIME, content length
and Blob identity without a native HTTP operation. Revocation and session close release
registrations; another session cannot resolve them. HTTP redirects retain their
HTTP/HTTPS restriction. These changes also support shared canvas image loaders.

No Three.js source, engine overlay or WebGPU descriptor behavior was changed for the
graphics cases. Initial shadow comparisons reused a Three.js animation frame: ShadowNode
caches updates by camera/frame even when shadow.needsUpdate is true. GPU-call inspection
showed the second shadow pass was omitted, and sampling the depth texture showed its
clear value. The fixture now awaits rAF and asserts a newer renderer frame before
testing a changed caster. Directional, point and spot shadows then match the browser
pixels. Applications can use renderer.setAnimationLoop for ordinary animated rendering.

The reference uses an isolated headless Edge profile and the same fixture module,
assets, camera, resolution and renderer settings. Its diagnostic convertToBlob helper
delegates to native HTMLCanvasElement.toBlob; it does not alter rendering. PNG RGB/RGBA
encodings are decoded before comparison.

## Validation and limits

Core JS 109, Fetch JS 15, Canvas JS 35, WebGPU conversion 6 and example metrics 2 pass.
Both maintained runtime gates pass 58 tests each. Core/Fetch/WebGPU/example typechecks,
public SDK generation, Dart acceptance analysis, formatting and documentation checks
pass. Generated host scripts and declarations are updated from their sources.

Run the ordinary macOS acceptance runner from the package README; it stages the local
model assets, prepares Fetch and starts an ephemeral loopback server in the test host.
No external model service is required. The regular runner can additionally select the
bounded CTS set; CTS was not rerun for this host/library acceptance extension.

This does not certify all glTF extensions, Draco, Meshopt, KTX2, animation, custom GLSL
materials or arbitrary Three.js plugins. Fetch data URLs remain unsupported. Blob URL
fetching currently supports GET without Range requests. Full CTS/WebIDL conformance,
video external textures, Workers, HDR/P3 presentation and other platforms remain open.
