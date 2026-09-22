# Architecture Decisions

These records preserve accepted decisions and their rationale. Superseded records keep
their numbers and replacement links; an accepted decision is not evidence that every
proposed capability is implemented. Current versions and verification limits are in
[External Binding Compatibility](../architecture/external-binding-compatibility.md), and
current language support is in the
[coverage map](../architecture/binding-coverage-map.md).

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

- [0024: Basic typedef bindings and Manifest 3](0024-basic-typedef-bindings.md) is
  accepted and amended by ADR 0025.
- [0025: Generic typedef bindings and Manifest 4](0025-generic-typedef-bindings.md) is
  accepted and amended by ADR 0026 for the manifest writer version.
- [0026: Top-level readonly bindings and Manifest 5](0026-top-level-readonly-bindings.md)
  is accepted and amended by ADR 0027 for public-library routing and the Manifest
  writer.
- [0027: Public library routing and module delivery](0027-public-library-module-delivery.md)
  is accepted and amended by ADR 0028 for the Manifest writer version.
- [0028: Structural Record bindings and Manifest 7](0028-record-bindings.md) is accepted
  and amended by ADR 0029 for the Manifest writer version.

- [0029: Native Widget interface members and Manifest 8](0029-native-widget-interface-members.md)
  amends ADR 0011 and ADR 0028. The current writer is 10 with strict readers 2 through
  10; UI protocol 20 and native ABI 2 are unchanged.

- [0030: Extension binding adapters and Manifest 9](0030-extension-binding-adapters.md)
  is accepted and amends ADR 0029.

- [0031: Mutable top-level access and Manifest 10](0031-mutable-top-level-bindings.md)
  is accepted and amends ADR 0030.
- [0032: Generic bound-only type references](0032-bound-type-only-references.md)

- [0033: Automatic public-library bindings](0033-automatic-public-library-bindings.md)
  is accepted and amends ADR 0018.
