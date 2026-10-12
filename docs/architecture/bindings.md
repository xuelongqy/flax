# Binding Generation

Automatic library discovery is available through
`dart run flax_codegen generate --library package:foo/foo.dart`; see the
[codegen usage guide](../../packages/flax_codegen/README.md) and
[ADR 0033](../decisions/0033-automatic-public-library-bindings.md). It reuses the
binding contracts below, skips unsupported declarations, and accepts optional overrides
for binding semantics that cannot be inferred safely. Explicit configuration remains
fail-closed.

Automatic and explicit name checks share JavaScript identifier validation. Embedded
underscores and dollar signs, including a leading `$`, are supported without renaming.
Public exports use binding-identifier rules; instance and extension members and named
parameters use property-name rules. For example, `object.eval()` and `{arguments: 5}`
are legal, while a positional `arguments` parameter is rejected as a strict-mode local.
A leading `_` hides Dart declarations and members, but positional parameter names are
local names and can start with `_`. A single `_` is a Dart wildcard rather than a
readable local and remains excluded from automatic parameters. Class namespace
declarations retain binding-name rules. Generated API name collisions remain rejected,
and the capability inventory applies these same distinctions. Automatic discovery of
`static int total_count` exposes the same `Counter.total_count` read and
`Counter.setTotal_count(value)` write as explicit selection.

The analyzer-based generator resolves selected public APIs and emits Dart calls,
TypeScript declarations and shared parameter metadata. Configuration, parsing/model and
emission remain separate. UI protocol 24 reuses the unchanged native C ABI (ABI 2).

The `FlaxCodegen*Model` graph produced by parsing is the semantic IR between analyzer
resolution and emission. It carries resolved types, generics, inheritance, Widget and
callback roles, and capabilities such as `Disposable`. Emitters consume that semantic
model; they do not infer application ownership or lifecycle policy from method names.

## Extension type representations

Dart extension types cross the bridge as their erased representation. Automatic and
explicit generation use the same type conversion, including Flutter Widget, selected
Widget interfaces, Context and State, and supported nested collections, Records,
callbacks, Futures and Streams. For example:

```dart
extension type Panel(Widget value) {}
Panel echoPanel(Panel value) => value;
```

JS calls `echoPanel(widget)` and receives the underlying Widget reference. Generated
Dart calls preserve the declared `Panel` signature through a static representation cast.
No additional runtime object, binding owner, JS constructor, extension-type member
surface or independent `instanceof` token is created. This differs from ordinary named
extensions, which expose receiver views such as `StringX('a').repeat(3)`.

Every use site retains the representation's existing validation. Required and nullable
arguments, callback results, stale Context/State checks, session ownership and Widget
retention follow the ordinary binding path. For
`extension type MaybePanel(Widget? value) {}`, the JS value can be null even when the
declared Dart type has no `?` suffix; required arguments still reject missing values and
undefined. A Route/Page representation does not enable unsupported results or callbacks.
Unsupported representations fail closed; automatic selection reports their conversion
reason. Representation-only declarations retain the `extension_type_representation_only`
diagnostic because they do not expose a class.

Wrapping a Stream does not recover types lost by ordinary erased generic operations. In
JS, after `const items = await widgetStream.toList()`, `items.get(0)` no longer carries
Widget conversion metadata; use a typed Dart collection result when extracting Widget
events.

## Instance checks and sealed results

Generated class exports implement `Symbol.hasInstance`, including non-constructible
classes, interfaces and mixins. `value instanceof Animal` checks the authenticated
binding view's registered type and selected Dart supertypes. TypeScript narrows the
value to the bound surface, so selected parent members remain callable. The check reads
only bridge-owned weak metadata: it does not call Dart, read getters, construct an
object, or retain a business object. Prototype chains are not rewritten to imitate Dart
inheritance.

Sealed parents keep legal public Dart factories and ordinary reference wrapping. Public
selected children are recognized when Dart returns their view through a parent
signature. For example, given a sealed `Result` with selected `Success` and `Failure`:

```ts
const result: Result = Result.success(7);
if (result instanceof Success) {
  console.log(result.value); // Selected Success member; narrowed by TypeScript.
} else if (result instanceof Failure) {
  console.log(result.message);
} else {
  console.log(result.describe()); // Private or unselected implementations can remain.
}
```

The generated exports are callable Dart factories or non-callable type tokens, not
arbitrary JS subclass constructors. Only configured legal `proxy: extends` exports
support `new` and JS inheritance. Their inherited instance-check hook uses ordinary JS
prototype checks for a JS-authored child, preserving sibling discrimination and the
child's own TypeScript members. Dart `final`, `sealed`, `base` and `interface` rules
remain enforced during proxy selection; no external Dart child of a sealed class is
generated. New modules require the additive `instance-checks` capability alongside
`native-widget-proxies`; Manifest 18, UI protocol 24 and ABI 2 are unchanged. Regenerate
providers and consumers together; older generated exports do not gain the new class
tokens automatically.

