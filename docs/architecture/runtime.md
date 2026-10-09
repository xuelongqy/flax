# Runtime Design

## Implemented scope

Flax uses its maintained Flutter 3.47.6 engine: V8 15.4.80.15 JIT on macOS and Android
arm64, and Hermes 260318099.0.4 without JIT on iOS arm64. `FlaxEngine.createRuntime()`
is the common entry in `package:flax/runtime.dart`. It checks native ABI 2, internal GC
extension 1, internal binding extension 1 and the exact Flutter/Dart revisions before
allocation. Ordinary Flutter and incompatible engines fail explicitly. UI protocol 23
rejects earlier generated packages.

The Flutter fork owns the C++ bridge, platform adapters and revision-checked Dart patch.
One UI isolate owns one V8 heap/C++ heap; each runtime uses an independent Context and
microtask queue. Dart parallel marking and V8 conditional tracing reclaim rootless
cross-language cycles. See [bridge references](references.md) and
[ADR 0039](../decisions/0039-engine-owned-cross-heap-gc.md).

Hermes sessions own separate VMs. One coordinator per Dart UI isolate traces them
together before weak processing, using Hermes's existing Hades marker. Ordinary Hermes
marking remains concurrent; active JS jobs defer joint collection. Closing one session
preserves the others. Hermes, JSI and Boost.Context are linked into `Flutter.framework`;
the application carries no second standalone runtime.

Platform policy is iOS Hermes and other native V8 JIT. macOS and Android arm64 are
implemented; Android debug and release/AOT acceptance covers an arm64 emulator and a
Pixel 4 running Android 13. The iOS producer supports simulator debug and
physical-device release/AOT applications on iOS 16.3 or later. Device debug/profile and
simulator profile/release are unsupported; Hermes performance and distribution
acceptance remain pending. Engine package factories delegate to the common entry and
reject a wrong platform; they no longer build native assets. Earlier SDK platform
validation remains historical evidence, not acceptance of this implementation.

## Source compilation

The maintained V8 adapter uses ordinary source compilation and preserves ES6 block
scope, direct evaluation and Function construction. Runtime regressions include loop
closures, source bundles, deferred callbacks and accessors. They are focused coverage,
not complete ECMAScript conformance. The maintained Hermes adapter uses source
compilation, ES6 block scoping and explicit microtask checkpoints.

## Values and references

`FlaxJsUndefined`, `FlaxJsNull`, `FlaxJsBoolean`, `FlaxJsNumber`, and `FlaxJsString` are
Dart value objects. Numbers preserve JS double semantics, including NaN and negative
zero. String values and property names use UTF-16, preserving empty strings, embedded
NULs, and unpaired surrogates. Source text, source URLs, and exception text use UTF-8.
V8 creates and reads UTF-16 through native adapter operations, including property names;
conversion does not invoke or inspect the application's global `eval`.

`FlaxJsObject` and `FlaxJsFunction` hold references into exactly one runtime. Objects
stay in the selected engine; they are not serialized through JSON. Properties, function
arguments, explicit receivers, identity comparison, and retained references use the same
native value table. Cross-runtime arguments and released references fail before further
native use.

Native IDs reserve their high eight bits for an engine namespace (Hermes 1, V8 2), with
a library-wide monotonic 56-bit sequence. The sequence never resets on runtime
destruction and permanently rejects allocation on exhaustion. Direct C ABI calls reject
foreign IDs as well as the Dart wrapper; an invalid release cannot release a same-number
object in another engine. IDs remain opaque and process-local.

References returned to Dart follow the real Dart facade through conditional GC. Explicit
`release()` ends that facade early. `retain()` creates an independent owned reference.
Callback arguments and receivers are borrowed until that callback returns; retain them
explicitly before storing them. Returning a reference from a callback preserves the
caller's ownership. Releasing a wrapper does not destroy an object that JS or another
reference still holds. Runtime disposal releases remaining owned references. There is no
automatic GC-based runtime disposal.

Symbol and BigInt conversion, property enumeration, symbol keys, and dedicated buffer
views are not implemented. Arrays and other objects can be retained as ordinary object
references; there is no automatic collection conversion.

## Calls, scheduling, and errors

One Dart isolate owns a runtime. The runtime cannot be sent to another isolate. Every
engine operation starts synchronously from that isolate, without a JS worker thread.
Native code rejects parallel access and allows same-stack reentry. Runtime creation
requires the Flutter UI isolate and its owning platform thread. Background isolates and
a second UI isolate in one isolate group are rejected.

Dart host functions use `NativeCallable.isolateLocal`. Calls that can reach them are
non-leaf FFI calls. A callback returns on the current stack and may call JS again,
including nested `Dart -> JS -> Dart -> JS` sequences. Native threads must never invoke
these callbacks independently of the owning Dart FFI call.

Each C call receives its own error result. C++ exceptions are caught at the ABI;
`FlaxJsException` carries the JS message and stack when available. Dart callback
exceptions become JS exceptions, so JS may catch them. Nested failures do not overwrite
another call's error. Recoverable exceptions leave the runtime usable.

Promise jobs run only when the host calls `drainMicrotasks()`. They do not flush after
evaluation or after each callback. Its return value indicates an empty queue;
`maxJobsHint` is an engine hint, not a deadline or preemption guarantee. Draining during
an active callback is rejected. Future/Promise mapping and unhandled-rejection reporting
are not provided by this bare runtime API. FlaxSession supplies typed Future/Promise
delivery for generated UI calls while keeping the runtime contract explicit.

## Shutdown

