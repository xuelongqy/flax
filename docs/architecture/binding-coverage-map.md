# Binding Coverage Map

This document describes the current `flax_codegen` language and Flutter-semantic
contract. It is a mechanism map, not a percentage of the Flutter SDK. A declaration can
be supported by the generator while a particular SDK library still needs its own binding
selection and runtime verification.

The current version domains are binding selection format **2**, package metadata format
**1**, Manifest **12**, UI protocol **21**, and native ABI **2**. Only the current formats
are read and written.

## Capability assessment model

Every declaration in a public-library inventory receives one verdict. Provider reuse is
recorded as a source, not as a capability level.

| Field | Values | Meaning |
| --- | --- | --- |
| `verdict` | `supported`, `limited`, `unsupported`, `excluded`, `environmentBlocked` | The usable capability result. |
| `reasonKind` | `none`, `automationGap`, `generatorGap`, `configurationRequired`, `intentionalBoundary`, `dependencyBoundary`, `visibility` | Why a non-supported result exists. |
| `source` | `automatic`, `explicit`, `provider`, `inventory` | Which route established the result. |
| `stages` | `automatic`, `explicit`, `parse`, `emit`, `compile` | Independent evidence for each generator stage. |

`environmentBlocked` is reserved for an unavailable analyzer, compiler, SDK, or tool.
It does not stand in for an unknown capability. Every declaration receives a verdict.
Unnamed extensions are inventoried and classified as `excluded` because they have no
stable public binding name.

The closure gate requires zero unexplained `automationGap` and `generatorGap` entries.
An intentional boundary remains valid only when it has a stable code and a regression
fixture.

## Declaration support

| Declaration | Verdict | Current contract |
| --- | --- | --- |
| Class and abstract class | Supported | Automatic and explicit selection cover constructors, getters, setters, static members, methods, inheritance, generic owners, and representable callbacks. Abstract construction still requires a valid generated proxy. |
| Mixin and mixin class members | Supported | Ordinary member surfaces can be selected and emitted. Applying mixins to generated classes is a separate capability. |
| Arbitrary mixin composition | Unsupported | Real Dart composition is generated only for fixed Flutter State `proxyVariants`. Runtime-selected or general class mixin composition is outside the contract. |
| Ordinary enum | Supported | Enum values and typed conversion are discovered automatically. |
| Enhanced enum | Limited | Enum values remain supported; custom instance fields and methods are not projected by the enum adapter (`enhanced_enum_members_not_bound`). |
| Typedef | Supported | Basic, generic, callback, collection, Record, Future/FutureOr, Stream, and nested targets retain their declared relationships when the target is representable. |
| Top-level function | Supported | Synchronous, Future, Stream, callback, default-parameter, and safely erasable generic signatures are discovered automatically. Concrete generic calls use existing `typeArguments` configuration when erasure is not safe. |
| Const, final, getter, mutable variable, setter | Supported | Reads and writes are assessed independently. Dynamic values use uncached accessors; mutable values keep Dart state. |
| Named extension | Supported | Safe receiver-first adapters are discovered automatically for getters, setters, static members, methods, legal operators, callbacks, Records, and async values. |
| Generic extension | Limited | Analyzer-proven upper-bound erasure is supported. A receiver that needs concrete runtime specialization is rejected (`generic_receiver_specialization_required`). |
| Unnamed extension | Excluded | It has no stable exported binding name (`unnamed_extension`). |
| Extension type | Limited | Parameters and results use the representation type. No independent runtime object identity or owner is created (`extension_type_representation_only`). Unrepresentable representations fail closed. |

Automatic proposal covers `classes`, `types`, `typedefs`, `functions`, `extensions`, and
`topLevel` selections from the same public inventory. Annotation filtering excludes
private, `@internal`, `@protected`, and `@visibleForTesting` surfaces. Deprecated public
API can still be selected and produces a notice.

Evidence:
[automatic proposal tests](../../packages/flax_codegen/test/bindability_test.dart),
[inventory tests](../../packages/flax_codegen/test/capability_inventory_test.dart),
[extension tests](../../packages/flax_codegen/test/extension_test.dart), and
[mechanism tests](../../packages/flax_codegen/test/mechanism_coverage_test.dart).

## Type and signature support

| Type mechanism | Verdict | Current contract |
| --- | --- | --- |
| Nullable values | Supported | Nullability is recursive and preserved through Manifest round-trip and TypeScript emission. |
| List, Map, Set, Iterable | Supported | Ordinary API positions preserve element/key/value types and real Dart references. Callback map keys must remain representable. |
| Record | Supported | Positional, named, and mixed Records recurse through callbacks, collections, async values, typedefs, and generics. |
| Future and FutureOr | Supported | Parameters, results, callbacks, nested collections, and returned callbacks use Promise/Future conversion without inventing ownership. |
| Dart Stream | Supported | Parameters, results, callbacks, controllers, subscriptions, operators, and nested types preserve Dart stream semantics. Applications own their controllers; bridge-owned subscriptions are cleaned up with the session. |
| Callback and returned callback | Supported | Required/optional positional and named parameters, recursive results, typedef callbacks, and safely erasable generic callbacks share the same TypeRef validation. |
| Recursive combinations | Supported | The same recursive TypeRef rules apply to constructors, getters/setters, methods, top-level functions, callbacks, typedefs, inherited members, and dependency closure. |
| Shared generic owner | Supported | Dart uses `Object?` or an Analyzer-proven public fully closed bound; TypeScript keeps the declared generic relationship. |
| Generic constructor specialization | Limited | Every class type parameter must come from required direct input, Analyzer must provide concrete use sites, bounds must pass, and JS runtime domains must be disjoint. |
| Generic method/top-level function | Limited | Safe bound erasure is automatic. Concrete runtime specialization uses existing explicit type arguments. No runtime type token is introduced. |
| Provider-owned nominal type | Supported | A dependency Manifest owner is a recursion boundary. The consumer preserves identity, nullability, and type arguments without expanding provider inheritance. |
| Public carrier and dependency closure | Supported | Declaration identity chooses a same-package public carrier. Same-name different identities fail closed. Dependency-only types stay internal in automatic mode. |

