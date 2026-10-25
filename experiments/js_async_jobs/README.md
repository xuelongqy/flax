# Shared asynchronous JS job entry experiment

This is an isolated macOS arm64 V8 experiment. It reuses the maintained Flutter
debug and release engines and the earlier `js_slicing` probe. It does not change
generated bindings, public APIs, the production engine, or the SDK.

The result is partial: a native asynchronous entry fixes the earlier Dart Timer
starvation and lets independent Flutter animation and scrolling advance during
long JS computation. It does **not** make arbitrary synchronous Flutter callbacks
asynchronous, and a shared job queue alone does not coordinate joint GC safely
and efficiently enough for production.

## Execution path

1. Dart submits a synchronous action to one shared FIFO and immediately receives a
   Future. A native run-loop task enters the owning Dart isolate later, after the
   original Dart Timer/message callback has returned.
2. One V8 lock covers the entire action, including generated member lookup,
   argument construction, and invocation. This avoids losing a pending interrupt
   between the existing short JSI scopes.
3. A signal timer requests an interrupt about every 3 ms. All JS, Dart, Flutter
   callbacks, and GC still run on the original UI thread. The signal queue never
   executes JS. At an allowed interrupt, a nested native run loop services events
   and then returns to the original JS stack.
4. Additional JS jobs wait until the active job returns. Dart receives its result
   or error through the Future. A no-op Dart Timer wakes microtask delivery after
   the native block; the block itself is not Flutter's normal task wrapper.

For example, the experimental Dart caller uses:

```dart
final result = await jobs.submit(() => box + 2);
```

The existing generated `NumberBox` operator and the JS subclass keep their
synchronous implementations. The subclass still calls `super.operatorAdd(other)`
and reads its private field. This only works where the **outer caller can await**.
It is not a transparent replacement for every synchronous Dart-to-JS entry.

The native probe retains the original stack while pumping events. It is not a
detached continuation, a second JS execution thread, or a production scheduler.

## Measurements and assertions

Raw logs, JSON results, build logs, and the original dirty-file hashes are in
`.local/async-jobs/`. The loop is calibrated to about two seconds and then uses
the same iteration count and checksum for all timed cases within a process.
Measurements cover the actual JS action, separately from Future delivery.

Two initial complete release runs passed all 20 assertions each:

| Case | JS/action duration | Longest Flutter frame-start gap | Dart Timer during JS |
| --- | ---: | ---: | --- |
| Synchronous baseline | 1,978 / 1,996 ms | 1,984 / 1,999 ms | 0 ticks |
| Shared async entry plus slicing | 2,056 / 2,057 ms | 19.76 / 18.43 ms | 549 / 568 ticks |
| Long synchronous LayoutBuilder | 1,972 / 2,004 ms | 1,977 / 2,004 ms | Frame still waits |

The async sliced cases recorded 153 / 161 native frames and 90 / 89 distinct
scroll offsets from timed pointer events through Flutter's real gesture system.
Longest 2 ms heartbeat gaps were 9.10 / 6.51 ms. Native idle frame gaps were about
9 ms, so this proves progress, not unchanged frame pacing or a hard latency bound.
Merely wrapping a long JS call in an asynchronous entry, without slicing, still
blocks both frames and Timers for about two seconds.

The basic contracts also cover FIFO order, jobs submitted while paused, separate
runtime globals, JS inheritance, private fields, Dart-to-JS overrides, real Dart
super calls, exceptions/finally, and later job reuse. GC tests retain a real
Dart-callback-JS cycle solely through the paused JS stack under up to 120 MiB of
Dart allocation pressure. After removing the business root, both weak references
and bridge cell/callback counts return to zero **before runtime disposal**. A
separate Dart business root preserves the JS callback until that root is dropped.
The checks do not unregister the callback to manufacture reclamation.

These two runs preceded the no-op Timer wake added for native-block completion.
The final version passed the same 20 assertions in debug and release/AOT:

| Final basic run | Synchronous baseline | Async sliced duration | Longest frame gap | Longest Timer gap |
| --- | ---: | ---: | ---: | ---: |
| Debug | 1,978 ms | 6,640 ms | 113.74 ms | 34.72 ms |
| Release/AOT | 1,961 ms | 2,079 ms | 18.13 ms | 7.39 ms |

Release advanced 159 native frames, 565 Timer ticks, and 88 scroll offsets inside
the JS interval. Debug advanced 200 frames, 703 ticks, and 90 offsets, but its
6.64-second execution and 114 ms frame gap are substantial regressions. The checks
assert functional progress and correctness, not that these timings are acceptable.
Under GC pressure, the JS action took 21.42 seconds in debug and 3.47 seconds in
release; both eventually reclaimed both weak peers with zero cells/callbacks.
This experiment therefore does not establish bounded latency even for the basic
runtime. In particular, the native pump's requested 1 ms interval cannot preempt
a Dart/GC task that takes longer.

Final raw results are `debug-1792684611894051000.json` and
`release-1792684766676277000.json`; `summary.json` includes every successful run,
both fatal pilots, both generated-run timeouts, and source hashes.

## Real generated binding and failure evidence