`dispose()` is idempotent after successful completion. Disposal during evaluation or a
host callback throws `StateError`; the active call remains valid. Shutdown rejects new
entries, clears references, destroys the engine, and only then closes Dart callbacks.
Methods on a disposed runtime and operations on expired references fail in Dart rather
than dereferencing freed native memory. Releasing an already invalid reference is safe.

Registered callbacks stay alive while JS or Dart business references reach them.
Replacing a global does not prove that JS released the old function. Even a failed
registration may have exposed a function to a global setter before it threw, so its
callback must stay alive.

The C API is an experimental, process-local function table with a version and size
check. Its native runtime pointer is invalid after successful destruction; direct ABI
callers must obey this ownership contract. The Dart wrapper supplies idempotence and
use-after-dispose guards. See [ADR 0002](../decisions/0002-experimental-runtime.md).

## Flutter integration

The separate [FlaxView host](ui.md) implements generated widgets, explicit signals,
frame-coalesced property updates, and Flutter-owned subtree reconciliation. It imports
this runtime through the public entry and does not extend the native ABI. Borrowed
Context access and [owned Controller bindings](objects.md) are implemented in the UI
layer, preserving real Flutter-owned inherited dependencies and resource lifecycles.

Session timers and optional Fetch belong to the [host environment](host.md), not the
bare runtime. ABI 2 adds copied ArrayBuffer creation and byte-range reads for actual
TypedArray/DataView views; callers never retain native byte pointers. Detached state
comes from the engine, not an object's mutable `detached` property. A detached buffer is
rejected even when its length is zero; an ordinary empty buffer remains valid.

## Verification

`dart run melos run check:runtime` runs the shared native API and joint GC contracts
with the matching local Flutter test engine. `check:runtime:v8` and `check:engines`
exercise the same fixed macOS platform selection, including Context isolation,
foreign-reference rejection, reentry and recreation. No command downloads or rebuilds an
SDK runtime. Ordinary `check` verifies source and package structure.

`dart run tool/check_engine_application.dart debug|profile|release` runs runtime and
real Widget/State, callback, Future and Stream regressions in a macOS application. For
an iOS simulator, set `FLAX_CHECK_TARGET=ios-simulator-arm64` and
`FLAX_CHECK_DEVICE=<simulator-id>`, then run the same application's `debug` gate.
Simulator profile/release modes are rejected explicitly. Release builds run directly
because Flutter Driver does not support release mode. Application and performance
evidence is recorded in the [acceptance task](../tasks/engine-cross-heap-gc.md).

For a physical arm64 iPhone, use `FLAX_CHECK_TARGET=ios-device-arm64`,
`FLAX_CHECK_DEVICE=<iphone-id>` and `FLAX_IOS_TEAM=<team-id>`, then run the `release`
gate with matching iOS release and macOS release host engines. It verifies real signing,
provisioning, Dart AOT, the embedded Hermes interpreter and relocation before
installing. The direct-launch fixture writes iOS release results to stdout so the device
console can audit every case; ordinary Flutter logging is unchanged. Device
debug/profile modes are rejected explicitly.

For Android arm64, set `ANDROID_HOME`, `FLAX_CHECK_TARGET=android-arm64` and
`FLAX_CHECK_DEVICE=<adb-id>`, then run
`dart run tool/check_engine_application.dart debug|release`. The matching Android engine
and macOS host tools must already be built. This gate runs the same runtime and Flutter
assertions in an installed APK, proves V8 JIT, and audits all native libraries,
immutable SDK hashes, signing and 16 KB page alignment. Release uses Dart AOT. The
staged source is removed before installation. The API 37 emulator uses 16 KB pages; the
accepted Pixel 4 uses 4 KB pages. These correctness checks do not establish Android
GC/frame performance or distribution signing.

Package integration commands own package-specific Flutter/example behavior.
`check:aggregate` adds only cross-module embedded composition, while `check:ui` runs all
UI-owning package integrations followed by that aggregate. Runtime, standalone,
engine-coexistence, and release checks remain separate gates. The current acceptance
scope is recorded in [External Binding Verification](external-binding-verification.md).
The [V8 entry point](../../packages/flax_engine_v8/README.md) delegates to the
maintained Flutter Engine; [packaging](packaging.md) defines outside-consumer and
relocated-bundle checks. A local runtime pass does not establish other-platform,
published-archive or complete ECMAScript conformance.

## Deferred concerns

Modules, bytecode packaging, hot reload, inspector integration, execution limits,
capability isolation, and other platforms remain future work. JSI alone is not a
mini-app security boundary. Node, Python, Rust, and other backend integrations are
deferred; the first host integration remains Dart/Flutter.

## Performance measurement

The profile application gate records raw Flutter frame timings in the application and
downloads the complete VM timeline in the host driver, keeping trace decoding out of the
measured UI heap. It records a same-device Dart allocation baseline without a JS
runtime, then the same workload with a live 300,000-object JS heap and 1,000 callback
pairs. Exact phase markers validate the endless trace. Raw GC events, frame samples,
allocation durations, startup and RSS are saved with the receipt. Whole GC and the V8
joint phase are measured separately. This measures the stated workload; it is not a
general frame latency guarantee or an unmodified Flutter engine comparison.

The stable-root workload can use the direct-root path described in
[bridge references](references.md). Report how many passes actually require V8
collection; skipping an unnecessary JS collection is not a shorter full joint trace.
Complete timeline capture also contributes to process RSS. Supplementary runs without
full tracing can compare frame timings and memory, but cannot establish GC durations.

The [earlier independent engine benchmarks](../../benchmarks/engines/README.md) and
[SDK platform guide](../testing-platforms.md) describe the retired deployment model.
Their results do not establish current engine performance or other-platform acceptance.
