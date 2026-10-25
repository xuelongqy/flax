# Same-thread JS interruption experiment

Status: **partial feasibility, not ready for production**. The minimal native app can
resume the original JS calculation after servicing native Flutter frames. It does not
establish transparent scheduling for all Flax calls. One complete release run passes 16
assertions; the next stops at the GC pause-coverage assertion. The generated-binding
pause gate fails in three attempts. Negative controls are documented below, not counted
as supported capabilities.

## Mechanism and scope

The probe captures the maintained runtime's current V8 isolate from a Dart host
callback. A dispatch timer requests an interrupt every 3 ms. The signal queue never runs
JS or Dart. All JS, Dart callbacks, Flutter frames and collection stay on the original
UI thread. There is no worker-owned JS runtime or cross-thread object transport.

At an interrupt, the probe keeps the original native/JS/Dart call stack in place, enters
a nested Core Foundation event loop for a nominal 1 ms, and then returns to the same JS
instruction stream. It permits this only when Flutter reports `SchedulerPhase.idle` and
no probe host callback is active. This is a **same-stack suspension experiment**, not a
detached continuation, a VM fiber implementation, or a generally safe scheduler. One
native task can exceed the nominal pump duration.

The V8 SDK's `v8-isolate.h:1311-1318` explicitly forbids reentering the interrupted
isolate from an interrupt callback. The probe rejects its own `evaluate` calls during
the pump. This guard does not cover every production Flax entry or native GC task.
Pumping an unrestricted platform loop therefore cannot be a production implementation.

Only `experiments/js_slicing/` and ignored local evidence were added. The existing dirty
startup experiment and worker experiment were preserved (19 file hashes). Main Flax, the
maintained Flutter engine, generated bindings and SDK binaries were not changed. No
commit, push, CI run, SDK rebuild or API migration is part of this experiment.

## Native application measurements

The app uses a real `AnimationController`, native frame callbacks, a real `ListView`,
and synthetic pointer events through Flutter's gesture recognizers. It does not use a
fake test clock. Pointer delivery is measured in two ways: Dart `Timer` messages, and
transient frame callbacks. The latter proves gesture/scroll processing during native
frames; it is not a physical mouse or trackpad automation test.

Each fresh process warms a loop, calibrates fixed iterations for approximately 2 s, and
executes identical iterations/checksums in its control and suspended cases. Unlike a
`Date.now()` deadline loop, pump time cannot reduce the amount of JS work performed.
Frame gaps include the first delayed frame after computation. These are intervals
between Flutter callbacks, not display-presentation fences or raster timings.

Two release processes produced these performance rows before the later GC coverage
failure in the second process:

| Case                                     |  JS/case wall time |  Largest frame gap | Frames while busy | Scroll positions while busy |
| ---------------------------------------- | -----------------: | -----------------: | ----------------: | --------------------------: |
| Native animation/scroll baseline         | 2,000.8–2,002.2 ms |       8.71–9.16 ms |               240 |                       95–96 |
| Original UI-thread JS                    | 1,915.1–2,004.2 ms | 1,920.4–2,009.2 ms |                 0 |                           0 |
| Interrupted JS, Dart-timer pointers      | 2,029.1–2,094.8 ms |     21.06–39.36 ms |           158–160 |                           1 |
| Interrupted JS, frame-driven pointers    | 2,035.7–2,103.3 ms |     18.30–24.02 ms |           163–166 |                          89 |
| Long JS inside synchronous LayoutBuilder | 1,914.0–2,004.3 ms | 1,922.0–2,009.5 ms |                 1 |                           1 |

The frame-driven interrupted loop takes 4.9–6.3% longer than its same-process control.
It is a substantial responsiveness improvement, not native 120 Hz parity: interrupted
frame P95 is about 18.1 ms versus about 8.5 ms without JS work. Dart heartbeat messages
remain blocked for about 2.0–2.1 s even while native frames run. Case ordering is fixed;
other development processes were active. These are small exploratory samples, not a
performance guarantee, and there are no unstable timing assertions.

The corrected debug fixture observed 1,969 ms for the blocking control, 25.13 ms for
frame-driven scrolling, and 1,994 ms inside synchronous LayoutBuilder. Another debug
interrupted phase took 13.2 s, including 11 s spent pumping native work. A native stack
sample shows `interrupted -> FlutterRunLoop -> JointHeap::Request -> Dart_FlaxCollect`.
Debug results must not be used as release throughput estimates.

An earlier debug run incorrectly injected pointers during `persistentCallbacks`. Flutter
correctly rejected scroll-position changes during build/layout/paint. That run,
including its 39 s case and repeated error allocations, is excluded from valid
performance comparisons. Pointer injection now occurs in transient frame callbacks.

## Compatibility and GC

