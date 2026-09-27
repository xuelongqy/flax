# ADR 0036: Shared engine SDK and locally compiled ABI

Status: Accepted for macOS arm64 Hermes and V8.

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
owns its adapter, CMake configuration, and a lock with SDK version, target, URL, and
SHA-256. V8 also packages its patched v8-jsi and compatible JSI sources. The native
asset hook downloads and verifies the SDK on first build, reuses a verified cache, then
compiles and registers the bridge and every engine dependency. The build-time
`sdkArchive` and `sdkSha256` user-defines permit candidate testing before publication.
All other platforms remain separate work.

## Consequences

Changing Flax's ABI or adapter rebuilds only the bridge. Engine source builds remain in
the SDK repository. A consumer needs a compatible C++ compiler and CMake/Ninja to build
the bridge, and the first build needs the SDK archive or a valid local cache. Flutter
packages every registered dylib as a framework; native asset validation must test that
layout as well as direct JIT/AOT loading. SDK schema 2 rejects the old ABI-containing
0.1.0 artifacts. Native ABI 2 and the Dart runtime API are unchanged.
