# Shared direct FFI experiment

This is an isolated extension of [Gate A](../ffi_gate_a/README.md). It explores the
remaining FFI design gates without installing a production Flax capability or changing
the public ABI-2 table. The production contract remains the
[proposal](../../docs/architecture/ffi-proposal.md).

The [optional npm package experiment](../ffi_package/README.md) reuses this native
implementation to test JS-only developer packages, an internal Dart build adapter and
automatic code-asset packaging. This original runner retains its direct native-project
integration as the shared runtime baseline.

## Execution and ownership

`probe.dart` installs a checked, process-local plain-C provider descriptor. Ordinary
calls follow `JS -> shared JSI host function -> typed C function pointer -> C`. Worker
code holds native values, owned payloads and a native port/generation; it holds no VM
pointer or JS function. A port message schedules owner-isolate draining. The Dart FFI
callback in the probe is a separate positive control and benchmark baseline.

The native implementation is in `native/runtime.inc`. V8 and Hermes compile that exact
file. `native/collect_*.inc` only force collection for the experiment, with no Dart/JS
joint cells; they are not alternate FFI backends. The provider has no JSI, STL or C++
runtime dependency. `generate.py` checks selected declarations using Clang's AST and
generates the typed provider table. Missing ownership annotations are rejected. Cleanup
metadata is registered before allocating native resources; rollback after JS handle
creation still releases on the resource creation thread. This small fixture generator
does not yet bind arbitrary libraries or generate npm modules.

1. Authenticated HostObjects hold shared native owners. Aliases and bounded slices share
   revocation. A call lease defers destruction when JS closes a resource during a native
   call. No cloned Flax value ID retains a native handle.
2. Native allocations back external ArrayBuffers. Logical close rejects subsequent FFI
   access while existing exported JS byte views retain the storage. GC finalizers only
   update native reference counts; owner-isolate sweeping performs provider cleanup.
3. Compiled callbacks catch JS errors, return a C sentinel and rethrow after C returns.
   The context-free callback uses a scoped TLS binding that supports nested calls. A
   callback on a worker is rejected before touching JSI. Promise results cannot stand in
   for a synchronous integer callback.
4. The notification producer copies fixed two-byte payloads into an eight-event queue.
   Overflow is reported and cancels delivery. A separate scalar worker job resolves a JS
   Promise on the owner. Closing revokes callbacks and waits for worker completion; an
   unconfirmed stop leaves native retirement pending.
5. The isolate shutdown hook removes VM references and detaches native-only work. A
   failed destructor retains cleanup metadata instead of forcing a free. The fixture
   uses statically linked providers (a packaged plain-C `.so` on Android); dynamic image
   discovery, validation and pinning remain proposed.

## Run

Use the maintained Flutter checkout and workspace-volume scratch. The build script
recovers the matching native source and compile/link commands from existing engine
outputs, replaces the runtime and GC-test adapter objects, then produces separate SDK
overlays. It never writes into the original output directories. For old Apple SDK paths
that are no longer installed, it selects the currently installed SDK and records the
actual command. Existing `engine_version` values can predate rebuilt native objects; the
two known stale source revisions are selected explicitly in the script.

```sh
export TMPDIR=/Volumes/MAC_HOME/Develop/Flutter/flax/.local/tmp
export TMP="$TMPDIR" TEMP="$TMPDIR"
python3 experiments/ffi_full/generate.py --check
python3 experiments/ffi_full/build_engine.py \
  --flutter-root /Volumes/MAC_HOME/Develop/Flutter/flutter \
  --output /Volumes/MAC_HOME/Develop/Flutter/flax/.local/ffi-full-engine-v2 \
  flax_mac_debug flax_ios_debug_sim_arm64 flax_android_debug_arm64 \
  flax_ios_release_arm64 flax_mac_release
python3 experiments/ffi_full/run.py \
  --flutter-root /Volumes/MAC_HOME/Develop/Flutter/flutter \
  --engine-output /Volumes/MAC_HOME/Develop/Flutter/flax/.local/ffi-full-engine-v2 \
  --scratch-root "$TMPDIR" \
  --simulator B6BE6348-E4B0-4FC5-9698-8708B467A609
```

For a development-signed iOS device test, additionally select
`--target ios-device --release --ios-device <UDID> --team <TEAM_ID>`. The runner copies
the built application to a new directory, verifies that no `.dart` or `.js` source is
present, and installs that relocated copy. For Android, select
`--target android --android-device <SERIAL>`; the plain-C provider is built through the
disposable application's CMake integration. For macOS AOT, select
`--target macos --release`. Each invocation keeps separate result and receipt files in
`.local/ffi-full/` and removes its disposable application.

