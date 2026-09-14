# ADR 0023: External Binding Package and Trust Boundary

Status: accepted

Date: 2026-09-12

## Context

External Binding Kit v1 needs a frozen package and trust contract before Codegen,
manifests, or registration change. [ADR 0017](0017-package-boundaries.md) already makes
`packages/*` the capability boundary. [ADR 0018](0018-binding-coverage-strategy.md)
keeps explicit selection fail-closed. [ADR 0020](0020-ui-protocol-20.md) freezes UI
protocol 20 with native ABI 2 unchanged.
[ADR 0021](0021-external-binding-version-domains.md) separates version domains.
[ADR 0022](0022-stable-binding-identity.md) settles namespace, source identity, and wire
identity.

[Package boundaries](../architecture/packaging.md) already describe owner manifests,
package-config resolution, and explicit registration. They do not freeze the trusted
third-party compile-time model, Codegen visibility, package-atomic config discovery, or
who owns metadata schema versus generation.

This record settles package ownership, Codegen visibility, metadata schema ownership,
package-atomic discovery, namespace enforcement, registration, and the trusted-code
boundary.

## Decision

v1 is an explicit-selection, fail-closed kit for trusted compile-time Dart or Flutter
dependencies usable outside Flax. Applications depend on packages they chose to install.
It is not a plugin marketplace, remote loader, or untrusted mini-app host.

### Binding package ownership

A binding package owns its `flax_package.yaml` identity, binding YAML, generated Dart
and TypeScript, Manifest 2, package tests, public registration symbol, and package-local
adapters under [ADR 0017](0017-package-boundaries.md).

A package whose `capabilities` includes `bindings` requires `bindingNamespace` even if a
host plugin installs the module rather than `registration.bindings`. `flax_canvas`
therefore requires `flax.canvas` now. A package without actual generated bindings
reserves no namespace yet: if `bindings` is absent, `bindingNamespace` is rejected.

### Official namespaces

Keep exactly:

- `flax` → `flax.core`
- `flax_material_ui` → `flax.material`
- `flax_canvas` → `flax.canvas`

Assign these namespaces only once those packages include `bindings`:

- `flax_cupertino_ui` → `flax.cupertino`
- `flax_fetch` → `flax.fetch`
- `flax_websocket` → `flax.websocket`
- `flax_local_storage` → `flax.localstorage`

`flax.*` is reserved by documentation policy only. There is no hardcoded allowlist,
network, registry, or signing lookup. `io.github` is not an official namespace.
Third-party examples may use `com.acme.flax.widgets` or `io.github.alice.flax.widgets`.
Grammar and comparison are [ADR 0022](0022-stable-binding-identity.md).

### Package-atomic config discovery

Owner configs are the direct files at `<package-root>/bindings/*.{yaml,yml}`. Nested
paths, parent directories, and any other location are rejected.

`validate`, `generate`, and `check` always act on the whole owning package atomically.
`--config` only locates an owner. All direct sibling configs in that directory are
loaded. This guarantees complete duplicate, ownership, and orphan checks without a
second config list.

Input order of CLI arguments or directory listing does not change ownership or identity.
Re-export routes do not create owners. See [ADR 0022](0022-stable-binding-identity.md).

### Namespace enforcement

Codegen resolved-graph validation and Tooling/archive validation reject different Dart
packages that share one `bindingNamespace`. Sibling modules in the same Dart package may
share it.

Runtime does not enforce package-to-namespace ownership. It only sees `moduleId`,
`wireId`, and tuple/capability/protocol conflicts, as in
[ADR 0021](0021-external-binding-version-domains.md). It does not infer owner Dart
packages or group namespaces.

### Metadata schema ownership

Workspace / Tooling is the sole owner and parser of the complete `flax_package.yaml`
schema, including `dart`, `javascript`, and `registration`.

Codegen reads only a narrow validated projection supplied by that owner: `format`,
`capabilities`, and `bindingNamespace`. It does not interpret `dart`, `javascript`, or
`registration`.

If `capabilities` contains `bindings`, `bindingNamespace` is required. If `bindings` is
absent, `bindingNamespace` is rejected.

Both components consume a neutral fixture corpus under `tests/compatibility`. There is
no new shared metadata package.

