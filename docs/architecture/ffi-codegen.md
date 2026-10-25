# C header FFI code generation

`@flax/ffi-codegen` is a separate optional Node development package under
`packages/flax_ffi_codegen/js`. It uses pinned CastXML to generate definitions and
resource bindings for the existing [FFI runtime](ffi.md). It has no Dart public package,
runtime bootstrap, or new V8 call path. The package is private and unpublished.

The [package guide](../../packages/flax_ffi_codegen/js/README.md) defines configuration
and CLI usage; the [runnable example](../../packages/flax_ffi_codegen/example/README.md)
contains a checked-in native header, library, JS consumer and Flutter host. The earlier
[proposal](ffi-codegen-proposal.md) records frontend selection and is historical
context.

## Ownership and outputs

The generator reads selected declarations from complete C translation units. CastXML
mirrors the actual compiler predefines and uses the selected sysroot, target, language
standard, include paths, defines and flags. Its normalized type model remains private.

Generation produces `definitions.g.ts`, `bindings.g.ts`, `abi.g.c` and an internal
`.flax-ffi-codegen.json` receipt. Definitions expose native signature objects, callback
signatures, global types, constants and layouts. Fixed arrays remain aggregate fields;
array parameters use their adjusted pointer type. Typedefs, integer storage and packed
layout come from the compiler. Integer macros are compiler-evaluated, including uint64
values emitted as bigint.

Primitive-only definitions do not import Flax. `compatibility: 'node'` emits definitions
without the Flax binding factory, rejecting aggregate, C boolean, variadic and finalizer
extensions. This does not certify execution under Node's experimental native FFI.

The binding factory accepts an existing `DynamicLibrary`, checks aggregate layout and
resolves functions through its existing signature cache. It does not load a library at
module import or duplicate the runtime cache. Explicit resource recipes support
arbitrary constructor parameters and selected pointer receiver positions. A constructor
checks null and rolls back a failed cleanup attachment; manual close checks the library,
detaches, clears the pointer and releases once. A failed detach cannot authorize
release. If the library was already closed, cleanup remains attached for GC or Session
close.

Methods keep the receiver alive until the synchronous call returns. Reentrant manual
close from a native callback fails while the receiver is in use; exceptional returns
restore this guard. Other pointer arguments and results retain the raw FFI contract.
Mapped methods borrow their receiver; they must not free it or transfer its ownership.
Manual release and the finalizer use one captured destructor; changing the public raw
function dictionary cannot change that pairing. Detach failure leaves ownership intact.

Only native `void(pointer)` destructors independent of JavaScript qualify for GC.
Allocation functions must also avoid JS reentry before cleanup ownership is attached.
Cleanup failure does not authorize retry; constructor rollback aggregates cleanup errors
with the original error. Resource classes do not expose escaping zero-copy memory views.
Header types cannot determine pointer ownership, buffer lengths, callback threading or
retention. Applications use existing raw FFI APIs for these explicit policies.

Unsupported selected declarations fail with source locations. This includes inline or
static functions without exports, mangled C++ functions, bitfields, unsupported
alignment and flexible array mappings. C++ libraries can expose C ABI wrappers. This is
a C ABI generator, not a C++ object wrapper system.

The actual compiler verifies default C function/callback calling conventions, scalar
widths and signedness, enum storage, field types and constant values. C++ value records
must be trivially copyable standard-layout data with trivial copy construction. This
rejects ABI differences that cannot be detected from size and field offsets alone.

## Build target integration

`native.json` remains the library manifest. Its optional `codegen` recipe describes
selection, output and ownership; compiler inputs belong on the library itself. The
esbuild/Vite adapters detect these recipes before compiling application JS. They resolve
the optional generator only when needed. Projects without recipes neither load the
package nor fetch CastXML. Pre-generated dependency packages can be consumed without
running their header frontend; their receipt and selected target must remain valid.

Target precedence is explicit adapter options, `FLAX_TARGET`, `FLAX_CHECK_TARGET`,
Xcode's platform environment, then the supported native host. Apple arm64 macOS, iOS
device and iOS Simulator are distinct targets. Deployment versions default to macOS 15.0
and iOS 16.3, with explicit and Xcode environment overrides. A command outside Flutter
must select its cross-build target before bundling; a later Flutter invocation cannot
retroactively change already generated definitions.