### Limits of JavaScript instanceof

| Case                                                | Contract                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parent-only or independent provider view            | No downcast or provider conversion. A parent-only view fails a child check; independently bound views have distinct wire identities. Reusing a dependency provider reuses its identity.                                                                                                                                                 |
| Private or unselected descendants                   | A selected compatible ancestor can match; no exported child token exists. Sealed results are not an exhaustive TypeScript union and keep a fallback branch.                                                                                                                                                                             |
| Runtime generic arguments or erased representations | Checks identify the bound family, not `Box<String>` versus `Box<int>`. Typedefs, extension types, copied Records/data and enum adapters gain no independent class token. Generic argument validation still occurs at typed Dart calls.                                                                                                  |
| Descriptors and deferred construction               | Widget/Route/Page descriptions and unmaterialized deferred factories have no authenticated object handle and return false. Native Widget proxies, ordinary references, Contexts and Streams can match; a type-only State wrapper has no instance-check handle. JS-authored Widget/State classes retain ordinary JS prototype semantics. |
| Released references and foreign values              | Generated binding tokens reject released handles, raw objects, prototype forgeries, primitives, null and undefined. JS-authored subclass checks follow native JS prototype semantics, which do not validate bridge handles. Member calls still enforce mounted state, session ownership and argument types.                             |

These limits intentionally prevent a successful check from silently manufacturing a
different API surface. A successful check does not guarantee a mounted Flutter owner.
`Object.getPrototypeOf` and `constructor` do not reveal the Dart superclass. The
generated
[compile regression](../../packages/flax_codegen/test/instance_types_test.dart) and
[real-engine regression](../../packages/flax/test/ui/interop_test.dart) cover sealed
factories, public children, private descendants, interfaces, mixins and JS subclasses.

## Shared member dispatch

Ordinary object, Context, State and Stream wrappers share one frozen JS prototype per
bound type. Members resolve to validated numeric operation slots once per session;
subsequent calls pass the slot, receiver handle and typed arguments. The operation table
contains binding metadata and provider context, never a business-instance root.
Top-level and static calls use the same table with receiver zero. Conversion, ownership,
provider visibility and foreign-receiver checks remain at the Dart boundary.

Ordinary Widget instance APIs use this same object view and member dispatch. Automatic
selection includes convertible getters and methods from the effective Dart hierarchy,
including computed getters, non-virtual methods and final classes. A factory with an
instance API creates a fixed real Dart Widget; a constructorless declaration exposes
only references returned by Dart. No proxy subclass or new GC owner is generated for
these calls. Reactive descriptions remain available for rendering-only selections and
the factory side of explicitly selected Widget proxies. JS inheritance and native
lifecycle overrides still require the existing explicit `proxy: extends` selection.
Getter reads stay live; warm calls reuse the existing cached operation slot. Generic
Widget references preserve selected native parent types and their TypeScript arguments
through the common reference projection. Known constructor specializations reuse the
ordinary on-demand member view so returned List/Set values keep their concrete APIs.
Unsupported public dependencies are skipped without retaining incomplete type-cache
entries.

The
[automatic generation test](../../packages/flax_codegen/test/widget_members_test.dart)
and [real UI fixture](../../packages/flax/test/ui/widget_members_test.dart) exercise
inherited/final/constructorless Widgets, getter side effects, typed methods, callback,
Future/Stream results, identity, invalid arguments and mount/unmount cleanup.

Generated Dart subclasses retain one peer for the actual JS receiver. Shared member
metadata goes through internal engine binding extension 1. The engine looks up the
current property and invokes it with real `this`; it does not snapshot callbacks or wrap
the business instance in a JS Proxy. Unchanged generated delegates report an unhandled
result and the typed Dart override calls `super` directly. Explicit JS super uses the
selected direct parent entry, preserving generics, defaults and must-call-super. Private
fields, arrow fields, inheritance and later member replacement stay ordinary JS.

