# Cupertino component collection

A Cupertino application with its own theme, navigation and live component state. It runs
independently and is also opened by the
[top-level playground](../../../examples/embedded/README.md). Both entrances use
`js/src/showcase.ts`; importing it does not start an application.

| Collection | Demonstrations                                                          |
| ---------- | ----------------------------------------------------------------------- |
| Controls   | Filled, tinted, plain and disabled buttons, switch, slider and segments |
| Forms      | Controlled text editing and search feedback                             |
| Lists      | Grouped settings, accessories and a Cupertino route transition          |
| Overlays   | Alert results, action sheets and determinate activity                   |

Text controllers follow State disposal. Async dialog and action-sheet results update
only mounted State. Collections remain independent of Material bindings and use Core
example presentation helpers where appropriate.

From the repository root, open this example alone or test this package:

```sh
dart run tool/example_run.dart --package=flax_cupertino_ui
dart run tool/package.dart integration flax_cupertino_ui --engine=v8
```

Neither command starts the aggregate gallery or other package examples.

The package example test exercises all four collections, editing, selection, both
overlays and navigation, then checks phone-width layout. These are common component
examples rather than exhaustive coverage of all generated declarations.
