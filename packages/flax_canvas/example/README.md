# Canvas playground

Change the palette of an abstract drawing or clear the canvas. The example uses a real
OffscreenCanvas displayed by CanvasView, with no background animation loop.

The private `./showcase` widget is reused by the
[top-level playground](../../../examples/embedded/README.md). The local application
starts the same widget using only Canvas and Core. Its test checks palette changes and
clearing; detailed Canvas rendering contracts stay in the package UI tests.

From the repository root, open this example alone or run its package checks:

```sh
dart run tool/example_run.dart --package=flax_canvas
dart run tool/package.dart integration flax_canvas --engine=v8
```
