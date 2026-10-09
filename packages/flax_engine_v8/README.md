# V8 engine

`FlaxV8Engine.createRuntime()` delegates to `FlaxEngine.createRuntime()` in the
maintained Flutter engine. macOS and Android arm64 use V8 15.4.80.15 JIT. Android debug
and release/AOT correctness has emulator and Pixel 4 acceptance; Android GC/frame
performance remains unmeasured. The factory rejects iOS and unsupported targets;
platform policy uses Hermes on iOS.

There is no native asset hook or independent bridge build. Published package staging
contains the Dart factory and notices, without engine sources or duplicate libraries.
The SDK lock and adapter sources remain local historical/internal build inputs; the
Flutter fork owns the current runtime implementation.

Use the [workspace setup](../../README.md#quick-start) and
[runtime contract](../../docs/architecture/runtime.md). Native ABI 2 and UI protocol 23
remain unchanged; conditional GC uses a separately versioned engine extension.
