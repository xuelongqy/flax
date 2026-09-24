# Architecture Decisions

These records preserve accepted decisions and their rationale. A design decision is not
evidence that every described capability is implemented. Current versions and
verification limits are in
[External Binding Verification](../architecture/external-binding-verification.md), and
current language support is in the
[Binding Coverage Map](../architecture/binding-coverage-map.md).

- [0001: Workspace and scaffold boundaries](0001-workspace-and-scaffold.md) is
  superseded by [0017](0017-package-boundaries.md).
- [0002: Experimental runtime and native assets](0002-experimental-runtime.md) is
  accepted.
- [0003: Generated bindings and reactive subtrees](0003-generated-reactive-ui.md) is
  accepted.
- [0004: Contextual builders and synchronous members](0004-contextual-builders.md) is
  accepted.
- [0005: Navigation sessions and Route ownership](0005-navigation-sessions.md) is
  accepted.
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
- [0013: Session-scoped host plugins](0013-session-host-plugins.md) is accepted.
- [0014: Native Route functions and explicit observation](0014-top-level-route-functions.md)
  is accepted.
- [0015: Session namespace and persistent localStorage](0015-local-storage-namespace.md)
  is accepted.
- [0016: Canvas command buffer and input snapshots](0016-canvas-command-buffer.md) is
  accepted.
- [0017: Capability package boundaries](0017-package-boundaries.md) is accepted and
  supersedes ADR 0001's root layout.
- [0018: Binding coverage strategy](0018-binding-coverage-strategy.md) is accepted.
- [0019: Dart Stream interop](0019-dart-stream-interop.md) is superseded by ADR 0020.
- [0020: Complete Dart Stream interop](0020-complete-dart-stream-interop.md) is
  accepted.
- [0021: External binding version domains](0021-external-binding-version-domains.md) is
  accepted with the current values defined by ADR 0035.
- [0022: Stable binding identity and dependency ownership](0022-stable-binding-identity.md)
  is accepted.
- [0023: External binding package and trust boundary](0023-external-binding-package-trust.md)
  is accepted.
- [0024: Basic typedef bindings](0024-basic-typedef-bindings.md) is accepted and
  extended by ADR 0025.
- [0025: Generic typedef bindings](0025-generic-typedef-bindings.md) is accepted.
- [0026: Top-level readonly bindings](0026-top-level-readonly-bindings.md) is accepted
  and refined by ADR 0027.
- [0027: Public library routing and module delivery](0027-public-library-module-delivery.md)
  is accepted.
- [0028: Structural Record bindings](0028-record-bindings.md) is accepted.
- [0029: Native Widget interface members](0029-native-widget-interface-members.md) is
  accepted and amends ADR 0011.
- [0030: Extension binding adapters](0030-extension-binding-adapters.md) is accepted.
- [0031: Mutable top-level bindings](0031-mutable-top-level-bindings.md) is accepted.
- [0032: Generic bound-only type references](0032-bound-type-only-references.md) is
  accepted.
- [0033: Automatic public-library bindings](0033-automatic-public-library-bindings.md)
  is accepted and amends ADR 0018.
- [0034: Preserve Flutter application semantics](0034-flutter-application-semantics.md)
  is accepted; ADR 0035 amends its codegen mechanism details.
- [0035: Shared generic owners, State variants and UI protocol 21](0035-generic-state-variants-and-protocol-21.md)
  is accepted. Binding selection format 2 and Manifest 12 are current-only; native ABI 2
  is unchanged.

[Open Questions](open-questions.md) records decisions that have not been made. Use the
[decision template](TEMPLATE.md) for a new significant decision. Record the decision,
its reason and practical consequences, and update this index.