Methods use standard receiver semantics. A saved `const call = object.method` requires
`call.call(object, ...)` or explicit `.bind(object)`; wrappers no longer allocate a
bound method for each instance. Required properties accept accessors and writable data
fields. Ordinary proxy methods can return Widgets through the same typed conversion as
Widget getters, including native configurations, JS subclasses, nullable results and
concrete subtype checks. Dart may retain and mount them later using normal references
and joint GC. Ordinary proxy Widget, Context and State properties reuse the same typed
conversion as ordinary member calls, including nullable values and supported finite
aggregates. Future/FutureOr/Stream properties use existing async conversion, including
nested Records/collections and returned async functions. Getter invocation returns the
typed value immediately; a setter function must still finish synchronously. Each
read/write checks borrowed Context/State validity; Dart-kept Widget results preserve JS
overrides through joint GC without extra lifetime configuration. UI protocol 24 rejects
old generated modules. Manifest 18 records required super calls independently for
getters and setters; selection 2 and native ABI 2 remain unchanged. Selected concrete
accessors enforce inherited `@mustCallSuper` using the same invocation checks as
methods, including reentry and Future/FutureOr values. Super must run before the JS
invocation returns, and an omitted JS override falls back directly to Dart. Regeneration
can replace an old owned module inventory, but runtime loading still rejects its
protocol. See [proxy properties](proxy-properties.md).

## Enum bindings

Enums are finite Dart values exposed as TypeScript interfaces and frozen JavaScript
namespaces. They are neither TypeScript numeric enums nor constructible JS classes:

```ts
const ready = Status.ready;
ready.label;
ready.format('hello', { separator: undefined });
Status.fromCode(200) === ready;
Status.values[0] === ready;
```

`types: [Status]` selects constants, `values`, `name` and `index` only. To bind an
enhanced enum's public members, use the existing class selection with `kind: enum`:

```yaml
classes:
  Status:
    kind: enum
    constructors:
      fromCode: [code]
    getters: [label]
    instanceMethods:
      format: [prefix, separator]
```

Automatic selection discovers enhanced enum fields, accessors, methods, static members,
named public factories and operators. Factories must return an existing constant;
unnamed factories, generative constructors, JS construction, subclassing and proxies are
rejected. Automatic selection reports unnamed factories as skipped while retaining their
constants and other members. Enum mixin and interface members use the existing
inherited-member rules. Operators have explicit aliases such as `operatorAdd`; JS
arithmetic syntax is unchanged.

Members reuse the typed function registry, with an authenticated enum receiver instead
of an object handle. One shared frozen prototype serves all constants. A final primitive
field performs one real Dart read per constant/session and then caches its value,
keeping private constants and application build defines correct. Computed getters and
static reads stay live; object, collection, callback, Future and Stream results use
existing conversion and GC. Importing a module never reads application state. Static
writes use the existing explicit `setProperty(value)` API and are not rolled back on
session close.

Each generic constant retains its actual closed type, for example `Kind.number` is
`Kind<number>` while `Kind.text` is `Kind<string>`. Typed Dart calls still validate
those arguments through finite typed adapters selected by private constant identity.
Generic collection inputs accept the existing Dart references and JS collection inputs;
returned values retain their Dart collection interfaces. Callback arguments and results
use those same closed types. Ordinary generic methods automatically use supported closed
bound erasure; arbitrary runtime generic specialization remains outside this contract.
Named generic factories reuse ordinary constructor specialization; explicit type
arguments keep their concrete input types. The `values` array retains the union of its
constants' closed types, even when a factory is configured for one type. Enums do not
provide their own `instanceof` class token. A bound compatible interface can recognize
an enum value. An enum returning through that interface or Object keeps its canonical
identity.

Core remains the implicit provider. Automatic selection reuses a dependency enum only
when its selected member surface is sufficient; independent non-Core bindings keep
separate wire identities. Source packages provide implementation, public types packages
provide declarations, and consumers use existing plugin injection. Manifest 18 records
constant types and field caching; UI protocol 24 rejects earlier enum transport.
Selection format 2 and native ABI 2 are unchanged. Regenerate providers and consumers
together.

See [generator tests](../../packages/flax_codegen/test/enum_test.dart) and
[real-engine tests](../../packages/flax/test/ui/interop_test.dart).

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
Manifest `formatVersion: 18`; the reader accepts format 18 only. It adds
`proxy.mustCallSuperAccessors`, preserving separate read/write requirements through
dependency projection. The generator has no reader or normalization path for other
binding selection or Manifest formats. See
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
unchanged. Context, State and Widget variables reuse ordinary typed conversion,
including nullable values and supported collections and async values. Context reads
borrow a weak session-local reference to the current native Element. Context and State
reads still require a mounted value when non-null; storing one does not keep it mounted.
Each session creates its own Context wrapper for the same Dart value; JS references
remain session-local. Dart-retained Widgets keep their existing configurations and JS
overrides until ordinary references become unreachable. Unsupported conversions and
Route/Page ownership, including nested declarations and type arguments, fail generation.
Reads create no implicit reactive subscriptions or cross-session reference cache.
Closing uses existing call, reference and pending-delivery cleanup; it does not dispose
application-owned values or make a JS-backed Widget usable after its owning session has
closed.

