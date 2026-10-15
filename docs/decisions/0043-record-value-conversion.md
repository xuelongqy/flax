# ADR 0043: Record value conversion

Status: Accepted.

Date: 2026-10-15

## Context

A Record has value semantics, but broad Record results previously used a native object
facade while concrete signatures generated field readers, checks and constructors. That
split made unknown layouts opaque and introduced an unnecessary business-value holder.
The maintained VM already supplies authenticated Type components.

## Decision

1. Represent all Records as plain JS field objects. Preserve only weak shared
   Type/conversion metadata; never peer or retain the original Record. Reference-bearing
   fields keep their existing conversion, leases and joint tracing.
2. Read fields and reconstruct converted inputs through shared checked VM operations.
   Generated metadata contains field converters and a Type provider, with no executable
   adapter or registration catalog for each layout. Broad inputs infer contiguous
   positional keys and sorted public named keys; concrete inputs use their actual Type.
3. Retain referenced Record shapes and conservative synthetic field values in the
   maintained AOT frontend. Otherwise the native constructor can produce values whose
   Dart getter code was removed. Do not weaken type-flow rules for other classes.
4. Require internal engine binding extension 8. Keep native ABI 2, UI protocol 24 and
   Manifest 20. No YAML/CLI option, public shape builder or new GC backend is
   introduced.

## Consequences

Record copies have ordinary JS object methods and no canonical identity. Spreading or
cloning drops the weak Type association. Bare Record input has no declared nested field
Types: plain nested objects remain Maps, and safe integral Numbers infer int. Concrete
signatures specify nested Records and exact numeric/collection/callback Types.

Native construction adds a VM boundary compared with an inline Dart literal. It removes
layout-specific executable code and enables runtime layouts in both JIT and AOT. Measure
this cost separately from the surrounding JS field conversion. VM layout names are
interned as type metadata; generating unbounded distinct field names is not an object-GC
workload and is not recommended.

See the
[binding contract](../architecture/bindings.md#bottom-types-and-opaque-core-values) and
[validation](../tasks/record-value-conversion.md).
