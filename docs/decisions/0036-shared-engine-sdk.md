# ADR 0036: Shared engine SDK and locally compiled ABI

Status: Accepted for native Hermes and V8 SDK consumption; target acceptance is recorded
separately.

## Context

Flax's C ABI and engine adapters change more often than upstream engines. Packaging them
into one engine binary required rebuilding and redistributing the engine for every
bridge change. The 0.1.0 runtime release contained the bridge and was not adopted.

## Decision

The `flax_js_runtime` repository owns only upstream source pins, engine patches, shared
engine builds, and relocatable SDK archives. Hermes and V8 SDKs contain the shared
libraries, public/generated headers, CMake import config, licenses, and a versioned
manifest with hashes and toolchain metadata. They contain no Flax ABI or adapter.

Flax owns the single ABI 2 implementation in `packages/flax/native`. Each engine package
owns its adapter, CMake configuration, and a schema 3 lock with SDK version, release tag
and per-target URLs and SHA-256 hashes. V8 also packages its patched v8-jsi and
compatible JSI sources. The native asset hook downloads and verifies the SDK on first
build, reuses a verified cache, then compiles and registers the bridge and every engine
dependency. The build-time `sdkArchive` and `sdkSha256` user-defines permit candidate
testing before publication. Locks cover the twelve native targets: desktop x64/arm64,
Android arm32/arm64/x64, and iOS device arm64 and simulator arm64/x64. Target selection
uses build configuration, not the host. V8 is jitless on iOS and requires actual JIT
verification elsewhere.

`flax_native_assets` owns Android `libc++_shared.so` and Windows CRT code assets. Both
engine packages depend on its build hook. It reuses one installed engine's locked SDK
and sends file hashes to dependent hooks; each engine verifies its copy before omitting
shared assets. Flutter therefore receives one bundled asset per filename, including
debug builds. SDK mismatches fail rather than choosing a copy. This package has no
JavaScript or runtime registration API.

## Consequences

Changing Flax's ABI or adapter rebuilds only the bridge. Engine source builds remain in
the SDK repository. A consumer needs a compatible C++ compiler and CMake/Ninja to build
the bridge, and the first build needs the SDK archive or a valid local cache. Flutter
packages every registered dylib as a framework; native asset validation must test that
layout as well as direct JIT/AOT loading. SDK schema 3 rejects old manifest formats and
ABI-containing artifacts. Native ABI 2 and the Dart runtime API are unchanged.

Common test semantics retain their package owners and run once on Linux by default, with
both engines for runtime/UI assertions. Relevant native/platform changes add only
platform specialty checks; full target validation is manual. Mobile assertions reuse
shared sources through a test application and a separate test-only native library. Full
checks outside Linux x64 prepare target bundles and execute every shared runtime and UI
assertion; they do not repeat the host-only common gate. Standalone local validation
runs `melos check` separately. Build-only evidence cannot certify device execution or
application delivery. See [platform verification](../testing-platforms.md) for commands,
routing and conditions.
