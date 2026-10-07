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
Manifest 16 dependency projections through the package config, and (for `generate`)
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
relationship. The owner is `Object?` or a publicly routable, fully closed analyzer bound
such as `Route<dynamic>`. Constructors are selected separately and only when observed
concrete targets can be distinguished from their direct runtime inputs. Widget
constructor callbacks with supported Widget and selected interface results reuse
ordinary result conversion; `BuildContext` is an ordinary callback parameter. Public,
non-generic, implementable Widget interfaces reuse the existing native interface
forwarding path. Private, `@internal`, `@visibleForTesting`, and `@protected` API is
excluded from automatic exposure.

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

Custom core collection subclasses are skipped because native collection members can
conflict with bridge copy methods. Ordinary collection parameters/results remain
supported. Declarations depending on a skipped runtime type are also skipped. Generic
runtime specialization beyond observed constructor targets with disjoint input domains
remains deferred, as does cross-barrel arbitration. Generic extension receivers that
require concrete runtime specialization are also deferred.

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

Protocol 22 includes ordinary references, returned objects, setters, static properties
with explicit setters, abstract factories, typed List/Map conversion, stored callbacks,
shared generic owners, validated concrete constructor specializations and explicitly
selected proxies. Objects need no dispose method. Contexts/State remain borrowed, and
Widget/Page/Route hosts retain Flutter lifecycle semantics. Material Pages keep their
explicit public Route adapter.

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
Dart runtime erasure. Explicit generic arguments preserve the declared relationships;
complete Dart-equivalent inference is not required. Callback rejection diagnostics name
the unsupported parameter or result position, including nested callback signatures.

Protocol 22 expands selected inherited instance surfaces before emission and separates
ordinary Object interop from explicitly selected `data` positions. Enum results are
canonicalized by the shared Dart encoder, not individual generated wrappers. Previous
protocol 18 and 19 modules and bundles are rejected.

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

