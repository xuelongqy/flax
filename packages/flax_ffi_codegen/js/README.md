# @flax/ffi-codegen

Optional C header code generation for `@flax/ffi`. Install it as a development
dependency alongside `@flax/build`. It has no Dart package and does not add a native
runtime. The package is currently private and unpublished.

## Prerequisites

| Dependency                       | Setup                                                                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node and JavaScript dependencies | Use the repository's pinned Node/pnpm. Installing this development package also installs its XML parser.                                                                                                                                                      |
| Xcode, Clang and Apple SDKs      | Install Xcode and the target SDK. Select it with `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer`; check `xcrun --sdk iphonesimulator --find clang` for Simulator generation. A separate LLVM or libclang installation is unnecessary. |
| CastXML                          | The first generation downloads and verifies the pinned macOS arm64 tool. For offline builds, set `FLAX_CASTXML=/absolute/path/to/castxml` or pass `--castxml`.                                                                                                |
| CMake 3.24 or newer              | Install and add it to `PATH` only when compiling a library whose native kind is `cmake`; check `cmake --version`. Source and prebuilt libraries do not require it.                                                                                            |

Generation currently requires an Apple SDK toolchain. Installing a CastXML executable on
Linux or Windows does not add support for generating Apple bindings there. Missing SDK,
frontend and CMake errors include configuration or installation guidance; tooling never
installs Xcode or CMake automatically.

## Automatic project generation

The existing `flaxEsbuildPlugin` and `flaxVitePlugin` detect `codegen` declarations in
the project's `flax.native` descriptor. There is no second FFI build plugin to install.

```json
{
  "flax": { "native": "native.json" },
  "devDependencies": {
    "@flax/ffi-codegen": "workspace:*",
    "@flax/build": "workspace:*"
  }
}
```

This is the repository workspace configuration. For an external consumer before
publication, use local npm archives (`file:/absolute/path/package.tgz`) instead of a
registry version.

Declare compiler inputs and the generation recipe in `native.json`:

```json
{
  "formatVersion": 1,
  "libraries": [
    {
      "id": "my-package/counter",
      "kind": "sources",
      "targets": ["macos", "ios"],
      "sources": ["native/counter.c"],
      "headers": ["native/counter.h"],
      "includes": ["native"],
      "defines": { "FEATURE_ENABLED": "1" },
      "codegen": {
        "output": "src/generated/counter",
        "functions": ["counter_*"],
        "resources": {
          "Counter": {
            "create": "counter_create",
            "destroy": "counter_destroy",
            "methods": { "add": "counter_add" }
          }
        }
      }
    }
  ]
}
```

Use the generated file from normal application JS/TS:

```ts
import { DynamicLibrary } from '@flax/ffi';
import { createBindings } from './generated/counter/bindings.g.js';

const library = DynamicLibrary.codeAsset('my-package/counter');
const { native, Counter } = createBindings(library);
const counter = new Counter(40);
counter.add(2);
// No manual release is required: GC or Session close releases the native pointer.
// counter.close() is also available for deterministic release.
```

`createBindings` accepts a caller-owned library. It also works with
`DynamicLibrary.process()` or an explicitly chosen path. It does not open a library at
import time. `definitions.g.ts` exports `definitions`, `callbacks`, `globals`,
`constants` and `layouts`; raw pointer results stay bigint.

## Build targets

The build automatically uses the explicit adapter `ffiCodegen.target`, `FLAX_TARGET`,
the existing `FLAX_CHECK_TARGET`, Xcode's `PLATFORM_NAME`, or the supported native host,
in that order. Supported targets are `macos-arm64`, `ios-arm64-simulator` and
`ios-arm64-device`; existing `ios-simulator-arm64`, `ios-device-arm64` and `ios-arm64`
aliases also work. Select a cross-build target once for the whole JS build:

```sh
FLAX_TARGET=ios-arm64-simulator pnpm build
```

The SDK and compiler come from `xcrun`; native compilation uses the same triple,
sysroot, language standard, include paths, defines and ABI-affecting flags. The native
hook checks the actual Flutter OS/architecture/device variant, compiler identity,
SDK/header hashes and generated C ABI assertions before accepting the library. A wrong
or stale profile fails with a request to rebuild JavaScript; it never silently uses
macOS definitions in an iOS build.

Generated source libraries compile the ABI assertions as a separate translation unit
with the library's real flags. CMake codegen requires an explicit `cmake.target`; the
hook adds that unit to the selected target, so its private compile definitions are
checked too. Generated CMake builds clear implicit Release optimization/`NDEBUG` flags
and use the declared profile minimum. Set desired flags explicitly on the library.

`FLAX_DEPLOYMENT_TARGET` or the adapter's `ffiCodegen.deploymentTarget` can override the
defaults (macOS 15.0, iOS 16.3). Xcode's deployment-target variables are also
recognized. Keep the host application's minimum OS at least this high. A build invoked
outside Flutter cannot infer the platform of a future Flutter command; select it via the
normal build target as above. Header changes during Vite HMR require rebuilding the
native application, so they fail rather than hot-reloading a different ABI.

Adapter options are optional:

```js
flaxEsbuildPlugin(manifest, {
  nativeAssets: { hostDirectory: '../app' },
  ffiCodegen: { target: 'ios-arm64-simulator', castxml: '/path/to/castxml' },
});
```

Ordinary projects without `codegen` do not resolve this package or fetch a frontend.
`ffiCodegen: false` disables automatic generation; pre-generated files must still have a
matching generation receipt when the native library is packaged.

## Standalone CLI and API

