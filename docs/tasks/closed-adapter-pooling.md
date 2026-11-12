# Task: Integrate static closed-adapter pooling

This record covers production generation changes for the accepted static pooling
direction. Independent acceptance and compiler receipts are stored outside the source
tree under
`/Volumes/MAC_HOME/CodexHome/review-evidence/closed-adapter-production-20261112/`.

## Scope

- Share only complete stateless closed adapter groups with the same concrete Dart types,
  casts, defaults, and function bodies, within their owning provider.
- Integrate with normal generation, output ownership, stale-output handling, and
  reproducibility checks. Do not require a manual output-rewriting command.
- Preserve all public APIs, module inventories, JS/TypeScript/declaration bytes,
  inheritance/proxy support, callback ownership, and generic factory behavior.
- Exclude generic shared type tests, cold-error outlining, JavaScript factory changes,
  and application-specific binding pruning. No commit, push, merge, or publication.

## Acceptance

1. Meaningful generator regression checks cover exact declaration identities, reexports,
   local shadowing, deterministic output, and helper output lifecycle.
2. Normal generation and binding reproducibility pass for all maintained providers;
   generated helpers remain internal to each owner and introduce no package edges.
3. Maintained-engine runtime checks pass, including the Stream.listen generic callback
   regression and actual pooled SDK callback/collection behavior.
4. Matched complete Release AOT retains a real net size reduction. Earlier experiment
   timings are narrow evidence only, not whole-bridge or mobile certification.
5. The actual uncommitted working tree passes independent review and final source
   verification. Preserve every pre-existing experiment and unrelated file.

## Baseline

Workspace: `/Volumes/MAC_HOME/CodexHome/worktrees/binding-architecture-20261111/flax`.
Fixed BASE/HEAD: `4e08785fbdc50af322965c139625310962714e2a`. Initial snapshot:
`closed-adapter-production-20261112/initial` in the evidence root.

```text
package_digest: 8a6af931e8341db6e150ebe63abe10bb7d947ab3b87548ac5e43c76cf831db00
state_fingerprint: f3c80c055573406c549b8de57415c82a8787464440cd936c43811e028995944f
```

The previously accepted prototype saved 771,248 raw AOT bytes and 208,261 bytes in a
standalone gzip control. Those are experimental measurements; production output is
regenerated and measured separately. The invalid earlier scope-rewriting variant is not
a baseline or a savings result.

## Implementation

The package pipeline pools complete closed callback, collection and Future function
groups before formatting. Parser declaration identities preserve reexported Dart types;
lexical scope checks preserve local adapters used by generic factories. Unsupported
groups stay local. Normal generation, check, stale-output cleanup and the Builder own
the optional `lib/src/generated/closed_adapters.g.dart` together.

Core shares 130 groups containing 315 concrete functions, replacing 2,920 references in
13 existing Dart files. The other five maintained providers generate without source
changes. No JavaScript, TypeScript, manifest, selection or dependency file changes.

## Production size measurement

Both complete macOS arm64 Release/AOT compilations use the same embedded application,
six provider inventories, maintained compiler/snapshotter, platform kernel and native
assets. Source fingerprints remain stable during both compilations.

| Measurement                           | Initial production | Pooled production |          Reduction |
| ------------------------------------- | -----------------: | ----------------: | -----------------: |
| Stripped AOT                          |       90,100,128 B |      89,329,680 B | 770,448 B (0.855%) |
| Standalone deterministic gzip control |       24,893,820 B |      24,683,935 B |          209,885 B |

`size-comparison.json` and both compilation receipts retain exact commands, source and
toolchain fingerprints. The gzip control is not an application archive. No new startup,
FPS, whole-bridge or mobile timing conclusion is claimed; static calls retain their
concrete checks and bodies without a new runtime dispatch layer.

## Verification evidence

The evidence directory named above retains complete command logs and receipts.

- `implementation-checks.json` records normal six-provider generation, generator
  regressions and binding reproducibility. An initial reproducibility run was
  deliberately interrupted for a generated analyzer-ignore correction; that run is
  neither a pass nor a failure.
- `runtime-check.log` records 60 passing maintained-engine runtime/GC tests.
  `adapter-runtime.log` records 15 passing contracts, including Stream.listen, concrete
  Flutter declaration identity, callback casts and immutable Widget snapshots.
  `acceptance_test.dart` preserves the focused test source outside the deliverable.
  `runtime-source-receipt.json` verifies all 106 provider Dart sources against the final
  compilation input: only the generated analyzer-ignore comment differs.
- `docs-check.log` and `scoped-prettier.log` record passing documentation and changed
  file formatting checks. Full Dart formatting checked 748 files with zero changes.
- Whole-workspace analysis and Prettier also report pre-existing environment/format
  issues: 36 diagnostics in unchanged sources and 88 unchanged formatting locations.
  `analyze-baseline-receipt.json` and `format-baseline-receipt.json` verify those source
  bytes against the initial snapshot. They are not new failures or passing whole-tree
  checks. The shared-helper import diagnostic was corrected in its generator.
  `scoped-analyze.log` passes Flutter analysis of Core's library and the generator with
  fatal infos enabled on the regenerated version.
- Independent acceptance is recorded outside the source tree after the final full
  working-tree capture; the retained snapshot digest identifies the accepted version.
