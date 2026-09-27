# V8 engine

Experimental macOS arm64 runtime (macOS 15+) using V8 15.2.124.21 with JIT. Create a
runtime with `FlaxV8Engine.createRuntime()`. The native asset hook downloads the
version-locked V8 shared SDK, verifies it, and compiles the local Flax ABI and adapter.
`dart run melos run native:build:v8` exercises that same path and native tests.

A distributable archive contains the Dart API, asset hook, CMake files, patched adapter,
JSI sources, SDK lock, and `THIRD_PARTY_NOTICES.txt`; it contains no built dylib. A
candidate SDK can be selected with `sdkArchive` and `sdkSha256` under
`hooks.user_defines.flax_engine_v8` in the consuming application's `pubspec.yaml`. The
package metadata has the `engine` capability and no npm peer.

See [the runtime contract](../../docs/architecture/runtime.md) and
[verification scope](../../docs/architecture/runtime.md#verification).
