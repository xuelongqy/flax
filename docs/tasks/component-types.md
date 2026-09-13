# Task: Component Types, Queries and Measurements

Status: complete

## Changes

Custom JS Widget proxies now use cached session/constructor Type tokens and the original
user key. The component boundary and internal type key are removed. Native matching,
State lifecycle and signals remain in control. Protocol 10 rejects previous helpers and
modules; the native ABI and pinned Flutter 3.47.2 / Dart 3.13.2 are unchanged.

FlaxSession.componentType supports native Finder queries without constructing Widgets.
JS Context ancestor lookup returns original same-session configurations. Generated size
and SchedulerBinding.endOfFrame use real getters and existing Future delivery. The
generator supports non-constructible mixins, Future getters and lazy static-only
objects, covered by an independent Pulse fixture. No application-specific adapters were
added.

## Validation

The original unkeyed [A, B] to [B] case fails the corrected native comparison before the
change and passes afterwards. Logs and non-ignored source fingerprints are stored in the
ignored .local/component-types directory.

Both complete validation commands passed with the pinned SDK:

- `dart run melos run check`: 23 generator tests, 34 Node tests, analysis, formatting,
  reproducible bindings, JS builds, documentation checks and toolchain configuration.
- `dart run melos run check:ui`: the native ABI test, 28 Hermes runtime tests,
  standalone JIT and relocated AOT loading, 168 framework tests and six example tests.
  The macOS integration report confirms component type switching, ancestor queries and
  measurements. The release application builds successfully (25.6 MB).

The integration report is at `examples/embedded/build/ui-integration.json`; the release
application is at
`examples/embedded/build/macos/Build/Products/Release/flax_embedded.app`. These
artifacts and temporary test bundles remain ignored. All 354 non-ignored source files
had identical fingerprints before and after the full checks; this handoff was then
updated with their results.

The baseline remains 23 handles and one subscription for the existing component cost
scenario; 20 signal-only updates rebuild only 20 property hosts, with no JS State build.
Thirty mixed updates keep reference counts stable. Each component now has one fewer
Element, verified by its direct generated-host child. One thousand runtimeType reads
make zero JS or host calls; 30 componentType queries keep reference counts stable, and
all handles are released at disposal. These counts do not imply a measured percentage
improvement in application performance.

## Limits and handoff

Tokens do not change Dart is/as, generics or native interface compatibility. Queries do
not expose State, GlobalKey, arbitrary generated types or a second component tree.
Measurements require a laid-out RenderBox. Await belongs in independent async methods or
UI events, not synchronous lifecycle hooks. No addPostFrameCallback API is added.

Existing page/Route ownership and application disposal remain unchanged. No commit, push
or publication is performed.