Configuration format 2 accepts an optional `typedefs` selection. Public aliases export
TypeScript `Name<T>` and directional `NameInput<T>` types, preserving alias parameters,
bounds, defaults, nullability and function-local generic scopes. Supported examples
include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`. Core
exports the real Flutter `ValueChanged<T>` and `ValueGetter<T>` aliases.

Aliases reuse existing callback and collection conversions and create no runtime
constructor or additional wire identity. Explicit TS type arguments are supported;
matching all Dart inference is not required. Generic callbacks retain bound erasure and
concrete-use-site result validation. Unsupported targets, recursive or unbound callback
bounds, and export-name collisions fail explicitly. Manifest 16 preserves alias origins,
parameters and targets across packages. See
[ADR 0035](../../docs/decisions/0035-generic-state-variants-and-protocol-21.md).
Complete Dart type-system coverage remains separate work.

Records are structural values with no wire ID or session identity. Generated TypeScript
uses readonly object fields (`$1`, `$2`, ... for positional fields plus named fields),
while Dart conversion reconstructs real Records and recursively reuses the existing
conversion rules for nested callbacks, collections, Futures and provider-owned objects.
Manifest 16 encodes Record fields and all current recursive type metadata.

Style and Theme selections reuse object, static-member and Widget generation. Optional
named TS inputs explicitly include undefined for exactOptionalPropertyTypes. An
independent fixture compiles constructor, instance, static and proxy calls in that mode.
Required inputs remain required. The SDK test reports constructor call counts and
generated sizes.

Widget constructor callbacks share ordinary typed result conversion, including selected
Widget interfaces, nullable results, supported Futures and direct typed Widget lists.
`BuildContext` is an ordinary callback argument. No callback name or public YAML
lifecycle marker is required. The actual Widget is preserved without an extra result
host; configuration references and GC own its bridge dependencies. A separately named
plugin fixture verifies generation, repeated mounting and native configuration reuse.
Widget-containing Records and non-list Widget collections remain outside the callback
conversion contract. See [lazy list ownership](../../docs/architecture/lists.md).

Direct `BuildContext` inputs are ordinary borrowed references in automatic and explicit
selection. Functions, constructors, instance/static methods, setters, returned Dart
functions and supported collection inputs reuse the mounted Context supplied by JS.
Passing or storing it does not extend its Flutter lifetime. Each conversion rejects
forged, foreign-session and inactive references; nullable inputs retain normal null and
omission semantics. Arbitrary Context outputs remain unsupported; native-to-JS callback
arguments borrow the actual native Element through a weak reference.

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

Nested callbacks in typed List elements and Map values receive per-mount adapters.
Nested Widget results use independent ownership; Map callback keys are rejected.
Collection view identifiers include complete signatures and conversion semantics, so
different declared views of one Dart collection retain their own conversion rules.

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

Widget interfaces use `kind: widgetInterface` and `widgetInterfaces` selections. Hosts
generate real implements clauses and native getter/setter/method forwarding, including
generic methods and BuildContext signatures. Native members stay outside JS conversion
and are recorded in Manifest 16. Generic interface declarations remain deferred.
Interface Widgets reject direct bindings but accept ordinary constructor callbacks.
Their fixed native configurations keep original closures; nested child Widgets retain
normal bindings and mounted subscriptions. Cross-module fixtures compile both Dart and
TS. See [interface generation](../../docs/architecture/widget-interfaces.md).

Top-level `functions` selections generate named JS exports and `FlaxFunctionBinding`
registrations. Function-only modules, public re-exports, typed callbacks and Future
results share member conversion. Explicit `route` parameter roles require an observed
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
Const/final/late-final writes and inputs requiring unsupported Flutter ownership are
rejected; existing mounted Context references are accepted. Provider-owned declarations
reuse the provider's public module without registering twice. Manifest 16 records source
identity, read/write operations and public-library routing. See
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
closing a session does not reset it. Manifest 16 records class-qualified read/write
operation IDs and provider capabilities. See
[static properties](../../docs/architecture/bindings.md#class-static-properties).

Ordinary proxies generate required getter/setter dispatch from effective inherited
signatures. Implementations use explicit JS accessors, checked without eager reads;
parent constructors see initialized callbacks. ValueListenable exercises getter and
listener dispatch, while independent fixtures cover setters and directional collection
and function types. See [proxy properties](../../docs/architecture/proxy-properties.md).

Single Widget callback arguments and ordinary Widget-to-Widget calls share generated
bidirectional conversion. Escaped configurations can be retained by Dart without an
application retain API. ValueListenableBuilder and ListenableBuilder preserve the native
static-child optimization and listener lifecycle. See
[Widget interop](../../docs/architecture/interop.md#widget-configuration-and-mounting).

UI protocol 22 treats selected Dart `Stream<T>` values as lazy, typed references in both
directions. The same model is used for parameters, results, callbacks, Futures and typed
collections. Generated Stream views retain Dart identity and event conversion; `listen`,
subscription control, controllers, sinks, transformers and iterators call the real
dart:async APIs. `Stream.fromAsyncIterable` and the generated async iterator form the
two explicit JS iterable boundaries. They are unrelated to Fetch `ReadableStream`.

Protocol 22 supports Future-returning generated callbacks. Incoming JavaScript must
return a Promise or thenable; generated Dart adapters expose the exact `Future<T>` shape
and apply the existing typed conversion when it completes. Selected Future parameters,
Future collections and `FutureOr` positions are also generated for the dart:async
surface. Nested Future/FutureOr types reuse the same recursive TypeRef conversion.
Native JavaScript Promise assimilation flattens direct nested Promise/thenable layers,
so generated adapters reconstruct the declared Dart Future layers while preserving
type/value semantics rather than separate JavaScript Promise identity or timing.
Future/FutureOr values inside collections, Maps and Records remain independent async
values. Asynchronous properties and lifecycle/build overrides remain rejected. A
returned function is a new invocation boundary and may have its own supported Future
result.

Ordinary callbacks compose Future/FutureOr and Stream conversions in both directions:
`Future<Stream<T>>`, `FutureOr<Stream<T>>`, `Stream<Future<T>>` and
`Stream<FutureOr<T>>` work in callback arguments and results, including supported
collection and Record positions. A Stream of Futures delivers independently completing
Future events rather than flattening them. Typed views remain lazy and validate erased
source events at concrete use sites. Erased collection restoration only copies
compatible raw JS collection shapes. Existing Dart collections retain identity or fail
their concrete type check. Asynchronous lifecycle overrides and nested Stream event
exclusions remain unchanged. See the
[interop examples](../../docs/architecture/interop.md#future-and-stream-callback-combinations).

Protocol 22 callback models also preserve optional positional parameters, named
parameters and function-local generics. Generated Dart adapters use a private omission
sentinel and direct call branches so Dart and JS defaults execute at their real call
sites. TS retains generic bounds; runtime calls erase them to analyzer-resolved
supported bounds and check incoming generic results against Dart's current type
parameter. Public fully closed bounds retain nested generic arguments and nullability.
Dependent or recursive bounds that still contain unresolved type parameters fail
generation unless an explicit legal specialization is selected.

Protocol 22 also recognizes Iterable and Set throughout generated types and conversion
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

Explicit `extensions` selections expose named Dart extensions as receiver-first static
TypeScript adapters: `StringX.getIsBlank(value)` and `StringX.repeat(value, count)`.
Getters, setters, static getters/methods, generic declarations/members and legal Dart
operators reuse the function call channel. Dart invocation always uses an explicit
extension override; no prototype or instance identity is created. Manifest 16 records
these declarations. See the
[extension binding contract](../../docs/architecture/bindings.md#extension-declarations).

Generic bounds can refer to unbound interfaces through Manifest 16 type-only references.
Explicit recursive/dependent class and method specializations keep Dart subtype checks;
TS retains nominal source identity and generic arguments without exposing bound members.
Generic aliases need no runtime erasure when their bounds are type-only. Ordinary values
still require conversion, and unresolved recursive extension/callback specializations
fail explicitly. See [bound tests](test/bound_type_only_test.dart).

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

Manifest 16 requires `native-widget-proxies`; selection format 2, UI protocol 22 and
native ABI 2 remain unchanged. Source packages provide implementations and types
packages declare the same callable/constructible exports. Core remains implicit.
