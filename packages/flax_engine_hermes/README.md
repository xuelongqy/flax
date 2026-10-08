# Hermes engine

`FlaxHermesEngine.createRuntime()` delegates to the maintained engine's iOS Hermes
runtime and rejects other platforms. The current producer supports arm64 simulator debug
and physical-device release/AOT applications on iOS 16.3 or later. Hermes is an
interpreter without JIT, linked statically into `Flutter.framework`. macOS and Android
arm64 use V8 JIT.

Each session has a separate Hermes VM. A shared Dart UI-isolate coordinator traces
conditional references through every participating VM, preserving either business root
and collecting rootless Dart/JS cycles. Applications use ordinary session ownership;
there is no user GC configuration. Simulator profile/release and device debug/profile
are unsupported. Hermes GC/frame performance and distribution signing require separate
acceptance. See the [acceptance task](../../docs/tasks/engine-cross-heap-gc.md).

There is no standalone native asset hook or fallback runtime. Package staging contains
the Dart factory and notices without engine sources or libraries. Existing SDK locks and
release attachments are unchanged internal/historical inputs.

Use [FlaxEngine](../../docs/architecture/runtime.md) and the
[fixed platform policy](../../docs/decisions/0039-engine-owned-cross-heap-gc.md).
