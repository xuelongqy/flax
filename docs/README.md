# Documentation

- [Architecture](architecture/README.md): layer responsibilities and current status.
- [Runtime design](architecture/runtime.md): runtime execution and reference ownership.
- [Binding generation](architecture/bindings.md): inputs, outputs, and adaptation.
- [Packaging](architecture/packaging.md): workspaces and distribution boundaries.
- [External binding migration](guides/external-binding-migration.md): Manifest 1 / loose
  config → format-1 YAML, `bindingNamespace`, Manifest 2, and the
  `validate|check|generate --config` CLI (M3 direct cutover; no long-term compat).
- [External Binding Kit v1 compatibility matrix](architecture/external-binding-compatibility.md):
  proven / partially proven / not run / open-questions status for protocol, ABI, YAML,
  Manifest 2, CLI, engines, and outside canaries.
- [Binding coverage map](architecture/binding-coverage-map.md): explicit selection
  inventory, in-envelope waves, hard-wall queue, and Cupertino/pilot calls
  ([ADR 0018](decisions/0018-binding-coverage-strategy.md)).
- [Decisions](decisions/README.md): accepted decisions and unresolved questions.
- [Task records](tasks/README.md): concise planning and handoff guidance.
- [Contributing](../CONTRIBUTING.md): installation, commands, and review workflow.

The macOS arm64 Hermes runtime, generated reactive UI, navigation, named pages, and host
Router example are implemented. The current repository-structure handoff is
[package distribution](tasks/package-distribution.md), following
[package isolation](tasks/package-isolation.md). The earlier
[capability package boundary](tasks/package-boundaries.md) record describes the initial
move.

- [Flutter host and signals](architecture/ui.md): generated widgets, local updates, and
  lifecycle.

- [Navigation and application sessions](architecture/navigation.md)

- [Containers and decoration](architecture/decoration.md)

- [Widget interfaces and page shells](architecture/widget-interfaces.md)

- [Canvas 2D](architecture/canvas.md)