| Capability                                                | Evidence and remaining boundary                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JS inheritance, private fields, override and `super`      | The native app's small bridge fixture pauses inside a JS override and calls a real Dart base method before and after. Return values, exception propagation, `finally` and later reuse pass.                                                                                                                                                                                                                                                                                                     |
| Existing generated binding                                | `binding_test.dart` uses the existing generated `NumberBox`, its JS subclass, another JS subclass and Dart operator dispatch. The expected result 19 is produced. However, the interrupt request stays pending: zero interrupt callbacks/yields, even in a 12.761 s loop. Three attempts fail the explicit pause gate. This is an unresolved probe/entry-path issue, not evidence of a production binding regression or successful pause compatibility. No further speculative fixes were made. |
| JS-dependent LayoutBuilder while another JS job is paused | The experiment explicitly rejects the attempted entry. Its Dart fallback renders. A production Flax LayoutBuilder cannot silently use that fallback and still claim the existing synchronous contract.                                                                                                                                                                                                                                                                                          |
| Long computation called by LayoutBuilder                  | Interrupts are suppressed during the active Flutter frame. The frame remains blocked for the full calculation. Returning a pending/previous Widget would change the API semantics.                                                                                                                                                                                                                                                                                                              |
| Native frame and input processing                         | Animation and frame-driven gesture processing proceed. Dart timers/messages do not. Arbitrary native-event and microtask reentrancy has not been made safe.                                                                                                                                                                                                                                                                                                                                     |
| Cross-heap roots                                          | In the standalone debug GC run and the successful release run, 120 MiB of bounded Dart allocation pressure occurs while JS is paused. A callback target reachable only from the suspended JS stack survives, including its private fields. A separate Dart-owned callback also keeps JS alive.                                                                                                                                                                                                  |
| Rootless cycles                                           | After returning/removing the business roots, both weak peers, native cells and callback records reach zero without explicit unregister or Session disposal.                                                                                                                                                                                                                                                                                                                                     |
| GC scheduling                                             | Safety observations do not establish acceptable scheduling. The existing collector conservatively retains peers when JS is active and queues a retry. A nested event loop can run that retry before JS returns, producing repeated Dart collections. The debug GC phase takes 19.623 s; the successful release phase takes 3.567 s. Both then reclaim normally.                                                                                                                                 |

The second release run still produced correct language results, but the following GC job
received no interrupt (`requests=3907`, `interrupts=3906`, `pending=true` unchanged). It
therefore applied **zero** paused allocation pressure and failed coverage. The
equivalent debug combined run also failed this coverage check; the standalone debug GC
run passed 5/5. Do not combine these into a claim that all debug/release checks pass.
Pending-request coalescing and the interrupted entry path need investigation before
ascribing this to V8, generated bindings, or the collector.

## Cost and API implications

The prototype is about 210 lines of native scheduling and Dart adapter code; the rest is
measurement/validation and build support. That small count does not represent the cost
of a safe runtime integration. The production gaps cross three existing owners:

1. The engine scheduler must select safe frame/input work, bound work per yield, and
   handle queued Dart tasks without arbitrary nested event execution.
2. Every runtime entry, callback, close/cancel and Session needs coherent rules while a
   JS stack is suspended. `FlaxNativeJsRuntime.dispose` currently rejects active calls;
   this probe does not weaken it or certify shutdown during suspension.
3. Joint GC must retain suspended roots and defer its retry until a valid collection
   point, rather than repeatedly collecting inside the pump. A detached-stack/fiber
   design would additionally need both VMs' stack-root integration; that was not built.

JS class syntax and normal `super` calls need not change merely to preserve a stack.
Scheduling semantics do change: Flutter can observe Dart state before a formerly atomic
JS call returns. A synchronous frame callback cannot both wait indefinitely for JS and
guarantee an unblocked frame. This limit needs an explicit policy, not a
binding-generator workaround.

Estimate, not a delivery commitment: another 3–5 engineering days for a macOS-only
scheduling/GC feasibility gate after resolving the pending-interrupt failure. General
continuations, production lifecycle integration and Hermes/mobile support are a separate
multi-week effort with unresolved feasibility. Do not start that refactor based on this
partial result.

## Evidence and reproduction

`.local/js-slicing/summary.json` contains all native app attempts and their failed
checks. Raw `debug-*.json`, `release-*.json`, logs, native stack sample, three
`generated-binding*-results.json` files, build logs and source/protection receipts are
retained. The one complete release run has 16/16 assertions; the next has 11 passing
assertions followed by a failed pause-coverage assertion. Failed pilots remain visible.
Scoped Dart analysis and the C++ build pass. No full-workspace or mobile acceptance was
performed.

Use the existing maintained engines in this experiment worktree:

```sh
mkdir -p "$PWD/.local/tmp" "$PWD/.local/js-slicing"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
cmake -S experiments/js_slicing -B .local/js-slicing/native \
  -DSDK=/Volumes/MAC_HOME/Develop/Flutter/flax/.local/ci-ca7f98f/sdk-36954561632-verified/v8-macos-arm64 \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_OSX_ARCHITECTURES=arm64
cmake --build .local/js-slicing/native -j 4
dart run experiments/js_slicing/build.dart release
python3 experiments/js_slicing/run.py release 1
```

`FLAX_SLICE_SUITE=performance`, `language`, or `gc` isolates a suite in a fresh process.
The default is all suites. The build helper restores temporary probe entitlements in
`finally`. Do not build the same example concurrently. The runner exits nonzero on a
failed assertion and never relabels it as a successful capability test. Application
copies and compiler scratch are disposable; retain evidence and maintained SDK builds.
