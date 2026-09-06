# Binding Generation

Status: generation boundaries are documented; the generator is an empty package.

## Inputs and ownership

The intended generator analyzes public Dart APIs and their actual declaration origins,
using Dart analyzer APIs. Package-specific configuration and exceptional adaptation
rules belong in the root binding-rule directories.

Preserve Flutter names and semantics where practical. Resolve exports and dependencies
before assigning type identities. A type re-exported from several libraries should map
to the same binding. Distinct declarations with the same class name must remain
distinct.

## Outputs

Generated JS/TS belongs to its JS package, and generated Dart factories belong to their
Dart package. Future generated files must have a clear ownership header and regeneration
command.

The initial release approach will commit generated source required by consumers, with CI
regeneration checks once the generator exists. Intermediate analysis data and build
outputs remain ignored. No generated-output directories or regeneration commands claim
to work in the current scaffold.

## Separate FFI generation

C ABI headers owned by the native runtime will be the input to ffigen for Dart FFI
declarations. This differs from analyzing Dart APIs to generate JS bindings. Do not
conflate the two tools or maintain duplicate handwritten ABI declarations.

## Adaptation requirements

Constructors, named arguments, inheritance, nullable types, enums, values, callbacks,
Futures, and lifecycle-sensitive classes require explicit mapping. An extension
mechanism is planned for cases the generator cannot express.

This document does not define a binding protocol, wire schema, handle layout, or stable
ID assignment. Those require a real runtime prototype.

## Design-system packages

New bindings target the standalone Material and Cupertino packages. Dependencies follow
the actual upstream graph, including Material's Cupertino dependency.

The old SDK design-system types and the standalone package types are not interchangeable
merely because their class names match. Existing Flutter hosts may require migration or
explicit compatibility handling.

## Loading and size

Generated exports and registration should allow selective loading. JS trimming does not
automatically trim Dart AOT code if a Dart registry still references all component
factories. Icons, native binaries, fonts, and application assets must be measured
separately.

Engine-specific bytecode or snapshots need engine/version compatibility checks. Do not
infer startup, bridge, or rendering performance from empty-package builds.
