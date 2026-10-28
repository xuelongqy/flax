# @flax/ffi

Optional direct C ABI calls for Flax. Install this npm package and build with
`@flax/build`; Dart installation and native packaging are internal. The matching Flax
engine is required. ESM, static CommonJS, `node:ffi`, `buffer` and `node:buffer` are
supported by the build adapters. No general Node environment is installed.

The API uses Node's portable interface as the base and adds Dart-capability extensions
in the same JavaScript style. This guide describes implemented exports, including Node
error and signature handling, conversion-aware signature caching, continued arena
cleanup and confirmed finalizer cancellation. No additional resource helper entry points
are introduced. Experimental behavior changes are called out below.

## Install and build

This package is currently private and unpublished. In the Flax workspace, use
`"@flax/ffi": "workspace:*"`. External consumers install the locally packed archive:

```sh
pnpm add /absolute/path/flax-ffi-0.0.0.tgz
```

Use the public `flaxEsbuildPlugin` from `@flax/build/esbuild` or `flaxVitePlugin` from
`@flax/build/vite` in the application build. The matching FFI-enabled Flax engine is
required; an ordinary Node.js or Flutter process cannot execute native calls from this
package. Named ESM imports support tree shaking; static CommonJS and the default
namespace may retain more code. Buffer-only imports need no native FFI installation.

The runnable repository example is `packages/flax_ffi/example/`. Its checked-in native
source, descriptor, build script and Flutter host work on macOS arm64 V8 and iOS arm64
Simulator V8 jitless. Developers write only JS signatures and a native-input descriptor;
Core owns the internal Dart integration.

## Open a library

```js
import { dlopen, DynamicLibrary } from '@flax/ffi';

const { lib, functions } = dlopen('/absolute/path/libmath.dylib', {
  add: { arguments: ['int32', 'int32'], return: 'int32' },
});
console.log(functions.add(20, 22));
lib.close();

// Symbols already linked and exported by the application:
const processLib = DynamicLibrary.process(); // Also dlopen(null, definitions).
const puts = processLib.getFunction('puts', { arguments: ['string'], return: 'int32' });
puts('Hello');
processLib.close();
```

A `.a` is a build input. It cannot be passed to `dlopen`. Process lookup requires the
host linker to retain and export the symbols. An iOS framework path must name its
binary, not its directory. `suffix` is a platform suffix, not a framework or XCFramework
resolver. Packaged libraries can instead use `DynamicLibrary.codeAsset(id)`.

`getFunction` requires a signature object (`{}` for void/no arguments). `getFunction`,
`getFunctions`, `getSymbol`, `getSymbols`, `functions`, `symbols`, `registerCallback`,
`unregisterCallback`, `refCallback`, `unrefCallback`, `close` and `Symbol.dispose`
follow the portable Node FFI surface. `dlopen` reuses this class. Batch signature
getters finish before cache lookup, so reentrant bindings keep their identity and
conflicting signatures are rejected. Aggregate descriptor values are validated before
cache lookup, including on cache hits. `DynamicLibrary.executable()`, `providesSymbol()`
and `bindFunction()` are additional helpers. A raw function address needs its original
library to stay loaded.

## Memory

```js
import { Buffer, getRawPointer, toBuffer } from '@flax/ffi';

const bytes = Buffer.alloc(64); // JavaScript owns this storage.
const pointer = getRawPointer(bytes); // bigint; null is 0n.
// Pass bytes directly to a pointer argument, or pass pointer while retaining bytes.
const copied = toBuffer(pointer, 64); // Independent copy by default.
const borrowed = toBuffer(pointer, 64, false); // Requires bytes to stay alive.
```

`toString`, `toArrayBuffer`, `toBuffer`, `toUint8Array`, `exportString`, `exportBuffer`,
`exportArrayBuffer`, `exportArrayBufferView` and `getRawPointer` share the same native
byte path. Integer/float get/set helpers accept nonnegative byte offsets; 64-bit results
are bigint. Raw memory helpers require bigint addresses (`0n` for null). Native pointer
arguments still accept JS null/undefined; additional `read`/`write` helpers accept
signed byte offsets. `toUtf16String` reads a terminated UTF-16LE string. C strings
passed as arguments are temporary UTF-8 copies; native code must not retain their
addresses.

For memory returned by C, bind that library's release function and call it explicitly in
`finally`. Buffer GC does not free C memory. Finish all borrowed views and slices before
freeing memory, closing its library, resizing or transferring its JS owner. Never pass
JS-owned Buffer storage to a C `free` function. There is no `adopt` step.

Optional `malloc`, `calloc`, `free`, `Arena` and `withArena` provide aligned/scoped
allocation. Arena close attempts every remaining free in reverse order, once, even if an
earlier free throws. Cleanup failures use `AggregateError`; if the action also fails,
its error comes first and is preserved as `cause`.

