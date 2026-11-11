# Task: Measure and reduce ordinary joint-GC pauses

Status: experiment rejected; original sources restored. Independent acceptance is
tracked in the external evidence.

## Goal and scope

Reduce the remaining ordinary single-pass joint-GC pause in the macOS arm64 Release
application. Keep an optimization only when matched measurements show a useful net
benefit. The preceding [double-pass optimization](joint-gc-release.md) is the baseline.
Preserve every inherited change. This experiment retains no product change. Local main
integration is authorized separately for the accepted predecessor; remote push and
publication remain outside scope.

## Acceptance criteria

- Establish the expensive single-pass phases and their real workload triggers before
  changing collection behavior.
- Preserve exact cross-heap reachability, rootless-cycle reclamation, active JS
  protection, ordinary memory accounting and Session/Worker retirement.
- Compare matching Release applications in alternating fresh processes with the complete
  observation window, pause, throughput and memory measurements.
- Retain a supported change only after a useful measured benefit; restore this
  experiment's source changes if benefits are absent or regressions outweigh them.
- Run proportional runtime and affected application checks and obtain independent review
  of all delivered uncommitted and new files.

## Approach

1. Freeze complete initial Flax, Flutter and nested Dart sources and inspect the
   existing segmented trace, allocation triggers and supported V8 collection APIs.
2. Select one falsifiable hypothesis and the smallest safe experiment. Read every caller
   and relevant regression before editing; do not add configuration or weaken exact
   collection to obtain a lower timing number.
3. Build a separate candidate engine and compare against the preceding candidate with
   identical inputs. Keep diagnostic timing separate from performance results.
4. Retain or restore the experiment according to the measured outcome, then run the
   required correctness and affected application checks.
5. Capture final complete sources and ignored artifacts, obtain independent acceptance,
   and verify the same delivered version after review.

## Results and validation

Evidence: `/Volumes/MAC_HOME/CodexHome/review-evidence/flax-single-pass-gc-20261101`.
Initial packages use fixed Flax `fc28581`, Flutter `c4a1dad` and Dart `416e33b` bases.
Their full source digests exactly match the preceding accepted final packages:

- Flax: `141ae7253762a72589241e6fd0780486ab3707264ec68be81ac83b1a66f0d457`.
- Flutter: `1a514feda1b9b0b80e601d4bfe978cf4237b78450a2c82c448e1efa5858e4705`.
- Dart: `a1f9272240988e96e550cb262069ef42c17b2fe090e9c536d36ea3bd2786fc85`.

### Diagnosis and selected experiment

The retained Release trace contains 138 full V8 collection phases: 74 execute one major
and 64 execute two. Their median durations are 8.042 and 15.721 ms. The additional
majors total 522.903 ms; 32 release no additional JS used bytes. V8's critical-pressure
policy includes remaining external memory in its potential garbage estimate. This
explains the retries, but JS used bytes alone do not prove that CppHeap or external
memory has no remaining work. The representative natural 12.725 ms V8 pause contains
only one major, so removing retries would not solve it.

The exact V8 source revision is `e959d47215186f24e182a0503a52374c96569722`. Existing
production APIs provide no cheaper synchronous substitute with the required joint fixed
point. Moderate pressure only starts incremental marking; testing APIs and fabricated
allocation failures are unsuitable substitutes. Changing the requested CppHeap sweeping
mode is ineffective because attachment overrides it. Concurrent marking would require a
different cross-heap protocol. No SDK, accounting or GC-policy change was made.

Two temporary Release allocation profiles include objects collected by minor and major
GC, without forcing a GC. Each process completes three GPU Sessions and four successful
retirement checks. They estimate about 2226 MiB of cumulative JS allocation per process,
including about 1271-1275 MiB under pixel-readback helpers. Those helpers and all
application inputs remain unchanged. Actual scheduled-frame allocation is about
17.3-17.5 MiB. Sampling excludes native, BackingStore, CppHeap and GPU storage; these
figures do not describe resident memory or GC survival.

The candidate removes one redundant `Uint8Array` around the borrowed ArrayBuffer passed
by `DescriptorArena.struct` to FFI `view`. The FFI byte conversion already creates its
own private view, so the candidate reduces two wrappers to one while preserving the
buffer, extent and Arena lifetime. No metadata cache was added; earlier rejected
descriptor-cache experiments were not repeated. Existing typechecks and all six
conversion tests pass for the candidate.

### Matched Release results and rejection

Four fresh processes use baseline, candidate, candidate, baseline order. Both variants
use the identical accepted production engine, workload, fixtures and preallocated
recording of the existing rAF timestamps. Each process completes 12 Sessions, 1440 GPU
frames and 13 retirement checks; all GPU and Worker counters return to zero. No
sampling, native probes, concurrent build or test runs in this matrix. Decoder
observations retain their full work-plus-30-ms windows.

| Per-process metric                  | Baseline, runs 1 / 4 | Candidate, runs 2 / 3 |
| ----------------------------------- | -------------------: | --------------------: |
| Maximum frame interval, ms          |      23.799 / 19.040 |       20.713 / 21.843 |
| Maximum decoder full-window gap, ms |      35.996 / 35.021 |       37.204 / 49.673 |
| Total duration, s                   |      85.634 / 77.864 |       84.800 / 77.897 |
| Peak physical footprint, MiB        |      381.25 / 405.78 |       390.30 / 395.47 |
| Final post-close RSS, MiB           |      395.98 / 441.63 |       439.19 / 418.45 |

The first neighboring pair improves maximum frame interval; the reversed pair worsens
it. Decoder observation maxima are higher in both candidate processes, and total
duration shows substantial temporal drift. These results establish no repeatable pause
improvement and do not attribute a GC-specific regression. The one-line candidate was
therefore restored byte-for-byte, along with every temporary sampling probe. The
previous accepted double-pass optimization remains.

The independent binary comparison resolves nine inventory differences: native and Dart
AOT payloads match after excluding only code signatures and UUID metadata. The rebuilt
WebGPU module and its module manifest are the intended differences. Display state and
full source/artifact guards are recorded in the evidence.

### Restored version and evidence

`experiment-restoration-v1/restoration-receipt.json` records exact initial hashes for
the restored TypeScript and native files, regenerated baseline JS output, passing
typechecks and six tests, unchanged repository HEADs/indices and preserved inherited
sources. The restored baseline passes all 59 runtime contracts through the maintained
`tool/check_runtime.dart` with the matching engine aliases, the same runtime/FFI gate
used by `check:runtime`. Final independent checks and verdict are tracked in the
external acceptance receipts. No new optimization is retained by this task.

## Handoff

Ordinary single-pass pauses remain. A future V8 SDK experiment would need an explicit
production collection contract and separate artifact/correctness acceptance; it is not
part of this rejected wrapper experiment. Mobile and extreme low-memory behavior were
not measured. Final independent acceptance and snapshot receipts belong in the external
evidence directory.
