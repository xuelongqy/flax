# Public Dart type naming

Status: complete; verified locally on macOS arm64 with Flutter 3.47.2 / Dart 3.13.2.

## Changes

Rename 32 publicly exported Dart types without compatibility aliases. Runtime `Js*`
types become `FlaxJs*`; the native implementation is `FlaxNativeJsRuntime`. Engine
factories are `FlaxHermesEngine` and `FlaxV8Engine`. All 18 generator types use
`FlaxCodegen` followed by their previous name. `FlaxCodegenTypeRef` remains distinct
from the existing runtime metadata type `FlaxTypeRef`.

Public import paths, exports, JS APIs, binding identities, UI protocol 12 and native ABI
2 stay unchanged. Exception labels now use `FlaxJsException`. Application and test
callers, external-consumer templates, engine substitutions and benchmark runners use the
new names. Generated files are updated only through their existing tools.

Private types, internal `NativeCalls`, and the unexported ffigen aliases
`DartFlaxHostCallbackFunction` and `DartFlaxValueId` keep their names. Historical task
records preserve their original evidence and names. Existing unrelated changes remain in
place.

## Validation

The pre-change baseline passed binding reproducibility and all 26 generator tests. Both
rename stages passed Dart analysis. Longer names required braces on 12 existing
conditions after formatting; their control flow is unchanged.

- `bindings:generate` left every committed generated file byte-identical, including
  Dart/TS bindings and State dispatch. FFI generation checks also passed unchanged.
- `check` passed: 26 generator tests, 52 JS tests, eight benchmark utility tests,
  analysis, formatting, type checking, bundling and documentation checks.
- Both engines passed 39 runtime tests, 218 framework tests and seven example tests.
  Native tests passed for Hermes (two) and V8 (three).
- Both engines passed outside-repository JIT/AOT, standalone source/tarball consumption,
  standalone macOS integration, production release builds and relocated release UI with
  the original source removed.
- Both embedded applications passed their two integration tests and release builds. The
  V8 `check:ui:v8` command completed successfully. The initial Hermes `check:ui` was
  interrupted when embedded integration stopped progressing. Its unchanged integration
  retry exposed Flutter's `hidden` lifecycle with frames disabled; unhiding the native
  application let the assertions finish. The subsequent release build passed. Earlier
  runtime/package checks were not repeated, and no framework or test behavior was
  changed to handle the desktop environment.
- `check:engines` passed Dart and native coexistence, foreign-reference rejection,
  reentry and recreation. Benchmark smoke completed 64 samples without failures;
  separate single-engine source runs passed for Hermes and V8, covering the runner's
  engine-name substitution. Smoke runs establish execution, not performance gains.

Source fingerprints, a baseline archive and logs are in ignored `.local/dart-naming/`.
The full check and both UI chains left implementation sources unchanged. The only
remaining old public name occurs in the preserved historical V8 task record.

Primary logs are `check.log`, `check-ui.log`, `hermes-integration-retry.log`,
`hermes-release.log`, `check-ui-v8.log` and `check-engines.log`. Run the normal Melos
commands to reproduce them. Benchmark smoke used
`dart run tool/benchmark_engines.dart --smoke --output=.local/dart-naming/bench-smoke`;
choose a fresh output directory when repeating. The single-engine variants additionally
use `--engine=hermes` or `--engine=v8` and `--case=source`. Standalone receipts and the
Hermes embedded receipt are copied into the same local directory; the V8 command
validates its embedded receipt before removing the temporary project.

## Handoff

Use the new names through the existing public package entries. Future exported
Flax-owned Dart types follow the naming rule in the root AGENTS.md. This task changes no
host API capability, ownership or scheduling contract and adds no dependencies. No
commit, push or publication is included.
