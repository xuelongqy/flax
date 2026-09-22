# External Binding Migration

Use configuration format **1**, package metadata format **1**, Manifest writer **11**
with strict readers **2/3/4/5/6/7/8/9/10/11**, UI protocol **20** and native ABI **2**.
These domains change independently. For a new package, start with the
[author template](../../packages/flax_codegen/docs/author-template.md). For verification
scope, see
[External Binding Compatibility](../architecture/external-binding-compatibility.md).

## Package metadata and selection

A package with the `bindings` capability must declare one `bindingNamespace` in
`flax_package.yaml`; sibling modules share it. Packages without that capability must
omit the field. Choose a namespace you control; `flax.*` is reserved for official
packages. Namespace grammar and ownership are defined in
[ADR 0022](../decisions/0022-stable-binding-identity.md) and
[ADR 0023](../decisions/0023-external-binding-package-trust.md).

Place selection files directly under `bindings/` as `.yaml` or `.yml`, with explicit
`format: 1`. Keep public library imports, output paths and explicit selections. Use
`additionalLibraries` for required public exports, and `imports` for existing binding
providers. Do not import another package's private implementation or selection YAML.

The `--config` argument locates the owning package; all direct sibling selections are
validated together. Selection `name: example` produces module identity
`<bindingNamespace>/example` and the Dart registration symbol `exampleBindings`.
`registration.bindings` must name that generated symbol. Metadata does not install it
automatically.

## Upgrade the manifest through generation

Upgrade Codegen and regenerate the package outputs. The current writer emits
`formatVersion: 11`, a `typedefs` array in every module model, `typeParameters` on every
alias, `publicLibraries` routing for canonical public entry points, and structural
Record field metadata when a TypeRef contains a Record. Selected readonly declarations
retain `model.topLevel` plus `readonly` source / `read` wire identities, but their JS
surface is emitted at the owning public library as either a safe primitive literal or an
uncached `getX()` function. Do not add newer fields to an older manifest or just rename
its version.

Strict legacy reading preserves the original restrictions:

| Input                         | Accepted contents                                               | Regenerated output                                                 |
| ----------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| Manifest 2                    | No alias metadata or readonly declarations                      | Manifest 11 with empty alias lists                                 |
| Manifest 3                    | Basic aliases; no generic aliases or readonly declarations      | Manifest 11 with explicit empty alias parameters                   |
| Manifest 4                    | Basic and generic aliases; no readonly declarations             | Manifest 11                                                        |
| Manifest 5                    | Existing declarations and historical readonly namespace exports | Manifest 11 with current public-library routing                    |
| Manifest 6                    | Declarations, readonly exports and public-library routing       | Manifest 11                                                        |
| Manifest 7                    | Declarations, routing and structural Record metadata            | Manifest 11                                                        |
| Manifest 8                    | Adds native Widget interface members                            | Manifest 11                                                        |
| Manifest 9                    | Adds named extension adapters and operation signatures          | Manifest 11                                                        |
| Manifest 10                   | Adds mutable reads and independently selected setters           | Manifest 11                                                        |
| Manifest 11                   | Adds bound-only source identity and generic references          | Manifest 11                                                        |
| Manifest 1 or unknown version | Rejected                                                        | Regenerate from valid owner selections using the current toolchain |

Validation happens before normalization. Renaming a format field cannot repair missing
semantics. Older generators cannot read format 11; this compatibility rule does not
promise a public support window. See
[ADR 0026](../decisions/0026-top-level-readonly-bindings.md) for the historical readonly
schema, [ADR 0027](../decisions/0027-public-library-module-delivery.md) for
public-library and module delivery, and [ADR 0028](../decisions/0028-record-bindings.md)
for structural Record metadata.
[ADR 0030](../decisions/0030-extension-binding-adapters.md) adds extension adapters;
formats 2–8 reject their fields.
[ADR 0031](../decisions/0031-mutable-top-level-bindings.md) adds mutable reads and
setters; formats 2–9 reject that metadata.

## Run the package CLI

From the package directory:

```sh
dart run flax_codegen validate --config bindings/config.yaml
dart run flax_codegen generate --config bindings/config.yaml
dart run flax_codegen check --config bindings/config.yaml
```

`validate` checks strict input, ownership and the semantic projection without writing.
`generate` writes the owning package's Dart, TypeScript and Manifest outputs atomically.
`check` compares reproducible outputs and checks orphans without modifying them. The
positional-config CLI and the old standalone `--check` form are unsupported.

## Check identity and registration

Generated Dart, JavaScript and Manifest entries must carry the same literal `moduleId`,
`uiProtocol` and sorted unique `requiredCapabilities`. Generated code must not obtain
the protocol from an ambient Core default. Regenerate both language outputs together;
never patch generated files by hand.

`sourceIdentity` identifies the originating Dart declaration for generation and provider
matching. Runtime calls use the stable `wireId`. Re-exporting a declaration does not
create a new owner, and a consumer cannot silently enlarge an imported provider's
published surface. Typedefs export type relationships without new runtime constructors
or independent target ownership.

Applications explicitly register the generated modules using public Dart entry points.
The checked-in template's public entry point exports `exampleBindings`; see
[explicit registration](../../packages/flax_codegen/docs/author-template.md#explicit-registration).
Protocol, capability and duplicate-identity failures reject installation before exposing
partial definitions. Host-plugin installation remains a separate explicit application
choice.

## Verify outside the checkout

Use `dart run tool/pack_archives.dart` from the Flax checkout, or its `packages:pack`
Melos wrapper, for local archive validation. Follow
[archive validation](../architecture/packaging.md#archive-validation) for the actual
artifacts and limits.

Copy the author template outside the checkout, replace its package and namespace
placeholders, resolve its public Dart dependencies and packed npm exports, then run the
three CLI commands, Dart analysis and strict TypeScript checking. Verify that a public
registration smoke imports the generated symbol. A provider-manifest consumer must work
without provider YAML.

A Flutter host additionally needs focused real behavior checks with explicitly
registered modules and selected engines. Those checks are separate from generating and
compiling a template. Old canary archives must be repacked before being used as evidence
for current outputs; their historical passes are not a current compatibility guarantee.

Keep `publish_to: none` and npm `private: true` while license, registry names,
publication and support policy remain [open](../decisions/open-questions.md).

## Current references

- [Binding Generation](../architecture/bindings.md) defines selection and conversion.
- [Binding Coverage Map](../architecture/binding-coverage-map.md) separates support,
  configuration, generator gaps and undecided designs.
- [Version domains](../decisions/0021-external-binding-version-domains.md) and
  [package boundaries](../architecture/packaging.md) define compatibility and ownership.
- [Public-library module delivery](../decisions/0027-public-library-module-delivery.md)
  defines canonical JS/TS entry points, the application module inventory and
  plugin-selected host delivery.
