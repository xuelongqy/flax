# Binding Coverage Map

This is the current capability inventory for `flax_codegen`, not a percentage of the
Flutter SDK. [Binding Generation](bindings.md) defines selection and conversion rules;
the [active backlog](../tasks/binding-coverage-expansion-v1.md) tracks unfinished work.
A declaration being visible to analyzer, a generated file compiling, and a binding
passing real runtime tests are different levels of evidence.

The version domains are configuration format **1**, Manifest writer **11** with strict
readers **2/3/4/5/6/7/8/9/10/11**, UI protocol **20**, and native ABI **2**. Supported
legacy manifest schemas retain their original restrictions. They do not enable older UI
protocols.

## Status vocabulary

| Status                 | Meaning                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Supported              | Implemented and covered by the linked regressions for the stated surface.                                                                      |
| Requires configuration | Existing conversion works when public libraries, members, providers and semantic roles are explicitly selected. It is not automatic discovery. |
| Deferred               | Intentionally unsupported in the current contract because the implementation cost is not justified by demonstrated API coverage.              |
| Generator gap          | A selected declaration or signature still lacks parsing, modeling, emission or conversion support.                                             |
| Design undecided       | The intended semantics or product configuration have not been accepted.                                                                        |
| Not verified           | Available evidence does not establish the broader claim.                                                                                       |

## Language and declaration support

| Surface                                            | Status                 | Current boundary                                                                                                                                                                                                                                                                             |
| -------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Classes, constructors, static and instance members | Requires configuration | Select the public members and parameters to expose. Inherited instance selections use analyzer-resolved subtype signatures; constructors and static members stay local.                                                                                                                      |
| Class modifiers and extension-type references      | Requires configuration | Modifier fixtures and selected extension-type fields/getters/parameters compile. Extension-type discovery is not a general automatic proposal path.                                                                                                                                          |
| Non-constructible mixin members                    | Requires configuration | Existing object/member selection can expose members. This does not implement Dart mixin application, construction or general mixin proxies.                                                                                                                                                  |
| Mixin composition and `mixin class` application    | Design undecided       | Deferred. Do not infer composition support from member selection or internal generated host mixins.                                                                                                                                                                                          |
| Enums                                              | Requires configuration | Existing selected enum values and typed conversion are supported. General discovery/export of every enum member is not implemented.                                                                                                                                                          |
| Top-level functions                                | Requires configuration | The `functions` surface emits named exports and typed calls, including supported callbacks and Futures. Route-producing functions need explicit lifetime roles and observer installation.                                                                                                    |
| Basic and generic typedefs                         | Supported              | `typedefs` emits directional `Name`/`NameInput` types, alias-owned parameters and function-local generic callbacks. Targets must already be representable.                                                                                                                                   |
| Top-level readonly declarations                    | Supported              | Explicit `topLevel` selections export at the owning public library. Safe primitive consts may be literal exports; dynamic/object/final/late-final/getter values use uncached `getX()` reads. Existing conversions and provider identity apply.                                               |
| Mutable top-level variables and setters            | Supported              | Independent `topLevel.getters` / `setters` generate uncached reads and synchronous writes. Setter-only exports, actual accessor signatures, provider reuse and Manifest 10 preserve Dart state and existing call semantics.                                                                  |
| Extension declarations and extension methods       | Supported              | Explicit named extension adapters support instance/static members, setters, generics and legal operators through receiver-first functions. No prototype mutation or extension instance identity; extension types and Widget/lifecycle positions remain separate.                             |
| Records                                            | Supported              | Positional, named and mixed Records use readonly structural TypeScript objects and real Dart Record reconstruction. They recurse through existing nullable/generic/callback/collection/Future/provider conversions, carry no wire/session identity, and are encoded by Manifest 7 and later. |

