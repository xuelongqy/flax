# ADR 0042: Native value interop

Status: Accepted; full macOS arm64 debug V8 and Hermes validation passed.

Date: 2026-10-12

## Context

SDK value parameters should accept compatible native JS values without replacing real
Dart object semantics. Numeric typed data should use the validated Uint8 storage lease,
and BigInt must never pass through Number. Error transport should retain the original
Dart error and StackTrace instead of reducing them to strings.

## Decision

1. Exact SDK DateTime, Uri, RegExp and Pattern parameters accept their documented native
   JS conveniences through the shared decoder. Use genuine intrinsic brands and SDK
   library identity. Inputs are snapshots; object results remain Dart references. RegExp
   accepts only i/m/s/u, and Pattern strings stay literal.
2. All primitive numeric typed lists, ByteData and ByteBuffer use the existing shared
   byte lease. Reinterpret views with captured native constructors, correct ranges,
   widths and alignment. Do not create another allocator or GC protocol. Reject
   readonly, detached, shared, resizable and incompatible input consistently.
3. Dart BigInt and primitive JS bigint use an exact decimal UTF-16 scalar payload.
   Shared Int64/Uint64 arrays retain raw bits instead of converting each element.
   Existing num/int conversion remains unchanged. Native-value SDK classes do not gain
   another Dart object facade: automatic class selection omits them and explicit class
   selection fails before output. Bind typed consumers and use the corresponding JS API.
4. Generated object/proxy and Stream constructors, member/function throws, typed
   callback failures and Future rejections reuse Stream's Dart error-reference
   ownership. Preserve the original Dart error and StackTrace on roundtrip. Unknown JS
   errors retain diagnostic text; ordinary custom exception/StackTrace parameters keep
   nominal reference requirements.
5. Advance the checked internal engine binding extension to 3. Preserve public native
   ABI 2, UI protocol 24 and Manifest 18. Modules declare additive native-core-inputs,
   native-bigint and shared-buffers capabilities as applicable; existing shared-uint8
   remains valid. Rebuild matching engine and JS artifacts together.

## Consequences

The engine change is confined to the common bridge and its canonical headers. The
maintained V8/Hermes adapters, Hermes shared-store patch and Dart GC pinning patch are
reused. Binary sharing still carries the pinning and memory-accounting limits in
[ADR 0041](0041-shared-uint8-buffers.md).

JS-origin slices can normalize the Dart buffer offset to zero while preserving the
actual bytes. Native Dart Uint64List reads all-FF bits as -1; JS BigUint64Array reads
the same bits as 18446744073709551615n. No integer reinterpretation option is added.

Duration retains explicit named units. SIMD, Symbol, Type and mutable builders gain no
forced JS projection. Decimal BigInt transfer allocates in proportion to digit count;
binary arrays incur no per-element scalar transfer.

The full Core suite passed 294 checks on each engine; the focused subset passed 61.
Tester-only probes passed 2/2 on each engine, confirming identical addresses and
balanced GC/accounting for all 13 kinds, plus successful isolate shutdown with retained
views. This is macOS arm64 debug evidence; Android/iOS/AOT, repeated shutdown churn and
long-duration heap pinning acceptance are separate work. See the
[batch task](../tasks/native-value-interop.md) and
[interop contract](../architecture/interop.md) for the complete rules and receipts.
