# Task: Generated Reactive Flutter UI

Status: completed on macOS arm64 with Flutter 3.47.0 / Dart 3.13.0.

## Goal and scope

Implement the selected generated core/Material bindings, signals wrappers, and dynamic
Flutter subtrees on the existing Hermes runtime. Enable the macOS arm64 embedded example
with two isolated views. Preserve the previous runtime implementation and its
uncommitted changes; do not commit, push, or publish.

## Acceptance criteria

- Public Dart declarations produce reproducible Dart/TS bindings and plugin fixture
  output.
- Real Hermes Widget tests establish frame locality, Element/State identity, lifecycle,
  errors, inherited Flutter behavior, and isolated sessions.
- Node tests use the same packages bundled for Hermes, without runtime browser/Node
  dependencies.
- macOS app integration and release build succeed, alongside existing runtime and
  standalone JIT/AOT checks. Generated binary and JS assets stay ignored.

## Approach

See [ADR 0003](../decisions/0003-generated-reactive-ui.md),
[UI lifecycle](../architecture/ui.md), and [generation](../architecture/bindings.md).
The C ABI is unchanged. Test sources remain under their owning test directories.

## Results and validation

The original milestone passed generator tests (3), JS tests (6), and Hermes Widget tests
(9). The completed runtime/UI command also passed native tests (1), Dart runtime tests
(15), standalone JIT and relocated AOT checks, and real macOS app integration. The
release app built successfully (23.4 MB). These original results were confirmed against
the saved validation output before starting the next milestone.

Current acceptance and subsequent test additions are recorded in
[Contextual builders](contextual-builders.md).

Reproduce from the root using the pinned SDK:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
dart run melos run check:ui
```

## Handoff

The next slice can extend generated API coverage using the existing registry and
parser/model/emitter boundaries. Context, Controllers, custom JS StatefulWidget, other
engines/platforms, module loading, and production performance budgets remain outside
this milestone. No default engine, license, or public package names are selected.