Generate project declarations without bundling, or use an independent JSON recipe:

```sh
flax-ffi-codegen --project . --target macos-arm64
flax-ffi-codegen --config ffi.config.json --target ios-arm64-simulator
```

Standalone recipes accept `headers`, `output`, `functions`, `globals`, `records`,
`callbacks`, `enums`, `constants`, `variadic`, `resources`, `compatibility`, `language`,
`std`, `includes`, `defines` and `flags`. Paths are relative to the recipe file; output
must be a dedicated directory inside that project. The Node API exports
`generateBindings`, `prepareProject` and `resolveTarget` with TypeScript declarations.

Selections accept `['prefix_*']` or `{include: [...], exclude: [...]}`. Required exact
names that do not exist fail. Integer macro names in `constants` are evaluated by Clang,
including exact uint64 values emitted as bigint. Function-like macros require C
wrappers. Explicit variadic arguments must use C default-promotion types:

```json
{ "variadic": { "printf_like": ["pointer", "int32", "float64"] } }
```

The fixed prefix is extracted from the header. One symbol has one explicit signature per
binding; the generator does not add a second signature cache.

`records` explicitly emits complete struct/union layouts even when functions only pass
their pointers. `callbacks` selects callback typedefs not otherwise used in a signature.
Referenced types are generated automatically; callback typedef aliases keep their names,
and anonymous callback arguments use keys such as `consume.arg0`. `enums` can select
enum/typedef names or enumerator names.

## Ownership and callbacks

Resources support arbitrary constructor parameters and pointer receivers. Methods use
the first parameter as receiver unless a mapping specifies another position:

```json
{ "methods": { "add": { "symbol": "counter_add_last", "receiver": 1 } } }
```

A constructor must return a pointer (null means failure) and must not invoke JS during
allocation. Its GC destructor must be a native `void(pointer)` function that is short
and does not invoke JS. An attachment failure releases the new allocation once. Manual
close checks the library and detaches before release; a closed library leaves GC cleanup
active. Repeated close/GC/Session close cannot release the same attachment again. Failed
construction preserves both the original and cleanup errors if rollback also fails.
Manual and automatic cleanup capture the same native destructor, even if the returned
raw function dictionary is later modified. Variadic destructors require a fixed C
cleanup wrapper.

Methods retain their receiver during the synchronous call and reject reentrant `close()`
from a native callback. An exception restores that activity guard before the caller can
close the object. Other pointer arguments and results remain raw FFI values; the
generator does not unwrap other resource instances or transfer their ownership. If C
retains a pointer after returning, application code must retain its owner until C stops
using it.

The generator does not infer ownership, string encodings, buffer lengths, callback
threading or retention from pointer types. Callback typedefs produce signatures in
`callbacks`; register them using
`library.registerCallback(signature, callback, options)` and supply the native
stop/unregister policy explicitly. Calls stay synchronous unless application code
requests an existing background-call API.

Generated resources do not expose escaping zero-copy byte views. Use explicit copies or
a library-specific owner-retention policy. Other pointer and zero-copy capabilities
remain available through the raw `@flax/ffi` API.

## Compatibility and tool lifecycle

`compatibility: 'node'` emits only shared primitive definitions and rejects C boolean,
aggregate, variadic and NativeFinalizer extensions. A primitive-only definitions file
has no Flax import. This is API-format compatibility, not certification of Node's
experimental native FFI runtime.

C ABI declarations, structs/unions, fixed arrays, enum storage and packed layouts are
supported when representable by the runtime. C++ headers can expose explicit
`extern "C"` wrappers. Selected inline/static functions, mangled C++ exports, bitfields,
unsupported alignment and flexible arrays fail with source diagnostics.

The actual compiler rechecks function/callback calling conventions, scalar signedness,
enum storage, field types, layout and constant values before output is accepted. C++
value records must have ordinary trivial C data semantics; use C wrappers for other
objects.

CastXML is pinned to the tested official `v2026.01.30` macOS arm64 archive and verified
by SHA-256 before extraction. The first generation caches it under the project's
`.flax/ffi-codegen/`; use `FLAX_CASTXML`, `--castxml` or the adapter option for an
existing/offline executable. There are no install scripts or downloads at application
runtime. Upstream license/notice files remain in the cached tool distribution.

Generation hashes the recipe, compiler profile, frontend, emitter and transitive
headers. Cache hits skip CastXML and emission, but rerun the compiler's dependency scan
to detect new headers earlier in the include search path. A change detected between the
initial and final input snapshots fails generation and preserves prior output. Only
generator-owned directories may be replaced, concurrent writers fail explicitly, and
unchanged files retain their timestamps. A leftover `.lock` after process death contains
the writer PID; remove it only after confirming that process has ended.

## Repository checks

`pnpm --filter @flax/ffi-codegen run check:archive` packs and installs the package in an
isolated consumer, then checks its API, declarations and CLI without Xcode or CastXML.
It also confirms that installing codegen alone does not install the FFI runtime. The
ordinary JS tests and `packages:check` run this portable check on Linux and macOS.

On macOS arm64 with Xcode, `pnpm run ffi-codegen:check` resolves the pinned frontend,
runs the real header/cache/ABI tests and builds/typechecks the checked-in example for
macOS and iOS Simulator. This is an engine-free Apple tooling gate. The example's own
typecheck generates missing bindings first. Global JS build/typecheck commands exclude
this Apple-dependent example explicitly; they still check the generator package itself.
The separate [runtime acceptance](../test/runtime/README.md) executes macOS V8 JIT and
iOS Simulator V8 jitless.