The generated native plan includes the compiler profile, SDK identity, dependencies and
ABI assertions. The private Dart build hook rejects a different actual Flutter
OS/architecture/device variant and a changed SDK/compiler/header. Source compilation
uses the same triple, explicit minimum-OS flag, sysroot, standard, defines and flags.
Explicit minimum flags prevent the toolchain's defaults from overriding the header
generation target. Generated sources disable implicit release/NDEBUG/optimization
defines; authors choose optimization or feature flags explicitly on the library.

The hook compiles ABI assertions again against the staged headers. CMake receives the
declared compiler flags and minimum deployment version, with implicit Release flags
cleared. Assertions also compile as a separate source unit in the actual library; CMake
codegen requires `cmake.target` so target-specific compile definitions apply to the
checks. Separate units preserve source-local feature macros. Authors must still keep
source-specific options and private toolchain overrides consistent with their declared
ABI. A prebuilt binary requires matching vendor headers/ABI settings: header assertions
cannot inspect the ABI used to build an arbitrary binary.

Native inputs continue through existing package selection, code assets, framework
embedding and signing. Selection is at native package/library granularity; codegen does
not promise native symbol dead stripping. Generator tools and XML dependencies never
enter the application JS graph. Native header changes during Vite HMR require a native
rebuild and are rejected instead of hot-loading a changed ABI. Generated output changes
are rejected by the same HMR guard, including files regenerated by a separate CLI
process while Vite is running.

## Generation lifecycle and evidence

Portable archive checks run through ordinary JS tests and the package-owned
`check:archive` hook in `packages:check`; codegen stays outside runtime package
inventories. The separate `pnpm run ffi-codegen:check` gate checks the frontend and
example on macOS arm64 for macOS and iOS Simulator. Global JS build/typecheck excludes
that Apple-dependent example explicitly. Its standalone typecheck generates missing
outputs before checking TypeScript. See the package's
[prerequisites](../../packages/flax_ffi_codegen/js/README.md#prerequisites) for
automatic frontend installation and the required Xcode/CMake setup.

The frontend archive and cached executable are pinned by SHA-256. Explicit/offline
frontend paths are supported; no installation script or device import downloads tools.
Generation caches the recipe, target/compiler, frontend/emitter and transitive headers.
Each build rechecks compiler include resolution, including new higher-priority headers.
Generation compares dependency hashes before and after extraction; a detected input
change fails without replacing prior output. A cache hit skips CastXML and emission. The
generator verifies output hashes, publishes a complete successful generation and
preserves unchanged timestamps. It rejects unowned output files and concurrent writers.
On a publication failure, prior generated files are restored or retained in a named
backup.

The [acceptance runner](../../packages/flax_ffi_codegen/test/runtime/README.md) installs
packed npm artifacts into disposable consumers, generates real headers, packages the
native library automatically and executes it in macOS V8 JIT and iOS Simulator V8
jitless. It also runs generated SQLite calls, real Session GC, constructor failure,
repeated cleanup and a negative Flutter target check. Exact tool versions, binary
identities and counts are in the maintained
[results](../../packages/flax_ffi_codegen/test/runtime/results.json).

The separate
[Wallet Core integration](../../packages/flax_ffi_codegen/test/wallet_core/README.md)
uses all 83 headers from `wallet_core_bindings` 4.8.4 and matched native products. It
compares all 464 generated argument/return signatures with Dart ffigen and function
names with binary exports, then executes deterministic wallet, signing, encoding and
resource-lifecycle checks through the same JS path. Its iOS consumer packages the two
vendor XCFramework dependency products. Universal images are thinned before import
inspection and their Mach-O platform must match the actual Flutter platform/variant;
SDK-declared Swift system aliases resolve to system paths rather than becoming
undeclared application dependencies.

The consumer checks exceptional cleanup after consecutive native allocations, as well as
class GC. Negative native builds reject a wrong-platform arm64 image, a missing declared
vendor dependency and an unknown Swift system alias. It also inspects the embedded
images' platforms and actual rewritten import names.

Platform matching checks every build-version command and applicable legacy minimum-OS
command, so legitimate zippered images are independent of command order. Additional
macOS fixtures package and load legacy-only, multiple-modern and mixed old/new images.
The consumer fails each consecutive allocation with null and exceptions, then verifies
each successful native pointer is released once. Cleanup exceptions after release must
not retry that pointer or prevent the remaining outer cleanups.

This real library primarily tests opaque pointers and integer types. Resolving every
function is distinct from exercising every function. Two header-local string constants
remain unsupported by integer constant extraction; they require C accessors if needed.
The synthetic fixtures remain necessary for aggregate, callback and variadic coverage.

No physical iOS device execution, non-Apple target, non-macOS-arm64 frontend host or
Node native FFI execution is certified by these checks.
