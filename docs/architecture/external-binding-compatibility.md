# External Binding Kit v1 — compatibility matrix

Reviewable status of the External Binding Kit v1 compatibility domains against accepted
decisions and recorded M3/M4/M5-F evidence. This matrix does **not** decide
public-release support lifetime, registry publication, or license policy.

Contract owner: [ADR 0021](../decisions/0021-external-binding-version-domains.md).
Related: [ADR 0020](../decisions/0020-ui-protocol-20.md) (UI protocol 20),
[ADR 0022](../decisions/0022-stable-binding-identity.md),
[ADR 0023](../decisions/0023-external-binding-package-trust.md),
[open questions](../decisions/open-questions.md),
[task record](../tasks/external-binding-kit-v1.md),
[migration guide](../guides/external-binding-migration.md).

Outside-checkout canary tree (sibling workspace, not linked from this repo):
`/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/`.

## Status vocabulary

| Status                        | Meaning                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------ |
| **proven**                    | Recorded command/receipt or committed fixture evidence supports the claim      |
| **partially proven**          | Core claim holds, but a documented residual or scoped gap remains              |
| **contract locked**           | Architecture accepted the public API; package implementation is not yet landed |
| **not run**                   | Required or desirable suite was intentionally not executed for this matrix     |
| **blocked by open-questions** | Product/policy decision still open; do not invent a release commitment         |

Cells may combine a technical status with an open-questions blocker when evidence exists
for the experimental baseline but public support policy is unsettled.

## Summary matrix

| Domain                       | Technical status | Public-release policy     | Primary evidence                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI protocol 20               | proven           | blocked by open-questions | ADR 0020/0021; `flaxBindingVersion = 20`; Manifest 2 `uiProtocol: 20`; official generated Dart/JS pin literal `moduleId` / `uiProtocol` / `requiredCapabilities` |
| Native ABI 2                 | proven           | blocked by open-questions | `FLAX_ABI_VERSION 2`; load-time table check; engines reuse ABI without binding YAML                                                                              |
| Binding YAML format 1        | proven           | blocked by open-questions | Official `format: 1` configs; Codegen config/CLI tests; M3/M4 generate+check                                                                                     |
| Manifest 2                   | proven           | blocked by open-questions | Committed `formatVersion: 2`; Manifest 2 round-trip and reject-format-1 tests; M3 cutover                                                                        |
| Codegen CLI                  | proven           | blocked by open-questions | `validate\|check\|generate --config`; package CLI tests; M4 pure-Dart canary                                                                                     |
| Engine Hermes                | partially proven | blocked by open-questions | M4 Flutter canary Hermes smoke PASS; full dual-engine UI suite not re-run in canary                                                                              |
| Engine V8                    | partially proven | blocked by open-questions | M4 Flutter canary V8 smoke PASS; full `check:ui:v8` / dual-engine UI suite not re-run in canary                                                                  |
| Out-of-repo pure Dart canary | proven           | blocked by open-questions | `flax-m4-canaries/receipts/pure_dart.md`                                                                                                                         |
| Out-of-repo Flutter canary   | partially proven | blocked by open-questions | `flax-m4-canaries/receipts/flutter_host.md` + `flutter_canary.log`                                                                                               |

## Domain detail

### 1. UI protocol 20