Typedefs include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`. Real
Flutter `ValueChanged<T>` and `ValueGetter<T>` are selected in Core. Aliases have no
runtime constructor, extra wire ID or independent ownership of their target.

Evidence: [typedef tests](../../packages/flax_codegen/test/typedef_test.dart),
[mechanism tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart),
[Core selection](../../packages/flax/bindings/config.yaml), and
[Codegen tests](../../packages/flax_codegen/test/).

## Types, conversion and lifetime

| Surface                                                 | Status                 | Current boundary                                                                                                                                                                                          |
| ------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scalars, selected objects and enums                     | Supported              | Ordinary Dart values retain real references and declared conversion; copied navigation data is explicit.                                                                                                  |
| Core DateTime, Uri and StringBuffer providers           | Supported              | Core owns a minimal selected surface, alongside Duration and TextRange. Consumers reuse that surface and cannot expand an imported owner's members.                                                       |
| Inherited `void` getters                                | Supported              | The getter evaluates once, propagates errors and returns JS `undefined`, including generic inheritance instantiated with `void`.                                                                          |
| List, Map, Iterable and Set                             | Supported              | Typed views preserve Dart identity; explicit copies have shape/cycle rules. Direct `List<Widget>` callbacks are supported; Map callback keys and other Widget collection callback shapes remain rejected. |
| Callback parameter forms and directions                 | Supported              | Required/optional positional and named parameters, returned functions and supported generic callbacks share typed adapters and omission rules.                                                            |
| Generic relationships                                   | Supported              | TS preserves type relationships; Dart uses supported upper-bound erasure and checks concrete use sites. Explicit TS arguments do not create Dart runtime type tokens or promise identical Dart inference. |
| Bound-only recursive/dependent constraints              | Supported              | Manifest 11 type-only identities preserve nominal relationships without runtime owners. Explicit class/method specializations and type aliases are covered; value conversion remains separate.            |
| Recursive, unbound or nonconvertible callback erasure   | Deferred               | Fail closed when a callback would need concrete runtime specialization instead of supported upper-bound erasure. Ordinary higher-rank callbacks with erasable bounds remain supported.                    |
| Single concrete class/mixin use-site specialization | Supported | `proposeSelection` can infer one complete representable specialization from observed `InterfaceType` uses. Explicit `typeArguments` win. |
| Global or multiple concrete generic specialization discovery | Deferred | No whole-graph enumeration or multiple bindings per declaration. Conflicts and unsupported uses stay explicit. |
| Futures, FutureOr and Dart Streams                      | Supported              | Supported parameters, results, callbacks and typed collections use protocol 20. Stream wrapping is lazy; applications own their controllers and sinks.                                                    |
| Nested Future/FutureOr completion values                | Supported              | Direct async chains preserve declared type/value semantics across native Promise assimilation; Future/FutureOr values inside collection, Map and Record fields remain independent async values.           |
| Native Widget interface members                         | Supported              | Explicit getters, setters, methods, generic methods and operators forward in Dart. No JS member exposure; generic interface declarations and inaccessible signatures remain excluded.                     |
| Flutter Context, builders, Routes and Widget interfaces | Supported with Flutter-specific semantics | Automatic library binding reuses provider-owned Context types and infers mounted synchronous `Widget` / `Widget?` / `List<Widget>` callback results from Widget constructor position; `BuildContext` is not required for ownership inference. Supported non-generic Widget interfaces are attached automatically. Route/page/session roles and observers remain explicit. |
| Async build/lifecycle and unsupported Widget traffic    | Generator gap          | Build, Route factories and lifecycle callbacks stay synchronous. Widget collection mutation, non-List Widget callback collections and proxy Widget properties remain unsupported.                         |
| Deferred generic factories                              | Requires configuration | Explicit synchronous static factories infer every parameter from concrete selected uses; generic inputs are limited to supported direct synchronous callbacks.                                            |
| Generalized deferred-factory inference                  | Deferred               | Factories whose result does not determine every type parameter, or whose generic inputs require collection, Future, Widget, Route, Context or lifecycle inference, remain fail-closed.                    |
| General core types and rendering dependencies           | Not verified           | Minimal providers do not establish support for every `dart:core` type, every value constructor, `vsync` owner, painting delegate, Route position or SDK class.                                            |

Evidence: [interop contract](interop.md), [object lifetime](objects.md),
[generic inheritance tests](../../packages/flax_codegen/test/capability_combined_getter_test.dart),
[provider tests](../../packages/flax_codegen/test/bindability_test.dart), and
[real UI regressions](../../packages/flax/test/ui/codegen_basics_test.dart).

Dependent generic defaults preserve their preceding TS parameters rather than using
broader Dart-erased defaults. Explicit TS arguments are covered by generated Dart/TS
compilation and Dart construction in the
[bounded generic tests](../../packages/flax_codegen/test/generic_and_defaults_test.dart).
The [selection tests](../../packages/flax_codegen/test/bindability_test.dart) cover
direct `List<Widget>` callback arguments/setters while keeping deferred collection and
proxy positions fail-closed. [Native callback tests](../../packages/flax/test/ui/native_callbacks_test.dart)
cover invocation-owned builders and bidirectional `List<Widget>` callback traffic while
rejecting Widget collection insertions and replacements without changing the existing
collection.

## Discovery, emission and package composition

| Capability                                             | Status                 | Remaining work                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Explicit format-1 selection and public library routing | Requires configuration | `additionalLibraries` closes known analyzer/export gaps. `publicLibraries` maps originating public Dart libraries to canonical JS/TS entry points and rejects conflicting ownership. No generated private SDK imports.                                                                                                                                                                                                                                                             |
| `proposeSelection` / `proposeLibrary`                  | Supported              | `proposeSelection` handles one class/mixin. `proposeLibrary` inventories one public export namespace, returns an inferred config plus skip/notice diagnostics, and preserves explicit override precedence. |
| Automatic dependency closure                           | Supported              | Selected value signatures, runtime defaults and runtime inheritance close transitively. Bound-only declarations do not create runtime owners. Same-package dependencies may become internal generated capabilities without becoming public exports; uniquely inferable direct-dependency providers reuse their Manifest identity without a YAML import. Provider member/value-construction augmentation, unsupported conversions and unsupported semantic roles still fail closed. |
| Automatic function, enum, alias and top-level discovery | Supported             | `--library` discovers supported functions, enums, typedefs, const/final/getters and setters from the selected public export namespace. Unsupported declarations are skipped independently. |
| Annotation-aware selection                             | Supported              | Automatic mode excludes private, `@internal`, `@visibleForTesting`, and `@protected` declarations/members. Deprecated API remains selected and produces an informational notice. |
| Unique concrete generic specialization                 | Supported              | One complete representable specialization may be inferred from observed public use sites. Conflicting, unresolved, or nested runtime specializations are skipped unless an explicit override supplies the type arguments. |
| Automatic public-barrel routing                        | Supported              | One `--library package:...` invocation defines the canonical public entry. Re-exports from `lib/src/` are discovered through that barrel; direct `package:.../src/...` targets are rejected. Cross-barrel canonical arbitration is deferred. |
| Optional omission                                      | Supported              | Direct calls preserve Dart defaults and explicit null. Independent `omitWhenAbsent` parameters produce exponential branch growth; a scalable replacement remains open.                                                                                                                                                                                                                                                                                                             |
| Manifest ownership and lexical generic scopes          | Supported              | Writer 11 and strict readers 2/3/4/5/6/7/8/9/10/11 preserve originating declarations, alias scopes, readonly exports, public-library routing, Record fields and provider ownership. Consumers use public entries and dependency manifests, without provider YAML.                                                                                                                                                                                                                  |
| Package-atomic CLI and registration                    | Supported              | `validate`, `generate`, and `check` accept either explicit `--config` or best-effort `--library`. Automatic mode keeps the same package ownership, manifest, output planning, and atomic install/check pipeline. |
| Optional automatic overrides                           | Supported              | `bindings/overrides.yaml` changes only named class/function exception fields or excludes named declarations. It carries no library/output/package routing and is ignored by explicit config discovery. |
| Package-wide all/whitelist product modes               | Deferred               | Automatic mode intentionally binds one requested public library at a time. Package-wide enumeration, multi-barrel arbitration, and broader whitelist products wait for repeated real-package demand. |
| Broader package/project binding management             | Design undecided       | Public-library partitioning, application module inventory, plugin-selected host injection and business-bundled fallback are implemented. Provider augmentation, ambiguous provider/version ownership conflicts, and broader authoring automation remain open. |

Evidence:
[additional-library tests](../../packages/flax_codegen/test/capability_additional_libraries_test.dart),
[value-closure probes](../../packages/flax_codegen/test/capability_value_closure_test.dart),
[manifest tests](../../packages/flax_codegen/test/manifest_v5_test.dart), and
[manifest-only package tests](../../packages/flax_codegen/test/package_pipeline_test.dart),
[automatic CLI tests](../../packages/flax_codegen/test/cli_test.dart), and
[automatic proposal tests](../../packages/flax_codegen/test/bindability_test.dart).
Historical census artifacts are exploratory samples of older inputs. Their counts,
percentages and first-failure diagnoses are not current coverage measurements. Use the
checked-in [capability tools](../../packages/flax_codegen/tool/) and small fixtures to
reproduce a disputed boundary before expanding a selection.

The additional-library regressions compile public-barrel consumers and execute generated
value construction. Imported providers retain their published constructor/member limits
and canonical identity. The
[omission regression](../../packages/flax_codegen/test/generic_and_defaults_test.dart)
executes all 64 combinations for six independently omitted nullable parameters with
non-null defaults, alongside the existing three-parameter case. Proposal selection caps
these parameters at six; explicit generation still has exponential branch growth.

### Reproducing a disputed capability

From `packages/flax_codegen`, run the relevant small fixtures before making a new
coverage claim:

```sh
dart test test/typedef_test.dart test/mechanism_coverage_test.dart \
  test/capability_combined_getter_test.dart \
  test/capability_additional_libraries_test.dart \
  test/capability_value_closure_test.dart
