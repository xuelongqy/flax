# Task: Binding Coverage Expansion

Status: open; generic typedefs, minimal-gap regressions, the first bounded Core/Material
selection, shared-object bindings, top-level readonly/mutable access, the first
Cupertino slice, automatic dependency closure and a real external `gap 3.0.1` pilot are
implemented. The current public-library/module-delivery migration passes standalone,
Hermes and V8 aggregate verification. Broader declaration discovery, provider
augmentation and product configuration decisions remain unfinished.

## Goal and current baseline

Expand useful selected Flutter and third-party bindings while keeping unsupported shapes
explicit. [Binding Generation](../architecture/bindings.md) owns the rules;
[Binding Coverage Map](../architecture/binding-coverage-map.md) owns capability status;
[compatibility](../architecture/external-binding-compatibility.md) owns evidence limits.
Do not treat old census percentages or an accepted design as implementation evidence.

Current domains: config format 1; Manifest writer 10 and strict readers
2/3/4/5/6/7/8/9/10; UI protocol 20; native ABI 2. Generic typedefs, inherited void
getters and minimal Core providers are implemented. Generic calls retain TS
relationships, upper-bound erasure and concrete Dart use-site validation. Exact Dart
inference is not required.

## Ordered work

1. **Maintain the minimal-gap regressions.** Public-barrel value construction and
   imported-provider limits now have generated Dart/TS checks. Unsupported Widget
   callback/property positions and collection writes retain explicit diagnostics.
   Dependent generic defaults preserve TS bounds, with explicit-argument construction
   tests. All 64 omission/null combinations for six independent defaults execute;
   recursive bounds and exponential omission growth remain gaps.
2. **Keep the first selection bounded.** Core owns Spacer (`key`, `flex`); Material owns
   MaterialType, Material, InkWell and LinearProgressIndicator. They reuse Core values
   and existing conversion/lifecycle paths. The
   [combined tests](../../packages/flax_material_ui/test/ui/binding_slice_test.dart)
   cover layout, interaction, reactive values, styles, semantics and cleanup.
   Icon/IconData are deferred pending a release-safe icon/font policy. Additional boxes,
   GridView/PageView, MediaQuery, SnackBar/messenger and tabs are later candidates, not
   part of this implemented slice.
3. **Keep shared object bindings bounded.** Curve, MouseCursor, ShapeBorder,
   ScrollPhysics and VisualDensity now have selected public surfaces and real consumers
   listed below. They reuse object, inheritance, state-property and Future conversion.
   Animation, TickerProvider and custom painting delegates remain deferred; new
   conversion or lifetime behavior needs an explicit contract.
4. **Maintain top-level readonly declarations.** Explicit selections export through the
   owning public library. Safe primitive consts may be literal exports; dynamic/object,
   final/late-final and getter values use uncached `getX()` reads. Manifest 8 preserves
   source identities and public routing. Mutable variables, setters and automatic
   discovery remain outside this slice.
5. **Maintain the first Cupertino selection.** `@flax/flutter/cupertino` now selects
   CupertinoApp, CupertinoPageScaffold, CupertinoButton and CupertinoThemeData with
   generated bindings, package JS, an example and real UI checks. CupertinoNavigationBar
   now preserves ObstructingPreferredSizeWidget with native getter/method forwarding;
   CupertinoPageScaffold accepts it through `navigationBar`.
6. **Maintain the real outside-library pilot.** The external `gap 3.0.1` fixture binds
   `Gap(mainAxisExtent, {key, crossAxisExtent, color})` as `@vendor/flutter-gap` and
   reuses existing Key and Color providers. It verifies separate types/runtime npm
   delivery, host-provided and business-bundled module paths, generated registration,
   Dart analysis, strict TypeScript and real Hermes/V8 host execution. The author
   template remains a separate generation fixture.
7. **Maintain automatic dependency closure.** Explicit selection remains the public API.
   Signature, generic and inheritance dependencies close transitively; same-package
   dependency-only declarations are internal capabilities, and uniquely inferable direct
   dependency providers reuse their Manifest identity without requiring a YAML import.
   Provider surface insufficiency fails with the dependency path and suggested provider
   additions; consumers do not auto-augment provider packages. Broader declaration
   discovery, provider member/value-construction augmentation and full-library/whitelist
   policy remain later work. Mixin composition remains deferred until its final design
   is settled.
