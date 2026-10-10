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
setter implementations must finish synchronously: Promise and thenable results are
rejected, including returns from the setter function itself. Ordinary setter return
values are ignored. Exceptions propagate synchronously without rolling back side
effects. The existing asynchronous UI void-event contract is unchanged.

The analyzer resolves the effective inherited signature. Extends proxies implement
remaining abstract accessors and inherit concrete defaults. Implements proxies supply
the required interface, including accessors originating from Dart fields. Required
implementation members are separate from the selected public wrapper surface.

Getter implementations return Dart inputs; setter implementations receive Dart outputs.
For example, a List getter may return a JS array or DartList, while a List setter
receives a DartList referencing the original collection. The wrapper presented to
application JS has the reverse read/write directions. Scalars, enums, references, typed
collections and supported synchronous functions reuse the common converter. TS preserves
generic relationships; Dart uses the configured concrete arguments.

Private properties, Future values and properties requiring a Widget/Route mounting owner
are unsupported. Eligible extends proxies support concrete accessors and explicit
`super` calls through generated direct Dart parent entries. State host proxies keep
their existing selected lifecycle/super mechanism.

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
entries without waiting for GC or disposing application objects.

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
embedded test project. That Widget is not yet a generated JS binding: its Widget
callback argument remains outside the selected conversion subset. Tests cover
replacement, multiple consumers, explicit notifications, balanced listener removal,
constructor-time property dispatch, synchronous errors, and actual JS/Dart collection on
Hermes and V8.