Manifest 18 stores public-library routing plus each readonly declaration's source,
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
unchanged. Manifest 18 records `topLevel.setters` and their independent operation IDs.
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

Ordinary static methods use the same `FlaxFunctionBinding` and `invokeTopLevel`
transport as these accessors. Automatic selection includes declared public Widget static
methods; State, Route, Page, Stream, object, member-only and Widget-interface namespaces
share the same typed call. No instance, public constructor or mounted owner is required.
A Widget with no selected public constructor retains its native type matcher and an
opaque `Widget` view, so a static factory can return it without inventing a JS
constructor or exposing unselected Flutter ancestors. `methods` selects static methods
on classes. On a Widget interface, the Analyzer distinguishes declared static methods
from native instance requirements in the same selection: statics use function conversion
and native requirements keep direct Flutter forwarding. Deferred generic factories
retain their existing materialization path; enums already use function operations. No
extra runtime branch or duplicate static operation is registered. Reexported Widget
interfaces use the same provider capability check as ordinary classes, including native
requirements and statics. A type-only or incomplete non-Core provider cannot replace
that surface; automatic selection binds it locally. Regenerate provider and consumer
outputs together.

Manifest 18 stores static accessor types and distinct operation IDs:
`#read:Counter.count` and `#function:Counter.count%3D`. Class IDs and unrelated
operation IDs retain their identities. All workspace manifests are regenerated; older
formats are rejected. Selection 2 and native ABI 2 are unchanged; the active UI protocol
is 24. Core remains implicit and cannot be republished. Non-Core packages can bind the
same source independently; automatic reuse requires the complete requested read/write
surface from a unique dependency provider. Types packages publish declarations and
source packages publish implementations through the existing plugin injection path.

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
`requiredCapabilities` values. The active UI protocol is 24 and native ABI is 2.
`uiProtocol` is the required field for module compatibility; there is no parallel
`version` field or ambient Core fallback.

### `FlaxBindingModule`

`FlaxBindingModule` contains `name`, `types` and `functions`, plus these required
fields:

