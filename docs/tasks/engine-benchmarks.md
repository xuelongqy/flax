# Task: Independent engine benchmarks

Status: implemented; full local sampling complete, with environment limitations

## Goal and scope

Compare prepared Hermes and V8 assets through the same isolated Dart AOT host. Separate
JS execution, compilation plus execution, Flax bridge calls, signals, descriptors,
runtime lifecycle, process RSS, and native library size. Keep Flutter frame measurements
separate; do not introduce a performance gate.

## Acceptance criteria

All scenarios validate deterministic results on both engines. Engine-free tests verify
scheduling, statistics, worker failures and report construction. A full local run
retains raw samples, warmup, metadata, failures, and an offline HTML report. CI runs
smoke only, after preparing both engines.

## Approach

See the [benchmark methodology](../../benchmarks/engines/README.md). The existing
package-copy helper and native asset hooks prepare an independent consumer. Esbuild
bundles the selected current TypeScript sources directly. Per-engine performance
branches were removed from the coexistence fixture; no public runtime API or default
engine changes.

## Results and validation

- Eight engine-free tests passed, including asymmetric calibration, scheduling,
  process-level statistics, matched-pair confidence intervals, invalid output, timeout
  handling, and partial-run accounting. Scoped analysis and formatting passed.
- `dart run tool/check_engines.dart` passed coexistence, foreign-reference rejection,
  reentry, survivor execution, and repeated creation/destruction checks.
- Final `dart run melos run bench:engines:smoke`: 64/64 validated process samples, zero
  failures. The single-engine V8 Promise smoke also passed. V8 machine-code evidence was
  collected in separate proof processes.
- Full run: **1,760/1,760 process samples**, 88 case/size combinations, ten processes
  per engine and combination, **2,832.048 seconds (47.2 minutes)**, zero failures. All
  1,720 timing samples retain 20 measured batches and 15–50 warmup batches; 40
  additional samples measure dedicated one/four-runtime RSS. Shared batch sizes, pair
  counts, validation flags, and completeness were checked against the raw data.
- Three processes failed the warmup stability heuristic and remain in the report: V8
  `source/large` repetition 3, V8 `number.float/medium` repetition 4, and Hermes
  `bridge.dart-js-bytes/medium` repetition 5. Repetition indices are zero-based.
- An initial full attempt was interrupted after observing roughly 2.2-second Hermes
  batches versus 19-ms V8 batches for large source evaluation. Calibration now limits
  the slower engine to a 250-ms target per batch while retaining identical work and all
  ten independent repeats. The replacement full run above completed successfully.
- The initial full JS build and workspace analysis encountered unrelated, pre-existing
  dependency/UI errors. Both passed when rechecked after sampling; those unrelated files
  were not repaired by this task. The benchmark bundles its required current TypeScript
  sources directly through esbuild rather than requiring a whole-workspace JS build.
  Final `dart run melos run check` passed, including generator/JS/benchmark tests,
  analysis, formatting, documentation checks, and engine-free CMake configuration.
- Documentation links and Markdown lint passed. The report template and generated report
  JavaScript passed syntax checks. Browser rendering was not verified: the local HTTP
  preview timed out through the browser environment, and direct file navigation was
  rejected by browser security policy. No bypass was attempted.
- Remote CI has not been executed. No commit, push or publication was performed.

Full evidence is ignored under `build/benchmarks/engines/full-20260909-bounded/`:
`results.json` contains raw measurements, calibration, manifests, hashes and statistics;
`report.html` contains the offline presentation. Final smoke evidence is under
`build/benchmarks/engines/smoke/`. The interrupted attempt remains under
`build/benchmarks/engines/full-20260909/` and is explicitly marked incomplete.

## Selected observations

These are process medians from this workload and asset snapshot, in milliseconds per
original work unit. The full report includes quartiles and paired intervals.

| Workload                        | Hermes first | V8 first | Hermes after warmup | V8 after warmup |
| ------------------------------- | -----------: | -------: | ------------------: | --------------: |
| Runtime creation                |        1.715 |    3.232 |               0.343 |           0.517 |
| Bundle evaluation               |        5.379 |    1.459 |               5.641 |           0.346 |
| Sort 10,000 elements            |        7.727 |    1.014 |               7.965 |           0.700 |
| 1,000 Dart-to-JS numeric calls  |        1.665 |    3.159 |               1.371 |           2.771 |
| 1,000 individual signal updates |        3.826 |    3.207 |               3.344 |           1.567 |

Median loaded process RSS was 25.44 / 24.88 MiB for one Hermes / V8 runtime, and 43.82 /
29.77 MiB for four. These include Dart and native memory, not just JS heaps. Libraries
were 4.67 / 49.84 MiB. There is no overall engine ranking.

## Limitations and handoff

The host was an Apple M2 Max running macOS 26.6.2. Other desktop, emulator and VM
activity was present (starting load averages 6.74 / 6.64 / 6.54), so the requested
exclusive idle-machine condition was **not established**. This is a complete local run,
not a controlled performance baseline or a macOS 15 certification.

Sampling used a fixed staged consumer and assets. Other workspace work changed the
Hermes patch and asset hash while the full run was in progress. Full-run Hermes SHA-256
was `369ae537a30939cdaa37f9992574cbf267e6c3922ef3b6fa1c81e85c07c98a22`; final smoke used
`7962b45ab227e9b4cf0b8014a2c2f088a38c73d5b21213f2ed9c2b30f5e72b1a`. V8 and the benchmark
bundle hashes were unchanged. The report's complete manifests identify the measured
snapshot; its performance numbers must not be attributed to later rebuilt assets without
a new full run.

Before adopting regression thresholds, repeat on a quiet fixed machine with a frozen
checkout and retained native assets. Inspect the offline report in a normal browser and
run the newly added CI job when committing this work is authorized. Flutter frame
measurements remain a separate end-to-end activity.
