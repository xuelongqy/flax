# Binding Coverage Map

This document describes the current `flax_codegen` language and Flutter-semantic
contract. It is a mechanism map, not a percentage of the Flutter SDK. A declaration can
be supported by the generator while a particular SDK library still needs its own binding
selection and runtime verification.

The current version domains are binding selection format **2**, package metadata format
**2**, Manifest **17**, UI protocol **24**, and native ABI **2**. Only the current
formats are read and written.

## Capability assessment model

Every declaration in a public-library inventory receives one verdict. Provider reuse is
recorded as a source, not as a capability level.

Core is reused by default. Outside Core, independent packages may bind the same Dart
declaration. Automatic selection reuses one adequate dependency provider; missing,
insufficient or ambiguous providers produce a complete local binding. Typed results
follow the selected signature, while erased results retain their originating package
through callbacks, Futures, collections and Streams. Cross-package views check actual
Dart types and share disposal and listeners. See
[ADR 0037](../decisions/0037-package-scoped-binding-providers.md).

Class static reads and writes are independent capabilities on every supported class
category. Reads use `Class.property`; writes use `Class.setProperty(value)`. They retain
their own types and operation identities in Manifest 17. Static declarations are not
inherited; a read-only provider cannot supply a write. A generated setter name collision
fails explicit selection or produces `static_setter_export_collision` in automatic
selection. See [static property rules](bindings.md#class-static-properties) and the
[generator regression](../../packages/flax_codegen/test/static_accessors_test.dart).

| Field        | Values                                                                                                                      | Meaning                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `verdict`    | `supported`, `limited`, `unsupported`, `excluded`, `environmentBlocked`                                                     | The usable capability result.                  |
| `reasonKind` | `none`, `automationGap`, `generatorGap`, `configurationRequired`, `intentionalBoundary`, `dependencyBoundary`, `visibility` | Why a non-supported result exists.             |
| `source`     | `automatic`, `explicit`, `provider`, `inventory`                                                                            | Which route established the result.            |
| `stages`     | `automatic`, `explicit`, `parse`, `emit`, `compile`                                                                         | Independent evidence for each generator stage. |

`environmentBlocked` is reserved for an unavailable analyzer, compiler, SDK, or tool. It
does not stand in for an unknown capability. Every declaration receives a verdict.
Unnamed extensions are inventoried and classified as `excluded` because they have no
stable public binding name.

The closure gate requires zero unexplained `automationGap` and `generatorGap` entries.
An intentional boundary remains valid only when it has a stable code and a regression
fixture.

## Declaration support

Bound class exports provide authenticated `Symbol.hasInstance` checks and TypeScript
narrowing across selected parent/interface/mixin views. Sealed parents retain their
legal factories and can discriminate selected public children; no illegal Dart proxy or
closed exhaustive TS union is generated. Checks add no Dart call. Generic arguments,
parent-only/provider views and descriptor-only values have the explicit
[instance-check limits](bindings.md#limits-of-javascript-instanceof).

| Declaration                                    | Verdict     | Current contract                                                                                                                                                                                                               |
| ---------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Class and abstract class                       | Supported   | Automatic and explicit selection cover constructors, getters, setters, static members, methods, inheritance, generic owners, and representable callbacks. Abstract construction still requires a valid generated proxy.        |
| Class operators                                | Supported   | Representable ordinary object operators use explicit JS aliases; legal extends/implements proxies can override them. Equality is opt-in and requires hashCode on proxies; JS arithmetic and collection identity are unchanged. |
| Mixin and mixin class members                  | Supported   | Ordinary member surfaces can be selected and emitted. Applying mixins to generated classes is a separate capability.                                                                                                           |
| Arbitrary mixin composition                    | Unsupported | Real Dart composition is generated only for fixed Flutter State `proxyVariants`. Runtime-selected or general class mixin composition is outside the contract.                                                                  |
| Ordinary enum                                  | Supported   | Enum values and typed conversion are discovered automatically.                                                                                                                                                                 |
| Enhanced enum                                  | Supported   | Public fields, accessors, methods, statics, named factories and operators use typed shared dispatch. Generic constants keep closed types; no JS construction, subclass or proxy is generated.                                  |
| Typedef                                        | Supported   | Basic, generic, callback, collection, Record, Future/FutureOr, Stream, and nested targets retain their declared relationships when the target is representable.                                                                |
| Top-level function                             | Supported   | Synchronous, Future, Stream, callback, default-parameter, and safely erasable generic signatures are discovered automatically. Concrete generic calls use existing `typeArguments` configuration when erasure is not safe.     |
| Const, final, getter, mutable variable, setter | Supported   | Reads and writes are assessed independently. Dynamic values use uncached accessors; mutable values keep Dart state.                                                                                                            |
| Named extension                                | Supported   | Receiver views (`StringX('a').repeat(3)`) are discovered automatically. Getters, setters, static members, operators, callbacks and async values reuse ordinary conversion, including Context and supported Flutter references. |
| Generic extension                              | Limited     | Analyzer-proven upper-bound erasure is supported. A receiver that needs concrete runtime specialization is rejected (`generic_receiver_specialization_required`).                                                              |
| Unnamed extension                              | Excluded    | It has no stable exported binding name (`unnamed_extension`).                                                                                                                                                                  |
| Extension type                                 | Limited     | Parameters and results use the representation type. No independent runtime object identity or owner is created (`extension_type_representation_only`). Unrepresentable representations fail closed.                            |

Automatic proposal covers `classes`, `types`, `typedefs`, `functions`, `extensions`, and
`topLevel` selections from the same public inventory. Annotation filtering excludes
private, `@internal`, `@protected`, and `@visibleForTesting` surfaces. Deprecated public
API can still be selected and produces a notice.

Evidence:
[automatic proposal tests](../../packages/flax_codegen/test/bindability_test.dart),
[inventory tests](../../packages/flax_codegen/test/capability_inventory_test.dart),
[extension tests](../../packages/flax_codegen/test/extension_test.dart),
[enum tests](../../packages/flax_codegen/test/enum_test.dart), and
[mechanism tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Type and signature support

| Type mechanism                        | Verdict   | Current contract                                                                                                                                                                                                        |
| ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nullable values                       | Supported | Nullability is recursive and preserved through Manifest round-trip and TypeScript emission.                                                                                                                             |
| List, Map, Set, Iterable              | Supported | Ordinary API positions preserve element/key/value types and real Dart references. Callback map keys must remain representable.                                                                                          |
| Record                                | Supported | Positional, named, and mixed Records recurse through callbacks, collections, async values, typedefs, and generics.                                                                                                      |
| Future and FutureOr                   | Supported | Parameters, results, callbacks, nested collections, and returned callbacks use Promise/Future conversion without inventing ownership.                                                                                   |
| Dart Stream                           | Supported | Parameters, results, callbacks, controllers, subscriptions, operators, and nested types preserve Dart stream semantics. Applications own their controllers; bridge-owned subscriptions are cleaned up with the session. |
| Callback and returned callback        | Supported | Required/optional positional and named parameters, recursive results, typedef callbacks, and safely erasable generic callbacks share the same TypeRef validation.                                                       |
| Recursive combinations                | Supported | The same recursive TypeRef rules apply to constructors, getters/setters, methods, top-level functions, callbacks, typedefs, inherited members, and dependency closure.                                                  |
| Shared generic owner                  | Supported | Dart uses `Object?` or an Analyzer-proven public fully closed bound; TypeScript keeps the declared generic relationship.                                                                                                |
| Generic constructor specialization    | Limited   | Every class type parameter must come from required direct input, Analyzer must provide concrete use sites, bounds must pass, and JS runtime domains must be disjoint.                                                   |
| Generic method/top-level function     | Limited   | Safe bound erasure is automatic. Concrete runtime specialization uses existing explicit type arguments. No runtime type token is introduced.                                                                            |
| Provider-owned nominal type           | Supported | A dependency Manifest owner is a recursion boundary. The consumer preserves identity, nullability, and type arguments without expanding provider inheritance.                                                           |
| Public carrier and dependency closure | Supported | Declaration identity chooses a same-package public carrier. Same-name different identities fail closed. Dependency-only types stay internal in automatic mode.                                                          |

Default omission preserves missing/`undefined` separately from explicit `null`. Up to
five independently omitted parameters use direct calls; six or more use `Function.apply`
without trimming the selected surface. Optional positional parameters keep linear tail
dispatch and reject holes.

The generator does not infer `T` from callback results, `List<T>` contents, nested
object contents, or a runtime `Type` token. Overlapping runtime domains such as `num`
and `int` are rejected. Dependent or recursive bounds without concrete evidence are
rejected.

Evidence:
[recursive type tests](../../packages/flax_codegen/test/recursive_type_automation_test.dart),
[generic tests](../../packages/flax_codegen/test/generic_and_defaults_test.dart),
[constructor specialization tests](../../packages/flax_codegen/test/concrete_generic_specialization_test.dart),
[provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart), and
[Record tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Flutter semantic support

| Semantic position                                                | Verdict   | Current contract                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Widget constructor value                                         | Supported | Widget inputs retain the normal Flutter tree and ownership rules.                                                                                                                                                                                                                                                                                                 |
| Mounted callback returning Widget or a selected Widget interface | Supported | Ordinary typed result conversion preserves native identity and selected interfaces, including nullable results, supported Futures/Streams and direct typed lists. Escaped configurations follow Dart references and GC; mounted subscriptions release at unmount.                                                                                                 |
| Ordinary callback with Context arguments                         | Supported | Functions, constructors, methods and returned Dart functions call JS directly with the actual native Context; indexed, named and optional arguments, nullable Widget results and supported Futures use shared conversion. No extra content host or inferred Route ownership.                                                                                      |
| Direct Context input and result                                  | Supported | Functions, members, top-level variables/getters and callbacks share weak borrowed Context identity, including null, typed finite aggregates and Future/FutureOr/Stream results. Shared conversion preserves derived collection reads and registered Record fields. Forged, foreign-session and unmounted values are rejected, including late events.              |
| Async mounted Widget result                                      | Supported | Future/FutureOr/Stream reuse typed conversion for individual Widgets, selected interfaces and finite Widget aggregates. Completion promotes each configuration before temporary holds are released.                                                                                                                                                               |
| Finite Widget callback aggregates                                | Supported | List/Set/Map/Record and Iterable signatures accept finite JS arrays/Sets or compatible Dart Lists/Sets, including nullable values and supported async compositions. Actual lazy iterators fail conversion before iteration; ordinary native method views stay lazy.                                                                                               |
| Flutter State lifecycle                                          | Supported | Flutter creates the real Dart State host. JS implements the Flutter lifecycle and makes explicit super calls. Flax does not automatically dispose application resources.                                                                                                                                                                                          |
| State inputs and callbacks                                       | Supported | Explicit and automatic functions, methods and callbacks share borrowed State conversion. Native wrappers and live JS State hosts retain real Dart identity. Returned/nested callbacks, nullable aggregates and supported Future/FutureOr/Stream compositions check validity at invocation or delivery. Forged, foreign-session and unmounted values are rejected. |
| State/Widget properties and top-level values                     | Supported | Instance/static properties and global variables share ordinary State read/write and Widget write conversion, including nullable values. Dart-kept Widgets preserve JS overrides through GC; stale State access and foreign references fail. Static/global values remain application-owned when a session closes.                                                  |
| Ordinary Widget collection input                                 | Supported | Functions, methods and extensions share recursive conversion, including native Widget lists, nullable/nested lists and supported async inputs. Each Widget keeps its existing configuration ownership and Flutter lifecycle.                                                                                                                                      |
| State `proxyVariants`                                            | Supported | Ordered Analyzer-validated Dart mixins produce fixed host classes and project their interfaces. Variants do not inherit variants.                                                                                                                                                                                                                                 |
| Component-State interface conversion                             | Supported | A mounted JS State can be passed to Dart only through its live real State host and only when the generated variant implements the requested interface.                                                                                                                                                                                                            |
| Route, Page, and special lifecycle roles                         | Limited   | Existing conversions work, but semantic ownership and observation remain explicit configuration (`flutter_semantics_configuration_required`).                                                                                                                                                                                                                     |
| Disposable capability                                            | Supported | `dispose()` is an ordinary callable API and capability marker. Resource ownership remains with user code; session cleanup does not imply application disposal.                                                                                                                                                                                                    |

Runtime evidence is required only where ownership, retention, State, navigation, or
engine behavior changes. Pure language mechanisms close at parse, Dart/TypeScript emit,
`dart analyze`, and strict `tsc`.

Evidence: [component contract](components.md), [interop contract](interop.md),
[native callback tests](../../packages/flax/test/ui/native_callbacks_test.dart),
[Widget aggregate and Context tests](../../packages/flax/test/ui/widget_values_test.dart),
and [State variant tests](../../packages/flax_material_ui/test/ui/components_test.dart).

Context/State/Widget properties, globals and ordinary callable input evidence:
[generator and strict TypeScript tests](../../packages/flax_codegen/test/generator_test.dart),
[automatic selection tests](../../packages/flax_codegen/test/bindability_test.dart) and
[shared extension/function/method runtime fixture](../../packages/flax/test/ui/extensions_test.dart).

## Stable boundary codes

| Code                                          | Verdict / reason                               | Example                                                                                                   |
| --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `extension_type_representation_only`          | `limited / intentionalBoundary`                | `Meters(int)` crosses the bridge as `int`, without a `Meters` owner.                                      |
| `unnamed_extension`                           | `excluded / visibility`                        | `extension on String { ... }`.                                                                            |
| `unnamed_enum_factory`                        | `unsupported / intentionalBoundary`            | `factory Status()`: enums expose existing constants and named factories, without a JS construction entry. |
| `generic_receiver_specialization_required`    | `unsupported / intentionalBoundary`            | `extension X<T extends Comparable<T>> on List<T>`.                                                        |
| `constructor_specialization_missing_use_site` | `limited or unsupported / intentionalBoundary` | A generic owner is usable, but JS construction has no concrete `T`.                                       |
| `constructor_specialization_ambiguous`        | `unsupported / intentionalBoundary`            | Two concrete targets share the same JS runtime domain.                                                    |
| `complex_generic_bound`                       | `unsupported / intentionalBoundary`            | `T extends Comparable<T>` without concrete evidence.                                                      |
| `runtime_finite_widget_iterable_required`     | `unsupported / intentionalBoundary`            | A bound callback returns an actual lazy `Iterable<Widget>`; finite arrays/Sets and Dart Lists/Sets pass.  |
| `unsupported_core_type`                       | `unsupported / intentionalBoundary`            | Dart `Type` reflection or another core type with no bridge representation.                                |
| `missing_export`                              | `unsupported / dependencyBoundary`             | No public carrier exposes the referenced declaration identity.                                            |
| `private_implementation_dependency`           | `unsupported / dependencyBoundary`             | A public signature depends on a private nominal type.                                                     |
| `provider_surface_insufficient`               | `unsupported / dependencyBoundary`             | Core owns the type but does not expose the requested member or constructor; it cannot be republished.     |
| `flutter_semantics_configuration_required`    | `limited / configurationRequired`              | A Route, Page, or lifecycle role cannot be inferred from type shape alone.                                |

A new unsupported case must reuse an accurate code or add a code, fixture, and current
example. Error message text is presentation only and is not used to infer the primary
capability category.

## Reproducing the closure report

From the repository root:

```sh
(cd packages/flax_codegen && dart test)
dart analyze packages/flax_codegen

dart run packages/flax_codegen/tool/capability_verify.dart \
  --stage2-mechanisms \
  --out .local/flax-codegen-capability-closure

dart run melos run bindings:generate
dart run melos run bindings:check
dart run melos run check
dart run melos run check:ui
dart run melos run check:ui:v8
git diff --check
```

The mechanism report must contain every measured shape, independent automatic/explicit/
parse/emit/compile stage evidence, no unassessed bucket, and closure counts of zero for
unexplained `automationGap` and `generatorGap`. `.local` reports are evidence artifacts
and are not committed.

Only after these generator gates pass should a full Flutter SDK census or third-party
package pilot be used to discover library-specific coverage.
