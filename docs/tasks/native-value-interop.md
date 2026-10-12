# Task: Native value interop batch

Status: review complete; merge waiting for the concurrent target task to finish

## Goal and scope

Complete the remaining useful Dart/JS value conversions as one coordinated batch. Reuse
the shared typed decoder, real Dart references and the existing binary storage lease.
Deliver one conversion contract, one generated artifact set and one V8/Hermes acceptance
report. Do not introduce per-type conversion modes or a copy fallback.

The batch started at `5463d6f8` on `feat/uint8-zero-copy-prototype`, based on
`feat/dynamic-engine-sdk`. Its reviewed Flax commit now includes the target's committed
Widget work at `84b6252d`. The matching common engine bridge changes are committed on
`feat/uint8-shared-buffers` in the isolated Flutter worktree. The target checkout's
ongoing collection-binding changes remain untouched.

### Conversion inventory

| Dart type                                       | JS input                                                | JS result                                             | Batch action                                                                               |
| ----------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| DateTime                                        | Real Date or compatible Dart reference                  | Dart reference                                        | Keep the validated local millisecond snapshot rule; explicit reverse snapshot              |
| Uri                                             | Real base-host URL, string or compatible Dart reference | Dart reference                                        | Keep the validated URL/string rule; relative URI strings remain supported                  |
| RegExp                                          | Real RegExp with compatible flags or Dart reference     | Dart reference                                        | Add typed input conversion; expose source and flag getters for explicit reverse conversion |
| Pattern                                         | String, compatible JS RegExp or Dart reference          | Existing typed output                                 | Reuse RegExp conversion; preserve literal String matching and scalar implementations       |
| Duration                                        | Dart reference, constructed with explicit named units   | Dart reference                                        | Document the existing constructor/getter route; do not infer a unit from a number          |
| BigInt                                          | Primitive bigint                                        | Primitive bigint                                      | Add exact scalar bridge conversion in both directions                                      |
| Int8List / Uint8List / Uint8ClampedList         | Int8Array / Uint8Array / Uint8ClampedArray              | Corresponding native TypedArray                       | Generalize the validated Uint8 shared storage path                                         |
| Int16List / Uint16List                          | Int16Array / Uint16Array                                | Corresponding native TypedArray                       | Share the actual view range with correct width and alignment                               |
| Int32List / Uint32List                          | Int32Array / Uint32Array                                | Corresponding native TypedArray                       | Same shared storage contract                                                               |
| Float32List / Float64List                       | Float32Array / Float64Array                             | Corresponding native TypedArray                       | Same shared storage contract; verify NaN, infinities and negative zero                     |
| Int64List / Uint64List                          | BigInt64Array / BigUint64Array                          | Corresponding native TypedArray                       | Share bits exactly; document the native Dart signed-int interpretation boundary            |
| ByteData                                        | DataView                                                | DataView                                              | Share bytes; preserve offset, range and explicit endian operations                         |
| ByteBuffer                                      | ArrayBuffer                                             | ArrayBuffer                                           | Share the backing bytes; verify writable and readonly view behavior                        |
| Error / Exception                               | Nominal Dart references where selected                  | Existing nominal binding behavior for ordinary values | Unify only error-channel transport across throws, callbacks, Futures and Streams           |
| StackTrace                                      | Dart reference for typed parameters                     | Dart reference; text in error diagnostics             | Preserve original references on roundtrip; JS stack text is diagnostic text                |
| Float32x4 / Float64x2 / Int32x4 and their lists | No direct native JS counterpart                         | Existing Dart binding behavior                        | No automatic SIMD mapping or numeric flattening                                            |
| Symbol / Type / StringBuffer / BytesBuilder     | Existing binding behavior where supported               | Existing binding behavior where supported             | No new automatic mapping or unrelated SDK API expansion                                    |

Ordinary bool/string/num/int, collection, Record, callback, Future/Promise and
Stream/AsyncIterable behavior stays in the existing shared conversion path. In
particular, List/Map/Set results remain Dart references. This batch does not reopen the
earlier decision to keep num/int conversion through JS Number.

### Common rules

1. Native object conveniences apply only where the declared SDK type is known. Use
   library identity, genuine intrinsic brand checks and existing nominal reference
   compatibility. Same-named user classes, custom subtypes, forged objects and foreign
   sessions must not gain native-input compatibility. Object/dynamic does not guess a
   DateTime, Uri or RegExp; exact BigInt scalars and binary views have their own runtime
   representation.
