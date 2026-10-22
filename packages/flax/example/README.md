# Core example

An independently runnable Core playground for signals, computed values, callbacks and
native layout. `js/src/showcase.ts` exports the widget used by both this application and
the top-level [module directory](../../../examples/embedded/README.md).

`js/src/ui.ts` provides the private example-only page, section, field and keyboard
control helpers reused by the other capability examples. `runExample` supplies a
WidgetsApp and Overlay for examples that do not depend on a UI package. None of these
helpers is part of the production Core API.

From the repository root, open this example alone or run its package checks:

```sh
dart run tool/example_run.dart --package=flax
dart run tool/package.dart integration flax --engine=v8
```
