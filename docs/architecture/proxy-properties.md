# Generated proxy properties

UI protocol 24 supports required properties on ordinary `proxy: extends` and
`proxy: implements` bindings. Native ABI 2 is unchanged. The JS entry remains
`SomeType.implement(arguments, implementation)`; application classes do not need
handwritten Dart bridges.

## Accessors and types

An implementation supplies JavaScript accessors or ordinary data fields. Flax inspects
property descriptors, including inherited descriptors, without invoking getters during
construction validation. Each Dart access resolves the current member and uses the
actual implementation object as `this`. Later instance and prototype replacements take
effect immediately; private fields and initialized arrow fields keep ordinary JS
semantics. Required writes reject readonly data fields and accessors without a setter.

Every Dart read invokes the getter once, and every Dart write invokes the setter once.
There is no value mirror, implicit notification or signal subscription. Getter and
setter invocations finish synchronously. A getter declared as Future or FutureOr may
return a Promise/thenable as its value; completion and errors use ordinary typed async
conversion. Synchronous signatures still reject inappropriate Promise values. The setter
function itself must not return a Promise/thenable, even when the assigned property is
Future-valued. Void getter values are discarded synchronously and cannot return a
Promise/thenable. Ordinary setter return values are ignored. Getter/setter exceptions
propagate synchronously without rolling back side effects. The existing asynchronous UI
void-event contract is unchanged.

The analyzer resolves the effective inherited signature. Extends proxies implement
remaining abstract accessors and inherit concrete defaults. Implements proxies supply
the required interface, including accessors originating from Dart fields. Required
implementation members are separate from the selected public wrapper surface.

Mixed abstract/concrete accessor halves use the shared extends proxy installer. Each
abstract half still requires a JS implementation; a concrete half retains its Dart
`super` fallback unless overridden. Generated TS accessor declarations keep matching
abstractness without requiring an `implements` proxy or discarding Dart defaults. The
same rule applies to supported Future and Stream property values.

Getter implementations return Dart inputs; setter implementations receive Dart outputs.
For example, a List getter may return a JS array or DartList, while a List setter
receives a DartList referencing the original collection. The wrapper presented to
application JS has the reverse read/write directions. Scalars, enums, references, typed
collections and supported synchronous functions reuse the common converter. Widget,
Context and State properties, including nullable values and supported finite aggregates,
use the same conversion in ordinary extends and implements proxies. Future, FutureOr and
Stream properties, nested Records/collections and returned async functions likewise
reuse the existing converter. TS preserves generic relationships; Dart uses the
configured concrete arguments.

For example, a `Future<int> get value` implementation can return `Promise.resolve(3)`. A
`Stream<int> get events` implementation returns a bound Dart Stream, including one
created with `Stream.fromAsyncIterable(source)`. Reading the property does not listen;
Dart owns subscription, pause, cancellation and event semantics. Setter implementations
receive the same Promise/Stream views as ordinary Dart callback parameters. Session
close rejects pending bridge Futures and cancels bridge subscriptions/AsyncIterable
sources, without closing application controllers.

Widget getters can return native configurations or JS Widget subclasses. Dart can retain
and mount the result later; normal Dart references and the joint GC preserve JS
overrides. Widget collections follow the existing structural snapshot rule while
preserving the identity and overrides of each contained Widget. Context and State remain
references supplied by Flutter, checked on every conversion; properties do not create,
mount or extend their lifetime. Forged, foreign-session and unmounted references are
rejected. Nullable properties accept null, not undefined.

Ordinary proxy methods use the same Widget result conversion as getters, for both
extends and implements proxies. For example, an object implementing
`Widget create(BuildContext context)` can return `Text('Created by JS')` or a JS
StatelessWidget subclass. Dart receives the actual Widget and may mount it later without
an extra host, callback lease or lifecycle configuration. Concrete results such as
`Text` check the actual subtype; nullable results accept null. Wrong values and JS
exceptions propagate to the Dart caller, and Context inputs retain their mounted/session
checks. Concrete Dart methods and explicit JS super calls keep the existing fallback.

Private properties remain unsupported. Route/Page properties, including supported
collections, Records, Futures and Streams, use ordinary object conversion without
inferring navigation side effects. Eligible extends proxies support concrete accessors
and explicit `super` calls through generated direct Dart parent entries. State host
proxies keep their existing selected lifecycle/super mechanism.

`@mustCallSuper` is enforced for selected concrete methods, getters and setters on
extends proxies. Requirements follow superclass/mixin implementations, including an
unannotated intermediate override; implementing an interface does not inherit them. The
getter must read `super.property`, and the setter must assign `super.property`. These
are independent requirements: reading cannot satisfy a required write. Nested
invocations cannot satisfy an outer invocation's requirement, and exceptions restore the
previous invocation state. Members without the annotation add no tracking. Retired void
methods, setters and void getters remain inert. A close requested during an active
override does not bypass its super requirement.

For Future/FutureOr getters, super must run before the getter returns its Promise, just
as for async proxy methods. A super call after awaiting cannot satisfy the requirement.
Missing super rejects a successful Future; an existing rejection is preserved. A
nullable Future getter returning null still requires super. An inherited Dart accessor
with no JS override remains a direct native fallback.

Manifest 22 records `mustCallSuperAccessors` using separate `get:name` and `set:name`
operations. Regenerate providers and consumers together; previous Manifest formats are
rejected. Selection format 2, UI protocol 24 and native ABI 2 are unchanged.

## Construction and lifetime

The generated Dart subclass holds one receiver peer, initialized before the selected
Dart parent constructor. Methods, reads and writes have distinct shared operation slots.
A real parent-constructor access may call JS; validation does not simulate it. Fields
initialized after JS `super()` are only available after that construction phase.
Explicit JS `super` is rejected until the Dart object handle has been attached.

The peer uses the existing invocation guard and typed callback converters, with no
per-member forwarding callback. A Dart business root keeps the actual JS receiver; a JS
wrapper or extends instance keeps its Dart peer. An independently retained `implement`
object does not retain every proxy that uses it. The maintained engine reclaims rootless
cycles. Temporary conversions are released on success or failure. Failed construction
releases the pending receiver facade. Session close deterministically revokes bridge
entries without waiting for GC or disposing application objects. Retired value reads
fail; void invocations remain inert.

Returned Dart function wrappers use Dart function equality and the complete conversion
signature. In particular, repeated instance-method tear-offs can compare equal without
being identical. They must receive the same live JS wrapper for Flutter's listener
removal to work. Ordinary Dart objects continue to use identity, not overridden
equality.

## ValueListenable

Core bindings expose Listenable's listener methods and
`ValueListenable.implement<T>([], implementation)`. ValueListenable uses an extends
proxy with a no-argument parent constructor, readonly value, and inherited listener
methods. Dart is concretized as `ValueListenable<Object?>`; TS retains T. The Listenable
selection declares the existing listener pair so JS-origin registration and removal
reuse the same Dart callback, including duplicate registrations.

The application owns value storage and listener semantics. It decides when to notify,
preserves duplicate registration/removal behavior as required by its implementation, and
disconnects listeners during cleanup. Reading a signal's value in the getter does not
automatically notify Dart or subscribe the consumer.

Framework tests use native Dart ValueListenableBuilder consumers in the existing
embedded test project. Tests cover replacement, multiple consumers, explicit
notifications, balanced listener removal, constructor-time property dispatch,
synchronous errors, Flutter property identity and validity, Dart-retained Widget
overrides, and actual JS/Dart collection on Hermes and V8.
