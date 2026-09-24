# Collections, Generics and Generated Proxies

UI protocol 21 shares one conversion and reference mechanism across selected Dart APIs.
[Object ownership](objects.md) describes callbacks, GC and session shutdown.

## Ordinary objects and explicit data

Object, Object? and dynamic use ordinary interop: supported scalars, canonical enums,
bound Dart references and collections. Returned bound objects retain session identity.
Nullable Object and dynamic appear as TS unknown; non-null Object uses {}. Unsupported
objects, functions and unsafe integral numbers fail conversion. Non-finite doubles
remain valid outside the explicit navigation-data boundary.

Navigation arguments, results and return notifications use the generator's explicit
`data` selection. They copy plain data and reject cycles, host references, enums and
unsupported values. Named-page parameters use the same existing explicit copy entry. A
class may expose both ordinary interop and data-copy methods. A generic position marked
as data retains its TS parameter association and constrains that parameter to
NavigationData; TS does not change the configured Dart instantiation.

All typed enum results use the canonical JS instance, including getters, methods, static
fields, collection operations/copies, Futures and callback arguments. Null stays null.
The Dart cache owns one handle per encountered enum value; each returned handle has its
own lifetime. JS wrappers do not perform a second string-to-enum conversion.

## Collections

JS arrays become generated `List<T>` instances. JS Maps become `Map<K,V>`; plain JS
objects are a convenience input for string-keyed maps. JS iterables become typed List
snapshots for `Iterable<T>` inputs, while JS ReadonlySet values become real `Set<T>`
instances. Elements, keys and values are converted using the same generated types and
checked before the target method runs. Existing compatible Dart collection wrappers pass
the original collection back.

Collection wrappers are typed views, indexed by Dart identity and conversion type. The
same type view reuses its live JS wrapper; different views of one collection do not
promise `===`. An Object/dynamic result uses the broad view, while List<int> uses the
integer view. Both operate on the same Dart instance, so mutations remain visible
through either. Each view retains its own conversion rules regardless of return order.
Outer container nullability does not split non-null views. Type identifiers include
element/key nullability, callback signatures and explicit data-conversion semantics.

An expired view releases only its own handle. The last expired view removes the Dart
collection index; session close clears all views. Compatible views may be passed to
typed Dart parameters after checking the original collection. There is no runtime
generic inference, automatic type promotion or collection state mirror.

DartIterable exposes length, isEmpty, contains, iteration and toArray. DartList adds
get, set, add, addAll, removeAt and clear. DartSet adds add, addAll, remove, clear and
toSet. DartMap exposes length, get, set, containsKey, remove, clear and toMap. These
methods operate on the original Dart collection. A missing map key returns null;
containsKey distinguishes it from a present null value. Fixed-length and unmodifiable
behavior, Set/Map equality and errors come from Dart. No Proxy or collection observer is
installed.

Iteration snapshots a Dart Iterable with one host invocation rather than one call per
element. `toArray()`, `toSet()` and `toMap()` likewise make one host invocation. They
recursively copy collection contents, preserving repeated references and cycles.
Ordinary object elements remain references. Navigation data continues to reject cycles
and host references. Bulk copies still incur conversion/allocation cost proportional to
the graph; one host invocation does not mean zero work.

## Returned functions and Widgets

Typed functions returned by getters, methods, Futures or List/Map operations are
callable JS wrappers. The generator emits both a typed Dart closure for incoming JS
functions and a direct Dart invocation adapter for returned functions. Each session
caches wrappers by Dart function equality and complete conversion signature. A wrapper
is not necessarily identical to the originally supplied JS function. Passing it back to
a compatible Dart parameter restores the original closure instead of wrapping again.

Every returned function follows the Dart signature, including functions originally
written in JS. For example, a returned `List<int> Function(List<int>)` accepts a JS
array or DartList, and returns DartList. A JS-source call crosses into Dart, reenters JS
with converted arguments, and converts the result before delivering it. This extra work
is intentional; origin does not change the API's return type. One shared host entry
serves all functions. There is no per-function global host registration or reflection.

Collection copies retain the declared element/key types, including callback signatures.
Shared containers are validated under every encountered view. Incompatible encodings
fail rather than silently choosing the first view. Ordinary Object/dynamic functions
remain unsupported because they carry no conversion signature. Mutation errors do not
promise rollback; a supported removed callback is returned as a callable value.