| Claim                                                                                                             | Status                    | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Protocol 20 is the single active UI protocol baseline for External Binding Kit v1                                 | proven                    | [ADR 0020](../decisions/0020-ui-protocol-20.md); [ADR 0021](../decisions/0021-external-binding-version-domains.md); `packages/flax/lib/src/ui/definitions.dart` (`flaxBindingVersion = 20`); official Manifest 2 modules use `uiProtocol: 20` (e.g. `packages/flax/bindings/manifest.json`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Registry / mount reject mismatched protocol integers                                                              | proven                    | `FlaxBindingRegistry` `uiProtocol` check in `packages/flax/lib/src/ui/definitions.dart`; session mount protocol check in `packages/flax/lib/src/ui/session.dart`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Generated modules pin literal `moduleId` / `uiProtocol` / `requiredCapabilities` facades (ADR 0021 tuple pinning) | proven                    | [literal module tuple](bindings.md#literal-module-tuple-and-registration); [task M5-F Core/Codegen](../tasks/external-binding-kit-v1.md); official `FlaxBindingModule` registration in `packages/flax/lib/src/generated/flutter_bindings.g.dart` (`moduleId: "flax.core/flutter"`, `uiProtocol: 20`, `requiredCapabilities: const <String>[]`), `packages/flax_material_ui/lib/src/generated/material_bindings.g.dart` (`flax.material/material`), `packages/flax_canvas/lib/src/generated/canvas_bindings.g.dart` (`flax.canvas/canvas`); matching JS `_flaxInstallBindingModule(...)` before define/host calls; Manifest 2 per-module tuples match. No ambient `version: 20` on those generated modules. Side note: `packages/flax_fetch/test/ui/host_test.dart` still constructs `version: 16` in a handwritten test (out of this slice; not an official generated binding module) |
| Public-release host/guest protocol support lifetime                                                               | blocked by open-questions | [open questions](../decisions/open-questions.md) row “Public-release compatibility policy”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### 2. Native ABI 2

| Claim                                                                       | Status                    | Evidence                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current C `FlaxApi` table is ABI 2                                          | proven                    | `packages/flax/native/include/flax/runtime.h` (`#define FLAX_ABI_VERSION 2`); generated `packages/flax/lib/src/native/runtime_bindings.g.dart` (`FLAX_ABI_VERSION = 2`); load rejects mismatched table version in `packages/flax/lib/src/native/native_runtime.dart` |
| Binding YAML / Manifest do not declare native ABI (normal binding packages) | proven                    | [ADR 0021](../decisions/0021-external-binding-version-domains.md) “Native ABI 2”; [author template](../../packages/flax_codegen/docs/author-template.md)                                                                                                             |
| M4 outside canaries exercise ABI 2 through packed Hermes/V8 engines         | proven (indirect)         | Flutter canary depends on packed `flax_engine_hermes` / `flax_engine_v8` and passes focused smoke — receipts under `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/`                                                                                    |
| Native ABI evolution after ABI 2 / public ABI support policy                | blocked by open-questions | [open questions](../decisions/open-questions.md) rows “Native ABI evolution after ABI 2” and “Public-release compatibility policy”                                                                                                                                   |

### 3. Binding YAML format 1

| Claim                                                                   | Status                    | Evidence                                                                                                                                                                                 |
| ----------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Official selection files carry `format: 1`                              | proven                    | e.g. `packages/flax/bindings/config.yaml`; Material/Canvas package configs; architecture [bindings](bindings.md)                                                                         |
| Strict fail-closed parsing for unknown/missing/mistyped/duplicate input | proven                    | `packages/flax_codegen/test/config_test.dart`; M3 GREEN `bindings:check` in [task record](../tasks/external-binding-kit-v1.md)                                                           |
| Outside-checkout generate/check against format-1 config                 | proven                    | Canary `pure_dart/bindings/config.yaml` starts with `format: 1`; receipt `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/pure_dart.md` (`generate`/`check --config` EXIT 0) |
| Long-term public support for format 1 across Codegen majors             | blocked by open-questions | ADR 0021 freezes bump rules; support lifetime remains open                                                                                                                               |

### 4. Manifest 2

| Claim                                                       | Status                    | Evidence                                                                                                                                                                                                                                     |
| ----------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Official manifests are `formatVersion: 2` only              | proven                    | `packages/flax/bindings/manifest.json` (`formatVersion: 2`, `bindingNamespace: flax.core`, modules with `uiProtocol: 20`); [packaging](packaging.md); M3 direct cutover in [ADR 0021](../decisions/0021-external-binding-version-domains.md) |
| Manifest format 1 is rejected                               | proven                    | `packages/flax_codegen/test/manifest_v2_test.dart` (`formatVersion` 1 → Invalid formatVersion); migration guide states no long-term Manifest 1 path                                                                                          |
| Lossless model → Manifest 2 → loaded projection round trips | proven                    | `packages/flax_codegen/test/manifest_v2_test.dart` maximal-model / module / identity round-trip tests                                                                                                                                        |
| Outside canary emits Manifest 2                             | proven                    | Spot-check: `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/pure_dart/bindings/manifest.json` → `formatVersion: 2`, `bindingNamespace: canary.pure`, `uiProtocol: 20`                                                                    |
| Public Manifest 2 support lifetime across releases          | blocked by open-questions | [open questions](../decisions/open-questions.md)                                                                                                                                                                                             |

### 5. Codegen CLI

| Claim                                                                     | Status                    | Evidence                                                                                                                                                  |
| ------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public CLI is `validate` / `check` / `generate` with required `--config`  | proven                    | `packages/flax_codegen/README.md`; `packages/flax_codegen/test/cli_test.dart` (accepts three commands; rejects old `[--check] <config>` form with exit 1) |
| Package-atomic happy path and check without mutating tree inappropriately | proven                    | `cli_test.dart` validate/generate/check EXIT 0; package pipeline tests under `packages/flax_codegen/test/`                                                |
| Outside-checkout CLI on packed `flax_codegen` archive                     | proven                    | `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/pure_dart.md`; packed archive path `archives/dart/flax_codegen`                              |
| Published CLI SemVer / support window                                     | blocked by open-questions | License, pub.dev names, and support policy remain open                                                                                                    |

### 6. Engines — Hermes and V8

Spot-check (2026-09-13 receipts; **not** re-run for this matrix): canary logs are short,
dated, and coherent with the written receipts.

| Claim                                                                       | Status                       | Evidence                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hermes focused Flutter canary smoke                                         | proven                       | `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/flutter_host.md`; `receipts/flutter_canary.log` (`M4 canary smoke on hermes` PASS; overall EXIT 0)                                                                                                                                                             |
| V8 focused Flutter canary smoke                                             | proven                       | Same receipts (`M4 canary smoke on v8` PASS)                                                                                                                                                                                                                                                                                |
| Covered behaviors in canary smoke                                           | proven (scoped)              | Explicit registry registration, MaterialApp/Scaffold, ElevatedButton callback, StreamBuilder + `Stream.fromIterable`, JS Promise microtask → status signal, `FlaxView` teardown — listed in `flutter_host.md` / canary README                                                                                               |
| Full dual-engine UI suite / identity goldens / host-plugin matrix in canary | not run                      | Explicitly documented gap in [task M4](../tasks/external-binding-kit-v1.md) and canary receipts                                                                                                                                                                                                                             |
| In-repo Hermes/V8 runtime baseline (pre-existing, not re-run here)          | partially proven (cite only) | Architecture [runtime](runtime.md); task [v8-support](../tasks/v8-support.md) records `check:runtime:v8` / `check:ui:v8` as the explicit V8 verification path; root [AGENTS.md](../../AGENTS.md) requires runtime checks on macOS arm64 when runtime changes. This matrix does **not** claim a fresh dual-engine green run. |
| Default product engine / per-platform selection                             | blocked by open-questions    | [open questions](../decisions/open-questions.md) “Default engine and per-platform selection”                                                                                                                                                                                                                                |

### 7. Out-of-repo pure Dart / Flutter canaries

| Claim                                                                                                    | Status                    | Evidence                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pure Dart package installs packed archives, generates, checks, compiles Dart, typechecks/builds/tests JS | proven                    | `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/README.md`; `receipts/pure_dart.md` (all listed commands EXIT 0); namespace `canary.pure`; wire evidence `canary.pure/canary#type:Counter`                                                                                                           |
| Flutter host package registers Core + Material bindings and runs Hermes + V8 smoke                       | proven (focused)          | `receipts/flutter_host.md`; `receipts/flutter_canary.log`; pubspec uses packed `archives/dart/{flax,flax_material_ui,flax_engine_hermes,flax_engine_v8}`                                                                                                                                                 |
| Aggregate `packages:check` on the integration baseline used for M4                                       | proven                    | [task M4](../tasks/external-binding-kit-v1.md) records EXIT 0; log `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/packages_check.log` completes outside Dart consumers for core, engines, Material, Codegen, and extension packages (spot-checked; no failure markers in the receipt body) |
| Full dual-engine UI / identity goldens / host-plugin surface outside checkout                            | not run                   | Same documented M4 gaps                                                                                                                                                                                                                                                                                  |
| Public “supported consumer” commitment for outside archives                                              | blocked by open-questions | License, registry names, and public-release compatibility policy                                                                                                                                                                                                                                         |

## Residuals carried forward (not invented green)

M5-F Core + Codegen landed official literal-tuple registration. Remaining honesty notes:

- Full dual-engine UI suite, identity goldens, and host-plugin matrix were not re-run
  inside the outside canaries (M4 gap; **not run** for this matrix).
- M4 canary archives were packed before M5-F; they prove outside generate/check and
  focused Hermes/V8 smoke, not a fresh outside-checkout of the literal-tuple facades.
- Handwritten `packages/flax_fetch/test/ui/host_test.dart` still uses
  `FlaxBindingModule(..., version: 16)` (out of this slice).

## What this matrix does not settle

Do not read any cell as a public support promise. Still open in
[open questions](../decisions/open-questions.md):

- Project license
- Public pub.dev names and npm scope
- Public-release compatibility policy / support lifetime
- Default engine and per-platform selection
- Native ABI evolution after ABI 2
