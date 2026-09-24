# ADR 0021: External Binding Version Domains

Status: accepted; current values are amended by
[ADR 0035](0035-generic-state-variants-and-protocol-21.md).

Date: 2026-09-12

## Context

Binding selection, package metadata, dependency manifests, runtime protocol, module
delivery and the native calling convention evolve for different reasons. A single global
version or ambient runtime fallback would let generated packages silently change
meaning.

## Decision

Flax keeps these domains independent:

- explicit binding selection format **2**
- automatic override format **2**
- `flax_package.yaml` metadata format **1**
- binding Manifest format **12**
- UI protocol **21**
- native ABI **2**
- `flax_modules.json` inventory format **1**
- Codegen and capability-package semantic versions

The generator reads and writes only the current binding selection and Manifest formats.
Unknown fields, versions, declaration identities, ownership conflicts and protocol
mismatches fail before output installation. There are no compatibility readers,
normalizers or ambient Core version defaults.

Package metadata and module inventory both currently use format 1, but they are separate
schemas with separate owners. A change in one domain does not imply a change in another.
Dart and npm halves of one capability remain an exact version pair when package metadata
declares `javascript.version: same`; different capability packages are not lockstep.

Stable source and wire identity are defined by
[ADR 0022](0022-stable-binding-identity.md). Package trust and dependency visibility are
defined by [ADR 0023](0023-external-binding-package-trust.md).

## Consequences

Strict current-only schemas keep code generation deterministic and prevent a module from
adopting a different runtime contract accidentally. Owners regenerate all derived Dart,
TypeScript, Manifest and module inventory output together after a contract change.
Current verification requirements are in
[External Binding Verification](../architecture/external-binding-verification.md).
