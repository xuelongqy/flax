# Architecture Decisions

- [0001: Workspace and scaffold boundaries](0001-workspace-and-scaffold.md) is
  superseded by [0017](0017-package-boundaries.md).
- [0002: Experimental runtime and native assets](0002-experimental-runtime.md) is
  accepted.
- [0003: Generated bindings and reactive subtrees](0003-generated-reactive-ui.md) is
  accepted.
- [0004: Contextual builders and synchronous members](0004-contextual-builders.md) is
  accepted.
- [Open questions](open-questions.md) records decisions that have not been made.
- Use the [decision template](TEMPLATE.md) for a new significant decision.

Record the decision, its reason, and practical consequences. Update the index when
adding a record. A design decision is not evidence of implemented behavior.

- [0005: Navigation sessions and Route ownership](0005-navigation-sessions.md)

- [0006: Named Pages and host Router](0006-pages-and-router.md) is accepted.

- [0007: Explicitly owned Dart objects](0007-owned-dart-objects.md) is partly superseded
  by [0009](0009-dart-interop.md).

- [0008: Dart-constructed value snapshots](0008-dart-value-snapshots.md) is superseded
  by [0009](0009-dart-interop.md).

- [0009: Real Dart references and application ownership](0009-dart-interop.md) is
  accepted.

- [0010: JS components and native Flutter State](0010-js-components-and-state.md) is
  accepted.

- [0011: Fixed Widget interface configuration](0011-widget-interface-configuration.md)
  is accepted.

- [0012: Experimental V8 beside Hermes](0012-experimental-v8.md) is accepted.

- [Session-scoped host plugins](0013-session-host-plugins.md)

- [0014: Native Route functions and explicit observation](0014-top-level-route-functions.md)
  is accepted.

- [0015: Session namespace and persistent localStorage](0015-local-storage-namespace.md).

- [0016: Canvas command buffer and input snapshots](0016-canvas-command-buffer.md) is
  accepted.

- [0017: Capability package boundaries](0017-package-boundaries.md) is accepted and
  supersedes ADR 0001's root Dart/JS/native directory layout.

- [0018: Binding coverage strategy](0018-binding-coverage-strategy.md) is accepted.

- [0019: Dart Stream interop](0019-dart-stream-interop.md) is superseded by ADR 0020.

- [0020: Complete Dart Stream interop and UI protocol 20](0020-ui-protocol-20.md) is
  accepted. Native ABI 2 is unchanged.

- [0021: External Binding Version Domains and Compatibility](0021-external-binding-version-domains.md)
  is accepted.

- [0022: Stable Binding Identity and Dependency Ownership](0022-stable-binding-identity.md)
  is accepted.

- [0023: External Binding Package and Trust Boundary](0023-external-binding-package-trust.md)
  is accepted.
