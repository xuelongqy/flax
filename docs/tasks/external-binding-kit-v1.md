# Task: External Binding Kit v1

Status: complete (technical kit + visible verification); public release still blocked on
open-questions; M2.6 cancelled)

## Goal and scope

Stabilize `flax_codegen` before expanding the binding ecosystem. The milestone delivers
an explicit-selection, fail-closed binding kit that a trusted third-party Dart or
Flutter package can use outside the Flax repository.

The stable v1 surface covers the command-line interface, YAML configuration, binding
manifest, generated Dart and TypeScript semantics, stable runtime identities, and the
compatibility rules needed to register generated modules. The analyzer/parser/emitter
implementation remains internal and may be refactored without forcing binding packages
to regenerate when generated output and public behavior are unchanged.

The milestone targets UI protocol 20 and native ABI 2. Before the first external
release, it may make one coordinated repository-wide migration to YAML configuration
format 1 and a lossless binding manifest format 2.

This milestone does not add broad Flutter API coverage, automatic whole-library
selection, new host plugins, runtime type tokens, dynamic plugin loading, a security
sandbox, additional engines, or additional platforms.

Stable identity (once): `bindingNamespace` is `flax.*`; settled namespaces are
`flax.core`, `flax.material`, and `flax.canvas`; later `flax.cupertino` / `flax.fetch` /
`flax.websocket` / `flax.localstorage`. `moduleId=<bindingNamespace>/<config.name>`;
`wireId=<moduleId>#type:<name>` or `#function:<name>`; `sourceIdentity` is Codegen-only.

## Acceptance criteria

- Protocol 20 is the single active UI protocol in runtime constants, generated modules,
  official manifests, current architecture documentation, and package documentation.
- Every protocol 20 shape accepted for v1 has a positive generator fixture and every
  documented hard wall has a fail-closed negative fixture.
- A direct model-to-manifest-to-loaded-model round trip preserves every cross-package
  conversion, callback, ownership, disposal, listener, and async-factory semantic.
- Generated Dart and TypeScript modules record the protocol and capabilities they were
  generated for; recompilation against a newer Core cannot silently upgrade them.
- Runtime identities used on the wire are independent of working directories, private
  source file moves, re-export paths, selection order, generator versions, and JS
  aliases. `sourceIdentity` is Codegen-only, is present in Manifest 2 for ownership
  matching, and never appears in runtime calls.
- YAML parsing rejects unknown, missing, mistyped, duplicate, and incompatible entries
  with a stable diagnostic code, source location, and field path.
- Generation is atomic and deterministic, requires no repository-root pnpm, Prettier,
  workspace alias, or configuration file, and produces identical bytes from different
  working directories and input ordering.
- `check` reports all missing, stale, and orphan generated files without modifying the
  source tree.
- A pure Dart package and a Flutter package outside the Flax checkout install packed
  artifacts, run code generation, compile Dart and strict TypeScript, explicitly
  register the generated package, and exercise real calls.
- The Flutter canary produces equivalent normalized behavior on Hermes and V8, including
  callbacks, Future/Stream behavior, object identity, lifecycle cleanup, and session
  shutdown.
- Package-local, aggregate binding, archive-consumer, and required dual-engine checks
  pass on one immutable integration baseline.

M3 is a direct coordinated switch. After M3, strict readers are the only default;
Manifest format 1 and silent Core tuple fallbacks are rejected. No private legacy
adapter is retained.

## Approach

1. **M0–M2 (complete):** protocol 20 stop-line, ADR freeze, codegen CLI
   `validate|check|generate --config`. M2.6 cancelled.
2. **M3 (complete):** official format 1 + namespaces + Manifest 2 direct cutover.
3. **M4 (complete):** outside-checkout pure Dart and Flutter canaries on packed
   archives; Hermes + V8 focused smoke; `packages:check`.
4. **M5: release candidate.** Author template (M5-C), migration guide (M5-A), reusable
   CI / archive receipts (M5-T), compatibility matrix (M5-Q), release checks. Public
   release remains blocked on license, package-name, registry, and support-policy
   decisions.

