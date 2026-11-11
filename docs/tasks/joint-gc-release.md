# Task: Measure and reduce joint-GC pauses

Status: accepted; local main integration is authorized. Independent acceptance is
tracked in the external evidence.

## Goal and scope

Measure current macOS arm64 Release/AOT joint collection, reduce evidenced pause costs,
and preserve cross-heap reachability, automatic cycle collection and Session/Worker
retirement. Local main integration covers the retained double-pass optimization and its
documentation. Remote push and publication remain outside scope.

## Acceptance criteria

- Correlate long Worker messages and real decoder/UI work with native GC phases.
- Verify the changed path and compare fresh alternating Release processes with identical
  inputs, complete observation windows and memory measurements.
- Pass the runtime GC contract and affected Worker/host/Canvas/WebGPU checks on the
  delivered sources and matching maintained engines.
- Independently review all uncommitted and new files, including the maintained patch and
  nested Dart sources; preserve all initial changes.

## Approach and implementation

Only the incremental-completion pass of collect-all defers exact Flax tracing. It
conservatively visits bridge handles and drains Dart marking before weak processing. The
immediately following fresh pass performs the original exact joint trace. A call-local
flag travels through the existing GC call path; there is no persistent debt, new task,
application GC obligation or public configuration. Natural single-pass GC, background
fallback requests, active JS protection, V8 pressure/accounting and the existing
external-memory window retain their paths.

The maintained change is in Flutter's `flax/patches/dart.patch`, applied to
`runtime/vm/heap/{heap,pages,marker}.{cc,h}` and one VM regression in
`runtime/vm/dart_api_impl_test.cc`. ABI headers and generated bindings are unchanged.
See the [reference contract](../architecture/references.md).

## Results and validation

Evidence root (outside the repository):
`/Volumes/MAC_HOME/CodexHome/review-evidence/flax-joint-gc-release-20261101`.

The fixed initial bases are Flax `fc28581`, Flutter `c4a1dad` and Dart `416e33b`. The
`flax-initial`, `flutter-initial` and `dart-initial` packages and their receipts
preserve complete tracked/nonignored untracked sources. The three existing Flutter
`.orig` files and all initial Dart changes remain preserved. Original canonical engine
builds were not replaced; candidate outputs use separate names.

### Synchronized Release diagnosis

`phase-summary-v3.json` indexes complete raw native traces. Worker message 196 has a
42.336 ms round trip overlapping a 38.378 ms requested joint collection: 14.588 ms to
finish incremental marking, then a 23.736 ms fresh pass. Two of 14 Worker and three of
95 Three.js collect-all calls take this path. These runs observe no non-owner fallback;
origin indexing and repeated FlaxMark drains are small. Safepoint acquisition maxima are
0.093/0.287 ms.

A real Draco cold decode takes 40.914 ms and overlaps 19.109 ms of requested collection.
A 20.361 ms Three.js frame interval overlaps a natural old-space collection of 13.224
ms, including 12.725 ms in V8. This ordinary single-pass pause is outside the selected
optimization.

`candidate-causal-summary.json` confirms all four observed candidate double-pass
collections omit first-pass V8 and retain second-pass V8. Worker double-pass collections
take 33.095/28.278 ms in that diagnostic. These are probe timings, not performance
acceptance. All temporary probes are removed from delivered sources and binaries;
matching AOT tools rebuild applications after VM changes.

### Uninstrumented matched comparison

`final-matrix.json` retains 12 fresh processes: Worker ABBAABBA, WebGPU ABBA. Each
Worker process uses the unchanged 200-transfer workload, 30 ms tail and full nominal 500
ms observation. Ranges below are per-process values, four processes per variant; they
are not pooled percentiles or latency bounds.

| Worker metric                        |       Baseline |       Candidate |
| ------------------------------------ | -------------: | --------------: |
| Maximum transfer round trip, ms      |  42.459-52.158 |   31.771-34.826 |
| Maximum 5 ms main-timer interval, ms |  38.993-47.512 |   28.418-35.707 |
| Transfer P99, ms                     |   0.436-43.184 |   27.055-32.211 |
| Transfers plus 30 ms tail, ms        | 92.048-146.269 | 111.129-131.727 |
| Peak physical footprint, MiB         |  382.14-388.06 |   384.23-387.06 |

P99 and total duration do not improve consistently. Each Three.js process runs 12
Sessions and 1440 frames, plus the initial retirement check. All 52 retirement checks
across four processes return all six GPU and both Worker counters to zero.
Baseline/candidate total times are 78.09-78.35/78.19-83.90 seconds. Decoder full-window
maximum timer gaps are 35.15-38.28/38.66-41.55 ms; no general decoder/UI speedup is
claimed.

Three.js peak physical footprint increases from 386.67-403.42 to 407.66-415.58 MiB.
Final post-close RSS is 424.86-434.12/427.94-433.73 MiB. RSS and physical footprint are
different metrics. Conservative first-pass marked bytes and GC duration feed the VM
growth controller; the immediate fresh pass recomputes usage, while timing history can
still affect policy. This is a possible retention mechanism, not an attribution of the
measured GPU difference. Keep this measured cost visible. These samples prove neither a
memory plateau nor absence of leaks. No forced GC was added to applications, and the
original one-second retirement wait remains.

`final-app-inputs.json` verifies byte-identical JS/Wasm/model inputs and matching symbol
stripping/signing. App inventories are checked before/after the matrix. Full symbol
material stays in build inputs/link outputs. Build arguments match apart from
`engine_version` archive-link metadata; see the configuration receipt.

### Correctness on the probe-free version

`final-correctness-summary.json` and raw logs record VM 10/10 (one new deterministic
regression plus nine upstream collect-all cases), runtime 59/59, Worker 23/23, host
22/22, Core Canvas 4/4 and Canvas/WPT 395/395. These categories are reported separately.
Release processes also pass the five existing Worker API checks and real
Draco/Meshopt/KTX/rendering cases. Documentation checks pass.

The runtime gate uses `tool/check_runtime.dart` directly with explicit package
configuration and candidate engine aliases, running the same FFI reproduction and 59
tests as `check:runtime`. Scoped UI checks reuse the maintained isolated runner so
module assets are prepared. Preparatory launcher/asset failures remain in raw evidence
and are excluded from passing results.

## Handoff

The independent final verdict belongs in the evidence root's
`independent-final-review.json`; snapshot receipts identify the exact reviewed working
trees. Source and artifact verification must still match after acceptance.

The maintained patch and existing-checkout upgrade are committed locally on Flutter's
`flax/main` as `439033d726d47670b7228864298cce3e9ddbd4c9`. The
[CI engine pin](../../.github/workflows/packages.yml) selects this commit. It has not
been pushed, so remote CI cannot fetch it yet. Flax main integration is authorized
locally; remote push and publication remain outside scope.

Ordinary single-pass stalls remain. Mobile platforms and extreme low-memory stress are
untested here. This change reduces a measured double-pass cost and Worker outliers; it
does not establish stable FPS, a hard tail bound, universal throughput improvement or a
memory-leak fix.
