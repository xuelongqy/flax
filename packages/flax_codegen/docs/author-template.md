# Third-party binding package author template

English guide for authors who ship a Flax binding package **outside** the Flax
repository. Follow this layout, then run the three-command Codegen CLI against a direct
YAML config.

This template targets UI protocol **20**, Manifest format **6**, and strict YAML /
package-metadata parsing. Native ABI 2 is unchanged and out of scope for binding
authors.

Open product decisions (do **not** invent values here): license text, Pub/npm package
names, registry publication, and support lifetime. Keep `publish_to: none` and npm
`private: true` until those decisions exist.

Generated Dart and JS modules must register and install with literal `moduleId`,
`uiProtocol`, and sorted unique `requiredCapabilities`. Do not read Core's
`flaxBindingVersion` as a fallback. See
[literal module tuple](../../../docs/architecture/bindings.md#literal-module-tuple-and-registration)
and the
[compatibility matrix](../../../docs/architecture/external-binding-compatibility.md).
Codegen emits `moduleId: '<bindingNamespace>/<name>'`, `uiProtocol: 20`, and
`requiredCapabilities: const <String>[]` (or sorted unique literals). Generated JS
validates that tuple before `defineObject` / `defineStream` / `defineContext` /
`defineState` or host calls. Official generated packages no longer use ambient
`version: 20`.

## Directory layout

```text
your_package/
  pubspec.yaml
  flax_package.yaml
  lib/
    your_package.dart          # public entry (may export generated bindings)
    api.dart                   # public API library used by bindings/*.yaml
    src/
      your_types.dart          # selected Dart surface
      generated/
        your_bindings.g.dart   # Codegen output (do not hand-edit)
  bindings/
    config.yaml                # format: 1 selection (direct child only)
    manifest.json              # Manifest 11 output (do not hand-edit)
  js/
    package.json
    src/
      generated/
        bindings.ts            # Codegen output (do not hand-edit)
```

Rules:

- Binding configs must be **direct children** of `bindings/` (`*.yaml` / `*.yml`).
  Nested paths are rejected.
- `library:` in the config must be a **public** `package:<name>/...` URI. Do not point
  Codegen at `package:<name>/src/...` (Manifest 11 rejects private `src/` type library
  URIs).
- Prefer a small `lib/api.dart` that exports only the selected API (not the generated
  file) so the config library URI does not create an import cycle with generated output.

Copyable stubs live under [`example/author_template/`](../example/author_template/).

## `flax_package.yaml` (format 1)

```yaml
format: 1
dart:
  entrypoint: package:your_package/your_package.dart
javascript:
  package: '@your-scope/your-package' # product decision: npm name
  version: same
  mode: runtime # or declarations for host-only npm shells
capabilities:
  - bindings
bindingNamespace: vendor.example # must NOT collide with flax.*
registration:
  bindings:
    - exampleBindings # generated from the config's name: example
```

Requirements:

- `format: 1` is required.
- `capabilities` that include `bindings` **require** `bindingNamespace`.
- Packages **without** `bindings` must **omit** `bindingNamespace`.
- Do not use official Flax namespaces (`flax.core`, `flax.material`, `flax.canvas`, …).
  Choose a DNS-like vendor namespace you control.
- `registration.bindings` lists the Dart export names of generated `FlaxBindingModule`
  values (documentation / tooling; registration is still explicit in application code).
  The name is `<config name>Bindings`, so `name: example` generates `exampleBindings`.

## `bindings/*.yaml` (format 1)

```yaml
format: 1
name: example
library: package:your_package/api.dart
jsPackage: '@your-scope/your-package'
dartOutput: lib/src/generated/your_bindings.g.dart
tsOutput: js/src/generated/bindings.ts
publicLibraries:
  package:your_package/api.dart:
    jsPackage: '@your-scope/your-package/api'
    tsOutput: js/src/generated/libraries/api/index.ts
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

- `format: 1` must be the first field.
- `name` becomes the module segment of `moduleId` = `<bindingNamespace>/<name>`
  (example: `vendor.example/example`).
- Default constructors use the empty key `''` under `constructors:`.
- Instance methods use `instanceMethods:` (not `methods:`; `methods:` is static).
- Ownership is derived from `classes` / `functions` / `topLevel` / `callbackSnapshots` /
  `types` selections. Signature-only types you do not own belong in `types:` (or as
  imports from another package's Manifest). There is no separate `owners:` YAML key.
- Strict parsing rejects unknown fields, wrong types, and incompatible combinations with
  stable diagnostic codes (`FCG_*`).
- Optional `typedefs: [AliasName]` exports aliases as `AliasName<T>` and directional
  `AliasNameInput<T>`, preserving alias and function-local parameters, bounds and
  defaults. Targets use existing conversions and owners; aliases create no runtime
  identity. Manifest 11 requires `typeParameters` even when empty; strict Manifest
  2/3/4/5 dependencies remain readable under their original restrictions. See
  [ADR 0025](../../../docs/decisions/0025-generic-typedef-bindings.md).
- Optional `topLevel: {getters: [name]}` selects public const, final, late final and
  getters without setters. `publicLibraries` determines the public JS/TS module. Safe
  primitive consts may be emitted directly; dynamic/object/final/late-final/getter
  values use uncached `getX()` functions. Importing a module does not perform dynamic
  reads. The return type must use an existing conversion and ownership model. A
  declaration already owned by a dependency reuses that provider's public module.
  Manifest 11 represents this routing; see
  [ADR 0027](../../../docs/decisions/0027-public-library-module-delivery.md).

Direct Dart dependencies that publish binding Manifests are considered automatically.
When exactly one provider owns a required signature type, codegen reuses that provider
identity without an explicit YAML import. Explicit imports remain supported for
deliberate provider dependencies and are required when dependency metadata is not enough
to choose the intended provider:

```yaml
imports: [flax]
```

Codegen resolves strict Manifest 2, 3, 4, 5 or 6 through the consumer's package config.
It does not read another package’s selection YAML or private sources, and it never
auto-expands another provider's public/member surface.

## Three-command CLI

From the binding package directory (or any cwd; pass a path to the config):

```sh
dart run flax_codegen validate --config bindings/config.yaml
dart run flax_codegen generate --config bindings/config.yaml
dart run flax_codegen check --config bindings/config.yaml
```

- `validate` — strict YAML + package metadata + ownership / Manifest projection; no
  writes.
- `generate` — package-atomic write of Dart, TypeScript, and `bindings/manifest.json`
  (Manifest formatVersion **10**).
- `check` — read-only reproducibility / orphan check; does not modify the tree.

The old form `dart run flax_codegen [--check] <config> ...` is not supported.

Dependencies for the CLI:

- `flax_codegen` as a dependency or `dev_dependency` (path, git, or packed archive).
- Selected Dart APIs must resolve through `.dart_tool/package_config.json` (run
  `dart pub get` / `flutter pub get` first).
- Generated Dart currently imports `package:flax/bindings.dart`, so consumers that
  compile generated output also need a `flax` dependency (Flutter SDK constraint follows
  Core).

## Explicit registration

Applications register generated modules explicitly. Example:

```dart
import 'package:flax/flax.dart';
import 'package:your_package/your_package.dart';

final bindings = FlaxBindingRegistry([
  flutterBindings, // from Core, if used
  exampleBindings, // generated from this package's name: example config
]);
```

- Do not rely on automatic discovery from `flax_package.yaml`.
- Generated modules must register/install with literal `moduleId`, `uiProtocol`, and
  `requiredCapabilities` (no ambient Core version). Codegen emits those literals and a
  JS install facade; do not read `flaxBindingVersion`. Wire IDs use
  `<bindingNamespace>/<module>#type:<Name>` form.
- Host packages that return Dart objects to JS must pass the **wire id** string (not the
  Codegen-only `sourceIdentity`) when exposing objects through the host API.

## Minimal walkthrough

1. Copy [`example/author_template/`](../example/author_template/) to a temp directory
   outside the Flax checkout.
2. Replace `your_package`, `vendor.example`, and npm scope placeholders.
3. Point `pubspec.yaml` at installed / packed `flax_codegen` and `flax`.
4. `dart pub get` or `flutter pub get`.
5. Run `validate` → `generate` → `check` as above.
6. Compile generated Dart; run strict `tsc` on generated TypeScript if you ship JS.
7. Register `exampleBindings` in a host app and call through the generated surface.

The [compatibility matrix](../../../docs/architecture/external-binding-compatibility.md)
records the five outside-template checks and distinguishes them from historical canaries
and unverified full external runtime coverage.

## Further reading

- [External binding migration guide](../../../docs/guides/external-binding-migration.md)
  (legacy manifests / loose config → format 1 + current Manifest 11 + `--config` CLI)
- [Binding architecture](../../../docs/architecture/bindings.md)
- [Package boundaries / archives](../../../docs/architecture/packaging.md)
- [Stable identity (ADR 0022)](../../../docs/decisions/0022-stable-binding-identity.md)
- [Version domains (ADR 0021)](../../../docs/decisions/0021-external-binding-version-domains.md)
- [Public-library module delivery (ADR 0027)](../../../docs/decisions/0027-public-library-module-delivery.md)
