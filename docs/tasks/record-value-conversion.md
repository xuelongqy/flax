# Task: Shared Record value conversion

Status: complete for the verified macOS V8 and iOS simulator Hermes scope

## Goal and scope

Use plain JS field objects for every Dart Record. Reuse the maintained VM constructor
and normal field converters for input, including callback/async/generic positions.
Remove per-layout executable adapters and the opaque Record business-value holder.
Arbitrary JS callback signature synthesis and public structural type builders are
outside this task. See [ADR 0043](../decisions/0043-record-value-conversion.md).

## Acceptance criteria

- Typed, nested, empty, positional, named and bare Record inputs work in debug and AOT;
  missing/wrong fields and invalid bare layouts fail. No Dart literal is required.
- JS inheritance, overrides and super, Future/Stream conversion, Context validity and
  callback cycles retain existing semantics. No original Record is retained by a copy.
- Compare the frontend rule with identical application sources and record workloads;
  measure generated executable adapters and the shared-construction hot path separately.

## Approach

Engine binding extension 8 exposes checked native field copy/construction. The
maintained Dart patch retains externally allocatable Record shapes and synthetic field
values. Generated metadata supplies exact Type and field conversions. Bare Record layout
names are validated before VM registration; actual reference fields reuse joint GC.

## Results and validation

Initial same-device AOT comparison: seven alternating process pairs, nine samples per
process and 400,000 operations per sample. Median positional/named/nested loop times
changed -0.52%/-0.46%/-0.18%; control changed -0.61%. Both App binaries were 1,937,440
bytes with 100 cold signatures. One build per compiler took 20.286/17.246 seconds;
cache/order effects prevent claiming a compiler speedup. First-frame medians differed by
1.515 ms amid wide run-to-run variation; no startup guarantee is inferred.

For 1/10/100 methods sharing a two-field Record, generated Dart source shrank from
3,060/10,674/87,174 to 1,511/8,693/80,873 bytes. Constructors/readers became 0/0 from
1/2, and TypeScript sizes stayed 5,792/9,815/50,405 bytes. Earlier generation already
deduplicated by shape, not by method; this task removes those shape helpers entirely.

The final macOS release/AOT application passed 25 focused cases, covering actual
native-only layouts, empty/nested values, errors, callbacks, Future/Stream, JS private
fields, overrides/super and joint collection. The iOS arm64 Hermes simulator passed the
same 25 cases plus its platform semantics initialization. The first iOS harness used
both `/var` and `/private/var` imports for copied fixtures; canonical imports removed
those duplicate Dart libraries without changing product assertions.

Native boundary timing in the final AOT application used seven samples of 20,000
operations: median shared construction was 0.5571 microseconds and shared field copy was
0.24585 microseconds per call. Direct literal/field-access lower bounds were
0.00395/0.0106 microseconds; they exclude the bridge and are not equivalent end-to-end
APIs. The 2,000-call JS round-trip workload measured 231.3385 microseconds per call.
These are local observations under other test/build load, with no time assertions or
frame-latency guarantee.

The full static workspace `check` passed, including 610 generator tests, strict
TypeScript, analysis, formatting, documentation and package/archive checks. Both
`check:runtime` and `check:runtime:v8` passed 43 native/runtime/joint-GC cases. The
post-review empty-layout/canonical-field-order regression passed all 18 emission cases,
and the official binding regeneration completed. The full macOS UI gate passed all 586
cases, package example tests/applications and the cross-package aggregate application.
Raw local receipts are under `.local/record-value-implementation-20261015`.

## Review validation

Scoped callback Record copies now register their temporary JS handle with the shared
call cleanup. The added regression detected one unreleased handle on session close
before the fix and passes after it, without retaining the original Record. Post-fix
verification passed 38 focused generator tests, five Record UI cases, full analysis, and
freshly built macOS V8 AOT/iOS Hermes simulator applications: 26 business cases on each
engine, plus iOS semantics initialization. Runtime/joint-GC acceptance also passed all
43 cases. The earlier 610-generator/586-UI full gates above were not repeated for this
scoped cleanup change.

## Remaining scope

The maintained Dart patch passes its apply/idempotency test and is confirmed applied to
the pinned dependency. The two native headers match; FFI regeneration, both repository
diff checks and final generator analysis pass. Disposable app assets were moved back
into local evidence and the pre-task standalone compiler cache was restored.

Android, iOS physical devices and iOS release/AOT were not rerun for this change;
simulator Hermes and macOS V8 evidence do not certify those targets. SDK archives,
release assets and toolchain pins are unchanged. This task does not publish engine
artifacts or explicitly dispatch CI.
