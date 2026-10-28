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
- [0012: Experimental V8 beside Hermes](0012-experimental-v8.md) is superseded by
  [0039](0039-engine-owned-cross-heap-gc.md) and its V8-only platform policy.
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
  accepted. Current values are listed in the Binding Coverage Map linked above.
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
  superseded by [0044](0044-native-widget-interface-values.md).
- [0030: Extension binding adapters](0030-extension-binding-adapters.md) is accepted.
- [0031: Mutable top-level bindings](0031-mutable-top-level-bindings.md) is accepted.
- [0032: Generic bound-only type references](0032-bound-type-only-references.md) is
  accepted.
- [0033: Automatic public-library bindings](0033-automatic-public-library-bindings.md)
  is accepted and amends ADR 0018.
- [0034: Preserve Flutter application semantics](0034-flutter-application-semantics.md)
  is accepted; ADR 0035 amends its codegen mechanism details.
- [0035: Shared generic owners, State variants and UI protocol 21](0035-generic-state-variants-and-protocol-21.md)
  is accepted; ADR 0037 updates the package and protocol domains.
- [0036: Shared engine SDK and locally compiled ABI](0036-shared-engine-sdk.md) is
  accepted and supersedes the native distribution details of ADR 0002 and ADR 0012.
- [0037: Package-scoped binding providers and plugin delivery](0037-package-scoped-binding-providers.md)
  is accepted. Current package, Manifest and protocol formats are listed in the Binding
  Coverage Map above.

- [0038: Class static properties](0038-class-static-properties.md) is accepted. It uses
  independent read/write operations in Manifest 14.

- [0039: Engine-owned cross-heap GC](0039-engine-owned-cross-heap-gc.md) is accepted. It
  supersedes ADR 0036's independent runtime deployment. All maintained platforms use V8:
  jitless on iOS and JIT elsewhere; the Hermes compatibility package and
  engine-selection options are removed.

- [0040: Vite-driven development hot reload](0040-vite-hot-reload.md) is accepted. It
  preserves compatible JS instances and Flutter State on the maintained engine.

- [0041: Shared Uint8List buffers](0041-shared-uint8-buffers.md) is accepted. Generated
  bytes use Uint8Array and one native ownership contract in V8 and Hermes.

- [0042: Native value interop](0042-native-value-interop.md) is accepted. Native SDK
  input conveniences, exact BigInt, shared binary views and Dart error references use
  the common conversion and ownership paths.

- [0043: Record value conversion](0043-record-value-conversion.md) is accepted. All
  Records use plain field objects and shared native construction.

- [0044: Native Widget interface values](0044-native-widget-interface-values.md) is
  accepted. Real Widget factories and proxies replace native interface forwarding hosts.

- [0045: Native Route and Page objects](0045-native-navigation-objects.md) is accepted.
  Ordinary bindings and joint GC replace ownership subclasses, leases and Page adapters;
  Session close drains mounted JS content without retaining native Routes or
  transitions.

- [0046: Compiler entries for native default arguments](0046-compiler-default-entries.md)
  is an experimental integration. Known targets use fixed entries; dynamic callback
  values retain their shared invocation path. Platform acceptance remains separate.

- [0047: Scoped binding annotations](0047-scoped-binding-annotations.md) is accepted.
  Explicit annotation scopes normalize into the existing package selection pipeline,
  preserving configuration-only generation and provider identities.

- [0048: Optional build_runner binding generation](0048-build-runner-bindings.md) is
  accepted. A tracked package-wide Builder shares CLI selection and emission while
  build_runner owns declared assets and incremental rebuilds.

- [0049: Generated binding JS build configuration](0049-generated-binding-js-build.md)
  is accepted. A shared generated plan drives host JS compilation and preparation
  without repeated scope lists; Node remains a build-time dependency.

- [0050: Independent binding SDK builds and host setup](0050-independent-binding-sdks-and-project-setup.md)
  is accepted. Marked types packages build independently of host artifacts; init and
  sync prepare host configuration while preserving Builder asset ownership.

- [0051: Native ESM, JSON and Wasm](0051-native-esm-json-and-wasm.md) is an experimental
  integration. Native module linking, asynchronous loading and iOS interpreted Wasm
  preserve script compatibility; platform acceptance is recorded separately.

[Open Questions](open-questions.md) records decisions that have not been made. Use the
[decision template](TEMPLATE.md) for a new significant decision. Record the decision,
its reason and practical consequences, and update this index.
