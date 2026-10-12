# ADR 0041: Shared Uint8List buffers

Status: Accepted; local macOS arm64 V8 and Hermes debug validation passed.

Date: 2026-10-12

## Context

Generated Uint8List bindings should expose JavaScript Uint8Array data without a
payload-sized bridge copy. Existing Dart allocations and aliases must continue to work,
including through GC, ArrayBuffer transfer and session close. The two engines need one
ownership contract.

## Decision

Project `dart:typed_data` Uint8List directly to real Uint8Array in both directions. Use
the standard JSI MutableBuffer interface and native storage leases. Before exposing Dart
heap bytes, promote young backing data, retain the numeric object and temporarily fix
its old-space page. Re-import Dart-backed buffers as Dart heap views. Adopt JS-owned
storage into external Dart typed data with a finalizer lease. Release pins on the UI
thread; retire persistent roots before isolate shutdown.

Hermes adopts ordinary ArrayBuffer allocations, creates native Uint8Array views
directly, retains external storage during equal-size transfer, and accounts shared bytes
until each ArrayBuffer detaches or is collected. V8 uses its existing BackingStore.
These are part of the maintained engine patches, not alternate runtime modes. The
internal binding table advances to version 2. Modules using Uint8List require the
additive `shared-uint8` capability; native ABI 2, UI protocol 24 and Manifest 18 remain
independent. See the
[interop contract](../architecture/interop.md#shared-uint8list-bytes).

## Alternatives

- Long-lived TypedDataAcquireData blocks Dart GC and is unsuitable for retained JS
  views.
- External-only allocation requires replacing ordinary Dart lists and existing aliases.
- Proxies and copy fallbacks add a second behavior and cannot preserve direct native
  byte access through arbitrary TypedArray operations.

## Consequences

Mutations are shared. Same-size transfer moves JS ownership while Dart retains its
bytes. Resizing transfer copies as required by JavaScript; old Dart views remain valid.
Session close releases JS resources, while surviving Dart views retain storage. Sharing
preserves bytes and ranges; it does not promise identical wrapper/view objects.
Readonly, detached, shared and resizable input is rejected rather than silently copied.
Existing explicit binary snapshot operations retain their copying contract.

The first share of young data may collect/promote other nursery survivors. A small
retained allocation temporarily prevents compaction of its whole 512 KiB page. Imported
JS views and Hermes ArrayBuffers conservatively count the full retained store as
external memory for each owner. The V8 SDK must disable sandboxing, and Hermes keeps its
32-bit buffer-size limit.

Validation covers generated parameters/results, nullable bytes, callbacks, Future,
collection elements, Object conversion, transfer, GC and session close with both engines
on macOS arm64. Android/iOS execution, AOT and prolonged heap-fragmentation behavior are
not accepted by this validation. Other TypedData types remain outside this
implementation.
