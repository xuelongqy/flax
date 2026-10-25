# Pure JavaScript initialization and UI adoption

This is an isolated macOS arm64 V8 experiment. It does not change Flax's public
loading API, generated bindings, or maintained engine sources. Nothing is committed.

## Ownership

1. Create an empty maintained V8 runtime on the Flutter UI thread and retain its
   existing Context. This small creation cost remains on the UI thread.
2. Verify there are no Dart bridge cells or callbacks. A native worker acquires
   V8's Locker and runs only JavaScript initialization in the same Isolate/Context.
3. The worker releases all V8 scopes and its Locker before publishing completion.
   The UI thread joins it, restores joint GC registration, and resumes using that
   same Context. Closures, prototypes, private fields and objects are not serialized.
4. Install real Dart bindings on the UI thread. All subsequent generated calls,
   overrides and `super` calls use the existing synchronous bridge and joint GC.

This uses a native C++ thread, not a second Dart isolate or an isolate group. The
probe forbids background entry once Dart peers exist. During background ownership
the UI must not call this JS runtime, drain its microtasks, or destroy it.

## Why moving execution alone did not remove the stall

The maintained `JointHeap::Collect` takes the V8 Locker before checking whether
there are cross-heap edges. An ordinary Dart GC on the UI thread can consequently
wait for the entire background JS job, even though the bridge is empty.

`engine_probe.py` compiles a private copy of `joint_gc.cc` and relinks the existing
engine objects into a private framework. Its small experimental hook unregisters
the joint collector **only while the heap has no Dart peers**, and restores it
before any real Dart objects are attached. Ordinary Dart GC continues to run.
The hook rejects nonempty heaps, other owners, and nested initialization; `Bind`
also rejects peers during this phase. Background syntax/runtime errors return
ownership and restore registration just like successful initialization.

This hook demonstrates an initialization phase, not a production GC API. A real
implementation should make initial registration follow ownership explicitly. It
must never detach joint GC from a heap that already serves another Session.

