# 0002: Experimental Runtime and Native Assets

Status: accepted for the initial macOS arm64 implementation.

## Context

The first runtime must prove synchronous Dart/JS reentry, resource ownership, and
standalone package loading while preserving the existing package boundaries. UI bindings
and a default engine selection need later evidence.

## Decision

- Implement Hermes first on macOS arm64, targeting macOS 15 or newer. Pin Hermes and its
  bundled JSI to revision `3477757eb2475555cf8d8df24bfb1deb0613880d` and verify the
  source archive checksum. This follows the Hermes reference used by React Native
  0.87.1, without adopting React Native's runtime or build system.
- Keep the public C ABI and shared JSI bridge in `native/`. Use opaque runtime handles,
  runtime-owned value IDs, and an experimental versioned function table. Check its
  version and size before constructing the Dart wrapper. Incompatible table changes
  require a version change; no long-term ABI policy is promised yet.
- Put engine-independent Dart interfaces and shared FFI in `flax`. Expose a separate
  public engine extension entry so adapters do not import another package's `lib/src`.
  Generate FFI declarations from C headers with pinned ffigen; keep Flutter API binding
  generation separate and unimplemented.
- Give each runtime one owning Dart isolate and synchronous entry. Use non-leaf FFI and
  isolate-local callbacks for same-stack reentry. Keep errors local to calls and
  microtask checkpoints explicit. Reject active disposal, expire borrowed references,
  and destroy the engine before closing callbacks.
- Explicitly build native source and prepare package-local generated assets. Build hooks
  only validate and register these assets. Link static Hermes into the adapter dylib so
  the package has no external engine library dependency.
- Verify temporary package copies outside the monorepo and a relocated AOT bundle after
  deleting the staging inputs. Keep binaries, source caches, and consumers ignored or
  outside the repository.

## Reasons and consequences

A single bridge implementation can later support other engine adapters without
replicating Dart ownership logic. A C function table avoids exposing a C++ ABI to Dart.
JSI still requires engine-specific build, feature, and platform verification.

Synchronous entry permits Flutter-style builders in a later phase, while explicit
microtasks make the first scheduling contract testable. It also means long-running JS
can block the owning isolate; this milestone adds no execution deadline or scheduler.

Explicit preparation makes missing package inputs visible and keeps static checks free
of engine builds. Package copies prove loading independence without pretending registry
publication exists. Future release assembly must include native assets and required
notices deliberately, because these files are ignored in the development checkout.

Hermes is not selected as the default. Other platforms, permanent ABI compatibility,
security isolation, performance budgets, licensing, and remote distribution remain open.

## Evidence and references

- [Runtime contract](../architecture/runtime.md)
- [Packaging verification](../architecture/packaging.md)
- [Milestone acceptance](../tasks/hermes-macos-runtime.md)
- [React Native 0.87.1 Hermes reference](https://github.com/facebook/react-native/blob/v0.87.1/packages/react-native/sdks/.hermesv1version)
- [Dart isolate-local callback constraints](https://api.dart.dev/dart-ffi/NativeCallable/NativeCallable.isolateLocal.html)
