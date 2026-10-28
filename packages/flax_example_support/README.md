# flax_example_support

Development-only Dart shell for the capability examples and the embedded Playground.
`FlaxExampleApp` owns one native settings drawer, system/light/dark appearance and an
optional FPS overlay above its Navigator. Example entry points wrap their content once;
JS showcases only consume the inherited MediaQuery brightness. Production Flax packages
do not depend on this package.

The shell keeps settings across Flax Session remounts. FPS starts disabled, listens to
completed Flutter frame timings and updates once per second without requesting frames.
It measures whole-application throughput, not display presentations or individual
modules. The theme-aware floating card gives the numeric reading priority; samples with
fewer than two completed frames show a dash and a muted `Idle` status. Closing the
drawer keeps the overlay active; disabling FPS or disposing the shell removes its timer
and listener. Use profile mode for performance comparisons.

Run its focused checks with the standard Flutter SDK:

```sh
dart run tool/package.dart check flax_example_support
```

When using the maintained Flutter fork, run the widget tests with its matching local
engine flags; the fork's framework cannot use the standard test engine. See the
[toolchain instructions](../../README.md#quick-start).
