# Proposal: direct JavaScript FFI

Historical proposal. The implemented contract is now documented in
[Direct JavaScript FFI](ffi.md). Earlier ownership and pinning alternatives below are
not the current API.

Status: design proposal with isolated validation. The
[Gate A experiment](../../experiments/ffi_gate_a/README.md) verifies direct ABI-2 calls;
the [shared FFI experiment](../../experiments/ffi_full/README.md) validates
representative pointer, callback and retirement cases on both engines, including macOS
release and Android. The
[dlopen experiment](../../packages/flax_ffi/test/runtime/README.md) adds runtime
signatures for dynamic library files and static-linked process symbols on V8/Hermes.
Production Session integration, a general generator and complete platform acceptance
remain pending. The selected pointer API uses manual library-defined allocation/release.
Managed-resource behavior in the earlier fixed fixture is historical experiment
evidence, not the current raw-pointer contract.

## 1. Decision and scope

Use one engine-owned C++ implementation to call native code directly from JavaScript. V8
and Hermes share validation, conversions, ownership, callback dispatch and shutdown. The
capability is an optional npm package with a JS/TS public API. Developers install the JS
package for a selected native library; they do not add a matching Pub dependency, write
Dart function wrappers or register a Dart FFI plugin. Flax's internal host adapter
installs the selected capability and participates in Flutter scheduling; ordinary native
function calls do not travel through Dart business callbacks.

Support explicit JS-defined scalar signatures through `dlopen(path, definitions)` and
`dlopen(null, definitions)`, using a shared precompiled `libffi` call backend. The
latter looks up globally visible symbols already linked/loaded into the process. Runtime
signature descriptions do not require generating executable instructions. Compiled
provider adapters remain the planned path for selected callback and library contracts;
the existing fixture generator is not extended by the dlopen experiment.

The first complete slice supports:

1. Selected C functions, exact scalars, opaque handles and bounded byte ranges.
2. Explicit library-defined allocation/release functions and borrowed zero-copy views;
   no adoption API, pointer-close method or GC-driven C destruction.
3. Synchronous callbacks using precompiled entries, with and without `user_data`.
4. Retained notification callbacks and selected background operations after the native
   retirement barrier is implemented and verified.
5. macOS/Android arm64 V8 and iOS arm64 Hermes through the same public semantics.

General C++ reflection, C++ ABI compatibility, Node-API compatibility, automatic symbol
signature inference, downloaded native code, runtime-generated executable callback code
on iOS, native module hot unloading and automatic offloading of every function are
outside this scope. Existing Dart package wrappers remain useful but are not the FFI
execution backend. The first slice is an implementation stage, not the capability
ceiling.

### Compatibility target

Use Dart FFI's native-library capabilities as the minimum capability target and prefer
Node.js FFI's JavaScript API wherever it can express them. A missing Node API does not
justify omitting a capability supported by Dart FFI. Preserve Node-compatible behavior
for existing names; introduce a small, explicit Flax extension only when the Node API
cannot express the required operation. Capability parity does not require reproducing
Dart's generic `Pointer<T>` objects or routing ordinary calls through Dart.

