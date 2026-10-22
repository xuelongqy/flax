# Local storage playground

Save a counter and a note, leave the page and return. Editing a note does not write it
until **Save note** is pressed. **Clear area** removes this example's keys.

The local application displays two views in the same `shop` namespace and one in an
isolated `private` namespace. The example test checks that the shared views update
together while the isolated view stays unchanged. Storage is explicitly initialized by
the Dart host; State removes its listener and disposes its controllers on exit.

The [aggregate gallery](../../../examples/embedded/README.md) imports the same private
`./showcase` widget and uses its own `example-gallery` namespace. The counter and note
remain saved across gallery visits and Session recreation.

From the repository root, open this example alone or run its package checks:

```sh
dart run tool/example_run.dart --package=flax_local_storage
dart run tool/package.dart integration flax_local_storage --engine=v8
```
