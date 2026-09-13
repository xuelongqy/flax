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
```

`<direct-yaml>` must be an explicit direct child of the package `bindings/` directory.
The CLI discovers sibling binding configs in that directory, resolves imported Manifest 2
projections through the package config, and (for `generate`) writes `lib/...`, `js/...`,
and `bindings/manifest.json` below the owning package. The old
`dart run flax_codegen [--check] <config>` form is not supported.

Third-party authors: start from
[docs/author-template.md](docs/author-template.md) and the copyable skeleton under
[example/author_template/](example/author_template/).

Protocol 20 includes ordinary references, returned objects, setters, static readonly
fields, abstract factories, typed List/Map conversion, stored callbacks, fixed Dart
generic instantiation and explicitly selected proxies. Objects need no dispose method.
Contexts/State remain borrowed, and Widget/Page/Route hosts retain Flutter lifecycle
semantics. Material Pages keep their explicit public Route adapter.

`additionalLibraries` merges public exports by actual declaration identity. Generic
bounds and inheritance are resolved before emission; TS keeps type relationships while
Dart calls use configured legal concrete types. Private defaults remain omitted in real
calls. N independently omitted parameters require 2^N direct call combinations; the
fixture executes all eight combinations for three such parameters. No reflection,
class-specific object adapters or snapshot restoration remain.

Protocol 20 expands selected inherited instance surfaces before emission and separates
ordinary Object interop from explicitly selected `data` positions. Enum results are
canonicalized by the shared Dart encoder, not individual generated wrappers. Previous
protocol 18 and 19 modules and bundles are rejected.

See [binding selections](../../docs/architecture/bindings.md),
[interop and limits](../../docs/architecture/interop.md), and
[object lifetimes](../../docs/architecture/objects.md). Unsupported signatures fail with
an explicit generation error rather than permissive declarations.

Style and Theme selections reuse object, static-member and Widget generation. Optional
named TS inputs explicitly include undefined for exactOptionalPropertyTypes. An
independent fixture compiles constructor, instance, static and proxy calls in that mode.
Required inputs remain required. The SDK test reports constructor call counts and
generated sizes.

Selected Widget constructors can mark independentWidgetCallbacks. The model validates
Widget/Widget? results with a leading BuildContext and emits Dart-only ownership
metadata. Nullable callbacks no longer require a non-null result. A separately named
plugin fixture verifies generation and repeated result mounting through the UI tests.
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
generate real implements clauses and readonly configuration forwarding. Interface
Widgets reject direct bindings and constructor callbacks; nested child Widgets keep
their normal bindings. Cross-module fixtures compile both Dart and TS. See
[interface generation](../../docs/architecture/widget-interfaces.md).

Top-level `functions` selections generate named JS exports and `FlaxFunctionBinding`
registrations. Function-only modules, public re-exports, typed callbacks and Future
results share member conversion. Explicit `route` parameter roles require an observed
synchronous TransitionRoute and per-Route callback ownership. See
[top-level functions](../../docs/architecture/functions.md).

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
first-level Future collections and `FutureOr` positions are also generated for the
dart:async surface. Nested Future completion values, asynchronous properties and
lifecycle/build callbacks remain rejected. A returned function is a new invocation
boundary and may have its own supported Future result.

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