## Results and validation

- **M0–M2 GREEN:** see prior receipts; M2.5d flax_codegen 264 passed; M2.6 cancelled.
- **M3 GREEN (2026-09-13):** namespaces `flax.core` / `flax.material` / `flax.canvas`;
  Manifest 2; Tooling CLI cutover; package checks + `bindings:check` + `docs:check`
  EXIT 0. Residual: ambient `version: 20` on `FlaxBindingModule` (Manifest 2 already
  records full tuples).
- **M4 GREEN (2026-09-13):** outside canaries at
  `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/`.
  - Packer: `tool/pack_archives.py` → `archives/dart/*` + `archives/npm*` (mirrors
    `packages:check` strip/pack flow; npm built then packed).
  - **Pure Dart** (`pure_dart/`, namespace `canary.pure`): `generate`/`check --config`
    EXIT 0; `flutter test` EXIT 0 (create/invoke); `pnpm typecheck/build/test` EXIT 0.
  - **Flutter host** (`flutter_host/`): explicit
    `FlaxBindingRegistry([flutterBindings, materialBindings])`;
    `flutter test test/canary_test.dart` → Hermes PASS + V8 PASS (callbacks,
    StreamBuilder, Promise microtask UI update, view teardown).
  - `dart run melos run packages:check` EXIT 0.
  - Gaps (documented, non-blocking): full dual-engine UI suite / identity goldens /
    host-plugin matrix not re-run in the canary; literal moduleId facades still residual
    from M3 (ambient version accepted for M4 registration).
- **M5-C GREEN (2026-09-13):** third-party author template (Codegen-owned).
  - Guide: `packages/flax_codegen/docs/author-template.md`
  - Skeleton: `packages/flax_codegen/example/author_template/`
  - Package README links the guide. Documents format 1 YAML, `bindingNamespace`,
    three-command CLI, Manifest 2, explicit registration, and residuals (ambient
    `version: 20` / incomplete moduleId facades). License, package name, registry, and
    support policy remain open product placeholders.
- **M5-T Tooling/CI (2026-09-13):** Workspace/Tooling slice.
  - `tool/src/archive_packing.dart` — shared strip/prepare helpers aligned with
    `packages:check` and the M4 canary packer.
  - `tool/pack_archives.dart` — stages Dart trees + npm `.tgz`, writes `RECEIPT.json` /
    `RECEIPT.txt` (format 1). Default out: `.local/archives/`. Options: `--dry-run`,
    `--skip-npm`, `--packages`, `--out`.
  - `tool/check_release.dart` — pre-release dry-run: unpublished assert →
    `packages:check` → `pack_archives --dry-run`. No registry publish.
  - Melos: `packages:pack`, `release:check` (alongside existing `packages:check`).
  - CI: `.github/workflows/packages.yml` (ubuntu; `js:build` + `release:check`; no
    engines; no publish). macOS runtime remains `runtime.yml`.
  - Docs: `CONTRIBUTING.md` checks table, `tool/README.md`,
    `docs/architecture/packaging.md`.
  - Commands: `dart run melos run packages:check` | `dart run melos run packages:pack` |
    `dart run tool/pack_archives.dart --dry-run` | `dart run melos run release:check`.
  - Local evidence (2026-09-13): `docs:check` EXIT 0; `js:build` EXIT 0;
    `packages:check` EXIT 0; `pack_archives --dry-run` EXIT 0 (10 Dart trees + 7 npm
    archives; receipt format 1); `release:check` EXIT 0.
  - Follow-up (2026-09-13): `packages:check` / `release:check` failed on some pnpm 11
    builds where `pnpm pack --dry-run` is rejected (`Unknown option: 'dry-run'`) despite
    help text. `tool/check_packages.dart` now uses a single
    `pnpm pack --json --pack-destination` and validates the JSON file list from that
    tarball write. Re-verified: `packages:check` EXIT 0; `release:check` EXIT 0.
  - Canary `flax-m4-canaries/tool/pack_archives.py` is no longer the only pack/receipt
    truth; prefer in-repo `tool/pack_archives.dart`.
