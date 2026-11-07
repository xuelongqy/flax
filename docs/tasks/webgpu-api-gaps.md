# Task: WebGPU transient usage and canvas error semantics

Status: implementation and independent alpha-1 code/GPU acceptance passed;
final-delivery gate tracked externally (see Handoff).

## Goal and scope

Expose the already-declared transient attachment usage in both runtimes, and align
canvas unsupported-format errors and lost-device textures with the pinned WebGPU
algorithms. Preserve existing canvas usage, snapshots, fences and presentation. External
video/mpv, Worker image services, HDR/P3/rgba16float support, XR and broad conformance
are outside this task.

## Acceptance criteria

- Frozen `GPUTextureUsage.TRANSIENT_ATTACHMENT` equals 32 in main and Worker. Real Dawn
  textures accept render/transient usage and reject invalid usage, view, load, store and
  resolve-target combinations without exposing private features.
- Canvas format and view-format feature checks precede unsupported-format and
  transient-usage `TypeError`s. Rejected content checks retain configuration and current
  texture; existing macOS profile restrictions remain in place.
- A configured lost device returns real invalid textures with complete descriptor
  metadata, stable identity until expiry and normal destruction. Resize, same-size
  assignment, reconfigure, unconfigure, transfer and checkpoints expire them.
- Existing exact COPY_DST/storage, main/Worker rendering, pixel snapshots and native
  resource cleanup remain valid, without per-frame CPU readback.

## Approach

Use the shared JS runtime's frozen constant group. The pinned Dawn transient feature is
an adapter optimization hint; usage is allowed without enabling that feature. Retain the
native feature setup and generated inputs unchanged.

Apply content-timeline canvas checks before changing configuration. Keep the narrower
macOS profile's `NotSupportedError` restrictions after normative checks. On loss,
release surface storage while retaining the current texture object. Later acquisition
uses the existing captured native texture-creation method and full canvas descriptor;
all expiry paths destroy the cached texture, including error textures outside the
surface pool. Resize retires native shared access before destroying the JS-cached
texture. Reuse the existing self-contained main/Worker canvas fixture, and require all
three new case names in both per-cycle acceptance receipts.

The accepted alpha repair (R1) makes lost opaque snapshots return `[0, 0, 0, 255]`;
premultiplied and unconfigured fallbacks remain `[0, 0, 0, 0]`. The existing main pixel
fixture covers both alpha modes, transfer expiry and live-device recovery. Live snapshot
readback is unchanged, with no per-frame readback added. The adapter fixture repair (R2)
requests a fresh adapter for the loss case, preserving the outer adapter for the
separate BGRA storage device in both runtimes.

## Results and validation

These results apply to immutable source package `implementer-fix-alpha-1`, digest
`a285a83bbf2134477c1f77e9aa5ddf244f2eab314c1093d8b9a5042a5904eaf0`. Independent code and
functional acceptance passed C1-C5, closing R1 and R2 with no supported open findings.

Guarded checks passed: 15 WebGPU tests, three TypeScript projects, 59 runtime/GC tests,
fixture syntax, native freshness and Dart formatting. The guarded macOS Release build
also passed.

The coordinator and independent reviewer each completed real three-cycle main/Worker GPU
acceptance. Each cycle passed 191 main and 155 Worker canvas assertions across all seven
required cases and rendered 120 frames. Each bounded CTS cycle reported 603 cases: 567
passes, 36 explicit Float16Array-polyfill skips and zero failures. The skipped polyfill
is not a native `BufferSource`. All four independent retirement records ended with all
ten native counters and both Worker counters at zero; session/resource cleanup was
exercised with active resources. Source, native and application artifact guards passed
around execution.

Signing was confined to a disposable Release app using the existing development
identity, profile and entitlements for secure-storage readiness. Product and security
configuration were unchanged.

Tested loss uses explicit `GPUDevice.destroy()`. Unexpected hardware-loss injection,
instrumented forced-device-GC, full CTS and other platforms remain outside verification;
the scope exclusions above remain in effect.

## Evidence

Fixed BASE/HEAD: `d954085ff34814cab21d8991b6b590bec9e182eb`. External evidence root:
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-api-gaps-20261103-a7f3c9`. The
following paths are relative to this root.

The immutable initial package is `initial`, with receipt `initial.receipt.json` and
package digest `0c8bf21b0fa2fcadf59c5d314277e2b9ceba79128d35bc4a2b2a197ac79020cf`. Task
deltas must be attributed against its raw files, including inherited untracked files,
rather than a HEAD-only diff.

- Source capture: `implementer-fix-alpha-1.receipt.json`; implementation details:
  `implementation-report.md` and `implementer-fix-alpha-1-handoff.json`.
- Static/runtime checks: `implementer-fix-alpha-1-safe-checks.json`.
- Release build: `build-implementer-fix-alpha-1/execution-receipt.json`.
- Coordinator GPU acceptance:
  `gpu-signed-implementer-fix-alpha-1/execution-receipt.json`.
- Independent code/GPU acceptance:
  `reviewer-gpu-alpha-1-20261103T064002Z-63154/alpha-1-stage-verdict.json` and
  `alpha-1-stage-verdict.md`, with `execution-receipt.json`, `output-inventory.json` and
  `alpha-1-closeout-guards.json` in that same directory. The settled stage supersedes
  the earlier interim review status.

`gpuweb-pinned.json` maps deployment revision `22507c95ccb9e705eddc7cab8f28aa46b134f5fe`
to source `cd910cf650d05481b60bad2b44476caff974962f`. Retained `gpuweb-pinned.bs`
contains format feature validation near line 5485, configure near 15039, current texture
identity near 15146, snapshot alpha near 15190 and resize near 15500.
`dawn-pinned-transient.txt` records the usage rules for Dawn
`5fbd545292cb7a4a9a275e322abec6007ffe2ae8`. Pins are unchanged.

## Handoff

The documentation closeout changes only this task record; executable source stays at the
accepted alpha-1 version. Final delivery is pending at this closeout. The coordinator
captures the full `final-1` package, runs guarded proportional documentation checks and
obtains independent review of the whole outcome.

The authoritative final-delivery gate is external: `final-1.receipt.json` together with
`reviewer-final-1/review-state.json` must identify the same full package, include this
documentation and record passing required checks and independent whole-outcome PASS.
Until matching records exist, the gate remains pending. Consult those records for the
subsequent final verdict; no final package digest or verdict is embedded in this source.