8. **Maintain structural Record bindings.** Positional, named and mixed Records recurse
   through the existing TypeRef conversion graph, including nullable fields, typedefs,
   callbacks, collections, Futures and provider-owned object references. TypeScript uses
   readonly object fields; Dart reconstructs real Records. Records carry no wire ID or
   session identity. Manifest 7 owns the Record field schema, while readers 2 through 6
   retain their original fail-closed rules.

Stages 1 through 8 are the current bounded implementation. The bounded expansion
acceptance criteria are met; small fixtures, one Cupertino slice and one real external
package still do not establish whole-library, arbitrary third-party or whole-SDK
coverage.

## Shared-object selection

Core publishes Flutter values through canonical `@flax/flutter/*` public libraries while
the physical runtime remains `@flax/core`. Material selects
`package:material_ui/material_ui.dart` and publishes `@flax/flutter/material`; its
physical implementation package remains `@flax/material-ui`. Consumers read the
provider's public exports and Manifest, without reading its configuration or extending
unselected members.

| Types                                                                                                                    | Public entry             | Owner    | Selected surface and consumers                                                                                                                              | Verification                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Curve, Cubic, Curves                                                                                                     | `@flax/flutter/widgets`  | Core     | Curve.transform; Cubic(a,b,c,d), getters and inherited transform; Curves.linear/ease/easeIn/easeOut/easeInOut; ScrollController.animateTo                   | Strict types; native curve, intermediate/final offsets and Future completion                     |
| MouseCursor, SystemMouseCursor, SystemMouseCursors                                                                       | `@flax/flutter/services` | Core     | MouseCursor.defer/uncontrolled; SystemMouseCursors.basic/click/text/forbidden; InkWell.mouseCursor and ButtonStyle.mouseCursor                              | Strict types; actual mouse events, button states and resolver retirement                         |
| VisualDensity                                                                                                            | `@flax/flutter/material` | Material | horizontal/vertical construction, getters and copyWith; standard/comfortable/compact; ButtonStyle.visualDensity                                             | Strict types; defaults/copies and native layout comparison/update                                |
| ShapeBorder, OutlinedBorder, RoundedRectangleBorder, CircleBorder, StadiumBorder                                         | `@flax/flutter/widgets`  | Core     | OutlinedBorder.side; selected side/borderRadius/eccentricity construction, getters and copyWith; Material.shape, InkWell.customBorder and ButtonStyle.shape | Strict inheritance/negative cases; provider identity, native clipping/layout and state callbacks |
| ScrollPhysics, ClampingScrollPhysics, BouncingScrollPhysics, AlwaysScrollableScrollPhysics, NeverScrollableScrollPhysics | `@flax/flutter/widgets`  | Core     | parent-only construction and inherited parent getter; ListView.builder and SingleChildScrollView physics                                                    | Strict types; defaults, drag rejection, boundaries and parent composition                        |

Curve, ShapeBorder and OutlinedBorder are non-constructible references. Cursor types
have no instance constructor or session creation API; static constant containers have no
instance entry. Existing Border/BoxBorder identity and members are preserved while
adding ShapeBorder ancestry. Border remains valid for BoxDecoration and Material.shape,
but not for a button's OutlinedBorder requirement. Material keeps its native
shape/borderRadius assertion.

ButtonStyle construction, getters and copyWith all select shape, mouseCursor and
visualDensity. The first two preserve `WidgetStateProperty<OutlinedBorder?>?` and
`WidgetStateProperty<MouseCursor?>?`; deferred resolvers validate concrete return
values. No generator/runtime changes, configuration version changes or new lifecycle are
required. Applications still own controller disposal; closing retires callbacks and
pending bridge delivery.

Evidence is in the
[eight real UI tests](../../packages/flax_material_ui/test/ui/shared_objects_test.dart)
and
[strict positive/negative TS cases](../../packages/flax_material_ui/js/test/shared_objects.types.ts).
Manifest and public-provider limits also retain the
[package pipeline](../../packages/flax_codegen/test/package_pipeline_test.dart),
[Manifest](../../packages/flax_codegen/test/manifest_v5_test.dart) and
[public-library](../../packages/flax_codegen/test/capability_additional_libraries_test.dart)
regressions. This slice does not establish complete Flutter SDK or third-party coverage.

The shared-object baseline and its historical acceptance receipts are under the ignored
`.local/shared-objects-20260918-173050/` directory. Run `dart run melos run check`,
`dart run melos run check:ui` and `dart run melos run check:ui:v8` serially after scoped
validation. Each receipt records the actual exit status and log for this round; earlier
unfinished runs do not establish acceptance. Shared runtime and engine implementation
are unchanged, so a separate `check:engines` expansion is not required for this slice.