| Field                  | Rule                                                                                                                                                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleId`             | `String`; [ADR 0022](../decisions/0022-stable-binding-identity.md): `bindingNamespace + "/" + name`                                                                                                                                                 |
| `uiProtocol`           | required `int`; **no default**. Same integer domain as Core `flaxBindingVersion` (UI protocol). There is no parallel `version` field.                                                                                                               |
| `requiredCapabilities` | required `List<String>`; sorted unique; generated modules require `native-widget-proxies`. Generated code must emit an **explicit literal** (for example `const <String>["native-widget-proxies"]`); never omit and rely on a Core ambient default. |

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

Widget factory calls keep distinct descriptor hosts and per-mount signal ownership.
Selected `proxy: extends` Widgets also support native construction and JS subclasses.
The Dart proxy extends the real Widget with `FlaxWidgetProxy`; Flutter keeps the native
Element and lifecycle. Constructor identity is a weak matching token, not a session
owner. Configuration is frozen after construction when it crosses into Dart. Concrete
Widget signatures validate the real native configuration; descriptor inputs become fixed
snapshots at this boundary. Base Widget inputs preserve descriptor reactivity. Page and
Route descriptors retain their existing hosts and resource leases. Contexts and
NavigatorState are borrowed Flutter references. `kind: object` represents ordinary
references, with optional constructors and disposal. Its getters, setters, static
property reads and explicit setter methods execute direct Dart calls, as do its selected
instance and static methods.

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

Direct Context inputs are supported by automatic and explicit selection in functions,
constructors, methods, setters, returned Dart functions and supported collections. They
borrow an existing Context from the same active session. Top-level variable/getter,
direct function and callback results reuse this identity, including nullable results,
typed finite aggregates and Future/FutureOr completion. The JS wrapper is weak; ordinary
Dart references retain their own values. Each conversion rejects inactive or unmounted
references, including async completion after unmount. JS cannot forge or construct a
Context, and no Flax mount owner is required. Context-containing Stream callbacks,
supported Future/Stream combinations and derived collection reads reuse the same
conversion; see [Context results](interop.md#context-results).

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
under protocol 24; nested completion values retain their own declared async semantics.
Asynchronous lifecycle/build callbacks and Map callback keys remain unsupported. Finite
List/Set/Map/Record and Iterable Widget callback parameters and results support nullable
containers and elements. Iterable callback signatures accept JS arrays/Sets and Dart
Lists/Sets; actual arbitrary lazy iterators remain fail-closed at conversion. The same
rule applies to selected Widget subclasses/interfaces and supported asynchronous
compositions, while ordinary native method Iterable views stay lazy. Dart Stream
references can appear in parameters, results, callbacks and typed collections, including
nested ordinary value shapes; they follow
[ADR 0020](../decisions/0020-complete-dart-stream-interop.md). The JS interop handle is
`FlaxStreamReference` (not a `Dart*` alias and not Web `ReadableStream`). Generated
Flutter bindings expose the selected dart:async Stream family and call real Dart
operators. Widget builders and Route factories stay synchronous and retain their Flutter
lifecycle-specific ownership.

Ordinary functions, object constructors, methods, and returned Dart functions invoke
callbacks directly, preserving native Context identity, synchronous order, typed results
and exceptions. Supported arguments can be indexed, optional, nullable or named;
supported results include nullable Widgets, selected Widget interfaces and Futures.
Mounted Widget callbacks share this conversion, including direct typed Widget lists;
fixed interface configurations accept ordinary callbacks and retain their original
closures during native configuration reuse. Only base Widget UI callbacks can use an
ErrorWidget fallback; narrower interfaces propagate the original error. No synthetic
content host is allocated. Configured Route-producing calls keep their synchronous
Observer capture and transition-completion leases. See
[function contracts](functions.md) and [bridge references and GC](references.md).

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

Manifest 18 stores each alias's public name, originating URI/name, `typeParameters` and
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
their normal identity. Manifest 18 carries the complete current Record shape.

Generated modules also register compiled Record signatures, native type checks and field
accessors. An erased `Object?` result, including `Stream<Record>.toList().get()`,
selects an unambiguous registered projection using the existing
Core/current-package/dependency provider order. Its fields retain the ordinary typed
conversion. A weak association preserves this generated shape when a copied JS Record
passes through an erased callback; its fields are checked again before reconstruction.
Signatures describe compiled shapes, not object identities or business-object roots.
Unknown or ambiguous erased Dart Records are rejected. Fresh JS objects use their
declared Record position; spreading or cloning an object does not copy the weak shape
association. Direct typed Record positions do not require inference.

Generic declarations use one shared Dart owner while TypeScript keeps the declared type
parameters. An unconstrained owner uses `Object?`; a simple upper bound such as `num` is
used when required. Existing Dart values such as `Box<String>` and `Box<int>` therefore
share one owner without losing their TypeScript relationships.

Constructors are emitted only when every class type parameter occurs in a selected
required input signature. This includes nested collections, Records, async values,
nominal arguments and callback signatures, using the existing recursive TypeRef rules.
Concrete targets normally come from Analyzer-observed use sites. For one direct scalar
parameter, evidence for either `String` or `int` completes the pair when both satisfy
the Dart bound; the runtime input remains restricted to strings and safe integers.
Multiple targets must have disjoint bridge domains. Overlapping targets such as `num`
and `int`, inference from runtime collection contents, unresolved type parameters,
invalid bounds and runtime type-token requirements fail closed or leave the shared owner
non-constructible. `typeArguments` and `methodTypeArguments` remain for concrete cases
that cannot be inferred safely.

Closed targets may themselves contain nested supported arguments, for example
`Box<List<String>>` or `Box<Map<String, List<int?>>>`. Parsing and bound validation
recurse through the entire configured or observed argument. A List can be distinguished
from a scalar, Map or Set without examining its elements; Iterable overlaps List and
Set. `Box<List<String>>` and `Box<List<int>>` therefore cannot share an automatic
construction entry, even for nonempty input. Select one with
`typeArguments: ['List<String>']` when that is the intended API. Missing targets,
invalid arity and unresolved nested types still fail closed. Nested Stream arguments
require the ordinary selected Stream owner. When a shared `Iterable` bound decodes a raw
JS Set into a typed List copy, constructor dispatch uses its original weakly recorded
shape. Native List/Set references use their actual Dart shape; no collection elements
are inspected to choose a target.

For `Bag<T>(List<T> items)`, one observed `Bag<String>` use closes the constructor's
List conversion and its generic result to `Bag<string>`. Empty arrays are valid and
numeric elements are rejected by the ordinary converter. Type parameters inside
`Map<K, List<V?>>`, `Future<List<T>>` or a callback result follow the same signature
matching; nullability on a `T?` leaf does not change the selected `T`. Simultaneously
observed `Bag<String>` and `Bag<int>` uses remain ambiguous because both accept the same
JS array shape. Optional-only or missing generic inputs are not inferred. The
String/safe-int completion applies only to direct `T` inputs and never creates an
unobserved nested target. Named enum factories also expose only their compiled targets
and keep multi-input correlations through overloads. Extension types reuse their
representation conversion. A parameter erased out of that representation, such as
`Token<T>` represented by `int`, is not inference evidence and still needs explicit
class arguments.

Specialized Dart factory functions expose the actual concrete TypeScript signature. A
single target accepts only its supported input conversion and returns its closed generic
type; multiple collection/scalar targets use overloads. Raw JS collections reaching a
shared erased input reuse the checked collection reconstruction used by Stream adapters,
including numeric validation and nested async adapters. Correctly typed Dart references
retain identity; incompatible native collections cannot acquire a narrower type through
copying. Other constructor inputs such as `List<Future<T>>` use the same selected
concrete target. Erased Records restore each field through the same checked conversion;
they cannot narrow incompatible native collection fields. A nullable `T?` input does not
change a selected non-nullable `T`. Multiple targets share callback conversion before
dispatch. When that erased callback is not assignable to every selected target,
generation requires explicit `typeArguments` and automatic selection reports
`constructor_specialization_callback`. For example, `T Function()` needs a concrete
target, including inside collections or async inputs; a compatible `void Function(T)`
remains supported without one. A single target already uses its concrete callback
conversion. Automatic JS proxies retain their existing shared owner and inheritance
rules.

For real Dart objects in ordinary Object bindings matching a known constructor target,
instance conversion uses that target as well. A `Box<List<String>>` therefore returns a
List view, accepts an array or compatible native List in its writable `T` property, and
adapts `T Function(T)` and `Future<T>` without falling back to the Iterable bound.
TypeScript generic inputs reuse the existing `DartInput<T>` conversion types. Wrong
shapes or incompatible native collections still fail before a write or invocation.
Generic callback bounds such as `R extends T` use the selected class argument without
capturing the callback's own `R` or an independently shadowed type parameter. Fixed
generic method arguments are checked against every constructor target. If a bound
depends on `T` and the configured method argument does not fit all targets, parsing
rejects the selection; select concrete class `typeArguments` instead. Constructor `data`
annotations do not determine a member's conversion. Ordinary members retain real
references, while explicitly marked members retain their data positions. If a `data`
annotation constrains `T` itself, an automatic collection or other native view target
requires explicit class `typeArguments`; parsing rejects the conflicting plain-data and
native-view signatures. A concrete selection applies data conversion to the member's
Object/dynamic leaves.

The generator emits private member metadata and direct calls only where substituting the
class type parameters changes conversion. The JS class, unrelated methods and conversion
adapters stay shared. The runtime selects metadata on the first affected operation and
caches it per object and requested binding owner, including parent and provider views.
The cache contains metadata only, so it adds no business root and no JS round trip.
Constructor evidence already exists in the Manifest; no extra runtime type token,
schema, protocol or ABI version is introduced. Native objects matching no known target
and automatic JS proxies keep their shared erased owner. Matching uses Dart type checks;
explicit type arguments remain the way to require a different concrete contract. See the
[generator regression](../../packages/flax_codegen/test/nested_generic_constructors_test.dart)
and
[nested input regression](../../packages/flax_codegen/test/nested_constructor_inputs_test.dart),
plus the [real bridge regression](../../packages/flax/test/ui/interop_test.dart).

### Generic methods

Ordinary instance and static generic methods use the same shared bound resolution as
callbacks and top-level functions. Automatic selection and explicit member selection
without `methodTypeArguments` both choose `Object?` for an unconstrained method
parameter, or its supported public fully closed bound. Existing conversion handles
scalar values, native references, collections, callbacks, Future and Stream positions.
Method parameters keep their lexical identity: specializing a `Box<String>` member view
does not replace an independent method-local `T` with the class's `T`. An erased
`Object?` position retains the ordinary Object conversion limits: raw JS functions need
a typed callback position, and Widget references need a typed Widget position. Erasure
does not bypass those checks.

For example, `T echo<T>(T value) => value` can be selected automatically:

```ts
const text: string = object.echo('a');
const count: number = object.echo(2);
const items = object.echo(['a']); // DartList<string>, not a JS Array
const first: string = items.get(0);
const uppercase: string[] = items.toArray().map((value) => value.toUpperCase());
```

Both calls use the same Dart `echo<Object?>` entry. TypeScript retains the input/result
relationship and generic input conversion, including inherited and enum methods; JS
subclasses continue to override methods and call `super` through the existing proxy. No
new bridge operation or per-runtime-type materializer is generated. Known concrete
member views still specialize owner-dependent inputs and results on demand.

Object-erased method-local and callback-local generic results use `DartOutput<T>` to
describe the actual bridge result. Raw Arrays, Maps, Sets and plain field objects become
Dart collection references, including recursively inside collections and Promises.
Existing Dart objects, collections and Streams keep their reference types. Record
outputs use a type-only `DartRecord` brand: an existing Record retains its field view
through a generic call, while an unbranded JS field object becomes a Dart Map. Typed
Record input positions still accept ordinary field objects. No new runtime brand is
installed.

Generic JS callbacks receive these converted types. For example, an identity callback
can be written as `<T>(value: DartOutput<T>) => value`; an asynchronous one can return
`Promise<DartOutput<T>>`. JS subclasses retain ordinary inheritance and `super` calls,
but their TypeScript overrides must describe the same converted output contract. Generic
bounds and concrete factory type arguments remain unprojected.

Erasure does not infer a new Dart `T` from a JS value or a TypeScript type argument.
`List<T> wrap<T>(T value) => [value]` therefore creates `List<Object?>`, even when a
caller passes a string; runtime type tests and typed allocations observe the erased
argument. Select `methodTypeArguments: {wrap: [String]}` when the actual Dart
`List<String>` contract is required. Passing an existing typed Dart reference through
`echo` retains its identity and concrete type. Dependent or recursive bounds that still
contain open parameters require explicit checked arguments. A bound inherited from an
already closed owner, such as `U extends String`, can use that resolved bound.

Static generic factories returning nominal generic objects, directly or through a
Future, retain the existing concrete materialization contract. A factory whose full
method parameters cannot be inferred by that contract still requires explicit legal
`methodTypeArguments`; it must not silently construct an erased object. Ordinary
collection and Stream results reuse the existing bound erasure.

The [generator regression](../../packages/flax_codegen/test/generic_methods_test.dart)
checks selection, lexical scopes, legal/illegal explicit arguments, Manifest round
trips, strict TypeScript and Dart execution. The
[real bridge regression](../../packages/flax/test/ui/interop_test.dart) covers generic
calls, proxy overrides, async delivery and cleanup.

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

Ordinary functions and instance/static methods accept direct State inputs through the
same borrowed converter as extensions. Live JS States resolve to their real Dart hosts;
native State wrappers require a mounted State. Typed Widget collection inputs, including
`List<Widget>`, nullable/nested lists and supported async compositions, use the existing
recursive converters in both explicit and automatic selection. There is no callable
kind-specific collection ban. Instance properties, static properties and top-level
variables also accept State reads/writes and Widget writes through these same
converters. Explicit and automatic selection share the member type rules. Instance
writes use ordinary property assignment; static and top-level writes use explicit
`setX(value)` methods. Importing a module performs no Dart reads, and each write calls
its Dart setter once. Invalid or foreign references and `undefined` are rejected before
the setter runs; nullable signatures accept `null`. A setter which stores a Widget and
then throws keeps that Widget's configuration valid. Application-owned static/global
values survive session close; Flutter still controls State mounting. See
[reference property tests](../../packages/flax/test/ui/extensions_test.dart).

Ordinary callback parameters and results use the same recursive converters as methods,
including State, Context, Widget and selected object references. The analyzer creates
one callback model; explicit and automatic selection share its direction and ownership
validation instead of maintaining separate type lists. State visitors, returned Dart
functions, nested callbacks, nullable aggregates and supported Future/FutureOr/Stream
compositions borrow the real mounted State. Conversion happens when a callback runs or
an async value is delivered: forged, foreign-session and unmounted references fail then.
Erased Object positions also borrow State references, so generic Stream operators and
derived collection reads preserve the same real State rather than treating it as an
unbound Dart object. Existing typed State views keep their selected binding identity. A
real State can have separate base and concrete binding views without changing either
view's type. Saving a callback or a State does not keep the Flutter State mounted.
Escaped callbacks retain their existing Dart/JS ownership and session-close behavior.
Context arguments still register their mount owner; Page arguments and Route results
retain their explicit lease rules. Nested Streams recurse through the same lazy typed
views in callback arguments and results, without flattening or implicit subscriptions.
Unresolved runtime types and unsupported Route/Page positions remain rejected. No
additional State callback adapter, lifecycle configuration, protocol version or GC
mechanism is introduced. See the same reference property tests for synchronous,
asynchronous and retained State callbacks.

## Extension declarations

Select public named extensions independently from classes:

```yaml
extensions:
  StringX:
    getters: [isBlank]
    methods:
      repeat: [count]
    staticGetters: [times]
    staticSetters: [times]
