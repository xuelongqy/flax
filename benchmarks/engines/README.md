# Independent engine benchmarks

This suite compares Hermes and V8 through the public Flax runtime API on macOS arm64,
macOS 15 or newer. Both engines run the same JS source and input through the same Dart
AOT executable. The suite does not add runtime APIs, change the default engine, or set a
performance gate.

## Run

Install the repository's locked Dart and JS dependencies. Prepare engine assets
explicitly with `dart run melos run native:build` and
`dart run melos run native:build:v8`. Benchmark commands only validate and consume these
assets through the existing native asset hooks; they never build an engine.

```sh
dart run melos run bench:engines:test
dart run melos run bench:engines:smoke
dart run melos run bench:engines

# Select a case or engine; use a new output directory on subsequent runs.
dart run tool/benchmark_engines.dart --engine=v8 --case=array.sort --size=large --output=build/benchmarks/sort-v8
dart run tool/benchmark_engines.dart --help
```

The full default covers all cases and sizes, with ten independent processes for each
combination. The target is 30–60 minutes, depending on the machine. After 60 measurement
minutes no new sampling should start; an active worker may finish within its 120-second
timeout. Dependency resolution, JS bundling, AOT compilation, and the separate V8 JIT
proof run happen before this budget. The smoke profile runs every case with small
inputs, one process per engine, one warmup batch, and one measured batch. Smoke results
support correctness only.

Outputs are `results.json` and a self-contained `report.html` in
`build/benchmarks/engines/full` or `build/benchmarks/engines/smoke`. Existing reports
are not overwritten; select a new `--output` directory to repeat a run. Partial results
are saved after each pair. Failures and incomplete runs return a nonzero exit code.
`check:engines` separately verifies coexistence and reference safety.

## Cases and work units

- `lifecycle`: first engine creation and disposal, followed by repeated creation and
  disposal within the process. Creation and disposal are separate metrics.
- `source`: evaluate generated source containing 100 / 1,000 / 10,000 additions.
  `bundle`: evaluate one fixed bundle of the actual runtime exports and generated
  Text/Column bindings. Both include compilation and execution; repeated source
  evaluation may use engine caches. No compile-only measurement is claimed.
- `number.integer`, `number.float`, `array.traverse`, `array.map`, `array.sort`,
  `object.properties`, `collection.map-set`, `function.plain`, `function.closure`,
  `function.higher-order`, `allocation`: 100 / 1,000 / 10,000 elements. Inputs use
  `(index * 17 + 1729) % 997`; allocation retains at most 256 objects. Natural GC
  belongs to the timed workload. Map/Set are cleared outside each batch, then reused
  within it. Sorting copies its input within the timed operation.
- `string.transform`, `json.parse`, `json.stringify`: a fixed ASCII text field of 1 KiB
  / 64 KiB / 1 MiB. JSON wrapper bytes are additional and reproducible.
- `promise`: enqueue 100 / 1,000 / 10,000 reactions, then explicitly drain the microtask
  queue. Reports enqueue, checkpoint, and their sum. An untimed check between phases
  rejects premature execution; another verifies completion.
- `bridge.dart-js-number`, `bridge.dart-js-object`, `bridge.js-dart-number`,
  `bridge.js-dart-object`, `bridge.reentry`: 100 / 1,000 / 10,000 calls. Reentry is Dart
  → JS → Dart → JS within one synchronous stack. Object cases pass existing references
  and read a property; they do not serialize an object graph.
- `bridge.dart-js-string`, `bridge.js-dart-string`, `bridge.dart-js-bytes`,
  `bridge.js-dart-bytes`: one payload of 1 KiB / 64 KiB / 1 MiB per work unit.
  Dart-to-JS bytes include ArrayBuffer creation, JS identity call, and copying bytes
  back. JS-to-Dart bytes include copying and summing all bytes in Dart.
