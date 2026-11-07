# Three.js WebGPURenderer in a Dedicated Worker

Status: maintained macOS acceptance passed. Final independent delivery status is
recorded in the external `final-delivery-receipt.json` identified below.

## Goal and scope

Run upstream Three.js 0.186.1 WebGPURenderer inside a real, DOM-free Dedicated Worker.
Reuse the checked-in textured glTF/GLB, skeletal/morph animation, Meshopt, KTX2,
lighting/shadow and TSL inversion/Bloom scenes. Preserve existing main-thread tests and
all inherited working-tree changes. No commit, staging, push or publication. Canvas 2D,
general DOM, other platforms and FPS comparisons remain outside this task.

## Acceptance criteria

1. Compare all 20 named root/Worker GPU snapshots for identical fixtures and sizes;
   require maximum RGBA channel error at most one. Animation must visibly deform and
   restore the mesh; inversion and Bloom retain their existing measured controls.
2. Transfer rendering ownership to the Worker and display its real native canvas through
   CanvasView. Capture eight representative Flutter-composited frames, including the
   loaded model, skeleton pose changes, TSL effects and KTX2 pixels.
3. Run both KTX2 modes in real nested decoder Workers, exercise three upstream renderer
   animation-loop callbacks, dispose/terminate the test Worker, and verify its
   retirement. Session close must reclaim an actively animating Three.js renderer with a
   live nested decoder, alongside the existing GPU/decoder work.
4. Run the normal macOS acceptance for three Sessions, including WebGPU-only and Canvas
   2D coexistence. Required reports and named pixel/display cases cannot be omitted.
   Obtain independent review and acceptance on the actual working tree and artifacts.

## Approach

Add explicit canvas, image-report and snapshot callbacks to the existing scene fixtures.
The existing main-thread runs retain their PNG evidence and collect compact reference
pixels. A separately bundled neutral ESM Worker runs the same functions, transfers GPU
readbacks only at verification points, and waits for each comparison/display capture. No
DOM globals or Three.js patches are installed in the Worker. Textured glTF export
continues to require root Canvas 2D and is accurately skipped in the Worker.

The runner bundles the extra Worker entry with the normal esbuild toolchain and serves
it from the existing loopback fixture host. The acceptance manifest explicitly grants
`flax.module.remote` only for that fixture origin, using the existing trusted example
approval. No Core, WebGPU runtime, native implementation or upstream Three.js changes
were required.

Error collectors use `addEventListener('uncapturederror', ...)` because upstream
Three.js replaces `device.onuncapturederror` during initialization. The KTX2 fixture
monitors its separate device, and the Session-close Worker continues forwarding
GPU/render errors after arming. Renderer disposal is awaited before the next fixture.

## Results and validation

The signed Release application passed the complete three-Session acceptance with the
matching isolated Worker engine. The first run correctly rejected the undeclared remote
module permission; adding the bounded host declaration resolved it. The delivered
fixture also corrects the overwritten error collector described above.

| Check                         | Recorded result                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| Root/Worker GPU snapshots     | 60 comparisons; maximum channel error 0                                                      |
| Actual Flutter Worker display | 24 captures; mean channel error 0                                                            |
| Upstream animation loop       | 3 actual draw callbacks in each Session                                                      |
| Nested KTX2 Workers           | ETC1S and UASTC in every Session; observed runtime/channel counts at least 2                 |
| Session-close Three.js work   | Live animating renderer and nested decoder in all 3 GPU Sessions                             |
| Retirement                    | All 10 GPU and 2 Worker counters zero after the Core-only and 3 GPU Sessions                 |
| Existing main rendering       | 360 accepted frames                                                                          |
| Selected CTS                  | 567 passed, 36 existing skips, 0 failed per GPU Session                                      |
| Scoped Node checks            | Core 151, Canvas 35, WebGPU 15, example 2; 203 passed total                                  |
| Selected TypeScript checks    | 12 commands passed                                                                           |
| Host and fixture checks       | Maintained Dart analysis, JS syntax, neutral Worker bundle, formatting and runner AST passed |

The exact execution receipt and raw application results are under
`/Volumes/MAC_HOME/CodexHome/review-evidence/three-worker-renderer-20261104-781a/application-fix-1/`.
The signed application inventory is `fix-1-signed-app.json` in that evidence root,
SHA-256 `5d3fa6bc4340420a7771132ee3ed3a92ef96b50f64ec0f571db85fa38a2825a8`. Source,
native payload and signed-application guards passed before and after execution. These
are bounded functional and lifecycle checks; no FPS, display latency, long-run memory,
other-platform or general DOM conformance result is claimed.

Fixed BASE: `d954085ff34814cab21d8991b6b590bec9e182eb`. Initial package:
`/Volumes/MAC_HOME/CodexHome/review-evidence/three-worker-renderer-20261104-781a/initial`,
digest `a98c52da6f6cd79f20ab2001aad4a4416597c52718e6b9e816c7c34bd938fc20`, fingerprint
`da3de78a870dcb3ee4a0e45068f9a4be01e4388122cb6c35c1a3c57d4a923ab3`.

## Independent delivery evidence

Whole-tree packages use the fixed BASE and immutable initial package above, including
uncommitted and new files. The final delivered source package, signed application and
independently reproduced acceptance are identified by
`/Volumes/MAC_HOME/CodexHome/review-evidence/three-worker-renderer-20261104-781a/final-delivery-receipt.json`.
Final delivery requires that receipt to report PASS for the actual delivered version;
the implementation run documented here alone does not establish independent sign-off.
