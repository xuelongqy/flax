# Uint8List / Uint8Array shared-memory prototype

The selected design pins ordinary Dart storage while a JS buffer owns it and shares
bytes through the existing JSI `MutableBuffer` interface. V8 and Hermes use the same
Dart VM pin implementation, ownership rules and Dart import/export entry points. There
is no special Dart allocator, Proxy, copying fallback or user-selectable mode. Automatic
generated bindings now use this protocol through binding table 2.

Base: Flax `feat/dynamic-engine-sdk`, reviewed at `100a91ed`, experiment branch
`feat/uint8-zero-copy-prototype`. Flutter checkout: `7d45ea1e6c1`, Dart 3.13.5. V8:
15.4.80.15. Hermes: 260318099.0.4, revision `d412d3bd851278712c20cca25d094e32641a0465`,
including the maintained joint-GC patches.

## Shared ownership

`Dart_TypedDataAcquireData` exposes an ordinary list's bytes only in a temporary
no-GC/no-callback region. A persistent handle keeps an object alive but does not fix its
address. The ordinary-heap probe confirms movement of 16-B through 128-KiB arrays under
young GC; the tested 256-KiB and 1-MiB arrays did not move. Size is not a stability
contract.

Before publishing a Dart pointer, the VM overlay promotes a young array, finishes any
pending evacuation of its page, roots the original object and marks its old-space page
`never_evacuate`. Existing aliases, slices and ByteData references follow normal Dart GC
updates. Both existing compactors honor the fixed-page flag. GC continues elsewhere.

The shared MutableBuffer owns that root/pin. Its destructor schedules unpinning on the
UI thread; the last pin restores the page's prior flag. Isolate shutdown retires roots
before VM handle teardown. Re-importing Dart-heap storage returns the original Dart
object or a native view. An external Dart-data object must not point into the Dart heap.

JS-created storage is retained without retaining JS objects: a native backing-store
owner plus a Dart external-data finalizer lease. A weak address index discovers
surviving owners but does not keep bytes alive. A shared buffer contains numeric data,
not arbitrary Dart application-reference fields.

Access after pinning is zero-copy across languages. First export of a young array may
move its bytes once through Dart GC. Shared access does not promise that first operation
never copies, and sharing does not make a JS transfer an exclusive cross-language move.

## Hermes differences verified

Hermes' existing `tryGetMutableBuffer` only retains buffers created through the native
external-buffer API. A small maintained change in `hermes.cpp` adopts a normal JS
ArrayBuffer's existing malloc allocation into a shared MutableBuffer, using the existing
external-data context. The data pointer and original ArrayBuffer/views remain unchanged.
GC, detach or VM destruction then releases Hermes' share rather than freeing live Dart
bytes. This is an ownership change, with no copied payload.

A second change in the same API file creates a Uint8Array view directly. The original
native overload allocated a full-length temporary buffer before replacing it with the
supplied ArrayBuffer. The experiment removes that unnecessary allocation and validates
the view range. Export rejects storage larger than Hermes' 32-bit ArrayBuffer limit.

The maintained Hermes transfer implementation always allocated and copied. An eight-line
change in the maintained JSLib ArrayBuffer implementation reuses the existing
external-data context for equal-size shared transfers, then detaches the old JS buffer.
Both old and new NativeState lifetimes retain the same byte owner; Dart's ownership is
unchanged. Resizing and ordinary buffers that have not been shared keep the existing
copy path.

Shared external bytes remain visible to Hermes GC. The review reproduced a 1 MiB
allocation dropping to zero counted bytes on adoption. The maintained JSArrayBuffer
patch now credits external storage on attach and debits it on detach, ejection or
collection. The regression verifies 1 MiB before and after adoption/transfer, then zero
after JS collection while the Dart lease still preserves readable, writable data.

The Hermes GC test helper must use the existing Dart joint collector when Dart peers
exist. An initial helper collected Hermes alone and reclaimed conditional Dart-owned JS
roots, causing a multi-session assertion. The corrected helper uses joint marking; the
engine GC algorithm was not changed. Plain byte-only runtimes can collect Hermes
directly because they contain no conditional Dart peers.

