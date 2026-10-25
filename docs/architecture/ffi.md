# Direct JavaScript FFI

## Contract and ownership

`@flax/ffi` is an optional, standalone JavaScript package. Its API target is portable
Node FFI, extended for Dart FFI's native-library capabilities. This is a target, not a
claim of complete behavioral parity. There is no developer-facing Dart package. Core
owns the internal Session adapter and its versioned engine extension; the maintained
Flutter fork owns JSI/libffi and the V8 adapter. Native ABI 2 and the existing
binding/GC table versions stay unchanged.

The [package guide](../../packages/flax_ffi/js/README.md) contains executable API
shapes, ownership rules and native package metadata. The earlier
[proposal](ffi-proposal.md) is historical design context, not the current API contract.

The ordinary call path is JS -> JSI host function -> validated call frame -> `ffi_call`
-> C ABI. Dart participates in installation, native asset build hooks and safe Session
checkpoints. It does not dispatch ordinary native calls, marshal their payloads or
register functions individually. Each bound signature prepares one immutable CIF.
Reentrant calls use independent argument/result storage.

`callWithErrno` captures a cleared errno immediately after the call, before conversion
or checkpoint work. `callAsync` reuses the prepared binding on a native worker and
settles its Promise at an owner checkpoint. Native workers never enter JSI or Dart. The
optional `captureErrno` result is `{ value, errno }`. Thread-affine library APIs remain
the caller's responsibility. Background calls are bounded to 32 per Session; submission
rechecks the bound and retirement state after argument getters can reenter JS.

Async byte arguments use private snapshots grouped by backing store, preserving view
aliasing. Completion validates all output views before copyback. Input storage must not
be modified until completion. Raw native addresses retain their caller-defined lifetime;
`keepAlive` roots associated owners until the worker exits. Abort prevents copyback but
cannot stop arbitrary C. Promise rejection waits for native exit, so `finally` may
safely free input pointers. Close rejects active libraries. Session retirement stops new
work and producers, cancels waiting callbacks, joins completed workers, settles Promise
cleanup, and only then finalizes and destroys the VM. Producer stop/join happens before
waiting for workers because an active native call may wait for that stop signal.

An owned pointer result can specify `onDiscard`, a bound native `void(pointer)` cleanup
function. Cancellation/delivery failure releases its undelivered result once; forced
shutdown invokes the same cleanup without JS. Its library stays pinned until completion.
Normal Session close delivers completed results and drains JS cleanup before retirement.
Forced process termination still cannot guarantee cleanup.

Optional imports control JavaScript inclusion, installation and library code assets. The
matching Apple engine already includes the loader/libffi backend; tree shaking does not
remove those bytes from the shared Flutter engine binary.

| Area            | Implemented contract                                                                                                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Libraries       | `DynamicLibrary`, file/process/executable lookup, `dlopen`/`dlclose`/`dlsym`, deferred and batch binding, signature caching, symbol snapshots and actual loader handle release.                                  |
| Types and calls | Fixed-width and ABI integers, floats, pointers, Node numeric `bool`, boolean `c_bool`, by-value structs/unions, packing, arrays, typed varargs, globals, function pointers, background calls and per-call errno. |
| Memory          | Raw bigint addresses, primitive get/set, string/byte helpers, copies by default, borrowed views, JS Buffer compatibility, aligned allocation, Arena and optional native finalizers.                              |
| Callbacks       | Synchronous owner-thread callbacks, retained/weak handlers, copied cross-thread listeners, owner-delivered synchronous closures and isolated cross-thread source handlers.                                       |
| Integration     | Lazy installation, native wake ports, Session retirement, shutdown hooks and npm code assets from source/static/dynamic/framework/XCFramework/CMake inputs with declared dylib dependencies.                     |

## Compatibility target