`generated_app.dart` mounts the existing `proxy-operators` Flax fixture. It adds a
JS subclass of its generated `NumberBox` subclass, calls the operator from Dart,
and checks the result `19`, private state, `super`, exception propagation, and
eventual weak-reference reclamation. No generated file is modified.

Two early release pilots crashed with V8's
`Invoke in DisallowJavascriptExecutionScope` assertion. The first stack entered
JS from the existing Session checkpoint while another JS call was paused. The
second entered JS from an outer Dart `await` continuation during a later queued
checkpoint. These were real fatal reentries, not ordinary rejected JS exceptions.

The bounded experiment therefore queues the **whole** Session checkpoint and all
outer JS accesses, and rejects direct `evaluate` while paused. This is only a
probe guard; it is not comprehensive interception of every runtime operation.
`checkpoint.patch` is applied by the build helper and restored afterward. The
original dirty `async.dart` is preserved byte-for-byte. Merely deferring
`drainMicrotasks` is insufficient because the checkpoint calls JS earlier while
cleaning objects and delivering Futures.

The resulting debug run still hit the 90-second process limit. Its first generated
operator returned `19` and allowed 1,338 Timer ticks, but took **52,014 ms**, of which
49,876 ms accumulated inside event pumping. A two-second native stack sample
observed `JointHeap::Request -> Dart_FlaxCollect -> Dart marking` in 1,063 of 1,087
main-thread samples. That sample is diagnostic, not a full-run CPU percentage.

The maintained engine explains the retry: when `JointHeap::Collect` finds an active
JS context, it conservatively retains bridge peers and requests collection again.
The nested run loop can run that retry before the JS stack has returned, causing
another Dart collection and another retry. The experiment does not disable GC,
clear roots, or change collection flags to hide this. The debug run is **not** a
passing generated-proxy or reclamation acceptance.

The final release/AOT run also timed out at 90 seconds. All three generated
operator calls returned `19` and allowed Dart Timers to advance, taking 18,788,
15,480, and 3,663 ms. The first two accumulated 16,754 and 13,464 ms inside native
event pumping. After those six assertions, the application remained in the queued
Session `sweepObjects` checkpoint. The release sample found the same forced Dart
GC path in 1,073 of 1,081 main-thread samples. The generated exception, subsequent
call, pre-close reclamation, and close checks were not reached. No further runtime
patches were attempted after this confirmed the scheduler/GC assumption was wrong.

## Boundaries and next decision

- A synchronous LayoutBuilder needs its Widget before the current layout can
  finish. It cannot consume a Future without changing the layout contract. While
  another JS job is interrupted, reentering V8 is forbidden; the negative test
  checks an explicit rejection, not a successful JS-backed layout.
- Generated calls can pause when invoked through the outer asynchronous job.
  Existing synchronous Dart callers, arbitrary callbacks, and `await` continuations
  that enter JS still need a shared entry policy. The JS class syntax alone does
  not solve this scheduling boundary.
- Joint-GC requests must be coalesced and delayed until the active JS job exits;
  necessary Dart GC must retain suspended-stack peers in the meantime. That
  requires engine-level coordination and new acceptance, not a change to each
  generated class. It was not implemented in this experiment.
- The probe allows one queue, tests close only after it is idle, and rejects an
  active close. Cancellation, hot restart, arbitrary multi-Session UI reentry,
  Hermes, and mobile platforms are not certified.

Do not adopt this probe as a general UI nonblocking solution. Keep the successful
asynchronous-entry evidence, but evaluate the shared scheduler/GC boundary before
expanding the design. The synchronous layout dependency remains even if GC retry
coalescing is fixed.

## Reproduce

Run in this experiment worktree on macOS arm64. Use the existing V8 SDK and the
maintained Flutter local engines; do not rebuild them for this probe.

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/async-jobs"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
cmake -S experiments/js_async_jobs -B .local/async-jobs/native \
  -DSDK=/Volumes/MAC_HOME/Develop/Flutter/flax/.local/ci-ca7f98f/sdk-36954561632-verified/v8-macos-arm64 \
  -DDART_INCLUDE=/Volumes/MAC_HOME/Develop/Flutter/flutter/engine/src/flutter/third_party/dart/runtime/include \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_OSX_ARCHITECTURES=arm64
cmake --build .local/async-jobs/native -j4
dart run experiments/js_async_jobs/build.dart release
python3 experiments/js_async_jobs/run.py release 1
```

Use `debug` in both commands for debug. Use `build.dart release generated` for
the real generated fixture; the fixture needs the existing generated UI bundle
listed in `.local/startup-staging/ui-fixtures.json`. The build helper temporarily
applies the checkpoint patch, runs analysis with that patch, and restores both
source files and local probe entitlements in `finally`. Do not run builds against
the same embedded application concurrently. The generated entry deliberately
does not analyze against unpatched Core because the hook is experiment-only.

`FLAX_SLICE_SUITE=performance`, `language`, or `gc` selects a focused basic run;
the default runs all three. Generated fixture runs always run their own checks.
Each application process is bounded to 90 seconds. Preserve failed logs alongside
successful receipts; successful bare-runtime runs do not replace failed Session
acceptance.
