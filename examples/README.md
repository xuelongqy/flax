# Examples

- [Playground](embedded/README.md): the visual module directory, with entrances to Core,
  Material, Cupertino, Canvas, Fetch, WebSocket and local storage. It reuses each
  package's independently runnable example.
- [Standalone](standalone/README.md): a standalone JS application demonstrating
  application loading, assets, remote delivery and native navigation.

- [Configured bindings](configured_bindings/README.md): a runnable host with public
  SDK/internal plugins, local binding runtimes and independent miniapp projects. Its
  Dart packages join the Pub workspace; it owns a separate pnpm workspace.

Capability demonstrations belong in `packages/<owner>/example`; top-level examples
compose them. Framework contracts remain in package-owned tests. The playground's common
presentation helpers live in the private Core example package and do not add a
production UI dependency.

## Package development and gallery presentation

Work on a capability in its own `packages/<owner>/example`, including its JavaScript
showcase, Flutter host and interaction tests. The aggregate imports that showcase; no
package example depends on the aggregate.

From the repository root:

| Purpose                                     | Command                                                     |
| ------------------------------------------- | ----------------------------------------------------------- |
| Open only Material's example                | `dart run tool/example_run.dart --package=flax_material_ui` |
| Test only Material's package and example    | `dart run tool/package.dart integration flax_material_ui`   |
| Open the gallery with every module entrance | `dart run melos run example:run`                            |

Replace `flax_material_ui` with another owner such as `flax_cupertino_ui` or
`flax_fetch`. Single-package commands build that example and its dependency closure, and
never start the gallery. Use the aggregate checks for cross-module changes and
`check:ui` when a complete UI regression is needed; neither is the default for a
package-only edit.

Fetch, WebSocket and the aggregate launch a loopback-only Dart demo server together with
the application. It uses a random port, so examples can run side by side. Quitting or
detaching the launch command stops its server; the service is development tooling and is
not embedded in packaged apps. Public endpoint URLs can still be entered manually.

When opening multiple examples from one checkout, let one finish preparation before
starting the next command: their JS dependency build outputs are shared.

All examples require Flutter 3.47.6 from `flax/main` and its matching local engine. Only
macOS platform projects are implemented here. The standalone engine GC target reuses
package-owned assertions; see
[runtime verification](../docs/architecture/runtime.md#verification).
