# Binding Generation

Automatic library discovery is available through
`dart run flax_codegen generate --library package:foo/foo.dart`; see the
[codegen usage guide](../../packages/flax_codegen/README.md) and
[ADR 0033](../decisions/0033-automatic-public-library-bindings.md). It reuses the
binding contracts below, skips unsupported declarations, and accepts optional overrides
for binding semantics that cannot be inferred safely. Explicit configuration remains
fail-closed.

The analyzer-based generator resolves selected public APIs and emits Dart calls,
TypeScript declarations and shared parameter metadata. Configuration, parsing/model and
emission remain separate. UI protocol 22 reuses the unchanged native C ABI (ABI 2).

The `FlaxCodegen*Model` graph produced by parsing is the semantic IR between analyzer
resolution and emission. It carries resolved types, generics, inheritance, Widget and
callback roles, and capabilities such as `Disposable`. Emitters consume that semantic
model; they do not infer application ownership or lifecycle policy from method names.

## Selection and generation

The canonical selections are [Flutter](../../packages/flax/bindings/config.yaml) and
[Material](../../packages/flax_material_ui/bindings/config.yaml). They select
constructors, members and parameters without duplicating signatures.
`additionalLibraries` merges public exports, deduplicating the actual declaration and
rejecting conflicting names. Declaration identities use their originating library, while
generated imports use a public library exposing them. No private SDK imports or
reflection are generated. `proposeSelection` can suggest a bindable subset and skip
unsupported members without aborting the type, including already-adapted pool identities
such as Core `Duration` used from a library that does not re-export it. Official
`generate` input remains an explicit fail-closed allowlist.

```sh
dart run melos run bindings:generate
dart run melos run bindings:check
```

Generated Dart and TS belong to their consumer packages and are committed. The check
regenerates in an ignored temporary directory and compares formatted bytes. It also
compiles real SDK and independent fixture output and executes omitted-default tests.
Ordinary checks do not run or download a JS engine.

The CLI accepts:

```sh
dart run flax_codegen validate --config <direct-yaml>
dart run flax_codegen check --config <direct-yaml>
dart run flax_codegen generate --config <direct-yaml>
```

Official selection files carry `format: 2` and live as direct children of package
`bindings/`. Packages with `bindings` capability keep package metadata format 2 and set
`bindingNamespace` in `flax_package.yaml`. Generated `bindings/manifest.json` uses
Manifest `formatVersion: 15`; the reader accepts format 15 only. The generator has no
reader or normalization path for other binding selection or Manifest formats. See
[ADR 0035](../decisions/0035-generic-state-variants-and-protocol-21.md) and
[External Binding Verification](external-binding-verification.md).

Flax Core is an implicit provider for every binding package depending on Dart `flax`.
Core bindings cannot be republished. Independent packages may bind the same Dart source
with different namespaces, including the same short module name. A unique compatible
dependency with an adequate selected surface is reused. Missing, insufficient or
ambiguous non-Core providers cause a complete local binding. Explicit local selections
remain local. No selection enlarges an imported provider. See
[ADR 0037](../decisions/0037-package-scoped-binding-providers.md).

Single-file generated consumers import public provider libraries. Split implementations
keep their private declaration imports inside source preparation; business bundles never
import private binding chunks directly.

## Public libraries and top-level readonly declarations

`publicLibraries` maps configured Dart libraries to public TypeScript/JavaScript
specifiers and generated facades. Declaration ownership still follows the originating
Dart library and stable wire identity; a reexport changes only where callers import the
declaration.

```yaml
publicLibraries:
  package:flutter/foundation.dart:
    jsPackage: '@flax/flutter/foundation'
    tsOutput: js/src/flutter/generated/libraries/foundation/index.ts
  dart:core:
    jsPackage: '@flax/dart/core'
    tsOutput: js/src/dart/generated/libraries/core/index.ts
```

The optional format-2 `topLevel` selection chooses public reads and writes:

```yaml
topLevel:
  getters: [kIsWeb, defaultTargetPlatform]
```

