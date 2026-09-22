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
The CLI discovers sibling binding configs in that directory, resolves strict Manifest
2/3/4/5/6/7/8/9/10/11 dependency projections through the package config, writes Manifest
11, and (for `generate`) writes `lib/...`, `js/...`, and `bindings/manifest.json` below
the owning package. The old `dart run flax_codegen [--check] <config>` form is not
supported.

`--library` is the low-configuration path. It accepts one public `package:` library,
uses that library's export namespace as the public API, reuses compatible provider
manifests from direct Dart dependencies, and emits the largest safe surface it can infer.
A public barrel may export declarations from `lib/src/`; callers still pass the barrel
URI. Direct `package:.../src/...` targets are rejected. Unsupported declarations do not
abort the library: the CLI prints `SKIP <target>: <reason>` and continues. Deprecated
declarations remain selected and are reported as `NOTE` entries.

Automatic discovery covers classes and mixins, enums, typedefs, top-level functions and
top-level values/getters/setters. A generic declaration is specialized automatically
only when one representable concrete use is unambiguous. High-frequency Widget builder
callbacks with a leading `BuildContext` and Widget result reuse the existing independent
Widget-result ownership path. Public, non-generic, implementable Widget interfaces reuse
the existing native interface forwarding path. Private, `@internal`,
`@visibleForTesting`, and `@protected` API is excluded from automatic exposure.

Run automatic mode from the owning binding package (the package receiving generated
files). Its `pubspec.yaml` resolves the target Dart package and any Flax providers.
Minimal package metadata is:

```yaml
# flax_package.yaml
format: 1
bindingNamespace: example.foo
javascript:
  package: '@example/foo'
capabilities: [bindings]
```

The CLI defaults to `lib/src/generated/<library-name>_bindings.g.dart`,
`js/src/generated/bindings.ts`, and `bindings/manifest.json`. A dependency such as
`gap` can be the target while these files belong to your binding package. JavaScript
package setup and registering the generated bindings remain the normal author workflow.

Custom core collection subclasses are skipped because native collection members can
conflict with bridge copy methods. Ordinary collection parameters/results remain
supported. Declarations depending on a skipped runtime type are also skipped. Multiple
generic runtime specializations, automatic extension discovery and cross-barrel
arbitration remain deferred.

Most packages need no binding YAML in automatic mode. If analyzer types cannot express a
lifecycle or product decision, an optional `bindings/overrides.yaml` can change only the
exception:

```yaml
format: 1
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
  exclude: [legacyHelper]
```

Override fields replace only those inferred fields; inferred constructors and ordinary
members remain intact. An explicit override for an unknown or unbindable declaration is
fail-closed. Full `--config` mode remains the precise fail-closed surface for advanced
bindings and existing packages. `bindings/overrides.yaml` is reserved for automatic
mode and is ignored by explicit config discovery.

Third-party authors: start from [docs/author-template.md](docs/author-template.md) and
the copyable skeleton under [example/author_template/](example/author_template/).

Protocol 20 includes ordinary references, returned objects, setters, static readonly
fields, abstract factories, typed List/Map conversion, stored callbacks, fixed Dart
generic instantiation and explicitly selected proxies. Objects need no dispose method.
Contexts/State remain borrowed, and Widget/Page/Route hosts retain Flutter lifecycle
semantics. Material Pages keep their explicit public Route adapter.

`additionalLibraries` merges public exports by actual declaration identity. Generic
bounds and inheritance are resolved before emission; TS keeps type relationships while
Dart calls use configured legal concrete types. Private defaults remain omitted in real
calls. N independently omitted parameters require 2^N direct call combinations; the
fixtures execute all eight combinations for three parameters and all 64 combinations for
six parameters, checking omitted defaults separately from explicit null. Selection
proposals cap independently omitted parameters at six; this does not remove exponential
growth from explicit selections. No reflection, class-specific object adapters or
snapshot restoration remain.

Dependent TypeScript generic defaults follow preceding type parameters instead of their
Dart runtime erasure. Explicit generic arguments preserve the declared relationships;
complete Dart-equivalent inference is not required. Callback rejection diagnostics name
the unsupported parameter or result position, including nested callback signatures.

Protocol 20 expands selected inherited instance surfaces before emission and separates
ordinary Object interop from explicitly selected `data` positions. Enum results are
canonicalized by the shared Dart encoder, not individual generated wrappers. Previous
protocol 18 and 19 modules and bundles are rejected.

