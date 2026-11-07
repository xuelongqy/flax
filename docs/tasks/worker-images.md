# Task: Dedicated Worker still images

Status: implemented and functionally validated; final delivery status is recorded in the
external acceptance receipt.

## Goal and scope

Complete non-HTML still-image import/export in pure Core Dedicated Workers and selected
WebGPU Workers. Reuse CPU codecs, shared image ownership, native structured clone, and
authenticated canvas transfers. No Worker DOM, Image/HTMLImageElement, Canvas 2D, video,
HDR/P3/Float16 expansion, dependencies, or generic framework.

## Acceptance criteria

- C1: Real Core Workers decode Blob, transform ImageData/ImageBitmap, and preserve root
  image behavior through CPU codec operations 0..2 in `Isolate.run`.
- C2: ImageData sub-serialization preserves data/view/buffer aliases. ImageBitmap
  clone/transfer works both directions and nested, including mixed canvas/buffer
  transfers, duplicates, invalid/closed objects, getters, failed and dropped messages.
- C3: Worker WebGPU uploads actual pixels; canvas PNG/JPEG/WebP/fallback export and
  bitmap transfer cover reset, alpha, texture expiry, and root receivers.
- C4: Close, termination, GC, nested/session shutdown, and late codec settlements
  release ownership without application teardown; receivers survive their senders.
- C5: Worker types exclude HTML globals; generated outputs, focused tests, docs,
  maintained runtime, and real GPU acceptance cover the delivered version.

## Approach

Install the image foundation independently of root canvas/HTML adapters. Worker codecs
use CPU operations 0..2 through `Isolate.run`; renderer resources remain lazy and local.
ImageData keeps its actual ordinary-buffer view in native sub-serialization, preserving
graph aliases and offsets. ImageBitmap keeps private pixel contents in an ordinary,
detachable buffer. One native transfer list combines bitmap buffers, ordinary buffers,
and authenticated canvas tokens. Captured private-state validation runs before native
detach, including transfer-only entries; fallible serialization cannot consume a sender.

Image-only hosts request checkpoint sweeps while resources are live. Worker and session
close retire images, and codec settlement checks closing state both before enqueue and
inside delivery. No native ABI change, UI handle transfer, or JS-finalizer dependency is
required. See [Dedicated Workers](../architecture/dedicated-workers.md),
[Canvas](../architecture/canvas.md), and [WebGPU](../architecture/webgpu.md).

## Results and validation

Core foundation, bidirectional/nested image clone and transfer, lifecycle handling,
WebGPU pixel fixtures, generated host bundles, public declarations, and package docs are
implemented. ImageData rejects shared backing buffers and exposes an ordinary
`ArrayBuffer` for transfer. Canvas exports return a full `Blob`; WebGPU provider types
use the same runtime declaration graph as the image encoder. Worker positive Blob and
buffer-transfer fixtures and negative HTML-global fixtures remain enabled. Inferred
resize rounds up: a 4-by-3 image resized to height 1 has width 2.

The frozen candidate passed 201 Node tests (Core 151, Canvas 35, WebGPU 15), all 11
TypeScript projects, host/public declaration reproducibility, scoped Dart analysis and
formatting, and native freshness. The matched maintained engine passed all 29 Worker
tests and 59 runtime/GC tests. These include CPU codecs/transforms, nested graph
ownership, actual image-only GC checkpoints, late codec/unopened-packet shutdown, and
session close without application teardown.

Root compatibility passed through the existing `tool/ui_test.dart` entry: host 22, Core
Canvas 4, and Canvas font/image 2. The initial direct-file invocation omitted the
suite's prepared module assets and failed the host/Canvas checks; its failed receipt is
retained in `checks-task-1/receipt.json`. The corrected invocation and before/after
source, native, and fixture guards passed in `checks-task-1-ui-recovery/receipt.json`.
Only those failed invocations are superseded; no product workaround was added.

A fresh Release build passed in `build-task-1/execution-receipt.json`. Coordinator and
independent reviewer each executed the signed application for three cycles, recorded in
`gpu-signed-task-1/execution-receipt.json` and
`reviewer-gpu-task-1/execution-receipt.json`. Every cycle passed actual pixel snapshots,
all 17 still-image cases with 41 image assertions, PNG/JPEG/WebP export, alpha and MIME
fallback, reset/texture expiry, mixed transfer ownership, and root reception. All ten
GPU retirement counters and both Worker counters returned to zero. Root bitmaprenderer
also passed with and without the optional Canvas provider. Bounded CTS results were 567
passes and 36 skips per cycle, with no failures.

Independent candidate inspection and application reproduction found no supported
blocking product-code defect; the remaining candidate finding was this outdated task
record. The final package comparison must establish that its correction changes no
executable input. Full-tree snapshots, separately retained native/app/fixture artifacts,
and their before/after guards cover the actual uncommitted delivery, including new
files.

## Evidence and limits

Evidence is retained outside the repository under `worker-images-20261103-e6b8a2` in the
workspace review-evidence directory. The immutable initial package predates this task;
fixed baseline is `d954085ff34814cab21d8991b6b590bec9e182eb`. The functional candidate
is `task-1`, with package digest
`682ac4aa27d21cd418b79f9be51565f414fa8734f110f7f591787d617d25ea4c`.
`final-delivery-receipt.json` records the final package, retained capture digest,
independent whole-outcome verdict, and final integrity checks. Final acceptance requires
that verdict to be PASS; the earlier candidate checkpoint is not final acceptance.
Inherited changes remain preserved. No staging, commit, push, merge, or rebase is part
of this task.

Validation covers the matched macOS arm64 engine, not Android/iOS, full CTS, or complete
browser conformance. GPU-device GC instrumentation is unsupported and is not counted as
a passing check; Core image GC and explicit GPU retirement were exercised separately.
Explicit GPU snapshot/export may synchronously wait for readback; ordinary presentation
remains native. Worker HTML/DOM, Worker Canvas 2D, video/VideoFrame, and HDR/P3/Float16
expansion remain outside this still-image scope.
