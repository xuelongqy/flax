# 0009: Real Dart References and Application Ownership

Status: accepted. Replaces the snapshot decision in 0008 and the session-disposal and
registered-origin restrictions in 0007. Other UI, navigation and runtime decisions
stand.

## Decision

Generate direct calls to real Dart objects and typed collections. Ordinary values use
readonly references instead of reconstructed snapshots. Applications own disposal;
session shutdown clears bridge resources only. Flutter owns its Elements, navigation,
focus, input behavior and listener notification rules.

A shared callback wrapper retains each JS function, with explicit release and a Dart
Finalizer fallback. Weak JS identity caches are swept in bounded batches at existing UI
checkpoints. No cross-language cycle collector or additional observer system is added.

TS generics preserve development-time type relationships. Configured valid Dart concrete
types remain fixed and are checked by analyzer. Explicit generated proxies cover a
restricted abstract/interface subset without creating parallel Flax base classes.

Collection identity is refined to typed views: the same Dart instance and conversion
type share a JS wrapper, while distinct type views may differ under `===`. They still
mutate the same original collection. This prevents a broad Object return from fixing the
conversion rules of a later typed List/Map return. Ordinary object identity and
application disposal remain unchanged.

## Rationale and consequences

Direct references preserve original identity, mutations and API behavior without keeping
a second state model. Unified code generation removes class-specific Controller guards
and snapshot reconstruction. Real getters cost bridge calls, including nested value
reads; applications can read once per listener and bind only the display fields needed.
Typed collection copies batch transport while still allocating proportional to the data.

The bridge cannot determine correct application disposal or eliminate arbitrary retained
callback cycles. Users must follow Flutter lifecycle rules and unregister long-lived
callbacks. Close remains deterministic for bridge holdings and does not depend on GC. A
Dart disposal error may follow partial side effects; no rollback guarantee is added.

Protocol 7 replaces earlier UI protocols without compatibility paths. The native ABI,
engine implementation, package layout and Material Page/Route adapter remain unchanged.
See [objects](../architecture/objects.md), [interop](../architecture/interop.md) and
[input](../architecture/text-input.md) for implemented limits and validation.
