# Binding Coverage Map

This document describes the current `flax_codegen` language and Flutter-semantic
contract. It is a mechanism map, not a percentage of the Flutter SDK. A declaration can
be supported by the generator while a particular SDK library still needs its own binding
selection and runtime verification.

The current version domains are binding selection format **2**, package metadata format
**2**, Manifest **18**, UI protocol **24**, and native ABI **2**. Only the current
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

Core's shared `asDart(value, Target)` validates the original Dart instance and exposes
an existing selected view. `getDartType(value)` explicitly reads diagnostic runtime-type
text. Object, collection, Widget, Context, State, Stream, enum and native callback
references retain their existing ownership and validity rules. Descriptors, raw JS data
and unregistered JS classes do not become Dart objects. Collection-bound generic outputs
describe standard collection views; checked casts recover nominal APIs when the actual
Dart value permits them. See
[checked views](objects.md#checked-views-and-dart-type-diagnostics).

Class static reads and writes are independent capabilities on every supported class
category. Reads use `Class.property`; writes use `Class.setProperty(value)`. They retain
their own types and operation identities in Manifest 18. Static declarations are not
inherited; a read-only provider cannot supply a write. A generated setter name collision
fails explicit selection or produces `static_setter_export_collision` in automatic
selection. See [static property rules](bindings.md#class-static-properties) and the
[generator regression](../../packages/flax_codegen/test/static_accessors_test.dart).

Ordinary static methods are also selected on Widgets and use the same function transport
as static accessors. This includes static-only classes and Widget interface namespaces;
native interface instance methods retain their separate Flutter forwarding contract.

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

Automatic member/parameter name selection and the inventory share explicit naming rules.
Public names containing `_` or `$`, such as `total_count` and `dollar$value`, are
supported. Property names such as `eval` and named parameters such as `arguments` remain
legal; strict-mode locals and public exports still reject reserved binding identifiers.
Class namespace declarations retain binding-name rules. Positional parameter names can
start with `_` without exposing private Dart members; the single `_` Dart wildcard
remains excluded from automatic parameters because proxy forwarding needs a local.
Generated-name collisions retain their existing checks. See the
[name regression](../../packages/flax_codegen/test/automatic_names_test.dart).

Bound class exports provide authenticated `Symbol.hasInstance` checks and TypeScript
narrowing across selected parent/interface/mixin views. Sealed parents retain their
legal factories and can discriminate selected public children; no illegal Dart proxy or
closed exhaustive TS union is generated. Checks add no Dart call. Generic arguments,
parent-only/provider views and descriptor-only values have the explicit
[instance-check limits](bindings.md#limits-of-javascript-instanceof).

| Declaration                                    | Verdict     | Current contract                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Class and abstract class                       | Supported   | Automatic and explicit selection cover constructors, getters, setters, static members, methods, inheritance, generic owners, and representable callbacks. Abstract construction still requires a valid generated proxy.                                                                            |
| Class operators                                | Supported   | Representable ordinary object operators use explicit JS aliases; legal extends/implements proxies can override them. Equality is opt-in and requires hashCode on proxies; JS arithmetic and collection identity are unchanged.                                                                     |
| Mixin and mixin class members                  | Supported   | Ordinary member surfaces can be selected and emitted. Applying mixins to generated classes is a separate capability.                                                                                                                                                                               |
| Arbitrary mixin composition                    | Unsupported | Real Dart composition is generated only for fixed Flutter State `proxyVariants`. Runtime-selected or general class mixin composition is outside the contract.                                                                                                                                      |
| Ordinary enum                                  | Supported   | Enum values and typed conversion are discovered automatically.                                                                                                                                                                                                                                     |
| Enhanced enum                                  | Supported   | Public fields, accessors, methods, statics, named factories and operators use typed shared dispatch. Generic constants keep closed types; no JS construction, subclass or proxy is generated.                                                                                                      |
| Typedef                                        | Supported   | Basic, generic, callback, collection, Record, Future/FutureOr, Stream, and nested targets retain their declared relationships when the target is representable.                                                                                                                                    |
| Top-level function                             | Supported   | Synchronous, Future, Stream, callback, default-parameter, and safely erasable generic signatures are discovered automatically. Concrete generic calls use existing `typeArguments` configuration when erasure is not safe.                                                                         |
| Const, final, getter, mutable variable, setter | Supported   | Reads and writes are assessed independently. Dynamic values use uncached accessors; mutable values keep Dart state.                                                                                                                                                                                |
| Named extension                                | Supported   | Receiver views (`StringX('a').repeat(3)`) are discovered automatically. Getters, setters, static reads/writes (`StringX.setTimes(5)`), operators, callbacks and async values reuse ordinary conversion, including Context and supported Flutter references.                                        |
| Generic extension                              | Limited     | Captured receiver and method parameters share ordinary generic conversion, including nested collection outputs, callbacks and async values. Native references and closed bounds retain their types. Concrete runtime specialization remains rejected (`generic_receiver_specialization_required`). |
| Unnamed extension                              | Excluded    | It has no stable exported binding name (`unnamed_extension`).                                                                                                                                                                                                                                      |
| Extension type                                 | Limited     | Automatic and explicit selection use the representation conversion, including Flutter references and supported nested values/callbacks. No independent object, owner or class members are added (`extension_type_representation_only`); ordinary validation applies.                               |

Automatic proposal covers `classes`, `types`, `typedefs`, `functions`, `extensions`, and
`topLevel` selections from the same public inventory. Annotation filtering excludes
private, `@internal`, `@protected`, and `@visibleForTesting` surfaces. Deprecated public
API can still be selected and produces a notice.

Selected concrete extends methods and accessors enforce inherited `@mustCallSuper`.
Reads and writes are separate requirements, reentry restores the outer check, and
Future/FutureOr getters require super before returning a Promise. Interface-only
requirements do not transfer to implementations. See
[proxy property rules](proxy-properties.md).

Evidence:
[automatic proposal tests](../../packages/flax_codegen/test/bindability_test.dart),
[inventory tests](../../packages/flax_codegen/test/capability_inventory_test.dart),
[extension tests](../../packages/flax_codegen/test/extension_test.dart),
[enum tests](../../packages/flax_codegen/test/enum_test.dart), and
[mechanism tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Type and signature support

| Type mechanism                        | Verdict   | Current contract                                                                                                                                                                                                                                                                                                            |
| ------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nullable values                       | Supported | Nullability is recursive and preserved through Manifest round-trip and TypeScript emission.                                                                                                                                                                                                                                 |
| List, Map, Set, Iterable              | Supported | Ordinary API positions preserve element/key/value types and real Dart references. Callback map keys must remain representable.                                                                                                                                                                                              |
| Custom core collection subclasses     | Supported | Automatic and explicit object bindings combine selected native members with shared collection operations. Native name collisions retain Dart semantics; compatible typed inputs reuse the same object, and known generic targets specialize helper conversion on demand.                                                    |
| Record                                | Supported | Positional, named, and mixed Records recurse through callbacks, collections, async values, typedefs, and generics.                                                                                                                                                                                                          |
| Future and FutureOr                   | Supported | Parameters, results, callbacks, proxy properties, nested collections, and returned callbacks use Promise/Future conversion without inventing ownership.                                                                                                                                                                     |
| Dart Stream                           | Supported | Parameters, results, callbacks, proxy properties, controllers, subscriptions, operators, and nested Streams preserve Dart stream semantics. Each layer stays lazy and independent; application controllers remain application-owned.                                                                                        |
| Callback and returned callback        | Supported | Required/optional positional and named parameters, recursive results, typedef callbacks, and safely erasable generic callbacks share the same TypeRef validation.                                                                                                                                                           |
| Recursive combinations                | Supported | The same recursive TypeRef rules apply to constructors, getters/setters, methods, top-level functions, callbacks, typedefs, inherited members, and dependency closure.                                                                                                                                                      |
| Shared generic owner                  | Supported | Dart uses `Object?` or an Analyzer-proven public fully closed bound; TypeScript keeps the declared generic relationship.                                                                                                                                                                                                    |
| Generic constructor specialization    | Limited   | Closed nested targets reuse ordinary conversion. Required input signatures, including nested type parameters, and Analyzer use sites determine automatic targets; bounds and disjoint runtime domains remain mandatory. Explicit type arguments resolve same-shape ambiguity.                                               |
| Generic method/top-level function     | Limited   | Top-level functions and ordinary methods use automatic closed bound erasure. Generic results describe converted Dart references, not raw JS collection shapes. Open recursive/dependent bounds require explicit arguments. Supported deferred factories reuse concrete result targets. No runtime type token is introduced. |
| Provider-owned nominal type           | Supported | A dependency Manifest owner is a recursion boundary. The consumer preserves identity, nullability, and type arguments without expanding provider inheritance.                                                                                                                                                               |
| Public carrier and dependency closure | Supported | Declaration identity chooses a same-package public carrier. Same-name different identities fail closed. Dependency-only types stay internal in automatic mode.                                                                                                                                                              |

Default omission preserves missing/`undefined` separately from explicit `null`. Up to
five independently omitted parameters use direct calls; six or more use `Function.apply`
without trimming the selected surface. Optional positional parameters keep linear tail
dispatch and reject holes.

Required signatures such as `Bag<T>(List<T> items)` can use a known `Bag<String>`
target, including for empty arrays. The generator matches declared and concrete type
signatures; it does not inspect runtime callback results, collection contents, nested
object contents, or a runtime `Type` token to infer `T`. Optional-only or missing
generic inputs require explicit type arguments. Overlapping runtime domains such as
`num` and `int`, two different List element types, or Iterable versus List/Set are
rejected. Empty collections follow the same rule. Specialized factory signatures expose
only compiled targets, including nested collections, selected nominal references and
supported async arguments. Dependent or recursive bounds without concrete evidence are
rejected. Multi-target constructor callbacks require explicit type arguments when their
shared erased signature cannot satisfy every concrete target; compatible input-only
callbacks retain automatic dispatch. Ordinary Object bindings and native Widget member
views matching known constructor targets also preserve their concrete getter, setter,
method, callback and async member conversion. Only affected selected members gain
private Dart metadata; the JS class and unrelated members stay shared. Metadata is
cached on first affected use per object and binding owner. Native objects matching no
known target and automatic JS proxies keep the shared erased view, and same-shape
targets still require explicit type arguments. Constructor `data` positions do not
change ordinary member conversion. A plain-data constraint on `T` itself with an
automatic native-view target requires explicit class type arguments; invalid
combinations are rejected before generation.

Evidence:
[recursive type tests](../../packages/flax_codegen/test/recursive_type_automation_test.dart),
[nested input tests](../../packages/flax_codegen/test/nested_constructor_inputs_test.dart),
[generic tests](../../packages/flax_codegen/test/generic_and_defaults_test.dart),
[constructor specialization tests](../../packages/flax_codegen/test/concrete_generic_specialization_test.dart),
[nested constructor tests](../../packages/flax_codegen/test/nested_generic_constructors_test.dart),
[provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart), and
[Record tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Flutter semantic support

| Semantic position                                                | Verdict   | Current contract                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Widget constructor value                                         | Supported | Widget inputs retain the normal Flutter tree and ownership rules.                                                                                                                                                                                                                                                                                                 |
| Automatic Widget instance getters and methods                    | Supported | Convertible computed and inherited members use the existing real object view, including final classes and returned Widgets without public constructors. Member factories take fixed typed inputs; reactive descriptions and JS lifecycle overrides retain their existing explicit paths. Generic references preserve their TypeScript arguments.                  |
| Mounted callback returning Widget or a selected Widget interface | Supported | Ordinary typed result conversion preserves native identity and selected interfaces, including nullable results, supported Futures/Streams and direct typed lists. Escaped configurations follow Dart references and GC; mounted subscriptions release at unmount.                                                                                                 |
| Ordinary callback with Context arguments                         | Supported | Functions, constructors, methods and returned Dart functions call JS directly with the actual native Context; indexed, named and optional arguments, nullable Widget results and supported Futures use shared conversion. No extra content host or inferred Route ownership.                                                                                      |
| Direct Context input and result                                  | Supported | Functions, members, top-level variables/getters and callbacks share weak borrowed Context identity, including null, typed finite aggregates and Future/FutureOr/Stream results. Shared conversion preserves derived collection reads and registered Record fields. Forged, foreign-session and unmounted values are rejected, including late events.              |
| Async mounted Widget result                                      | Supported | Future/FutureOr/Stream reuse typed conversion for individual Widgets, selected interfaces and finite Widget aggregates. Completion promotes each configuration before temporary holds are released.                                                                                                                                                               |
| Finite Widget callback aggregates                                | Supported | List/Set/Map/Record and Iterable signatures accept finite JS arrays/Sets or compatible Dart Lists/Sets, including nullable values and supported async compositions. Actual lazy iterators fail conversion before iteration; ordinary native method views stay lazy.                                                                                               |
| Flutter State lifecycle                                          | Supported | Flutter creates the real Dart State host. JS implements the Flutter lifecycle and makes explicit super calls. Flax does not automatically dispose application resources.                                                                                                                                                                                          |
| State inputs and callbacks                                       | Supported | Explicit and automatic functions, methods and callbacks share borrowed State conversion. Native wrappers and live JS State hosts retain real Dart identity. Returned/nested callbacks, nullable aggregates and supported Future/FutureOr/Stream compositions check validity at invocation or delivery. Forged, foreign-session and unmounted values are rejected. |
| Flutter properties and top-level values                          | Supported | Member/static/global values and ordinary extends/implements proxy properties share Widget/Context/State conversion, including null and finite aggregates. Dart-kept Widgets preserve JS overrides through GC. Stale Context/State and foreign references fail; static/global state remains application-owned.                                                     |
| Ordinary Widget collection input                                 | Supported | Functions, methods and extensions share recursive conversion, including native Widget lists, nullable/nested lists and supported async inputs. Each Widget keeps its existing configuration ownership and Flutter lifecycle.                                                                                                                                      |
| Ordinary proxy returning Widget                                  | Supported | Extends/implements methods share the getter converter, including nullable and concrete Widget results, native fallback and explicit super. Dart may retain and mount a JS subclass through joint GC.                                                                                                                                                              |
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
[automatic selection tests](../../packages/flax_codegen/test/bindability_test.dart),
[shared extension/function/method runtime fixture](../../packages/flax/test/ui/extensions_test.dart),
and
[ordinary extends/implements proxy properties](../../packages/flax/test/ui/proxy_properties_test.dart).

Ordinary Widget factory and nested Stream callback evidence:
[Widget factory generation and strict TypeScript](../../packages/flax_codegen/test/widget_proxy_methods_test.dart),
[recursive Stream generation](../../packages/flax_codegen/test/async_stream_callbacks_test.dart),
and
[bidirectional lazy Stream tests](../../packages/flax/test/ui/async_stream_callbacks_test.dart).

Automatic Widget instance API evidence:
[generation and strict TypeScript](../../packages/flax_codegen/test/widget_members_test.dart)
and
[native identity, member calls and cleanup](../../packages/flax/test/ui/widget_members_test.dart).

## Stable boundary codes

| Code                                          | Verdict / reason                               | Example                                                                                                   |
| --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `extension_type_representation_only`          | `limited / intentionalBoundary`                | `Meters(int)` crosses the bridge as `int`, without a `Meters` owner.                                      |
| `unnamed_extension`                           | `excluded / visibility`                        | `extension on String { ... }`.                                                                            |
| `unnamed_enum_factory`                        | `unsupported / intentionalBoundary`            | `factory Status()`: enums expose existing constants and named factories, without a JS construction entry. |
| `generic_receiver_specialization_required`    | `unsupported / intentionalBoundary`            | `extension X<T extends Comparable<T>> on List<T>`.                                                        |
| `constructor_specialization_missing_use_site` | `limited or unsupported / intentionalBoundary` | A generic owner is usable, but JS construction has no concrete `T`.                                       |
| `constructor_specialization_ambiguous`        | `unsupported / intentionalBoundary`            | Two concrete targets share the same JS runtime domain.                                                    |
| `constructor_specialization_callback`         | `unsupported / intentionalBoundary`            | A multi-target constructor's `T Function()` input needs explicit runtime type arguments.                  |
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
