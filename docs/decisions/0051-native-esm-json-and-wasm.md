# ADR 0051: Native ESM, JSON and Wasm

Status: experimental integration; platform acceptance is recorded in the linked task

Date: 2026-10-26

## Context

Bundling and factory hot reload cannot provide runtime URL-based module identity, native
ESM linking or remote imports. Flax now maintains V8 on every supported target; iOS
jitless requires a Wasm interpreter rather than generated executable code.

## Decision

Use V8's native JavaScript module API and one host-owned asynchronous source loader.
Keep script mode as the default. Add descriptor version 2 and asynchronous Session
readiness, with an optional native extension that preserves ABI 2 and UI protocol 24.
Support standard JSON import attributes and the pinned Wasm source/evaluation proposal.
Reuse installed SDK exports and the existing authenticated artifact transport/cache.

Enable DrumBrake with upstream explicit bounds checks on iOS. Enable V8 pointer
compression as required by DrumBrake, while retaining the uncaged CppGC configuration.
Physical iOS hosts must enable Extended Virtual Addressing and provision that
entitlement for V8's 4 GiB address reservation. This is a new host requirement compared
with the previous iOS SDK without Wasm, including for script-mode applications. Reserve
a disabled host sandbox option that rejects enablement before side effects.

## Alternatives

CommonJS conversion and single-file bundling keep the current toolchain but cannot
substitute for native module semantics. Extending Hermes with full ESM would add an
engine fork and its maintenance; that direction was superseded by the V8 migration.
DrumBrake's trap-handler mode worked in an isolated simulator proof, but explicit bounds
checks avoid coupling to signal handling and large memory guard reservations.

## Consequences

Hosts choose script or module explicitly. Old hosts reject module descriptors; ordinary
scripts and installed SDK identities remain compatible. A new Session applies module
updates. Remote code retains the host's authority: sandbox isolation is not implemented.
JSON/Wasm state is never shared between Sessions. SDK changes require separate target
and joint-GC validation, including the absence of executable code on iOS.

The [module contract](../architecture/modules.md) describes the implemented surface; the
[task](../tasks/native-esm-and-wasm.md) records platform evidence and remaining gates.