## Top-level readonly selection

Core exposes `getKIsWeb()` and `getDefaultTargetPlatform()` through
`@flax/flutter/foundation`, with the selected TargetPlatform enum. Material exposes
direct `kToolbarHeight` and `getKTabScrollDuration()` through `@flax/flutter/material`;
Duration retains Core ownership. Independent fixtures supply final/late-final, nullable,
collection, callback and asynchronous results.

Import and installation perform no dynamic reads. Every generated `getX()` call invokes
one Dart read without caching; direct primitive literals are build-safe constants. The
existing function-binding channel preserves initialization, errors, references, generic
callback relationships and session cleanup. App-owned objects are not disposed by
session close. Mutable variables and setter pairs now use the independently selected
accessors described below. Unsupported conversions and special Flutter ownership fail
generation. No new lifecycle, UI protocol or native ABI is introduced.

The
[readonly regressions](../../packages/flax_codegen/test/top_level_readonly_test.dart),
[Legacy Manifest compatibility and current round-trip checks](../../packages/flax_codegen/test/top_level_manifest_test.dart),
[public-provider pipeline](../../packages/flax_codegen/test/package_pipeline_test.dart)
and
[real runtime tests](../../packages/flax_material_ui/test/ui/readonly_values_test.dart)
cover this contract. Provider reexports retain one owner, preserve the provider's
signature, and use its public JS namespace without reading its YAML.

The original Manifest 5 readonly acceptance logs remain under the ignored
`.local/top-level-readonly-20260918-201754/` directory as historical evidence. That run
contained a Hermes relocated-Release timeout and a later scoped navigation-text failure.
They describe the pre-public-library state and are not current blockers.

The Manifest 6 public-library/module-delivery migration was rerun on 2026-09-19.
`dart run tool/check_standalone.dart`, `dart run melos run check:ui`, and
`dart run melos run check:ui:v8` all completed with exit 0. The standalone run covered
packed external package installation, strict TypeScript, loader-based direct imports,
macOS integration, production Release and relocated Release execution. Both aggregate
engine runs include the readonly runtime cases and package examples.