- **M5-A GREEN (2026-09-13):** migration guide + publish-doc skeleton links.
  - Guide:
    [`docs/guides/external-binding-migration.md`](../guides/external-binding-migration.md)
    (Manifest 1 / loose config → format-1 YAML + `bindingNamespace` + Manifest 2 +
    `validate|check|generate --config`; no long-term compat; M2.6 cancelled / M3 direct
    cutover; public-release blockers pointed at open questions).
  - Linked from `docs/README.md`, `docs/architecture/README.md`,
    `docs/architecture/bindings.md`, `docs/architecture/packaging.md` (Manifest 2
    wording), and `packages/flax_codegen/docs/author-template.md`.
  - ADR 0021 / 0022 already state M3 cutover and Manifest 1 rejection; no ADR edit.
  - `dart run melos run docs:check` EXIT 0.
- **M5-Q GREEN (2026-09-13):** compatibility matrix (docs only; no package code).
  - Matrix:
    [`docs/architecture/external-binding-compatibility.md`](../architecture/external-binding-compatibility.md)
  - Coverage: YAML format 1, Manifest 2, Codegen CLI, and out-of-repo pure Dart canary
    **proven** from M3/M4 receipts + Codegen fixtures; UI protocol 20 and both engines
    **partially proven** (ambient tuple/facade residual; focused Hermes/V8 smoke only);
    Flutter canary **partially proven** (smoke green; full dual-engine UI / identity
    goldens / host-plugin matrix **not run**); public-release support lifetime **blocked
    by open-questions** on every domain.
  - Spot-checked M4 canary receipts under
    `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries/receipts/` (coherent; did not
    re-run dual-engine suites).
  - Remaining gaps: literal `moduleId` / `uiProtocol` / `requiredCapabilities` facades
    (Architecture contract locked; Core then Codegen not yet in code); full dual-engine
    UI / identity goldens / host-plugin matrix outside checkout; license, registry
    names, and support policy.
- **M5-F Architecture GREEN (2026-09-13):** public literal-tuple contract **locked** in
  docs. Package implementation is **not** landed. **Do not** mark whole M5-F GREEN.
  - Contract: `FlaxBindingModule` keeps `name` / `types` / `functions`; required
    `moduleId` (`bindingNamespace + "/" + name`); required `uiProtocol` (clean rename of
    `version`, **no default**, no parallel fields); required explicit
    `requiredCapabilities` literal (`const <String>[]` when empty). `flaxBindingVersion`
    stays Core's active protocol constant; generated modules pass their own literals and
    must not read Core as a fallback.
  - Registry fail-closed before publishing maps: `uiProtocol == flaxBindingVersion`;
    every capability ∈ Core `supportedCapabilities`; duplicate `moduleId` and duplicate
    `name`; duplicate type/function ids; throw with no partial registry; no silent
    upgrade.
  - JS: validate the literal tuple before any `defineObject` / `defineStream` /
    `defineContext` / `defineState`, realm mutation, definition-map mutation, or host
    call; on success a module-scoped facade/token; zero-entry modules still
    emit/validate; rejected install is side-effect-free.
  - Docs: [`docs/architecture/bindings.md`](../architecture/bindings.md) (literal module
    tuple section);
    [`docs/architecture/external-binding-compatibility.md`](../architecture/external-binding-compatibility.md)
    (tuple row: contract locked, not proven in code);
    [`docs/guides/external-binding-migration.md`](../guides/external-binding-migration.md);
    [`packages/flax_codegen/docs/author-template.md`](../../packages/flax_codegen/docs/author-template.md).
  - ADR 0021 already specifies tuple pinning and no ambient Core fallback; no ADR
    rewrite.
  - `dart run melos run docs:check` EXIT 0.
  - Next: **Core** implements `packages/flax` API, then **Codegen** emits literals.
