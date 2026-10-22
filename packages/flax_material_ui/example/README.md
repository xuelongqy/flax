# Material component collection

An independently runnable Material application, also opened by the top-level
[playground](../../../examples/embedded/README.md). The gallery and this application
both use `js/src/showcase.ts`; `main.ts` only starts it.

| Collection | Demonstrations                                                              |
| ---------- | --------------------------------------------------------------------------- |
| Buttons    | Filled, tonal, elevated, outlined, text, icon and disabled buttons          |
| Inputs     | Controlled text editing, decoration, dropdown selection and disabled fields |
| Selection  | Switch, checkbox, filter chip and slider                                    |
| Feedback   | Dialog results, snackbars, badges and determinate progress                  |
| Surfaces   | Cards, list tiles, avatars, chips, dividers and a real route transition     |

Controls update visible state. Text controllers are created by State and disposed with
it; dialog results update only mounted State. The private `./showcase` export is used by
the aggregate without starting another Session or duplicating bindings.

From the repository root, open this example alone or test this package:

```sh
dart run tool/example_run.dart --package=flax_material_ui
dart run tool/package.dart integration flax_material_ui --engine=v8
```

Neither command starts the aggregate gallery or other package examples.

`test/application_test.dart` exercises every collection at desktop and phone widths. The
real macOS integration entry reuses the same interaction scenario. This is a
representative component collection, not exhaustive coverage of every bound class.