The baseline is the repository's Dart 3.13.5 SDK
([`dart:ffi`](https://api.dart.dev/dart-ffi/dart-ffi-library.html)) plus
allocation/string conveniences from
[`package:ffi`](https://pub.dev/documentation/ffi/latest/ffi/). Review changes to those
references deliberately; experimental Dart APIs are tracked separately from stable
acceptance. The current prototype implements only a subset of this target.

Evaluate parity on the same supported native target and expose the target ABI identity
needed to select layouts. This does not certify additional platforms before their
engine, calling convention and package acceptance exists.

| Capability group         | Required target                                                                                                                                                                                                       | Current runtime-signature prototype                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Types and layouts        | Exact integer/float values, C ABI-specific integers, pointers, opaque handles, structs/unions by reference and by value, nested/fixed/variable inline arrays, packing, size and alignment.                            | 8/16/32-bit integers, float/double, bigint addresses and return-only void; no aggregate descriptors.                                                                         |
| Symbols and calls        | Dynamic files, process and executable symbol scopes, selected code assets/static-linked symbols, native global reads/writes, calls through returned function pointers and explicitly typed variadic arguments.        | Concrete dynamic files and process symbols; named scalar calls and symbol addresses only. Library close is logical.                                                          |
| Memory and conversion    | Pointer arithmetic, typed loads/stores, out-parameters, UTF-8/UTF-16, native/JS-backed views, aligned native allocation and paired manual release; optional scoped allocation conveniences.                           | Bigint arithmetic, byte/string helpers and optional Buffer; no scalar pointer helpers or portable aligned allocator. Sources and helper lengths have prototype restrictions. |
| Callbacks and scheduling | Same-thread synchronous callbacks with native return values, retained callbacks with or without context, cross-thread asynchronous void notifications and a separately evaluated cross-thread synchronous capability. | No public callback API; the older fixed-provider fixture is separate evidence only.                                                                                          |
| Resource lifecycle       | Manual release by default, explicit optional native finalizer attach/detach and external-memory accounting, callback retirement, loader-handle release and safe session shutdown.                                     | Manual library-defined free and JS GC for JS storage; borrowed views own nothing. No native finalizer API or physical loader-handle release.                                 |

The portable Node surface includes type spellings/constants, `suffix`, `DynamicLibrary`,
`dlopen`/`dlclose`/`dlsym`, primitive memory helpers, string/buffer conversions and
callback registration/lifetime methods. Match argument conversions, default values,
error behavior and package import forms as well as names. Passing
Buffer/ArrayBuffer/views must borrow their actual slice for the call; strings need
call-owned terminated storage. `bool` retains Node's numeric 0/1 convention rather than
silently accepting JS booleans under an incompatible spelling. `suffix` is a platform
filename suffix, not automatic framework, XCFramework or archive detection.

Do not emulate Node's `getCurrentEventLoop()` or invent a libuv loop: Flax uses its own
host checkpoint. Node-specific permission flags, Worker/event-loop liveness and V8 Fast
API implementation details are not compatibility requirements. A `node:ffi` alias or
CommonJS entry does not imply support for other Node modules.

Dart `Handle`, `NativeApi` and native ports describe Dart VM embedding, not ordinary
portable C values. Libraries depending on them need the existing JS/Dart interop and
Flax-owned host adapter; JS objects must never be reinterpreted as `Dart_Handle`. Keep
this host integration boundary explicit rather than claiming such libraries work through
the raw C call path. Dart's `isLeaf` optimization likewise has no required identical JS
switch; correctness and measured call overhead are the relevant contracts.

For by-value unions or packed aggregates that the target libffi backend cannot express,
use a target-compiled adapter. This preserves the capability without claiming a generic
runtime signature can describe every ABI. C bit fields and other shapes outside Dart's
direct FFI support can continue to require a C shim. Typed varargs, by-value aggregates,
variable inline arrays and function-pointer calls are required future work, not
permanent exclusions. Reject unimplemented shapes explicitly until their acceptance
gates pass.

This target does not change the current implementation instruction: no callback API or
general code generation is added by this design update. Public extensions and their
platform acceptance must be reviewed before implementation is described as available.

## 2. Existing facts and constraints

The [runtime contract](runtime.md) selects V8 on macOS/Android and interpreted Hermes on
iOS. Both live in the maintained Flutter engine. Sessions belong to the Flutter UI
isolate and support same-stack reentry; native worker threads cannot enter JS or invoke
the current isolate-local Dart callback trampolines.

Current source establishes these boundaries:

| Owning source                                                                           | Existing behavior relevant to this proposal                                                          |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `packages/flax/lib/src/native/native_runtime.dart`                                      | Registers Dart host callbacks with `NativeCallable.isolateLocal`; the runtime pointer stays private. |
| `packages/flax/lib/src/ui/host.dart`                                                    | `FlaxPluginInstance.close()` and `dispose()` are synchronous; host work uses session checkpoints.    |
| `packages/flax/lib/src/ui/session.dart`                                                 | `_tryClose()` waits for mounts and host checkpoints, but not native producers or workers.            |
| `packages/flax/native/include/flax/`                                                    | Canonical ABI 2, GC and binding extension headers; not a general native module interface.            |
| `flutter/engine/src/flutter/flax/native/src/runtime.cpp` in the maintained Flutter fork | Creates JSI host functions and owns runtime entry, buffers and native teardown.                      |

The Flax repository's old native implementation is historical source, not the executable
bridge to extend. The Flutter fork must receive the actual runtime implementation.

The [shared buffer contract](interop.md#shared-uint8list-bytes) already retains backing
storage across Dart/JS collection and supported transfers. Reuse that storage ownership
where it fits; it does not by itself define foreign-pointer ownership or callback
cancellation. [Joint GC](references.md) does not discover arbitrary C library roots.

## 3. Architecture and ownership

```text
Build time
  installed npm packages + retained application/module imports
      -> selected native provider descriptors and source/binary digests
      -> internal Flutter build hook -> packaged native code assets
  selected C headers + explicit lifetime annotations
      -> generated C/C++ provider + JS/TypeScript exports in a library's npm package

Session installation
  internal host adapter -> checked engine native-module extension
                        -> selected provider registration + JS module delivery

Ordinary call
  JS function -> shared JSI host function
              -> validate handles, values and call frame
              -> libffi call frame or compiled typed adapter -> target C/C++ library

Worker notification
  precompiled C callback -> owned native message queue -> port wakeup
      -> Dart session checkpoint -> shared native event drain -> JS
```

The worker path uses Dart only as a scheduling and retirement control plane. It does not
serialize payloads through Dart or create a Dart facade for each target function.

### Package responsibilities

Names below are proposed, not existing importable packages or commands.

| Owner                           | Proposed responsibility                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maintained Flutter engine       | Shared JSI frontend, native record lifetimes, callback frames, event queues and retirement enforcement; small engine-specific buffer/GC operations only.    |
| `packages/flax`                 | Canonical versioned native-module C header, checked Dart extension access and session retirement integration.                                               |
| Optional `@flax/ffi` package    | Developer-facing JS/TS pointer, callback and lifetime APIs; no public Dart FFI facade or per-library Dart dependency.                                       |
| Native library provider package | An npm package containing JS/TS exports, selected headers, generated typed adapters, source or verified binary, ownership metadata and acceptance fixtures. |
| Internal host/build adapter     | Flax-owned Dart bootstrap, native build hooks, descriptor resolution and retirement scheduling; one common integration, not a public plugin per library.    |
| FFI build-time tool             | Native dependency selection, build plans and header/provider generation; reuse application/module tooling without duplicating the Dart binding parser.      |

### Optional installation and native packaging

The intended developer action is to install a library's JS package and import its
exports. A library package declares its dependency on `@flax/ffi`; applications using
only the base pointer/callback API may install `@flax/ffi` directly. Neither action
requires editing the Flutter application's Pub dependencies or native projects. The
ordinary Flax application preparation/build command performs the following work:

1. Follow retained JS imports and prepared module delivery dependencies. Type-only,
   eliminated and unreferenced installed packages do not select a native provider.
2. Validate provider identities, supported targets, ABI requirements and package-owned
   inputs. Produce a deterministic build plan with input hashes from the locked npm
   installation; reject conflicting provider versions and files escaping their package.
3. Feed only those inputs into a common internal Flutter build hook. Use code assets for
   native compilation/embedding and generate only descriptor resolution/installation
   glue on the Dart side. Do not generate Dart wrappers for target functions.
4. Install only selected providers into each admitted Session. Removing an import must
   update native assets, generated resolvers and registration together, including when
   reusing an existing Flutter build directory.

Native package authors supply C/C++ code or verified target binaries and ownership
metadata in their npm archive. They do not need a companion Dart package. The internal
adapter may be a private Pub dependency owned by Flax; that is framework infrastructure,
not a second dependency a JS developer must install for each library.

This is an exception to the current paired Dart/npm capability convention. Keep the
existing format-2 package metadata unchanged until production tooling supports JS-owned
native providers explicitly. The experimental `flax.native.json` and internal build plan
are not accepted ecosystem formats or public commands.

Optionality has two separate acceptance conditions: no JS API loading/native
registration without a retained import, and no provider library in the packaged
application. A shared engine may still contain its generic native-module frontend. The
current experimental engine also contains fixture-specific FFI dispatch and ownership
code; splitting npm packages does not remove those engine bytes. Do not claim zero total
FFI binary overhead from a provider-only packaging check. Production placement or build
selection of that backend remains a separate size decision.

New native dependencies require rebuilding the host application. JS hot replacement or a
downloaded application archive cannot introduce executable native code; it can only use
compatible providers already packaged and admitted by the host.

Do not add an FFI backend to each engine package, compile another JS runtime, or pass
JSI classes, STL containers, C++ exceptions or V8 handles across provider-library ABIs.
The provider boundary is plain C with explicit sizes and ownership. C++ target code uses
a package-owned `extern "C"` shim that catches its exceptions.

### Runtime and module boundaries

Add a dedicated native-module extension, not fields appended to the size-checked
`FlaxApi` table. Its canonical header belongs beside the existing core headers; its
implementation belongs in the Flutter fork. This proposal allocates no ABI number.
Runtime creation and optional installation must check extension version/size and
required operations before evaluating a module that needs it.

The extension needs five groups of operations:

1. Install the optional capability and selected provider descriptors, returning an
   opaque installation handle.
2. Install that provider's JS exports into the existing session module delivery path.
3. Drain native events at an owning-isolate checkpoint.
4. Begin retirement and query whether native work is fully retired.
5. Release an installation after retirement; report busy destruction explicitly.

Runtime-signature function records hold a library scope and immutable ABI call
description. The following descriptor and host-service operations apply to compiled
providers with annotated ownership and callbacks.

Provider descriptors contain target ABI/layout identity, module identity, function and
resource descriptors, typed invocation entries and native stop/destruction entries.
Descriptors are immutable after installation. Function IDs resolve only inside their
provider; JS cannot supply a raw invocation address or replace ownership metadata.

Descriptors and code images may be shared across sessions, but provider state, callback
roots and native owners are session-local. Closing one session must not retire another
session's provider. A target library with process-global state needs an explicit native
serialization/ownership policy; the framework cannot promise isolation for its globals.

Installation also supplies a version/size-checked plain-C host-services table. Compiled
provider thunks use it to invoke an inline callback, submit an owned event, complete a
native task or acknowledge producer shutdown. These entries resolve opaque tokens in the
shared runtime; providers never call private engine C++ symbols. Only the inline entry
may reach JS, and it requires an owning active call frame. Event submission transfers
ownership only on success; failure leaves cleanup with the producer. Table and token
lifetime extends through quiescence, including any detached shutdown state.

A generated adapter receives a flat array of checked scalar/pointer cells and invokes
one correctly typed C function. Cells distinguish signed integers, unsigned integers,
floating values and pointers; they never encode pointers in `double`. The C descriptor
defines cell sizes, alignment, ownership of errors and result rollback. Return bytes
must be copied before temporary storage expires, or remain valid under an explicit
library-defined lifetime. Raw pointers never transfer cleanup responsibility to Flax.

Headers are parsed using the actual target triple, sysroot and compilation definitions.
Generated adapters and descriptors must agree with that target, verified with compiler
layout assertions. A header parser alone cannot infer lifetime, thread affinity or a
safe callback failure value; missing annotations reject the affected export.

## 4. Proposed JavaScript surface

The isolated npm package implements these two synchronous binding forms:

```javascript
import { dlopen } from '@flax/ffi';

const dynamic = dlopen('/path/to/packaged/libmath.dylib', {
  add: { arguments: ['int32', 'int32'], return: 'int32' },
});
const process = dlopen(null, {
  app_add: { arguments: ['int32', 'int32'], return: 'int32' },
});
console.log(dynamic.functions.add(20, 22));
console.log(process.functions.app_add(20, 22));
dynamic.lib.close();
process.lib.close();
```

These are experiment-only exports, not production package availability. Paths identify
actual native binaries; iOS framework paths end in `Foo.framework/Foo`. Static archives
must already be linked into the application. The prototype supports signed/unsigned
8/16/32-bit numbers, float/double, raw bigint pointers and return-only void, with at
most 16 arguments. Its floating arguments reject non-finite values. Incorrect native
signatures remain caller errors that can crash; symbol lookup cannot verify C types. It
implements a basic Node-style `DynamicLibrary`: constructor-only loading, delayed
`getFunction`, batch `getFunctions`, symbol lookup, snapshots, signature caching and
logical close. `dlopen` creates this same class; `dlclose` and `dlsym` are conveniences.
Signature arguments/return default to `[]`/`void`. Suffix detection and callbacks remain
deferred.

The same experimental JS package implements `getRawPointer`, `toArrayBuffer`,
`toUint8Array`, bounded `toString`, `exportString`, `exportArrayBuffer` and
`exportArrayBufferView`, plus optional `Buffer`, `toBuffer` and `exportBuffer`. The
primary Buffer import is `import { Buffer } from '@flax/ffi'`. A pinned pure-JS `buffer`
dependency supplies the same constructor as the compatibility aliases; unused Buffer
helpers remove its code from the emitted script. Experimental build aliases unify
`buffer` and `node:buffer`, with a JS-only Buffer subarray adaptation for Hermes. No
engine change or other Node API is required. Buffer-only imports from the FFI entry
select no native capability or provider binary. Explicit imports do not install a global
Buffer or a Node runtime. Buffer allocation/encoding/reads/slices stay in JS over
engine-managed byte storage; `getRawPointer` and native calls use the existing shared
C++ frontend. `getRawPointer` returns a raw `bigint` address, not an owning wrapper. The
caller must retain original JS storage while native code or borrowed views use it.
Output bytes are copied by default. `copy=false` borrows native memory without extending
its lifetime; the caller finishes every view before invoking the library's ordinary
release function. JS-owned sources retain their existing backing-store pin. Pointers
have no `.close()` method, and there is no `adopt` export.

Prefer useful named exports in library packages, whether handwritten scalar bindings or
future generated library adapters. Keep the ordinary call site short. The following is
illustrative provider-generated usage, not an implemented API:

```typescript
// Proposed generated module; none of these exports exist today.
import { openArchive } from '@example/archive';

const archive = openArchive('assets/sample.zip');
try {
  const entry = archive.openEntry('readme.txt');
  try {
    const bytes = entry.readAll(); // Independent Uint8Array snapshot.
    console.log(bytes.length);
  } finally {
    entry.close();
  }
} finally {
  archive.close();
}
```

The provider declares whether close is synchronous or returns a Promise; the generator
must preserve that distinction. Async subscriptions always expose an awaitable close
that completes only after the producer and in-flight callbacks have stopped.

Use a small common memory/handle surface, not an automatically generated mirror of
`dart:ffi`. Addresses are raw `bigint`; `0n` is NULL. Pointer arguments accept
`null`/`undefined` as NULL. Numeric addresses are rejected to avoid precision loss;
negative and target-width overflow addresses are rejected before native entry. This
representation neither validates an allocation nor retains its owner. Future callback
registrations have their own stop contract; no common owned-buffer class is needed.

Named exports can be installed lazily on first provider use, but installation failures
must precede the first native invocation. Missing host configuration fails explicitly;
an npm import cannot activate or download a native library.

### Scalar and aggregate conversion

| C shape                                      | JS representation                             | Required checks                                                                                                                 |
| -------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `bool`, signed/unsigned 8/16/32-bit integers | Integral `number`                             | Preserve Node's numeric `bool` input convention; validate exact type/range and reject fractions, NaN and infinity for integers. |
| Signed/unsigned 64-bit integers              | `bigint` result; bigint or safe integer input | Exact range; never round a bigint through Number.                                                                               |
| C ABI-specific and pointer-sized integers    | Width-appropriate Number/bigint               | Derive width/signedness from the target ABI, not the build host; numeric inputs additionally require safe-integer checks.       |
| `float`, `double`                            | `number`                                      | Preserve IEEE values unless the selected API imposes a stronger contract; float rounds to its native width.                     |
| Pointer, opaque handle, pointer plus length  | Raw `bigint`; NULL is `0n`                    | Target-width integer range; actual lifetime, extent, alignment and access remain caller responsibilities.                       |

UTF-8 input strings use call-owned storage and explicit length where available. The
low-level Node-compatible conversion preserves the encoded bytes and appends a NUL;
native string APIs determine where a NUL-terminated string ends. A higher-level library
adapter may explicitly reject embedded NULs. The raw `toString` helper accepts
NUL-terminated memory with an optional explicit scan bound. The caller must ensure those
reads are valid.

The first aggregate stage may pass structs by pointer, but full acceptance includes
by-value structs/unions, nested and inline arrays, variable array tails and packed
layouts to the same extent as Dart FFI. Validate size, alignment, field offsets and
argument/return classification against the target C compiler. A compiled adapter covers
layouts that libffi cannot safely call directly; do not silently treat a union as an
arbitrary struct. Variable-tail allocation includes the explicit element count, and a
by-value copy must not pretend to carry the tail's allocation.

Variadic bindings specify the fixed parameter count and the promoted types of every
actual variadic argument. Apple arm64's variadic ABI requires its own acceptance;
treating a variadic call as a fixed-signature call is incorrect. Preserve Node's
conflict check for named function caches. A separate function-address binding capability
must allow multiple explicit variadic shapes for the same symbol, as Dart's pointer
casts do. The extension's JS syntax remains to be designed.

C enums retain target width and signedness, not an assumed 32-bit layout. Out-parameters
use explicitly allocated initialized slots; document which outputs are valid on success
and which native function releases them. Pointer-returned functions and native global
variables use the same type/layout conversion rules as named function bindings.

Native error codes remain values unless the provider declares a conversion to an error.
Capture `errno`/platform last-error on the calling native thread before any other work.
Never infer ownership or success solely from a non-null pointer return.

## 5. Raw pointers and manual release

The common JSI layer converts raw bigint addresses directly, preserving all pointer bits
without a Number conversion. It has no public pointer object, owner registry, adoption
step or pointer close. `getRawPointer` returns the source slice's actual address;
arithmetic uses ordinary bigint operations. A raw address cannot be revoked when its
originating library or JS source disappears.

Call a C library's allocation and release functions through ordinary bindings. Free
caller-owned allocations exactly once, after native use and all zero-copy consumers
finish, and before closing the binding. Under the default raw-pointer contract, GC,
library close and session destruction do not call C destructors. The runtime cannot
recognize a free function, detect reused addresses, validate arbitrary allocation bounds
or prevent double free/use after free.

For JS-owned memory, retain the original Buffer/ArrayBuffer/view until native code and
borrowed views finish. A bigint pointer and a borrowed view do not retain that storage.
Do not detach, transfer or resize the source while its address is in use. Obtain a new
address after transfer; never dereference an old address to test whether it is valid.
Passing JS storage to native code never grants permission to call a C free on it.

Borrowed static/library pointers follow their actual owner's lifetime and mutability. A
nonzero address does not imply ownership. All invalid accesses and incorrect native
signatures remain caller errors that can crash the process.

## 6. Binary memory and exported views

The runtime-signature helpers share one V8/Hermes implementation. Captured intrinsic
ArrayBuffer/TypedArray/DataView getters validate sources and offsets without trusting
replaceable properties. Shared, resizable, detached and forged sources are rejected.
Lengths/capacities are checked integers limited to 16 MiB in this prototype; raw
addresses have no remembered slice bounds. Pointer-width overflow and null accesses with
nonzero lengths are rejected, but actual memory extent cannot be checked.

These are prototype guards, not the final capability ceiling. Production lengths must
follow checked native/engine limits rather than a fixed 16 MiB cap. Shared storage and
broader encodings need explicit engine/format acceptance; exposing a resizable buffer
must never promise an address remains valid after resizing, transfer or detachment.

`toArrayBuffer`, `toUint8Array` and `toBuffer` copy by default. `false` creates a
borrowed view over the supplied address/length. Its native peer stores only those
values, without retaining JS source storage, freeing C memory or delaying manual
release. Keep the owner alive and finish every view/slice/exported Dart byte view before
release or reuse. Copied output remains valid after release. Empty output views carry no
native peer.

`toBuffer` wraps the ArrayBuffer result without a second copy. `exportBuffer` validates
Buffer kind before common overlap-safe byte export. Native memory can outlive a VM only
when its actual owner keeps it valid; the fixture's cross-VM test uses writable
process-lived bytes. No destructor scheduler is introduced.

`toString` scans NUL-terminated UTF-8, optionally within maxBytes; NULL returns `null`.
Malformed UTF-8 is replaced. `exportString` writes complete UTF-8/UTF-16LE bytes plus a
terminator, without partial writes on insufficient capacity. Byte exports respect actual
source offsets. A writable view never makes read-only C memory writable.

Library/installation close rejects new operations and calls but cannot revoke bigint
addresses or existing views. Dynamic images remain process-pinned independently.
Background borrowing, callbacks and producer shutdown remain separate work.

## 7. Synchronous calls and reentry

Before invoking native code, create one call frame containing validated arguments,
borrowed-storage leases, temporary strings, inline callback bindings and an error slot.
Reuse immutable signature metadata; do not look up symbols or parse signatures per call.

The generated typed adapter performs the actual ABI call. It receives native values and
never enters either engine directly. The shared frontend converts the result only after
the call returns. All temporary storage and in-flight leases unwind on every exit path.
C++ shims catch exceptions inside the provider boundary; bridge exceptions become JS
errors. Hardware memory faults and undefined behavior are not JS exceptions.

Nested JS -> native -> JS -> native calls push separate frames. A callback error belongs
to its frame and cannot overwrite another call's error. A direct host function must use
the runtime's entry/depth, same-thread and disposing checks; bypassing the existing
outer Dart callback does not bypass runtime ownership or GC coordination.

Do not drain Promise microtasks inside an inline callback. Let the existing outer
session checkpoint run them after the active native call stack has unwound.

Native code still runs on Flutter's UI thread for a synchronous call. Direct FFI does
not make a blocking operation asynchronous. Background work must be explicitly selected
and supported by a provider whose native API is safe on that executor.

## 8. Callbacks without runtime code generation

The compiler emits real native functions for each selected callback signature. No V8
Fast API dependency, JIT trampoline, executable-memory allocation or `libffi` closure is
required for the initial callback implementation.

| Callback shape                                              | First-version behavior                                                                                                                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inline, with `user_data`                                    | Compiled thunk receives a native token and enters the owning active call frame.                                                                          |
| Inline, without `user_data`                                 | Compiled thunk for the selected callback parameter site uses an owner-thread stack of active frames; nesting restores the preceding binding.             |
| Retained, notification-only, with `user_data`               | Native token copies an event and returns; JS runs later at a session checkpoint. Requires the retirement barrier.                                        |
| Retained, synchronous JS result on arbitrary native threads | Rejected; no worker waits for JS on the UI thread.                                                                                                       |
| Retained callback without `user_data`                       | Deferred, not excluded: precompiled address slots need explicit capacity, owner identity and release after native quiescence. No unbounded slot promise. |

### Required callback capability beyond the first slice

Preserve Node-style registration/unregistration and strong/weak callback references for
same-thread callbacks. Both context-bearing and context-free retained callbacks are
required; finite precompiled entry capacity must fail explicitly when exhausted rather
than aliasing two live registrations. New callback signatures may need a native rebuild
on iOS, just as Dart callback signatures are selected at compilation time.

Dart's
[listener callback](https://api.dart.dev/dart-ffi/NativeCallable/NativeCallable.listener.html)
is an asynchronous void notification: the producer does not wait for JS and pointer
payloads need an explicit validity/copy contract. This is the queue-based path below.

Dart 3.13.5 also contains the experimental
[`isolateGroupBound` callback](https://api.dart.dev/dart-ffi/NativeCallable/NativeCallable.isolateGroupBound.html):
it can run from other threads and return a native value, with restricted shareable
handlers. Its capability needs a separate Flax experiment. An arbitrary worker must not
enter a live V8/Hermes runtime, and a synchronous UI-thread wait can deadlock if that UI
thread is already waiting for the worker. Isolated callback runtimes or a restricted
compiled handler require explicit design and acceptance; neither a listener queue nor
the existing fixed fixture demonstrates this capability. Track it as a required
experimental parity gap, without promising arbitrary JS closures on arbitrary threads.

### Inline callback contract

The native API must invoke the callback on the owning thread before the selected outer
call returns. The thunk verifies the active frame and token. Arguments borrowed from the
callback expire when that callback returns; escaping bytes requires a copy and escaping
resources requires a provider-defined retain operation.

JS exceptions never unwind through C. Each selected callback must declare a valid native
failure result. On JS error, store the original error in the active frame, return the
sentinel, and throw the recorded JS error after the outer native call has returned. The
native API/shim must be able to complete safely after that sentinel. There is no
universal safe sentinel; reject callbacks for which none can be specified. Promises are
invalid results for synchronous native callbacks.

Context-free thunks are keyed by provider/function/parameter site as well as signature.
Two different callback arguments with the same C signature must not accidentally invoke
the same JS function. Nested calls through the same site push and restore their own
binding; this is a stack, not one global current-callback variable.

A wrong-thread invocation does not touch JS; the thunk returns the sentinel and records
a native violation for owner-thread reporting. Keeping a transient callback after the
outer call violates the native API contract. The framework cannot make an arbitrary
stale native function/context pointer safe after its documented lifetime.

### Retained notification registration

A registration owns its JS callback strongly while the native library can call it. This
is a real external root and ends only when the source is quiescent. Losing the JS
registration wrapper does not unregister a live native callback or prove it is unused.

The token contains native state and a session generation, not a `jsi::Runtime*`, Dart
business callback or raw JS object. Workers can check a stopped flag, copy bounded
payloads and increment/decrement an in-flight counter. JS references stay exclusively in
the owner-thread registry, detached from worker state.

Copied payloads must not contain borrowed pointers into native callback-stack memory.
Strings/bytes require declared lengths and copy limits. Ownership-transfer payloads need
a native release function that remains callable if the message is discarded; the first
slice should prefer scalar values and copied bytes.

A callback registration must come with a provider-defined stop operation and proof of
quiescence: no future callback can start and all started callbacks have returned. An
in-flight counter reaching zero is insufficient while the producer can start again.
Token/context memory and provider code stay alive until that proof exists. Generations
prevent misdelivery, but do not make a freed context address safe to access.

## 9. Events, workers and bounded scheduling

Native producers push owned events into a queue bounded by both message count and
payload bytes. One coalesced control wakeup tells the UI isolate to drain it. Use a
native port message containing only installation/session identity; worker threads do not
execute Dart code or invoke `NativeCallable.isolateLocal`. The port receiver asks the
existing session host to run a checkpoint; only that checkpoint reenters native/JS.

The proposed wakeup mechanism is `Dart_PostCObject_DL` to a native port obtained from an
owner-isolate ReceivePort, installed once for the FFI session rather than per callback.
Keep it alive through retirement. A rejected post never transfers payload ownership to
Dart; native cancellation/cleanup must still dispose the queued work. Port publication,
API-DL initialization and isolate teardown need an explicit engine acceptance case.

The shared event drain checks the session generation, registration state and lifecycle
before resolving a callback. It releases stale payloads without executing JS. Process a
bounded batch, run the normal session microtask checkpoint, and yield to Flutter before
another batch. Queue sizes and drain budgets need prototype measurements; they are
implementation limits, not new application tuning APIs in this proposal.

Overflow never silently discards a required completion. Mark the source failed, request
native cancellation and report one owner-thread error using a reserved control slot.
Void notification APIs cannot provide backpressure; their adapters must tolerate this
stop path. A source that cannot be stopped safely is not admitted as a managed source.

There is no generic worker that calls JS-capable native functions under a mutex. A
selected background function declares its executor/thread-affinity contract and owns
copied arguments and native results. Its completion is an event; Promise settlement
occurs only on the owning checkpoint. Cancellation rejects the JS operation promptly
while native cleanup can continue behind the retirement barrier. Native work may only
report completion after results and cleanup ownership have been transferred once.

## 10. Cleanup, GC and session shutdown

### Manual C release and future internal cleanup

Raw C allocation release is an ordinary synchronous native call, executed on the calling
thread. Applications obey the native API's allocator pairing and thread requirements,
using `try/finally` where appropriate. They free application-owned C resources before
closing their binding/session. The current prototype has no GC fallback,
custom-destructor registration or owner-isolate cleanup scheduler for these pointers.

The remaining retirement design concerns future FFI-owned callback registrations, events
and tasks. It does not take over application-returned C allocations. Internal payload
cleanup must preserve its native allocator/thread contract, and callback roots must stay
alive until producers are quiescent. A GC finalizer cannot enter JS, join workers, run
thread-affine cleanup or unload a library. These mechanisms remain deferred until the
corresponding callback/async capability is implemented.

### Optional allocation and native finalization

Dart capability parity also requires native allocation with explicit alignment, paired
manual free, zero-initialized allocation and optional scoped allocation conveniences.
These are opt-in helpers, not new methods on bigint pointers. `Buffer.alloc` remains
useful JS-owned storage, but it is not a portable guarantee of arbitrary native
alignment, allocator pairing or validity after its owner is collected.

An optional native finalizer capability must support explicit attachment/detachment of a
C cleanup function and token to an owning JS object, plus external-memory accounting. It
must not infer ownership from a pointer, require `adopt`, or change the default
manual-release path. A manual close detaches the registration before invoking cleanup;
borrowed views never register a free implicitly. Native cleanup code must remain loaded
until all attachments are retired. A borrowed view does not retain that owning object;
the caller must keep it alive until native code and all borrowed views finish using it.

Match [Dart NativeFinalizer](https://api.dart.dev/dart-ffi/NativeFinalizer-class.html)
semantics deliberately: ordinary JS `FinalizationRegistry` alone does not guarantee
cleanup before normal runtime shutdown. The shared native backend needs exactly-once
registration retirement, permitted cleanup-thread rules and shutdown acceptance on both
engines. Finalizers must not enter JS, block on JS-dependent work or promise cleanup
after abrupt process termination. This capability is planned, not implemented by the
current raw-pointer prototype or certified by the older managed-resource fixture.

### The required native retirement barrier

The current `_Session._tryClose()` condition is insufficient for retained native work.
Add an FFI-specific native retirement condition to the existing close sequence. Preserve
the synchronous `FlaxPluginInstance.close/dispose` signatures; do not create a new
general async plugin framework solely for this capability.

When the internal FFI installation closes, it starts native retirement. A core/engine
extension reports outstanding native retirements; `_tryClose()` must require that count
to be zero before `disposeHost()` or runtime destruction. Native control wakeups remain
accepted while closing and trigger another check. Sessions without native FFI work keep
the existing close behavior. This is a real session lifecycle change and requires shared
engine and session regression coverage before async FFI is enabled.

The shutdown sequence is:

1. Enter closing; reject new user FFI calls, registrations and provider installations.
   Allow only internal cleanup, cancellation and control-drain operations.
2. Disable JS delivery and stop/cancel native producers and jobs. Settle affected JS
   Promises through the existing closing checkpoint while the runtime is still alive.
3. Await producer quiescence, active native frames and callbacks. Drain/discard owned
   messages; release callback JS roots on the UI thread only after they cannot run.
4. Release FFI-owned callback/event/task resources in their declared order. Raw C
   allocations remain application-managed; keep JS-owned storage independent of the VM.
5. Retire the native port/wakeup, release installation references, then run the existing
   plugin/module disposal and runtime destruction. Complete `FlaxSession.close()`.

Do not block the UI waiting for a worker that needs a UI callback, force-free a callback
on timeout, or treat cancellation as evidence that native code has stopped. If a
provider cannot prove quiescence, report the provider/resource through host diagnostics
and keep the close Future pending with its native owners protected. No successful close
is reported and no unsafe timeout fallback is introduced. Managed providers must
demonstrate a finite, JS-independent stop path before being accepted.

Shutdown requested inside an active JS/native callback only marks closing. Destruction
waits for that call to unwind; the internal retirement condition must not depend on a
user-visible Promise that is itself waiting for `Session.close()`.

### Partial install, hot reload and isolate termination

Installation failure unwinds staged resources in native order. A function exposed to JS
before a later failure can still be retained, so its record becomes retired and checked,
not dangling. Failed provider startup must stop any producer it already started before
returning an installation failure.

Development hot reload cannot change a live provider's native layout or replace its
code. A descriptor identity/signature/lifetime change requires rebuilding and restarting
the session/application. Ordinary JS replacement must close its prior registrations; HMR
cannot infer that a native library released an old callback address.

Graceful close is the supported deterministic cleanup path. Forced isolate shutdown
needs an engine shutdown hook that revokes delivery and native-only stop operations. Any
unavoidable outstanding native context must be detached from all JS/Dart/runtime
pointers, with its token and code image retained until producers are quiescent. This
prevents runtime access after destruction; it does not promise prompt native resource
release when a provider violates its stop contract. This path needs hot-restart and
shutdown fault-injection acceptance, not just successful graceful-close tests.

## 11. Native library loading and iOS

The application host opts into the optional native capability.
`dlopen(path, definitions)` opens a concrete library binary with
`RTLD_NOW | RTLD_LOCAL`, resolves exported symbols and prepares immutable call
descriptions. `dlopen(null, definitions)` uses `dlsym(RTLD_DEFAULT, name)` to search the
executable and globally visible loaded images. An image loaded with `RTLD_LOCAL` is
outside that process lookup scope. Both sources share argument conversion, `ffi_call`,
result conversion and lifetime checks.

Native package discovery must still select and package dependencies at build time;
`dlopen` does not import an XCFramework slice or link an archive. The isolated loader
accepts existing binary paths relative to the process working directory or absolute
paths. Production module preparation must connect selected native assets to their actual
packaged binary paths. Dart code-asset identifiers are not C++ loader paths. Native FFI
is a trusted capability, not a security sandbox or a safe boundary for untrusted JS.

Descriptor-backed providers expose one generated C descriptor getter. The internal
adapter resolves it once using `@Native`/code assets or the platform's packaged-library
mechanism, then passes its address into the checked native-module installer. A generated
native registry may root these getters and expose one common code-asset entry. Regular
function calls use the generated native entries. No target function needs a Dart
wrapper. Do not assume a Dart code-asset identifier is a path that C++ can independently
`dlopen`.

Static linking must retain the archive objects and export the symbols under release
dead-stripping. Descriptor-backed providers may root their getter/table; process
bindings need explicit symbol/linker roots without a descriptor. Opening a raw `.a` at
runtime is unsupported. The dlopen fixture links a real archive into the executable and
verifies its exported C entry points.

`lib.close()` revokes that binding's callables and lookups, but cannot revoke raw
addresses. Closing a process binding never unloads the executable or releases
`RTLD_DEFAULT`. The first version pins opened dynamic code images for the process
lifetime, deduplicated by canonical path; closing bindings or sessions does not unload
executable code. Publication of a native scope follows image pinning; later symbol/batch
failures close only their scope. Raw pointers never free target allocations. Native
allocation release is a normal library call and must precede binding close; surviving
byte views do not postpone that call. `dlclose` delegates to the scope close; there is
no hot unload contract.

Process pinning is a prototype limitation, not the final Dart/Node compatibility
contract. Production needs loader-handle release after in-flight calls and any FFI-owned
callback/finalizer code references are quiescent. Raw addresses and borrowed views
cannot prove that a library is unused; callers must stop using them before close. Normal
loader-handle release does not promise OS unmapping or hot replacement. Separate
executable-only symbol lookup, symbol-presence checks, code-asset resolution, returned
function pointers and native globals remain required parts of the target.

| Platform                     | Proposed packaging and acceptance                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| macOS arm64 / V8             | Packaged signed dynamic library or static provider; same identity/signing policy as the containing application. |
| Android arm64 / V8           | ABI-specific packaged `.so`; preserve the engine's C++ runtime ownership and 16 KB page compatibility.          |
| iOS arm64 simulator / Hermes | Precompiled static provider or correctly embedded framework; simulator debug gate.                              |
| iOS arm64 device / Hermes    | Precompiled static provider or signed embedded framework; device release/AOT gate with source removed.          |
| Other targets                | Fail before module installation until engine, ABI and provider packaging have acceptance.                       |

For the iOS baseline, use precompiled libffi calls and selected C/C++ adapters/callback
thunks, statically linked or embedded as code-asset frameworks by Flutter. Runtime
signature calls use `ffi_prep_cif`/`ffi_call`, not the libffi closure allocation API. No
writable executable allocation, JIT entitlement or runtime instruction patching is
required by this design. The native ABI remains available even though Hermes interprets
JS. Public system APIs must be selected explicitly; do not assume arbitrary system
symbols or private frameworks are available. Distribution review remains separate from a
local development-signed device test.

Avoid package-local copies of JSI, a second Hermes/V8, or inconsistent C++ runtimes. For
a provider that is plain C, avoid introducing a C++ dependency. For C++ targets, keep
objects and allocations behind their C shim and destroy them through that shim.
Allocator ownership must not cross DLL/library boundaries by accident.

## 12. Performance contract

Use shared JSI host functions and the same native ABI call backend on both engines.
Runtime-signature calls prepare `ffi_cif` and resolve symbols at binding time; compiled
adapters remain an option for annotated providers. Do not introduce a V8-only fast
backend before measuring the common path. JSI is a direct native entry, not a zero-cost
call; validation and conversions still have a cost. Cache immutable call descriptions
and symbol resolution per binding.

Measure the same functions and data on the same target with direct C, existing JS ->
Dart -> Dart FFI, and proposed JS -> native adapters. Include warmup, optimized and
unoptimized V8, interpreted Hermes, release/AOT, allocation counts and payload copies.
Report distributions and frame interference, not only a best-case throughput number.

Representative workloads are scalar calls, small buffers, 1 MiB buffers, inline callback
reentry and bounded worker notifications. Batch a real workload at its natural API
boundary before optimizing individual native call instructions. Background scheduling
and copied inputs must be measured separately from synchronous invocation overhead.

The earlier fixed-provider experiment records scalar benchmark samples; these do not
measure the newer libffi runtime-signature path. They establish no stable speedup,
callback capacity, whole-process leak result or physical iOS timing. Buffer workloads
and frame interference still require measurement.

## 13. Focused experiments and acceptance gates

Gate A's direct-call mechanism passed through the existing ABI-2 registration entry; see
its [source and result scope](../../experiments/ffi_gate_a/README.md#results). It did
not require a new module extension or an engine change. The
[shared fixture and receipts](../../experiments/ffi_full/README.md#evidence-and-interpretation)
exercise Gates B-D and part of E through an experimental plain-C provider and isolated
engine overlays. The fixture close driver is not production `FlaxSession` integration;
its header selection generates only the fixture's typed C table. iOS device release/AOT
builds with retained provider symbols, but runtime verification remains deferred in
favor of the simulator. Actual Flutter hot restart and full current-framework mobile
acceptance remain open. Keep engine changes in a separate branch and preserve existing
engine outputs.

The [optional npm package experiment](../../experiments/ffi_package/README.md) tests the
revised package boundary with real local npm archives, retained-import selection and
internal Flutter code-asset hooks. macOS V8 debug/release, iOS simulator Hermes and
Android V8 execute successfully; iOS release is unsigned build-only. Unused, eliminated
and uninstalled debug cases contain no provider code asset and install no JS FFI module.
Incremental removal requires reconciling stale provider outputs, not merely returning an
empty hook result. This does not certify production module delivery, general provider
packaging or zero shared-engine FFI bytes.

The [dlopen experiment](../../packages/flax_ffi/test/runtime/README.md) independently
verifies runtime scalar signatures against a packaged dynamic framework and C symbols
from an archive linked into the executable. V8 and Hermes compile one common JSI/libffi
backend. It also implements NUL-terminated strings/byte copies, raw bigint pointers,
borrowed native zero-copy views and manual library-defined release. The earlier
fixture's annotated resource types and callback/worker semantics are not implicitly
available through arbitrary runtime signatures; this loader adds no generator or
callback API.

| Gate                      | Smallest useful experiment                                                                              | Evidence required                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A: direct entry           | Provider with integer/double calls and one opaque owned counter                                         | Both engines return correct results; instrumentation shows zero Dart business-dispatch entries per native call; install may use Dart.                          |
| B: manual pointer release | Raw address arithmetic, explicit JS retention, manual free, native-view GC and copied output after free | Caller free runs immediately and once in the fixture; view GC never frees C memory; copied bytes survive free. Native faults remain caller errors.             |
| C: inline callbacks       | With-context callback, context-free comparator, nested calls and JS failure sentinel                    | Correct order/results, no exception crossing C, no executable-memory allocation and wrong-thread handling.                                                     |
| D: retained work          | Worker-owned notifications with copied payloads, cancellation, overflow and callbacks racing close      | No worker JS/Dart entry; no callback after quiescence; close Future waits; queues/registrations return to baseline.                                            |
| E: packaging and reset    | Relocated iOS device release/AOT, simulator, Android and macOS; hot restart/partial install             | Precompiled symbols survive linking, no JIT requirement for FFI, old-generation events do not reach new sessions and shutdown hooks leave no runtime pointers. |

Run the shared runtime and package application contracts appropriate to the changed
areas. Existing command names include `dart run melos run check:runtime`,
`dart run melos run check:runtime:v8` and
`dart run tool/check_engine_application.dart debug|release`; platform selection and
available engine builds still follow the [runtime guide](runtime.md#verification). New
FFI fixture/generator commands must be implemented before being documented as working
commands.

Required fault cases include failed destructor/startup, close from a callback, worker
completion after cancellation, invalid pointer kind, output wrapper creation failure and
a stop operation that never confirms quiescence. Use deterministic latches and ownership
counters; avoid sleep-based race tests or tests that only mirror descriptor fields.
Real-device callback ABI and code-signing checks cannot be replaced by host unit tests.

## 14. Delivery sequence and decision gates

1. Complete the portable Node scalar/memory surface on the existing shared call path:
   64-bit and ABI-specific types, direct Buffer/view/string arguments, constants/suffix,
   primitive pointer loads/stores and package entry compatibility. Compare native
   results on V8 and Hermes, including the simulator's Apple arm64 ABI.
2. Add Dart-required aggregate/layout and symbol capabilities: compiler-checked structs,
   unions, arrays, packing, out-parameters, function-pointer calls, native globals and
   explicitly typed varargs. Use compiled adapters for unsupported libffi layouts; keep
   these APIs clearly marked as Flax extensions where Node has no equivalent.
3. Add same-thread and retained callback entries, including context-free registrations,
   then asynchronous notifications with the production session retirement barrier.
   Separately experiment with restricted cross-thread synchronous callbacks; do not
   substitute listener delivery for a native return value. Gates C and D remain
   required.
4. Add optional aligned/scoped allocation, explicit native finalizer attachment and
   loader-handle release. Promote package admission, selected code assets, static and
   prebuilt libraries into real application/module tooling. Keep ordinary C calls direct
   and allocation ownership explicit; code generation remains a separately scoped task.
5. Verify the complete capability matrix with target-compiled C controls on both engines
   before claiming Dart capability parity. Pass Gate E, normal/forced retirement and
   representative workload measurements before production platform acceptance. Physical
   iOS release and signing remain separate from simulator acceptance.

The exact public extension syntax, C layouts, queue/entry limits and native shutdown
hook details remain subject to these experiments. The selected target is Dart
native-library capability with portable Node API compatibility through direct shared
native invocation. Unverified details are not accepted ABI contracts, and a partial
prototype must not be described as having full Dart FFI capability or full Node.js
compatibility.

## 15. Implementation impact map

| Area                                                | Future work and compatibility requirement                                                                                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core native headers and generated Dart declarations | Add a separate checked extension and generate declarations through the existing isolated FFI tooling; preserve ABI 2 and existing table layouts.                                |
| Maintained Flutter fork                             | Add common provider dispatch, native owner/callback state and event retirement; V8/Hermes adapters only implement unavoidable buffer/GC differences.                            |
| Core runtime/session/host                           | Add narrow native installation access, a generation-checked control wakeup and `_tryClose()` retirement condition; preserve current plugin APIs and non-FFI session behavior.   |
| Optional FFI capability and provider packages       | Add JS-only public npm delivery, native descriptors and TS/C adapters; internal Flax build/bootstrap owns Dart glue, with no per-library Pub dependency or Core target library. |
| Validation and documentation                        | Add focused shared-engine fixtures, platform packaging checks and proposed-to-implemented documentation updates only as evidence arrives.                                       |

## 16. Reference designs and limits of the evidence

The external references below informed design choices; they do not establish Flax
compatibility or platform acceptance.

| Reference                                                                                                   | Relevant fact and design consequence                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dart compile-time FFI signature constraint](https://dart.dev/tools/diagnostics/non_constant_type_argument) | Arbitrary runtime signature construction cannot be obtained merely by exporting Dart FFI generics.                                                                          |
| [Node.js FFI](https://nodejs.org/api/ffi.html)                                                              | Experimental runtime signatures and native memory/callback APIs are useful references; Node-specific fast calls and environment APIs are not portable Flax implementations. |
| [Koffi callbacks](https://koffi.dev/callbacks)                                                              | Predefined native callback entries are an established alternative to runtime code generation; callback lifetime and thread scheduling remain explicit.                      |
| [libffi](https://sourceware.org/libffi/)                                                                    | Supplies runtime ABI invocation machinery, not JS conversion or resource lifetime; the isolated dlopen backend uses statically linked calls without closure allocation.     |
| [Flutter native build integration](https://docs.flutter.dev/platform-integration/bind-native-code)          | Build hooks/code assets can build and package provider code; their Dart resolution does not automatically expose a C++ loader API.                                          |

See also
[Flutter's static/dynamic linking description](https://docs.flutter.dev/platform-integration/legacy-ffi-plugin)
and
[Dart listener callback scheduling](https://api.dart.dev/dart-ffi/NativeCallable/NativeCallable.listener.html).
The latter demonstrates asynchronous cross-thread notification semantics; this proposal
uses a native port wakeup rather than calling the current synchronous Dart trampolines.