## Results

Both engines were executed in separate macOS arm64 debug Flutter testers. Hermes uses
the maintained interpreter and joint collector, verified by its printed revision. Each
engine passes **15 focused tests** and **42 existing runtime/joint-GC tests**. After the
transfer change, Hermes reran all 57 cases; V8 reran the 12 changed
mutation/lifetime/transfer/guard/session cases against its unchanged engine binary.

| Case                                                                                       | V8                                                                                                                                     | Hermes                                |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Ordinary lists, original slices, ByteData and byte views of Uint32List                     | Addresses agree, bidirectional writes work                                                                                             | Same                                  |
| Young and full compacting GC, including a fresh Dart export inside a JS callback           | Stable shared addresses and valid data                                                                                                 | Same                                  |
| Dart-only and JS-only ownership                                                            | Data survives; final owner release permits collection                                                                                  | Same                                  |
| Same-size shared transfer, Dart-origin and JS-origin buffers                               | Reuses storage, including repeated transfer and GC                                                                                     | Same after the transfer ownership fix |
| Shrinking/growing transfer                                                                 | Separate storage; original Dart data remains valid                                                                                     | Same                                  |
| Two mounted Flax sessions                                                                  | Closing one or both preserves retained Dart bytes; surviving session can re-export; final pin/page/lease/store counters return to zero | Same                                  |
| Shared/resizable JS buffers                                                                | Supported by engine; rejected by prototype                                                                                             | Not implemented by this Hermes build  |
| Fake arrays, other JS typed arrays, readonly Dart data, detached buffers and empty buffers | Guards and valid empty-buffer round trips pass                                                                                         | Same                                  |

The selected experiment contract preserves sharing for equal-size transfers of shared
buffers. Resizing creates independent storage in the tested engines. Every transfer
detaches the source JS buffer while preserving surviving Dart data. This is a pinned
engine contract, not a general JavaScript guarantee; future engine updates must pass the
same address and mutation checks. Once the final shared JS/storage owner disappears,
Dart may move an ordinary list again; later exports pin its current address.

The 15 focused cases include one ordinary-heap probe, two alias/performance cases and 12
mutation/lifetime/transfer/guard/session cases. The six transfer cases cover both
allocation origins and all three sizes. Existing checks include allocation-driven GC,
three-session callback chains and 1000 repeated bridge cycles. Native compilation and
scoped Dart analysis pass; canonical ABI 2 FFI declarations remain reproducible.
Equal-size cases additionally cover default length, explicit same length, repeated
transfer and GC between transfers; the guard case verifies an empty-buffer transfer. The
pre-fix receipt reproduces two failed same-address assertions and four passed resize
cases. The fixed receipt confirms reuse for both origins, mutual writes, valid detached
source rejection, and final session-close pin/page/lease/store counters of zero.

## Costs and limits

The earlier isolated V8 measurements found 18-us median first export for 1 MiB and 11-us
repeated export. A busy nursery with 100000 live ordinary lists took about 6.7 ms to
stabilize a fresh 4-KiB list. Later measurements are logged separately and must not be
treated as cross-engine release-performance comparisons.

An old-space-only TypedData allocation experiment reduced first-share latency but
increased 100000 small-array allocations from 7.6 ms to 18.1 ms. It affected unshared
data too and required allocator/compiler changes, so that implementation was discarded.

The chosen design preserves ordinary allocations. Its costs are a first-share nursery
pause and pinning the entire 512-KiB old-space page for a small array. Other dead
objects can still be swept, but page fragmentation can increase. Counters report pins,
pinned pages, forced promotions, external Dart leases and weak storage records; they do
not prove a bounded process-memory footprint. Dart leases and Hermes ArrayBuffers
conservatively charge the full store for each owner. Repeated views may therefore
overestimate retained bytes; this keeps allocations visible to both collectors.

