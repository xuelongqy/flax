# V8 adapter

Experimental native runtime with target-specific schema 3 SDK locks. The adapter uses
Microsoft's JSI ABI implementation and consumer-side JSI wrapper with the existing
Hermes JSI headers. Flax's C ABI and shared bridge are unchanged. Hermes remains the
default for repository commands and examples.

Build with `dart run melos run native:build:v8` from the repository root. The hook and
command use [sdk.lock.json](sdk.lock.json) to fetch a versioned V8 SDK. The adapted
v8-jsi and JSI sources are packaged here; [v8.json](v8.json) and
[the adapter patch](v8-jsi.patch) record their upstream provenance. V8 source, GN,
depot_tools, Rust, and host tool pinning live in the SDK repository.

The SDK builds shared V8 components with embedded startup data and JIT outside iOS. iOS
uses a jitless monolith linked as a dynamic library. Intl, pointer compression and the
V8 sandbox are disabled. This is not a security isolation boundary. The bridge exports
only `flax_v8_get_api` and links the SDK dynamically.

The process owns one default V8 Platform; each runtime owns an Isolate, Context,
allocator and references. Locker/Isolate scopes cover operations, persistent-reference
release and teardown. Outermost host entry pumps at most 64 ready foreground tasks
without waiting; nested callbacks do not pump unrelated tasks. Promise jobs still run
only at an explicit microtask checkpoint. Background V8 workers never invoke Dart.
Teardown notifies the platform and cancels queued tasks before disposing the Isolate.
The white-box lifecycle test verifies migration, delayed/immediate task cancellation,
and the behavior of a task runner retained past runtime destruction.

The adapter patch also updates V8 external pointer tags and property receivers, removes
obsolete Promise event names, and fixes the drained-queue result. The runtime vtable
declaration is in the defining anonymous namespace so MSVC resolves it to that table
rather than an undefined global symbol. The JSI headers are not upgraded. The
compatibility defines select the adapter's complete JSI v20 implementation; compilation
against the pinned header verifies its abstract interface. The consumer wrapper
overrides UTF-16 creation/reading with the existing native ABI operations. It never
evaluates application code to convert non-ASCII strings or keys. The patch appends an
internal ArrayBuffer detachment query using V8 `WasDetached()` and increments
Microsoft's library-internal JSI ABI to 2; wrappers reject older tables. This is
independent of Flax ABI 2 and UI protocol versions. Both sides compile into the same
bridge library, with no new production ABI export.

Native asset hooks download and validate the SDK, then compile the Flax bridge. A macOS
release app needs `com.apple.security.cs.allow-jit`; the V8 example staging tool adds it
to debug/profile and release entitlements. `FLAX_VERIFY_V8_JIT=1` enables an internal
verification workload and logs actual machine-code events for its function. This
test-only initialization enables V8 native syntax to force optimization and fails if the
probe produces no machine code. It does not expose a Flax JS API or permit a jitless
fallback outside iOS. Normal runtime creation does not execute that workload.

See the [runtime verification scope](../../../docs/architecture/runtime.md#verification)
and [contribution checks](../../../CONTRIBUTING.md#checks).
