# Binding Generation

Automatic library discovery is available through
`dart run flax_codegen generate --library package:foo/foo.dart`; see the
[codegen usage guide](../../packages/flax_codegen/README.md) and
[ADR 0033](../decisions/0033-automatic-public-library-bindings.md). It reuses the binding
contracts below, skips unsupported declarations, and accepts optional overrides for
binding semantics that cannot be inferred safely. Explicit configuration remains
fail-closed.

The analyzer-based generator resolves selected public APIs and emits Dart calls,
TypeScript declarations and shared parameter metadata. Configuration, parsing/model and
emission remain separate. UI protocol 20 reuses the unchanged native C ABI (ABI 2).

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

Official selection files carry `format: 1` and live as direct children of package
`bindings/`. Packages with `bindings` capability set `bindingNamespace` in
`flax_package.yaml`. Generated `bindings/manifest.json` uses Manifest
`formatVersion: 11`. Strict readers also accept Manifest 2 without aliases, Manifest 3
with basic aliases, Manifest 4 with generic aliases, Manifest 5 with readonly namespace
exports, Manifest 6 with public-library routing, Manifest 7 with Records, and Manifest 8
with native Widget interface members. Manifest 9 adds extension adapters; Manifest 10
adds mutable top-level reads and setters. Manifest 11 adds bound-only references;
versions 2 through 10 reject these references. Formats before 5 reject top-level
readonly declarations; formats before 6 reject public-library routing and named
top-level exports; formats before 7 reject structural Record fields, formats before 8
reject native Widget member metadata, formats before 9 reject extensions, and formats
before 10 reject setters and mutable getter classification. Legacy restrictions are
checked before normalization; Manifest 1 and unknown versions remain rejected. See
[ADR 0028](../decisions/0028-record-bindings.md), the
[external binding migration guide](../guides/external-binding-migration.md) and the
[compatibility matrix](external-binding-compatibility.md).

Include dependency modules to share declaration ownership. Input order does not change
adaptation identity.

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

The optional format-1 `topLevel` selection chooses public reads and writes:

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

Manifest 10 stores public-library routing plus each readonly declaration's source,
public export, return type, declaration kind, optional literal and ownership/reference
status. Source kind `readonly` maps to a stable
`<bindingNamespace>/<module>#read:<name>` operation. Existing type and function IDs are
unchanged. A public reexport of a provider-owned read forwards to the provider's public
module without registering another Dart entry. Consumers use public libraries and
manifests and cannot enlarge or change the provider's declaration. Manifest 5 namespace
exports remain readable for dependency compatibility but are not written by the current
generator.

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
unchanged. Manifest 10 adds `topLevel.setters`; formats 2 through 9 reject that field.
Provider read and write surfaces are checked separately and cannot be widened by
consumers. Writes reuse ordinary input conversion and existing session cleanup without
new ownership rules. See
[mutable access tests](../../packages/flax_codegen/test/top_level_mutable_test.dart),
[readonly generation tests](../../packages/flax_codegen/test/top_level_readonly_test.dart),
[manifest tests](../../packages/flax_codegen/test/top_level_manifest_test.dart) and
[runtime tests](../../packages/flax_material_ui/test/ui/readonly_values_test.dart).

## Literal module tuple and registration

Generated Dart and JavaScript modules carry literal `moduleId`, `uiProtocol` and
`requiredCapabilities` values. The active UI protocol is 20 and native ABI is 2.
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

### `FlaxBindingRegistry`

On construction, **before** publishing type or function maps:

1. Exact match: `module.uiProtocol == flaxBindingVersion`.
2. Every `requiredCapabilities` entry is a member of Core's internal
   `supportedCapabilities`. Core owns that set; authors and manifests do not declare
   provided sets ([ADR 0021](../decisions/0021-external-binding-version-domains.md)).
3. Reject duplicate `moduleId` (primary identity). Also reject duplicate `name`.
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
static readonly fields and methods execute direct Dart calls.

The type model includes scalars, enums, selected objects, typed List/Map, complete Dart
callback parameter shapes, supported Futures, FutureOr, and Streams. Callback metadata
records each parameter name, positional/named form and requiredness. Interface inputs
accept selected scalar/reference implementations according to analyzer relationships. TS
and Dart use the same model; unsupported signatures fail generation. See
[collections and generics](interop.md).

