# Collections, Generics and Generated Proxies

UI protocol 24 shares one conversion and reference mechanism across selected Dart APIs.
[Bridge references](references.md) describes callback and reference GC;
[object ownership](objects.md) describes application disposal and session shutdown.

## Ordinary objects and explicit data

Object, Object? and dynamic use ordinary interop: supported scalars, canonical enums,
bound Dart references and collections. Returned bound objects retain session identity.
Nullable Object and dynamic appear as TS unknown; non-null Object uses {}. Unsupported
objects, untyped JS functions and unsafe integral numbers fail conversion. Authentic
native Dart Function references roundtrip through Object/dynamic, including nested
collections, with their original closure identity. Non-finite doubles remain valid
outside the explicit plain-data boundary.

Object input classification runs in one synchronous JS helper call, preserving the
existing order for native brands, Dart references, State, thenables, errors and
collection shapes. Ordinary decisions use scalar results instead of allocating an extra
metadata object per collection. The decoder still performs its collection checks and
iteration: iterator and Proxy getters can have observable effects. Classification does
not cache mutable input results or add another ownership path.

Navigator and showDialog arguments, results and pop callbacks use ordinary conversion,
just like functions and methods. Named-page entry parameters keep their explicit copy
contract. An API may separately request the generator's `data` selection, which copies
plain data and rejects cycles, host references, enums and unsupported values. A class
may expose both ordinary interop and data-copy methods. A generic position marked as
data retains its TS parameter association and constrains that parameter to
NavigationData; TS does not change the configured Dart instantiation.

All typed enum results use the canonical JS instance, including getters, methods, static
fields, collection operations/copies, Futures and callback arguments. Compatible bound
interfaces and Object results retain that same instance. Null stays null. The Dart cache
owns one handle per encountered enum value; each returned handle has its own lifetime.
JS wrappers do not perform a second string-to-enum conversion. Enum identity lives in a
private WeakMap, so business members named `kind`, `type` or `name` do not collide with
the bridge. Clones and prototype forgeries are rejected.

