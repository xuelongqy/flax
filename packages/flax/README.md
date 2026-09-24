# flax

Selected Flutter APIs use public library entries such as `@flax/flutter/foundation` and
`@flax/flutter/widgets`. Dynamic top-level values are ordinary module exports such as
`getKIsWeb()` and `getDefaultTargetPlatform()`; each call reads Dart without caching or
subscribing, while importing the module does not evaluate them. See
[top-level values](../../docs/architecture/bindings.md#public-libraries-and-top-level-readonly-declarations).

Owns the engine-independent runtime API and the shared Dart FFI bridge. Also owns
FlaxSession, FlaxView, generated base bindings, mounted-property subscriptions, and
Flutter subtree reconciliation. The package is experimental, version 0.0.0, with
publication disabled.

## Paired installation

Applications install `flax` from Pub and the physical `@flax/core` runtime package at
the same exact version when Core is carried by that application. Public Flutter and Dart
SDK declarations are exposed separately through `@flax/flutter/*` and `@flax/dart/*`;
applications that provide those modules through `Flax.moduleAssets` can depend on the
declaration packages without bundling a second implementation. The Pub package contains
Dart, generated bindings, the base host bootstrap, and the public native ABI header. The
npm runtime package contains signals, binding transport, Core implementation modules,
navigation, and host declarations.

```yaml
dependencies:
  flax: <version>
```

```sh
pnpm add @flax/core@<version>
```

Register `flutterBindings` in the application's `FlaxBindingRegistry`. Import
`@flax/core/host` only for session host global types; it has no installation side effect
and targets an ES-only TypeScript project rather than `lib.dom`.

Application source imports Flutter libraries through their public paths, for example
`@flax/flutter/widgets`; `package:flax/bindings.dart` is exposed as
`@flax/core/navigation`. Public paths, physical npm delivery packages, and stable wire
IDs are separate concerns. See
[package boundaries](../../docs/architecture/packaging.md).

Generated Builder/LayoutBuilder adapters use real Flutter callbacks. The shared UI host
owns callback results and Context references per mounted instance; scalar member calls
and ordinary Dart references reuse the synchronous runtime bridge. Protocol 21 extension
types include callback signatures, getters, static/instance methods, contexts,
references, borrowed State, Routes, Pages, and selected Future results. These UI
features do not change the pure-Dart runtime entry or native ABI.

`FlaxCallbackParameter` records callback names, positional/named form and requiredness.
Generated adapters preserve optional omission in both directions. Generic callback and
proxy methods retain their TypeScript relationships while the Dart bridge converts
through analyzer-resolved bounds; no runtime TypeScript token is transported.

## Entries

- `package:flax/runtime.dart`: `FlaxJsRuntime`, primitive values, object/function
  reference interfaces, synchronous host callbacks, and `FlaxJsException`. No Flutter UI
  type imports.
- `package:flax/flax.dart`: exports runtime, FlaxSession, FlaxView, binding extension
  APIs, and flutterBindings.
- `package:flax/bindings.dart`: public generator/plugin registration and host extension
  types.
- `package:flax/native_runtime.dart`: public engine-author extension exposing the shared
  native wrapper and generated ABI table type. Normal applications use `runtime.dart`.

Objects and functions retain their owning runtime. Release owned references explicitly;
callback references are borrowed until return, with `retain()` for longer use. Runtime
`dispose()` cleans remaining references and must be called explicitly. Never pass a
reference between runtimes. See the complete
[runtime contract](../../docs/architecture/runtime.md).

FFI declarations are generated from the canonical native headers. Run
`dart run melos run ffi:generate` from the repository root after header changes; never
edit generated declarations. The shared wrapper has no Hermes library name or path.

Real engine integration tests live in the
[Hermes package](../flax_engine_hermes/README.md); ABI tests live in
[native/tests](native/tests/README.md). See
[scoped checks](../../CONTRIBUTING.md#checks).

See the [UI contract](../../docs/architecture/ui.md) for session ownership, frame
scheduling, error recovery, and explicit limits. `check:ui` exercises the real
Hermes-backed host.

Navigation now includes explicit sessions, shared or nested Flutter Navigators,
Route-owned callbacks, copied data, and UI Future delivery. See the
[navigation contract](../../docs/architecture/navigation.md) for the selected subset and
lifecycle rules.

`FlaxView.page` borrows a session and mounts a registered JS factory without its initial
root. Same-identity parameter changes update a readonly signal while keeping local
state. FlaxPageBinding, FlaxPageConfiguration, FlaxPageLease, and FlaxPageRoute are the
public generation/adapter boundary for standard library Pages. Native host Routes keep
their named content's session through TransitionRoute.completed.

Session retention and final release use explicit internal methods. Callback scope is
fixed at creation/mount, while node updates prepare and validate before committing.
Nodes without binding or callback parameters, including nested callbacks, reuse their
validated native Widget; Element state and subscriptions still belong to each mount. See
the [UI contract](../../docs/architecture/ui.md) and run `dart run melos run ui:test`
for framework regression tests with already prepared Hermes assets.

FlaxObjectBinding and FlaxSetter extend generated registration for immediately
constructed Dart objects. ScrollController and SingleChildScrollView use this path.
Widget parameters borrow controllers; named page factories can register cleanup through
PageLifecycle. See [owned objects](../../docs/architecture/objects.md) for listener and
disposal semantics.

ScrollController.animateTo accepts Duration and Curve references and returns a Promise
through the existing Future bridge. Core selects Curve.transform, Cubic and five Curves
constants. ListView.builder and SingleChildScrollView also accept selected ScrollPhysics
references with parent composition; native Flutter owns motion and drag behavior. See
[scrolling](../../docs/architecture/lists.md).

Core also owns ShapeBorder/OutlinedBorder, RoundedRectangleBorder, CircleBorder,
StadiumBorder and selected mouse cursor constants. Existing Border/BoxBorder values
retain their identity and satisfy ShapeBorder. Material reuses these public exports and
their provider manifest. See
[shapes and cursors](../../docs/architecture/styles.md#shapes-cursors-and-density) and
the [shared-object tests](../flax_material_ui/test/ui/shared_objects_test.dart).

TextEditingController adds text/value/selection access and Flutter editing methods.
TextEditingValue, TextSelection and TextRange are constructed by Dart and returned as
readonly references; nested fields call real Dart getters. See the
[text input contract](../../docs/architecture/text-input.md).

Generated Color, FontWeight and TextStyle references support Text.style and Material
consumers. See [styles and themes](../../docs/architecture/styles.md) for defaults,
copyWith, property bindings and inherited dependencies.

Generated ListView.builder uses explicit independent callback results and Flutter-owned
scrolling, caching and key matching. See [lazy lists](../../docs/architecture/lists.md).

Generated Spacer selects `key` and reactive `flex`, retaining Flutter's default flex of
one and native free-space distribution. The
[Core/Material slice tests](../flax_material_ui/test/ui/binding_slice_test.dart) compare
default, unequal and changing flex values with native Flutter layout.

Generated Expanded/Flexible and Stack/Positioned preserve Flutter ParentData through the
existing hosts. Align and physical/directional alignment values reuse ordinary object
bindings. See [layout](../../docs/architecture/layout.md).

Generated Container/DecoratedBox and physical/directional decoration values use the
existing hosts and real object references. See
[decoration](../../docs/architecture/decoration.md).

Fixed custom-component hosts and generated State lifecycle dispatch support real Flutter
State and independent property signals. See
[components](../../docs/architecture/components.md).

FlaxSession.componentType borrows a JS constructor and returns the native Finder type
token. Component Contexts can query original ancestor configurations and read generated
Size references after layout; SchedulerBinding.endOfFrame uses existing Future delivery.
See
[component queries](../../docs/architecture/components.md#queries-and-layout-measurements).

Generated PreferredSizeWidget/PreferredSize and Size constructors support native Widget
interface inputs. See
[fixed configuration](../../docs/architecture/widget-interfaces.md).

Sessions install the [base host environment](../../docs/architecture/host.md) before
application source. FlaxPlugin configurations are snapshotted per session; optional
capabilities such as Fetch use separate packages. The runtime host type entry has no
installation side effects. Bare FlaxJsRuntime instances retain explicit microtask
scheduling.

Public `FlaxFunctionBinding` and `FlaxNavigatorObserver` support generated top-level
calls and native Route functions. Core selects applyBoxFit, BoxFit and FittedSizes. See
[function and observer contracts](../../docs/architecture/functions.md).

Generated ValueListenable implementations expose a real Dart readonly value and explicit
listener methods. See [proxy properties](../../docs/architecture/proxy-properties.md).

Generated callbacks declared to return Future observe a JavaScript Promise and return a
real typed Dart Future. Promise settlement reuses the UI checkpoint; callback
replacement or unmount does not cancel an in-flight result, while session closing fails
pending results and ignores late settlement. RefreshIndicator is the first native
Flutter consumer of this path.

Generated dart:async bindings expose lazy, bidirectional `Stream<T>` references,
subscriptions, controllers, sinks, transformers and iterators. Stream operations call
the real Dart objects; JavaScript AsyncIterable conversion is explicit and bounded to
one in-flight `next()`. `StreamBuilder` and `AsyncSnapshot` use Flutter's native
subscription and rebuild lifecycle. Dart Streams remain separate from Fetch Web
`ReadableStream`; applications close their own controllers while session shutdown
cancels bridge-owned subscriptions and AsyncIterable sources.

Optional storage uses `FlaxSession.namespace` or owned `FlaxView.namespace`. See the
[storage contract](../../docs/architecture/local-storage.md).