`NativeFinalizer` accepts a bound native `void(pointer)` cleanup function;
`attach`/`detach` are optional. Failed attachment cancels the new native record and
restores its detach group, leaving allocation ownership with the caller. A constructor
can catch that failure, release its pointer once and rethrow. Cancel pending cleanup
before manually releasing an attached allocation. `detach(key)` returns void only after
cancelling all pending attachments for that key. Unknown/completed attachments throw
`ERR_INVALID_STATE`; a mixed group fails without partially cancelling the remaining
attachments. A failed detach never authorizes manual release. Retain distinct keys for
independent releases. Successful cancellation unlinks its peer and drops its native
record even while the target stays alive. Ordinary GC reclaims the unlinked peer. Normal
Session close performs outstanding finalizers before VM destruction. Cleanup runs on an
owner checkpoint, so it must be short and must not call JavaScript.

## Native layouts and calls

```js
import { struct, array, sizeOf, view, dlopen } from '@flax/ffi';
const Point = struct({ x: 'double', y: 'double' });
const Points = struct({ points: array(Point, 2), tag: 'int32' });
const value = view(Point, new Uint8Array(sizeOf(Point)));
value.x = 20;
value.y = 22;
const { lib, functions } = dlopen(null, {
  move_point: { arguments: [Point], return: Point },
});
const moved = view(Point, functions.move_point(value));
console.log(moved.x);
lib.close();
```

`struct`, `union`, fixed and trailing variable `array`, `layout`, `sizeOf`, `alignOf`,
`offsetOf` and `view` share native size/alignment rules. Packed structs accept
`{ pack: 1 | 2 | 4 | 8 | 16 }`. Aggregates cross the C ABI as byte storage. Bulk data
should use typed arrays; creating a field view for a very large array creates an indexed
property for each element. Arrays are pointer parameters in C; inline arrays are
supported inside aggregates.

ABI integer names include `char`, `short`, `int`, `long`, `intptr`, `size_t`, `ssize_t`
and `wchar_t`, with unsigned variants. `bool` follows Node's numeric uint8 convention;
`c_bool` is the additional boolean-valued C `_Bool` type. C++ needs an `extern "C"`
wrapper. Native C++ classes and exceptions do not cross this ABI.

Typed varargs use `fixedArguments` on a complete signature. Include every variadic
argument's type and apply C default promotions (`int32`/`uint32`, `double`). Returned
function pointers can be bound with `bindFunction`; globals use `getSymbol` plus
primitive read/write helpers. No header parser or binding generator is required.

## Background calls and native errors

`callAsync(fn, arguments, options?)` runs an already-bound function on a native worker
and returns a Promise. Ordinary calls remain synchronous. The native library must allow
the function on that worker; background execution does not remove thread affinity. At
most 32 calls may be pending per Session.

```js
import { callAsync, callWithErrno } from '@flax/ffi';
const result = callWithErrno(functions.read, fd, bytes, bytes.length);
// Read errno only when this function's return value indicates a failure.
const next = await callAsync(functions.read, [fd, bytes, bytes.length], {
  captureErrno: true,
  signal: controller.signal,
  keepAlive: [nativeOwner],
});
```

Error capture clears and immediately snapshots errno on the actual calling thread. The
captured result is `{ value, errno }`; ordinary `callAsync` resolves to the native
return value. This Flax extension is separate from Node-compatible JS error codes.

Byte arguments use private snapshots, preserving overlap between views of the same
backing store. Successful completion copies bytes back before settling the Promise. Do
not modify those views until completion; transferred/detached outputs reject safely.
Native code must not retain or return snapshot or temporary string addresses. When a
function returns an address inside an input buffer, pass its bigint address and retain
the original buffer through `keepAlive`. Native-owned memory likewise uses its bigint
address and caller-defined owner. Cancellation requests an abort and suppresses
writeback; it cannot interrupt C already executing. The Promise rejects only after the
native call exits, so `finally` can safely release its input pointers. The worker,
snapshots, owners and library stay alive until then. Library close rejects pending
calls. Session close stops producers and new background work, waits for workers and
settles their cleanup jobs before native finalizers.

If the return value owns native memory, supply `onDiscard: functions.destroy` with a
bound native `void(pointer)` cleanup function. Cancellation or result-delivery failure
uses it once; forced VM shutdown can invoke it without JavaScript. It must be short,
owner-thread compatible and must not call JS. Normal completion transfers the returned
pointer to the caller. Without this option, allocation ownership is still the caller's
responsibility; avoid cancelling a function that produces an owned pointer.

## Callbacks

```js
const callback = lib.registerCallback(
  { arguments: ['int32'], return: 'int32' },
  (value) => value * 2,
);
// Call a C function accepting callback. Stop its producer before unregistering.
lib.unregisterCallback(callback);
```

