# 0007: Explicitly Owned Dart Objects

Status: partly superseded by [0009: Dart Interop](0009-dart-interop.md).

## Retained decision and rationale

Applications explicitly select disposal methods, paired listeners and exceptional Dart
preconditions. No method name implies ownership. Widgets borrow Controllers; the
application that creates an owned resource arranges its disposal. Duplicate listeners
preserve upstream semantics, and cleanup must remain valid during exit transitions.

Page cleanup is registered synchronously, runs in reverse order after descendants
unmount, and also runs on failed initialization. It is independent of a Route's result
completion. Explicit lifecycle ownership avoids depending on JavaScript garbage
collection and keeps shared objects usable across mounted content.

## Replaced ownership rule

The earlier session-owned-object model and automatic application disposal at session
close are replaced by real Dart references in ADR 0009. Session shutdown releases bridge
resources without disposing application-owned objects. Borrowed Context and State
references retain their own Flutter lifetime rules. The
[object contract](../architecture/objects.md) is authoritative for current construction,
listeners, disposal and reference lifetime.
