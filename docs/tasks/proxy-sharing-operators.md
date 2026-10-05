# Task: Shared proxy implementations and class operators

Status: complete

## Goal and scope

Share generated JS forwarding bodies and expose typed Dart class operators through
explicit JS methods. Preserve Flutter-specific owners, default argument semantics,
provider isolation, UI protocol 22 and ABI 2. No commits, pushes, CI dispatches or SDK
rebuilds. Preserve unrelated static-accessor work already in the checkout.

## Acceptance criteria

Generated Dart and TypeScript compile, Manifest 15 round-trips operator identity,
providers require complete operator surfaces, and Hermes/V8 exercise real operators,
super dispatch, equality/hashCode and cleanup. Workspace and UI checks pass. Measure 100
classes with 20 members and repeated invocation costs without timing assertions.

## Approach

Use `FlaxProxyBase`, prototype-installed concrete members, existing object wrappers and
State/Widget/Route/Page owners. See the shared proxy section of the bindings contract.

## Results and validation

Operator and provider regressions: 9 passed, including data projection through
dependency inheritance and typed callbacks. Shared JS runtime regressions: 2 passed.
Full Hermes and V8 UI suites: 375 cases each, plus package examples and aggregate
delivery checks. The final operator fixture was then extended with data and callback
reentry and passed again on both engines (one grouped case each, 14.7 and 18.2 seconds
including loading).

Both runtime checks passed: 39 Dart integration cases per engine and native CTest
(Hermes: 1, V8: 2). Independent Dart JIT, checksum rejection and relocated AOT consumers
passed. The macOS arm64 platform check passed for both engines, including release Widget
applications, signed dependency closures, relocation, Dart/native coexistence and
`built`/`ran`/`applicationDelivered` evidence. Existing verified SDK archives were
reused via an explicit local cache; no SDK rebuild or lock change.

The 100-class/20-member experiment reduced TS from 1,026,304 to 295,209 bytes, minified
JS from 601,499 to 101,712 bytes and gzip JS from 22,659 to 4,789 bytes. Five-process
medians reduced registration heap from 1,847,008 to 1,350,832 bytes; stub-host calls
increased from 36.7 to 49.8 ns. Registration took 7.21 vs 7.34 ms; construction took
10.00 vs 9.59 microseconds. These are local measurements, not end-to-end bridge speed
guarantees. No timing assertions were added.

One complete workspace `check` passed. The final repeat passed all 528 codegen tests and
workspace analysis, then stopped on task-record Prettier formatting. That formatting was
fixed; format, analysis, strict TypeScript, documentation, package archives/outside
consumers and native configuration were rerun successfully. All applicable check steps
are complete. After a capability inventory correction, 17 operator/inventory regressions
passed: setter-name normalization now preserves operator suffixes (`<=`, `>=`, `[]=`,
`==`), unary and binary subtraction remain distinct, and selected parameters are
counted.

Logs and raw measurements are in `.local/proxy-*.log` and `.local/proxy-benchmark/`;
`.local/proxy-final-evidence.json` records command results. Full UI journals and
platform verification were copied there before focused tests overwrote the standard
output paths.

## Final review

Fixed two confirmed operator regressions: effective mixin overrides now use analyzer
member lookup, and operator signatures participate in automatic excluded-type dependency
pruning, including inherited operators. Both regressions failed before their fixes.
Updated four current Manifest references to 15; historical decisions remain unchanged.

The final generator suite passed 530 tests, including 11 operator regressions. All 135
JS tests and 142 other Dart/tool tests passed; one Windows CDB self-test is inapplicable
on macOS. Hermes and V8 each passed 375 UI cases with no skips, covering 53 files across
seven packages and matching the previous complete case-name sets. Both full commands
also passed examples and aggregate delivery (251.078 and 404.903 seconds).

The final workspace check passed tests and analysis, then stopped on parser formatting.
After formatting, all remaining check steps passed: format, strict TypeScript,
documentation, package archives/outside consumers and native configuration. No further
behavior changes were made after the successful test run. Review evidence and original
exit codes are preserved in `.local/proxy-review/verification.json`; copied journals and
`ui-audit.json` record the UI coverage. This review validates local macOS arm64
behavior, not additional platforms. No remaining blocking finding was identified.

## Handoff

Complete. No commits, pushes, CI dispatches, releases or engine changes were made.
Existing unrelated static-accessor edits remain in the working tree.