See [binding selections](../../docs/architecture/bindings.md),
[interop and limits](../../docs/architecture/interop.md), and
[object lifetimes](../../docs/architecture/objects.md). Unsupported signatures fail with
an explicit generation error rather than permissive declarations.
`FlaxCodegenBindingParser.proposeSelection` proposes a bindable member subset for one
class or mixin. `proposeLibrary` builds on it to inventory one public library and returns
an inferred config, skips, and informational notices. For ordinary class contracts it
also recommends and embeds a validated `implements` or `extends` proxy when one is
unambiguous. Explicit YAML `generate` remains fail-closed: listed members still error.
Special lifecycle decisions remain explicit overrides.

Prepared dependency owners are reused by `proposeSelection`: `provider` identifies the
existing JS package, with no duplicate local selection. An explicit requested surface or
adaptation that the owner does not provide produces a skip diagnostic; consumers do not
expand the owner's published API. Core owns the minimal DateTime, Uri and StringBuffer
selections, as well as the existing Duration selection.

Instance getters returning `void`, including inherited generic getters instantiated as
`void`, evaluate once in Dart and return JavaScript `undefined`. Exceptions and ordinary
non-void getter behavior are preserved.

Configuration format 1 accepts an optional `typedefs` selection. Public aliases export
TypeScript `Name<T>` and directional `NameInput<T>` types, preserving alias parameters,
bounds, defaults, nullability and function-local generic scopes. Supported examples
include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`. Core
exports the real Flutter `ValueChanged<T>` and `ValueGetter<T>` aliases.

Aliases reuse existing callback and collection conversions and create no runtime
constructor or additional wire identity. Explicit TS type arguments are supported;
matching all Dart inference is not required. Generic callbacks retain bound erasure and
concrete-use-site result validation. Unsupported targets, recursive or unbound callback
bounds, and export-name collisions fail explicitly. Manifest 10 preserves alias origins,
parameters and targets across packages; strict Manifest 2 through 6 dependencies remain
readable under their original restrictions. See
[ADR 0025](../../docs/decisions/0025-generic-typedef-bindings.md). Complete mixin
composition and complete Dart type-system coverage remain separate work.

Records are structural values with no wire ID or session identity. Generated TypeScript
uses readonly object fields (`$1`, `$2`, ... for positional fields plus named fields),
while Dart conversion reconstructs real Records and recursively reuses the existing
conversion rules for nested callbacks, collections, Futures and provider-owned objects.
Manifest 7 is the first schema that can encode Record fields; readers 2 through 6 reject
Record metadata under their original schemas.

Style and Theme selections reuse object, static-member and Widget generation. Optional
named TS inputs explicitly include undefined for exactOptionalPropertyTypes. An
independent fixture compiles constructor, instance, static and proxy calls in that mode.
Required inputs remain required. The SDK test reports constructor call counts and
generated sizes.

Widget constructor callbacks with direct synchronous `Widget`, `Widget?` or
`List<Widget>` results use mounted Widget result semantics automatically. `BuildContext`
is an ordinary callback argument and is not required for this inference. The historical
`independentWidgetCallbacks` field remains accepted for explicit selections but automatic
discovery does not emit it. A separately named plugin fixture verifies generation and
repeated result mounting through the UI tests.
See [lazy list ownership](../../docs/architecture/lists.md).

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

The internal State surface uses proxy: host with explicitly selected concrete overrides
and super entries. Generated mixins supply typed native calls; the shared component host
owns mounting, results and cleanup. Required-super constraints follow superclass and
mixin declarations, including unannotated intermediate overrides; implements-only
contracts do not impose a super call. Independent Processor tests verify the mechanism.
See [components](../../docs/architecture/components.md).

Non-constructible mixin selections use the same object/member model as classes, without
mixin construction or proxy generation. Contexts may select supported readonly getters;
Future getters include Future<void>. Static getter-only surfaces emit a real JS object,
with accessors that call Dart lazily instead of erasing the namespace or eagerly reading
the singleton. The independent Pulse fixture covers inheritance and compiled Dart/TS.

Returned callback signatures generate direct typed invocation adapters as well as
incoming closure adapters. Directional TS types distinguish JS callback arguments from
arguments to returned Dart functions, including collection inputs/outputs. Recursive
validation rejects unsupported returned signatures. Native Widget values return opaque
DartWidget references; Context arguments borrow existing Flutter owners. See
[returned functions](../../docs/architecture/interop.md#returned-functions-and-widgets).

Widget interfaces use `kind: widgetInterface` and `widgetInterfaces` selections. Hosts
generate real implements clauses and native getter/setter/method forwarding, including
generic methods and BuildContext signatures. Native members stay outside JS conversion
and are recorded separately since Manifest 8. Generic interface declarations remain
deferred. Interface Widgets reject direct bindings and constructor callbacks; nested
child Widgets keep their normal bindings. Cross-module fixtures compile both Dart and
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
Const/final/late-final writes and Flutter-specific input semantics are rejected. Provider-owned
declarations reuse the provider's public module without registering twice. Manifest 10
records source identity, read/write operations and public-library routing; Manifest 5
remains readable as the historical namespace representation. See
[readonly generation](../../docs/architecture/bindings.md#public-libraries-and-top-level-readonly-declarations)
and [ADR 0027](../../docs/decisions/0027-public-library-module-delivery.md).

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

UI protocol 20 treats selected Dart `Stream<T>` values as lazy, typed references in both
directions. The same model is used for parameters, results, callbacks, Futures and typed
collections. Generated Stream views retain Dart identity and event conversion; `listen`,
subscription control, controllers, sinks, transformers and iterators call the real
dart:async APIs. `Stream.fromAsyncIterable` and the generated async iterator form the
two explicit JS iterable boundaries. They are unrelated to Fetch `ReadableStream`.

Protocol 20 supports Future-returning generated callbacks. Incoming JavaScript must
return a Promise or thenable; generated Dart adapters expose the exact `Future<T>` shape
and apply the existing typed conversion when it completes. Selected Future parameters,
Future collections and `FutureOr` positions are also generated for the dart:async
surface. Nested Future/FutureOr types reuse the same recursive TypeRef conversion.
Native JavaScript Promise assimilation flattens direct nested Promise/thenable layers,
so generated adapters reconstruct the declared Dart Future layers while preserving
type/value semantics rather than separate JavaScript Promise identity or timing.
Future/FutureOr values inside collections, Maps and Records remain independent async
values. Asynchronous properties and lifecycle/build callbacks remain rejected. A
returned function is a new invocation boundary and may have its own supported Future
result.

Protocol 20 callback models also preserve optional positional parameters, named
parameters and function-local generics. Generated Dart adapters use a private omission
sentinel and direct call branches so Dart and JS defaults execute at their real call
sites. TS retains generic bounds; runtime calls erase them to analyzer-resolved
supported bounds and check incoming generic results against Dart's current type
parameter. Dependent bounds erase transitively. Recursive or unbound bounds fail
generation.

Protocol 20 also recognizes Iterable and Set throughout generated types and conversion
metadata. DartIterable and DartSet wrappers preserve real Dart collection identity;
iteration and explicit copies use one bulk host call and retain repeated references and
cycles.

`deferredFactories` marks a synchronous static generic factory whose type arguments are
inferred from concrete selected Dart use sites. The full generator scans all loaded
modules and emits exact direct materializers instead of requiring every concrete type in
configuration. The JS wrapper records arguments until first use, then locks to the
materialized type and real Dart object. Unsupported inference, conflicting targets,
generic collection inputs and missing concrete consumers fail generation. This path uses
no reflection or runtime TS type token.

Explicit `extensions` selections expose named Dart extensions as receiver-first static
TypeScript adapters: `StringX.getIsBlank(value)` and `StringX.repeat(value, count)`.
Getters, setters, static getters/methods, generic declarations/members and legal Dart
operators reuse the function call channel. Dart invocation always uses an explicit
extension override; no prototype or instance identity is created. Manifest 9 records
these declarations and strictly preserves version 2–8 read boundaries. See the
[extension binding contract](../../docs/architecture/bindings.md#extension-declarations).

Generic bounds can refer to unbound interfaces through Manifest 11 type-only references.
Explicit recursive/dependent class and method specializations keep Dart subtype checks;
TS retains nominal source identity and generic arguments without exposing bound members.
Generic aliases need no runtime erasure when their bounds are type-only. Ordinary values
still require conversion, and unresolved recursive extension/callback specializations
fail explicitly. See [bound tests](test/bound_type_only_test.dart).