DartWidget is an opaque, readonly reference included in Widget. It cannot be constructed
or disposed by JS and exposes no arbitrary Widget fields. Returning a real Dart Widget
passes that same instance back through roots, children, builders, components and page
content. It adds no Element and preserves the actual runtimeType and key. DartList of
Widget becomes a structural snapshot when accepted as children. The Widget collection
boundary supports reading, copying and removal. Inserting or replacing Widgets from JS
remains unsupported. Direct non-null `List<Widget>` callback parameters and results are
supported; other Widget collection callback shapes remain fail-closed. Single Widget
arguments support Dart retention as described below. Widget references are accepted only
at Widget positions, not ordinary Object/dynamic inputs. Flax hosts also retain their
description resources. The application root holds the session until its subtree
unmounts, even when it consists entirely of native Widgets.

A returned builder borrows the supplied Context's existing owner and lifecycle. It does
not manufacture an Element, extend Context lifetime or execute during conversion.
Callback signatures preserve required and optional positional parameters and required
and optional named parameters. Named arguments use one final JS options object. Omitted
optional values are not sent, so JS and Dart defaults execute normally; explicit null is
still checked against Dart nullability. A callback whose Dart result is Future must
return a Promise or callable thenable; a synchronous value is rejected. Future
parameters, Future collection positions, and FutureOr in supported positions generate.
Nested Future and FutureOr completion values also generate recursively. Native
JavaScript Promises assimilate direct nested Promise/thenable layers, so Flax preserves
the declared Dart type and converted value but does not expose independent JavaScript
identity or completion timing for those direct layers. Collection, Map and Record fields
form conversion boundaries: Future/FutureOr values inside them remain independent async
values. Native Route references remain unsupported. A function returned by a Future
starts a separate invocation boundary and can have its own supported Future result.
Stream references may appear in supported callback and collection positions because they
retain their own lazy Dart lifetime. Ordinary synchronous Widget-to-Widget functions do
not require a Context; true UI builders still use their actual mounted owner.

Future result encoding distinguishes `Future<T>?` returning null (JS null), `Future<T?>`
completing with null (Promise resolves null), and `Future<void>` completing normally
(Promise resolves undefined). Getter, method and collection results share this encoder
and the existing UI checkpoint and close-cancellation rules.

The reverse direction creates one pending Dart Future per JS Promise result. Settlement
runs through the existing safe UI checkpoint and one shared host entry. Fulfilled values
use the declared generated conversion, including callbacks and Widget configuration
holds. When a direct nested Future is part of the declared completion type, generated
adapters rebuild the required Dart Future layers after JavaScript Promise assimilation;
direct nested FutureOr completion recovers to its immediate value branch. Rejections
become FlaxJsException with the available JS message and stack. Reading or converting a
hostile rejection value cannot strand the Dart Future; Flax falls back to
`Promise rejected` when no message can be obtained safely. A callback replacement or
Widget unmount does not cancel an already returned Future. Session closing completes
pending Futures with `StateError('FlaxSessionClosed')`, drops their observers and
ignores later settlement. Promise cancellation is not inferred.

## Dart Stream and FutureOr (UI protocol 21)

Selected Dart `Stream<T>` / `Stream<T>?` results and parameters use the JS interop type
**`FlaxStreamReference<T>`** (`@flax/core/bindings`). Generated Flutter bindings still
export dart:async **`Stream`**, **`StreamSubscription`**, and the other Core-selected
companions (`StreamController`, transformers, `StreamIterator`, `StreamBuilder`, and
related types). There is no `DartStream` alias. This is dart:async-shaped interop, not a
host Fetch **`ReadableStream`**.

Wrapping or transforming a Stream does not listen. Every generated `listen` creates a
real Dart subscription; single-subscription and broadcast behavior, pause/resume,
`cancelOnError`, cancellation and `asFuture` remain Dart-owned. Data, errors and done
notifications cross at their actual Dart scheduling points. Callback Promise rejections
are reported as asynchronous UI errors and do not implicitly pause the subscription.

JavaScript can construct the selected Stream factories, controllers, sinks,
transformers, views and iterators. Generic JS-created objects use their analyzer upper
bound in Dart, normally `Object?`; a concrete `Stream<X>` parameter creates a typed view
that validates each event as `X`. Different event-type views can coexist over the same
Dart Stream identity. No TypeScript type argument or runtime Type token crosses the
bridge.

`Stream.fromAsyncIterable` is the explicit JS source conversion. It acquires the JS
iterator only when Dart listens, requests at most one item at a time, stops requesting
while paused, and calls `return()` on cancellation. Generated Streams implement
`AsyncIterable`; each iterator is backed by a real `StreamIterator`, rejects concurrent
`next()`, and awaits cancellation from `return()` or `throw()`.

Dart errors that cannot be represented directly use a JS Error carrying the original
Dart error and StackTrace references, so passing the error back to `addError` restores
the originals. One- and two-argument `onError` callbacks are supported. Scoped sink
parameters such as `fromHandlers` are revoked when their callback returns.

