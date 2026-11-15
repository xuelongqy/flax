# Task: Production inherited adapters and closed generic metadata

## Scope

Integrate experiment B (typed inherited getter/zero-argument method reuse) and C (closed
immutable member metadata hoisting) in the maintained generator. A remains experimental
and unchanged. Preserve the full API, JS inheritance, arbitrary supported generic types,
native receiver checks, lexical super, defaults and session ownership. No commits, main
integration or publication are authorized by this task.

## Acceptance and plan

1. Extend existing typed emission and constant pooling; retain unsupported and
   context-dependent cases without introducing runtime dispatch or interpreter layers.
2. Add focused regressions, regenerate owned providers through the normal generator, and
   verify reproducibility and unchanged JS/TS/Manifest selection semantics.
3. Measure actual combined BC Release/AOT size against a pinned unchanged baseline.
   Validate changed hot paths and generic metadata using the maintained engine; do not
   infer the combined result by adding prior independent savings.
4. Run affected generator, runtime and UI contracts with the matching maintained SDK;
   distinguish completed validation from platform coverage that was not exercised.
5. Independently review the entire delivered working tree, including untracked files,
   then remove task-created scratch after retaining evidence and final verification.

## Baseline and evidence

Fixed BASE: `839a1f0ee04894877148e8d4a1016ba132defca9`. Workspace:
`binding-refactor-experiments-20261112/flax`. Evidence:
`/Volumes/MAC_HOME/CodexHome/review-evidence/binding-members-bc-production-20261112/`.

The initial full-tree package includes the earlier completed experiment sources and
record; preserve those bytes. It has package digest
`2b71218d685d4db7e78793b3adfbc40b41c29b8549a8fac0e4426f15fcf97331` and fingerprint
`42f7d15d3e3b434aa8ecb361376d0944d61f7a02ee841329aaab7a09c393750c`. The external
evidence owns immutable review snapshots, exact command/check receipts, compiled
input/output identities, performance logs and final acceptance.

## Implementation and measured size

B reuses complete matching closed getter/zero-argument method adapters. Cross-module
calls use generated, reversible wire-ID-based const tearoff aliases and an internal
generation-context map derived from existing Manifest/output metadata. They add no
runtime lookup, wrapper, Manifest field, capability or protocol version. Ambiguous or
cyclic dependency directions, guards and owners requiring explicit type arguments retain
local implementations. Original concrete/generic receiver matchers remain.

C hoists only complete immutable member expressions whose types and adapter references
are already closed. It preserves the original `.plain`/`.shared` constructor forms; `T`,
`types`, IDs, local closures and other factory-dependent values stay in scope.

Official workspace generation updates 19 provider Dart files. Manifest, JavaScript,
TypeScript, selections, the previous experiment and A's pooling implementation remain
byte-identical. Independent provider aliases number 21,019 and increase generated Dart
source by 2,369,513 bytes; source size is not the release-binary result.

| Same complete six-provider macOS arm64 Release application |  AOT bytes | Deterministic gzip bytes |
| ---------------------------------------------------------- | ---------: | -----------------------: |
| Unchanged initial baseline                                 | 89,329,664 |               24,683,939 |
| Production B+C                                             | 88,063,104 |               24,405,430 |
| Reduction                                                  |  1,266,560 |                  278,509 |

Both builds use the same maintained frontend, platform, snapshotter, entrypoint and
immutable native assets. Compilation receipts record stable before/after source digests.
Gzip is a standalone compression control, not a packaged application archive.

## Validation receipts

Focused regressions cover true generic factories, virtual dispatch, wrong type
arguments, same/cross-module reuse, barrel exports, narrowed/default/denied cases,
recursive owners requiring explicit types, closed const identity and retained captures.
The maintained-engine runtime/GC command passes 60 tests. A separate generated-binding
probe plus native generic-type tests passes 19 tests; the unchanged probe baseline
passes 14. Detailed commands and outcomes reside in the external evidence directory.

The production performance check uses actual generated baseline/BC adapter references,
the original generic matcher, real overridden Tooltip receivers and public `int` Type
instantiation through the VM API. Six cases cover ordinary getter/method calls, raw and
guarded generic getters, closed metadata construction and an A/A getter control. Each
uses eight predetermined balanced pairs after 25,000 warmup operations. Performance
copies only append exposures; the size-input libraries stay unchanged. `perf-plan.json`,
`perf-method.json`, `perf-host.json`, `perf-run.log` and `perf-summary.json` retain the
final identities, all readings and their bounded interpretation. No whole-bridge,
startup/FPS or mobile performance certification is implied.

Initial generation attempts were superseded before measurement. A probe compiler error
after removing A-only benchmark setup was corrected before any timing; its source and
diagnostics remain under `perf-v1-failed-*`. These are excluded attempts, not favorable
timing retries. The final independent verdict, required-check outcomes and exact source
snapshot verification are external receipts; acceptance requires all of them to pass.
