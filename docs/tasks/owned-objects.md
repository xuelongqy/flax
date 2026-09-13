# Task: Owned Objects and ScrollController

Status: complete on macOS arm64 with the pinned toolchain.

## Scope

Implemented protocol 5 object constructors, getters/setters, instance calls, explicit
release and listener pairs. Added PageLifecycle cleanup, real ScrollController /
SingleChildScrollView bindings, and the embedded scroll example. No native ABI,
dependency, package, platform, or engine capability changes.

## Results and validation

- `dart run melos run check`: passed. Generated output is reproducible; 10 generator
  tests, 18 JS tests, analysis, formatting, TypeScript build/type checks, fixture and
  example bundling, documentation checks, and toolchain-only CMake configuration pass.
- `dart run melos run check:ui`: passed. One native test, 15 Dart runtime tests,
  standalone JIT and relocated AOT loading, missing/corrupt asset checks, 57 framework
  tests and 2 example tests pass. macOS app integration completed successfully,
  including scrolling, Controller replacement, and page re-entry. Release app built at
  23.9 MB.
- The independent Gauge fixture compiles inherited members, enum setters,
  identity-returning methods, explicit adapters, and differently named listener/release
  methods. Invalid signatures, including async-void release, are rejected.
- Ten owned-object framework tests cover attachment, multiple positions, replacement,
  duplicate listeners, notification-time removal/disposal, async listener errors,
  foreign results, failed construction/wrapping, throwing release, failed page
  factories, cached-Widget validation, repeated content entry, maintainState-false
  rebuilding while closing, and source replacement. Existing first-mount signal and
  Future-close regressions also pass.
- The measured scroll fixture keeps 3 objects and 2 subscriptions across scrolling and
  parameter rebuilds. Its test drag produces one Flax Text rebuild, no other Flax host
  rebuild, and one offset getter call per listener notification. Duplicate registration
  retains one JS callback reference; final removal returns references to baseline.
  Repeated page entry remains stable after one-time revocation helpers are initialized.
  All tested engines reach disposal with zero owned JS handles and zero subscriptions;
  actual Dart disposal counts equal successfully created owned objects.
- Source hashes for 261 nonignored files match before and after the final full checks.
  The final handoff and documentation corrections were checked separately afterward.
  Existing worktree edits were preserved, both lockfiles remain unchanged, and generated
  assets/build products are ignored. Nothing was committed, pushed, or published.

Local evidence is in ignored `.local/owned-objects/check.log`, `check-ui.log`,
`object-ui.log`, `source-check.json`, and `changes.json`. These are disposable
validation records; the commands above reproduce the checks with prepared or explicitly
built native assets.

## Handoff

Follow the [object contract](../architecture/objects.md) and
[ownership decision](../decisions/0007-owned-dart-objects.md). Reuse the same metadata
and host ownership path for future selected Controllers. Tests remain in the existing
framework/example/support directories.

The source-evaluation limitation observed during this phase was traced to Hermes'
disabled-by-default block scoping. The subsequent
[loop closure fix](hermes-loop-closures.md) enables that configuration and removes the
accessor workaround. Broader language conformance remains outside these focused
regressions. No blocker remains for the selected object/scroll subset. animateTo, public
ScrollPosition, other Controllers, generic expansion, and default-call emission
optimization remain deferred.
