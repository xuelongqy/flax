# Task: Shared Uint8List bindings

Status: reviewed; local merge pending target-worktree availability

## Scope

Automatically project ordinary `dart:typed_data` Uint8List parameters and results to
real JS Uint8Array values through one shared-storage protocol. Preserve existing Dart
allocations and aliases, bidirectional writes, GC, ArrayBuffer transfer and retained
Dart bytes after session close. The reviewed Flax baseline is `100a91ed` on
`feat/dynamic-engine-sdk`; maintained Flutter changes are based on `7d45ea1e6c1`.

## Implementation

- Promote young Dart storage once, root its numeric backing object and temporarily pin
  its old-space page using the existing compactor flags. Standard JSI MutableBuffer
  ownership releases the pin on the UI thread; isolate shutdown retires roots.
- Import JS-owned stores as external Dart typed data with finalizer leases. Re-import
  Dart-owned stores as Dart heap views, avoiding external pointers into the Dart heap.
- V8 retains BackingStore ownership. The maintained Hermes patch adopts ordinary
  ArrayBuffers, creates direct Uint8Array views, retains shared storage on same-size
  transfer and keeps external-memory accounting balanced.
- Binding table 2 and the additive shared-uint8 capability provide the same conversion
  for explicit types, Object/dynamic, callbacks, Future and collection elements. Native
  ABI 2, UI protocol 24 and Manifest 18 remain unchanged. Snapshot-copy APIs remain
  explicit, separate operations.

See [ADR 0041](../decisions/0041-shared-uint8-buffers.md), the
[interop contract](../architecture/interop.md#shared-uint8list-bytes) and the
[reproduction report](../../experiments/uint8_zero_copy/README.md).

## Review corrections

1. A selected user type named Uint8List could overwrite the SDK import and capability.
   The generator now rejects this ambiguity using its existing library-routing
   diagnostic. Both the positive compiled fixture and the collision case pass.
2. Hermes adoption removed its GC charge for a still-live store. The new regression
   reproduced a 1 MiB store becoming zero counted bytes before the fix. Attach, detach,
   ejection and collection now balance the charge; adoption and transfer retain 1 MiB,
   and JS collection restores zero while Dart data remains readable and writable.

## Acceptance evidence

- V8: 83 focused byte, runtime, joint-GC and generated interop cases passed.
- Hermes: 84 cases passed, including the additional memory-accounting regression.
- The full generator suite passed 583 tests. JS passed all 156 tests and workspace type
  checking; Dart analysis reported no issues.
- Generated bindings, public declarations and module delivery are reproducible. The
  maintained Dart patch and locked Hermes patches have local application/hash checks.
  Addresses, forced GC and counters exist only in isolated tester overlays.

Raw logs and build receipts are ignored under `.local/uint8-zero-copy/review/`. The
testers use Dart 3.13.5, V8 15.4.80.15 and Hermes 260318099.0.4
(`d412d3bd851278712c20cca25d094e32641a0465`).

## Limits and next step

Sharing preserves bytes and ranges, not wrapper/view object identity. The first export
of young data can collect other nursery survivors. Pinning small data prevents
compaction of its entire 512 KiB page until release. Repeated external views
conservatively charge the full retained store.

Android/iOS execution, Dart AOT, prolonged fragmentation, incremental-compactor stress
and isolate-shutdown churn are not certified. The Hermes host tester is a macOS
experiment and does not change the supported-platform policy. Other TypedData kinds,
workers and other Dart isolates remain outside this implementation.

Merge the reviewed local source commits after the target worktree's concurrent Widget
binding task stops. Preserve its uncommitted changes. The matching maintained engine
must be rebuilt for binding table 2; existing published SDK archives are not updated by
this task. No push or publication is requested.