```

```typescript
StringX(' ').isBlank;
StringX('a').repeat(3);
StringX.setTimes(5);
StringX('a').repeat(StringX.times); // 'aaaaa'
```

The callable factory creates a JS view of its receiver, with shared methods and getter
accessors. It accepts exactly one defined receiver; `null` is valid for nullable
receivers. It makes no Dart call, allocates no Dart object or native handle, and does
not modify the receiver's prototype. Normal type conversion happens when accessing a
member. Views keep their receiver while reachable; existing reference ownership and
cross-heap GC remain responsible for the receiver. Context keeps its borrowed Flutter
lifetime, so retaining a view does not keep a Context mounted.

Instance getters use readonly properties, setters use `setX(value)`, and methods take
only their selected positional and named arguments. `staticGetters` are readonly factory
properties, `staticSetters` generate `setX(value)` on the factory, and `staticMethods`
are factory methods. Read and write selections are independent, including setter-only
members and accessors with different read/write types. Static writes use one ordinary
function call with the actual setter input conversion; supported references, callbacks,
collections and async values use their existing validation and lifetime rules. Missing
or undefined values, extra arguments and wrong types remain rejected. Each access
executes the real Dart getter or setter, preserving side effects, exceptions and late
initialization errors. Static state belongs to the Dart application, is shared across
sessions, and is not rolled back on session close.

Private and readonly static fields cannot be written. Explicit conflicting `setX`
exports fail generation; automatic selection keeps a selected static method/getter and
reports the conflicting write as `extension_export_collision`. A readonly provider does
not supply write capability. Importing a module never reads a Dart getter. Detached
instance methods need an explicit receiver binding:

```typescript
const text = StringX('a');
const repeat = text.repeat.bind(text);
repeat(3);

