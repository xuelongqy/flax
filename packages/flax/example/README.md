# Core example

An independently runnable Core playground for signals, computed values, callbacks and
native layout. `js/src/showcase.ts` exports the widget used by both this application and
the top-level [module directory](../../../examples/embedded/README.md).

`js/src/ui.ts` provides the private example-only page, section, field and keyboard
control helpers reused by the other capability examples. Colors follow the inherited
MediaQuery brightness. `runExample` supplies the JS WidgetsApp and Overlay environment.
The Dart entrance wraps FlaxView in the shared
[`FlaxExampleApp`](../../flax_example_support/README.md), which owns native settings,
system/light/dark appearance and a floating FPS badge. Showcases consume brightness
without installing controls or frame listeners. These helpers are development-only and
are not part of the production Core API.

From the repository root, open this example alone or run its package checks:

```sh
dart run tool/example_run.dart --package=flax
dart run tool/package.dart integration flax
```
