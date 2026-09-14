# Binding Generation

The analyzer-based generator resolves selected public APIs and emits Dart calls,
TypeScript declarations and shared parameter metadata. Configuration, parsing/model and
emission remain separate. UI protocol 20 reuses the unchanged native C ABI (ABI 2).

## Selection and generation

The canonical selections are [Flutter](../../packages/flax/bindings/config.yaml) and
[Material](../../packages/flax_material_ui/bindings/config.yaml). They select
constructors, members and parameters without duplicating signatures.
`additionalLibraries` merges public exports, deduplicating the actual declaration and
rejecting conflicting names. Declaration identities use their originating library, while
generated imports use a public library exposing them. No private SDK imports or
reflection are generated.

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
`flax_package.yaml`. Generated `bindings/manifest.json` uses Manifest `formatVersion: 2`
only (Manifest 1 rejected after the M3 direct cutover). See the
[external binding migration guide](../guides/external-binding-migration.md) and the
[compatibility matrix](external-binding-compatibility.md).

Include dependency modules to share declaration ownership. Input order does not change
adaptation identity.

## Literal module tuple and registration

M5-F landed the public Dart and JavaScript contract. Native ABI 2 and UI protocol 20
semantics are unchanged. `uiProtocol` is a pre-release **rename** of the old ambient
`version` field, not a second version domain. Official generated modules emit required
`moduleId`, `uiProtocol`, and `requiredCapabilities` literals; they do not register with
ambient `version: 20`.

### `FlaxBindingModule`

Keep `name`, `types`, and `functions`. Add required:

| Field                  | Rule                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleId`             | `String`; Manifest 2 / [ADR 0022](../decisions/0022-stable-binding-identity.md): `bindingNamespace + "/" + name`                                                                         |
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
Future completion values, asynchronous lifecycle/build callbacks, Map callback keys, and
Widget collections in callbacks remain unsupported. Dart Stream references can appear in
parameters, results, callbacks and typed collections; they follow
[ADR 0020](../decisions/0020-ui-protocol-20.md). The JS interop handle is
`FlaxStreamReference` (not a `Dart*` alias and not Web `ReadableStream`). Generated
Flutter bindings expose the selected dart:async Stream family and call real Dart
operators. Widget builders and Route factories stay synchronous and retain their Flutter
lifecycle-specific ownership.

## Example object selection

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

Disposal must be an explicitly selected synchronous zero-argument void method. Listener
pairs select one non-null VoidCallback argument on each method. These annotations
identify API semantics; they do not impose application disposal policy. Classes with
neither annotation use the same reference mechanism. See [object lifetime](objects.md).

`typeArguments` and `methodTypeArguments` choose valid concrete Dart types. The analyzer
checks bounds and inherited substitution. TS retains its generic variables and
associated signatures, but those variables do not instantiate new Dart types. ValueKey
uses the explicit String/int scalar specialization for Flutter key identity.

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
remain generation errors. Full CLI generation requires at least one concrete selected
use. Partial fixture emission can omit consumers so parser and emitter tests can inspect
one module at a time.

`proxy: extends` and `proxy: implements` are explicit opt-ins for generated
implementations of eligible abstract/interface declarations. See
[proxy limits](interop.md#explicit-generated-implementations). The independent
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
core identities. Planned in-envelope expansions, the hard-wall queue, and the Cupertino
first-wave call are in the [coverage map](binding-coverage-map.md).

Material Pages retain their explicit public PageRoute adapter and standard transition
mixin. This is separate from ordinary object references. No per-class Controller guard,
editing snapshot restorer or fallback formatter remains.

Framework fixture generation runs from `ui:bundle` into each owning package's
`.dart_tool/flax/ui`, including temporary Dart bindings. `ui:test` executes each
package's own UI tests with only that package's fixture and dependency closure, and
requires prepared native assets. `check:ui` adds runtime, packaging, package examples,
aggregate macOS integration and release verification. See
[contributing](../../CONTRIBUTING.md#checks).

C-header FFI generation is separate (`ffi:generate` / `ffi:check`). JS tree shaking does
not remove Dart registry entries automatically; broad API coverage, bytecode loading and
other engines remain separate work.

Widget constructor selections support [independentWidgetCallbacks](lists.md) for
callbacks returning separately mounted children, including nullable Widget results.

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

Select non-constructible readonly contracts with `kind: widgetInterface` and preserve
them on generated hosts with `widgetInterfaces`. Arguments are fixed; native getters
forward to the cached real configuration. See [Widget interfaces](widget-interfaces.md)
for type checks, subset limits and parent-property updates.

Top-level functions have their own selection, model and registration surface; they are
not represented as classes. See [function generation](functions.md) for defaults, data
boundaries and restricted Route ownership roles.
