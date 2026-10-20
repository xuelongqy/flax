# Package binding dependency selection

Status: complete; reviewed for local commit

## Goal and scope

Unify local generation, existing-provider reuse, opt-in package-local dependency
generation, and explicit skips. Reuse the Binding Manifest, checked `asDart` views, and
prepared module injection. Preserve existing binding optimizations. The final review
authorizes a local commit; do not push, dispatch CI, or rebuild an engine/SDK.

## Acceptance criteria

- Small package fixtures verify all four paths, nested signatures, blacklist parity,
  provider declaration validation, independent local views, and manifest round trips.
- Material/Cupertino generation and strict compilation retain callable factories, JS
  inheritance, overrides, lexical super, and joint-GC behavior.
- Documentation distinguishes package policy, ordinary Pub/npm dependencies, and
  explicit host capabilities. No implicit host plugin activation.

## Approach

Add `bindingDependencies.generate` to `flax_package.yaml`. Keep default Core providers;
discover other providers through explicit package dependencies and public JS types.
Generate only referenced public dependency types, with owner-scoped identities and
metadata preventing automatic reuse by unrelated packages. Share selection policy
between configuration and library modes.

## Results and validation

Implementation started from `ca7838e4900613864ec57ca9cd50e2dd105e2797` on
`feat/flutter-sdk-bindings`. Prior factory/proxy and size optimizations are retained
with their officially regenerated outputs. Evidence is stored in
`.local/binding-dependency-policy-20261020`.

- Package metadata and both JS delivery packages implement the four rules. Manifest 28
  records owner-local views and canonical generated Dart entry points. UI protocol 24
  and native ABI 2 are unchanged. Direct provider wiring registers Dart modules without
  activating host-capability plugins.
- Owner-local views retain exact identities per inherited operation. Separate methods,
  getters and setters can use independent views; one conflicting operation fails
  explicitly. The final focused dependency/generic/shared-binding checks passed 29/29,
  including generated Dart analysis and Flutter kernel compilation. Registry/emitter
  checks passed 25/25. The broader generator run passed 690 cases; its one stale-format
  fixture passed after regeneration. That complete suite was not repeated after the
  final member-scope refinement.
- Isolated whole-library Cupertino and Material generation produced 96 and 556 own
  classes, respectively, plus five independent `intl` classes for each owner. Both
  generated Dart libraries passed analysis, strict TypeScript compilation and final
  generation consistency checks. Formal selections remain curated; Core still owns
  native Flutter Material/Cupertino.
- Real maintained-engine Core applications passed the same 252 named cases on macOS V8
  and iOS Simulator Hermes, covering JS inheritance, overrides, super and joint GC,
  including 1,000 repeated bridge and Widget/State cycles. Material's five theme tests
  passed on both engines, including provider injection without installing its plugin,
  checked views, native copy semantics and close cleanup. The other Material tests
  passed in the preceding full V8 run.
- Workspace JS tests passed 205/205, tooling passed 103 with one Windows-only CDB test
  inapplicable, and workspace TypeScript checks passed. A pre-existing HMR test race was
  fixed by waiting for the actual importer revision; error-count assertions remain.
  Runtime inputs used by the engine gates are unchanged. No engine changes or rebuilds,
  Dart lockfile changes, commits, pushes or CI dispatches were made.

## Handoff

The final review found that merging npm dependencies across source and declaration
packages could hide a missing public provider types dependency. Each package is now
validated independently; incomplete declarations fail with the actual package path. The
regression reproduces the previous acceptance of an incomplete package. The review
passes 162 generator cases and 103 tool cases, with one Windows-only case inapplicable.
Runtime, GC and Core Manifest hashes match the V8/Hermes acceptance inputs above, so
those unchanged native gates are reused rather than rebuilt.

Final formatting, documentation lint, four documentation tests and 770 local links
passed. The temporary full-library workspace, application copy, simulator test bundle
and template package configuration were removed; receipts and maintained engine/SDK
builds remain. Android and release acceptance, and the actual Core Material/Cupertino
split, are outside this change.
