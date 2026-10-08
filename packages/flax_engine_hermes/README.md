# Hermes engine

`FlaxHermesEngine.createRuntime()` is reserved for the maintained engine's iOS Hermes
implementation. It rejects other platforms. macOS and Android arm64 use V8; iOS Hermes
engine integration and acceptance remain pending.

There is no standalone native asset hook or fallback runtime. Package staging contains
the Dart factory and notices without engine sources or libraries. Existing SDK locks and
release attachments are unchanged internal/historical inputs.

Use [FlaxEngine](../../docs/architecture/runtime.md) and the
[fixed platform policy](../../docs/decisions/0039-engine-owned-cross-heap-gc.md).