The main-GC recheck also tests a smaller private `empty-gc` variant: return from
`JointHeap::Collect` before taking the V8 Locker when there are no joint cells.
The existing owner/reentry checks remain, and nonempty heaps use ordinary joint
tracing. This variant needs no collector unregistration. On maintained Flutter
`7073a170189`, the two-second/Dart-GC case observed a 17.5 ms maximum frame gap
and 5.9 ms maximum Timer gap, versus 1784.5/1768.2 ms with the maintained engine.
Both pass 31/31 correctness checks. See the
[full gallery recheck](../gallery_handoff/README.md#main-joint-gc-recheck) for
controlled inputs, subsequent Session coverage and the exact boundaries.

After building this probe application, select the private fast path with:

```sh
python3 experiments/js_handoff/engine_probe.py release empty-gc
python3 experiments/js_handoff/use_engine.py release empty-gc
env -u FLAX_HANDOFF_DEFER_GC python3 experiments/js_handoff/run.py release
```

## Checks and measurements

`app.dart` uses the existing native animation/scroll harness and generated
`NumberBox` fixture. The workload defines 30,000 functions (about 1.63 MB of JS)
and computes for two seconds. Each scenario has a distinct source key so a warm
compilation cache is not mistaken for a threading improvement.

- Compare synchronous UI execution, ordinary background execution, and background
  execution with a Dart GC request/allocation pressure after 250 ms.
- Record frame callback gaps, changing animation/scroll values, Dart Timer gaps,
  source compilation/execution, UI kickoff, and UI adoption. Frame gaps measure
  responsiveness, not exclusive CPU time or a device-independent frame guarantee.
- Check captured mutable state, private fields, JS inheritance, `super`, Promise
  microtasks, exceptions, failed initialization recovery, and actual Dart proxy calls.
- After adoption, check JS-rooted and Dart-rooted cross-heap cycles. Both weak peers
  must disappear before Session close; bare runtime cells/callbacks must reach zero.
  The generated fixture also checks both weak peers before close and zero tracked
  handles at disposal. No explicit peer unregistering is used to pass collection.

Release uses the existing bounded allocation-pressure helper because there is no
VM service. The reported GC request duration includes helper allocations, async
waits and transport; it is **not** a measurement of a single GC pause.

Results and the final source/protection audit are recorded under
`.local/js-handoff/`. The initial 29-check pilot is retained but excluded from final
comparisons because it reused a compilation cache key. Final runs include two
additional background error recovery checks.

## Final results

Host: Apple M2 Max, 32 GiB RAM, macOS 27.0.1. Each final application run passed
31/31 functional checks: one baseline and one deferred-registration run in debug,
one baseline and two deferred-registration runs in release/AOT. The release
repetitions are reported as ranges rather than as a statistical distribution.

| Execution | Debug load / largest frame gap | Release load / largest frame gap |
| --- | --- | --- |
| UI thread, maintained engine | 2052 / 2113 ms | 2030 / 2033 ms |
| Worker, joint GC already registered | 2033 / 2024 ms | 2030 / 2020 ms |
| Worker, registration restored on adoption | 2031 / 14.2 ms | 2029–2031 / 8.7–11.9 ms |
| Same phase, with Dart GC during work | 2029 / 18.7 ms | 2028–2035 / 14.0–17.8 ms |

During the successful background runs Flutter produced 242–244 frames, the
automated drag recorded 95–96 distinct scroll positions, and the Dart heartbeat
ran 1003–1014 times. Largest Timer gaps were 8.6–15.4 ms in debug and 5.6–6.7 ms in
release. Frame-gap P95 was 8.5–8.9 ms. Native join plus collector restoration took
13–25 microseconds; source encoding/copying and event-loop dispatch are outside
that number. Runtime creation remained on UI: about 27 ms debug and 2–6 ms release.

The baseline debug GC-pressure timer did not run during background work: an
earlier GC blocked the UI thread until initialization finished. That scenario is
recorded as **not executed during work**, not as a successful GC-pressure check.
The candidate debug run and both release candidate runs confirmed the GC request
started while the worker was still executing. Normal Dart collection continued.

The separate generated fixture mount still cost 1842–2056 ms in debug and
208–238 ms in release. This starts after Session construction and ends at its first
Flutter frame; it excludes earlier fixture asset loading and registry preparation.
It is remaining UI-thread work, not part of the cheap native ownership handoff.
The experiment consequently validates pure-JS initialization responsiveness, not
an entirely nonblocking FlaxView startup or a faster fixed-duration CPU workload.

Raw logs/receipts and `.local/js-handoff/summary.json` retain both successful and
baseline blocking behavior. The 39 pre-existing edited/source/entitlement files
were preserved byte for byte. Maintained engine sources and binaries were unchanged.

## Reproduce

Use this experimental worktree and the already built maintained engines. The
generated fixture manifest must exist at `.local/startup-staging/ui-fixtures.json`.

```sh
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
cmake -S experiments/js_handoff -B .local/js-handoff/native \
  -DSDK=/Volumes/MAC_HOME/Develop/Flutter/flax/.local/ci-ca7f98f/sdk-36954561632-verified/v8-macos-arm64
cmake --build .local/js-handoff/native -j 4
dart run experiments/js_handoff/build.dart release
python3 experiments/js_handoff/use_engine.py release baseline
python3 experiments/js_handoff/run.py release
python3 experiments/js_handoff/engine_probe.py release
python3 experiments/js_handoff/use_engine.py release deferred
FLAX_HANDOFF_DEFER_GC=1 python3 experiments/js_handoff/run.py release
```

Repeat with `debug` instead of `release`. The private link reuses exact existing
compile/link inputs and replaces one object; it neither rebuilds an SDK nor writes
to the maintained engine's source or output directories. `use_engine.py` replaces
only this experiment's application framework, verifies the original engine hash,
and signs the local application. `build.dart` temporarily adjusts experimental app
entitlements and restores the exact originals, detecting concurrent changes.

## Boundaries

This is not a complete gallery startup benchmark. Actual generated-module loading
and first Widget mounting still run on UI after adoption; their remaining cost is
reported separately. The two-second workload establishes responsiveness, not a
two-second reduction in loading time. UI-side source encoding/copying also remains.

Only an empty, exclusively owned heap is tested. Additional Sessions sharing an
already active heap, host callbacks during initialization, background cancellation,
hot restart during ownership transfer, Hermes, Android and iOS are not implemented
or certified here. Existing synchronous `LayoutBuilder` and Dart proxy callbacks
cannot move to this pure-JS phase. No general nonblocking JS execution is claimed.
