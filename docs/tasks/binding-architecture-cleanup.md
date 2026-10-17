# Task: Binding architecture cleanup

Status: validated mainline baseline

## Goal and scope

Complete the five reviewed cleanup items on the `b9bd1776` baseline while preserving
binding conversion, generic identity, callback ownership and session behavior. Preserve
other tasks' changes when integrating into `feat/dynamic-engine-sdk`. Full-SDK binding
generation and platform CI remain separate work.

## Acceptance criteria

- Retired navigation adaptations retain selection migration diagnostics without semantic
  model or Manifest state. Unused Flutter entry and alias-generation branches are gone.
- Ordinary call arguments share decoding, omission and failure cleanup. Receiver,
  listener, navigation and mounted-State rules remain in their existing owners.
- Generic Manifest decoding preserves slot identity, lexical scopes, canonical traversal
  and diagnostic pointers. Manifest 24 providers and consumers regenerate together.
- Core owns module installation; generated modules retain literal protocol/capability
  tuples. VM emission scopes restore temporary callback and generic state on failure.
- Complete proportional static/generator/JS/reproducibility checks and real maintained
  V8 and Hermes execution before integration.

## Approach

Reuse the existing argument decoder and codec reservation helpers. Share VM emission
scope restoration without adding a generator framework or another runtime GC protocol.
Native ABI 2, internal binding extension 8 and UI protocol 24 remain unchanged.

## Results and validation

All five source changes are implemented. The cleanup removes 408 handwritten codegen
lines on its original baseline. Its official generated Dart implementations remain
byte-for-byte identical to the current `df4125ce` baseline; TS modules, declarations,
delivery assets and Manifest 24 outputs were regenerated. Author-template declarations
were regenerated as well. No dependency, native ABI, engine binding extension or UI
protocol changes were introduced.

The integrated workspace `check` passes: 618 generator cases, 188 JS cases, tool/package
tests, analysis, formatting, TypeScript, documentation, archives, binding
reproducibility and native configuration. Earlier FFI and author-template reproduction
checks remain applicable because those inputs did not change.

Maintained V8 execution passes all 611 business cases in one process with the repaired
engine. Hermes passes the other 610 cases in its complete simulator run; its generic
runner lacks the host Node URL required by the mobile HMR fixture. The existing
`check_hot_reload.dart` mobile entry supplies that URL and passes all three HMR cases,
including the one that could not start in the generic runner. No application fix or
weakened assertion was needed. Initial failure logs remain available.

The first earlier engine run aborted after 512 passes with
`marker.cc:298: !has_evacuation_candidate_` while the background JIT compiler was
allocating. A repeated unchanged `b9bd1776` all-owner run completed with only the stale
Cupertino expectation; it did not reproduce the abort. Original failure logs remain in
the local evidence directory.

Review also preserves the native State failure checkpoint when shared argument decoding
throws, without allocating an extra empty map on successful calls.

Source review found that the background-thread conservative root scan omitted
`FinishedRoots()` before draining ordinary marking. The engine patch adds that one call,
restoring the same root/remembered-set boundary used by other root visitors. The crash
stack reached precisely that background-allocation path. A new regression exercises
background compaction while JS retains a Dart callback, then checks reclamation after
deleting the JS root. It exercises the path but does not deterministically reproduce the
pre-fix assertion. Matching macOS V8 tester/framework and iOS simulator Hermes framework
builds pass in the separate `feat/binding-cleanup-gc` engine worktree. The complete
runtime runs include 44 native runtime/GC cases. Initial fixtures were corrected for the
current Cupertino observer contract and constructors referenced across separate JS
evaluations; all inheritance, super and GC assertions were retained. The original
debug/simulator gate did not exercise physical devices or release/AOT; subsequent
release acceptance is recorded below.

## Integration and preserved work

Code integration commit `b27c1b2` retains `df4125ce`, including the `@flax/build`
migration, TS generic scope fixes, super dispatch and HMR. Routine documentation and
fixture conflicts retain the new inference contract, Manifest 24, global constructor
bindings and the stricter Cupertino observer assertion. Outputs were regenerated from
combined sources. Engine commit `092069ad26e` contains the matching maintained Dart
patch; the existing dependency edits are preserved.

Separate State work adds `KeepAliveSingleTickerState` and its documentation and
component assertions. The mainline baseline includes its generated outputs. Combined
selection, generated sources, declarations and assets pass reproducibility, analysis,
JS, TS, formatting and documentation checks. A 60-case State/navigation follow-up passes
on each engine, covering the new preset, missing-super diagnostics and ticker cleanup.
Together with the full runs and mobile HMR gate, each engine covers the same 613
distinct business cases. The unused, untracked Flutter barrel was removed after checking
its callers and package entry points; a recoverable local copy is retained.

Recoverable index, patch and file backups, pending-work hashes, binary hashes and exact
landing heads are recorded under `.local/binding-cleanup/integration/`. Production macOS
debug framework/tester and iOS simulator Hermes framework builds are synchronized with
the maintained patch. Hermes checks use a task-owned simulator, which is removed after
acceptance.

## Mainline baseline acceptance

The fresh workspace `dart run melos run check` passes in 909.89 seconds, including 618
generator cases, 188 JS cases, 90 tool cases and one platform-inapplicable tool check.
Binding and package-delivery reproduction, package tests, analysis, formatting,
TypeScript, documentation, installed archives and native configuration pass. The
maintained V8/Hermes debug results above are reused after matching pending source and
engine artifact hashes. No generator or bridge behavior changed during this acceptance.

Engine `092069ad26e` was rebuilt incrementally for macOS release in 256.76 seconds,
reusing the existing V8 SDK. `dart run tool/check_engine_application.dart release`
passes in 315.34 seconds: 239 named integration cases succeed, the reporter records 240
successful entries, and two debug-only rebuild checks are not applicable. This validates
Dart AOT, actual V8 machine-code JIT, inheritance/overrides/super, joint GC, one V8
library closure, signing and launch after relocating the app and removing its sources.
Signing is local ad-hoc signing with library validation disabled, not a Developer ID
distribution test.

Exact inputs, hashes and receipts are retained under
`.local/main-binding-baseline-20261017/`. Dependency and SDK locks, UI protocol 24,
Manifest 24, native ABI 2 and binding extension 8 are unchanged. This gate does not
rerun physical devices, Hermes release or full-SDK binding generation, and publishes no
packages or SDKs.

The first main-branch static CI run exposed a cold-checkout tooling failure:
`host:check` required an ignored npm bootstrap before the initial JS build. The shared
host checker now permits absent npm output and still rejects stale committed bundles,
notices and any existing npm bootstrap. Seven direct cold/warm/generation and stale
output assertions pass, with the original artifacts restored afterward. Runtime, binding
and engine sources are unchanged by this tooling correction.