The
[compatibility results](../architecture/external-binding-compatibility.md#top-level-readonly-verification)
own the historical receipt names and the current superseding acceptance. Previous
shared-object or typedef receipts cannot substitute for this slice's runs. See
[ADR 0026](../decisions/0026-top-level-readonly-bindings.md) for the historical Manifest
5 namespace schema and [ADR 0027](../decisions/0027-public-library-module-delivery.md)
for the Manifest 6 public-library contract. Those receipts predate Manifest 7 Record
support and do not substitute for the current Record acceptance.

## Cupertino and external-package pilot

`flax_cupertino_ui` now owns a real `@flax/flutter/cupertino` binding surface for
CupertinoApp, CupertinoPageScaffold, CupertinoButton and CupertinoThemeData. It reuses
Core-owned Flutter values and wire identities instead of creating duplicate providers.
Its scoped package check and Hermes/V8 package integrations all completed with exit 0.
CupertinoNavigationBar now implements its native ObstructingPreferredSizeWidget
contract, including `shouldFullyObstruct(BuildContext)`. Manifest 8 preserves native
override selections and source without adding JS operations. Generic interface
declarations and inaccessible native signatures/defaults remain explicit boundaries.

The disposable external `gap 3.0.1` fixture uses vendor namespace `vendor.gap`, public
types package `@vendor/flutter-gap` and runtime/delivery package
`@vendor/flutter-gap-runtime`. The selected Gap constructor reuses provider-owned Key
and Color types without manually selecting them in the third-party package. Generation,
`validate`, `check`, Dart analysis, strict TypeScript and both npm pack outputs passed.

Two delivery modes were then exercised in real external hosts. When the App provides
Gap, business code installs the declarations only and its bundle resolves Gap through
the host module without embedding the vendor runtime. When the App omits Gap, business
code bundles the runtime implementation while Flax-owned provider modules still resolve
through host shims. Hermes and V8 both rendered a real Gap with `mainAxisExtent: 24` and
`crossAxisExtent: 12` in both modes. A manifest with a deliberately missing Gap Dart
binding fails on both engines with the expected missing/incompatible-binding error, and
a types-only business bundle with no host or bundled implementation fails module
resolution at build time.

This pilot proves the current provider/signature closure and module-delivery
architecture for one real package without an explicit Flax provider import. It does not
prove arbitrary third-party compatibility, provider auto-augmentation, unsupported
conversion support or complete declaration discovery. The temporary direct byte decoding
used by the external Flutter tests only avoids a test-harness `rootBundle.loadString`
large-string stall; it is not a Flax runtime or session-cleanup change.

## Native Widget interface acceptance

Native Widget contracts now select getters, setters and methods through the existing
configuration. Generated hosts forward directly in Dart, including generic methods,
covariant parameters, operators, callbacks, Records and asynchronous values. Concrete
implementation defaults and positional parameter renaming are preserved; native-only
signature types do not become JS exports or binding owners. Generic interface
declarations, inaccessible signatures/defaults and host lifecycle collisions remain
rejected.

Manifest 8 introduced native override metadata; the current Manifest 10 writer strictly
reads formats 2 through 10. All pre-existing owner wire IDs are unchanged. Material no
longer needs a JS dependency row for Size solely to implement preferredSize; the
Core-owned Size binding is unchanged. Configuration format 1, UI protocol 20 and native
ABI 2 are unchanged.

Current macOS arm64 acceptance (2026-09-21):

| Command                                                                    | Exit | Evidence scope                                                                                          |
| -------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| `dart run tool/package.dart check flax_codegen`                            | 0    | Generator tests, declaration compilation, strict TS, Manifest compatibility                             |
| `dart run tool/package.dart check flax_cupertino_ui`                       | 0    | Generated outputs, package/example analysis, JS types and example smoke                                 |
| `dart run tool/package.dart integration flax_cupertino_ui --engine=hermes` | 0    | Native navigation-bar obstruction/layout, updates, session recreation and cleanup                       |
| `dart run tool/package.dart integration flax_cupertino_ui --engine=v8`     | 0    | The same owner scenarios under V8, including the isolated example                                       |
| `dart run melos run check`                                                 | 0    | Final repository generation, tests, analysis, formatting, types, docs, archives and CMake configuration |

The independent native-member fixture additionally verifies direct argument/result
identity, concrete defaults, generic inheritance and conflicting obligations. The six
existing Material Widget-interface UI regressions also pass, preserving native private
Size behavior and zero bridge resources at close. Local fixture ID rewriting preserves
its file imports outside the published Manifest boundary. Shared runtime/native code is
unchanged; these results do not claim additional platform or full SDK coverage.

## Ownership and acceptance

Core owns its selection; UI bindings owns Material and Cupertino; Codegen owns parsing,
models, manifests and emission; Integration owns outside consumers; Architecture owns
new conversion, lifecycle and identity contracts. Sequence shared-checkout generation,
assets and engine checks serially.

For each implemented slice, generate reproducibly, analyze Dart, compile strict
TypeScript, run meaningful regressions and the appropriate package/UI checks. Run both
engines when shared runtime behavior changes. Preserve provider identity, imported
member limits, lazy Stream semantics and application-owned disposal. New declarations
must not silently become `any` or bypass use-site validation.

The bounded expansion acceptance criteria are now satisfied by the Core/Material slice,
the tested Cupertino slice and the real `gap 3.0.1` external host pilot. No full-SDK,
whole-library, arbitrary third-party, release, security-sandbox or other-platform claim
is part of that acceptance.

## Remaining design questions

Track the decisions in [Open Questions](../decisions/open-questions.md). Proposed
blacklist granularity includes declaration, member and annotation rules; none is an
accepted YAML API. Public-barrel selection is currently explicit. Automatic dependency
closure does not turn dependency-only declarations into public API and does not import
SDK private libraries. Package ownership does not by itself settle provider augmentation
or version conflicts.

Runtime module loading, hot replacement, restoration, deep-link registration, other
platforms, transport extensions and public distribution remain separate work in the
relevant architecture documents and Open Questions. Canvas expansion is not implied by
this binding task.

## Extension adapter acceptance

Public named extensions now have independent `extensions` selections, receiver-first TS
namespaces and explicit Dart overrides. Generic scopes, getters/setters, static members
and legal operators reuse existing recursive conversions. Manifest 9 records extension
signatures and per-operation function identities without object ownership. Public
library re-exports and downstream manifest-only selections reuse providers; provider
surfaces cannot be widened. Dart's prohibition on extension Object members (including
`==`) remains an explicit rejection.

The current acceptance commands all exited 0 (2026-09-21):

