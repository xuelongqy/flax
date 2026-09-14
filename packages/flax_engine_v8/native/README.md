# V8 adapter

Experimental macOS arm64 runtime targeting macOS 15+. The adapter uses Microsoft's JSI
ABI implementation and consumer-side JSI wrapper with the existing Hermes JSI headers.
Flax's C ABI and shared bridge are unchanged. Hermes remains the default for repository
commands and examples.

Build with `dart run tool/native.dart` from the package directory or
`dart run melos run native:build:v8` from the repository root. Inputs and host tool
versions are fixed in [v8.json](v8.json); the build checks exact revisions and applies
[the adapter patch](v8-jsi.patch). V8's pinned DEPS controls Clang, Rust, GN, CIPD
packages, and source dependencies. `gclient sync` is skipped when that cached GN and
Clang already exist, so a complete tree does not need Google's vpython registry. CMake
and Ninja are checked against the manifest; Xcode supplies the pinned macOS SDK. Source
archive checksums record prototype provenance; the production builder uses exact Git
checkouts.

GN builds a release monolith with embedded startup data, JIT enabled, Intl disabled, no
pointer compression and no V8 sandbox. This is not a security isolation boundary. V8's
Temporal Rust archives and compiler runtime are linked using its pinned LLD. Only
`flax_v8_get_api` is exported. There is no external snapshot or ICU data file.

The process owns one default V8 Platform; each runtime owns an Isolate, Context,
allocator and references. Locker/Isolate scopes cover operations, persistent-reference
release and teardown. Outermost host entry pumps at most 64 ready foreground tasks
without waiting; nested callbacks do not pump unrelated tasks. Promise jobs still run
only at an explicit microtask checkpoint. Background V8 workers never invoke Dart.
Teardown notifies the platform and cancels queued tasks before disposing the Isolate.
The white-box lifecycle test verifies migration, delayed/immediate task cancellation,
and the behavior of a task runner retained past runtime destruction.

The adapter patch also updates V8 external pointer tags and property receivers, removes
obsolete Promise event names, and fixes the drained-queue result. The actual JSI headers
are not upgraded. The compatibility defines select the adapter's complete JSI v20
implementation; compilation against the pinned header verifies its abstract interface.
The consumer wrapper overrides UTF-16 creation/reading with the existing native ABI
operations. It never evaluates application code to convert non-ASCII strings or keys.
The patch appends an internal ArrayBuffer detachment query using V8 `WasDetached()` and
increments Microsoft's library-internal JSI ABI to 2; wrappers reject older tables. This
is independent of Flax ABI 2 and UI protocol versions. Both sides compile into the same
dylib, with no new exported symbol. Deprecated V8 setter APIs still produce upstream
compiler warnings.

Native asset hooks validate prepared files and never build or download an engine. The
release app needs `com.apple.security.cs.allow-jit`; the V8 example staging tool adds it
to debug/profile and release entitlements. `FLAX_VERIFY_V8_JIT=1` enables an internal
verification workload and logs actual machine-code events for its function. It does not
enable native syntax, expose a JS API, change JIT flags or permit JITless fallback.
Normal runtime creation does not execute that workload.

See the [task and validation record](../../../docs/tasks/v8-support.md).