### Codegen visibility

Codegen resolves package roots through Dart `package_config`, reads the current
package's selection and the metadata projection, and imports dependencies only through
public package APIs plus Manifest 2. It never reads dependency selection YAML, tests, or
private source.

Generated code never imports another package `lib/src`. Package-local private adapters
remain internal to their owner.

### Manifest 2

Manifest 2 copies `bindingNamespace` and contains the downstream projection defined in
[ADR 0021](0021-external-binding-version-domains.md). It does not copy selection YAML.
Owner-local output paths are not cross-package contracts.

### Registration and capabilities

Registration is explicit. Importing npm declarations or runtime modules does not install
Dart host plugins or grant capabilities. `requiredCapabilities` is compatibility gating
at registration, not a permission system, as in
[ADR 0021](0021-external-binding-version-domains.md).

A host-only module with zero binding entries still registers a zero-entry descriptor
with its literal tuple. Failed installation is atomic and side-effect-free, as in that
record.

### Trust boundary

v1 does not add dynamic discovery, remote code loading, registry lookup, signing, a
sandbox, a permission system, resource limits, or untrusted mini-app isolation. A
product that needs those needs a separate security architecture.

### Dependency direction

Core and extension direction stays [ADR 0017](0017-package-boundaries.md). Third-party
extensions depend on public `flax` and `@flax/core` and on explicit public binding
dependencies. They do not depend on unrelated extensions.

### Protocol 20 envelope

[ADR 0020](0020-ui-protocol-20.md) remains the full protocol-20 envelope. This record
does not expand or contract it. Later external pure-Dart and Flutter canaries cover that
envelope. Flutter canaries must produce equivalent normalized Hermes and V8 behavior. M1
claims no canary pass.

### Contract ownership

Workspace / Tooling owns the complete `flax_package.yaml` schema. Codegen consumes only
the identity and generation projection. M2 uses shared contract fixtures under
`tests/compatibility` rather than a new metadata package. Core owns registration checks.
Integration and Quality owns external canaries.

Names, license, signing, registry ownership, publication, and support duration remain M5
product decisions.

## Alternatives

**Dynamic plugins.** Rejected. v1 resolves trusted compile-time dependencies through
Dart package config. Runtime discovery would invent a new loading and identity domain.

**Automatic registration.** Rejected. Importing a Dart or npm module must not install
host plugins or grant capabilities. Session startup stays explicit, as in
[packaging](../architecture/packaging.md).

**Treat `requiredCapabilities` as permissions.** Rejected. The list gates additive
protocol-20 abilities an older Core can reject. It is not authorization.

**Read dependency internals.** Rejected. Selection YAML, tests, and `lib/src` stay with
the owner. Dependents reconstruct semantics from Manifest 2 and public APIs.

**A shared metadata package now.** Rejected. The complete `flax_package.yaml` schema
belongs to Workspace / Tooling. M2 shares a fixture corpus under `tests/compatibility`
without a new published package.

**Generate or check a subset of sibling configs.** Rejected. Partial loading cannot
prove duplicates, ownership, or orphans.

**Runtime package-to-namespace owner registry.** Rejected. Runtime enforces only
`moduleId` / `wireId` / tuple conflicts. Package-namespace uniqueness is a Codegen and
Tooling/archive check.

**Hardcoded official namespace allowlist.** Rejected. `flax.*` is documentation policy.
Tools do not consult a network, registry, or signing lookup to decide legality.

## Consequences

This record is the M1 package and trust contract. It is documentation only. It does not
implement `bindingNamespace` enforcement, Manifest 2, Codegen visibility, registration
checks, external canaries, or the repository migration. Those remain later milestone
work.

[ADR 0021](0021-external-binding-version-domains.md) still owns version domains,
Manifest 2 projection, tuple pinning, atomic registration, and compatibility bump rules.
[ADR 0022](0022-stable-binding-identity.md) still owns namespace grammar, source
identity, and wire identity. [ADR 0018](0018-binding-coverage-strategy.md) still owns
coverage strategy. This record does not change UI protocol 20 or native ABI 2.

Publication, registry names, license, signing, and support lifetime remain blocked as in
[ADR 0017](0017-package-boundaries.md).