`getters` selects public Dart variables and explicit getters from the configured public
libraries. Optional `setters: [name]` selects mutable variables or explicit setters,
independently of getters. A name may appear in both lists; setter-only modules are
valid. Selecting a const, final, late-final or getter-only declaration for writing
fails. Synthetic accessors normalize to their originating variable. Private, missing or
ambiguous declarations and conflicting generated exports fail generation.

```ts
import { getDefaultTargetPlatform, getKIsWeb } from '@flax/flutter/foundation';

const platform = getDefaultTargetPlatform();
const isWeb = getKIsWeb();
```

Dynamic values, Dart object references, `final`, `late final`, and explicit getters are
exported as typed `getX()` functions. Calling one performs a direct Dart read through
the existing `FlaxFunctionBinding` and `invokeTopLevel` channel. Importing or installing
the module reads no dynamic values; results and exceptions are not cached. Dart retains
lazy final initialization, late-final initialization errors and changing getter
behavior.

A `const` may instead be emitted as a direct named literal export when Codegen can prove
that the selected primitive value is safe to serialize and does not depend on the
generation machine rather than the compiled application. Build-sensitive values such as
Flutter's `kIsWeb` stay runtime reads. The generated public name remains at module
scope, alongside classes, functions and typedefs.

Read access does not freeze the returned value. Existing object/collection identity,
mutation, callbacks, generic typedefs, Futures and supported Stream conversion remain
unchanged. Unsupported conversions and special Widget, Context, State, Route or Page
ownership, including nested declarations and type arguments, fail generation. Reads
create no implicit reactive subscriptions or cross-session reference cache. Closing uses
existing call, reference and pending-delivery cleanup; it does not dispose
application-owned values.

Manifest 15 stores public-library routing plus each readonly declaration's source,
public export, return type, declaration kind, optional literal and ownership/reference
status. Source kind `readonly` maps to a stable
`<bindingNamespace>/<module>#read:<name>` operation. Existing type and function IDs are
unchanged. A public reexport of a provider-owned read forwards to the provider's public
module without registering another Dart entry. Consumers use public libraries and
manifests. An explicit local non-Core selection emits its own operation; it never
changes the provider's declaration.

Core exposes `getKIsWeb()` and `getDefaultTargetPlatform()` from
`@flax/flutter/foundation`, with `TargetPlatform`. Material exposes direct
`kToolbarHeight` and runtime `getKTabScrollDuration()` from `@flax/flutter/material`,
reusing Core's `Duration` identity. Mutable declarations use `getX()` and `setX(value)`;
no `export let` or JavaScript property assignment is synthesized. Setter inputs follow
their actual Dart signature, independently of the getter result type. Writes are
synchronous, propagate Dart exceptions and return void; the next read observes current
Dart state. Top-level state belongs to the Dart application and can be shared across
sessions; closing a session does not roll back writes. Source identity uses the function
operation `name=` (wire suffix `#function:name%3D`), leaving existing getter/read IDs
unchanged. Manifest 15 records `topLevel.setters` and their independent operation IDs.
Provider read and write surfaces are checked separately. Core surfaces cannot be
widened; independent non-Core selections emit local operations. Writes reuse ordinary
input conversion and existing session cleanup without new ownership rules. See
[mutable access tests](../../packages/flax_codegen/test/top_level_mutable_test.dart),
[readonly generation tests](../../packages/flax_codegen/test/top_level_readonly_test.dart),
[manifest tests](../../packages/flax_codegen/test/top_level_manifest_test.dart) and
[runtime tests](../../packages/flax_material_ui/test/ui/readonly_values_test.dart).

### Class static properties

Format-2 class selections expose reads and writes independently:

```yaml
classes:
  Counter:
    kind: object
    staticGetters: [count, tracked]
    staticSetters: [count, tracked, writeOnly]
```

```ts
const current = Counter.count;
Counter.setCount(3);
```

A read is a readonly JavaScript accessor, reevaluated through `invokeTopLevel` on each
access. A write is an explicit synchronous function; it crosses the bridge once and
returns void. Dart executes `Class.property` or `Class.property = value` after ordinary
type conversion. Importing a module performs no read. `late` initialization errors,
accessor side effects and Dart exceptions remain observable. Getter and setter types are
independent, including `int get value` paired with `set value(num input)`. Missing
arguments and `undefined` are rejected for writes; `null` is valid only for a nullable
input. Const, final and late-final writes are rejected.

