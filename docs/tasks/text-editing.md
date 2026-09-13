# Task: Text Editing and Immutable Snapshots

Historical milestone: protocol 7 replaces snapshots and automatic application disposal.
See the [current interop handoff](dart-interop.md). Earlier validation below describes
the implementation at that milestone.

Status: complete on macOS arm64 with the pinned toolchain.

## Goal and scope

Generate Dart-built immutable editing snapshots, TextEditingController and standalone
Material TextField. Reuse owned objects, listeners, page cleanup and UI scheduling.
Protocol 6 replaces 5; native ABI, dependencies, engines and platforms are unchanged.
See [the decision](../decisions/0008-dart-value-snapshots.md) and
[input contract](../architecture/text-input.md).

## Results and validation

- Additional public-library resolution, nested snapshot construction/restoration, static
  fields, copyWith and typed constructor/setter adapters are implemented.
- Independent plugin fixtures compile and execute generated Dart calls and compile TS.
- Node wrapper tests and eight real Hermes text-input Widget tests pass. All 66
  framework tests pass, including previous closure, navigation and lifecycle
  regressions.
- Representative input: one Controller, five subscriptions, two bound Text rebuilds, one
  complete value host read per notification, no static-sibling rebuild. Reading nested
  fields adds no host calls. Repeated snapshot operations retain a stable handle
  baseline; final engine disposal observes zero retained handles.
- `dart run melos run check` passed: 11 generator tests, 22 JS tests, reproducible
  bindings, analysis, formatting, type checking, bundles, documentation and CMake
  toolchain configuration.
- `dart run melos run check:ui` passed: native ABI tests, 28 Dart runtime tests,
  standalone JIT and relocated AOT loading, 66 framework tests, 2 example tests, macOS
  integration (`completed: true`) and a 24.9 MB release app. The UI test covers actual
  TextField/controller behavior and injected composition alongside prior navigation,
  scrolling and loop-capture scenarios.
- Source replacement removes listeners and disposes page-owned controllers before the
  enclosing native Route retires. The old engine stays alive until Route completion;
  tests check these two moments separately.
- Checks did not modify any of the 279 non-ignored source files. Engine inputs, native
  ABI and lockfiles remain unchanged; generated assets and temporary consumers are
  ignored. Only documentation was finalized afterward and checked again.

Local logs are in ignored `.local/text-input/`. The macOS launcher reported a foreground
warning and an integration-plugin warning; the VM driver ran the test, recorded its
successful result and exited successfully. Neither warning substitutes for the captured
assertions or the separate OS IME limitation.

## Handoff

The embedded Text input entry exercises single/multiline input, snapshot display,
programmatic replacement, clear, controller replacement and page reentry. Composition is
injected through Flutter's input channel; no system IME certification is claimed.
FocusNode, Cupertino input, formatters, forms, autofill and general two-way effects are
deferred. No commit, push or publication is part of this task.