Flutter `StreamBuilder<Object?>` owns subscription replacement, snapshot timing,
rebuilds and unmount cancellation. `AsyncSnapshot` and `ConnectionState` are real Dart
values. Flax does not keep a parallel snapshot state.

Session close cancels Flax-created active subscriptions and AsyncIterable sources,
revokes callbacks and ignores late events without waiting on an application cancel
Future. It does not close application-created controllers or sinks. Applications remain
responsible for `close()` and other Dart object cleanup.

`FutureOr<T>` generates in supported getter, method, callback-result and argument
positions. Future inputs required by the selected Stream API, including
`Iterable<Future<T>>`, use typed Promise adapters. Nested Future/FutureOr combinations
reuse the same recursive TypeRef conversion described above. This does not expand async
properties, lifecycle/build callbacks, Context roles, Route transport or Stream
semantics. Protocol 18 and 19 modules are rejected. See
[ADR 0020](../decisions/0020-complete-dart-stream-interop.md).

## Widget configuration and mounting

A selected single `Widget` or `Widget?` input accepts generated descriptions, custom JS
components and existing DartWidget references. It uses the same typed conversion in
constructors, members, top-level functions and callbacks in both directions. Ordinary
Object/dynamic inputs do not gain Widget conversion. A `Widget Function(Widget)`
receives and returns real Widgets without a synthetic Context or Element.

Before the actual Dart call starts, each escaping Flax Widget takes one independent
configuration hold. Native wrappers such as Padding can retain it through their child
field; Flax does not inspect native Widget fields or retain the entire invocation as a
substitute. All arguments must validate first. Once Dart is called, a throwing callee
may already have saved a Widget, so its configuration hold remains valid.

Configuration holds reuse resource reference counts. Their Finalizer records contain
only cleanup dependencies, JS handles and weak owner/session links, never Widget data or
whole descriptions. Component description and Widget identity caches are weak. The live
Widget preserves its configuration; an unreachable Widget can release it after actual
Dart GC. JS reference wrappers may independently keep the same Widget alive. There is no
new Widget or Element layer, public retain API, or class-specific adapter.

An unmounted configuration creates no State, Context or signal subscription. Each mount
owns those resources independently; Flutter decides State reuse by type and key. Unmount
releases mount resources immediately, while Dart may retain the configuration for later
mounting. Finalizers do not implement State.dispose or listener removal. After all
accepted mounts and Routes exit, session close revokes configuration records without
waiting for GC. Retained Flax Widgets then fail safely on mounting, and late finalizers
are harmless. Application object disposal remains explicit. Cross-language cycles still
require the application to break them or close the session.

## Listenable builders

`ValueListenableBuilder<T>({valueListenable, builder, child, key})` and
`ListenableBuilder({listenable, builder, child, key})` use Flutter's native listener
registration, replacement and removal. Dart uses Object? for T; TS preserves the
relationship between `ValueListenable<T>` and the builder's value parameter. JS proxies,
TextEditingController and FocusNode can be consumed through their selected interfaces.

The builder receives the actual `Widget? child` as a DartWidget reference. Returning it
preserves its original Widget, Element and State when Flutter's matching rules allow.
Notifications do not reconstruct static child configuration. Temporarily excluding it
can unmount it; returning it later creates a new mount as in native Flutter. The child
and listener source may themselves be property bindings. The builder remains synchronous
and each invocation owns its result independently; failed invocations show the bounded
error placeholder. Signals update their bound properties independently of Listenable
notifications and State.setState; Flax adds no notification policy.

## Generic declarations and runtime choices

TS declarations preserve generic parameters, bounds, nullability, inherited substitution
and relationships among fields, arguments and results. Configuration still fixes each
Dart class and selected non-proxy method's runtime type arguments to Object? or selected
valid concrete types.

Generic callback and proxy methods are different: generated incoming closures are real
generic Dart functions. Dart chooses the current type argument, Flax converts through
the analyzer-resolved bound, and the returned value is checked against the current type
parameter. Returned Dart generic functions are invoked with the erased bound because JS
does not supply runtime type arguments. An unconstrained parameter erases to Object?;
dependent bounds such as `U extends T` erase transitively. The TS call-site type remains
useful for development, but it does not change the Dart erasure used by the bridge.
Generic callback erasure still rejects recursive bounds, unbound interfaces and bounds
without an existing conversion.

Generic numeric results use the representation required by the current Dart type
argument, including nullable `int` and `double`. Integer conversion rejects fractional,
non-finite and unsafe JavaScript integers; broad `Object?` results keep their decoded
representation. The same validation applies to asynchronous callback results. A nullable
use such as `T?` remains nullable when its bound is erased.

