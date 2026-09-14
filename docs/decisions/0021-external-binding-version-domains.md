# ADR 0021: External Binding Version Domains and Compatibility

Status: accepted

Date: 2026-09-12

## Context

External Binding Kit v1 needs a frozen compatibility contract before Codegen, manifests,
or registration change. [ADR 0017](0017-package-boundaries.md) already separates
capability packages, declaration manifests, UI protocol, and native ABI.
[ADR 0018](0018-binding-coverage-strategy.md) keeps in-envelope selection inside the
current protocol. [ADR 0020](0020-ui-protocol-20.md) freezes the active UI protocol at
20 with native ABI 2 unchanged.

[Package boundaries](../architecture/packaging.md) describe `flax_package.yaml` format 1
and binding manifest format 1. Those integers are easy to collapse into one Flax
version, and they do not yet pin generated modules to the protocol and capabilities they
were generated for.

Stable source and wire identities are [ADR 0022](0022-stable-binding-identity.md).
Trusted third-party package boundaries are
[ADR 0023](0023-external-binding-package-trust.md). This record separates version
domains, Manifest 2 as the lossless downstream projection, generated tuple pinning,
atomic registration, and the strict M2/M3 switch.

## Decision

External bindings freeze these independent domains:

- binding YAML configuration format **1**
- `flax_package.yaml` metadata format **1**
- binding manifest format **2**
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

Before the first external release only, format 1 may add a final top-level
`bindingNamespace` field and then freeze. That addition does not bump the metadata
format. After freeze, the same bump rules as binding YAML apply. Schema ownership, the
Codegen projection, and the `bindings` ↔ `bindingNamespace` rule are
[ADR 0023](0023-external-binding-package-trust.md).

### Binding manifest format 2

Manifest format 2 is the lossless Codegen cross-package semantic model. A dependent
generator reconstructs required semantics from the imported manifest without reading
another package's YAML or private source.

Bump the manifest format when an older reader cannot reconstruct or safely interpret
required semantics. That bump is independent of UI protocol and native ABI.

There is no public long-term Manifest format 1 compatibility. Manifest format 1 was
removed in the M3 direct cutover; M2.6 (private migration adapter) was cancelled. Strict
Manifest 2 readers are the only supported path.

#### Exact top-level fields

Manifest 2 JSON has exactly these top-level fields:

| Field              | Meaning                                                                         |
| ------------------ | ------------------------------------------------------------------------------- |
| `formatVersion`    | integer `2`                                                                     |
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

No other module-level fields exist in Manifest 2. All nested downstream fields live
under `model`.

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

Manifest 2 must losslessly carry every such semantic, recursively, including:

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
- functions;
- dependency identities.

Every owned declaration, including nominal leaves discovered through signatures, carries
Codegen-only `sourceIdentity` and stable `wireId`, forming an explicit
`sourceIdentity -> owner wireId` map. Codegen-only means `sourceIdentity` never appears
in runtime calls, not that it is absent from Manifest 2.

Downstream readers decode `model` directly. They never reconstruct YAML and never
re-infer analyzer or raw `Function` overrides.

A host-only module with zero binding entries still appears in `modules[]` and still
carries its literal `name`, `moduleId`, `uiProtocol`, `requiredCapabilities`, and
`model`. `model` is present and may contain no owned declarations. Generation and
registration still emit and register that zero-entry descriptor.

Object maps in Manifest 2 that represent unordered relations use sorted keys. Codec
output does not depend on YAML insertion order or process map order.

#### Projection acceptance

Acceptance includes:

- an independently constructed maximal-model parsed-model → Manifest 2 →
  loaded-projection deep equality test;
- byte-identical Dart and TypeScript output for a direct dependency model versus the
  same model imported through Manifest 2, including A → B → C transitivity.

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

Every Manifest 2 `modules[]` entry and every generated Dart and TypeScript/JavaScript
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

Names, license, signing, publication, and support lifetime remain deferred to M5.

### Strict M2/M3 activation

The repository switch is explicit. There is no silent fallback to format-1 manifests,
unpinned Core defaults, or legacy YAML readers.

- **M2** builds and tests strict v1 YAML readers, the package-metadata projection
  reader, and the Manifest 2 codec behind an explicit private repository migration
  path/flag. That path exists only to feed current legacy inputs into the new readers.
  It is not a public API and not a long-term compatibility mode.
- **M3** atomically adds YAML `format: 1`, package `bindingNamespace`, explicit nominal
  owners, Manifest 2, generated literal tuples/facades, and strict registration, then
  deletes the migration path and makes the strict readers the only default.

After M3, Manifest format 1 is rejected. Strict readers are the only default.

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

**Public long-term Manifest format 1 compatibility.** Rejected. Format 1 is repository
legacy input only. M3 deletes the migration path.

**A shared metadata package or runtime owner registry.** Rejected. See
[ADR 0023](0023-external-binding-package-trust.md) and
[ADR 0022](0022-stable-binding-identity.md).

## Consequences

This record is the M1 compatibility contract. It does not implement YAML validation,
manifest format 2, generated pinning, registration checks, or the repository migration.
Those remain later milestone work.

Sibling decisions still own stable identities
([ADR 0022](0022-stable-binding-identity.md)) and trusted package boundaries
([ADR 0023](0023-external-binding-package-trust.md)).

Publication, registry names, license, signing, and support lifetime remain blocked as in
[ADR 0017](0017-package-boundaries.md).
