# Named Pages and Host Router

Status: implemented and locally verified on macOS arm64 with Hermes.

## Scope and implementation

Named synchronous factories, one shared Dart/JS content host, readonly reactive
NavigationData parameters, protocol 4 Page bindings, and standard Material Page Route
adoption/disposal. The native Flutter Router example directly enters an order page and
also exposes a JS declarative stack. No native ABI, engine, third-party dependency,
platform, or release boundary changes. The generator's compiled Page fixture adds only
the existing local flax package as a development dependency.

See [ADR 0006](../decisions/0006-pages-and-router.md) and the
[navigation contract](../architecture/navigation.md) for ownership and API details.

## Validation

Verified on 2026-09-07 with the pinned Flutter 3.47.0 / Dart 3.13.0 toolchain on macOS
arm64:

- Three named-page tests pass: independent factories, parameter updates and local state,
  structurally equal inputs, next-frame JS PageContent updates without sibling rebuilds,
  invalid factories/arguments, recovery, and teardown.
- Seven Page tests pass: current-config callbacks and original descriptor identity,
  fifteen repeated configuration changes, ten push/pop cycles, pageless route removal,
  unkeyed matching, default callbacks, maintainState eviction, duplicate keys, async
  callback errors, and session closing.
- Two native Router tests pass: direct URI entry, same-key update, second instance,
  changed key, and waiting for TransitionRoute.completed before runtime disposal.
- Seven generator tests and sixteen Node tests pass, including the independently
  compiled Page adapter and inherited private callback default fixture.
- The existing imperative nested Navigator test caught a default-list identity
  regression. Omitting absent empty-list parameters now uses the real upstream
  constructor sentinel; the nested Navigator regression passes with that fix. Closing
  admission also checks multiplicity so an extra unkeyed Page cannot reuse an existing
  identity.
- Locked Pub and pnpm dependency installation passed. `dart run melos run check` passed
  generated consistency, generator/Node tests, analysis, formatting, TypeScript
  checks/builds, example bundling, documentation, and toolchain-only CMake
  configuration.
- `dart run melos run check:ui` passed the native ABI suite, 15 runtime tests,
  standalone JIT and relocated AOT consumers, and all 42 real Hermes Flutter Widget
  tests (12 named-page/Page/Router tests and the previous 30).
- The macOS integration driver saved `build/ui-integration.json` with
  `scenario: embedded-navigation-pages-router` and `completed: true`. The scenario
  includes the previous UI/navigation flows, direct Router entry, same-key parameters,
  independent instances, key replacement, JS Pages, pop results, and Page removal
  beneath an imperative overlay. SDK foreground/plugin warnings were non-fatal; the
  driver validated the result before succeeding.
- The release build produced `examples/embedded/build/macos/Build/Products/Release/`
  `flax_embedded.app` (23.8 MB reported by Flutter), with an arm64 executable.
- Repeated Page configuration updates and navigation return to stable owned-handle
  counts; parameter equality avoids extra delivery, and teardown checks reach zero
  handles, subscriptions, and pending Futures. Diagnostic counters exist only in tests.
- Final source snapshots cover 237 tracked and non-ignored files. Static checks and
  regeneration preserve their contents. Bundled JS, native assets, build outputs, and
  temporary consumers stay ignored. `git diff --check` passed.

Logs live under ignored `.local/stage5/`, especially `check.log`, `ui.log`,
`pages-test.log`, and `source-check.json`. No commit, push, or publish ran. GitHub
Actions was not run remotely.

## Limits and next step

Only macOS arm64 Hermes is targeted. The host must remove retained routes before
awaiting session.close. Router URL parsing is not OS deep-link registration. Pages must
remain a valid Flutter stack and update application data on removal. No general
Promise-to-Future conversion, runtime module loading, or restoration is added.

Next: Controller creation, listeners, ownership, and disposal using the existing object
access and lifecycle boundaries.
