# Task Records

Use the [task template](TEMPLATE.md) for work that needs a reviewable plan or handoff.
Create one file per task with a descriptive lowercase name. Small, self-contained
changes do not require a task document.

Keep records short and current: scope, acceptance, results, validation evidence,
blockers, and the next action. Refer to architecture decisions instead of copying them.
Do not maintain a shared chronological agent log.

Current binding-kit handoff: [External Binding Kit v1](external-binding-kit-v1.md) (complete).
Next: [Binding Coverage Expansion v1](binding-coverage-expansion-v1.md).

Historical records retain the API names used during their original validation. See
[public Dart type naming](dart-public-type-naming.md) for the current names.

Current runtime handoff: [Hermes on macOS arm64](hermes-macos-runtime.md).

Current repository-structure handoff:
[Package distribution boundaries](package-distribution.md), following
[package isolation completion](package-isolation.md). The earlier
[capability package boundary](package-boundaries.md) record describes the initial move.

Disposable notes belong in the ignored local-notes directory. Do not copy private
prompts, credentials, or full conversation transcripts into task files.

- [Generated reactive UI](generated-reactive-ui.md): macOS embedded host and validation.
- [Contextual builders](contextual-builders.md): current callback and Context handoff.

- [Navigation sessions](navigation-sessions.md)

- [Named Pages and host Router](pages-and-router.md): page entry and routing milestone.

- [Implementation cleanup](implementation-cleanup.md): current ownership, generator and
  test handoff.

- [Owned objects and ScrollController](owned-objects.md): object generation and cleanup.

- [Hermes loop closures](hermes-loop-closures.md): block-scoping configuration and
  regressions.

- [Text editing and immutable snapshots](text-editing.md): current input handoff.

- [Dart interop and review fixes](dart-interop.md): protocol 8 ownership and conversion.
- [Styles and themes](styles-theme.md): generated styling and host/local Theme
  validation.

- [Lazy lists and independent results](lazy-list.md)
- [Collection views, Context cleanup and nested callbacks](interop-fixes.md)
- [Generated layout and ParentData](generated-layout.md)

- [Generated containers and decoration](generated-decoration.md)

- [Flutter State and components](flutter-state.md): lifecycle, setState and signals.

- [Component types, queries and measurements](component-types.md)

- [Returned callbacks, native Widgets and nullable Futures](returned-callbacks.md)

- [Widget interfaces and Material page shells](widget-interfaces.md)

- [Independent engine benchmarks](engine-benchmarks.md)

- [Session host plugins and Fetch](session-host-plugins.md)

- [Engine boundary fixes](engine-boundary-fixes.md): native UTF-16, detachment and ID
  isolation.

- [Body streams, abort retention and frozen buffers](host-body-fixes.md)

- [Base data and Streams migration](base-data-migration.md)

- [WebSocket transport feasibility](websocket-transport.md): blocked WSS completion gate
  and reproduction evidence.

- [WebSocket event order, close budget and listener types](websocket-fixes.md)

- [Top-level functions and native dialogs](top-level-functions.md)

- [Proxy properties and ValueListenable](proxy-properties.md)

- [Promise to Future callbacks and RefreshIndicator](async-callbacks.md)

- [Complete callback parameters and generic erasure](callback-parameters-generics.md)

- [Deferred generic factories, Iterable and Set](deferred-generics.md)

- [Complete Dart Stream interop](dart-stream-interop.md)

- [External Binding Kit v1](external-binding-kit-v1.md): stabilize code generation and
  prove third-party binding packages outside the repository.

- [Binding Coverage Expansion v1](binding-coverage-expansion-v1.md): grow explicit
  selection coverage after Kit v1 (not whole-library auto-bind).

- [Canvas 2D, rAF and game input](canvas.md)