The generator does not infer `T` from callback results, `List<T>` contents, nested object
contents, or a runtime `Type` token. Overlapping runtime domains such as `num` and `int`
are rejected. Dependent or recursive bounds without concrete evidence are rejected.

Evidence:
[recursive type tests](../../packages/flax_codegen/test/recursive_type_automation_test.dart),
[generic tests](../../packages/flax_codegen/test/generic_and_defaults_test.dart),
[constructor specialization tests](../../packages/flax_codegen/test/concrete_generic_specialization_test.dart),
[provider tests](../../packages/flax_codegen/test/package_pipeline_test.dart), and
[Record tests](../../packages/flax_codegen/test/record_test.dart).

## Flutter semantic support

| Semantic position | Verdict | Current contract |
| --- | --- | --- |
| Widget constructor value | Supported | Widget inputs retain the normal Flutter tree and ownership rules. |
| Mounted callback returning `Widget`, `Widget?`, or `List<Widget>` | Supported | A callback selected from a Widget constructor receives invocation-scoped mounted ownership. `BuildContext` is an ordinary callback parameter, not an ownership marker. |
| Async mounted Widget result | Unsupported | `Future<Widget>`, `FutureOr<Widget>`, `Stream<Widget>`, and async Widget collections are rejected (`unsupported_mounted_widget_result`). |
| Other mounted Widget collections | Unsupported | Nullable collections, `List<Widget?>`, Set/Map/Iterable Widget results, and collection mutation do not have mounted ownership semantics. |
| Flutter State lifecycle | Supported | Flutter creates the real Dart State host. JS implements the Flutter lifecycle and makes explicit super calls. Flax does not automatically dispose application resources. |
| State `proxyVariants` | Supported | Ordered Analyzer-validated Dart mixins produce fixed host classes and project their interfaces. Variants do not inherit variants. |
| Component-State interface conversion | Supported | A mounted JS State can be passed to Dart only through its live real State host and only when the generated variant implements the requested interface. |
| Route, Page, and special lifecycle roles | Limited | Existing conversions work, but semantic ownership and observation remain explicit configuration (`flutter_semantics_configuration_required`). |
| Disposable capability | Supported | `dispose()` is an ordinary callable API and capability marker. Resource ownership remains with user code; session cleanup does not imply application disposal. |

Runtime evidence is required only where ownership, retention, State, navigation, or
engine behavior changes. Pure language mechanisms close at parse, Dart/TypeScript emit,
`dart analyze`, and strict `tsc`.

Evidence:
[component contract](components.md), [interop contract](interop.md),
[native callback tests](../../packages/flax/test/ui/native_callbacks_test.dart), and
[State variant tests](../../packages/flax/test/ui/components_test.dart).

## Stable boundary codes

| Code | Verdict / reason | Example |
| --- | --- | --- |
| `enhanced_enum_members_not_bound` | `limited / intentionalBoundary` | An enhanced enum value is usable, while its custom instance method is not emitted by the enum adapter. |
| `extension_type_representation_only` | `limited / intentionalBoundary` | `Meters(int)` crosses the bridge as `int`, without a `Meters` owner. |
| `unnamed_extension` | `excluded / visibility` | `extension on String { ... }`. |
| `generic_receiver_specialization_required` | `unsupported / intentionalBoundary` | `extension X<T extends Comparable<T>> on List<T>`. |
| `constructor_specialization_missing_use_site` | `limited or unsupported / intentionalBoundary` | A generic owner is usable, but JS construction has no concrete `T`. |
| `constructor_specialization_ambiguous` | `unsupported / intentionalBoundary` | Two concrete targets share the same JS runtime domain. |
| `complex_generic_bound` | `unsupported / intentionalBoundary` | `T extends Comparable<T>` without concrete evidence. |
| `unsupported_mounted_widget_result` | `unsupported / intentionalBoundary` | A mounted callback returns `Future<Widget>` or `Set<Widget>`. |
| `context_input_callback_only` | `unsupported / intentionalBoundary` | A direct method input tries to consume `BuildContext`; Context remains callback-scoped. |
| `unsupported_core_type` | `unsupported / intentionalBoundary` | Dart `Type` reflection or another core type with no bridge representation. |
| `missing_export` | `unsupported / dependencyBoundary` | No public carrier exposes the referenced declaration identity. |
| `private_implementation_dependency` | `unsupported / dependencyBoundary` | A public signature depends on a private nominal type. |
| `provider_surface_insufficient` | `unsupported / dependencyBoundary` | A dependency owns the type but does not expose the requested member or constructor. |
| `flutter_semantics_configuration_required` | `limited / configurationRequired` | A Route, Page, or lifecycle role cannot be inferred from type shape alone. |
| `omit_cap` | `limited / intentionalBoundary` | Automatic omission is capped at six independent parameters and reports the branch count. |

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