| Command                                         | Exit | Scope                                                                                               |
| ----------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------- |
| `dart run tool/package.dart check flax_codegen` | 0    | Generator package analysis and tests                                                                |
| `dart run tool/package.dart check flax`         | 0    | Core generation, JS, analysis and example smoke                                                     |
| `dart run melos run check`                      | 0    | Repository generation, unit tests, analysis, types, docs, package archives and native configuration |

The final targeted extension and legacy-reader regressions also passed. The targeted
fixture covers strict TS compilation, generated Dart execution, nullable/Record/enum
receivers, aliases, callback and async conversion, bounds, shadowed generics, operation
collisions and malformed selections. No runtime/native implementation changes are
required. Existing owner/reference wire identity rows are unchanged in all four SDK
provider manifests; Hermes/V8 UI checks were not needed for this generator-only change.
Mutable top-level access is implemented by the following slice; discovery and
full-library selection remain deferred.

## Mutable top-level access

Configuration format 1 selects reads and writes independently through `topLevel.getters`
and `topLevel.setters`. Mutable variables, explicit getter/setter pairs and setter-only
declarations use module-level `getX()` / `setX(value)` calls. The actual Dart accessor
signatures determine each direction. Readonly writes, private declarations, unsupported
ownership positions and generated-name collisions fail explicitly.

Manifest 10 adds setters and mutable read classification; strict versions 2 through 9
retain their old schemas. Setter source names use `name=` and function wire identity;
existing getter identities are unchanged. Public routing, input dependency closure and
provider references reuse existing pipelines. Consumers cannot widen an imported
provider's readable or writable surface. The module delivery tool includes setter
operations in required Dart bindings.

Focused tests cover configuration, actual generated Dart reads/writes and errors,
TypeScript typing/dispatch, provider references and strict Manifest compatibility. The
mechanism matrix was rerun with all 13 tests passing. Final acceptance on 2026-09-21:

| Command                                         | Exit | Scope                                                                                                                                            |
| ----------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dart run tool/package.dart check flax_codegen` | 0    | Package analysis and 451 generator tests at the scoped checkpoint                                                                                |
| `dart run tool/package.dart check flax`         | 0    | Core generation consistency, JS build/types, fixture and example smoke                                                                           |
| `dart run melos run check`                      | 0    | Final frozen sources: 453 generator tests, other package/tooling tests, analysis, formatting, strict TS, docs, archives and native configuration |

Logs and machine-readable exit results are retained in
`.local/mutable-top-level-20260921-181750/`. The initial generation delivery-version
failure and first full-check mixed-snapshot failure are retained separately from the
successful final run. Final source hashes match the frozen inputs; all four SDK provider
manifests retain their previous identity rows. No runtime/native code changed, and no
fresh Hermes/V8 UI certification is claimed by this static acceptance.

## Generic bound-only references

`RecursiveBox<ComparableLeaf>` now has a successful Dart/TS regression, alongside
dependent and custom recursive bounds, generic methods, callbacks/Records at concrete
use sites and typedefs. Manifest 11 and provider projection retain source identity
without owning the constraint. Concrete specialization of generic Extension receivers
remains intentionally outside the current scope. Generic callbacks with erasable bounds
remain supported; callback erasure that would require concrete runtime specialization is
intentionally deferred and fail-closed. Automatic concrete specialization discovery,
generalized deferred-factory inference, Widget-returning Context callbacks, mixin
composition and declaration discovery remain separate work.

Final acceptance on 2026-09-21:

| Command                                         | Exit | Scope                                                                                                                                                        |
| ----------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dart run tool/package.dart check flax_codegen` | 0    | Package analysis and 458 generator tests, including generated Dart/strict TS and Manifest-only provider regression                                           |
| `dart run tool/package.dart check flax`         | 0    | Core generation consistency, JS build/types, fixture and example smoke                                                                                       |
| `dart run melos run check`                      | 0    | Generation, 458 generator tests and other package/tooling tests, analysis, formatting, strict TS, docs, archives, outside consumers and native configuration |

Machine-readable exit results and logs are retained in
`.local/bound-type-only/acceptance.json` and its directory. The first workspace attempt
stopped at an obsolete module-delivery assertion that treated Manifest 11 as unknown;
the corrected regression accepts 10/11 and rejects 12. That failed attempt is retained
separately from the successful final run.

Frozen generator inputs match the scoped and final workspace runs. All four SDK provider
manifests retain their previous identity rows. No runtime/native implementation or
lockfile changed in this slice; Hermes/V8 UI checks were not run. The acceptance-record
edit after the final run was checked separately for formatting and documentation links.