All existing class categories use this path without requiring an instance, constructor
or mounted Widget. Context adaptation still requires actual Flutter `BuildContext`,
which declares no public statics. Static-only and setter-only selections produce real
value namespaces. Static declarations belong only to their declaring class and are not
inherited. Generated `setX` names must not conflict with selected methods, constructor
entries, other static exports or proxy helpers. Explicit selections fail; automatic
selection skips the conflicting write with `static_setter_export_collision`.

Manifest 15 stores static accessor types and distinct operation IDs:
`#read:Counter.count` and `#function:Counter.count%3D`. Class IDs and unrelated
operation IDs retain their identities. All workspace manifests are regenerated; older
formats are rejected. Selection 2, UI protocol 22 and native ABI 2 are unchanged. Core
remains implicit and cannot be republished. Non-Core packages can bind the same source
independently; automatic reuse requires the complete requested read/write surface from a
unique dependency provider. Types packages publish declarations and source packages
publish implementations through the existing plugin injection path.

Static state belongs to the Dart application and can be shared across sessions. Closing
a session clears bridge resources without rolling back state or disposing application
objects. Applications must clear stored callbacks before using them after their source
session closes. Tests restore fixture state explicitly. References, callbacks,
collections, Records and Futures reuse existing conversions and ownership boundaries.
See
[generator regressions](../../packages/flax_codegen/test/static_accessors_test.dart),
[provider identity tests](../../packages/flax_codegen/test/package_pipeline_test.dart),
[real JS tests](../../packages/flax/test/ui/static_accessors_test.dart) and
[ADR 0038](../decisions/0038-class-static-properties.md).

## Literal module tuple and registration

Generated Dart and JavaScript modules carry literal `moduleId`, `uiProtocol` and
`requiredCapabilities` values. The active UI protocol is 22 and native ABI is 2.
`uiProtocol` is the required field for module compatibility; there is no parallel
`version` field or ambient Core fallback.

### `FlaxBindingModule`

`FlaxBindingModule` contains `name`, `types` and `functions`, plus these required
fields:

| Field                  | Rule                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleId`             | `String`; [ADR 0022](../decisions/0022-stable-binding-identity.md): `bindingNamespace + "/" + name`                                                                                      |
| `uiProtocol`           | required `int`; **no default**. Same integer domain as Core `flaxBindingVersion` (UI protocol). There is no parallel `version` field.                                                    |
| `requiredCapabilities` | required `List<String>`; sorted unique; empty allowed. Generated code must emit an **explicit literal** (for example `const <String>[]`); never omit and rely on a Core ambient default. |

`flaxBindingVersion` remains Core's active protocol constant for Core-owned code and
Registry comparison. Generated modules pass their **own** literals; they must not read
Core's constant as a fallback.

The generated `dependencyModules` list names reused provider modules needed by the
signature. Runtime erased results use this list as the originating module's dependency
context; short module names never resolve ownership.

### `FlaxBindingRegistry`

On construction, **before** publishing type or function maps:

1. Exact match: `module.uiProtocol == flaxBindingVersion`.
2. Every `requiredCapabilities` entry is a member of Core's internal
   `supportedCapabilities`. Core owns that set; authors and manifests do not declare
   provided sets ([ADR 0021](../decisions/0021-external-binding-version-domains.md)).
3. Reject duplicate `moduleId` (primary identity). Short `name` values may match across
   namespaces.
4. Keep rejecting duplicate type and function binding ids.
5. Any failure throws; leave no partial registry.
6. No silent upgrade of old modules.

### TypeScript / JavaScript

Every generated JS module carries literal `moduleId`, `uiProtocol`, and sorted unique
`requiredCapabilities`. Validate that tuple **before** any `defineObject`,
`defineStream`, `defineContext`, `defineState`, realm mutation, definition-map mutation,
or host call. On success, return or select a **module-scoped facade/token** bound to
that literal tuple; every generated host call uses it. Zero-entry modules still emit and
validate the tuple. Rejected install is side-effect-free.

See [ADR 0021](../decisions/0021-external-binding-version-domains.md).

## Models and supported types

Widget classes have distinct generated host types so Flutter retains runtimeType/key
matching. Page and Route descriptors retain their existing hosts and resource leases.
Contexts and NavigatorState are borrowed Flutter references. `kind: object` represents
ordinary references, with optional constructors and disposal. Its getters, setters,
static property reads and explicit setter methods execute direct Dart calls, as do its
selected instance and static methods.

The type model includes scalars, enums, selected objects, typed List/Map, complete Dart
callback parameter shapes, supported Futures, FutureOr, and Streams. Callback metadata
records each parameter name, positional/named form and requiredness. Interface inputs
accept selected scalar/reference implementations according to analyzer relationships. TS
and Dart use the same model; unsupported signatures fail generation. See
[collections and generics](interop.md).

Constructors and methods preserve optional omission and explicit null. Optional JS
undefined means omitted; collection undefined is rejected. Non-null constant objects,
collections and private callback defaults remain omitted from actual Dart calls. Direct
typed branches cover up to five independent omission parameters (at most 32
combinations). From six, typed constructor/method/function tear-offs use
`Function.apply` with static Symbols for provided named parameters and the same argument
conversions. All bindable parameters remain selected. Default resolution follows super
parameters and redirecting factory chains, matching names or positional indexes;
unresolved targets, mismatches and cycles fail closed. Generative redirects retain their
own defaults. Route, Page and extends-proxy adapters use super formals, preserving
private defaults without copying them. Optional positional parameters permit only
trailing omission; provided arguments after a hole are rejected.

Widget parameters except key may bind. Ordinary object construction and writes do not
bind. Callbacks support required/optional positional parameters, required/optional named
parameters, and analyzer-validated generic parameters. Named arguments use a final JS
options object. The same five/six threshold preserves omitted named defaults in proxy
and returned Dart callback calls; optional positional callbacks retain linear prefix
dispatch. Generic callback calls convert through erased upper bounds while TS keeps the
declared relationship. A callback declared to return Future requires a JS Promise or
thenable and produces the typed Dart Future awaited by the caller. Future-returning Dart
members use the reverse conversion and the same UI checkpoint. Future and FutureOr
values compose recursively through supported collection, Record and callback positions
under protocol 20; nested completion values retain their own declared async semantics.
Asynchronous lifecycle/build callbacks and Map callback keys remain unsupported. Direct
non-null `List<Widget>` callback parameters and results are supported; nullable-element
lists and other Widget collection shapes remain fail-closed. Dart Stream references can
appear in parameters, results, callbacks and typed collections, including nested
ordinary value shapes; they follow
[ADR 0020](../decisions/0020-complete-dart-stream-interop.md). The JS interop handle is
`FlaxStreamReference` (not a `Dart*` alias and not Web `ReadableStream`). Generated
Flutter bindings expose the selected dart:async Stream family and call real Dart
operators. Widget builders and Route factories stay synchronous and retain their Flutter
lifecycle-specific ownership.

Direct standard `Widget Function(BuildContext)` inputs also work in ordinary functions,
object constructors, methods, and returned Dart functions. An independent host runs JS
at build with its actual mounted child Context; generic hosts do not retain enclosing
Routes. Configured Route-producing calls keep their synchronous Observer capture and
transition-completion leases. See [function contracts](functions.md).

## Example object selection

Core supplies minimal real-reference bindings for `DateTime` (epoch constructor, `year`,
`isUtc`, `toIso8601String`), `Uri` (static `parse`, `scheme`, `host`), and
`StringBuffer` (constructor, `length`, `write`, `toString`). Consumers reuse those
owners. `proposeSelection` reports the Core provider without a duplicate selection and
diagnoses insufficient Core members or incompatible adaptations. For a non-Core provider
it reuses an adequate compatible surface or emits a full local selection. It never
expands an imported package's API. Existing `Duration` and `TextRange` ownership is
unchanged.

Selected `void` getters, including inherited generic getters instantiated with `void`,
evaluate once, propagate Dart exceptions and return JavaScript `undefined`.

```yaml
classes:
  Gauge:
    kind: object
    constructors:
      '': [initial]
    getters: [reading, self]
    setters: [reading]
    instanceMethods:
      move: [amount]
      watch: [observer]
      unwatch: [observer]
      finish: []
    disposeMethod: finish
    listenerPairs:
      watch: unwatch