Enum members share one frozen prototype per bound enum. Only final primitive fields are
cached, after their first real Dart read; computed getters, statics, objects,
collections and callbacks retain ordinary conversion and lifetime rules. Module import
does not read Dart state. See [enum bindings](bindings.md#enum-bindings).

Named extension static writes use the same function parameter conversion as class static
setters. `StringX.setTimes(5)` writes the real Dart static property once; supported
Widget, Context, State, callback, Future and Stream inputs add no separate owner or
conversion path. Static reads stay readonly and execute the real Dart getter. The Dart
application owns this shared state; closing a session clears bridge resources without
resetting static properties. See
[extension bindings](bindings.md#extension-declarations).

## Extension types

Extension types reuse their erased representation in both binding directions, including
Flutter references and supported collection, Record, callback, Future and Stream
combinations. A `Panel(Widget)` value remains the existing Widget reference; it adds no
bridge owner or GC responsibility. Nullable representations retain null, while required
arguments still reject missing values and undefined. Context and State validity, foreign
session rejection and Flutter lifecycle boundaries still apply. See
[representation binding](bindings.md#extension-type-representations) and its
[real UI regression](../../packages/flax/test/ui/extensions_test.dart).

## Native Date, URL and RegExp inputs

Exact `dart:core` DateTime parameters accept real JS Date objects. The bridge reads the
intrinsic millisecond timestamp and constructs a local Dart DateTime. Invalid dates and
numeric or string timestamp guesses are rejected. Existing Dart DateTime references pass
through unchanged, including UTC status and microsecond precision.

Exact `dart:core` Uri parameters accept real base-host URL objects or strings. URL
inputs use the intrinsic href getter; strings use Dart Uri.parse and may be relative.
Objects that merely expose getTime or href, including prototype forgeries, are rejected.
Each native input is a value snapshot; later JS mutations do not change the Dart value.

Exact `dart:core` RegExp and Pattern parameters also accept real JS RegExp values. The
bridge captures intrinsic source and flag getters. Only `i`, `m`, `s` and `u` are
accepted; `g`, `y`, `d` and `v` are rejected instead of dropping behavior. lastIndex is
not transferred. Pattern still accepts literal strings and existing Dart references.
RegExp results remain Dart references; `pattern`, the four flag getters and `hasMatch`
provide explicit inspection and matching. `firstMatch`, `allMatches`, `matchAsPrefix`
and `stringMatch` use Dart matching semantics. Match and RegExpMatch are real Dart
references with group access, UTF-16 start/end indices and named groups. Match iterables
remain lazy Dart references; `toArray()` explicitly materializes their results.

DateTime exposes parsing, local/UTC constructors and conversion, component getters,
Duration arithmetic and comparisons. Comparison parameters accept JS Date snapshots
under the same rule; Duration parameters still require explicit units. Uri exposes
path/query components, construction, resolution, replacement and encoding helpers. Lists
and maps returned by Uri remain Dart collection references. Native JS inputs are
accepted only in the already-supported DateTime, Uri, RegExp and Pattern positions.

These rules use the shared decoder for constructors, methods, setters, nested collection
and Record elements, Future inputs and callback returns. Results and callback arguments
remain Dart references. DateTime.millisecondsSinceEpoch and Uri.toString provide
explicit JS snapshot conversion; a relative Uri requires a base when constructing a JS
URL. Converting a Dart DateTime to JS Date loses sub-millisecond precision and its
UTC/local anchor. Ordinary Object/dynamic positions do not infer these SDK objects.
Custom Dart subtypes and unrelated same-named declarations retain their own reference
requirements.

Generated modules using these SDK types require the additive `native-core-inputs`
capability. UI protocol 24 and native ABI 2 remain unchanged.

## Collections

JS arrays become generated `List<T>` instances. JS Maps become `Map<K,V>`; plain JS
objects are a convenience input for string-keyed maps. JS arrays and ReadonlySet values
use typed collection snapshots. Other JS Iterables use a lazy adapter for `Iterable<T>`
inputs: each iterator captures its `next` method once, and each element is converted
when Dart requests it. Snapshots validate their contents before the target method runs;
lazy iteration validates each requested value. Existing compatible Dart collection
wrappers pass the original collection back.

One temporary JS WeakMap assigns identity indices during a raw collection conversion.
The Dart memo uses these indices to preserve repeated references and cycles without
scanning every earlier input, including repeated lazy Iterable inputs. It retains the
same scoped input handles and releases the map closure and handles when conversion
succeeds or throws.

Collection wrappers are typed views, indexed by Dart identity and conversion type. The
same type view reuses its live JS wrapper; different views of one collection do not
promise `===`. Unbound Object/dynamic collection results use the broad view, while
List<int> uses the integer view. Both operate on the same Dart instance, so mutations
remain visible through either. Each view retains its own conversion rules regardless of
return order. Outer container nullability does not split non-null views. Type
identifiers include element/key nullability, callback signatures and explicit
data-conversion semantics.

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

### Native iterators

Core exports the Dart `Iterator<E>` binding through `@flax/dart/core`. It is an ordinary
object reference with read-only `current` and `moveNext(): boolean`, without a JS
constructor. Automatic selection reuses that provider for getters, methods, functions
and callbacks carrying Iterator references; it does not introduce a new type kind,
source adapter or cursor state in JS.

For a bound Dart API such as `Iterator<String> values() => ['one', 'two'].iterator`,
JavaScript uses the native cursor:

```ts
const cursor = values();
while (cursor.moveNext()) {
  console.log(cursor.current);
}
```

Each advance and read uses the shared cached member dispatch. Dart owns position,
exhaustion, concurrent-modification behavior and exceptions. Read `current` only after
`moveNext()` returns true; the SDK leaves other positions unspecified. Element values
use the same shared generic conversion as ordinary object members, preserving null,
registered object identity and nested Dart collection views. Raw JS iterators are not
Dart Iterator inputs; selected typed calls also validate the actual Dart generic type.
Closed signatures retain their element converters, including callback elements, nested
collections, Future/Stream values and Records. `Iterator<String Function()>` exposes a
callable `current`; `Iterator<List<String Function()>>` exposes a typed Dart List whose
items are callable. Widget, Context and State elements keep their normal lifetime
checks.

Different declared signatures can expose distinct weakly cached JS wrappers for one Dart
cursor, sharing the same prototype. This keeps callback argument guards independent: a
`num` callback accepts `1.5`, while an `int` view rejects it. Repeated reads and
conversions through the same signature reuse their wrappers. Do not use JS `===` to
compare views from different signatures; Dart still receives the identical underlying
object.

The JS `next()`/`Symbol.iterator` protocol is not generated for this interface. Existing
DartIterable iteration continues to make one snapshot call, so callers can choose that
existing bulk path when they do not need a native cursor.

Direct JS Iterator protocol adaptation in either direction is **deferred**. A small Dart
entry accepting `Iterable<T>` can delegate to an Iterator API using `values.iterator`.
Existing conversion accepts JS generators as Iterables without first collecting them;
finite inputs may also use a list. A List is not itself an Iterator. This existing path
is sufficient for the current scope; revisit direct adaptation only for a concrete API
that cannot use an Iterable entry. No new iterator adapter, JS facade or GC mechanism is
planned for this deferred item.

### Collection subclasses

Bound subclasses of List, Map, Set and Iterable combine their selected native members
with the existing collection operations on one real Dart object. For example:

```ts
const items = createShoppingList();
items.add('apple'); // Executes ShoppingList's Dart override.
console.log(items.summary); // A selected business getter.
console.log(items.get(0), items.toArray());
listView(items).add('pear'); // The same Dart instance through List<String>.
```

Selected native members always win name collisions. A native `Tags.toSet()` returns
`DartSet<string>`, while `setView(tags).toSet()` makes the ordinary JS Set copy. A
native getter named `toArray` remains a getter; `[...items]` still uses a separate
internal snapshot operation. No business method is renamed or silently replaced. The
TypeScript surface omits overlapping bridge declarations before adding the native
signatures, and removes redundant Iterable parents of List/Set. All Dart supertype
identities remain available to the existing instance-check mechanism.

Collection inputs check the reference's element/key type brand rather than requiring
every bridge helper to have its default signature. The host still authenticates the
handle, session and actual Dart collection type. This lets a Set subclass with native
`toSet()` be used as a `Set<T>` parameter without claiming that its complete surface is
structurally identical to `DartSet<T>`.

Known generic constructor targets reuse on-demand member views for collection helpers
and nested copies. Existing object views also cache the shared-owner fallback. Copies
recurse into bound collection subclasses and preserve repeated references/cycles;
ordinary object members stay native references. Returning a subclass as
List/Map/Set/Iterable selects that signature's ordinary collection view, not an
automatic downcast to its business API. Typed/provider views still do not promise `===`.
Legal JS proxy subclasses can override selected methods using the existing super-call
path. This adds no collection state mirror, observer, extra object owner or GC backend.
Unbounded generic/Object round-trips of existing subclass references keep their bound
view and business members; newly returned unbound collections retain the broad
collection view. Explicit List/Map/Set/Iterable signatures retain their ordinary
collection view. Method-local generics lowered to a collection bound likewise return the
standard view, including inside aggregates and callbacks. Use Core
`asDart(view, ShoppingList)` to recover a checked class view; it leaves the original
view and Dart object unchanged. `getDartType(view)` reports the Dart runtime type
independently of the selected view. See
[checked views](objects.md#checked-views-and-dart-type-diagnostics). Nullable Map reads
preserve the complete nested conversion metadata, including Records, callbacks and async
values. Unsupported native signatures and generic specialization retain the ordinary
binding rules. Widget collection writes use the same typed conversion and do not
schedule Flutter rebuilds. An unusual Dart class implementing unrelated collection
shapes, such as both List and Set, has no unique copy shape. Explicit selection rejects
it and automatic selection reports `ambiguous_core_collection`; use an ordinary
List/Set-returning API for that view.

## Broad results and checked views

Functions, methods, callbacks, Navigator operations and showDialog share one result
converter, including Future and Stream delivery. A Dart `Object?` declaration does not
erase the actual object's runtime type. Scalars use their JS values; collections use
DartList/DartMap/DartSet references; selected objects use their registered binding view.
Generic views use the maintained engine's actual Dart type arguments. Unbound or
ambiguous ordinary objects fail conversion rather than inventing an API.

TypeScript can still describe a broad result as `unknown`. Narrow primitives with normal
JS checks. For a native class reference, use the shared checked view:

```typescript
import { asDart } from '@flax/core/bindings';
import { TextEditingController } from '@flax/flutter/widgets';

const result = await getApplicationValue(); // Dart Future<Object?>
if (result !== null) {
  const controller = asDart(result, TextEditingController);
  controller.text = 'Updated';
}
```

The same code applies to a broad Navigator or showDialog result. The target must be a
registered generated class/token, optionally selected with `Class.$type(...)`. `asDart`
validates the original Dart object and supplies a compatible view; it does not
construct, copy or change that object's class. Known typed results need no extra cast.
TypeScript type arguments alone do not select native generic arguments; explicit native
selection uses the existing `dartType` mechanism. Navigation adds no result converter.

## Shared Uint8List bytes

Generated `dart:typed_data` `Uint8List` parameters and results use real JavaScript
`Uint8Array` values. This also applies inside callbacks, Future results and collection
elements. Object/dynamic conversion recognizes byte arrays before ordinary Lists. Plain
JS arrays and other TypedArrays do not satisfy a Uint8List parameter.

The bridge shares the actual view range. Writes in either language immediately affect
the same bytes. Already-created Dart lists and aliases work: first export promotes young
storage through normal GC, then roots the numeric backing object and temporarily fixes
its old-space page. JSI MutableBuffer owns that pin. Its last release schedules
unpinning on the UI thread; isolate shutdown retires roots before the VM frees them.
Importing a Dart-backed JS view reconstructs a Dart heap view rather than external data
pointing into the Dart heap. JS-origin bytes use an external Dart view with a native
storage lease. These owners contain bytes, not application objects or a retained JS
runtime. Storage sharing preserves bytes and ranges; repeated conversions may create
different Uint8Array wrappers or Dart view objects.

Same-size ArrayBuffer transfer detaches the old JS buffer while retaining the shared
allocation in V8 and Hermes. Resizing transfer follows JS copy semantics: the new buffer
contains independent bytes, and existing Dart views remain valid. Retained Dart views
also survive session close. JS facade access still requires a live session/runtime.

Sharing requires fixed, writable, unshared storage. Readonly Dart views, detached JS
buffers, SharedArrayBuffer, resizable buffers and incompatible views are rejected.
Hermes retains its 32-bit buffer-size limit. The maintained V8 SDK must disable its
sandbox, which cannot directly expose Dart heap addresses. No copy fallback or
allocation mode is selected. The first share of young data can trigger promotion; pinned
small objects temporarily prevent compaction of their whole 512 KiB page.
External-memory accounting conservatively charges each imported JS view and each Hermes
ArrayBuffer for its retained backing store. Hermes keeps that charge through adoption
and same-size transfer, then removes it on detach or collection.

`FlaxJsRuntime.createUint8Array` and `readUint8Array` expose the same sharing contract.
The existing `createArrayBuffer` / `readBytes` operations retain their explicit copying
semantics for Blob/Fetch and other snapshot APIs, with one payload copy in each
direction. Native snapshots are released by Dart's external-data finalizer independently
of session disposal. The internal binding engine table is version 5; native ABI 2, UI
protocol 24 and Manifest 26 remain independent. Modules using Uint8List require the
additive `shared-uint8` capability. Other supported binary types require
`shared-buffers` and use this same storage lease:

| Dart                        | JS                             |
| --------------------------- | ------------------------------ |
| Int8List / Uint8ClampedList | Int8Array / Uint8ClampedArray  |
| Int16List / Uint16List      | Int16Array / Uint16Array       |
| Int32List / Uint32List      | Int32Array / Uint32Array       |
| Int64List / Uint64List      | BigInt64Array / BigUint64Array |
| Float32List / Float64List   | Float32Array / Float64Array    |
| ByteData / ByteBuffer       | DataView / ArrayBuffer         |

Views reinterpret the same bytes without copying the payload. Exact view kinds, element
widths and alignment are checked. Ranges and overlapping aliases remain shared;
importing a JS-origin slice may normalize its Dart buffer offset to zero. ByteData and
DataView retain their explicit endian operations. Int64/Uint64 sharing preserves bits:
the native Dart VM reads an all-FF Uint64List element as `-1`, while BigUint64Array
reads `18446744073709551615n`. SIMD types have no direct JS counterpart and do not
receive automatic binary projection.

`FlaxJsRuntime.createSharedBuffer` and `readSharedBuffer` cover these views. The
existing Uint8 convenience methods delegate to the same implementation. Readonly access
stays readonly through byte reinterpretation and is rejected before export.

## BigInt and explicit Duration units

Exact `dart:core` BigInt values map to primitive JS bigint in both directions, including
Object/dynamic, nested values, callbacks and Future results. The native bridge uses an
exact decimal UTF-16 payload and captured JS intrinsics; it never converts through
double/Number. Modules using BigInt require `native-bigint`. Existing num/int behavior
is unchanged. Shared 64-bit arrays do not convert their elements through this scalar
protocol.

Duration remains a Dart reference. Construct it with explicit `milliseconds`, `seconds`
or other named units, then read the corresponding getters. A bare number does not imply
a Duration unit. Symbol, Type and mutable builders retain their existing binding
behavior instead of receiving an unrelated native JS projection.

Native-value SDK classes (BigInt and the mapped binary types) do not acquire a second
Dart object facade. Automatic selection omits these classes; explicit class selection
fails before output. Use native JS constructors/APIs and bind Dart APIs that consume or
return these values. Same-named application classes retain ordinary nominal binding.

## Error references

Generated Dart object/proxy and Stream constructor errors, synchronous member/function
errors and rejected Dart Futures use JS Error values carrying the original Dart error
and StackTrace references. Rethrowing these through a typed callback or rejecting a JS
Promise with them restores those originals. Changing the JS Error's diagnostic stack
text does not replace its Dart StackTrace. Different stack occurrences of one error use
separate reference metadata. Normal results keep the existing path; failed synchronous
calls alone allocate an error envelope, released through the normal host-result
checkpoint.

Unknown JS errors retain the existing FlaxJsException message/stack diagnostics. Typed
custom Dart exception and StackTrace parameters still require nominal references;
diagnostic text does not impersonate a Dart exception subtype or original stack.

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
fail rather than silently choosing the first view. Plain JS functions in Object/dynamic
positions still need a typed signature; authenticated Dart Function views retain their
native closure. Mutation errors do not promise rollback; a supported removed callback is
returned as a callable value.

DartWidget is an opaque, readonly reference included in Widget. It cannot be constructed
or disposed by JS and exposes no arbitrary Widget fields. Returning a real Dart Widget
passes that same instance back through roots, children, builders, components and page
content. It adds no Element and preserves the actual runtimeType and key. DartList of
Widget becomes a structural snapshot when accepted as children. The Widget collection
boundary supports ordinary List add/set/remove, Map set and Set add through the same
typed conversion. Writes do not schedule a Flutter rebuild. List/Set/Map/Record and
Iterable Widget callback parameters and results are supported, including nullable
containers/elements and Future/FutureOr/Stream compositions. A completed JS value
promotes each contained Widget configuration before temporary conversion holds are
released. Typed Widget lists become readonly snapshots that preserve concrete element
types, including inside Maps and Records. Custom JS Iterables use a shared lazy adapter;
a JS generator and native Dart `children.map(...)` view need not be materialized.
Conversion checks the iterable shape, and each `moveNext` checks the element with
ordinary conversion. JS arrays/Sets still use finite copies; Set copying uses its native
entries rather than an overridden iterator. Early stopping and GC do not call a JS
generator's `return()` or `finally`: Dart Iterator has no close hook. Session close
releases bridge handles and rejects later iteration. Checked async completions preserve
the actual Widget instances and reuse native containers when their children need no
adaptation. The native SearchAnchor fixture covers synchronous Set and asynchronous
array suggestions without adding a production SearchAnchor binding. Single Widget
arguments support Dart retention as described below. Widget references are accepted only
at Widget positions, not ordinary Object/dynamic inputs. Flax hosts also retain their
description resources. The application root holds the session until its subtree
unmounts, even when it consists entirely of native Widgets.

### Context results

Direct `BuildContext` and `BuildContext?` function, method, property, top-level
variable/getter and callback results reuse the same session-local borrowed reference as
callback arguments. Top-level reads return the current Dart value without caching or
owning its Flutter lifecycle. This applies to incoming JS callbacks and returned Dart
functions, including typed finite List/Set/Map/Record values and Future/FutureOr/Stream
results. For example, these selected Dart signatures use an existing Context supplied by
Flutter:

```dart
BuildContext readContext(BuildContext Function() read) => read();
Future<BuildContext> readLater(Future<BuildContext> Function() read) => read();
```

```ts
// context came from a Builder in this Session.
readContext(() => context);
readLater(async () => context);
```

JS cannot manufacture a Context. Forged objects, wrong types, foreign-session values,
inactive references and unmounted Elements are rejected on each conversion, including
when a Promise settles. `BuildContext?` accepts null; undefined is not a Context result.
`FutureOr<BuildContext?>` accepts a synchronous null or a Promise resolving null. A
non-null Future itself still requires a Promise or callable thenable.

The JS Context reference is weak: keeping that alias does not keep the Element alive.
After unmount, `.mounted` is false and other access fails. Ordinary Dart collections,
closures and completed Futures retain their real values according to Dart's reference
rules; retaining one may keep the Element object alive, but cannot keep it mounted.
Session close revokes retained JS callbacks and rejects pending completions without
waiting for GC. Context Stream callbacks use the same conversion; each delivered value
must still refer to an active, mounted Context in the receiving session. Stream sources
retain their real Dart values, without extending their mounted lifetime.

```dart
Stream<BuildContext?> readContexts(Stream<BuildContext?> Function() read) => read();
```

```ts
import { Stream } from '@flax/dart/async';

const contexts = readContexts(() => Stream.fromIterable([context, null]));
const values = await contexts.toList();
values.get(0) === context; // Same borrowed identity.
values.get(1) === null;
```

Supported Future/Stream combinations and typed aggregate events recurse through this
conversion. Record fields also survive generic Stream operators, `first`,
`toList().get()` and collection copies, including nested Records and callbacks. Every
Record result is a plain field object; real VM Type metadata supplies unknown layouts. A
weak association preserves only its Type/conversion view through erased callbacks.
Reconstructed inputs are checked field by field and use the shared native constructor.
Fresh objects and clones work in concrete Record positions; a bare Record can infer a
new layout under the
[naming and numeric rules](bindings.md#bottom-types-and-opaque-core-values). No original
Record is retained. A Dart-held callback can still retain a field object through a real
callback edge. Type/Symbol values remain native references. Never preserves failure or
non-completion; nullable Never/Null accepts only null. No extra GC mechanism is added.

A returned builder borrows the supplied native Context and its Flutter lifecycle. It
does not manufacture an Element, extend Context lifetime or execute during conversion.
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
restore original Dart errors when carrying bridge error references; other rejections
become FlaxJsException with the available JS message and stack. Reading or converting a
hostile rejection value cannot strand the Dart Future; Flax falls back to
`Promise rejected` when no message can be obtained safely. A callback replacement or
Widget unmount does not cancel an already returned Future. Session closing completes
pending Futures with `StateError('FlaxSessionClosed')`, drops their observers and
ignores later settlement. Promise cancellation is not inferred.

## Dart Stream and FutureOr (UI protocol 24)

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

### Future and Stream callback combinations

Ordinary incoming and returned callbacks support `Future<Stream<T>>`,
`FutureOr<Stream<T>>`, `Stream<Future<T>>` and `Stream<FutureOr<T>>` in both their
arguments and results. The same shapes can appear inside supported Lists, Map values and
Records. TypeScript uses Promise and typed Dart Stream references recursively; this adds
no binding configuration or protocol version.

A `Future<Stream<T>>` waits for the stream reference, not its events. For example, a
connection callback can establish the connection before delivering messages:

```dart
Future<void> showMessages(Future<Stream<String>> Function() connect) async {
  final messages = await connect();
  await for (final message in messages) {
    print(message);
  }
}
```

A `Stream<Future<T>>` delivers each Future as an independent event. It does not await or
flatten events into `Stream<T>`; tasks may complete in a different order from their
arrival. Consumers choose whether to wait serially or observe tasks concurrently:

```dart
final subscription = tasks.listen((task) {
  task.then(showResult, onError: showTaskError);
}, onError: showStreamError);
// When the application no longer needs the subscription:
await subscription.cancel();
```

`FutureOr` preserves immediate and asynchronous branches. Erased JS-created event
sources convert Promise events to typed Dart Futures at concrete Stream use sites. Only
copies of raw JS collections may be reconstructed there, and their collection kind must
match the requested position. Compatible Dart collections retain their original
references; incompatible Dart references fail instead of being narrowed by copying.
Bound Dart objects with an ordinary `then` method also retain their reference identity.
Invalid completion values fail their Future; Stream errors retain Dart's normal
nonterminal behavior unless the subscription requests `cancelOnError`. Wrapping stays
lazy, and cancellation and session cleanup keep the ownership rules above.

Nested Streams use the same recursive conversion in incoming and returned callbacks,
including inside supported Futures, Records and collections. A `Stream<Stream<int>>`
delivers each inner Stream as a reference; it does not merge or subscribe to its events:

```ts
const outer = Stream.fromIterable([
  Stream.fromIterable([1, 2]),
  Stream.fromIterable([3]),
]);
for await (const inner of outer) {
  // The consumer chooses when to subscribe to each inner Stream.
  for await (const value of inner) console.log(value);
}
```

Callback conversion never listens to either layer. Ordinary typed Dart Streams preserve
identity; erased JS sources gain lazy typed views at each layer. Both generated `listen`
callbacks and async iteration carry inner Streams as references. Restricted Widget
Iterable callback views also wrap inner Streams carried by native Records and
collections, keeping each event check lazy before iterator execution. Invalid inner
references or events fail at delivery, preserving normal Stream error semantics.
Cancelling the outer subscription leaves an independently subscribed inner Stream alone.
Session close cancels all bridge-owned subscriptions and AsyncIterable sources at both
levels; application controllers remain application-owned.

These combinations do not expand async Widget ownership, Context/State/Route/Page
lifetimes or unbound generic callbacks. To create a JS source with Promise-valued
events, use a StreamController or an explicit AsyncIterator whose `next()` returns
`{ value: promise, done: false }`; an async generator's `yield promise` awaits that
Promise and therefore describes a different event type.

## Widget configuration and mounting

A selected single `Widget` or `Widget?` input accepts generated descriptions, custom JS
components and existing DartWidget references. It uses the same typed conversion in
constructors, members, top-level functions and callbacks in both directions. Ordinary
Object/dynamic inputs do not gain Widget conversion. A `Widget Function(Widget)`
receives and returns real Widgets without a synthetic Context or Element.

Concrete signatures such as `Text Function()` validate the actual Dart subtype. A
descriptor becomes a fixed native configuration rather than a reactive host; a selected
`proxy: extends` binding can return a real native JS subclass. Nullable, typed list and
Future results use the same conversion. Proxy-backed results retain their generated
member view; base and interface results use opaque Widget references.

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
mounted JS content and active calls drain, session close revokes configuration records
without waiting for GC. Retained Flax Widgets then fail safely on mounting, and late
finalizers are harmless. Application object disposal remains explicit. The maintained
engine's joint GC reclaims rootless Dart/JS cycles; session close provides deterministic
bridge cleanup.

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
and relationships among fields, arguments and results. Automatic selection fixes shared
Dart defaults to Object? or an Analyzer-proven bound. `dartType` selects actual class or
method arguments through the maintained engine without generating a catalog of type
combinations. TypeScript type arguments alone do not change that Dart choice; see the
[generic method contract](bindings.md#generic-methods).

Native proxy methods receive Dart's actual generic arguments. A JS override can retain
its per-invocation `call` context and use `call.super(...)`, including after an `await`,
without losing those arguments. Generated incoming callbacks remain real generic Dart
functions; their existing bound conversion and current-type result checks are preserved.
Returned Dart generic functions support the shared `dartType(callback, ...types)`
selector. Bare calls use their legal analyzer-resolved default, commonly Object?;
dependent bounds such as `U extends T` resolve transitively when a legal default exists.
Recursive and captured bounds use the same checked factories and require explicit
runtime arguments when no legal default exists. Incoming generic callbacks use Dart's
actual invocation types. Type-only bounds need no value provider merely to express the
constraint; actual selected values still require an available converter. The TS
call-site type alone never changes the Dart instantiation.

Object-erased function-local generic results use `DartOutput<T>` in TypeScript. Scalars
remain scalars; raw JS collections return real Dart collection references, rather than
retaining JS Array/Map/Set methods. Generic incoming callback arguments use the same
projection, while callback results accept the existing input forms and converted
references. For example, `<T>(value: DartOutput<T>) => value` preserves an identity
callback without copying. Generated Record projections retain their field shape through
their type-only brand. Generic bounds keep their original declared types.

Collection-bound function-local generic results use `DartOutput<DartInput<T>>`: a
selected collection subclass and a raw JS collection both produce the standard bound
collection view. This also applies to nested result/callback positions. A shared
`T extends List<String>` call actually invokes Dart with `List<String>`; it cannot
promise that a new collection returned by the function has T's business members.
`asDart(result, ShoppingList)` restores those members only when the original Dart object
satisfies that class. Explicit method selection can instead use the subclass as T; the
ordinary shared call retains its bound default.

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

TS call-site types are not runtime tokens and there is no TS compiler transformation.
Use `Class.$type` or `dartType` when a class, method or returned generic callback
depends on exact Dart type arguments. Unknown structural callback layouts and
unsupported value conversions remain rejected. Explicit String/int ValueKey selections
preserve Flutter key matching. The
[consolidated capability audit](binding-coverage-map.md#engine-backed-audit-and-consolidated-backlog)
distinguishes those limits from features already enabled by the maintained engine.

Selected deferred generic factories are materialized from concrete Dart use sites rather
than a list of configured type arguments. The JS wrapper keeps its factory parameters
until it reaches an exact selected parameter such as `WidgetStateProperty<Color?>`. Dart
then invokes the generated concrete factory once and the wrapper retains that real Dart
object. A later use with another concrete type is an error. Members cannot be called
before materialization, and Object/dynamic positions do not provide enough information
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

An extends proxy initializes one receiver peer before calling its selected generative
super constructor. Select several generative constructors on the same binding and use
`super(dartSuper(Base, 'named', ...args))` to choose an alternative from JS. The shared
authenticated marker also works with `Base.$type(...)`; ordinary `super(...args)` uses
the default selected constructor. Factories cannot be a Dart super constructor. No
per-class JS dispatch implementation is generated. Selected concrete virtual methods and
accessors may be overridden in JS; omitted overrides execute Dart `super`, and JS
`super.foo()` uses a generated direct parent entry so it cannot recurse through the
virtual override. An implements proxy supplies the entire effective interface. Generated
direct Dart overrides invoke the shared typed conversion through that peer; there is no
parallel Flax abstract-class hierarchy or reflection.

Required properties use JS accessors or ordinary data fields with synchronous typed
conversion, including Future/FutureOr/Stream and Widget, Context and State with the same
ordinary conversion and lifetime checks. A Future getter returns a Promise; Stream
getters remain lazy references and setter functions remain synchronous. Dart-kept Widget
results preserve JS overrides; Context/State properties do not extend Flutter lifetimes.
The generator resolves effective inherited properties and prepares the peer before the
parent constructor. Native lookup reads the current member, including arrow fields and
later prototype or instance replacements, with the actual JS receiver. See
[proxy properties and ValueListenable](proxy-properties.md).

If only one accessor half is abstract, the shared prototype installer preserves the
other concrete Dart half when a JS accessor would shadow it. A non-configurable JS
descriptor must explicitly supply both halves. A getter-only TS subclass is still
readonly in TypeScript; use its base view or declare a forwarding setter when writing.
For mixin methods, bind the actual Dart class composed with that mixin. Flax does not
synthesize a new Dart class or change an existing class's type identity at runtime.

Proxy methods support the same positional, named and generic callback model, including
supported Future results. `@mustCallSuper` checks capture whether JS called the direct
parent entry before returning control to Dart. For Future/FutureOr overrides this is the
pre-yield boundary: calling `super` before the first `await` is valid; calling it only
after an `await` fails. A returned Promise that rejects preserves that rejection, while
a Promise that resolves without the required pre-yield call completes with the
`mustCallSuper` error. A Dart super constructor may dispatch to a JS override because
the peer exists before the parent constructor runs, but that callback cannot call JS
`super` until Dart object construction has returned and the object handle is attached.
Such a call fails explicitly instead of recursing or using a partially initialized
handle. Route/Page proxy properties use the ordinary object converter. Private members,
non-virtual concrete overrides and incompatible Dart modifiers fail generation. Flutter
lifecycle/build overrides retain their declared synchronous signatures.

## Verification

`bindings:check` compiles SDK and independent plugin output without an engine.
`ui:bundle` generates each fixture into its owning package's `.dart_tool/flax/ui` and
bundles it with the same ES2019 IIFE pipeline. `ui:test` executes it from that package's
UI suite. GC tests use real Hermes/V8 allocation/WeakRef observation and
VM-service-requested Dart collection. They separately assert deterministic session
cleanup and do not replace Finalizer observation with a direct cleanup call.
