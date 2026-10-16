# Task: Binding architecture cleanup

Status: ready in isolated branches; integration waiting for concurrent work

## Goal and scope

Complete the five reviewed cleanup items on the `b9bd1776` baseline while preserving
binding conversion, generic identity, callback ownership and session behavior. Preserve
other tasks' changes when integrating into `feat/dynamic-engine-sdk`; do not push.

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

All five source changes are implemented. Handwritten codegen sources are 408 lines
smaller. Official generated Dart binding implementations are byte-for-byte identical to
`b9bd1776`; TS modules, declarations, delivery assets and Manifest 24 outputs were
regenerated. Author-template declarations were regenerated as well. No dependency,
native ABI, engine binding extension or UI protocol changes were introduced.

The complete workspace `check` passes: 617 generator cases, 170 JS cases, tool/package
tests, analysis, formatting, TypeScript, documentation, archives, binding
reproducibility and native configuration. `check:runtime` passes 43 runtime/GC cases;
FFI and author-template generation checks also pass. The subsequent background-GC
regression and compact-collection test helper pass focused analysis and formatting.

Maintained V8 execution passes all 609 business cases in one process with the repaired
engine. A subsequent 58-case State/navigation run verifies the final failure-checkpoint
change. The first engine run aborted after 512 passes with
`marker.cc:298: !has_evacuation_candidate_` while the background JIT compiler was
allocating. A repeated unchanged `b9bd1776` all-owner run completed with only the stale
Cupertino expectation; it did not reproduce the abort. Original failure logs remain in
the local evidence directory.

Review also preserves the native State failure checkpoint when shared argument decoding
throws, without allocating an extra empty map on successful calls. A 58-case
State/navigation follow-up passes on both V8 and Hermes.

Source review found that the background-thread conservative root scan omitted
`FinishedRoots()` before draining ordinary marking. The engine patch adds that one call,
restoring the same root/remembered-set boundary used by other root visitors. The crash
stack reached precisely that background-allocation path. A new regression exercises
background compaction while JS retains a Dart callback, then checks reclamation after
deleting the JS root. It exercises the path but does not deterministically reproduce the
pre-fix assertion. Matching macOS V8 tester/framework and iOS simulator Hermes framework
builds pass in the separate `feat/binding-cleanup-gc` engine worktree. Hermes passes 296
distinct business cases across the main gate and final State follow-up: 252 UI cases and
44 native runtime/GC cases, plus platform initialization. The State follow-up passes 58
business cases on each engine. Initial fixtures were corrected for the current Cupertino
observer contract and constructors referenced across separate JS evaluations; all
inheritance, super and GC assertions were retained. Local evidence is under
`.local/binding-cleanup/`. Physical devices and release/AOT were not exercised.

## Handoff

Work stays in `feat/binding-architecture-cleanup`. The concurrent build-tool task owns
`@flax/build` migration, TS generic compilation and HMR integration. Regenerate combined
outputs after source integration; never hand-merge generated bindings. The latest
read-only production-source preview merges cleanly. Routine textual conflicts remain in
`docs/architecture/bindings.md` (keep the new TS-inference description and Manifest 24)
and `complex_generic_bounds_test.dart` (the global-constructor comment; both sides
already use the same global class bindings). Recreate the preview after concurrent edits
finish. Both target checkouts remain untouched. Preserve the final target state before
integrating. The engine worktree is
`/Volumes/MAC_HOME/Develop/Flutter/.codex-worktrees/binding-cleanup/flutter`. Hermes
retries use the dedicated `Flax Binding Cleanup` simulator to avoid concurrent
application installation on another task's device. No push or publication is authorized.
