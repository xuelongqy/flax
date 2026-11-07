# Task: Canvas configuration usage and snapshot isolation

Status: implementation and signed macOS validation passed. See the external final review
record below for the independent delivery disposition.

## Goal and scope

Accept valid canvas configurations without public `RENDER_ATTACHMENT` and isolate
returned nested configuration values. Keep existing macOS BGRA/RGBA, sRGB, alpha,
view-format and Worker boundaries. No new ABI, engine changes, P3/HDR support or changes
to historical validation receipts.

## Acceptance criteria

- Exact `COPY_DST` usage permits uploads and valid `STORAGE_BINDING` permits compute
  writes. BGRA storage requires its device feature. Ordinary render passes still fail
  without public render usage; invalid usage retains validation errors.
- Untouched and recycled textures clear safely, while uploads, compute output, alpha,
  synchronization, snapshots and main/Worker presentation retain their behavior.
- Original-input and returned-object mutations cannot affect stored configuration or
  other returns. Nested dictionaries/arrays are fresh, device identity is preserved, and
  unconfigured contexts return `null`.

## Approach

Use pinned Dawn `DawnTextureInternalUsageDescriptor` and
`DawnEncoderInternalUsageDescriptor` with privately enabled `DawnInternalUsages`. Only
host clear/snapshot encoders opt in. Public texture usage and ordinary command encoder
validation remain unchanged. Copy `toneMapping` when returning configuration, alongside
the outer dictionary and `viewFormats`.

`example/js/canvas-config.js` shares observable configuration and GPU validation cases
between main and Worker execution. Main additionally reads exact-only canvas snapshots,
checks uploaded/computed pixels and alpha, and checks cleared replacement publications
and untouched current textures. Worker acceptance adds visible COPY_DST upload, STORAGE
compute and subsequent unused-frame captures, sampled inside the canvas.

## Results and validation

The fixed branch is `exp/webgpu-dawn-macos`; BASE/HEAD is
`d954085ff34814cab21d8991b6b590bec9e182eb`. The immutable initial evidence package is
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-canvas-config-20261103-c93e21/initial`.
Its retained package digest is
`4cb07fc456212431dcac478b7b02aa3069fe39f73a739c28d4814d673787db02`; state fingerprint is
`45e733b40e8edd712f551b8ca3b34d08ff6de1547db93f72b048b80714a23c5b`. Task changes must be
compared with those initial bytes, including inherited untracked files, rather than a
commit-only diff.

The native producer passed and all 17 recorded producer inputs remained unchanged. The
converter suite passed 15 tests, three TypeScript projects passed, and the
matching-engine runtime script passed 59/59 (`runtime-direct.log` in the evidence root).
The independent reviewer reproduced native freshness, converter, TypeScript, fixture
syntax and Dart formatting checks (`reviewer-safe-checks-1.json`). The Melos wrapper
failed during dependency resolution; the successful direct command was:

```sh
FLUTTER_ENGINE="$PWD/.local/webgpu-worker-rendering-20261102/engine-layout" \
  /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/cache/dart-sdk/bin/dart \
  --packages=.dart_tool/package_config.json tool/check_runtime.dart
```

Fixture syntax, serialized Worker parsing, formatting, Dart analysis and the earlier
300-file Markdownlint run passed. Runtime tooling reported Flutter `3.47.10-0.0.pre-62`,
revision `439033d726`, Dart `3.13.7`; historical version claims were not changed.

The signed macOS arm64 Release application passed three cycles. The independent reviewer
then executed the same application for another three cycles, with fresh results and exit
code zero. Each cycle passed 112 main configuration assertions and 80 Worker
configuration assertions across RGBA/BGRA COPY_DST and storage cases. Main-thread pixel
checks covered full and partial writes, alpha, recycled publications and untouched
snapshots. Worker display checks covered uploads, compute and six unused frames, with
all 8,432 sampled interior pixels matching each expected image. Session retirement
returned the tracked resource and Worker counts to zero.

Each cycle's bounded CTS selection reported 567 passes and 36 skips, with no failures.
The skips concern the pinned CTS Float16Array polyfill, which is not a native
BufferSource. Existing sRGB-view, image and Three.js checks also passed. These runs do
not certify full CTS, other platforms, HDR/P3 or video textures. Partial-write pixel
assertions run on main; Worker tests cover partial-write submission, full-write
presentation and unused-frame clearing. Instrumented GPU-device collection was not
covered; the separate runtime/bridge GC suite passed.

The external evidence root is
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-canvas-config-20261103-c93e21`:

- `task-1.receipt.json` binds the tested source package to digest
  `dadd5c84af8db7d115a30a0783b8b11f4f20c20c7388e0f53dd901f5d01eb18c` and fingerprint
  `2d25fca983a0f874cfdb20d4ea0227d83fa04177a54fd901ed34d092406c9743`.
- `native-task-1.json` inventories immutable native payload copies and their live
  counterparts; `gpu-task-1.json` inventories the retained signed application, bundled
  JavaScript, staged Dart entry and coordinator outputs.
- `gpu-acceptance-1.json` summarizes the coordinator run.
  `reviewer-gpu-task-1/execution.json` and `acceptance-summary.json` record the
  independent run, result freshness, source/native/application guards and signature
  checks. Its `output-inventory.json` covers the independent result copies.
- `final-review.md` identifies the final source receipt and records the independent
  disposition outside the captured repository, avoiding self-referential digests. The
  final source differs from the tested package only in validation documentation, unless
  a later receipt explicitly records a repair.

## Delivery boundaries

The retained application under `gpu-task-1/flax_webgpu_example.app` is the immutable
test artifact; original task-local staging/build paths are provenance origins and may be
cleaned after acceptance. Retain the live native payload, engine/SDK builds, source,
capture receipts and independent results. Preserve inherited dirty changes. No commit,
staging, push, merge or publication was requested.
