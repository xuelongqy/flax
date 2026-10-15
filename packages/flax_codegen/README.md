# flax_codegen

Uses pinned analyzer 13.3.0 to generate selected public Dart APIs, TypeScript wrappers,
and typed Dart calls from one model. Publication remains disabled.

Public generator types use the `FlaxCodegen` prefix, including
`FlaxCodegenBindingConfig`, `FlaxCodegenBindingParser`, `FlaxCodegenBindingEmitter`, and
`FlaxCodegenTypeRef`. Generator models remain separate from runtime binding metadata
such as `FlaxTypeRef`; the public entry is still `flax_codegen.dart`.

- `lib/src/config.dart`: selection input, public libraries and explicit runtime types.
- `lib/src/parser.dart` and `model.dart`: declarations, identities, types and defaults.
- `lib/src/emitter.dart`: direct calls, callback adapters, Widget hosts and TS output.
- `bin/flax_codegen.dart`: package-atomic `validate` / `check` / `generate` CLI.
- `test/fixtures/plugin`: independent declarations exercising the same generator.

Run `dart run melos run bindings:generate` after changing inputs, then
`dart run melos run bindings:check`. The check compiles Dart/TS fixtures and executes
constructor-default tests without downloading or running an engine. `ui:bundle` also
generates the independent interop fixture into ignored output for real `ui:test` use.

The parser resolves requested libraries and dependencies in the supplied root's package
environment without recursively discovering unrelated workspace projects. Await
`parser.dispose()` when analysis finishes; test teardown callbacks can return this
Future directly. Codegen tests use a three-minute default budget because analyzer-backed
fixtures also compile Dart/TypeScript and launch Flutter tests. Explicit longer fixture
budgets and all failure assertions remain in force.

The package CLI is:

```sh
dart run flax_codegen validate --config <direct-yaml>
dart run flax_codegen check --config <direct-yaml>
dart run flax_codegen generate --config <direct-yaml>

dart run flax_codegen validate --library package:foo/foo.dart
dart run flax_codegen check --library package:foo/foo.dart
dart run flax_codegen generate --library package:foo/foo.dart
```

`<direct-yaml>` must be an explicit direct child of the package `bindings/` directory.
The CLI discovers sibling binding configs in that directory, resolves current-only
Manifest 21 dependency projections through the package config, and (for `generate`)
writes `lib/...`, `js/...`, and `bindings/manifest.json` below the owning package. The
old `dart run flax_codegen [--check] <config>` form is not supported.

`--library` is the low-configuration path. It accepts one public `package:` library,
uses that library's export namespace as the public API, reuses compatible provider
manifests from direct Dart dependencies, and emits the largest safe surface it can
infer. A public barrel may export declarations from `lib/src/`; callers still pass the
barrel URI. Direct `package:.../src/...` targets are rejected. Unsupported declarations
do not abort the library: the CLI prints `SKIP <target>: <reason>` and continues.
Deprecated declarations remain selected and are reported as `NOTE` entries.

Automatic discovery covers classes and mixins, enums, typedefs, named extensions,
extension types, top-level functions, and top-level values/getters/setters. Extension
types use their representation without a separate runtime identity. Generic declarations
use one analyzer-validated shared Dart owner while TypeScript preserves the generic
relationship. A legal default uses `Object?` or an analyzer-resolved bound; declarations
without a legal default require explicit runtime type arguments. Ordinary object/native
Widget constructors use checked engine Type handles, including equal-shape and nested
inputs, without needing distinguishable runtime input domains. Widget constructor
callbacks with supported Widget and selected interface results reuse ordinary result
conversion; `BuildContext` is an ordinary callback parameter. Public Widget interfaces,
including generic declarations, reuse native Widget values and the existing proxy path.
This includes inherited abstract interface contracts and preserves supported required or
optional constructor callbacks. Public Widget setters use the native member view; writes
call Dart once and do not imply a Flutter rebuild. Ordinary object business members
named `kind`, `type`, `ctor` or `args` are available, including through proxies and
super; transport-field conflicts apply only to actual descriptor representations.
Private, `@internal`, `@visibleForTesting`, and `@protected` API is excluded from
automatic exposure.