```

Explicit configuration may name any selected synchronous zero-argument void disposal
method. Automatic public-library binding also recognizes the conventional
`void dispose()` method, including an inherited one. Listener pairs select one non-null
VoidCallback argument on each method. These annotations identify API semantics; they do
not impose application disposal policy or cause session/widget cleanup to dispose the
object. See [object lifetime](objects.md) and
[ADR 0034](../decisions/0034-flutter-application-semantics.md).

## Standalone typedefs

Add public aliases to the optional format-2 `typedefs` list:

```yaml
typedefs: [ValueChanged, ValueGetter, Mapper, Items, GenericMapper, Converter]
```

Targets must already be representable by the binding model. `Name` describes values
received from Dart and `NameInput` describes values passed to Dart. A `List<String>`
alias therefore uses `DartList<string>` for output and `DartListInput<string, string>`
for input. Callback parameters reverse that direction; the generator does not flatten
collection references into arrays or erase types to `any`. Alias chains resolve to their
target and create no runtime constructor, wire identity, or owner for the target type.

Alias-owned parameters produce `Mapper<T>` and `MapperInput<T>`; function-local
parameters stay on the callback, as in `GenericMapper = (<T>(value: T) => T)`.
`Converter<T> = T Function<U extends T>(U)` preserves the inner parameter's dependence
on the outer one. Defaults, nullability, alias-chain substitution, nested capture and
shadowing use the existing declaration identities. Explicit TS arguments are supported
without promising identical Dart inference or supplying Dart runtime type tokens.

Manifest 15 stores each alias's public name, originating URI/name, `typeParameters` and
target type. Even non-generic aliases require an empty `typeParameters` array. Lexical
slots preserve parameter identity across dependency projections. Bounds and defaults, as
well as targets, participate in dependency imports and nominal ownership checks.
Dependency consumers use the manifest and public libraries, without reading owner YAML.
Re-exports deduplicate by originating declaration; conflicting public names, generated
`NameInput` collisions and unsupported targets fail generation. Generic callback erasure
still rejects recursive, unbound or nonconvertible bounds. Callback shapes that would
require concrete runtime specialization are intentionally deferred; ordinary higher-rank
callbacks with erasable bounds remain supported.

Record types are emitted as readonly structural TypeScript objects. Positional fields
use `$1`, `$2`, and so on in source order; named fields are canonicalized by name for
manifest and type identity. Dart-to-JS conversion reads each field and recursively uses
the existing TypeRef conversion. JS-to-Dart conversion requires every declared field,
ignores extra properties, validates field nullability independently from whole-Record
nullability, and reconstructs a real Dart Record. Records themselves have no wire ID,
owner or session reference identity; provider-owned objects nested inside fields retain
their normal identity. Manifest 15 carries the complete current Record shape.

Generic declarations use one shared Dart owner while TypeScript keeps the declared type
parameters. An unconstrained owner uses `Object?`; a simple upper bound such as `num` is
used when required. Existing Dart values such as `Box<String>` and `Box<int>` therefore
share one owner without losing their TypeScript relationships.

Constructors are emitted only when selected direct inputs determine every class type
parameter. Concrete targets normally come from Analyzer-observed use sites. For one
direct scalar parameter, evidence for either `String` or `int` completes the pair when
both satisfy the Dart bound; the runtime input remains restricted to strings and safe
integers. Multiple targets must have disjoint bridge domains. Overlapping targets such
as `num` and `int`, nested inference such as `List<T>`, unresolved type parameters,
invalid bounds and runtime type-token requirements fail closed or leave the shared owner
non-constructible. `typeArguments` and `methodTypeArguments` remain for concrete cases
that cannot be inferred safely.

An explicitly selected static generic factory is inferred as deferred when it is
synchronous, returns its generic owner directly, the result determines every method type
parameter and generic inputs use the supported direct synchronous callback shape:

```yaml
classes:
  WidgetStateProperty:
    kind: object
    instanceMethods:
      resolve: [states]
    methods:
      resolveWith: [callback]