Constructors and methods preserve optional omission and explicit null. Optional JS
undefined means omitted; collection undefined is rejected. Non-null constant objects,
collections and private callback defaults remain omitted from actual Dart calls.
Generated direct branches cover presence combinations; no private default is copied or
reimplemented. N independent omission parameters still require 2^N combinations.

Widget parameters except key may bind. Ordinary object construction and writes do not
bind. Callbacks support required/optional positional parameters, required/optional named
parameters, and analyzer-validated generic parameters. Named arguments use a final JS
options object. Generated direct calls preserve omitted defaults in both directions.
Generic callback calls convert through erased upper bounds while TS keeps the declared
relationship. A callback declared to return Future requires a JS Promise or thenable and
produces the typed Dart Future awaited by the caller. Future-returning Dart members use
the reverse conversion and the same UI checkpoint. Future parameters, first-level Future
collections, and FutureOr in supported positions generate under protocol 20. Nested
Future completion values, asynchronous lifecycle/build callbacks and Map callback keys
remain unsupported. Direct non-null `List<Widget>` callback parameters and results are
supported; nullable-element lists and other Widget collection shapes remain fail-closed.
Dart Stream references can appear in
parameters, results, callbacks and typed collections; they follow
[ADR 0020](../decisions/0020-ui-protocol-20.md). The JS interop handle is
`FlaxStreamReference` (not a `Dart*` alias and not Web `ReadableStream`). Generated
Flutter bindings expose the selected dart:async Stream family and call real Dart
operators. Widget builders and Route factories stay synchronous and retain their Flutter
lifecycle-specific ownership.

## Example object selection

Core supplies minimal real-reference bindings for `DateTime` (epoch constructor, `year`,
`isUtc`, `toIso8601String`), `Uri` (static `parse`, `scheme`, `host`), and
`StringBuffer` (constructor, `length`, `write`, `toString`). Consumers reuse those
owners. `proposeSelection` reports the provider without a duplicate selection and
diagnoses insufficient owner members or incompatible adaptations. It never expands an
imported package's API. Existing `Duration` and `TextRange` ownership is unchanged.

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
method. Automatic public-library binding also recognizes the conventional `void
dispose()` method, including an inherited one. Listener pairs select one non-null
VoidCallback argument on each method. These annotations identify API semantics; they do
not impose application disposal policy or cause session/widget cleanup to dispose the
object. See [object lifetime](objects.md) and [ADR 0034](../decisions/0034-flutter-application-semantics.md).

## Standalone typedefs

Add public aliases to the optional format-1 `typedefs` list:

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

Manifest 10 stores each alias's public name, originating URI/name, `typeParameters` and
target type. Even non-generic aliases require an empty `typeParameters` array. Lexical
slots preserve parameter identity across dependency projections. Bounds and defaults, as
well as targets, participate in dependency imports and nominal ownership checks.
Dependency consumers use the manifest and public libraries, without reading owner YAML.
Re-exports deduplicate by originating declaration; conflicting public names, generated
`NameInput` collisions and unsupported targets fail generation. Generic callback erasure
still rejects recursive, unbound or nonconvertible bounds. Callback shapes that would
require concrete runtime specialization are intentionally deferred; ordinary higher-rank
callbacks with erasable bounds remain supported. Mixin composition remains separate
work.

Record types are emitted as readonly structural TypeScript objects. Positional fields
use `$1`, `$2`, and so on in source order; named fields are canonicalized by name for
manifest and type identity. Dart-to-JS conversion reads each field and recursively uses
the existing TypeRef conversion. JS-to-Dart conversion requires every declared field,
ignores extra properties, validates field nullability independently from whole-Record
nullability, and reconstructs a real Dart Record. Records themselves have no wire ID,
owner or session reference identity; provider-owned objects nested inside fields retain
their normal identity. Manifest 7 is the first schema that carries Record fields, while
strict readers 2 through 6 reject that shape.

`typeArguments` and `methodTypeArguments` choose valid concrete Dart types. The analyzer
checks bounds and inherited substitution. TS retains its generic variables and
associated signatures, but those variables do not instantiate new Dart types. ValueKey
uses the explicit String/int scalar specialization for Flutter key identity.

