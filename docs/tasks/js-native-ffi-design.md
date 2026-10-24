# Task: JavaScript FFI package

Status: completed and integrated into local Flax `main`, paired with maintained-engine
`flax/main` commit `7073a17018976155fa123c5c9c627776e776dbeb`. Both feature branches
were rebased onto their current main branches and integrated by fast-forward. No push or
registry publication is included.

## Scope and ownership

Developers install one JS package and use Node-style APIs. Missing portable native
capabilities are added in the same style. Core owns internal Dart installation, native
asset lookup, checkpoints and Session retirement. Calls go directly from JSI/libffi to C
ABI. The engine owns production native source; package tests no longer depend on
experiment source or a duplicate C++ implementation.

The package owns its [API guide](../../packages/flax_ffi/js/README.md),
[runnable example](../../packages/flax_ffi/example/README.md), archive/type/tree-shaking
tests and [runtime acceptance suite](../../packages/flax_ffi/test/runtime/README.md).
`@flax/build` selects retained native inputs and stages the private native build
package. No public Dart FFI package or application-level FFI registration is introduced.

## Delivered behavior

- Dynamic/process/executable lookup, signature validation and reentrant caching, ABI
  scalar/aggregate layouts, typed varargs, globals and returned function pointers.
- Bigint pointers, copied/borrowed byte views, optional Buffer compatibility,
  aligned/scoped allocation, manual release and optional GC finalizers with confirmed
  detach cancellation and constructor rollback.
- Owner-thread, listener, owner-delivered foreign-thread and isolated callbacks;
  background calls, cancellation, errno and native cleanup of undelivered results.
- Session/isolate retirement, stop/join ownership, callback errors that cannot strand
  cleanup, bounded finalization and coalesced wakeups; shared images release through
  each Session's own lease on its owner thread.
- Source/static/prebuilt libraries, framework/XCFramework slices, explicit CMake inputs
  and declared native dependencies. Unused imports withdraw owned native outputs.

The checked-in example opens a packaged C library, wraps a native Counter in a JS class,
passes a Buffer to C and contrasts native borrowed views with copies. A standard Flutter
host displays the results. The example's nested `app/` remains outside the root Pub
workspace because its native build dependency is generated locally.

## Verification

[Current package receipt](../../packages/flax_ffi/test/runtime/results.json) records
actual runs, exact test counts, optional-selection cases, archive contents and source
hashes. Real-engine tests use macOS arm64 V8 Debug/Release and iOS arm64 Simulator
Hermes Debug. Existing 14 engine GC contracts are part of the package runner; no private
wrapper is needed to reproduce them.

The merge pass fixes completed callback errors being redirected into an unrelated owner
call, adds the production engine export, and preserves optional dependency rewriting in
archives. Standalone example builds target their own Flutter host; generic UI fixtures
do not stage native assets into the repository root. Package installation tests also run
with an empty npm cache and pnpm's isolated dependency layout.

Post-rebase runtime acceptance covers all 15 application configurations, including 42 GC
contract executions and three 30-second background stress runs. Core analysis and 45/45
runtime tests validate the combined FFI and current Session/font lifecycle. Native
sources match the previously tested engine implementation. Ordinary example and UI
bundles are regenerated from the combined main sources; JavaScript, tool and type checks
run against those outputs. The receipt records exact counts and source hashes.

The receipt keeps the broader pre-rebase checks separate. That generator batch passed
748 cases; one concurrent Flutter native-asset manifest copy failed and passed when
rerun alone. Neither that batch nor this scoped integration pass is reported as a clean
single full-workspace-check invocation.

[Historical receipts](../../experiments/ffi_dlopen/results.json) retain earlier negative
controls, GC measurements and their original source layout. Historical performance is
not claimed as a new package benchmark. Earlier Gate A/provider experiments remain
historical only.

## Remaining acceptance

The maintained-engine implementation is integrated before the Flax package/Core changes.
The optional ABI lookup keeps older engines usable for applications that do not import
FFI; using `@flax/ffi` requires an FFI-enabled engine. Header/definitions and binding
generation remain a separate task and do not block this package's supported runtime
capabilities.

Physical iOS/distribution signing, other-platform FFI ABIs, clean full-engine GN builds,
whole-engine sanitizers and long-running stability need separate acceptance. The current
runner relinks a targeted overlay from verified engine objects. Arbitrary native cleanup
can block its calling thread; batch bounds do not bound destructor duration. Raw
pointers and borrowed views require application lifetime discipline.

No public API additions are required for this package promotion. Header generation,
unknown toolchains, a general Node runtime and publication remain outside this task.