```

Automatic library binding and explicit selections use the same analyzer predicate; no
public deferred-factory marker is required.

The generated JS call records the factory arguments without calling Dart. The complete
generation pass finds concrete uses of the returned generic object, emits one direct
materializer for each type, and attaches those materializers to the corresponding Dart
parameter metadata. The first concrete use creates the real Dart object and locks that
wrapper to the inferred type; later uses of the same type reuse it, and conflicting
types fail. Object/dynamic positions cannot infer or materialize a deferred factory.
Concrete arguments are checked against full analyzer-resolved bounds, including generic
supertypes and self-referential bounds after specialization. This keeps the
configuration finite while retaining exact Dart generic calls.

Deferred factories must be synchronous static generic methods whose direct owner result
determines every type parameter. Generic inputs are currently limited to direct
synchronous callbacks. Generic collections, Futures, Widgets, Routes, Contexts and
lifecycle values remain generation errors. Generalized inference for those shapes, or
for factories whose result does not determine every type parameter, is intentionally
deferred. Full CLI generation requires at least one concrete selected use. Partial
fixture emission can omit consumers so parser and emitter tests can inspect one module
at a time.

`proposeSelection` automatically recommends `proxy: implements` for eligible contract
surfaces and `proxy: extends` when an ordinary class has reusable concrete behavior and
a uniquely selectable generative constructor. The proposed selection contains that proxy
and can be parsed directly. Explicit `proxy: extends` or `proxy: implements` overrides
the recommendation and remains fail-closed. See
[proxy limits](interop.md#generated-implementations). The independent
Token/Store/Evaluator/Selector fixture exercises factories, generics, collections,
parent construction and callbacks with names unrelated to Flutter widgets.

## Inherited members and data selection

The parser merges the selected instance surface of bound ancestors before resolving
signatures on each actual subtype. Getters, setters, instance methods, parameter
selections, listeners and disposal metadata are inherited; constructors and static
members stay local. Child selections may extend but cannot silently narrow a selected
parent surface. Overrides, generic substitution and defaults come from analyzer's child
signature. Conflicting lifecycle or method-type selections fail generation. Each child
wrapper calls its own registered type, independent of module or selection order.

Object/dynamic positions use ordinary interop unless explicitly selected as copied data:

```yaml
data:
  constructors:
    '': [arguments]
  getters: [arguments]
  methods:
    pushNamed: [arguments]
  results: [push, pushNamed, pushReplacement]
