# Task: Package-scoped bindings and plugin module delivery

Status: complete

## Goal and scope

Make binding ownership package-local, reuse the default Flax provider, and reuse an
adequate unique dependency provider. Missing, insufficient or ambiguous non-Core
providers produce a complete local binding. Preserve actual Dart type and lifecycle
checks across object views. Deliver runtime implementations separately from public
declarations, through plugin injection only. Native ABI and engine SDKs remain
unchanged.

## Acceptance criteria

- Independent packages can bind the same Dart declaration and short module name. A
  consumer reuses one adequate dependency provider or emits its own complete binding.
- Object views preserve concrete generic checks, selected interfaces, shared disposal
  and listeners. Erased results retain origin through callbacks and lazy async views.
- Source/declaration pairs preserve public imports. Business bundles reject missing
  prepared modules and private implementations; installed packages do not activate them.
- Formal generation, workspace checks, Hermes/V8 UI, Dart JIT/AOT and the macOS arm64
  Hermes release Widget consumer pass with measured size and call evidence.

## Implementation

[ADR 0037](../decisions/0037-package-scoped-binding-providers.md) records package-scoped
ownership and automatic reuse. Core is injected by default. Non-Core binding and host
plugin packages declare a Dart `flax` dependency. Cross-package input checks use actual
Dart types; typed outputs follow the signature, and erased output selection is
independent of registration order. Views share listener and disposal responsibilities.

Five source packages use `-runtime` names while public npm imports remain stable. Seven
public packages contain declarations only. Source-package tests declare their public
types as development dependencies. Archive consumers execute source exports and use the
metadata-declared public package as their type authority. Plugin requests select the
prepared module closure; public library imports use that closure, and private
implementation imports fail. Material/Cupertino delivery names and executable
`@flax/tools` remain unchanged.

Current outputs use metadata 2, Manifest 13, UI protocol 22 and delivery/prepared
manifest 2. Selection formats remain unchanged. The copyable author template follows
these contracts and maps its own public imports to source for the first build. Its
standalone Dart/TypeScript checks run independently of the workspace placeholder
package. Test teardown advances Flutter events until closing tasks and module handles
retire.

## Results and validation

Formal generation and `dart run melos run check` passed, including reproducibility, 498
generator tests, 131 JavaScript tests, 80 tool/fixture tests and analysis with no
issues. One real Windows CDB self-test is inapplicable on macOS and remains skipped.
Formatting and documentation passed. All 12 Dart and 14 npm archives passed, as did
their 12 Dart and 14 npm outside consumers. Npm delivery comprises seven source and
seven declaration packages; executable `@flax/tools` is checked separately.

`FLAX_CHECK_PREPARED=1 dart run melos run check:ui` and `check:ui:v8` each passed all
369 framework cases on macOS arm64, followed by package examples and the aggregate
application. The two JSON result sets have identical case names, zero failures and zero
skipped framework cases. Cross-package tests cover both registration orders, wrong
Dart/generic types, typed and erased results, callback/Future/Stream origin, listeners,
aliases and disposal. Disposed runtimes have zero retained handles.

Subsequent review fixed these contract gaps: variant-only State overlays no longer
replace Core preparation; typed object results keep their signature's binding module and
its concrete subtype identity; erased values apply provider priority before subtype
selection; both Codegen entry modes require a direct Dart `flax` dependency outside
Core; business bundling resolves only exact prepared modules or recorded public
subpaths, never a missing child through a parent prefix. Single-file generated consumers
import public provider libraries rather than private binding chunks. Regression checks
preserve the prohibition on actual Core republication and cover duplicate subtype
providers in both registration orders plus missing and development-only Flax
dependencies. Module inventory checks cover missing children, private paths, invalid
aliases and collisions; the packed consumer uses public bindings while source
preparation retains private helper inlining. Node source resolution also discovers an
exact dependency child before falling back to a cached parent, including concurrent
inventory loads. Review receipts and logs use the `review-` prefix in the same
disposable evidence directory.

Review acceptance passed 501 generator cases, 133 JavaScript cases, 80 applicable
tool/fixture cases and both engines' 372-case UI suites, package examples and aggregate
application. The real Windows CDB self-test remains inapplicable on macOS. All 369
preceding UI identities remain, with three additional regressions and identical
successful outcomes across engines. Every workspace check stage passed, with scoped
archive and native-configuration retries after the Node delivery fix; all 12 Dart and 14
npm archives and their outside consumers were rechecked. Analysis, formatting, type
checking and documentation passed. Both runtime checks passed again with 39 Dart cases
per engine, native checks, independent JIT, checksum rejection and relocated AOT. The
standalone release Widget evidence below predates the review fixes and was not rerun
during review. Final review acceptance is recorded in `review-acceptance.json`.

`check:runtime` and `check:runtime:v8` each passed 39 Dart runtime cases, native checks,
standalone Dart JIT, SDK checksum rejection and relocated AOT execution.
`check:standalone` passed external source consumption, macOS integration, production
release and relocated release Widget assertions with source files removed before launch.
This is local macOS arm64 evidence, not additional platform certification.

A copied author package passed CLI validate/generate/check, independent Dart analysis,
its first JS/declaration build and a strict public-types consumer. Packed public types
contain zero JS files; its source archive contains three generated JS files and delivery
metadata matching the generated Manifest.

Measurements: the seven public packages contain 450 `.d.ts` files, 489,466 bytes and
zero JavaScript files. Core/Material/Cupertino/Canvas generated Dart sizes are 626,327 /
270,338 / 13,819 / 6,641 bytes. For 2,000 object calls per path:

| Engine | Registration order | Same-view time (us) | Cross-view time (us) |
| ------ | ------------------ | ------------------- | -------------------- |
| Hermes | A then B           | 69,720              | 59,343               |
| Hermes | B then A           | 54,187              | 42,168               |
| V8     | A then B           | 89,696              | 66,243               |
| V8     | B then A           | 62,043              | 52,468               |

These are single local samples with no timing assertions or comparative performance
claim. The relocated Hermes release measured 39,994 ms production build time and
56,199,337 production bytes; cold/warm frame medians were 177/175 us build and 216/214
us raster. Disposable logs, per-case results, measurements and receipts live in
`.local/package-binding-isolation/`.

## Handoff

No required implementation or local acceptance work remains. Baseline commit
`ecff96a3b0be4365126db28fe896b2b32e1712a5` preserves the preceding asynchronous callback
and default omission changes. Implementation and review are locally accepted; there was
no push, CI trigger, SDK rebuild or publication. Third-party pnpm resolutions,
SDK/ABI/toolchain locks and the engine tracked checkout are unchanged. Original engine
untracked files are preserved. Compare the implementation against the baseline commit
and ADR when reviewing the committed change.