Standalone typedefs reuse these rules. Alias parameters appear on the exported TS type,
while function-local parameters remain on its callback signature. For example,
`Mapper<T> = T Function(T)` and `GenericMapper = T Function<T>(T)` retain their distinct
declaration scopes. Combining them with `Converter<T> = T Function<U extends T>(U)`
preserves the captured outer bound. Aliases also preserve the existing asynchronous,
collection, exception and reference-lifetime behavior; no alias wrapper is allocated at
runtime. Core's `ValueChanged<T>` and `ValueGetter<T>` exports come from the real
Flutter SDK declarations. See [standalone typedefs](bindings.md#standalone-typedefs).

No runtime type tokens or TS compiler transformation are used. A generic function whose
implementation depends on the exact runtime identity of the TS call-site type is outside
this contract. Unsupported signatures fail generation. ValueKey retains separate String
and int Dart instantiations so Flutter key matching is unchanged.

Selected deferred generic factories are materialized from concrete Dart use sites rather
than a list of configured type arguments. The JS wrapper keeps its factory parameters
until it reaches an exact selected parameter such as `WidgetStateProperty<Color?>`. Dart
then invokes the generated concrete factory once and the wrapper retains that real Dart
object. A later use with another concrete type is an error. Members cannot be called
before materialization, and Object/dynamic positions do not provide enough information
to materialize. The generator validates concrete type arguments against the complete
bound, including parameterized supertypes, nullability, numeric subtypes and
self-referential bounds. A self-referential bound is permitted here because the concrete
use specializes it before validation. Multiple deferred wrappers may resolve to the same
Dart instance; each wrapper remains valid until explicit release or until all weak
aliases expire. No TS runtime type token is created.

Inputs to selected interfaces include compatible bound references and supported scalar
implementations determined by analyzer. For example, Pattern accepts a String or the
bound Dart RegExp. This follows type relationships rather than a Pattern-specific
conversion branch. An arbitrary JS object cannot impersonate a Dart interface.

## Generated implementations

Public factories, including abstract-class factories, are preferred when available. A
selection can request `proxy: extends` for an eligible class or `proxy: implements` for
any class Dart permits an external library to implement. `proposeSelection` chooses
between those modes for ordinary class contracts when the choice is unambiguous:
interface-style contracts prefer implements, while classes with reusable concrete
behavior and a uniquely selectable generative constructor prefer extends. Explicit proxy
configuration wins. JS keeps `SomeType.implement(arguments, implementation)` for
contract-style use. An extends proxy also emits a real TypeScript abstract class so
application code can use normal `class Derived extends SomeType` syntax.

An extends proxy initializes callback fields before calling its selected generative
super constructor. Selected concrete virtual methods and accessors may be overridden in
JS; omitted overrides execute Dart `super`, and JS `super.foo()` uses a generated direct
parent entry so it cannot recurse through the virtual override. An implements proxy
supplies the entire effective interface. Generated direct Dart overrides invoke the
shared callback conversion; there is no parallel Flax abstract-class hierarchy or
reflection.

Required getters and setters use explicit JS accessors with synchronous typed
conversion. The generator resolves effective inherited properties and prepares callbacks
before the parent constructor. See
[proxy properties and ValueListenable](proxy-properties.md).

Proxy methods support the same positional, named and generic callback model, including
supported Future results. `@mustCallSuper` checks capture whether JS called the direct
parent entry before returning control to Dart. For Future/FutureOr overrides this is the
pre-yield boundary: calling `super` before the first `await` is valid; calling it only
after an `await` fails. A returned Promise that rejects preserves that rejection, while
a Promise that resolves without the required pre-yield call completes with the
`mustCallSuper` error. A Dart super constructor may dispatch to a JS override because
callbacks exist before the parent constructor runs, but that callback cannot call JS
`super` until Dart object construction has returned and the object handle is attached.
Such a call fails explicitly instead of recursing or using a partially initialized
handle. Asynchronous properties, private members, non-virtual concrete overrides and
incompatible Dart modifiers fail generation.

## Verification

`bindings:check` compiles SDK and independent plugin output without an engine.
`ui:bundle` generates each fixture into its owning package's `.dart_tool/flax/ui` and
bundles it with the same ES2019 IIFE pipeline. `ui:test` executes it from that package's
UI suite. GC tests use real Hermes/V8 allocation/WeakRef observation and
VM-service-requested Dart collection. They separately assert deterministic session
cleanup and do not replace Finalizer observation with a direct cleanup call.
