# ADR 0021: External Binding Version Domains and Compatibility

Status: accepted

Date: 2026-09-12

Amended by [ADR 0024](0024-basic-typedef-bindings.md) for basic aliases and
[ADR 0025](0025-generic-typedef-bindings.md) for generic aliases, and
[ADR 0026](0026-top-level-readonly-bindings.md) for readonly declarations, and
[ADR 0027](0027-public-library-module-delivery.md) for public-library routing and module
delivery, and [ADR 0028](0028-record-bindings.md) for structural Record TypeRefs. This
record presents the resulting current version contract; legacy schemas keep their
original restrictions.

## Context

Binding configuration, package metadata, dependency manifests, runtime protocol and the
native calling convention evolve independently. One global version or an ambient Core
fallback would silently change the meaning of already-generated packages. The manifest
must preserve dependency semantics without reading another package's selection YAML or
private sources. Stable identities are defined in
[ADR 0022](0022-stable-binding-identity.md), and package trust in
[ADR 0023](0023-external-binding-package-trust.md).

## Decision

External bindings freeze these independent domains:

- binding YAML configuration format **1**
- `flax_package.yaml` metadata format **1**
- binding Manifest writer **11**, with strict readers **2/3/4/5/6/7/8/9/10/11**
- UI protocol **20**, exactly the [ADR 0020](0020-ui-protocol-20.md) baseline
- native ABI **2**
- Codegen SemVer
- each capability package SemVer

A change in one domain does not imply a change in another.

### Binding YAML configuration format 1

Owner selection files explicitly carry `format: 1`. A newer Codegen preserves the
meaning of every previously valid format-1 document. Optional fields may remain in
format 1 only when omitting them preserves the old behavior. Removing, renaming, or
changing a field's type, meaning, or default bumps the configuration format.

Invalid, duplicate, unknown, missing, mistyped, or incompatible input fails closed.

Configuration format 1 is not `flax_package.yaml` format 1. The two files have distinct
schemas and bump independently.

### Package metadata format 1

`flax_package.yaml` remains tool metadata as in
[packaging](../architecture/packaging.md): it never imports code, instantiates plugins,
or participates in session startup.

Format 1 includes the top-level `bindingNamespace` field. Schema ownership, the Codegen
projection and the `bindings` ↔ `bindingNamespace` rule are defined in
[ADR 0023](0023-external-binding-package-trust.md). Its schema is independent of binding
selection YAML; future incompatible changes require their own format bump.

### Binding manifests

The manifest is the lossless Codegen cross-package semantic model. A dependent generator
reconstructs required semantics from it and public APIs. Bump the manifest format when
an older reader cannot safely reconstruct those semantics, independently of UI protocol
and native ABI.

The current writer emits format 10 and reads strict formats 2 through 10. Validate
before normalization: format 2 rejects aliases, format 3 supports basic aliases but
rejects alias-owned parameters and generic alias targets. Format 4 requires
`typeParameters` on each alias even when empty. Formats 2/3/4 reject readonly top-level
declarations and read identities; format 5 adds the historical readonly namespace
semantics. Format 6 adds public-library routing and current named/literal top-level
exports. Format 7 adds structural Record fields to TypeRefs. Formats 2 through 6 reject
Record-only fields before normalization. Format 1 and unknown versions fail closed. The
exact codec and migration regressions are maintained in
[manifest tests](../../packages/flax_codegen/test/manifest_v5_test.dart).

#### Exact top-level fields

Current Manifest JSON has exactly these top-level fields:

| Field              | Meaning                                                                         |
| ------------------ | ------------------------------------------------------------------------------- |
| `formatVersion`    | integer `7`                                                                     |
| `package`          | owning Dart package identity: the pubspec package name used by `package_config` |
| `bindingNamespace` | the package `bindingNamespace` from [ADR 0022](0022-stable-binding-identity.md) |
| `imports`          | dependency metadata: unique imported Dart package names, sorted                 |
| `modules`          | array of registration units                                                     |

`uiProtocol` is not a package-level field. Each `modules[]` entry carries its own tuple.

Each `modules[]` entry is one registration unit and has exactly these fields:

| Field                  | Meaning                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| `name`                 | `config.name`; identity-bearing cross-package metadata                     |
| `moduleId`             | `bindingNamespace + "/" + name`                                            |
| `uiProtocol`           | integer `20` for v1                                                        |
| `requiredCapabilities` | sorted unique derived capability identifiers; never omitted (`[]` if none) |
| `model`                | the downstream projection defined below                                    |

