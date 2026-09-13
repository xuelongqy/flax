# Generated Styles and Themes

## Scope

Protocol 8 adds selected Color, FontWeight, TextStyle, InputDecoration and Material
Theme APIs through configuration and generation. Native ABI, engine, dependencies and
runtime scheduling are unchanged. Optional named TS inputs now accept undefined in
strict optional property mode, matching existing runtime omission. See
[the contract](../architecture/styles.md).

## Validation

The baseline passed 15 generator and 80 real Hermes framework tests. Source
fingerprints, logs and size measurements are in ignored `.local/styles-theme`.

Scoped tests verify real values, default decoration versus null, retained copyWith
fields, native dependencies, editing identity and local signal updates. The independent
optional parameter fixture failed in all four call forms before the emitter fix and
passed afterward. The example bundle and Widget interaction test pass.

Both check and check:ui passed. Validation includes 16 generator tests, 24 Node tests,
86 real Hermes framework tests, 3 example tests, the native ABI test, 28 runtime tests,
standalone JIT and relocated AOT, macOS app integration and a 25.1 MB release
application. The integration result contains stylesAndThemes: true and completed: true.
The existing driver/plugin warning remained, but the driver connected and recorded
successful app interactions. The complete checks changed no non-ignored source files.

## Costs and findings

- Three signal writes issue three invalidation calls, produce one Flax host rebuild and
  construct no Dart values. Static siblings and page-owned Controller/FocusNode
  instances remain unchanged.
- Twenty host theme changes issue 60 Theme.of calls across the host, derived and local
  readers. Local calls also occur in the pure Dart control because Theme.of depends on
  inherited Cupertino data. Local Material values remain unchanged.
- The theme fixture retains 48 handles and 2 subscriptions through those changes. Its
  construction counters record 1 Controller, 1 FocusNode and 22 InputDecorations
  including setup; 66 copyWith calls cover the two initial builds and 20 theme changes.
- Five content replacements stabilize at 50 handles after the first cleanup caches
  releaseContext/releaseObject. Final runtime disposal sees zero handles. Existing
  construction, scrolling, text-input and navigation cost assertions remain unchanged.

| Artifact                | Before (bytes) | After (bytes) |
| ----------------------- | -------------: | ------------: |
| Core generated Dart     |          87135 |        100791 |
| Material generated Dart |          16314 |         48006 |
| Core generated TS       |          49552 |         59077 |
| Material generated TS   |           8234 |         23633 |
| Named-page IIFE         |          70140 |         87987 |

The added constructors each have one direct call combination; TextField has two to
preserve its decoration default. The existing three-default plugin fixture still has
eight combinations. These sizes include the broader TS optional-input declarations and
the new example; they are not isolated theme runtime costs. One warm example bundle run
took 1.43 seconds, full check took 77.67 seconds, and check:ui took 126.60 seconds.
These are local observations, not hardware-independent performance limits.

Source fingerprints confirm unchanged native sources, shared Dart/JS runtime logic and
lockfiles. Only selection rules, generated outputs, the generic TS emitter, tests,
example and affected documentation changed. Build artifacts remain ignored; no commit,
push or publication was performed.

## Reproduction and limits

```sh
dart run melos run check
dart run melos run check:ui
```

With prepared native assets, ui:test runs the framework suite. The embedded application
adds a Styles and themes entry. Input injection tests Flutter's input channel rather
than an end-to-end OS IME. Full component theming, borders, font loading and other
platforms remain unimplemented. Continue API expansion through selected generation and
measured costs; the direct default-omission strategy is unchanged.
