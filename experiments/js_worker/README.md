# Independent JS worker experiment

Status: macOS arm64 V8 feasibility experiment, not a Flax runtime migration.

## Scope

An isolated C++ thread owns a second V8 isolate. It reuses the V8 library already loaded
by the maintained Flutter engine; the pilot dyld log confirms one V8 library image. It
never calls Dart from that thread. Small JSON requests and object IDs are polled by Dart
on the UI thread. A worker can wait for a Dart response while Flutter continues
rendering. Production bindings, Session APIs, engine sources, and the joint collector
are unchanged.

The worktree is `feat/startup-staging-experiment`, based on Flax
`c3603d910b6e4257368f58c1d7207d2fa5a41f76`. Flutter is
`183508ece44ae312a7339bd2ede245e16cf485f3`. Existing startup-staging edits are preserved
byte-for-byte. Nothing is committed or pushed.

`app.dart` runs a real native Flutter animation and a 200-row `ListView`. Synthetic
pointer down/move/up events pass through Flutter's gesture handling; this is not a
`jumpTo` animation or a fake test clock. Every busy case executes the same JS loop for
2,000 ms. The loop computes locally without host calls. The five cases are:

1. Native animation/scrolling without JS work.
2. JS work on the native worker.
3. The same JS work on the existing UI-thread Flax runtime.
4. Worker computation plus a real `LayoutBuilder` synchronously waiting for it.
5. Worker computation plus a `LayoutBuilder` displaying a pending/previous result and
   asynchronously applying the latest constraints. Outdated replies are discarded.

## Measured results

Three fresh processes per build, six completed runs, 17 assertions per run. Negative
controls are expected failures of an architectural property, not successful support for
that property. An initial pilot failed because `package:matcher` expectations were
invoked outside a test runner. Those original-engine tests now run separately under the
existing Flutter test runner. The failed pilot is retained and excluded from these
measurements.

All gaps below are milliseconds. A gap is the wall-clock interval between native Flutter
frame callbacks, including the first delayed frame after the busy interval. It is not
raster duration or a hardware presentation fence. Heartbeat gaps, raster times,
scrolling positions, animation values, and individual frame times are saved in the raw
receipts.

| Case                                | Debug largest frame gap, range | Release largest frame gap, range | Release frames during 2 s |
| ----------------------------------- | -----------------------------: | -------------------------------: | ------------------------: |
| No JS work                          |                    52.64–62.27 |                       8.63–26.13 |                   238–240 |
| JS worker                           |                     9.96–12.79 |                        8.55–8.63 |                   240–241 |
| JS on UI thread                     |              2,010.24–2,013.72 |                2,002.12–2,004.52 |                         0 |
| Worker + synchronous LayoutBuilder  |              2,005.93–2,010.62 |                2,001.89–2,007.45 |                         1 |
| Worker + asynchronous layout result |                    14.19–16.53 |                        8.74–8.79 |                       240 |

The worker case records 92–96 distinct scrolling positions while JS is busy; the
UI-thread control records zero. Release frame-gap P95 for the worker is 8.43–8.46 ms.
Closing a busy worker cancels its evaluation and disposes its isolate in 1.21–5.01 ms
across the six runs.

These are exploratory samples on a 120 Hz desktop. Case order is fixed and the no-JS
case includes the first scrolling interaction, so its cold-start spikes must not be used
to claim the worker improves idle rendering. Other user workloads were running; this is
not an isolated performance lab. No timing threshold is asserted.

## Capability boundaries