```

From the repository root, `dart run melos run bindings:check` verifies current generated
output and the complete generator suite. The experimental
[`capability_verify.dart`](../../packages/flax_codegen/tool/capability_verify.dart)
supports `--stage2-mechanisms` for a bounded mechanism report and explicit `--entry`,
`--stage3-library`, `--stage3-additional-libraries` and `--closure-probe` workflows for
larger investigations. Its source documents the required input/output options. These
flags are investigation tools, not accepted product selection modes. The
[`bindability_census.dart`](../../packages/flax_codegen/tool/bindability_census.dart)
study estimates static ceilings; it does not replace generation, compilation or runtime
checks. Do not carry historical exclusion lists into a new measurement without
reproducing their failures.

Mutable access evidence:
[accessor regressions](../../packages/flax_codegen/test/top_level_mutable_test.dart)
compile strict TypeScript and execute generated Dart adapters;
[Manifest 10 tests](../../packages/flax_codegen/test/top_level_setter_manifest_test.dart)
verify old-version rejection, getter identity and provider projection. JavaScript
dispatch tests cover import-time zero calls and host error forwarding. They do not claim
fresh Hermes/V8 session certification; the shared runtime implementation is unchanged.

## Selected packages and evidence limits

Core exports `getKIsWeb()` and `getDefaultTargetPlatform()` from
`@flax/flutter/foundation`, with the `TargetPlatform` enum. Material exports the direct
`kToolbarHeight` literal and `getKTabScrollDuration()` from `@flax/flutter/material`,
using Core's Duration provider. Mutable declarations expose independently selected
`getX()` / `setX(value)` functions. The
[readonly fixtures](../../packages/flax_codegen/test/top_level_readonly_test.dart),
[strict manifest cases](../../packages/flax_codegen/test/top_level_manifest_test.dart)
and [real UI tests](../../packages/flax_material_ui/test/ui/readonly_values_test.dart)
cover readonly selection, import-time zero reads, repeated reads, Dart initialization,
errors, returned references/callbacks/Futures and session cleanup. This explicit surface
does not imply automatic discovery or a writable namespace.

The four readonly runtime cases passed in both Hermes and V8 framework suites on
2026-09-18 (UTC+8). The full static and V8 UI aggregates passed. Hermes full UI
acceptance remains open after a standalone relocated Release timeout and a subsequent
scoped debug navigation failure; retain the separate outcomes in
[readonly verification](external-binding-compatibility.md#top-level-readonly-verification).

Core contains selected Flutter layout, text, navigation, components, editing,
collections and dart:async APIs. The small layout addition is Spacer (`key`, `flex`).
Material binds `package:material_ui/material_ui.dart` and reuses Core identities; its
small surface addition selects MaterialType, Material, InkWell and
LinearProgressIndicator. CircularProgressIndicator was already selected.

The shared-object selection adds Core Curve/Cubic/Curves, MouseCursor/SystemMouseCursor
constants, ShapeBorder/OutlinedBorder with RoundedRectangleBorder/CircleBorder/
StadiumBorder, and five ScrollPhysics classes exposing parent. Material owns selected
VisualDensity construction, getters, copyWith and constants. These are ordinary objects
and inherited members; no new parser, emitter, runtime or protocol mechanism is needed
for this slice. Constructors and static containers remain explicitly bounded.

Consumers select ScrollController.animateTo, physics on ListView.builder and
SingleChildScrollView, Material.shape, InkWell.mouseCursor/customBorder, and
ButtonStyle.shape/mouseCursor/visualDensity in construction, getters and copyWith.
Material imports Core identities rather than registering duplicate shared objects.
Existing Border/BoxBorder retain their capabilities and satisfy ShapeBorder, while
button shape requires OutlinedBorder. State-property results retain concrete Dart
use-site validation. See the
[exact dependency table](../tasks/binding-coverage-expansion-v1.md#shared-object-selection)
and [styles contract](styles.md#shapes-cursors-and-density).

The
[shared-object UI tests](../../packages/flax_material_ui/test/ui/shared_objects_test.dart)
cover native layout/clipping comparisons, actual cursors and button states, animation
positions/Future delivery, scroll physics and cleanup. The
[strict TS cases](../../packages/flax_material_ui/js/test/shared_objects.types.ts) cover
constructors, defaults, copies, nullable values, inheritance and negative provider
member/type cases. This does not expose Animation, TickerProvider, custom painting
delegates or general mixin composition.

The
[combined slice tests](../../packages/flax_material_ui/test/ui/binding_slice_test.dart)
cover native layout comparison, input callbacks and retirement, progress updates and
indeterminate transitions, inherited/explicit styling and accessibility semantics. These
are selected constructor surfaces, not complete component APIs. Icon/IconData remain
deferred pending an explicit release-safe icon/font policy; debug rendering alone would
not establish release icon tree-shaking behavior. Canvas owns a deliberately narrow
surface.

Cupertino now has a bounded production selection in `@flax/flutter/cupertino`:
CupertinoApp, CupertinoPageScaffold, CupertinoButton and CupertinoThemeData.
CupertinoNavigationBar additionally implements ObstructingPreferredSizeWidget through
native `preferredSize` and `shouldFullyObstruct(BuildContext)` forwarding. Its package
tests cover obstruction-driven layout and configuration replacement.

The external `gap 3.0.1` pilot binds
`Gap(mainAxisExtent, {key, crossAxisExtent, color})` as `@vendor/flutter-gap`, reusing
Core provider identities for Key and Color. Separate declaration and runtime packages,
host-provided and business-bundled delivery, and real Hermes/V8 execution all pass for
this bounded case. Missing Dart bindings fail explicitly on both engines, and a
types-only build with no implementation fails module resolution. See the
[compatibility matrix](external-binding-compatibility.md#real-third-party-pilot-gap-301).

Automatic dependency closure now turns selected APIs into a deterministic dependency
graph. Same-package signature, generic and inheritance dependencies can be generated as
internal capability, while direct dependency providers reuse stable Manifest identity;
dependency-only declarations do not become public TS exports. Provider surface requests
fail closed with a dependency path and suggested provider additions instead of silently
expanding another package.

Generic bound-only interfaces are supported by Manifest 11 without a runtime owner, wire
ID or member surface. `RecursiveBox<ComparableLeaf>`, dependent bounds, custom recursive
interfaces, selected generic methods/functions and generic typedefs retain nominal TS
relations. Value positions still require conversion bindings, and Dart analyzer subtype
checks remain authoritative for concrete specializations. See
[bound regressions](../../packages/flax_codegen/test/bound_type_only_test.dart) and
[provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart).

Generic extension receiver specialization is an explicit unsupported boundary. Extensions
whose type parameters can be erased to valid default or upper-bound Dart types remain
supported; recursive or otherwise non-erasable receiver bounds that require a concrete
Dart specialization fail closed. Flax does not require users to enumerate those
specializations and does not automatically derive them from the binding type graph.
Higher-rank callbacks with erasable bounds remain supported; callback erasure that would
require concrete runtime specialization is deferred. The bounded mechanism matrix also
retains method callbacks returning Widgets through BuildContext. Declaration discovery,
full-library selection, mixin composition and generic Widget-interface declarations
remain separate work.

The [compatibility matrix](external-binding-compatibility.md) separates in-repository
Hermes/V8 acceptance, outside-template generation/type checking, historical canaries and
the bounded real Gap pilot. None establishes complete Flutter SDK coverage, arbitrary
third-party-library support, other platforms or a public release commitment.