2. DateTime, Uri, RegExp and ordinary SDK objects retain Dart-reference results. Native
   object inputs are snapshots. Binary data uses shared storage and BigInt uses exact
   scalar values; neither needs a separate JS facade.
3. Apply each rule through the shared decoder/encoder, including constructors, top-level
   functions, methods, setters, collection and Record elements, callback returns, Future
   completions and supported generic bounds. TypeScript must describe actual runtime
   behavior, including erased generic positions.
4. RegExp accepts only `i`, `m`, `s` and `u`. Reject `g`, `y`, `d` and `v` rather than
   silently discarding state or behavior. Do not carry lastIndex into Dart or turn a
   Pattern string into a regular expression. Dart compilation still validates source
   syntax. Existing Dart RegExp references pass through unchanged.
5. Binary sharing keeps the current fixed, writable, unshared storage requirement.
   Reject readonly, detached, shared, resizable and incompatible inputs. Preserve byte
   range, overlapping aliases and memory ownership; view/buffer wrapper identity is not
   promised. Existing explicit Blob/Fetch snapshot-copy APIs keep their contract.

The selected Dart RegExp constructor exposes the four corresponding options in
[Dart's API](https://api.dart.dev/dart-core/RegExp-class.html). Binary names follow
[dart:typed_data](https://api.dart.dev/dart-typed_data/dart-typed_data-library.html) and
[ECMAScript's typed data definitions](https://tc39.es/ecma262/multipage/structured-data.html).

## Approach

All five work packages are implemented. Conversion rules are shared across generated
positions; artifacts were regenerated together and both maintained engines passed
focused and full Core acceptance.

| Step | Work package                         | Changes and completion condition                                                                                                                                                                                                                                                                 |
| ---- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Shared type rules and RegExp/Pattern | Extend the DateTime/Uri typed-input path, generator input projection, SDK selection and capabilities. Validate source/flags, native brands, subtype exclusions and cross-provider references. Keep Duration explicit.                                                                            |
| 2    | Exact BigInt scalar support          | Add a native value kind using an exact decimal string payload, Dart BigInt parsing and intrinsic JS BigInt conversion. Reuse the current primitive call path; never pass through double/Number. Check engine/version compatibility before assigning version changes.                             |
| 3    | All corresponding binary views       | Generalize the Uint8 storage lease and view-kind handling once. Wire ordinary numeric lists, 64-bit lists, ByteData and ByteBuffer through the same engine/GC ownership. Verify sliced and overlapping views, readonly propagation, transfer and accounting.                                     |
| 4    | Error-channel consistency            | Compare the existing Stream error-reference path with synchronous throws, callbacks and Future rejection. Reuse that transport where semantics match, fix confirmed gaps and preserve original Dart error/StackTrace references. Ordinary custom exception parameters remain nominal references. |
| 5    | Generation, review and acceptance    | Regenerate bindings, manifests, public declarations and dependent modules together. Regenerate FFI/host scripts only if their sources change. Complete static checks and actual maintained V8/Hermes execution; report limits and fix routine review findings within scope.                      |

The exact decimal BigInt payload provides one simple representation for arbitrary-size
integers. It allocates in proportion to the scalar's digit count; it does not impose
per-element conversion on shared 64-bit arrays. No binary BigInt protocol or new package
dependency is planned without measured need.

The broad binary change reaches the SDK type model, emitter, Dart session converter,
runtime Dart/FFI wrappers, canonical native headers, maintained engine view creation and
the existing Dart typed-data patch. The implementation reuses its numeric backing-root
and lease mechanism without changing the VM patch, engine adapters or Hermes storage
patch. Internal binding extension 3 checks the matching engine early; public native ABI
2, UI protocol 24 and Manifest 18 remain unchanged.

The current native VM reads an all-FF Uint64List element as `-1`; JS BigUint64Array
reads those same bits as `18446744073709551615n`. The contract is exact shared bits,
with each language retaining its own integer semantics. Document this with a concrete
example; do not change Dart int semantics or route array elements through Number.

Android/iOS/AOT execution, shutdown churn and prolonged pinning stress remain separate
platform acceptance work. This batch validates the maintained macOS arm64 debug testers.

## Acceptance criteria

1. One compact generated fixture covers direct and nested input/output positions,
   generic bounds and callback/Future boundaries. Positive and negative TypeScript cases
   agree with both engines; existing Dart reference identity and nullability remain
   correct. Test genuinely different conversion paths, not a full Cartesian product for
   every type.
2. RegExp tests compare matching and input snapshots, flag rejection, literal Pattern
   strings and genuine brands. BigInt roundtrips positive/negative values well beyond 64
   bits, zero, nested values and callbacks exactly; existing Number behavior is
   unchanged.
3. Binary tests cover each view kind's representation and range, shared writes in both
   directions, overlapping aliases, width/alignment, clamping, floating-point edge
   values and 64-bit extremes. Preserve readonly and invalid-buffer rejection.
4. Actual V8 and Hermes tests cover GC, same-size and resizing transfer, retained Dart
   data after session close, isolate shutdown and balanced native memory accounting.
   Address/copy instrumentation stays in isolated tester overlays. Reuse existing
   lifetime tests and add only checks for new view-specific risks.
5. Error roundtrips preserve the original Dart error and StackTrace where available; JS
   rejection diagnostics survive hostile values and session close. Generator/JS suites,
   analysis, declarations, binding/module reproducibility and relevant FFI/host checks
   pass. Run both engine runtime and UI gates against the matching maintained builds;
   report exact test counts and platform limits.

## Results and validation

| Evidence                                                          | Result                                                                        |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Full Core UI suite, matching maintained macOS arm64 debug engines | V8 294/294; Hermes 294/294                                                    |
| Focused generated interop, native values, runtime and joint GC    | V8 61/61; Hermes 61/61; included in the full suite                            |
| Tester-only binary lifetime probes                                | V8 2/2; Hermes 2/2; both tester processes exited with code 0                  |
| Generator suite                                                   | 588 cases covered: 587 passed in the full run; one passed on sequential retry |
| JS workspace suites and type declarations                         | 156/156; workspace typecheck passed                                           |
| Dart static analysis                                              | Flax, codegen and test support: no issues                                     |
| Reproducible outputs                                              | Bindings/manifests/public declarations, embedded host scripts and FFI passed  |

Review fixed two conversion gaps. Dart object and Stream constructor failures now use
the same original-error transport as methods and Futures. Selecting SDK BigInt or a
mapped typed-data class as an ordinary object facade is rejected; automatic discovery
skips that facade while APIs using native JS values remain bindable. A focused generated
fixture verifies both the diagnostic and the supported API projection.

The failed-construction lifecycle check now primes cached helpers and drains the normal
bridge checkpoint before comparing handle counts. This distinguishes pending error
delivery from leaked receiver facades. Both engines passed the focused regression. The
generator retry addressed a shared native-assets build-output race; its test passed when
run sequentially without another fixture-preparation process.

The 13 binary kinds have identical Dart/JS addresses in both directions. After forced
GC, pins, pinned pages, external Dart leases and indexed backing stores returned to zero
for every kind. Hermes external-byte accounting remained charged after adoption and
equal-size transfer, and returned to its original baseline after collection.

The isolate-shutdown probe deliberately retained one undisposed runtime, 26 Dart views
and 26 JS views covering every kind. Both actual tester processes shut down
successfully. This is a bounded shutdown smoke check; post-process counters and repeated
engine shutdown churn are not certified. The regular suite verifies retained data after
session/runtime close, compacting GC, equal-size transfer aliasing and resized transfer
storage independence. Floating-point edge values, clamping, 64-bit extremes, readonly
propagation, rejected inputs and original Dart error/StackTrace roundtrips passed.

Actual engine receipts and logs are in `.local/native-value-interop/`; tester build
receipts are in `.local/uint8-zero-copy/`. Address/counter instrumentation and shutdown
probes remain outside production packages. The common native bridge and canonical
headers are the only new engine changes; no second allocator or GC strategy was added.

## Handoff

The isolated Flax and matching Flutter bridge commits are ready for the authorized
merge. Matching engine binaries must be rebuilt with internal binding extension 3. No
open conversion or ownership decision remains from this batch.

Wait for the target's concurrent collection-binding task to finish before merging either
repository. Then refresh the target HEAD and dirty-file snapshot, preserve all of that
task's work, resolve the shared collection/native-value conversion points and regenerate
outputs from the combined sources. Validate the integrated result on both engines.
Neither target repository has been merged, pushed or published by this batch.

Relevant existing contracts: [interop](../architecture/interop.md),
[real Dart references](../decisions/0009-dart-interop.md),
[shared bytes](../decisions/0041-shared-uint8-buffers.md),
[native version domains](../decisions/0021-external-binding-version-domains.md) and
[scoped checks](../../CONTRIBUTING.md#checks).
