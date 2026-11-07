# WebGPU standard input semantics

Status: implementation, focused JS checks and macOS acceptance complete; final
independent delivery acceptance is recorded externally. No commit or push.

## Goal and scope

Inspect the remaining practical WebGPU gaps and repair a bounded set of ordinary input
semantics. Preserve the initial descriptor fast paths, existing Canvas/Three.js
behavior, mapped-buffer ownership and Worker retirement. No native ABI, Core,
Flutter/Dart or GC policy changes are required.

The initial Flax revision is `d954085ff34814cab21d8991b6b590bec9e182eb`, with inherited
uncommitted work preserved. Full working-tree review packages and the independent
verdict are stored outside the repository at
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-api-gaps-20261102/`.

## Findings and implementation

The pinned profile already declares the ordinary resource, rendering, compute, upload,
mapping, error and canvas methods. The useful small gaps found here concern behavior
inside those methods, rather than additional method names.

| Area                    | Change                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Descriptor dictionaries | Create own data properties without invoking inherited setters; retain ordinary object prototypes. Read inherited dictionaries first and each dictionary's members in lexical order, generated ahead of time.  |
| `GPUQueue.writeBuffer`  | Validate the selected source byte length before Dawn, throwing synchronous `OperationError` unless it is a multiple of four. Preserve element units for typed arrays and byte units for ArrayBuffer/DataView. |
| `drawIndexed`           | Apply the existing signed 32-bit conversion to `baseVertex` on render passes and bundles.                                                                                                                     |
| `setVertexBuffer`       | Only null/undefined unbind. Convert slot, offset and explicit size once, including an explicit size on unbinding; let Dawn derive an omitted remaining size.                                                  |

The dictionary fixes address the two causes behind the earlier descriptor observations:
getter-only `Object.prototype.label` assignment failures and texture-view Proxy member
order. Historical receipts retain their original results. This is not a claim of
complete WebIDL conformance.

The ordering follows the
[Web IDL dictionary conversion](https://webidl.spec.whatwg.org/#es-dictionary). The
upload exception follows
[WebGPU writeBuffer](https://gpuweb.github.io/gpuweb/#dom-gpuqueue-writebuffer). The
pinned IDL/Dawn/CTS revisions are unchanged. Generated metadata and SDK declarations are
regenerated from the source generator; there is no sorting in a rendering call.

## Acceptance criteria

1. Focused converter regressions fail on the initial implementation and pass after the
   fix; runtime/example tests and typechecks pass.
2. The real macOS fixture verifies uploaded bytes and positive/negative indexed-draw
   pixels, both render-pass and bundle inputs, explicit descriptors and nullish
   defaults.
3. The unmodified pinned CTS upload group passes alongside the existing bounded
   selection, and existing Three.js/Canvas/Worker/session checks remain successful.
4. All GPU and Worker resource counters retire; the actual working tree and required
   native artifacts pass independent review and final fingerprint verification.

## Results and validation

Focused checks currently pass eight converter tests, two example tests, runtime/public
SDK/example typechecks and the normal runtime build. The initial converter regression
run failed both new tests before the fix. The maintained runtime gate passes all 59
contracts plus C-FFI reproducibility.

The real API fixture passes 57 new assertions in each of three Sessions, including
source-byte readback, positive/negative indexed draws and both encoder types. Its
`api-extensions.standardInputSemantics` record identifies those checks. The application
passes 360 frames and the existing Canvas coexistence, Three.js models/lighting/shadows/
postprocessing/animation/exports and Worker checks. Four retirements return all six GPU
and both Worker counters to zero. Worker scenarios pass 405 assertions.

The expanded unmodified CTS selection passes 474 cases and skips the same 36
Float16Array-polyfill cases per Session: 1,422 passes and 108 skips in total. Queue
`writeBuffer` adds six passing cases per Session. All 1,328 files in the extracted CTS
input match the pinned source archive byte-for-byte. The
[machine receipt](../../packages/flax_webgpu/validation/standard-input-semantics-macos.json)
records inputs and exact results; the frozen app, raw results and independent verdict
are in the external evidence directory above. The CTS runtime reports version `unknown`;
the verified source pin owns its identity, not that runtime string.

The first temporary host failed before JS startup because an ad hoc signature cannot
initialize Data Protection Keychain. The successful host uses the already configured
development team through `FLAX_MACOS_TEAM`, with the normal permission and storage
implementation. No permission bypass or storage fallback was added.

The signed-integer conversion shares the existing scalar check instead of parsing type
names on every draw. A separate Node cost diagnostic checks that choice and
boundary/error equivalence; it is not a Flax FPS measurement.

## Remaining scope

Further feasible work includes copy-buffer overload selection and single-conversion
default buffer ranges in other buffer methods, plus broader bounded WebIDL/CTS checks.
Those are not fixed by this slice. `compilationHints` remains accepted without backend
optimization; the standard does not require a performance effect from that hint.

Compatibility-mode adapters need a separately validated profile. Video-backed
`GPUExternalTexture`/`importExternalTexture`, XR, Worker graphics transfer and HDR/P3
presentation remain outside this task. Available device features and limits still come
from Dawn and the hardware. No FPS improvement, full CTS certification or GC-tail fix is
claimed.