No other module-level fields exist in the current format. All nested downstream fields
live under `model`.

`config.name` remains identity-bearing even though `moduleId` includes it.

Exclude only:

- selection provenance (YAML search paths, `additionalLibraries`, explicit member name
  lists, raw `Function` override tables, and other owner-local selection input);
- owner-local output paths (`dartOutput`, `tsOutput`, and any other write destinations).

`library`, `jsPackage`, and `typeLibraries` live under `model` when Dart or TypeScript
emission consumes them. They are not output paths.

#### Downstream semantic projection

The downstream semantic projection is every field under `model` consumed by dependency
parsing, Dart/TypeScript emission, identity resolution, or required-capability
derivation. That projection, not owner-local output paths or selection provenance, is
the compatibility obligation.

The manifest must losslessly carry every such semantic, recursively, including:

- resolved types;
- concrete, Dart, and TypeScript arguments and declarations;
- conversions;
- callback signatures, including resolved raw `Function` overrides;
- parameter required/optional positional/named mode, names, defaults/omission,
  `encodeKind`, scoped, and independent-result semantics;
- generic bounds, defaults, and arguments;
- constructors, methods, getters, setters, and static members;
- ownership, dispose, listener, proxy, widget, context, state, route, page, and snapshot
  semantics;
- `Future`, `FutureOr`, and `Stream`;
- `asyncIterableFactory`;
- supertypes and inheritance;
- public JS aliases (`jsName`);
- functions and type-only aliases, including alias-owned and function-local generic
  scopes;
- optional top-level declarations, declaration kinds, result signatures, public export
  names/literal values and provider references;
- public library routing and reexport metadata;
- dependency identities.

Every owned declaration, including nominal leaves discovered through signatures, carries
Codegen-only `sourceIdentity` and stable `wireId`, forming an explicit
`sourceIdentity -> owner wireId` map. Codegen-only means `sourceIdentity` never appears
in runtime calls, not that it is absent from the manifest.

Downstream readers decode `model` directly. They never reconstruct YAML and never
re-infer analyzer or raw `Function` overrides.

A host-only module with zero binding entries still appears in `modules[]` and still
carries its literal `name`, `moduleId`, `uiProtocol`, `requiredCapabilities`, and
`model`. `model` is present and may contain no owned declarations. Generation and
registration still emit and register that zero-entry descriptor.

Object maps in the manifest that represent unordered relations use sorted keys. Codec
output does not depend on YAML insertion order or process map order.

#### Projection acceptance

Acceptance includes:

- an independently constructed maximal-model parsed-model → manifest → loaded-projection
  deep equality test;
- byte-identical Dart and TypeScript output for a direct dependency model versus the
  same model imported through the manifest, including A → B → C transitivity.

Independent construction means the expected projection is built from the required
semantics, not from a single serializer that could drop the same field on both sides.

### UI protocol 20

Protocol 20 is exactly the [ADR 0020](0020-ui-protocol-20.md) baseline. This record does
not expand or contract it.

Bump the protocol only when an older Runtime cannot safely interpret new or changed
wire, conversion, ownership, disposal, listener, callback, proxy, route/page, or async
lifecycle semantics.

### Required capabilities

`requiredCapabilities` is derived by Codegen per module from that module's `model`. The
list is sorted and unique. Authors never write it. It is never a package union of
sibling modules.

Existing protocol-20 abilities are the baseline, so initial lists are empty. Future
entries gate only additive protocol-20 abilities that an older Core can safely reject at
registration. Identifiers are monotonic. During protocol 20 they never change meaning or
disappear.

This domain has no versions, ranges, optional or provided sets, solving, negotiation, or
security permissions. Package authors and manifests do not declare provided, optional,
versioned, or ranged capability sets.

Core owns an internal `supportedCapabilities` set. Registration succeeds only when
`uiProtocol` matches Core's active protocol exactly and every required identifier is a
subset of that internal set.

### Generated Dart and TypeScript/JavaScript tuple pinning

Every manifest `modules[]` entry and every generated Dart and TypeScript/JavaScript
module carries its own literal `moduleId`, `uiProtocol`, and sorted unique
`requiredCapabilities`. Capabilities stay per module.

Even a host-only module with zero binding entries emits and registers a zero-entry
descriptor with that literal tuple.

