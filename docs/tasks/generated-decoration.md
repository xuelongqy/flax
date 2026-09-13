# Generated Containers and Decoration

Status: complete and verified on macOS arm64.

## Result

Core generated bindings include Container, DecoratedBox, physical/directional borders,
corners and insets, plus constructible BoxConstraints. The only generator implementation
change emits correct non-finite double default expressions. Protocol 8, shared hosts,
native ABI, dependencies and application disposal ownership are unchanged. See the
[decoration contract](../architecture/decoration.md).

The existing layout page adds theme-derived backgrounds, local selected-row borders,
directional insets/corners and a clipping preview. Theme builders reuse the page's input
descriptor and resources. Each visible row reuses its two theme-derived decorations when
its count changes; no global cache was added.

## Evidence and costs

The source baseline contains 327 nonignored files. Baseline verification passed 19
generator and 15 construction/layout/lazy-list tests. A correct numeric-default
regression failed before the fix with Infinity/-Infinity/NaN instead of valid Dart
expressions; the fixture now compiles and executes generated calls.

Five new Hermes framework tests cover native values and defaults, unselected copyWith
fields, 15 raster/geometry scenes in both directions, State, batching and diagnostic
boundaries. Same-process images match native Flutter at pixel ratio 1, without golden
files. Null padding can retain Container's decoration padding; enabling clipping inserts
a native wrapper and remounts descendants just as in Dart.

Eight decoration updates retain 16 owned JS handles and one subscription. Static
Container construction remains one; the dynamic Container constructs twice for
validation/mount, once per update and once for recovery, totaling 11. Three color writes
in a frame cause one update, and unchanged child/static sibling Widgets remain
identical. Child layout/paint counts match native Flutter: [0, 1] for each color-only
change and [1, 1] for each border-width change. The complete cost case, including
initialization and error recovery, records 59 object constructions, one object member
call and 26 invalidations. Session teardown observes zero handles and subscriptions;
deterministic cleanup is not presented as proof of JS garbage collection.

| Artifact                       | Before (bytes) | After (bytes) |
| ------------------------------ | -------------: | ------------: |
| Core generated Dart, formatted |         127230 |        187789 |
| Core generated TS, formatted   |          73930 |        101439 |
| Named-page IIFE                |         105802 |        127657 |

Material generated files remain unchanged. Container/DecoratedBox generate one
constructor call each. BorderSide and Border.all generate two; Border and
BorderDirectional unnamed constructors and both radius only constructors generate 16
combinations. Radius all/circular and each BoxConstraints constructor generate one. This
retains the existing direct-call strategy, with no default-branch optimization. Bundle
growth includes example code and is not a runtime speed measurement.

## Verification and handoff

Both root commands completed successfully:

- `dart run melos run check`: 21 generator tests, 29 Node tests, generation consistency,
  JS builds/type checking, Dart analysis, formatting, documentation and CMake checks.
- `dart run melos run check:ui`: native ABI tests, 28 Hermes runtime tests, standalone
  JIT and relocated AOT loading, 118 framework tests, five example tests, macOS
  integration and a 25.6 MB release app.

Integration records generatedDecoration and completed as true. Existing foregrounding,
IME and integration-driver warnings did not prevent completion. The warm local full UI
check took 152 seconds; esbuild reported 6 ms for the named-page bundle, excluding the
separate TypeScript build. These are observations, not performance thresholds or a
manual system-input certification.

Checks changed none of the 333 verification-source fingerprints and introduced no
nonignored files. The final handoff update was checked separately for formatting and
document links. All 29 task changes are expected; shared host/native implementations and
lockfiles match the initial source baseline. Temporary files and build assets remain
ignored. Evidence is under `.local/decoration`, including before/after fingerprints,
numeric-before.log, check.log and check-ui.log. No commit, push or publication occurred.

Images, gradients, shadows, transforms, animations and Material input borders remain
unselected. Further interfaces should continue through selected generation and real
Flutter semantics, using these size/cost results before changing default generation.