`proposeSelection` can infer one class or mixin specialization from concrete analyzer
`InterfaceType` uses that a caller has already observed while walking selected
signatures or dependencies. The use sites must all resolve to one complete,
representable specialization; explicit `typeArguments` still take precedence.

Whole-graph discovery and multiple specializations per declaration remain deferred.
Conflicting or unresolved uses, nested generic runtime arguments, generic functions and
methods, and generic Extension receiver specialization still require explicit handling
or remain unsupported.

An explicitly selected static generic factory may instead use `deferredFactories`:

```yaml
classes:
  WidgetStateProperty:
    kind: object
    instanceMethods:
      resolve: [states]
    methods:
      resolveWith: [callback]
    deferredFactories: [resolveWith]
```

The generated JS call records the factory arguments without calling Dart. The complete
generation pass finds concrete uses of the returned generic object, emits one direct
materializer for each type, and attaches those materializers to the corresponding Dart
parameter metadata. The first concrete use creates the real Dart object and locks that
wrapper to the inferred type; later uses of the same type reuse it, and conflicting
types fail. Object/dynamic positions cannot infer or materialize a deferred factory.
Concrete arguments are checked against full analyzer-resolved bounds, including generic
supertypes and self-referential bounds after specialization. This keeps the
configuration finite while retaining exact Dart generic calls.

Deferred factories must be synchronous static generic methods whose result determines
every type parameter. Generic inputs are currently limited to direct synchronous
callbacks. Generic collections, Futures, Widgets, Routes, Contexts and lifecycle values
remain generation errors. Generalized inference for those shapes, or for factories whose
result does not determine every type parameter, is intentionally deferred. Full CLI
generation requires at least one concrete selected use. Partial fixture emission can omit
consumers so parser and emitter tests can inspect one module at a time.

`proposeSelection` automatically recommends `proxy: implements` for eligible contract
surfaces and `proxy: extends` when an ordinary class has reusable concrete behavior and
a uniquely selectable generative constructor. The proposed selection contains that
proxy and can be parsed directly. Explicit `proxy: extends` or `proxy: implements`
overrides the recommendation and remains fail-closed. See
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
package's own UI tests with only that package's fixture and dependency closure, and
requires prepared native assets. `package.dart integration NAME` is the owner-level real
UI gate. `check:aggregate` verifies only cross-module composition, while `check:ui` runs
all UI owner integrations plus that aggregate. Runtime, standalone, engine coexistence,
and release verification use their dedicated commands. See
[contributing](../../CONTRIBUTING.md#checks).

C-header FFI generation is separate (`ffi:generate` / `ffi:check`). JS tree shaking does
not remove Dart registry entries automatically; broad API coverage, bytecode loading and
additional engine adapters remain separate work.

Mounted Widget constructor callbacks with direct synchronous `Widget`, `Widget?` or
`List<Widget>` results use [invocation ownership](lists.md) automatically, regardless of
whether `BuildContext` appears in the callback parameters. The
`independentWidgetCallbacks` selection field remains accepted as compatibility metadata;
automatic discovery does not emit it.

Typed List elements and Map values may contain nested callbacks. The host adapts them
per mount, and nested Widget results always use independent invocation ownership.
Callback keys in Maps fail generation. Collection view identifiers include full nested
conversion types and callback signatures; nullable containers share the non-null view.

## Generated host overrides

`packages/flax/bindings/components.yaml` selects an internal `proxy: host` surface for
State. `proxyOverrides` selects concrete overrides; `proxySuper` selects direct parent
calls. Abstract methods remain mandatory. Host proxies emit Dart mixins and typed TS
lifecycle bases; their embedding host supplies ownership and synchronous dispatch. They
do not register constructible Dart objects. Required-super annotations come from
analyzer. Signatures are public, non-generic and required-positional; unsupported
signatures, modifiers, duplicate/unknown choices and unselected parent calls fail
generation. Ordinary extends/implements proxies keep their existing restricted API. An
independent Processor fixture compiles both outputs and executes parent effects and
return values.

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
stable function ID; public re-exports route to that single adapter. Provider references
must preserve the provider's selected signature and public export surface. See
[ADR 0030](../decisions/0030-extension-binding-adapters.md).

## Bound-only type references

Generic bounds may name interfaces without runtime bindings. Manifest 11 records their
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