ListX(values).setFirstValue(value);
ContextX(context).isMounted;
```

The view is not constructible with `new` and does not expose a Dart class token. Forged
views and detached calls without `bind` are rejected. Member name collisions are checked
separately on the view and factory. `operators` selects Dart operators with ordinary
method names: `[]` / `[]=` become `getIndex` / `setIndex`, `+` / `-` become `add` /
`subtract`, unary `-` is selected as `unary-` and becomes `negate`. Multiplicative,
comparison, bitwise and shift operators have fixed names in the generator model. Dart
disallows extension declarations of Object members, including `==`.

Every invocation explicitly names the Dart extension override; no implicit resolution or
TS prototype mutation occurs. Extension and member generic scopes preserve TS type
relationships, with upper-bound erasure in Dart. Shadowed parameter names are renamed
only in the TS signature. Receivers, arguments and results reuse existing recursive
conversions, including Records, aliases, callbacks, collections and Future/FutureOr.

Captured receiver parameters and a member's own parameters use the same `DartOutput<T>`
projection as ordinary generic functions. For example, `ListX([['a']]).firstValue` is a
`DartList<string>`: use `.get(0)` or explicitly copy with `.toArray()`. Setters accept
raw inputs or compatible converted references; callback arguments, operators, Records
and Future/FutureOr results retain this recursive projection. Scalars, existing Dart
references and closed native bounds stay typed. An Object-erased input cannot invent a
native Record from a raw field object, and this declaration rule adds no runtime copy,
adapter, bridge operation or generic type token.

Context, Widget, Widget interfaces, State and Route/Page descriptors use their ordinary
binding converters. Native State inputs reuse their existing weak handles and require a
mounted State. Invalid, unmounted and foreign Context access remains rejected.
Unsupported ordinary result/callback positions remain unsupported; in particular,
callbacks returning Routes, including nested callbacks, still require explicit ownership
and cannot be selected on an extension without it. Native Route and Page results have no
general callable conversion and fail generation.

Views do not reify erased generic arguments. Native Dart subtype checks still apply: an
unconstrained `T` does not convert a JS number into a Dart `int` for a native
`List<int>`. An extension explicitly declared on `List<int>` uses the ordinary integer
converter; wrapping the same list in a generic view does not add runtime specialization.

Extensions have no runtime instance or type wire ID. Each selected operation owns a
stable package-scoped function ID; reused public re-exports route to the selected
provider's view factory without a duplicate implementation. Independent packages may
emit separate adapters. Provider references must preserve the provider's selected
signature and public export surface. This replaces the receiver-first JS API; regenerate
provider and consumer packages together. Selection format 2, Manifest 18, UI protocol 24
and native ABI 2 are unchanged. See
[ADR 0030](../decisions/0030-extension-binding-adapters.md).

## Bound-only type references

Generic bounds may name interfaces without runtime bindings. Manifest 18 records their
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
reuse shared prototypes and method forwarding. Detached methods follow standard JS
receiver rules and require explicit `.call(receiver, ...)` or `.bind(receiver)`. State
variant native methods reuse `defineStateMembers`.

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

Manifest 18 records both the Dart operator and its JS method alias and rejects previous
formats. Provider reuse requires the requested operator surface. Core injection,
provider isolation and source/types package ownership are unchanged. Selection format 2,
The active UI protocol is 24; native ABI 2 is unchanged.

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