Generated JavaScript validates the literal tuple before any `defineObject`,
`defineStream`, `defineContext`, `defineState`, realm mutation, definition-map mutation,
or host call. Successful validation returns or selects a module-scoped facade/token
bound to that literal tuple. Every generated host call uses that facade/token.

No ambient Core `bindingVersion` or capability default may silently upgrade old output.
Core may keep a current protocol constant for Core-owned code. Generated modules pass
their own literals into validation; they do not read Core's current constant as a
fallback.

Dart registration follows the same literal tuple. Generated Dart does not default
`uiProtocol` from the installed Core.

### Atomic registration

Dart registry construction and JavaScript module installation validate the complete
candidate graph and each module tuple, capabilities, module IDs, wire IDs, duplicates,
and dependencies before publishing any registry or realm definitions. Any failure leaves
the previous Dart registry and JavaScript definition maps unchanged.

Rejected JavaScript registration is side-effect-free: a failing module import or install
must not leave new object, stream, context, state, or other definition-map entries, and
must not perform host calls.

Runtime enforces only duplicate `moduleId` / `wireId` and tuple/capability/protocol
conflicts. It does not infer owner Dart packages, group namespaces, or consult a runtime
owner registry.

Codegen resolved-graph validation and Tooling/archive validation reject different Dart
packages that share one `bindingNamespace`. That check is not a Runtime package-owner
rule. See [ADR 0023](0023-external-binding-package-trust.md).

### Native ABI 2

Native ABI 2 is a separate domain. The current exact version and table size identify the
`FlaxApi` layout. A change to that layout, size, signature, ownership, or call semantics
bumps the ABI.

Normal binding packages declare no native ABI.

### Codegen and capability package SemVer

Codegen SemVer and each capability package SemVer are independent of the format,
protocol, and ABI integers.

The Dart and npm halves of one capability remain an exact version pair when metadata
declares `javascript.version: same`, as in [ADR 0017](0017-package-boundaries.md).
Separate capability packages are not lockstep.

In-envelope additions affect only the owning package. An incompatible generated public
API or a stable identity change is a package major version. Internal Codegen changes
that keep generated behavior and bytes identical do not require regeneration.

Names, license, signing, publication and support lifetime remain open product decisions.

### Strict input and migration

There is no silent fallback to format-1 manifests, unpinned Core defaults or loose YAML
readers. Migration regenerates both language outputs and their manifest from the owning
package's valid selections. Supported legacy dependency reading does not weaken strict
validation or imply support for an older UI protocol.

## Alternatives

**One global Flax version.** Rejected. Binding YAML, package metadata, manifests,
protocol, ABI, Codegen, and capability packages change for different reasons and on
different schedules.

**Bump the UI protocol for every Codegen change.** Rejected. Protocol 20 is a Runtime
wire and lifecycle contract. In-envelope selection, diagnostics, and byte-identical
refactors must not force every consumer to regenerate or reject modules.

**Capability negotiation or package-union capability lists.** Rejected. Registration is
a fail-closed exact-protocol and required-subset check. Versions, ranges, optional or
provided sets, solving, security permissions, and unioning sibling modules are out of
scope.

**Ambient Core `bindingVersion` / capability defaults.** Rejected. Old generated output
must not silently adopt a newer Core protocol or capability set.

**Publish definitions, then validate.** Rejected. Failed Dart or JavaScript installation
must not mutate the previous registry or definition maps.

**Couple native ABI to the UI protocol or manifests.** Rejected. ABI 2 is the C
`FlaxApi` table. Binding packages normally do not declare it. Manifest schema is a
Codegen semantic model, not a native calling convention.

**Public long-term Manifest format 1 compatibility.** Rejected. Format 1 is unsupported
legacy input. Regenerate from owner selections; do not introduce a hidden migration
fallback.

**A shared metadata package or runtime owner registry.** Rejected. See
[ADR 0023](0023-external-binding-package-trust.md) and
[ADR 0022](0022-stable-binding-identity.md).

## Consequences

These independent domains allow generator and package evolution without unnecessary
protocol or ABI changes. Strict rejection prevents an old module from silently adopting
new runtime semantics. Implementation and acceptance scope are recorded in
[External Binding Compatibility](../architecture/external-binding-compatibility.md).

Sibling decisions still own stable identities
([ADR 0022](0022-stable-binding-identity.md)) and trusted package boundaries
([ADR 0023](0023-external-binding-package-trust.md)).

Publication, registry names, license, signing, and support lifetime remain blocked as in
[ADR 0017](0017-package-boundaries.md).