| Capability                                                             | Observed behavior                                                                                                       | Migration implication                                                                                                                                                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pure JS classes, private fields, overrides, lexical `super`            | Works in the worker                                                                                                     | JS language semantics do not require the UI thread.                                                                                                                                                         |
| JS override calls a real Dart base method                              | Works with worker-to-UI requests while the Dart caller awaits asynchronously                                            | This fixture is a hand-written transport, not unchanged generated Flax classes or an object-identity migration.                                                                                             |
| Dart synchronously calls a JS override that calls Dart through `super` | The prototype detects UI-waits-for-JS / JS-waits-for-UI and explicitly rejects it; the worker remains usable afterwards | Current synchronous proxy dispatch cannot be replaced by this transport unchanged. The guard prevents a deadlock; it does not implement reentrant dispatch.                                                 |
| Synchronous LayoutBuilder                                              | UI waits behind the 2 s JS job and freezes                                                                              | Moving JS alone does not protect UI if Flutter waits for a result.                                                                                                                                          |
| Asynchronous layout result                                             | Flutter remains responsive; stale width 240 is discarded, width 440 is eventually applied                               | This changes semantics: the latest content arrives about 1.89–1.90 s after the constraint request. It is not a synchronous Widget return.                                                                   |
| Native Flutter animation and scrolling                                 | Continue during JS computation                                                                                          | JS-driven updates still wait for the busy JS thread. Expensive Dart host work can still block UI.                                                                                                           |
| Existing joint GC                                                      | Original engine contracts pass separately                                                                               | The worker isolate has no registered cross-heap collector. These passes do not certify worker GC.                                                                                                           |
| Naive strong-ID transport GC                                           | Both real Dart and JS peers remain alive after business roots are removed                                               | A strong Dart registry and JS callback registry retain the cycle. Explicitly removing both registry entries allows both weak references to clear. Automatic cross-thread collection is **not implemented**. |

The current engine requires the owning Flutter UI isolate/thread in
`JointHeap::Current`; `JointHeap::Collect` acquires the V8 isolate lock. It is unsafe to
remove that ownership check or invoke existing `NativeCallable.isolateLocal` callbacks
on the worker. A cross-thread collector would need separate design and validation,
including whether collection can make UI wait for busy JS. This probe does not move or
certify that collector.

The useful finding is precise: CPU-bound JS can be isolated from native Flutter frames,
but **transparent migration of synchronous UI callbacks and cross-heap GC has not been
demonstrated**. No full FlaxView, full-gallery worker migration, Hermes/iOS, Android,
multiple-session worker sharing, or unbounded-load guarantee is claimed.

## Baseline regressions and evidence

The existing debug V8 tests independently verify the unchanged production path:

- 3 engine contracts: background-isolate rejection, background Dart GC with a JS-rooted
  callback, and either business owner retaining private fields/callback identity until
  the rootless cycle is collected.
- 29 passing bridge-GC, proxy-operator, proxy-property, and TypeScript-generic tests.
- 16 module tests pass after recompiling their test kernel without the stale cache.

The first 45-case run had 39 successes and 6 module failures involving the missing SDK
entry `_flaxFixed#$90678fc01b77419e2c720006` for `Column`. Moving only this worktree's
test-kernel cache aside and recompiling resolves all 16 module tests, without source or
engine changes. Both attempts and the cache hash are retained. This establishes 45
distinct baseline cases passing across the original and clean module runs; it is not one
uninterrupted green 45-case run.

Evidence is in `.local/js-worker/`: `summary.json`, the six raw `debug-*.json` and
`release-*.json` receipts, build logs, `source-receipt.json`, `baseline.log`,
`engine-gc-results.json`, `binding-results.json`, `modules-clean-results.json`, and
`test-cache-retry.json`. Dart analysis and the native C++ build pass without warnings.

## Reproduce

Use the existing maintained debug/release engine builds. The SDK argument is the already
verified V8 SDK used to build those engines; do not fetch/rebuild it.

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/js-worker"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
cmake -S experiments/js_worker -B .local/js-worker/native \
  -DSDK=/Volumes/MAC_HOME/Develop/Flutter/flax/.local/ci-ca7f98f/sdk-36954561632-verified/v8-macos-arm64 \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_OSX_ARCHITECTURES=arm64
cmake --build .local/js-worker/native -j 4
dart run experiments/js_worker/build.dart debug
python3 experiments/js_worker/run.py debug 3
dart run experiments/js_worker/build.dart release
python3 experiments/js_worker/run.py release 3
```

Run from this worktree using its configured maintained Flutter/Dart SDK. The build
helper temporarily disables sandbox/library validation only for this local probe, then
restores the original entitlement files in `finally`. Do not run another build of this
example concurrently. The runner terminates only its own app on timeout and keeps logs
on the workspace volume. Completed application copies and compiler scratch can be
removed after saving their receipts.