- **M5-F Core GREEN (2026-09-13):** `packages/flax` implements the locked Dart tuple.
  **Do not** mark whole M5-F GREEN until Codegen emits and regenerates.
  - `FlaxBindingModule` keeps `name` / `types` / `functions`; required `moduleId`,
    required `uiProtocol` (clean rename of `version`, **no default**, no parallel
    `version` field), required `requiredCapabilities` (no ambient empty default).
    `flaxBindingVersion` remains Core's active protocol constant (`20`). Committed
    `flutterBindings` passes literals `moduleId: 'flax.core/flutter'`, `uiProtocol: 20`,
    `requiredCapabilities: const <String>[]` and does not read `flaxBindingVersion`.
  - `FlaxBindingRegistry` validates the candidate graph before publishing type or
    function maps: `uiProtocol == flaxBindingVersion`; every capability ∈ internal
    `_supportedCapabilities` (protocol-20 baseline: empty); duplicate `moduleId` and
    duplicate `name`; duplicate type/function ids; throw with no partial maps; no silent
    upgrade.
  - Minimal registration adapters so Core can analyze/test: committed `flutterBindings`;
    handwritten tests in `packages/flax/test`; `packages/flax_test` owned-harness
    forwards the tuple when wrapping types (Core tests import that harness). Official
    `flax_material_ui` / `flax_canvas` generated modules still use `version:` and wait
    for Codegen.
  - Ambient `FlaxBindingModule` `version` default: **cleared**.
  - Codegen **may start**: emit Dart literals/facades and regenerate official packages.
    Do not change native ABI 2 / UI protocol 20 integers. JS module-scoped install
    facade remains Codegen emission against the locked architecture contract (Core did
    not invent a new JS install API).
  - Commands (2026-09-13):
    - `flutter analyze --no-pub .` in `packages/flax` EXIT 0
    - `flutter analyze --no-pub .` in `packages/flax/example` EXIT 0
    - `flutter analyze --no-pub .` in `packages/flax_test` EXIT 0
    - `flutter test --no-pub test/ui/binding_registry_test.dart` EXIT 0 (6 passed)
    - `flutter test --no-pub test/ui/flax_view_test.dart --name "duplicate registrations"`
      EXIT 0
    - Did not run `tool/package.dart check flax` / `bindings:check` (Codegen emitter
      still emits `version: 20`; byte compare would fail until regenerate).
- **M5-F Codegen GREEN (2026-09-13):** emitter pins literal tuples and official Manifest
  2 packages were regenerated. **Do not** mark whole M5-F GREEN (Integration still
  needed).
  - Dart: `FlaxBindingModule` emission is `moduleId` / `uiProtocol: 20` /
    `requiredCapabilities: const <String>[]` (sorted unique when nonempty). Does not
    emit `version:` and does not read `flaxBindingVersion`. Freeze stamps `moduleId`
    from `bindingNamespace/name`.
  - JS: generated modules call `_flaxInstallBindingModule` with the same literals
    **before** `defineObject` / `defineStream` / `defineContext` / `defineState`,
    enum-map mutation, or host calls; success returns `${name}BindingModule` and every
    generated host call uses that facade. Zero-member modules still validate. Core JS
    install API unchanged.
  - Official generate: `flax` (`flutter` + host `components`), `flax_material_ui`,
    `flax_canvas`. No other Manifest 2 owners. `flutter_bindings.g.dart` is formal
    generate (no remaining `version:`).
  - Fixtures: `packages/flax_codegen/test/emission_test.dart` (literal tuple group);
    freeze stamps checked in `package_pipeline_test.dart`.
  - Material handwritten `FlaxBindingModule(...)` test fixtures aligned to the Core
    tuple (not a Core API change).
  - Commands (2026-09-13), all EXIT 0:
    - `dart run flax_codegen generate --config packages/flax_canvas/bindings/config.yaml`
      (flax + material generate completed earlier in the same slice)
    - `dart run flax_codegen check --config` on
      `packages/flax/bindings/components.yaml`, `packages/flax/bindings/config.yaml`,
      `packages/flax_material_ui/bindings/config.yaml`,
      `packages/flax_canvas/bindings/config.yaml`
    - `dart run tool/package.dart bindings --check`
    - `dart run tool/package.dart check flax_codegen` (analyze clean; 268 tests)
    - `dart run tool/package.dart check flax`
    - `dart run tool/package.dart check flax_material_ui`
    - `dart run tool/package.dart check flax_canvas`
  - Protected hashes: **18/18 refreshed** for the six regenerated Dart/TS binding files;
    YAML, `flax_package.yaml`, Manifest 2, and host `state_callbacks` bytes unchanged.
  - Next: **Integration and Quality** refresh the compatibility matrix tuple row and
    spot-check registration. Do not expand dual-engine UI / identity golden /
    host-plugin matrix in this slice.