```

Constructor/method entries name selected parameters; getters name selected fields;
results name selected static or instance methods. Within a target, only Object/dynamic
positions change, including callback parameters/results and nested collections/Futures.
Other types and nullability stay intact. Unknown targets, duplicate markers and targets
without an applicable position fail generation. No arbitrary path or conversion script
is supported. Production navigation selections explicitly identify their data
boundaries.

## Flutter integrations

The selection covers basic layout/text Widgets, Builder/LayoutBuilder, Context and
Directionality; shared/nested navigation, named Pages and host Router; ScrollController;
and [Material editing, focus and formatters](text-input.md). Unselected members do not
appear in TS. Material code comes from the standalone material_ui package and shares
core identities. Current support and proposed expansions are distinguished in the
[coverage map](binding-coverage-map.md).

Material Pages retain their explicit public PageRoute adapter and standard transition
mixin. This is separate from ordinary object references. No per-class Controller guard,
editing snapshot restorer or fallback formatter remains.

Framework fixture generation runs from `ui:bundle` into each owning package's
`.dart_tool/flax/ui`, including temporary Dart bindings. `ui:test` executes each
package's own UI tests with only that package's fixture and dependency closure, and uses
the locked native SDK. `package.dart integration NAME` is the owner-level real UI gate.
`check:aggregate` verifies only cross-module composition, while `check:ui` runs all UI
owner integrations plus that aggregate. Runtime, standalone, engine coexistence, and
release verification use their dedicated commands. See
[contributing](../../CONTRIBUTING.md#checks).

C-header FFI generation is separate (`ffi:generate` / `ffi:check`). JS tree shaking does
not remove Dart registry entries automatically; broad API coverage, bytecode loading and
additional engine adapters remain separate work.

Mounted Widget constructor callbacks with direct synchronous `Widget`, `Widget?` or
`List<Widget>` results use [invocation ownership](lists.md) automatically, regardless of
whether `BuildContext` appears in the callback parameters. No public lifecycle marker is
required.

Typed List elements and Map values may contain nested callbacks. The host adapts them
per mount, and nested Widget results always use independent invocation ownership.
Callback keys in Maps fail generation. Collection view identifiers include full nested
conversion types and callback signatures; nullable containers share the non-null view.

## Flutter State variants

`packages/flax/bindings/components.yaml` selects the exact Flutter `State<T>`
declaration with `kind: state`. Codegen derives the component lifecycle surface and
emits a real Flutter State host. Other State-derived classes remain ordinary borrowed
references.

`proxyVariants` declares fixed Dart mixin compositions. YAML order is Dart `with` order;
variants do not inherit variants. Short mixin names resolve by declaration identity, and
an ambiguous name can include a public library URI. Analyzer validation covers private
declarations, duplicate mixins, generic bounds, `on` constraints, abstract requirements,
concrete members and final interfaces.

Generated hosts compose the selected Flutter mixins and then apply `FlaxStateProxy` as
the final mixin. Explicit JS `super` calls therefore enter the real Dart mixin chain.
Variant-only dependency overlays can add a third-party host without claiming a second
State owner. A JS component State can enter a Dart interface parameter only through its
live mounted host and only when that variant implements the requested interface; the
reference is session-bound and is revoked on disposal. See [components](components.md)
and [ADR 0035](../decisions/0035-generic-state-variants-and-protocol-21.md).

## Widget interface configuration

Select non-constructible native contracts with `kind: widgetInterface` and preserve them
on generated hosts with `widgetInterfaces`. Explicit getters, setters and methods
forward directly to the cached real Dart configuration. Arguments remain fixed; native
signatures do not enter JS conversion or dependency discovery. See
[Widget interfaces](widget-interfaces.md) for type checks, subset limits and
parent-property updates.

Top-level functions have their own selection, model and registration surface; they are
not represented as classes. See [function generation](functions.md) for defaults, data
boundaries and restricted Route ownership roles.

## Extension declarations

Select public named extensions independently from classes:

```yaml
extensions:
  StringX:
    getters: [isBlank]
    methods:
      repeat: [count]
```

```typescript
StringX.getIsBlank(' ');
StringX.repeat('a', 3);
```

Instance getters/setters use `getX(receiver)` / `setX(receiver, value)`. Instance
methods take the receiver before their selected positional and named arguments.
`staticGetters` and `staticMethods` omit it. `operators` selects Dart operators with
ordinary function names: `[]` / `[]=` become `getIndex` / `setIndex`, `+` / `-` become
`add` / `subtract`, unary `-` is selected as `unary-` and becomes `negate`.
Multiplicative, comparison, bitwise and shift operators have fixed names in the
generator model. Dart disallows extension declarations of Object members, including
`==`.

Every invocation explicitly names the Dart extension override; no implicit resolution or
TS prototype mutation occurs. Extension and member generic scopes preserve TS type
relationships, with upper-bound erasure in Dart. Shadowed parameter names are renamed
only in the TS signature. Receivers, arguments and results reuse existing recursive
conversions, including Records, aliases, callbacks, collections and Future/FutureOr.
Existing unsupported Widget/lifecycle semantic positions remain rejected.

Extensions have no runtime instance or type wire ID. Each selected operation owns a
stable package-scoped function ID; reused public re-exports route to the selected
provider adapter. Independent packages may emit separate adapters. Provider references
must preserve the provider's selected signature and public export surface. See
[ADR 0030](../decisions/0030-extension-binding-adapters.md).

## Bound-only type references

Generic bounds may name interfaces without runtime bindings. Manifest 15 records their
source URI, declaration name and recursively scoped generic arguments as `typeOnly`.
They never receive an owner, wire ID, reference handle or member selection. Ordinary
parameters, results and runtime erasure still require convertible concrete types.

TypeScript uses readonly phantom properties keyed by declaration source identity and
carrying generic arguments. Selected objects preserve their own and inherited nominal
relations without exposing unselected interface members. No JS property is installed.
Primitive projections reuse the existing TS primitive unions; they do not reproduce
Dart's full primitive generic subtype calculus. Dart analyzer validates every configured
specialization. Recursive typedef bounds require explicit TS arguments instead of
invalid self-referential generic defaults.

See [ADR 0032](../decisions/0032-bound-type-only-references.md) for runtime boundaries.

## Shared JS proxy implementations and class operators

Generated object `extends` classes inherit `FlaxProxyBase`. A frozen per-class metadata
object and `defineProxyBase` install concrete forwarding methods and accessors on the
prototype once. TypeScript interface merging retains each class's exact typed surface;
abstract requirements remain abstract declarations. JavaScript subclasses can use real
`super.operatorAdd(value)`, which calls the Dart superclass implementation without
redispatching to the JavaScript override. Ordinary objects, State references and Streams
reuse `bindingMethods`; detached object methods keep their bound receiver. State variant
native methods reuse `defineStateMembers`.

Select class operators separately from ordinary methods:

```yaml
Counter:
  kind: object
  proxy: extends
  constructors: { '': [value] }
  operators:
    '+': [other]
    'unary-': []
