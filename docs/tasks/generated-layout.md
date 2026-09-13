# Generated Layout and ParentData

Status: complete and verified on macOS arm64.

## Result

Expanded, Flexible, Stack, Positioned, Align and physical/directional alignment values
are selected through the existing generator. UI protocol 8, native ABI, shared hosts,
runtime scheduling and dependencies are unchanged. No class-specific adapter was needed.
See the [layout contract](../architecture/layout.md).

## Evidence

The baseline passed 18 generator tests and 8 construction/lazy-list Hermes tests. Source
fingerprints and logs are in ignored `.local/layout`.

The new SDK compilation test and two Node transport tests pass. Seven Hermes framework
tests compare native geometry/ParentData, alignment defaults and direction, keyed/shared
mounts, builders, conversion recovery and Flutter diagnostics. Three flex writes cause
one Flax rebuild in both axes; eight keyed moves retain 22 handles. Native Flutter
layout work is not counted as additional Flax rebuilding.

Static Align validation constructs one native Widget. Dynamic Align constructs twice for
validation/mount and once for each of eight updates. Those updates retain 14 handles and
one subscription; the static sibling keeps its original Widget. The case records nine
object member calls, two object constructions and eight invalidations. Final runtime
teardown observes zero handles and subscriptions. The earlier construction and lazy-list
cost assertions also remain passing.

The example filters 10,000 rows, uses remaining height, changes flex/position/alignment
and preserves page-owned editing, focus and scrolling resources. Its compact toolbar
uses Expanded so button labels can wrap within the available width.

## Verification and next step

Both `dart run melos run check` and `dart run melos run check:ui` passed:

- 19 generator tests, 27 Node tests, Dart analysis, formatting, generation consistency,
  JS builds/type checking, documentation checks and CMake configuration.
- Native ABI verification, 28 Hermes runtime tests, standalone JIT and relocated AOT
  loading, 113 framework tests and 5 example tests.
- macOS integration reports generatedLayout and completed as true; the release app
  builds successfully at 25.4 MB. Existing foregrounding/driver warnings did not prevent
  recorded completion. Automated input is not manual system IME certification.

| Artifact            | Before (bytes) | After (bytes) |
| ------------------- | -------------: | ------------: |
| Core generated Dart |         106437 |        127230 |
| Core generated TS   |          61333 |         73930 |
| Named-page IIFE     |          92514 |        105802 |

Expanded, Flexible and Positioned each generate one constructor call combination; Align
generates two and Stack four to preserve omitted alignment/children defaults. Material
outputs are unchanged. Bundle growth includes the new example, not just binding
metadata, and is not a runtime performance measurement.

The full checks changed none of the 327 nonignored source fingerprints. Shared host,
generator implementation, native sources and lockfiles match the initial baseline.
Generated/built assets remain ignored. Full evidence is in `.local/layout/check.log`,
`.local/layout/check-ui.log` and the source snapshots. No commit, push or publication
was performed.

Container and decoration are continued in [the next task](generated-decoration.md).
Animated layout remains deferred. Further components should continue through selected
generation and native Flutter semantics.
