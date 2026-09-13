# Lazy Lists and Independent Results

## Scope

Generated ListView.builder reuses the shared runtime and Flutter list implementation.
Explicit independentWidgetCallbacks metadata selects per-result ownership. UI protocol
8, native ABI, engine and dependencies are unchanged. See the
[contract](../architecture/lists.md).

## Validation

Baseline: 16 generator and 86 real Hermes framework tests passed. Full check and
check:ui now pass: 17 generator tests, 25 Node tests, 94 real Hermes framework tests, 4
example tests, 1 native ABI test, 28 runtime tests, standalone JIT and relocated AOT,
macOS application integration and a 25.3 MB release application. The integration result
records lazyList: true and completed: true. The existing driver/plugin warning remains,
but the driver connected and completed the recorded interactions.

Source fingerprints and logs are in ignored .local/lazy-list, including check.log,
check-ui.log and the pure-Dart native-null.log control. Full checks changed no
non-ignored source files; the final handoff-only edit is checked separately. Native
sources, shared JS runtime, Material generated bindings and lockfiles remain unchanged.

## Findings and limits

The fixed-viewport 1,000/10,000-row fixture builds 7 children in both cases, with 7
native fixture constructions, 75 handles and 11 subscriptions. Three writes rebuild only
the selected Text once. Eight round trips stabilize at 75 handles; native keep-alive
retains its requested child. These are fixed-scenario counts, not platform performance
guarantees.

Pure Flutter reproduces a fixed-extent assertion when an already populated middle item
becomes null while later items remain. Initial null termination matches the native
control. Application data updates should change itemCount when removing items. There is
no Flax fallback that silently converts null to an empty child.

Applications own Controller disposal and data that must survive item unmount. There is
no global result cache, arbitrary keep-alive binding or additional list constructor.

## Reproduction and completion

Run dart run melos run check and dart run melos run check:ui. The latter includes
runtime, standalone JIT/AOT, Flutter, macOS integration and release verification. With
prepared native assets, ui:test runs the framework tests without downloading an engine.

Preserve the existing uncommitted work. No commit, push or publication is part of this
task.

## Generated size

ListView.builder requires one direct constructor call combination; the existing default
omission strategy is unchanged.

| Artifact            | Before (bytes) | After (bytes) |
| ------------------- | -------------: | ------------: |
| Core generated Dart |         100791 |        106428 |
| Core generated TS   |          59077 |         61333 |
| Named-page IIFE     |          87987 |         92514 |

Material generated Dart/TS remain 48006/23633 bytes. Shared runtime handle assertions,
including 31 construction-test handles and 34 navigation-test handles, still pass. Final
engine disposal observes zero owned JS handles and no active subscriptions. The example
source is examples/embedded/js/src/lazy_list.ts; the menu entry is Lazy list.