The capability target is Dart FFI's native-library access, with the portable
[Node FFI interface](https://nodejs.org/api/ffi.html) as the preferred JS surface.
`node:ffi`, default/named ESM and static CommonJS imports resolve through the build
adapters. Optional `Buffer` comes from pinned `buffer@6.0.3` and shares its constructor
with `buffer`/`node:buffer`. Buffer remains JS over typed storage; neither engine adds a
native Node Buffer class. Narrow compatibility adaptations are in `buffer-compat.js`.

The current implementation covers portable Node names, bigint addresses, pointer-like
arguments, callback registration and copied/borrowed memory. Portable error
classes/codes, signature-property handling and complete binding-contract caching share
focused Node comparison fixtures. This is not general Node runtime compatibility. The
additional Flax APIs cover native layouts, ABI types, typed varargs, address binding,
allocation/finalization, code assets and callback scheduling modes. `bool` remains the
Node uint8 alias; `c_bool` provides boolean-valued C `_Bool` conversion.

Node's libuv loop pointer, permission flags, virtual filesystem, general Node modules
and V8 Fast API/generated trampoline optimizations are outside this contract. They are
not required for Dart FFI capability. All target calls use the same portable backend; no
executable code is generated for signatures or callbacks on iOS.

## API convergence

Use Node's portable JavaScript interface as the base contract and Dart's portable
native-library capabilities as the completeness checklist. A missing Node operation is a
reason for a Flax extension, not for omitting the native capability. Reproduce Node
names, arguments, defaults, return values and errors wherever the operation applies. Do
not reproduce Dart class hierarchies, annotations or isolate APIs merely to match their
spelling. Sharing an API style does not require identical VM machinery.

The comparison baseline is Node v26.12.1's built-in `node:ffi`, not `ffi-napi`, and the
pinned Dart 3.13.5 SDK plus `package:ffi`. Review upstream API changes deliberately;
experimental Dart APIs have separate capability and acceptance decisions.

### Portable Node contract

| Area                  | Contract to preserve or align                                                                                                                                                    | Current status                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Libraries             | `DynamicLibrary`, `dlopen`, `dlclose`, `dlsym`, function/symbol lookup, cache identity, snapshots, close and `Symbol.dispose`. Keep `dlopen(null)` for exported process symbols. | Implemented, including library-closed errors and equivalent-alias cache identity.                                                     |
| Signatures and values | Node type names/constants, `arguments`/`return`, default values, exact numeric conversion, bigint pointers and pointer-like arguments.                                           | Implemented: unknown metadata is ignored, absent properties default, and explicit undefined type/argument properties are rejected.    |
| Memory and Buffer     | Primitive get/set, string/byte export, `getRawPointer`, `toBuffer` and `toArrayBuffer`. Copy by default; explicit `false` borrows storage.                                       | Implemented with focused error comparison; generic Node Buffer module compatibility remains outside this contract.                    |
| Callbacks             | Existing `registerCallback`, `unregisterCallback`, `refCallback` and `unrefCallback` calls keep their Node meaning.                                                              | Implemented. Exception/wrong-thread handling deliberately reports an error and returns a fallback instead of terminating the process. |
| Imports               | `@flax/ffi` is the primary package; `node:ffi`, `buffer` and `node:buffer` resolve through the supported build adapters.                                                         | Static imports are implemented; aliases do not install a Node loader, all Node Buffer module exports or other Node modules.           |

Align errors as part of the API: wrong types use `ERR_INVALID_ARG_TYPE`, invalid values
use `ERR_INVALID_ARG_VALUE`, range failures use `ERR_OUT_OF_RANGE`, and closed-library
operations use `ERR_FFI_LIBRARY_CLOSED` where Node does. Preserve Node's error class as
well as its code. Node's unsupported callback misuse is not a reason to add process
termination to Flax; document that divergence.

`getFunction(name, signature)` requires an object, including `{}` for `void()`. Only
absent `arguments`/`return` properties default; inherited properties are read and
explicit undefined values are rejected. Raw memory helpers require bigint addresses
(`0n` for null); native pointer parameters still accept null/undefined. Node primitive
get/set offsets are nonnegative, while additional `read`/`write` helpers retain signed
offsets. Native-call scalar validation preserves `ERR_INVALID_ARG_VALUE` where Node uses
it instead of applying a blanket wrong-type error rule. Scalar memory access rejects a
null base before applying an offset; adding an offset does not make null accessible.

### Signature cache equivalence

A cached function belongs to its library scope and symbol. Within that scope, two
signatures share a function only when their complete call contracts match:

- Target ABI and resolved native argument/result layouts, including scalar kinds,
  aggregate field order and packing. Matching only byte size/alignment is insufficient.
- JavaScript argument validation, conversion, result type and ownership conventions.
- Variadic status and the exact fixed-argument count. An omitted `fixedArguments` is
  distinct from any explicit count, including one equal to the argument count.

Canonicalize only aliases with both identical native layout and identical JavaScript
behavior: `i32`/`int32`, or `char` and its target-specific signed/unsigned 8-bit alias.
`c_bool` and `uint8` use the same native storage but are different contracts: one uses
JavaScript booleans, the other numbers. Requesting the second after binding the first
must report an incompatible signature, not return the cached function or replace its
conversion rules. Preserve the existing same-function identity for genuinely equivalent
requests. Parse and validate every request and recheck library state before returning a
cache hit; getters can run user code and close the library.

Batch lookup snapshots every requested signature before consulting the cache. A getter
may bind a symbol reentrantly; the outer batch must reuse an equivalent binding or
reject a conflict without replacing it. Aggregate lengths, packing and field names are
validated and copied as primitive values before cache-key serialization. Invalid
descriptors are rejected equally on first lookup and cache hits; their `toJSON` methods
are never called.

Layout caching accepts only the package's normalized immutable descriptors. An external
descriptor is normalized on each request, even if its outer object is frozen: its nested
fields or getters may still change.

Normalize the binding contract once at bind time. This rule does not require a second
cache layer, extra bridge calls per invocation or speculative ABI-only call-frame
sharing. The current cache retains JavaScript conversion descriptors and the variadic
prefix, while normalizing integer aliases from target-owned metadata.

### Extensions use the same JavaScript vocabulary

Keep one package and one direct native call path. Prefer ordinary functions, camelCase
names, trailing options objects, bigint addresses and Buffer/typed-array storage. A
class remains appropriate when it owns a resource, as `DynamicLibrary` does; avoid a
second typed-pointer or native-object wrapper hierarchy. Extend existing signature or
callback options before introducing a parallel binding/callback API.

| Native capability                             | JavaScript interface direction                                                                                                                                                            | Status                                                                                                                     |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Structs, unions, arrays and ABI integers      | Keep `struct`, `union`, `array`, `sizeOf`, `alignOf`, `offsetOf` and `view`; use their descriptors in the existing signature object.                                                      | Implemented.                                                                                                               |
| Variadic calls, globals and function pointers | Keep `fixedArguments`, `getSymbol` plus get/set or `read`/`write`, and `bindFunction`. Process, executable and packaged asset lookup remain methods on `DynamicLibrary`.                  | Implemented.                                                                                                               |
| Allocation and deterministic resource scopes  | Keep `malloc`, `calloc`, `free`, `Arena` and `withArena`; retain native-library allocation/release as ordinary bound functions. Define cleanup guarantees before extending these helpers. | Reverse cleanup, failure continuation, idempotent close and action-error preservation are implemented.                     |
| Optional native GC cleanup                    | Keep `NativeFinalizer` and its existing `attach`/`detach` vocabulary. Define cancellation and a single release responsibility; memory-view conversion does not acquire ownership.         | Atomic pending cancellation is implemented; unknown/completed attachments throw ERR_INVALID_STATE.                         |
| Native-thread callbacks                       | Keep `registerCallback(signature, handler, options)` with explicit scheduling options.                                                                                                    | `sync`, `listener`, owner-delivered `threadsafe` and source-based `isolated` modes exist. Shared VM heaps are not exposed. |

Defer `withScope` and `createFinalizer`; do not add aliases, factories or a general
cleanup-registration API in this step. Existing experimental `Arena`, `withArena` and
`NativeFinalizer` names remain unchanged; their lifecycle behavior is refined below. A
Node-style interface does not require replacing resource-owning classes with factories.
Any later extension must fill an actual capability gap and update declarations,
consumers and lifetime acceptance together.

Do not change `Arena.free()` into Dart's no-op solely for compatibility: explicit free
continues to mean immediate native release. Removing an arena allocation early also
removes that arena's pending release responsibility. Returning a borrowed pointer or
view from `withArena` does not extend its allocation's lifetime.

Normal examples continue to bind a library's release function and use `try/finally`.
Buffer-owned input is allocated with `Buffer.alloc` and retained while C uses it. A raw
bigint owns nothing; `toBuffer(pointer, length, false)` does not arrange native free.
There is no required adoption, finalizer registration or resource-scope step.

### Cleanup completion and errors

The following are implemented guarantees for `Arena`/`withArena` and catchable cleanup
failures. `withArena` waits for its action's Promise to settle; the cleanup phase itself
is synchronous. Do not accept asynchronous cleanup or start untracked Promise work from
it. General deferred cleanup registration remains deferred.

On action completion or failure, mark the scope closed before cleanup, reject new
allocations, and release remaining allocations in reverse acquisition order. Remove each
pending release before attempting it so repeated close/release calls cannot retry it.
Attempt every remaining cleanup even if an earlier one throws; a failure in one release
must not skip unrelated resources. Native cleanup callbacks remain short, non-throwing
`void(pointer)` functions with no JavaScript reentry. This guarantee covers catchable
JavaScript/host failures, not recovery from a native crash or C++ exception crossing the
C ABI.

| Action outcome | Cleanup outcome      | Result                                                                                                                                |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Success        | Success              | Return or fulfill with the action's value.                                                                                            |
| Throws/rejects | Success              | Rethrow/reject with the original thrown value, including non-Error values.                                                            |
| Success        | One or more failures | Throw/reject an `AggregateError` containing cleanup failures in attempted order.                                                      |
| Throws/rejects | One or more failures | Throw/reject an `AggregateError` with the action failure first, followed by cleanup failures; preserve the action failure as `cause`. |

Idempotence means no cleanup is attempted again after its first attempt, including a
failed attempt; a destructor may have partly released its resource before reporting an
error. Retain/report every catchable failure rather than silently discarding it. Errors
found during normal Session retirement have no action result to reject: report them
through the existing host error path and continue independent retirement work, without
bypassing the producer stop/join and active-callback barrier.

### Manual release and optional GC cleanup

One native allocation has one release responsibility. Ordinary manual ownership remains
the default. Optional `NativeFinalizer.attach` assigns that responsibility to one native
cleanup attachment; it must not coexist with an arena's pending free or another
finalizer for the same allocation. Pointer equality is not allocation identity because
native addresses can be reused. Do not attempt to infer this ownership from raw bigint
addresses or intercept arbitrary library release functions.

Attachment commits only after both native registration and JS bookkeeping succeed. Read
the existing detach group before native registration. On failure, remove only the new
ID, preserve earlier group members, cancel/unlink the new peer and release its native
record without invoking the allocation's cleanup function. The caller still owns the
allocation and may release it in its constructor's catch block. Registration errors
propagate to that caller; later GC or retirement must not retry a failed attachment.
Native cancellation precedes JS bookkeeping rollback. Cleanup uses collection methods
saved at installation so replaced prototype methods cannot interrupt peer unlinking,
replace the registration error or leave a cancelled record pending.

For an attachment that may be released manually before GC, use a distinct, retained
`detach` key for that allocation. The cancellation contract is:

1. While cleanup is pending, successful `detach(key)` synchronously cancels it before
   manual release. A GC-ready attachment that has not started cleanup is still
   cancellable; GC marking alone does not transfer it to the completed state.
2. Once cleanup has started or completed, `detach(key)` must throw `ERR_INVALID_STATE`.
   An unknown/already-retired attachment must also throw instead of silently
   acknowledging a cancellation that would authorize another free. Callers must not
   manually free after such a failure. A successful detach keeps its void return; no new
   cancellation method or result object is introduced.
3. After confirmed cancellation, the caller alone invokes the allocation's matching
   native release function, once. Cancellation does not free memory. Direct `free` or a
   library-specific release does not automatically detach a finalizer.
4. Without early manual release, GC cleanup and normal Session retirement share the same
   once-only completion state. Each attachment is consumed before calling its native
   release function; neither path retries it or triggers another release.

`detach(key)` keeps its void success return. Native code validates every attachment for
that key before cancelling any, so a mixed pending/completed group fails without
cancelling its remaining pending resources. A successful return authorizes manual
release; an exception never authorizes another free. This replaces the earlier silent
no-op for missing/completed attachments. Use distinct retained keys for independent
cancellation. The runtime cannot detect bypassing cancellation or attaching the same
allocation twice.

Successful cancellation also removes the peer from its target's weak attachment group,
clears external memory pressure and drops the native record. Keeping the target alive
does not retain cancelled records; the now-unreachable peer is reclaimed by ordinary GC.
GC completion and Session retirement use the same unlinking path.

Copies own their copied JS bytes; borrowed views do not own the native allocation.
Registering cleanup against a view's backing ArrayBuffer can cover aliases sharing that
same buffer, but not independently created borrowed buffers. Finish all native users and
borrowed aliases before release, and retain each native cleanup function's code image
until its cleanup is consumed. JS-owned Buffer storage stays under JS ownership and must
never be released through a C free function.

### Threading and platform acceptance

Same-thread callbacks and queued listener callbacks cover their portable Dart use cases.
The threadsafe mode additionally marshals a foreign-thread synchronous call to its owner
Session and waits for the native result. A synchronous owner call cannot wait for that
same queue: the backend detects and rejects the cycle. Pending deliveries are cancelled
before stop/join, and reentrant owner callbacks retain ordinary closure state. Neither
this owner-thread mode nor the isolated-source mode executes a shared VM heap on a
foreign thread like Dart's experimental `NativeCallable.isolateGroupBound`. The former
uses the original closure on its owner; the latter has an independent context. Shared VM
execution needs a separate VM/thread design; never substitute a listener where C needs a
synchronous result or silently enter the owner VM from another thread.

Dart `Handle`, `NativeApi`, native ports and Node's libuv loop/permissions/VFS remain
runtime-specific host integration. An identical `isLeaf` switch is not a portable
capability requirement. Neither compiler annotations nor C header generation are
necessary to use the existing dynamic binding path. Platform coverage remains a separate
implementation and acceptance requirement.

Acceptance for the implemented refinements covers:

1. Compare Node error contracts and signature properties with shared portable fixtures;
   verify alias reuse, boolean/numeric separation and variadic boundaries.
2. Verify existing resource helpers against the cleanup/error and cancellation rules
   above, including failure continuation, retained action errors, repeated cleanup and
   manual/GC/Session retirement interleavings without adding new API entry points.
3. Check compiler ABI controls, callbacks, GC and Session/isolate retirement. Shared
   owner-thread closures and foreign-thread isolated computation have distinct
   contracts.
4. Validate changes on V8/macOS and V8 jitless/iOS simulator with compiler-checked C
   controls. Track physical-device, distribution and additional-platform acceptance
   separately. Exact executed cases and source hashes are recorded in the acceptance
   receipt.

## Pointer and storage lifetime

A pointer is a bigint address, with `0n` as null. It owns nothing. There is no adoption
operation and no hidden native release attached to a returned Buffer. A library's
allocation/release functions remain ordinary bound functions. Callers must supply the
correct signature, valid address, accessible extent and native thread/lifetime contract.

A pointer-like JS argument retains its backing storage for that native call only. Native
code retaining the address beyond return requires an explicit caller-owned JS reference.
A string argument is a temporary terminated UTF-8 copy. Do not resize, transfer or
detach borrowed JS storage during a call, including through reentrant JS.

Copies remain valid independently. Borrowed ArrayBuffers, Uint8Arrays, Buffers and
slices retain no original JS owner and do not extend a C allocation or image's lifetime.
Finish them before release/reuse/unload. `getRawPointer` likewise adds no ownership.
Memory helper bounds checks cover the supplied length and address overflow; arbitrary C
allocation bounds and freed addresses cannot be inferred.

`malloc`/`calloc`/`Arena` are optional convenience allocators. `NativeFinalizer` is an
explicit opt-in for a bound native `void(pointer)` release function. Attachments made
from a DynamicLibrary-bound function retain its code image, not their JS target. A
raw-address binding still needs an explicit library owner. GC enqueues ready attachment
IDs; owner checkpoints perform native cleanup once. Detach removes cleanup
responsibility and the record immediately; an already queued ID then becomes a harmless
tombstone. Ordinary calls do not scan cleanup metadata. Native wakeups are coalesced,
and each checkpoint processes at most 128 ready IDs before yielding. Library/binding
metadata is compacted only after references change. Normal retirement uses the same
bounded batches and completes before VM destruction; forced isolate teardown finishes
all remaining records synchronously. Attachment cleanup order is unspecified. A batch
bounds the number of operations, not the duration of a user-provided native cleanup
function. External memory pressure is released on detach, completion or peer collection.

Closing a library revokes its functions and lookups. Shared open images are weakly
cached by canonical path. Each Session retains its own image references, so another
Session's cleanup list cannot prevent an unused reference from being released. Owner
checkpoints release unneeded loader handles; callbacks and finalizers may keep an image
alive until their declared work finishes. Retirement releases that Session's image
references on its owner thread after native work finishes, even if closed JS finalizer
factories remain reachable. Other Sessions retain their own references. The final image
owner removes its expired cache entry. Resource statistics never perform cleanup. Native
load/unload runs outside the cache mutex. A function bound from an unassociated raw
address requires the caller to retain its original library. Static archives must first
be linked into an executable or loadable image; `dlopen(null)` searches exported process
symbols and does not load an archive.

## Callbacks and retirement

Callback entries use libffi's precompiled Apple arm64 trampoline table. The engine never
allocates generated RX instructions for them. The registered pointer is still unsafe
after unregister/close, just as a Dart or Node callback address is unsafe after its
owner is released.

The default handler executes synchronously on its owner thread. It supports nested
native/JS calls, scalar and aggregate values and an optional native exceptional result.
Exceptions and invalid results are contained at the C boundary and reported to the
calling JS frame or a later owner checkpoint. Wrong-thread calls return a native
fallback and report an error. Active self-unregister and library close are rejected.

Listener handlers return void immediately on native threads. Their bounded native queues
carry copied argument values. Explicit pointer/length copy rules retain transient
payloads until delivery; other addresses remain the native library's responsibility.
Native threads post only a Dart native-port wake. They never enter Dart or the owner VM.
Core enqueues delivery through the existing Session host-task/microtask checkpoint.

Isolated handlers execute synchronously in a separate JS runtime per native thread. The
source function receives JSON-cloned `context` and the same bundled `ffi` API. There is
no shared UI closure, JS object graph, Dart access or host event loop. Native calls,
layouts and memory operations work there; retained callback registration and native
finalization are rejected. Cleanup must be explicit inside that computation. This
implements cross-thread native synchronous computation without entering the UI runtime
from a foreign thread.

Threadsafe handlers instead keep the original closure and deliver foreign calls to its
owner checkpoint while the native caller waits. They can access captured JS state. An
owner-thread native call cannot wait for this queue: use `callAsync` for that call. The
runtime rejects detected owner wait cycles. Before stop/join it revokes new deliveries
and cancels existing waits; late calls return their native fallback. Library close
revokes all its callbacks before stopping any producer, since a producer may use several
callbacks. Unregister cancels only the target callback's waits. Stopping a managed
producer inside another native callback is rejected before changing registrations: the
producer could be waiting for that callback to return. This mode does not move the VM or
execute owner JS on a foreign thread.

Each synchronous delivery records completion or cancellation under its own mutex.
Retirement can cancel a pending delivery, but cannot replace an already-completed result
or exception while the native thread resumes. In particular, an owned pointer returned
by JS still reaches its native consumer when an enclosing background call is aborted or
the Session closes. Unregister and library retirement also unlink queued listener
messages immediately, releasing copied payloads without waiting for another checkpoint.
Ordinary synchronous calls retain unrelated listener notifications.

A completed foreign callback failure keeps its delivery's error route when the native
thread resumes. An unrelated synchronous owner call cannot consume or overwrite that
failure. Only a detected wait cycle routes its failure to the blocking owner call.

Normal Session retirement also drains queued callback errors after native calls and
callbacks have stopped, before releasing the VM. A checkpoint reports one error and
leaves later messages queued; every error schedules another retirement turn so the host
reports each once and still completes teardown. This also applies to throwing listener
handlers during ordinary delivery. If the Session's `onError` throws, Core forwards that
failure to `FlutterError.reportError` without invoking `onError` again. Forced VM
destruction skips owner error delivery, preserving its native-only cleanup path.
Listener messages already executing remain retained until their handler returns;
cancellation only removes queued messages.

A registered optional native `stop` must stop and join the producer without requiring JS
progress. An unmanaged producer must be stopped by its application before close. The
runtime cannot deduce a native library's future use of an exported raw address.

Session close drains earlier host settlements and their JS finally jobs before native
retirement. It then stops new background work, cancels waiting callbacks, calls native
stop/join functions and waits for workers. Result settlement allows synchronous native
cleanup in JS finally jobs. Only afterward does it revoke all native work, wait for
active callbacks, discard queued delivery, perform finalizers and remove image roots.
`_nativeRetirements` prevents VM disposal while this is pending. Native callback exit
wakes the owner if a pending retirement can advance. Only then are bridge handles and
the runtime destroyed. The isolate shutdown hook uses the same native retirement path.

V8 now releases tracked NativeState peers at context destruction because weak GC
callbacks need not run during isolate disposal. The Dart compactor also accepts an empty
fixed page: joint GC can retire the last shared byte pin while marking, and `SweepPage`
has already put the empty page's storage on the freelist. Forced compaction remains
enabled in the memory acceptance probe.

## Native packages and build boundaries

The esbuild/Vite adapters inspect emitted graph contributions. A package declares
`flax.native` pointing to a versioned descriptor. Selected files are checked to remain
inside that npm package, copied into the host's private `.flax/ffi_assets` package and
hashed. The generated hook verifies those hashes before building.

A native library has a globally unique, preferably package-namespaced ID. Its bundled
framework name derives deterministically from the SHA-256 of that ID; Core computes the
same name once when `DynamicLibrary.codeAsset(id)` opens it. There is no JS bundle
prefix, content-hash mutation, implicit Node runtime or per-library Dart business
bridge.

Source libraries compile through `native_toolchain_c`. Static archives are force-linked
into a generated loadable code asset. Prebuilt dylibs are copied to their code asset.
Binary variants explicitly select OS, architecture and iOS device/simulator. Framework
containers resolve their executable; XCFramework manifests select arm64 target slices.
Flutter embeds and signs the resulting frameworks. Previously owned outputs are
reconciled on withdrawal so incremental builds do not keep removed native libraries.

The build helper adds the private generated Pub dependency; developers install JS
packages and run their normal JS build followed by Flutter pub/build. It does not
publish packages, execute npm install scripts, parse arbitrary headers or manage C++
objects. Explicit dependency IDs are topologically ordered; non-system dylib imports are
rewritten to selected framework install names and unresolved imports fail. CMake
projects declare their source directory, target and static/dylib output; the hook
supplies the Apple SDK, architecture and deployment target. Framework resources,
Objective-C/Swift integration and unknown toolchains remain host concerns. New native
inputs need a Flutter rebuild; JS hot reload alone cannot embed new binaries.

## Validation and limits

The [acceptance runner](../../packages/flax_ffi/test/runtime/README.md) installs real
npm archives with scripts disabled and uses compiler-checked C layout/call controls. It
verifies static process lookup separately from automatically embedded dynamic fixtures,
source and binary code assets, optional import withdrawal, direct-call instrumentation,
callback and finalizer lifetime, GC and real Core Session close. Its
[receipt](../../packages/flax_ffi/test/runtime/results.json) is the source of exact
executed configurations and counts; earlier provider experiments are separate historical
evidence.

The full seven-variant suite passes on macOS arm64 V8 Debug/Release and iOS arm64
simulator V8 jitless Debug. The iOS fixture uses framework sources matching its pinned
engine. A separate production-engine iOS smoke gate exercises static process calls,
structs, precompiled callbacks, bytes and exactly-once teardown; it does not establish
the full dynamic-asset suite on a physical phone. Distribution/App Store signing,
Android/Windows ports, whole-engine sanitizers and arbitrary native-producer performance
remain outside these checks. The raw pointer and native producer lifetime rules remain
application responsibilities on every platform.