- `flax.signals`, `flax.batch`: 100 / 1,000 / 10,000 updates on an observed real Flax
  signal. The native host callback counts invalidations; expected counts distinguish
  individual updates from a single batch. `flax.descriptors` builds a generated Column
  with that many generated Text descriptors, without Flutter.
- `memory.one`, `memory.four`: dedicated fresh processes observing baseline, empty
  runtimes, loaded runtimes, and RSS after all runtimes are disposed. Bundle, lifecycle,
  and memory cases do not duplicate identical size settings.

Byte and string paths intentionally have different work from scalar calls. Compare
engines within a case, not unrelated cases by their absolute values. The suite does not
install browser, Node, or optional host polyfills. Flax cases measure the bundled
library and its actual dependencies, not engine built-ins.

## Timing and statistics

Each engine × case × size × repetition gets a fresh process. Two calibration rounds use
additional disposable processes to select a common batch size targeting 20 ms on the
faster engine. Both engines then perform identical work. Caps limit an individual batch
to 10,000 repetitions, one million elements, 100,000 Promise jobs, 64 MiB for text/byte
cases, and 100 lifecycle/bundle repetitions. A cap may prevent reaching the target;
pilot timings and chosen counts remain in JSON.

The first workload execution is always one original work unit. It is separate from
preloaded-function execution after warmup. For non-lifecycle cases, runtime creation and
harness setup are outside that workload measurement. Cold means a new process/runtime,
not an evicted OS filesystem cache. Pure JS batches enter through one Flax function
call; that small host boundary is included, not subtracted using a noisy empty-loop
estimate.

Warmup lasts at least 15 and at most 50 batches. The latest three five-batch window
medians must differ by no more than 5%. All 20 subsequent measured batches are retained
even if this criterion is not met. Such processes are explicitly unstable, not
steady-state observations. This heuristic does not prove that JIT compilation or GC has
ended. Verification happens outside timed regions; natural execution, allocation,
copying, and reference release required by an operation stay inside them. Verification
itself can affect later cache/GC state equally through the shared workload.

Scenarios are shuffled with seed 1729. Engine order alternates within successive pairs,
with no concurrent timing. Per-process medians are the statistical units; within-process
batches are not independent samples. Reports show their median and Q1–Q3. Ratios use
matching process pairs and are V8/Hermes. A 95% paired bootstrap interval (2,000
resamples, seed 1729) requires at least ten pairs. No p95 or combined score is inferred.
Unstable samples remain in aggregates and are counted next to them. Incomplete
comparisons should not establish a winner.

RSS is process resident memory, including Dart, shared libraries, native heaps, and
allocator retention. It is not JS heap size. Absolute and baseline-relative observation
points are reported, not a true peak. Native library bytes are reported separately from
memory. Flutter frame reports remain separate.

The common fixture prepares deterministic arrays, text and byte buffers outside timing.
That preparation can exercise built-ins and affect heap/cache state; “first” means the
first invocation of the measured workload, not the first-ever use of every underlying
built-in.

## Reproduction and validation

Metadata includes the dirty Git status, source/runner/bundle/lockfile hashes, actual
native library hashes, full asset manifests and pinned revisions, JIT configuration,
host executable hash, Dart/system/CPU/memory details, power state, and starting system
load. V8 must emit machine-code evidence in a separate proof process. Timed workers
remove loader overrides and `FLAX_VERIFY_*` variables; there is no JITless fallback.

Run on an otherwise idle machine with consistent power and thermal conditions. The tool
records conditions but cannot establish exclusive machine ownership. Keep raw reports
with the corresponding source revision, dirty inputs if any, and engine assets. A single
machine does not establish cross-device performance.

Engine-free unit tests cover deterministic scheduling, warmup stability, process-level
statistics, paired intervals, invalid output, worker timeout, partial-run accounting,
and offline report embedding. The existing macOS V8 CI job runs smoke after preparing
both assets and uploads the reports. Full performance runs remain explicit and impose no
regression threshold.