Core supplies native `Type` and `Symbol` references. Symbols use Dart's
constructor/constants, not JavaScript Symbols. Every Record result, including bare
`Record` and erased `Object?`, is a plain JS field object. Concrete inputs reuse the
shared native constructor and existing field converters; no per-layout constructor or
reader is generated. A bare `Record` input can infer a layout from an object: `$1`,
`$2`, ... must be contiguous, and named keys must be public Dart identifiers other than
Object member names. Without declared numeric field types, safe integral JS Numbers
become Dart ints; other Numbers remain doubles. Prefer concrete signatures for typed
nested values. Copies retain only weak type/view metadata, never the original Record.
Type metadata lets `dartTypes.of`, `getDartType` and the Core Record token recognize an
unaltered projection; spreading/cloning does not copy it. `Never` signatures map to TS
`never`, preserve throws and reject any returned value; `Never?`/`Null` accepts only
null. They compose through existing callbacks, Futures, Streams and collections and
declare the additive `bottom-types` capability. See
[Core conversion boundaries](../../docs/architecture/bindings.md#bottom-types-and-opaque-core-values).

The
[consolidated capability audit](../../docs/architecture/binding-coverage-map.md#engine-backed-audit-and-consolidated-backlog)
separates automatic-selection gaps, missing adapters, current semantic limits and
Dart/JS language boundaries. The first batch closes automatic Widget setter, interface
callback/inheritance, opaque Core value and ordinary-object descriptor-name gaps through
shared conversion paths. Creating a new Dart-typed JS closure from an arbitrary
runtime-only signature is deferred until a concrete public API cannot use the existing
typed callback or signature-selection paths. Ordinary callbacks and calling returned
Dart functions remain supported. Common mixins use configured variants, generic syntax
improvements are reserved for future TS build-tool work, and extensions keep the
explicit receiver-view API. Public function/Record type-token builders are also deferred
until a concrete application needs runtime type composition; see the
[scope priorities](../../docs/architecture/binding-coverage-map.md#demand-driven-scope).
Record values already use the shared constructor without a compiled layout catalog.

Ordinary Widget instance getters, setters and methods, including inherited members, use
the same automatic conversion rules as object members. Selecting an instance API gives
the Widget a real object view: `ComputedWidget('hello').uppercase` and
`ComputedWidget('hello').textLength()` call the actual Dart instance. Constructor
arguments are fixed and typed; these factories do not accept signals or support JS
`new`/inheritance. Final Widgets and Widgets returned from Dart without a public
constructor use the same path. Selected native parent types and generic arguments are
preserved, including on-demand member views for known constructor specializations.
Rendering-only selections retain reactive descriptions. Use explicit `proxy: extends`
when JS needs to override native virtual members; ordinary member selection does not
infer a Flutter lifecycle override. See
[Widget member regression](test/widget_members_test.dart).

Automatic and explicit naming checks share the same JavaScript identifier rules. Names
such as `total_count`, `dollar$value` and `$value` keep their Dart spelling. Reserved
names are checked at their actual position: `object.eval()` and named arguments such as
`{arguments: 5}` are valid properties, while a positional parameter named `arguments`
uses a legal generated JS local and keeps its Dart wire name. Positional parameter names
starting with `_` are locals, not private Dart declarations. The single `_` Dart
wildcard remains excluded from automatic parameters because it creates no readable local
for proxy forwarding. Public exports and members still exclude private names; generated
class namespace declarations still require legal binding names. Generated-name conflict
checks remain in force. The capability inventory uses the same distinctions.

Extension types reuse the same conversion in automatic and explicit mode, including
Widget, selected Widget interfaces, Context, State and supported nested collections,
Records, callbacks, Futures and Streams. For example,
`extension type Panel(Widget value) {}` lets `Panel echo(Panel value)` accept and return
the existing JS Widget reference. Selected public members additionally expose
`Panel.view(widget).value`, using the shared named-extension implementation. This view
does not create a Dart object or independent `instanceof` token; use its representation
getter for a Dart input. The underlying type's argument, result and lifecycle checks
still apply: stale Contexts/States and foreign-session references fail, and a Page/Route
representation does not add an otherwise unsupported result or callback position.
Declarations without selected members remain representation-only; unsupported
representations are skipped with their actual conversion reason.

Run automatic mode from the owning binding package (the package receiving generated
files). Its `pubspec.yaml` resolves the target Dart package and any Flax providers.
Minimal package metadata is:

```yaml
# flax_package.yaml
format: 2
bindingNamespace: example.foo
javascript:
  package: '@example/foo-runtime'
  types: '@example/foo'
capabilities: [bindings]
```

The CLI defaults to `lib/src/generated/<library-name>_bindings.g.dart`,
`js/src/generated/bindings.ts`, and `bindings/manifest.json`. A dependency such as `gap`
can be the target while these files belong to your binding package. JavaScript package
setup and registering the generated bindings remain the normal author workflow.

Custom List, Map, Set and Iterable subclasses reuse ordinary object bindings and the
existing typed collection operations. Selected Dart members take precedence over bridge
helpers, so a native `toSet()` still returns a Dart Set reference. Missing helpers such
as `toArray()` are supplied by the shared collection table; iteration uses one snapshot
call even when a business member has that name. Compatible subclasses can be passed
directly to collection parameters, without copying or another provider. See
[collection subclass semantics](../../docs/architecture/interop.md#collection-subclasses).

Core also binds `Iterator<E>` as an ordinary, non-constructible object with a read-only
`current` getter and `moveNext()` method. Automatic APIs reuse that provider, including
nullable elements, nested collection views and callbacks carrying Iterator references.
Closed member signatures also preserve callback elements, Future/Stream values and
Records, including `Iterator<String Function()>` and
`Iterator<List<String Function()>>`. Use the Dart cursor API rather than JS `next()`;
each advance/read uses normal cached member dispatch. See
[native iterators](../../docs/architecture/interop.md#native-iterators).

Shared method-local collection bounds return standard collection views rather than
promising the concrete subtype's business API. Core exports `asDart(value, Target)` for
a checked view and `getDartType(value)` for explicit Dart runtime-type diagnostics. Both
share one reference operation; the generator adds no class-specific cast/query methods.
Targets reuse authenticated generated class, enum and reference-only tokens;
Context/State metadata includes actual Dart type checks. See
[checked views](../../docs/architecture/objects.md#checked-views-and-dart-type-diagnostics).
Declarations depending on a skipped runtime type are also skipped. Generic construction
uses the shared `dartType` selector for ordinary objects and native Widget objects. The
bare export constructs the legal shared default owner; `dartType(Export, ...)` selects
an actual Dart owner through the maintained engine. Equal JS shapes, empty collections,
optional inputs and unused type parameters need no input guessing. Cross-barrel
arbitration remains deferred. Named extension views reuse the same generic call factory
and ordinary receiver conversion. See the
[Dart type selection contract](../../docs/architecture/bindings.md#dart-type-selection).

Most packages need no binding YAML in automatic mode. If analyzer types cannot express a
lifecycle or product decision, an optional `bindings/overrides.yaml` can change only the
exception:

```yaml
format: 2
overrides:
  classes:
    SpecialPage:
      pageAdapter:
        library: package:example/adapter.dart
        function: createRoute
  functions:
    openPage:
      route:
        context: context
        rootNavigator: root
        builders: [builder]
  exclude: [internalHelper]
```

Override fields replace only those inferred fields; inferred constructors and ordinary
members remain intact. An explicit override for an unknown or unbindable declaration is
fail-closed. Full `--config` mode remains the precise fail-closed surface for advanced
bindings and existing packages. `bindings/overrides.yaml` is reserved for automatic mode
and is ignored by explicit config discovery.

Third-party authors: start from [docs/author-template.md](docs/author-template.md) and
the copyable skeleton under [example/author_template/](example/author_template/).

Protocol 24 includes ordinary references, returned objects, setters, static properties
with explicit setters, abstract factories, typed List/Map conversion, stored callbacks,
shared generic owners, validated concrete constructor specializations and explicitly
selected proxies. Objects need no dispose method. Contexts/State remain borrowed, and
Widget/Page/Route hosts retain Flutter lifecycle semantics. Material Pages keep their
explicit public Route adapter.

Generated class exports also support `Symbol.hasInstance`, including reference-only
sealed parents and abstract contracts. A returned public child can be narrowed with
`if (result instanceof Success) { result.value; }` while retaining real Dart identity.
Checks use the authenticated binding view and its selected supertypes, without a Dart
call or getter read. Configured extends proxies preserve JS subclass checks; ordinary
Dart factories cannot be used with `new` or `class extends`. New generated modules
require `instance-checks` as an additive capability; protocol and Manifest versions
remain unchanged. Parent-only/provider views, private children, runtime generic
arguments, descriptors and State wrappers have explicit limits. Sealed parents do not
promise exhaustive TS unions. See
[instance checks and limits](../../docs/architecture/bindings.md#instance-checks-and-sealed-results).

`additionalLibraries` merges public exports by actual declaration identity. Generic
bounds and inheritance are resolved before emission; TS keeps type relationships while
Dart calls use configured legal concrete types. Private defaults remain omitted in real
calls. Each concrete signature uses direct typed calls through five independently
omitted parameters and `Function.apply` from six, with explicit typed tear-offs, static
named Symbols and the same argument conversions. Selection keeps all bindable
parameters. Missing or undefined arguments omit defaults; explicit null remains
provided. Optional positional arguments may only omit a trailing suffix. Redirecting
factories and super parameters resolve defaults from their target declarations;
unresolved or cyclic targets fail closed. Route, Page and extends-proxy constructors
forward super parameters without copying private defaults. No reflection, class-specific
object adapters or snapshot restoration remain.

Dependent TypeScript generic defaults follow preceding type parameters instead of their
Dart runtime erasure. Generic interfaces preserve the declared relationships;
specialized Dart factory calls expose their actual concrete inputs and results instead
of allowing a TypeScript type argument to select an uncompiled Dart target. Complete
Dart-equivalent inference is not required. Callback rejection diagnostics name the
unsupported parameter or result position, including nested callback signatures.

Bare constructors retain their existing analyzer-evidenced default dispatch. Explicit
selection uses real Dart Type handles and one compiled generic factory per declaration,
without emitting combinations of type arguments. Selection is separate from business
arguments:

```ts
import { dartType, dartTypes, asDart } from '@flax/core/bindings';

const StringBag = Bag.$type(dartTypes.string);
const strings = StringBag([]); // Bag<String>
StringBag.named({ items: [] }); // named Dart constructor/arguments
StringBag.labeled([], { capacity: 20 }); // mixed positional/named arguments
const NestedBag = Bag.$type(dartTypes.list(dartTypes.string));
NestedBag([['a'], []]); // Bag<List<String>>
const ObjectBag = Bag.$type(StringBag);
ObjectBag([strings]); // Bag<Bag<String>>
asDart(strings, StringBag); // checked view of the same Dart object
Bag(['a', 1, null]); // shared default, normally Bag<Object?>
Bag.$type() === Bag;
dartType(Bag, dartTypes.string) === StringBag; // same cached handle
```

Generic class exports share one non-enumerable `$type` function installed during
registration. Generated factories reuse the common type signature; proxy classes only
declare the static member, without emitting its implementation. This preserves their
existing prototypes, inheritance, overrides and `super`. Select from the original
generated export before subclassing. JS-only subclasses are not additional Dart generic
templates. `$type` is reserved on generic exports: explicit conflicting static members
or named constructors fail, while automatic selection reports and skips the conflict.
Non-generic Dart members with that name remain ordinary bindings. Generic enums register
the selector before their exports are frozen. Method/function selection still uses
`dartType`; TS build-time generic conversion is not implemented.

These calls require a bound Dart declaration and the maintained engine, not a catalog of
closed types. Descriptors compose List, Map, Set, Iterable and nullability. Class tokens
and `dartTypes.of(nativeValue)` carry actual Dart type identities; display names are
only diagnostics. String, bool, int, double, num and Object tokens keep their Dart
identity. TypeScript still represents Dart numeric values as `number`; exact numeric
bounds are checked by the engine. Instance tokens read the real VM type without invoking
`runtimeType`. Their TypeScript view preserves native binding members; it does not claim
extra members of a JS subclass sharing that Dart proxy class. JS identity, overrides and
`super` remain unchanged. First use validates arity and Dart bounds and caches the typed
adapter. Passing no types keeps the declaration's configured/default owner. TS type
arguments do not select Dart types. Explicit class `typeArguments` sets the default and
does not restrict subsequent `dartType` selection.

Select explicitly when Dart behavior depends on the runtime type argument. For example,
`const StringKey = dartType(ValueKey, dartTypes.string); StringKey('row')` preserves
equality with Dart `ValueKey<String>('row')`. Bare `ValueKey('row')` constructs the
shared `ValueKey<Object?>` owner and does not infer String from its value.

The selected handle shares the original prototype and static members. Ordinary object
factories remain callable without `new`. Configured `proxy: extends` handles support JS
subclasses, private fields, overrides and `super`, with the selected concrete Dart
constructor and callback conversion. Intrinsic Stream, enum named factory and Route/Page
selections reuse their existing construction roles. Context/State reference tokens
remain reference-only; JS State variants retain their component lifecycle API.
Higher-rank callback and data-conversion boundaries remain checked by the ordinary
converter.

Generic inputs accept the selected native value or its existing `DartInput<T>` form,
including native Widgets, JS arrays/Maps/Sets and compatible native collection
references. An incompatible Dart reference cannot be narrowed by copying. Missing, extra
or invalid business arguments, and unavailable type tokens, still fail. Internal engine
binding extension 8 is required. No new YAML/CLI configuration is required. See the
[Dart/TypeScript regression](test/dart_types_test.dart),
[nested target regression](test/nested_generic_constructors_test.dart) and
[nested input regression](test/nested_constructor_inputs_test.dart).

Native objects in ordinary Object bindings matching these known constructor targets also
get concrete member conversion. For `Box<T extends Iterable<String>>` with List and Set
targets, `dartType(Box, dartTypes.list(dartTypes.string))(['a']).value.get(0)` and
`dartType(Box, dartTypes.set(dartTypes.string))(new Set(['a'])).value.add('b')` expose
the correct collection APIs. Writable properties accept their matching raw JS
collection; methods, callbacks, Records and Future results retain the selected `T` as
well. TypeScript inputs reuse `DartInput<T>` so a native List view and a JS array can
both satisfy a List input. A `T?` constructor input does not make a non-nullable
target's `T` members nullable. Generic callback bounds referring to the class also use
that target, while the callback's own type parameters and independently shadowed
generics remain distinct. Configured generic method arguments must satisfy every known
constructor target. For `select<R extends T>`, use class-level `typeArguments` when a
fixed `R` only fits one target; parsing rejects invalid combinations before emitting
Dart calls. Constructor `data` annotations stay local to that input; ordinary members
keep reference conversion and explicitly marked members keep their own data conversion.
When a `data` annotation constrains `T` itself and its automatic target is a collection
or another native view, select explicit class `typeArguments` to apply data conversion
to the concrete member's Object/dynamic leaves. Invalid combinations fail during
parsing.

Only selected members whose conversion changes get private Dart metadata and call
delegates. Known constructor targets retain their existing on-demand conversion. Closed
API signatures additionally supply conversion views for dependency-owned and
constructorless generic objects. Getters, setters and methods reuse the same callback,
collection, async and Record converters; self-referential signatures use lazy metadata.
The provider Manifest supplies the declaration model, without reading its private
source. Nested views discover their Dart imports as they are emitted. Their operation
metadata retains the signature's binding context for erased nested results and checked
casts.

All views share one JS prototype and the real Dart object. Weak wrapper caches are keyed
by signature: repeated conversion through the same signature reuses its wrapper, while
different signatures may produce wrappers that are not `===`. A `num` callback view
accepts `1.5`; an `int` callback view of that same Dart object rejects it. Registering
or reading another view never replaces this contract. Erased round-trips may reuse an
already known view; they cannot infer a previously unknown callback signature. Selected
generic arguments are checked by Dart for both `instanceof` and `asDart`.

Ordinary member access still uses one cached operation invocation. No JS class or
additional heap scanner is generated per signature, and no new GC ownership is added.
The additive `generic-member-views` capability rejects older runtimes. Manifest 21, UI
protocol 24 and native ABI 2 stay unchanged; conversion metadata is derived from the
existing model. Dart type checks validate values without scanning collection elements.

Metadata is generated lazily from the real Type. Recursive member chains materialize
only the views accessed; neither finite closures nor growing type arguments require
pre-generated view catalogs.

UI protocol 24 expands selected inherited instance surfaces before emission and
separates ordinary Object interop from explicitly selected `data` positions. Enum
results are canonicalized by the shared Dart encoder, not individual generated wrappers.
Earlier protocol modules and bundles are rejected.

Enhanced enums use `classes: { Status: { kind: enum, ... } }` and the same member
selections as ordinary classes. Automatic selection includes public fields, accessors,
methods, statics, operators and named factories returning existing constants. JS sees
frozen value objects: `Status.ready.label`, `Status.ready.format('hello')` and
`Status.fromCode(200)`. There is no `new Status`, subclass or proxy. One shared
prototype serves all values; final primitive fields cache their first real Dart read.
Other members retain normal typed dispatch and GC. Generic constants preserve their
concrete arguments, including across Manifest 21 and dependency providers. Generic named
factories use the existing constructor specialization rules; `values` preserves each
constant's type independently of factory configuration. `types: [Status]` remains a
constants-only selection. See
[enum bindings](../../docs/architecture/bindings.md#enum-bindings).

See [binding selections](../../docs/architecture/bindings.md),
[interop and limits](../../docs/architecture/interop.md), and
[object lifetimes](../../docs/architecture/objects.md). Unsupported signatures fail with
an explicit generation error rather than permissive declarations.
`FlaxCodegenBindingParser.proposeSelection` proposes a bindable member subset for one
class or mixin. `proposeLibrary` builds on it to inventory one public library and
returns an inferred config, skips, and informational notices. For ordinary class
contracts it also recommends and embeds a validated `implements` or `extends` proxy when
one is unambiguous. Explicit YAML `generate` remains fail-closed: listed members still
error. Special lifecycle decisions remain explicit overrides.

Ordinary recursive value types reuse the same `FlaxCodegenTypeRef` tree in automatic
mode. Supported `List`/`Map`/`Record`, `Future`/`FutureOr`, Stream and callback shapes
therefore compose without per-combination YAML, including constructor/method positions,
object setters, top-level functions and inherited generic members. Dart generic values
keep the existing upper-bound erasure while TypeScript preserves the declared generic
relationship. Flutter lifecycle positions retain their separate fail-closed rules.

Core is the implicit provider for packages depending on Dart `flax`. A unique adequate
non-Core dependency provider is reused by `proposeSelection`. Missing, insufficient or
ambiguous providers generate the complete local surface. Explicit local selections may
bind the same Dart source independently in distinct namespaces. Full IDs stay unique
within each namespace, and Core-owned declarations cannot be republished. Actual Dart
types, including concrete generics, determine whether references can cross package
views; structural JavaScript lookalikes are rejected.

Instance getters returning `void`, including inherited generic getters instantiated as
`void`, evaluate once in Dart and return JavaScript `undefined`. Exceptions and ordinary
non-void getter behavior are preserved.

Input `void` uses an ordinary `Object?` Dart local and TypeScript `unknown`; it never
emits an invalid `as void` cast. Callback arguments declared `void` are delivered as JS
`undefined`. Required direct inputs still require an argument: `null` is a value and
`undefined` is omission. Opaque Widget and Set defaults use the same omission dispatch
as object defaults, retaining upstream private constants and identity. Reserved JS
parameter spellings use legal generated local names; wire names and named keys stay
unchanged. Proxy super formals reuse that policy for positional parameters, keeping
internal peer names distinct while forwarding native defaults by position.

Raw Dart `Function` values are exposed as authenticated callable `DartFunction` views.
Concrete native layouts use engine Type metadata and existing argument/result
converters; Dart optional defaults remain Dart's responsibility. A plain JS function
still needs a selected typed callback signature, and an unbound generic raw Function
layout fails explicitly. Record layouts come from real VM Type metadata, including
shapes with no source literal. AOT retains referenced Record shapes and their synthetic
fields for native construction. This does not add public function/Record
type-description builders.

Configuration format 2 accepts an optional `typedefs` selection. Public aliases export
TypeScript `Name<T>` and directional `NameInput<T>` types, preserving alias parameters,
bounds, defaults, nullability and function-local generic scopes. Supported examples
include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`. Core
exports the real Flutter `ValueChanged<T>` and `ValueGetter<T>` aliases.

Aliases reuse existing callback and collection conversions and create no runtime
constructor or additional wire identity. Explicit TS type arguments are supported;
matching all Dart inference is not required. Generic callbacks reuse bound defaults
where legal and actual invocation types otherwise. Returned generic callbacks support
`dartType(callback, ...types)`. Unsupported conversions and export-name collisions fail
explicitly. Manifest 21 preserves alias origins, parameters and targets across packages.
See [ADR 0035](../../docs/decisions/0035-generic-state-variants-and-protocol-21.md).
Complete Dart type-system coverage remains separate work.

Records are structural values with no wire ID or session identity. Generated TypeScript
uses readonly object fields (`$1`, `$2`, ... for positional fields plus named fields),
while Dart conversion reconstructs real Records and recursively reuses the existing
conversion rules for nested callbacks, collections, Futures and provider-owned objects.
Manifest 21 encodes Record fields and all current recursive type metadata.

Style and Theme selections reuse object, static-member and Widget generation. Optional
named TS inputs explicitly include undefined for exactOptionalPropertyTypes. An
independent fixture compiles constructor, instance, static and proxy calls in that mode.
Required inputs remain required. The SDK test reports constructor call counts and
generated sizes.

Widget constructor callbacks share ordinary typed result conversion, including selected
Widget interfaces, nullable results, supported Futures/Streams, List/Set/Map/Record
aggregates and lazy `Iterable<Widget>` values. `BuildContext` is an ordinary callback
argument. No callback name or public YAML lifecycle marker is required. The actual
Widget is preserved without an extra result host; configuration references and GC own
its bridge dependencies. A separately named plugin fixture verifies generation, repeated
mounting and native configuration reuse. Nullable containers and nullable Widget
elements share this conversion. An `Iterable<Widget>` callback accepts ordinary JS
arrays/Sets and compatible Dart List/Set references, including concrete Widget types and
supported Future/FutureOr/Stream compositions. Its signature can be selected
automatically. Custom JS Iterables use one shared typed adapter: Dart requests each next
value, which is checked on consumption. Native lazy Iterables keep their identity. Early
termination and GC do not run a JS generator's `return()` or `finally`, because Dart
Iterator has no close operation. Session close retires bridge handles; application
cleanup remains explicit. See [lazy list ownership](../../docs/architecture/lists.md).

Direct `BuildContext` inputs are ordinary borrowed references in automatic and explicit
selection. Functions, constructors, instance/static methods, setters, returned Dart
functions and supported collection inputs reuse the mounted Context supplied by JS.
Passing or storing it does not extend its Flutter lifetime. Each conversion rejects
forged, foreign-session and inactive references; nullable inputs retain normal null and
omission semantics. Direct `BuildContext` / `BuildContext?` function, method and getter
results and JS callback results use the same weak borrowed identity. Supported callback
results include `BuildContext?`, typed finite collections/Records and
`Future<BuildContext>` / `FutureOr<BuildContext?>`. A non-null Future still requires a
Promise; `FutureOr<T?>` also accepts synchronous null. Each completed Context is checked
against its current session and mounted state, so a Promise settling after unmount is
rejected. A JS Context wrapper does not keep an Element alive; `.mounted` becomes false
and other access fails. Ordinary Dart collections and closures still retain their actual
values. Context-containing Stream callbacks and supported Future/Stream combinations use
the same conversion, including derived `toList()` reads. See
[Context return examples](../../docs/architecture/interop.md#context-results).

Ordinary functions, object constructors, instance/static methods, and returned Dart
functions invoke callbacks directly with their original arguments and results. Context
arguments do not require an extra Flax host. Supported signatures include indexed, named
and optional arguments, nullable Widget results, nested callback values and Future
results. Widget interfaces such as `PreferredSizeWidget` work in ordinary callback
arguments and results, with native interface validation in both directions. Mounted
Widget constructor callbacks and configured Route/Page adapters preserve the same
selected interfaces. Narrow interface failures propagate; only base Widget UI results
can use an ErrorWidget placeholder. Concrete native Widget results preserve the actual
Dart subtype. A descriptor accepted by a concrete signature becomes a fixed native
configuration; signals remain on descriptor hosts, not native constructor inputs.
Synchronous Flutter builders still reject Promises. Configured Route-producing functions
keep their explicit leases and FlaxNavigatorObserver. See
[bridge references and GC](../../docs/architecture/references.md).

Nested callbacks in typed List elements and Map values receive typed adapters. Nested
Widget results use independent ownership. Ordinary member callback conversion memoizes a
native counterpart per JS function, session, signature and binding context, so repeated
Map key insertion replaces the same key. UI-owned callbacks retain their separate scope.
Joint tracing preserves either business root and collects an unreachable cross-heap
cycle; the memo does not become a permanent root. Collection view identifiers include
complete signatures and conversion semantics, so different declared views of one Dart
collection retain their own conversion rules.

Expanded/Flexible, Stack/Positioned and alignment selections use the existing generator
without component-specific adaptation. SDK tests compile inherited parameters,
AlignmentGeometry inputs and omission of the upstream alignment constants. See
[layout](../../docs/architecture/layout.md).

Non-finite double defaults emit valid Dart infinity/negativeInfinity/nan expressions,
with independent compile/execution coverage. Container and directional decoration use
existing public-object generation; four omitted side/corner constants require 16 direct
constructor call combinations. See [decoration](../../docs/architecture/decoration.md).

The exact Flutter `State<T>` declaration uses `kind: state`. Fixed `proxyVariants`
compose real Dart mixins in YAML order and generate their abstract requirements,
concrete members and final interfaces. `FlaxStateProxy` is emitted last so explicit JS
`super` calls enter the real Dart mixin chain. Variant-only dependency overlays can add
third-party compositions without claiming a second State owner. See
[components](../../docs/architecture/components.md) and
[ADR 0035](../../docs/decisions/0035-generic-state-variants-and-protocol-21.md).

Non-constructible mixin selections use the same object/member model as classes, without
mixin construction or proxy generation. Contexts may select supported readonly getters;
Future getters include Future<void>. Static getter-only surfaces emit a real JS object,
with accessors that call Dart lazily instead of erasing the namespace or eagerly reading
the singleton. The independent Pulse fixture covers inheritance and compiled Dart/TS.

Returned callback signatures generate direct typed invocation adapters as well as
incoming closure adapters. Directional TS types distinguish JS callback arguments from
arguments to returned Dart functions, including collection inputs/outputs. Recursive
validation rejects unsupported returned signatures. Base and interface Widget values
return opaque DartWidget references; concrete selected proxy bindings expose their
generated native getters and methods; Context arguments borrow existing Flutter owners.
See
[returned functions](../../docs/architecture/interop.md#returned-functions-and-widgets).

Widget interfaces use `kind: widgetInterface` and `widgetInterfaces` selections.
Interface-bearing factories reuse the ordinary native Widget object factory, including
generic contracts and nested type arguments. Flutter receives the original Dart Widget;
no forwarding host or copied method defaults are generated. Native-only signatures can
keep private types and constant defaults, and `configuration`/`node` member names have
no special conflict. Explicit JS members use the normal converters. Selected
`proxy: extends` classes retain JS inheritance, private fields, overrides and direct
`super`. Fixed constructor inputs reject bindings; child Widgets retain their own
subscriptions. Manifest 21 keeps native member names and parameters without forwarding
source/imports. See
[interface generation](../../docs/architecture/widget-interfaces.md).

Top-level `functions` selections generate named JS exports and `FlaxFunctionBinding`
registrations. Function-only modules, public re-exports, typed callbacks and Future
results share member conversion. Explicit and automatic function selection also accept
direct State and typed Widget collection inputs; instance/static methods accept State.
All use the existing converters, preserving live State checks, native Widget identity
and nullable/nested List semantics. Instance/static properties and top-level variables
also support State reads/writes and Widget writes using these shared rules.
Dart-retained Widgets preserve their configurations and JS overrides; a stored State
still requires Flutter mounting. No new lifetime configuration or runtime path is added.
Callbacks reuse these converters for parameters and results, including State visitors,
returned functions, nested callbacks, nullable aggregates and supported
Future/FutureOr/Stream compositions. Explicit and automatic selection share one callback
validation rule; ordinary values have no separate callback type whitelist. State
validity is checked at invocation or async delivery, including after unmount. Retaining
a callback does not keep a Flutter State mounted. Existing Context owner and Route/Page
lease rules still apply. Explicit `route` parameter roles require an observed
synchronous TransitionRoute and per-Route callback ownership. See
[top-level functions](../../docs/architecture/functions.md).

Optional `topLevel: {getters: [name]}` selects public top-level const, final, late final
and mutable variables or explicit getters. Optional `setters: [name]` selects public
mutable variables and explicit setters, including setter-only declarations.
`publicLibraries` places each selected declaration at its canonical public module. Safe
build-independent primitive consts may be direct exports; dynamic values, object
references, final/late-final declarations and getters emit uncached `getX()` functions
through the existing function binding channel. Importing a module does not trigger those
reads. Initialization, exceptions, object identity, callbacks and async delivery keep
their existing Dart and session behavior. Writes emit synchronous `setX(value): void`
functions; getter and setter types follow their separate Dart signatures.
Const/final/late-final writes and inputs requiring unsupported Route/Page ownership are
rejected; existing mounted Context and State references and compatible Widgets are
accepted. Context/State/Widget results use ordinary conversion, including nullable
values and supported aggregates and async values. Context reads borrow the current
native Element through a weak session-local reference; they do not keep it mounted.
Reads are lazy, invalid writes fail before invoking Dart, and nullable setters accept
`null` but reject `undefined`. Static/global values belong to the Dart application;
closing a session does not reset them or keep a stored Context/State mounted.
Provider-owned declarations reuse the provider's public module without registering
twice. Manifest 21 records source identity, read/write operations and public-library
routing. See
[readonly generation](../../docs/architecture/bindings.md#public-libraries-and-top-level-readonly-declarations)
and [ADR 0027](../../docs/decisions/0027-public-library-module-delivery.md).

Class `staticGetters: [count]` and `staticSetters: [count]` independently select public
static fields or explicit accessors on any supported class category. JavaScript uses
`Counter.count` and `Counter.setCount(value)`, with separate Dart return/input types.
Setter-only classes expose a real namespace without a synthetic constructor. Reads and
writes use the same function channel as top-level declarations; module import does not
read state. Const/final/late-final writes, inherited statics, unsupported conversions
and generated `setX` export collisions are rejected. Automatic selection skips
conflicting writes and reports the reason. Static state belongs to the application;
closing a session does not reset it. Manifest 21 records class-qualified read/write
operation IDs and provider capabilities. See
[static properties](../../docs/architecture/bindings.md#class-static-properties).

Ordinary proxies generate required getter/setter dispatch from effective inherited
signatures. Implementations use explicit JS accessors, checked without eager reads;
parent constructors see initialized callbacks. ValueListenable exercises getter and
listener dispatch, while independent fixtures cover setters and directional collection
and function types. Ordinary extends/implements proxy properties reuse Future/FutureOr,
Stream, Widget, Context and State conversion, including nullable values, nested
Records/collections and returned async functions. Getters return their typed values;
setter functions remain synchronous even for Future-valued properties. Widgets follow
Dart retention and joint GC; Context/State validity is checked on each read/write.
Ordinary proxy methods can also return native or JS-subclass Widgets using this same
conversion. Both extends and implements proxies support direct, nullable and concrete
Widget results, native fallback and explicit super calls; Dart can retain and mount the
result later without an additional host or lease. Selected concrete extends
getters/setters enforce inherited `@mustCallSuper`, with separate read/write and nested
invocation checks. Async getters require super before returning their Promise; nullable
results and existing rejections retain the same rules. Manifest 21 preserves
`proxy.mustCallSuperAccessors` through providers. Regenerate all providers and consumers
together; previous formats are rejected. See
[proxy properties](../../docs/architecture/proxy-properties.md).

Single Widget callback arguments and ordinary Widget-to-Widget calls share generated
bidirectional conversion. Escaped configurations can be retained by Dart without an
application retain API. ValueListenableBuilder and ListenableBuilder preserve the native
static-child optimization and listener lifecycle. See
[Widget interop](../../docs/architecture/interop.md#widget-configuration-and-mounting).

UI protocol 24 treats selected Dart `Stream<T>` values as lazy, typed references in both
directions. The same model is used for parameters, results, callbacks, Futures and typed
collections. Generated Stream views retain Dart identity and event conversion; `listen`,
subscription control, controllers, sinks, transformers and iterators call the real
dart:async APIs. `Stream.fromAsyncIterable` and the generated async iterator form the
two explicit JS iterable boundaries. They are unrelated to Fetch `ReadableStream`.
Context events retain their real Dart references while each JS conversion checks the
current session and mounted state. Record fields use the same converters through
operators and derived collection reads. Erased and unknown Records are plain field
objects reconstructed through the shared native constructor, without an original Record
reference or compiled layout catalog. Weak Type/conversion metadata survives erased
callbacks; fresh objects follow the declared signature or bare-Record inference.

Protocol 24 supports Future-returning generated callbacks. Incoming JavaScript must
return a Promise or thenable; generated Dart adapters expose the exact `Future<T>` shape
and apply the existing typed conversion when it completes. Selected Future parameters,
Future collections and `FutureOr` positions are also generated for the dart:async
surface. Nested Future/FutureOr types reuse the same recursive TypeRef conversion.
Native JavaScript Promise assimilation flattens direct nested Promise/thenable layers,
so generated adapters reconstruct the declared Dart Future layers while preserving
type/value semantics rather than separate JavaScript Promise identity or timing.
Future/FutureOr values inside collections, Maps and Records remain independent async
values. Ordinary proxy properties reuse these async rules; lifecycle/build overrides
keep their synchronous Flutter signatures. A returned function is a new invocation
boundary and may have its own supported Future result.

Ordinary callbacks compose Future/FutureOr and Stream conversions in both directions:
`Future<Stream<T>>`, `FutureOr<Stream<T>>`, `Stream<Future<T>>` and
`Stream<FutureOr<T>>` work in callback arguments and results, including supported
collection and Record positions. A Stream of Futures delivers independently completing
Future events rather than flattening them. Typed views remain lazy and validate erased
source events at concrete use sites. Erased collection restoration only copies
compatible raw JS collection shapes. Existing Dart collections retain identity or fail
their concrete type check. Nested Streams, including through Futures, Records and
collections, use lazy recursive typed views in incoming and returned callbacks. Each
inner Stream remains an independent source: neither callback conversion nor an outer
subscription merges or implicitly listens to its events. Cancelling an outer
subscription leaves independently subscribed inner Streams alone; session close cleans
up all bridge-owned subscriptions and AsyncIterable sources. Restricted Widget Iterable
callback views check inner Stream events lazily, including inside native Records and
collections. Asynchronous lifecycle overrides remain unsupported. See the
[interop examples](../../docs/architecture/interop.md#future-and-stream-callback-combinations).

Protocol 24 callback models also preserve optional positional parameters, named
parameters and function-local generics. Generated Dart adapters use a private omission
sentinel and direct call branches so Dart and JS defaults execute at their real call
sites. TS retains generic bounds; runtime calls erase them to analyzer-resolved
supported bounds and check incoming generic results against Dart's current type
parameter. Public fully closed bounds retain nested generic arguments and nullability.
Acyclic bounds within one declaration resolve in dependency order, including forward
references, nested collections and nullability. Recursive bounds also generate one
checked template. When no legal default exists, calls require explicit runtime types;
the generator never substitutes `dynamic` for an invalid default. Captured owner bounds
resolve against the selected owner's real type.

Ordinary instance and static generic methods automatically use the same bound resolution
as top-level functions and callbacks. `T echo<T>(T value)` uses one Dart `Object?` call
target while TypeScript preserves the input/result relationship through `DartOutput<T>`;
closed bounds such as `num` or `List<String>` use their existing typed conversion. Known
concrete owner member views specialize the class parameters without capturing an
independent method parameter with the same name. Inherited methods, enums and JS proxy
overrides retain those scopes. Bare calls retain one bound target. The shared `dartType`
selector instantiates the declaration with actual Dart Types without inspecting JS
values. Bare calls use bound erasure, not Dart runtime inference:
`wrap<T>(T value) => <T>[value]` creates a `List<Object?>` unless
`dartType(object, 'wrap', dartTypes.string)` or `methodTypeArguments` selects a concrete
Dart argument. Calls that depend on `T` itself, such as a runtime type test or typed
allocation, use that selected Dart argument. Acyclic bounds such as
`T extends num, U extends T` resolve automatically. Recursive and mutually dependent
bounds need no fixed YAML specialization: use `Class.$type(...types)` or
`dartType(target, ...types)` when a default cannot satisfy the bound. Static generic
factories returning nominal generic objects retain the existing concrete materialization
contract or require explicit method arguments; ordinary method erasure does not replace
it. See the
[generic method contract](../../docs/architecture/bindings.md#generic-methods).

Generic call selection uses `dartType(instance, 'method', ...types)` for a cached bound
call, `dartType(Class, 'method', ...types).call(instance, ...args)` for a shared class
entry, and `dartType(function, ...types)` for static/top-level functions. Omitted tokens
keep the ordinary bound default. Targets reuse checked conversion and the real Dart
virtual method. The engine checks actual type arguments at first use and caches the
typed adapter. Call targets reuse member views without pre-generating type tuples. The
engine checks actual type arguments and instantiates one compiled factory, including
owner-dependent methods and nested types. Named extension receiver selection supplies
owner types followed by method types; enum instance selection supplies method types
only. A returned generic Dart callback uses `dartType(callback, ...types)` and the same
checked input/result conversion. Type-only bounds need no runtime provider of their own;
the actual selected value types must have a supported conversion.

JS generic overrides can accept a final optional `FlaxGenericCall<F>` context. Its
`super` function captures this invocation's actual Dart type arguments and receiver; use
`call ? call.super(value) : super.method(value)`. Keeping that context across `await` is
supported, including concurrent invocations with different types. Direct JS calls retain
ordinary `super` behavior. Omitting the context in a reified override does not preserve
typed allocation automatically, and `mustCallSuper` checks remain active. See the
[generic call contract](../../docs/architecture/bindings.md#generic-call-selectors-and-js-super).
Manifest 21 records call targets and `generic-call-types` gates older frameworks; the UI
protocol, native ABI and selection formats remain unchanged.

Generic outputs describe the existing bridge conversion: `echo(['a'])` returns a
`DartList<string>`, so use `.get(0)` or explicitly copy with `.toArray().map(...)`.
Maps, Sets, plain field objects and nested async values follow the same rule. Existing
Dart references retain their declared types. Generated Record outputs carry a type-only
`DartRecord` brand, distinguishing them from raw JS field objects, which become Maps in
an `Object?` position. Generic JS callbacks receive `DartOutput<T>` and may return the
converted reference or an accepted input value; returned Dart callbacks use the same
output projection. These declarations add no runtime wrapper or bridge operation.

Generic extension receivers share that projection in getters, setters, operators,
callbacks and async values: `ListX([['a']]).firstValue` returns a `DartList<string>`.
The extension's captured parameter and a member-local parameter retain separate scopes;
closed native bounds and existing Dart references keep their existing conversion.

Ordinary static methods share the static-accessor function transport on every supported
class category, including Widgets, static-only classes and Widget interfaces. Automatic
selection keeps statics declaration-local and checks generated setter collisions against
real static methods. Native Widget interface instance requirements and deferred generic
factory materialization retain their own contracts; no new configuration is needed.

Protocol 24 also recognizes Iterable and Set throughout generated types and conversion
metadata. DartIterable and DartSet wrappers preserve real Dart collection identity;
iteration and explicit copies use one bulk host call and retain repeated references and
cycles.

Synchronous static generic factories are inferred automatically when their direct owner
result determines every method type parameter and generic inputs stay within the
existing direct-callback contract. The full generator scans all loaded modules and emits
exact direct materializers instead of requiring every concrete type in configuration.
The JS wrapper records arguments until first use, then locks to the materialized type
and real Dart object. Unsupported inference, conflicting targets, generic collection
inputs and missing concrete consumers fail generation. This path uses no reflection or
runtime TS type token.

Explicit `extensions` selections expose named Dart extensions as callable receiver
views: `StringX('a').repeat(3)` and `StringX(' ').isBlank`. Getters are readonly
properties; setters use `ListX(values).setFirstValue(value)`. Static members remain on
the factory, such as `StringX.version` and `StringX.parse(value)`. Select static writes
with `staticSetters: [times]` to generate `StringX.setTimes(value)`; automatic discovery
also includes public mutable fields and setters. Read/write types are independent and
setter-only members work. Static writes reuse ordinary input conversion, including
supported Flutter references, callbacks and async values. Static state is shared by the
Dart application and session close does not reset it. Readonly/private writes are
rejected; automatic selection reports conflicting `setX` exports and preserves selected
static methods/getters. Creating a view does not call Dart or allocate a Dart object;
views share their methods. Context, Widget and other supported receiver, argument and
result types reuse ordinary binding conversion and lifetime checks. Generic
declarations/members and legal Dart operators use the same function call channel. Dart
always invokes the explicit named extension override. Manifest 21 and operation IDs are
unchanged; regenerate provider and consumer packages together when replacing the
previous receiver-first API. See the
[extension binding contract](../../docs/architecture/bindings.md#extension-declarations).

Generic bounds can refer to unbound interfaces through Manifest 21 type-only references.
Recursive/dependent class and method templates keep Dart subtype checks; TS retains
nominal source identity and generic arguments without exposing bound members. Generic
aliases need no runtime erasure when their bounds are type-only. Ordinary values still
require conversion. Recursive extension and callback declarations share checked runtime
selection instead of requiring a fixed generated specialization. See
[bound tests](test/bound_type_only_test.dart) and
[complex bound regressions](test/complex_generic_bounds_test.dart).

Class operators use the class `operators` selection and fixed explicit JS aliases, for
example `'+': [other]` becomes `operatorAdd(other)`. Ordinary bindings call real Dart
operators; legal object proxies can override them from JS and use real `super`. Equality
is opt-in and a proxy must also select `hashCode`. JS arithmetic and JS Map/Set retain
their language semantics. Generated proxy classes share `FlaxProxyBase` and prototype
installers rather than repeating forwarding bodies. Widget, State, Route and Page
ownership stays with the existing specialized owners. See the
[shared proxy contract](../../docs/architecture/bindings.md#shared-js-proxy-implementations-and-class-operators).

## Native Widget subclasses

Select `proxy: extends` on a Widget and explicitly list the native virtual methods to
expose. The factory call retains descriptor reactivity; `new` creates a fixed native
configuration and supports JS inheritance:

```typescript
class Title extends Text {
  constructor(value: string) {
    super(`Title: ${value}`);
  }
  override build(context: BuildContext) {
    return super.build(context);
  }
}
const native: Text = new Title('Orders');
const reactive = Text(title.bind);
```

Generated Dart proxies extend the selected native class with `FlaxWidgetProxy`. Flutter
owns their Elements, keys, State and RenderObjects. No override means a direct native
call. JS constructor identity supplies Flutter matching; configuration is frozen when
accepted, after the derived constructor finishes. Selected getters read native fields.

Stateless `build`, Inherited `updateShouldNotify`, and RenderObject creation/update/
unmount methods use ordinary typed proxy calls. A selected Stateful `createState`
override uses the existing `State` lifecycle through a `State<ConcreteWidget>` adapter;
each mount must return a fresh JS State. Unoverridden factories preserve native State.
State variants still require a compatible Dart State type; a variant composed for
`State<StatefulWidget>` cannot impersonate `State<ConcreteWidget>`.

Manifest 21 requires `native-widget-proxies`; selection format 2 and native ABI 2 remain
unchanged. UI protocol 24 requires regeneration of older generated modules. Generated
proxies share member metadata and retain one actual JS receiver peer per Dart instance.
Current lookup preserves private/arrow fields, inheritance and later member replacement.
Ordinary wrappers share prototypes and standard method receivers; extracting a method
requires explicit `.call()` or `.bind()`. No per-member forwarding callbacks or
additional GC mechanism are generated. Source packages provide implementations and types
packages declare the same callable/constructible exports. Core remains implicit.
