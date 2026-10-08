# ADR 0039: Engine-owned cross-heap GC

Status: Accepted architecture; local macOS arm64 and Android arm64 emulator and Pixel 4
correctness acceptance passed.

## Context

Separate Dart and JS collectors cannot reclaim a cycle held strongly by both bridge
tables. Finalizers and weak wrapper caches do not make the opposite heap's business
references visible. Requiring application code to break those cycles would expose a
framework ownership problem to every binding consumer.

## Decision

Flax requires its maintained Flutter engine. The first baseline is Flutter 3.47.6 on
`flax/main`; version branches use `flax/<flutter_version>`. The fork owns the C++
bridge, engine adapter and revision-checked Dart patch. DEPS applies the patch
idempotently. `flax_js_runtime` remains an internal source and SDK build repository;
existing SDK release assets are unchanged. This supersedes ADR 0036's independent
runtime deployment.

`FlaxEngine.createRuntime()` obtains the engine's native ABI 2 and internal GC extension
1, checking their sizes and exact Flutter/Dart revisions before runtime allocation.
Ordinary Flutter and incompatible engines fail explicitly. UI protocol 22 and generated
JS calls are unchanged. iOS selects Hermes; other native platforms select V8 with JIT.
macOS and Android arm64 are implemented. Android debug and release/AOT correctness
passes on an arm64 emulator and a Pixel 4 running Android 13. Other targets fail before
allocation.

One Dart UI isolate owns one V8 heap and CppHeap. Sessions have separate Contexts,
microtask queues and module state. Dart retains its ordinary parallel marking, then
conditional tracing follows real Dart origins and JS peers to a fixed point. Either
business root retains the pair; rootless cross-heap cycles can be reclaimed. Moving and
minor collections preserve conditional handles. JS allocation pressure and Flutter idle
notifications coalesce owner-thread collection requests. GC never calls business code.

Bridge identity indices are weak. Finalizer and shutdown indices retain only detached
cleanup metadata, never business objects or JS facades. Session close releases pending
cleanup even when a Widget finalizer has not run. Closing one session does not destroy
another Context. Isolate shutdown releases native edges before Dart handles become
invalid. Background runtimes and multiple UI isolates in a shared isolate group are
rejected rather than entering an unsupported collector configuration.

## Consequences

Consumers build with Flutter's official `--local-engine` and `--local-engine-host` flags
during this phase. The Flutter framework carries one V8 library set; Dart packages do
not compile or bundle a second runtime. Debug, profile and release/AOT require separate
application checks, including signing and relocation; macOS also requires JIT
entitlements. Android uses the existing engine JAR and one V8/shared-libc++ library set,
with Dart AOT in release. The accepted API 37 emulator uses 16 KB pages; the accepted
Pixel 4 uses 4 KB pages. These checks do not establish Android performance or
distribution acceptance.

Flutter still owns Element/State lifecycles. GC does not call application `dispose`, pop
Routes or reset static state. Applications retain their ordinary Flutter obligations;
they do not configure GC, install per-class GC mixins or create shadow objects.

The synthetic 300,000-object P95 target is 8 ms, not a Flutter frame-time guarantee.
Performance and platform acceptance require raw measurements from real applications. See
the [implementation and acceptance task](../tasks/engine-cross-heap-gc.md).
