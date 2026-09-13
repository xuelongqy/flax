# 0007: Explicitly Owned Dart Objects

Superseded in the areas described by [0009: Dart interop](0009-dart-interop.md). This
record documents the earlier decision, not the current contract.

Status: partly superseded by [0009: Dart interop](0009-dart-interop.md)

## Decision

UI protocol 5 adds immediately constructed, session-owned Dart objects. Generated
metadata explicitly selects the disposal method, paired listeners, getters, setters, and
instance methods. Adapters declare exceptional Dart preconditions and must match the
actual selected signature. No method name implies ownership.

Widgets borrow objects. The creator releases them, with final session cleanup as a
fallback. Object results reuse registered session identity and never silently transfer
ownership of unrelated Dart instances. Borrowed Flutter Context and State references
retain their existing lifetime rules.

Named page factories receive an explicit lifecycle argument. Cleanup is registered
synchronously, runs in reverse order after content descendants unmount, and also runs on
failed initialization. It is independent of Route result completion.

## Rationale and consequences

This follows Flutter's creator-owned Controller convention while supporting shared
objects and `maintainState: false`. Explicit ownership avoids depending on JS GC and
keeps cleanup valid during exit animations. The host coordinates references and callback
lifetimes; generated code calls real Dart APIs without reflection or name-based
branches.

Duplicate listener registrations preserve upstream semantics. Disposing during a
listener notification is rejected, while actual disposal revokes references even if Dart
reports an error. Remaining objects are cleaned before engine shutdown.

Protocol 4 is rejected instead of maintained through a compatibility layer. Native ABI,
package layout, engine, and platform scope remain unchanged. See the
[object contract](../architecture/objects.md) for implemented behavior and limits.
