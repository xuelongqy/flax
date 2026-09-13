# Task: Hermes Loop Closures

Status: complete on macOS arm64 with the pinned toolchain.

## Goal and scope

Restore per-iteration lexical bindings in the existing macOS arm64 Hermes source
runtime. Keep the upstream revision, public APIs, UI protocol 5, native ABI, and ES2019
IIFE pipeline unchanged. No compiler transform or dependency was added.

## Approach and acceptance

The pinned upstream `RuntimeConfig` defaults `ES6BlockScoping` to false and forwards it
to both JSI source compilation and dynamic evaluation. Flax now explicitly enables it in
the engine adapter. Object accessors use ordinary `for...of` again.

Acceptance covers native ABI execution, Dart loop/accessor/dynamic-source/Promise
regressions, the same bundled button fixture in Node and Flutter, independent JIT/AOT
loading, and existing UI/resource regressions. See
[source compilation](../architecture/runtime.md#source-compilation).

## Results and validation

- Before the configuration change, the native loop assertion failed. Twelve of thirteen
  Dart cases failed with incorrect captures; the `var` shared-scope case passed.
- With block scoping enabled, the native assertion and all thirteen Dart cases pass.
- `dart run melos run check` passed: 10 generator tests, 19 JS tests, reproducible
  bindings, analysis, formatting, type checking, bundles, documentation, and toolchain
  configuration.
- `dart run melos run check:ui` passed: the native ABI test, 28 Dart runtime tests,
  standalone JIT and relocated AOT consumers, 58 framework tests, 2 example tests, macOS
  integration (`completed: true`), and a 23.9 MB release app.
- Each bundled button click invalidated one binding and rebuilt only its corresponding
  Text host. All three subscriptions and the live handle count stayed stable during
  interaction; both reached zero before engine disposal. The existing ScrollController
  and plugin-object regressions passed after removing the accessor workaround.
- All 266 non-ignored source files were unchanged by the full checks. Lockfiles, the
  pinned Hermes input, and the native ABI remained unchanged. Only this result record
  was finalized afterward and rechecked for Markdown formatting and links.

Local logs live in ignored `.local/loop-closures/`. Tests use the normal implementations
and existing framework/example/support organization. Nothing is committed or published.

## Handoff

These tests establish the selected loop semantics, not full ECMAScript conformance.
Continue with the planned value-object and text-input binding work. No engine upgrade or
application-level loop workaround is required.