```

```ts
class CustomCounter extends Counter {
  override operatorAdd(other: number): number {
    return super.operatorAdd(other) + 10;
  }
}
const value = new CustomCounter(2);
value.operatorAdd(3); // Explicit JS call. Dart callers use value + 3.
```

The fixed names are `operatorGetIndex`, `operatorSetIndex`, `operatorAdd`,
`operatorSubtract`, `operatorMultiply`, `operatorDivide`, `operatorTruncateDivide`,
`operatorModulo`, `operatorLessThan`, `operatorGreaterThan`, `operatorLessThanOrEqual`,
`operatorGreaterThanOrEqual`, `operatorBitAnd`, `operatorBitOr`, `operatorBitXor`,
`operatorShiftLeft`, `operatorShiftRight`, `operatorUnsignedShiftRight`,
`operatorBitNot`, `operatorNegate` and `operatorEquals`. Signatures and conversion
remain analyzer-driven. Unsupported signatures and alias collisions fail explicit
generation. Automatic selection discovers representable operators and skips alias
collisions. Member lookup follows Dart's effective mixin and inheritance resolution.
Automatic dependency filtering includes operator inputs and results, so excluded types
are not reintroduced through operator-only consumers. Equality is opt-in and generated
equality proxies require a selected `hashCode` getter; Dart Map/Set use those overrides,
while JavaScript Map/Set and `===` keep JS identity. `toString` and `hashCode` are
selected ordinary members; `runtimeType` remains native. No JavaScript arithmetic
operator syntax is overloaded. No per-class mixin, runtime reflection or implicit extra
bridge call is added.

Manifest 15 records both the Dart operator and its JS method alias and rejects previous
formats. Provider reuse requires the requested operator surface. Core injection,
provider isolation and source/types package ownership are unchanged. Selection format 2,
UI protocol 22 and native ABI 2 are unchanged.

Flutter ownership remains specialized: `FlaxWidgetHost`, `FlaxStateProxy`,
`FlaxRouteLease` and `FlaxPageRoute` retain mount, State, route callback and disposal
responsibilities. Host Router/Pages continue to use the existing navigation contract;
this change does not introduce JS RouterDelegate, route parsers or restoration APIs.

A local scale experiment used 100 generated extends classes with 20 required positional
methods each, the same pre-change emitter and the same runtime. Minified ES modules were
measured with five fresh Node processes; each process warmed 10,000 calls, measured
200,000 calls and constructed 1,000 instances. Median source TS size fell from 1,026,304
to approximately 295,000 bytes, minified JS from 601,499 to 101,712 bytes and gzip JS
from 22,659 to 4,789 bytes. Registration heap fell from 1,847,008 to 1,350,832 bytes;
registration took 7.21 versus 7.34 ms and construction 10.00 versus 9.59 microseconds.
The stub-host call took 36.7 versus 49.8 ns. These are local engine-specific
observations, not end-to-end Dart bridge latency or universal speed guarantees. Shared
immutable parameter layouts avoid duplicating conversion plans; fully required
positional calls reuse their existing argument array after validation. There are no
timing assertions.
