# Task: State Review Fixes

Status: complete

## Goal and scope

Fix lifecycle failures that stranded component mounts and sessions, and inherited
mustCallSuper metadata in host proxies. Keep the existing two-layer component identity
and explicitly require stable keys for dynamic-list state retention. Protocol 9, Flutter
3.47.2 / Dart 3.13.2 and the native ABI are unchanged.

## Changes

- Non-disposal lifecycle failures report once and let Flutter finish its Element
  operation. User hooks are not replayed, super calls are not supplied, and application
  fields are not rolled back. Normal child-first disposal releases bridge resources.
- Super requirements follow implementation inheritance, including mixins and unannotated
  intermediate overrides, but exclude implements-only contracts. Actual calls retain the
  nearest superclass implementation and resolved signatures.
- Dynamic component lists need stable application keys. Shared wrappers can change
  unkeyed mixed-type matching. The existing component example already uses stable keys
  for its conditional sibling and lazy rows; no new matching mechanism was introduced.

## Validation

The initial dependency failure and inherited annotation tests failed with correct
assertions before the fixes. Review reproductions and logs are retained in the ignored
`.local/state-fixes` directory. Targeted component tests and the host-proxy generator
fixture pass. The first full check found an unnecessary override in the new mixin
fixture; adding observable mixin behavior resolved that lint before final verification.

Both root commands passed with the pinned SDK:

- `dart run melos run check`: reproducible bindings, 22 generator tests, 32 Node tests,
  tooling tests, analysis, formatting, TypeScript, bundles, documentation and
  toolchain-only CMake configuration.
- `dart run melos run check:ui`: native ABI, 28 Hermes runtime tests, standalone
  JIT/relocated AOT and asset rejection checks, 159 framework tests, 6 example tests,
  macOS application integration and release build (25.6 MB reported by Flutter).

The integration report records `flutterState: true` and `completed: true`. The 351
non-ignored source fingerprints were unchanged throughout final verification. Only this
handoff was subsequently updated and documentation checks rerun. Generated production
bindings remained unchanged after regeneration.

New tests cover lifecycle failures before/after super, missing super and Promise
returns; subsequent valid updates; child-first disposal; complete session shutdown; and
keyed insertion, removal and movement. An unkeyed native/Flax comparison records the
documented difference. Proxy fixtures cover direct, multilevel/generic and mixin
inheritance, interface exclusion, compiled output and direct-super call order.

The existing cost test still reports 23 handles and one subscription, 20 signal-only
property rebuilds without State builds, and zero handles at runtime disposal.

## Handoff

No commit, push or publication was performed. Application disposal and existing page,
Route and signal ownership remain unchanged. Future component work must retain the
stable-key contract and lifecycle cleanup regressions; exact native unkeyed matching
remains outside the chosen architecture.

The later [component type and query work](component-types.md) supersedes this record's
two-layer identity choice and unkeyed matching limitation. The results above describe
the implementation at the time; lifecycle and cleanup regressions remain required.
