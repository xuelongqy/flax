# Runtime Design

## Implemented scope

The experimental runtime supports macOS arm64, targeting macOS 15 or newer. It executes
JavaScript synchronously through Dart FFI, a versioned C ABI, JSI, and Hermes or V8.
This is the engine layer used by the [Flutter application host](ui.md), not broad
platform certification.

Public Dart interfaces live in `package:flax/runtime.dart`. Engine authors use the
separate `package:flax/native_runtime.dart` extension entry. The Hermes package returns
`FlaxJsRuntime` through `FlaxHermesEngine.createRuntime()`. The optional V8 package
exposes `FlaxV8Engine.createRuntime()` with the same return type and unchanged ABI. V8
is pinned to 15.2.124.21, requires JIT, and uses the existing JSI revision. See
[adapter configuration and lifetime](../../packages/flax_engine_v8/native/README.md).

## Source compilation

The Hermes adapter explicitly enables ES6 block scoping, which is disabled by default in
the pinned upstream runtime. Loop closures retain their per-iteration `let` and `const`
bindings; `var` retains its shared function-scoped behavior. The setting also applies to
source compiled through `eval` and the `Function` constructor.

Tests cover direct source execution, ES2019 IIFE bundles, deferred callbacks, accessors,
and outside-repository loading. They are focused regressions, not a complete ECMAScript
conformance suite. Compilation settings belong to the engine adapter; application JS
does not need loop rewriting or a Flax compatibility flag.

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

References returned to Dart are owned and require `release()`. `retain()` creates an
independent owned reference. Callback arguments and receivers are borrowed until that
callback returns; retain them explicitly before storing them. Returning a reference from
a callback preserves the caller's ownership. Releasing a wrapper does not destroy an
object that JS or another reference still holds. Runtime disposal releases remaining
owned references. There is no automatic GC-based runtime disposal.

Symbol and BigInt conversion, property enumeration, symbol keys, and dedicated buffer
views are not implemented. Arrays and other objects can be retained as ordinary object
references; there is no automatic collection conversion.

## Calls, scheduling, and errors

One Dart isolate owns a runtime. The runtime cannot be sent to another isolate. Every
engine operation starts synchronously from that isolate, without a JS worker thread.
Native code rejects parallel access and allows same-stack reentry. This does not promise
a permanently fixed operating-system thread for the Dart isolate.

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

Registered callbacks are kept until runtime disposal. Replacing a global does not prove
that JS released the old function. Even a failed registration may have exposed a
function to a global setter before it threw, so its callback must stay alive.

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

`dart run melos run check:runtime` builds and tests Hermes; `check:runtime:v8`
explicitly selects V8. `check:engines` tests coexistence, cross-engine object and
native-handle rejection, reentry and recreation. Run these serially with UI aggregates
because engine assets and generated fixtures are shared. Ordinary `check` configures
native builds but does not build or fetch an engine.

Package integration commands own package-specific Flutter/example behavior.
`check:aggregate` adds only cross-module embedded composition, while `check:ui` runs all
UI-owning package integrations followed by that aggregate. Runtime, standalone,
engine-coexistence, and release checks remain separate gates. The current acceptance
scope is recorded in
[External Binding Compatibility](external-binding-compatibility.md). The
[V8 adapter](../../packages/flax_engine_v8/native/README.md) documents lifecycle and JIT
smoke coverage; [packaging](packaging.md) defines outside-consumer and relocated-bundle
checks. A local runtime pass does not establish other-platform, published-archive or
complete ECMAScript conformance.

## Deferred concerns

Modules, bytecode packaging, hot reload, inspector integration, execution limits,
capability isolation, and other platforms remain future work. JSI alone is not a
mini-app security boundary. Node, Python, Rust, and other backend integrations are
deferred; the first host integration remains Dart/Flutter.

## Performance measurement

The [independent engine benchmarks](../../benchmarks/engines/README.md) consume the same
public runtime API from a Dart AOT host. Workload processes isolate engines, source
loading, execution, bridge calls, lifecycle and RSS observations. Timing includes the
stated Flax boundary; it is not an engine-internal profiler. Runtime correctness and
Flutter frame measurements remain separate from these results.
