# V8 engine

Experimental macOS arm64 runtime (macOS 15+) using V8 15.2.124.21 with JIT. Create a
runtime with `FlaxV8Engine.createRuntime()`. Build assets explicitly with
`dart run melos run native:build:v8`; the native asset hook never downloads or builds.

A distributable archive contains the Dart API, asset hook, prepared dylib and manifest,
and the consolidated root `THIRD_PARTY_NOTICES.txt`. V8 source, CMake files, download
configuration, patches, and the detailed notice tree remain repository-only. The package
metadata has the `engine` capability and no npm peer.

See [the runtime contract](../../docs/architecture/runtime.md) and
[verification scope](../../docs/architecture/runtime.md#verification).
