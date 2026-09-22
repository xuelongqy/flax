# 0003: Generated Bindings and Reactive Flutter Subtrees

Status: accepted; extended by later UI and binding decisions.

Extended by [ADR 0004](0004-contextual-builders.md), which adds contextual builders. The
[UI contract](../architecture/ui.md) defines the current protocol and scope.

## Decision

Generate selected public constructors, types, and defaults from analyzer into both Dart
and TS packages. Keep selection rules separate from the parser/model and emitters. Use
declaration origins for identity, including standalone Material re-exports. The public
extension entry and JS/Dart binding protocol are explicitly versioned.

Wrap signals-core with explicit property bindings. Descriptors are immutable,
subscriptions belong to mounted properties, and updates are coalesced before Flutter
build. Generate a distinct host class per Widget type and delegate keyed and positional
reconciliation to Flutter. Keep unchanged child Widgets during property-only updates.
Keep real Theme, Directionality, and layout in Flutter.

Each FlaxView owns its runtime and an internal session root. Parent rebuilds preserve
that session; source/factory/registry changes replace the subtree. Reference leases keep
the engine accessible while retiring descendants. Recoverable update errors retain last
valid content; initial errors dispose and display a Flutter error placeholder.

Use esbuild to produce ES2019 IIFEs during development. Embedded content reuses the C
ABI/JSI runtime without extending its native protocol or automatically draining
microtasks.

## Rationale and consequences

This preserves Flutter constructor and Element semantics while avoiding hand-maintained
Dart/TS signatures. Explicit subscriptions make update locality and cleanup observable.
The generated subset is intentionally small; unsupported types fail rather than creating
misleading APIs. Standalone Material remains separate from core Flutter.

macOS Widget tests, application integration, release compilation, and earlier headless
runtime/package tests are separate evidence. None establishes other-platform support,
production performance, security isolation, or a permanent ABI. JS custom widgets,
Context, Controllers, broad component coverage, and runtime modules remain later work.
See [host details](../architecture/ui.md) and [generation](../architecture/bindings.md).
