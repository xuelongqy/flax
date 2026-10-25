# Legacy iOS engine factory

`FlaxHermesEngine.createRuntime()` is deprecated. It remains an iOS source compatibility
alias for `FlaxEngine.createRuntime()` from `package:flax/runtime.dart`, which selects
the maintained V8 jitless engine. It does not install a second VM or expose Hermes
specific globals, HBC execution or engine selection.

Migrate callers to `FlaxEngine.createRuntime()`. The supported iOS matrix remains arm64
simulator Debug and physical-device Release/AOT on iOS 16.3 or later. Native ABI, GC and
binding extension checks remain active. Unsupported platforms fail before allocation.
