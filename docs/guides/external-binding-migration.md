# External Binding Kit v1 — migration guide

Step-by-step cutover from pre-M3 Manifest 1 / loose configuration to the External
Binding Kit v1 surface: YAML configuration format **1**, package
`bindingNamespace`, Manifest format **2**, and the three-command Codegen CLI.

Baseline: UI protocol **20**, native ABI **2**. M0–M4 are GREEN. There is **no**
long-term compatibility layer. **M2.6** (private Manifest 1 migration adapter) was
**cancelled**. **M3** was a direct coordinated cutover; after M3, Manifest format 1
and silent Core tuple fallbacks are rejected. Evidence status for each version domain
is recorded in the
[compatibility matrix](../architecture/external-binding-compatibility.md).

This guide is for authors who already ship or maintain binding packages. For a
greenfield third-party layout, prefer the
[author template](../../packages/flax_codegen/docs/author-template.md).

## Public-release blockers (do not invent)

These product decisions remain open. Do **not** invent values while migrating:

| Decision | Status |
| --- | --- |
| Project license | Open — see [open questions](../decisions/open-questions.md) |
| Public pub.dev names and npm scope | Open |
| Registry / publication | Open |
| Public-release compatibility / support policy | Open |

Keep `publish_to: none` and npm `private: true` until those decisions exist.

## What changed at M3

| Before (unsupported after M3) | After (only supported path) |
| --- | --- |
| Loose / unversioned selection YAML | `format: 1` as the first field of each selection file |
| Implicit package identity | `bindingNamespace` in `flax_package.yaml` when `capabilities` includes `bindings` |
| Manifest format 1 | Manifest `formatVersion: 2` only |
| `dart run flax_codegen [--check] <config>` | `validate` / `check` / `generate` with required `--config <direct-yaml>` |
| Optional private M2.6 adapter | Cancelled — no public or private Manifest 1 reader |

Version domains remain independent
([ADR 0021](../decisions/0021-external-binding-version-domains.md)). Stable wire
identity is
([ADR 0022](../decisions/0022-stable-binding-identity.md)).

## Step 1 — Package metadata (`flax_package.yaml`)

Ensure format 1 metadata. If the package lists `bindings` under `capabilities`, add a
top-level `bindingNamespace` (exactly once for the package). Sibling binding modules
share that value. Packages without `bindings` must **omit** `bindingNamespace`.

```yaml
format: 1
dart:
  entrypoint: package:your_package/your_package.dart
javascript:
  package: '@your-scope/your-package'   # product decision: npm name
  version: same
  mode: runtime
capabilities:
  - bindings
bindingNamespace: vendor.example        # not flax.*; choose a prefix you control
registration:
  bindings:
    - yourBindings
```

Official Flax namespaces already assigned to binding packages:

- `flax` → `flax.core`
- `flax_material_ui` → `flax.material`
- `flax_canvas` → `flax.canvas`

Third parties must not use `flax.*`. Grammar and collision rules are in
[ADR 0022](../decisions/0022-stable-binding-identity.md) and
[ADR 0023](../decisions/0023-external-binding-package-trust.md).

## Step 2 — Selection YAML under `bindings/`

Move every selection file to a **direct child** of the package `bindings/` directory
(`bindings/*.yaml` or `bindings/*.yml`). Nested paths are rejected. The CLI requires
`--config` pointing at one of those direct YAML files.

Add `format: 1` as the first field. Keep `name`, public `library:`, outputs, and
explicit selections. Example:

```yaml
format: 1
name: example
library: package:your_package/api.dart
jsPackage: '@your-scope/your-package'
dartOutput: lib/src/generated/your_bindings.g.dart
tsOutput: js/src/generated/bindings.ts
imports: [flax]
classes:
  Gauge:
    kind: object
    constructors:
      '': [value]
    getters: [value]
    setters: [value]
    instanceMethods:
      increment: [by]
```

Notes:

- `name` is the module segment of `moduleId` = `<bindingNamespace>/<name>`.
- Ownership comes from explicit `classes` / `functions` / `callbackSnapshots` /
  `types` selections. Signature-only dependency types are not owned by discovery.
- Strict parsing rejects unknown fields, wrong types, and incompatible combinations.

## Step 3 — Identities (Manifest 2 and wire)

After generate, `bindings/manifest.json` must carry `formatVersion: 2`. Manifest 1 is
rejected.