This confirms the shared-access and ownership mechanism on both tested engines. It does
not establish iOS/device/AOT support, other Dart isolates or workers, incremental
compactor stress, engine-shutdown churn, other TypedArray APIs, frame-time acceptance or
long-run memory behavior. The Hermes tester links the prepared macOS host libraries,
whose deployment baseline is macOS 27; it does not alter the product's iOS-Hermes
policy.

## Formal integration

The converter is now part of the maintained engine sources in the sibling Flutter
worktree and of Flax binding table 2. Generated Uint8List types project directly to
Uint8Array through `createUint8Array` / `readUint8Array`. The former experimental
converter and its production-library probes were removed; these build helpers add only
addresses, forced-GC probes and counters to isolated test overlays.

The generated case covers nullable bytes, nested Lists, Future, callbacks, Object
values, invalid inputs and Dart access after close. A colliding user-defined Uint8List
produces the existing ambiguous-library diagnostic instead of an incorrect import. See
the current acceptance counts in the
[task record](../../docs/tasks/uint8-zero-copy-prototype.md) and
[ADR 0041](../../docs/decisions/0041-shared-uint8-buffers.md).

Build helpers read engine sources from `../flutter/engine/src/flutter/flax/native` and
patched VM sources from `.local/dart-uint8-source`. The latter is a detached Dart
worktree at the locked revision with the full maintained `patches/dart.patch` applied.
The original Flutter dependency checkout remains untouched. These prerequisites are
explicit; the helpers do not reset or replace a developer's checkout.

## Reproduce

Run from the experiment worktree, using the existing maintained build objects and pinned
Hermes source/host-tools under the Flutter checkout's `.local/flax-hermes-final`.
Standard UI fixtures are prepared in this worktree; a fresh checkout must prepare its
usual dependencies and UI bundles before the session test.

1. Build the separate V8 tester and the shared VM overlay:

   ```sh
   python3 experiments/uint8_zero_copy/build.py \
     --flutter /Volumes/MAC_HOME/Develop/Flutter/flutter
   ```

   This compiles three translation units: the shared bridge, V8 adapter and Dart VM API.
   It replaces a member in a copied VM archive and never writes maintained engine files.

2. Build the separate Hermes tester:

   ```sh
   python3 experiments/uint8_zero_copy/build_hermes.py
   ```

   This reuses the identical VM archive, recompiles the common bridge and Hermes
   adapter, patches the copied Hermes API, transfer and storage members, and relinks a
   separate tester.

3. Regenerate the experiment-only FFI declarations if its header changes:

   ```sh
   PUB_CACHE="$PWD/.cache/ffigen" \
     /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/dart pub global run ffigen \
     --config .local/uint8-zero-copy/ffigen.json
   ```

4. Run the focused and existing contracts from `packages/flax`:

   ```sh
   FLAX_VERIFY_HERMES=1 /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/flutter \
     --local-engine-src-path="$(pwd)/../../.local/uint8-zero-copy/engine-src" \
     --local-engine=uint8_hermes_debug_arm64 \
     --local-engine-host=uint8_hermes_host_debug_arm64 \
     test --no-pub --enable-vmservice --concurrency=1 --reporter=expanded \
     ../../experiments/uint8_zero_copy/ordinary_heap_probe_test.dart \
     ../../experiments/uint8_zero_copy/prototype_test.dart \
     ../../experiments/uint8_zero_copy/pinned_heap_test.dart \
     test/ui/engine_runtime_test.dart test/ui/engine_gc_test.dart
   ```

   For V8 use target `uint8_debug_arm64` and host `flax_mac_debug_arm64`.

5. From the root, run scoped analysis and the V8/FFI gate:

   ```sh
   /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/dart analyze experiments/uint8_zero_copy
   /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/dart analyze packages/flax/lib/src/native
   FLUTTER_ENGINE="$PWD/.local/uint8-zero-copy/engine-src" \
     /Volumes/MAC_HOME/Develop/Flutter/flutter/bin/dart tool/check_runtime.dart --engine=v8
   ```

Build commands, source hashes and raw logs are under ignored `.local/uint8-zero-copy`.
Formal engine integration, generated binding conversion and publication are deferred. No
commit or push was made.