To verify iOS release packaging without accessing a phone, use
`--target ios-device --release --build-only`. This builds unsigned AOT code and checks
exported provider symbols and relocated packaging; it does not execute the result. The
current device runtime gate is deferred in favor of the simulator.

`engine.patch` records the opt-in integration in the separate engine branch. Defining
`FLAX_FFI_EXPERIMENT_SOURCE` includes the common implementation and adds explicit
retirement and forced-shutdown hooks; ordinary engine builds do not enable it. The
overlay builder applies those same hooks to the matching historical source snapshot. The
builder also compiles the test-only collector adapters; the patch alone is not a
complete GN build feature. Android requires replacing both `flutter.jar` and the
`arm64_v8a_debug.jar` Maven artifact. Apple release linking explicitly roots and exports
the descriptor getter and benchmark control; a dlsym-only reference was stripped.
Experimental engine branch: `feat/ffi-experiment` at
`/Volumes/MAC_HOME/Develop/Flutter/.codex-worktrees/ffi-engine`.

## Evidence and interpretation

The runner checks the actual engine namespace and packaged Mach-O UUID (or Android ELF
build ID and hash), not just a requested engine flag. Counters check exact cleanup, and
worker latches exercise ordering without sleeps. Benchmarks use five samples after
warmup, 10,000 calls per sample and a checked checksum. The Dart baseline uses ABI-2
host registration, value inspection and Dart FFI; it is not a benchmark of every
generated Flax binding. Debug and AOT results must be interpreted separately.

The [receipt](results.json) records the shared source hash and all platform results.
Every executed configuration passes 38 JS assertions and the Dart control/lifecycle
assertions, with no Dart business dispatch during direct native probes. Native
installations, owners, byte allocations and workers return to zero. The benchmark
separately observes 60,000 Dart baseline entries and one positive control entry.

| Configuration                | Result                                                         |
| ---------------------------- | -------------------------------------------------------------- |
| macOS arm64 V8 debug         | Pass                                                           |
| macOS arm64 V8 release/AOT   | Pass                                                           |
| iOS arm64 simulator Hermes   | Pass                                                           |
| Android arm64 device V8      | Pass; packaged ELF matches the selected engine                 |
| macOS ASan + UBSan           | Pass; container checks enabled, leak detector disabled         |
| iOS arm64 device release/AOT | Build only; symbols and relocation checked, runtime not tested |

ASan/UBSan instrument the experiment runtime, V8 adapter and C provider, with one Apple
compiler/runtime version. Other Flutter objects and the V8 library are not instrumented.
Exported storage uses fixed arrays, so its address and extent cannot change. Repository
`check:runtime:v8` also passes all 45 existing runtime/GC tests and reproducible ABI
generation against the maintained baseline engine.

Illustrative median milliseconds per 10,000 calls (five samples after warmup):

| Configuration        | Direct C loop | JS -> native | JS -> Dart -> C |
| -------------------- | ------------- | ------------ | --------------- |
| macOS V8 debug       | 0.023         | 22.927       | 55.284          |
| macOS V8 release     | 0.009         | 2.618        | 7.531           |
| iOS simulator Hermes | 0.022         | 4.877        | 23.907          |
| Android V8 debug     | 0.046         | 44.205       | 108.619         |

These local scalar samples were collected during development, without isolated CPU load
or frame/payload measurements. Compare paths within one row; they do not establish a
stable speedup or rank engines across different targets/build settings.

## Limits before production integration

This probe uses raw ABI-2 runtimes in a real `dart:ui` application. Its asynchronous
close driver demonstrates the retirement condition; it does not add that condition to
production `FlaxSession._tryClose()`. Reset tests recreate raw runtimes and invoke the
real isolate shutdown hook; they do not certify Flutter tool hot restart or navigation.
Older platform engines are intentionally tested without importing the newer Flutter
widget framework. Full current-framework application contracts remain separate. GC
cleanup is swept by the fixture's explicit owner checkpoints; automatic production
idle-checkpoint wiring remains part of Session integration. Exported JS views survive
native session retirement; exporting those views to Dart across VM destruction is not
part of this fixture.

The descriptor and entry names are fixture-specific. Memory access is byte-oriented;
general pointer arithmetic, typed alignment, arbitrary 64-bit scalars, structs, unions,
variadics and multiple context-free callbacks in one C signature are not implemented.
Notification payloads have a fixed bound; arbitrary payload schemas and buffer jobs need
generated ownership metadata and byte accounting. No executable callback memory is
allocated by the experiment. App Store review, prolonged stress and general dynamic
provider unloading are outside this acceptance evidence.