| Identity | Rule |
| --- | --- |
| `moduleId` | `bindingNamespace` + `/` + `config.name` (example: `vendor.example/example`) |
| `wireId` (type) | `<moduleId>#type:<encodedPublicBindingName>` |
| `wireId` (function) | `<moduleId>#function:<encodedPublicBindingName>` |
| `sourceIdentity` | Codegen-only; present in Manifest 2 for ownership matching; **never** used in runtime calls |

Generated modules and Manifest 2 module entries also record `uiProtocol` (20 for v1)
and derived `requiredCapabilities`. Do not rely on ambient Core defaults to upgrade old
output.

M5-F landed the public tuple:
[literal module tuple and registration](../architecture/bindings.md#literal-module-tuple-and-registration).
Generated Dart/JS register and install with required `moduleId`, required
`uiProtocol` (no default; **replaces** ambient `version`), and an explicit
`requiredCapabilities` literal. Official packages (`flax`, `flax_material_ui`,
`flax_canvas`) emit those literals; they do not use ambient `FlaxBindingModule`
`version: 20`. Manifest 2 records the same per-module tuple.

## Step 4 — CLI cutover

From the binding package (or any cwd with a path to the config):

```sh
dart run flax_codegen validate --config bindings/config.yaml
dart run flax_codegen generate --config bindings/config.yaml
dart run flax_codegen check --config bindings/config.yaml
```

- `validate` — strict YAML, package metadata, ownership / Manifest projection; no
  writes.
- `generate` — package-atomic Dart, TypeScript, and Manifest 2 write.
- `check` — read-only reproducibility / orphan check; does not modify the tree.

**Not supported:** `dart run flax_codegen [--check] <config> ...` (positional config,
optional `--check` without a subcommand).

Melos package checks in this repository wrap the same `--config` CLI for official
packages (`bindings:generate` / `bindings:check`).

## Step 5 — Registration and consumption

Applications still register modules explicitly. Metadata `registration.bindings` is
documentation / tooling, not auto-discovery:

```dart
final bindings = FlaxBindingRegistry([
  flutterBindings,
  yourBindings,
]);
```

Host code that exposes Dart objects to JS must pass the **wire id** string, not
`sourceIdentity`.

## Step 6 — Outside-checkout packed archives (pattern)

M4 proved outside-repository consumption with packed Pub trees and npm packs. Prefer
the in-repo packer (`dart run tool/pack_archives.dart`, or Melos `packages:pack`) for
new archive receipts. The read-only canary tree `flax-m4-canaries` (sibling of this
repository) remains the worked **consumer** pattern:

1. Pack archives from a Flax checkout into Dart trees + npm packs.
2. Point a consumer `pubspec.yaml` at packed `flax` / `flax_codegen` (and other
   packages as needed) via `path:` to those archives.
3. `dart pub get` / `flutter pub get`.
4. Run `validate` → `generate` → `check` with `--config` on a direct
   `bindings/*.yaml`.
5. Compile Dart; typecheck / build JS if you ship TypeScript.
6. For a Flutter host, register Core / Material (or your) modules explicitly and run
   focused engine smoke (Hermes and V8 in the canary).

See canary `README.md`, `pure_dart/` (`bindingNamespace: canary.pure`), and
`flutter_host/` for the worked pattern. Public registry URLs and support lifetime are
still open product decisions — archives here are a local proof, not a published
distribution policy.

## Migration checklist

1. Add or confirm `format: 1` on `flax_package.yaml`.
2. Add `bindingNamespace` iff `capabilities` includes `bindings`.
3. Place every selection YAML as a direct child of `bindings/` with `format: 1`.
4. Switch scripts and CI to `validate|check|generate --config <direct-yaml>`.
5. Run `generate`, then confirm `bindings/manifest.json` has `formatVersion: 2`.
6. Confirm `moduleId` / `wireId` shapes; never pass `sourceIdentity` on the wire.
7. Register generated `FlaxBindingModule` constants explicitly in the host.
8. Leave license, pub/npm names, registry, and support policy undecided until
   [open questions](../decisions/open-questions.md) are closed.

## Further reading

- [Binding generation](../architecture/bindings.md)
- [Package boundaries](../architecture/packaging.md)
- [Author template](../../packages/flax_codegen/docs/author-template.md)
- [ADR 0021 — version domains](../decisions/0021-external-binding-version-domains.md)
- [ADR 0022 — stable identity](../decisions/0022-stable-binding-identity.md)
- [ADR 0023 — package trust](../decisions/0023-external-binding-package-trust.md)
- [External Binding Kit v1 task](../tasks/external-binding-kit-v1.md)
- [Open questions](../decisions/open-questions.md)