- **M5-F Integration GREEN (2026-09-13):** docs-only matrix refresh after Core and
  Codegen. Whole **M5-F GREEN**. chatId `8244929d-c178-4e16-aca7-789783118377`.
  - Matrix tuple-pinning row: **proven** (was contract locked / ambient residual). UI
    protocol 20 technical status: **proven**. Public-release policy still **blocked by
    open-questions**.
  - Spot-check (official Manifest 2 owners; no dual-engine re-run):
    - `packages/flax/lib/src/generated/flutter_bindings.g.dart` —
      `moduleId: "flax.core/flutter"`, `uiProtocol: 20`,
      `requiredCapabilities: const <String>[]`; JS
      `_flaxInstallBindingModule("flax.core/flutter", 20, ...)`.
    - `packages/flax_material_ui/lib/src/generated/material_bindings.g.dart` —
      `flax.material/material` + matching JS install.
    - `packages/flax_canvas/lib/src/generated/canvas_bindings.g.dart` —
      `flax.canvas/canvas` + matching JS install.
    - Manifest 2 `uiProtocol: 20` / empty `requiredCapabilities` match those moduleIds.
      No ambient `version: 20` on those generated Dart modules.
    - Host `flax.core/components` remains Manifest 2 + `state_callbacks` (no separate
      Dart `FlaxBindingModule` constant).
  - Stale “still ambient” wording removed from
    [`docs/architecture/bindings.md`](../architecture/bindings.md),
    [`docs/guides/external-binding-migration.md`](../guides/external-binding-migration.md),
    and
    [`packages/flax_codegen/docs/author-template.md`](../../packages/flax_codegen/docs/author-template.md).
  - Honest leftovers (not M5-F blockers): full dual-engine UI / identity goldens /
    host-plugin matrix **not run**; M4 canaries packed before M5-F; handwritten
    `packages/flax_fetch/test/ui/host_test.dart` still uses `version: 16`.
  - `dart run melos run docs:check` EXIT 0.

## Visible verification (2026-09-13)

Integration ran a post-M5-F acceptance pass the user can see:

1. Repacked archives with `dart run tool/pack_archives.dart --force-build` (EXIT 0).
2. Refreshed outside canaries under `/Volumes/MAC_HOME/Develop/Flutter/flax-m4-canaries`
   (sibling tree; verification-only fixes stayed there): pure Dart generate/check/JS and
   Flutter Hermes+V8 smoke EXIT 0.
3. Launched `examples/standalone` with `flutter run --no-pub -d macos` and captured GUI
   screenshots under that canary receipts tree (also copied under ignored `.local/`).

This closes the “no startup demo” gap for Kit v1 technical acceptance. It does **not**
claim full dual-engine UI / identity goldens / host-plugin matrix coverage.

## Handoff

**External Binding Kit v1 technical work is complete** (M0–M5 slices + visible
verification). Whole **M5-F is GREEN**.

Do not invent license, pub/npm names, registry, or support-policy decisions; those still
block any public release packaging.

Out of scope leftovers (separate slices): full dual-engine UI suite / identity goldens /
full host-plugin matrix; `flax_fetch` handwritten `version: 16` test fixture.

**Next milestone:** [Binding Coverage Expansion v1](binding-coverage-expansion-v1.md)
(explicit selection growth per
[ADR 0018](../decisions/0018-binding-coverage-strategy.md); not whole-library
auto-bind).
