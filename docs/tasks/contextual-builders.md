# Task: Contextual Builders

Status: completed and validated on macOS arm64 with Flutter 3.47.0 / Dart 3.13.0.

## Goal and scope

Implement synchronous generated callback/member bindings, real BuildContext access, and
immutable layout constraints on the existing macOS arm64 Hermes host. Preserve existing
uncommitted work and package boundaries. No native ABI changes, new dependencies, or
publishing are included.

## Implementation

See [ADR 0004](../decisions/0004-contextual-builders.md),
[generation](../architecture/bindings.md), and [UI lifecycle](../architecture/ui.md).
The embedded example exercises direction/width changes with two independent runtimes.
Test sources and instrumentation belong to their existing packages and example tests.

## Acceptance and evidence

Both frozen dependency installations, `check`, and `check:ui` passed locally.

| Verification                  | Result                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Generator tests               | 5 passed, including actual SDK signatures, cross-module adaptations, and plugin Dart/TS compilation                            |
| JS tests                      | 10 passed, including lazy builders, canonical enums, immutable snapshots, and foreign reference rejection                      |
| Flutter Widget tests          | 18 passed through real Hermes, including inherited/layout callbacks, state, errors, inactive/unmounted contexts, and isolation |
| Native and Dart runtime tests | 1 native test and 15 Dart integration tests passed                                                                             |
| Independent packages          | JIT, missing/corrupt asset failures, and relocated AOT verified                                                                |
| macOS application             | Context/layout/two-view scenario passed with a fresh completed result; arm64 release app built (23.5 MB)                       |
| Source preservation           | All 210 source files had identical hashes before and after the full checks; generated assets remained ignored                  |

The instrumented builder fixture held 25 owned bridge handles after warmup, with no
growth across 100 dependency rebuilds. Those rebuilds made 100 static member calls.
Reading constraint fields 1000 times made zero getter calls. Twenty unmount/remount
cycles returned to the same handle baseline, and zero owned handles remained before
engine disposal. Live observer counts returned to zero on subtree removal. These
measurements cover handles/subscriptions, not total JS heap, RSS, or frame latency.

The desktop driver emitted SDK foreground/plugin warnings, but the scenario assertions,
fresh `embedded-context-layout-two-views` result, and process status all passed. Remote
CI has not been run for these uncommitted changes. No commit, push, or publication was
performed.

Reproduce from the root with the pinned SDK on PATH:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
dart run melos run check:ui
```

## Limits and next step

The implementation supports the selected synchronous signatures and APIs only. It does
not add automatic signal tracking, Promise/Future conversion, controller ownership,
runtime modules, production latency budgets, or platform support beyond macOS arm64.
Reuse the member bridge for ScrollController next, defining ownership, listeners,
attachment validity, and disposal before extending its generated API.