Default callbacks are synchronous on their creating thread. Exceptions return a native
fallback and report to the calling JS frame or owner checkpoint. Promises are rejected.
`unrefCallback` permits GC; a collected handler becomes a no-op with a zero result.

`{ mode: 'threadsafe' }` accepts an ordinary closure invoked from a foreign native
thread. That caller waits while its owner Session executes the closure and converts its
return value. Captured JS state stays on its original thread. Use `callAsync` when a
native call waits for these callbacks: synchronous owner calls reject the wait cycle
with a fallback and a reported error. Retirement blocks new deliveries before cancelling
pending ones and joining the producer; late calls return their native fallback. Once JS
has finished a callback, its result or exception is preserved even if unregister or
Session close begins before the native thread resumes. Aborting an enclosing background
call does not revoke a callback result already handed to native code. Unregistering one
callback leaves other callbacks' deliveries intact and immediately releases its queued
listener payloads. Native pointer payloads stay valid until the callback returns. This
marshals work to the owner; it does not share a VM heap or implement Dart isolate-group
execution.

Errors from callbacks on a library's own native threads reach the Session error handler,
including during normal Session close. Reporting an error does not prevent the remaining
native cleanup. Forced VM shutdown cannot deliver those owner errors.

For another native thread, use `{ mode: 'listener' }` with a void return type. Delivery
runs later at a Session checkpoint. Declare `copies: [{ argument, lengthArgument }]` for
transient pointer payloads. `maxPending` and `maxBytes` bound each callback queue. Other
pointer arguments still follow the library's lifetime contract.

Synchronous cross-thread work uses `{ mode: 'isolated', context: jsonData }` and a
function **source string**. Each native thread gets an independent JS runtime with the
same `ffi` call/layout/memory API and lexical `context`. It cannot capture UI closures,
use Dart, create retained native callbacks/finalizers, or perform asynchronous work.
Pass shared native addresses explicitly as strings in JSON and convert them to bigint.

An optional `stop` is a bound native `void()` or `void(pointer)` function, with an
optional `stopToken`. It must stop and **join** the producer without needing JS work.
Library/Session close calls it before removing callback entries. Stopping a managed
producer from inside a native callback is rejected with `ERR_INVALID_STATE`: its join
could wait for the current callback. Unregister or close after the callback returns. For
an unmanaged producer, the application must stop it before unregister/close. A callback
pointer used afterward has undefined behavior. Neither raw bigint pointers nor Buffer
can prove a native producer has stopped.

## Package native inputs

A library package declares `"flax": { "native": "native.json" }` in package.json:

```json
{
  "formatVersion": 1,
  "libraries": [
    {
      "id": "@example/math",
      "kind": "sources",
      "targets": ["macos", "ios"],
      "language": "c",
      "sources": ["native/math.c"],
      "headers": ["native/math.h"],
      "includes": ["native"]
    }
  ]
}
```

The package's retained JS entry can export a helper that calls
`DynamicLibrary.codeAsset('@example/math')`. Include the descriptor and native inputs in
its npm archive. Only packages contributing bytes to the final bundle are selected. IDs
are global within one application; namespace them with the package name.

`static` and `dynamic` kinds instead declare `binaries` keyed by `macos-arm64`,
`ios-arm64-simulator` or `ios-arm64-device`. Static archives are force-linked into a
code-asset framework; prebuilt dylibs are copied into that asset. Select a binary slice
explicitly. Binary entries also accept framework directories. Alternatively, set
`xcframework` to a package-relative XCFramework directory; its manifest selects arm64
OS/device/simulator slices. Containers supply C ABI binaries; framework resources and
Objective-C or Swift SDK integration are not inferred.

Libraries may declare `dependencies: ['@vendor/dependency']`. Dependencies must be
selected in the same build graph. Builds order them, link declared source dependencies,
and rewrite non-system dylib references to generated framework install names. Missing,
ambiguous or cyclic dependencies fail instead of using the developer machine's paths.

For an existing CMake project use `kind: 'cmake'` with
`cmake: { directory: 'native', target: 'math', output: 'libmath.a', defines: {} }`. The
build selects the Apple SDK, architecture and deployment target. CMake must be available
and the project must support that toolchain. Static and dylib outputs reuse the same
packaging path. Projects control external dependency discovery; native install scripts
and arbitrary cross-toolchain inference are not run.

The build adapter stages a private package under the Flutter host's `.flax/ffi_assets`,
adds its generated Pub dependency, and hashes native inputs. Then run the normal Flutter
pub/build step. No application Dart code or per-library Pub dependency is written by the
developer. Removing imports withdraws only the previously owned native outputs. Native
input changes require a Flutter rebuild; JavaScript hot reload cannot install new native
binaries.

For the repository contract and acceptance commands, see `docs/architecture/ffi.md` and
`packages/flax_ffi/test/runtime/README.md` in the Flax checkout.
