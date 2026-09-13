# 0008: Dart-Constructed Value Snapshots

Superseded in the areas described by [0009: Dart interop](0009-dart-interop.md). This
record documents the earlier decision, not the current contract.

Status: superseded by [0009: Dart interop](0009-dart-interop.md)

## Decision

Explicitly selected immutable value types use real Dart constructors and members,
returning recursively frozen JS snapshots. `snapshotConstructor` names the constructor
used to restore temporary Dart values; only its corresponding fields are restored.
Derived fields are read from Dart getters. Selected static readonly fields and instance
methods use generated direct calls. Protocol 6 rejects older UI modules; the native ABI
is unchanged.

## Reason

TextEditingValue, TextSelection and TextRange contain defaults, inheritance and derived
semantics that belong to Flutter. Copying those rules into JS would create a second
implementation to maintain. Owned Dart handles would add unnecessary lifetime and bridge
cost to frequent nested field reads. Explicit opt-in preserves existing snapshot and
value construction behavior.

## Consequences

Each constructor, static read and method call crosses the host boundary. Returned fields
are readable without further host calls and carry no Dart object lifetime or identity.
Nested snapshots and enums use generated type information. Subtype inputs are accepted;
output follows its declared type. Ordinary objects still use explicit owned references.

Additional public libraries resolve declarations without private SDK imports. Non-null
snapshot defaults retain omission and are supplied by real Dart calls. Constructor and
setter adapters have checked signatures; the editing controller adapters enforce the
upstream composing invariant in release builds without adding normalization.

Controllers remain the source of editing state. Applications listen once and update
presentation signals, then write programmatic changes explicitly. Page cleanup and
controller disposal reuse existing ownership. See
[text input](../architecture/text-input.md) for the supported APIs, costs and validation
limits.
