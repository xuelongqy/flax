# Generated proxy properties

UI protocol 20 supports required properties on ordinary `proxy: extends` and
`proxy: implements` bindings. Native ABI 2 is unchanged. The JS entry remains
`SomeType.implement(arguments, implementation)`; application classes do not need
handwritten Dart bridges.

## Accessors and types

An implementation supplies explicit JavaScript `get` and `set` accessors. Flax inspects
property descriptors, including inherited descriptors, without invoking getters during
validation. It captures each accessor with the original implementation as `this`.
Replacing a descriptor later does not replace the captured implementation. Plain data
fields are rejected at runtime; TypeScript's structural property types cannot enforce
that syntax distinction.

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

Private properties, Future values, properties requiring a Widget/Route mounting owner,
concrete-accessor overrides and accessor super calls are unsupported. State host proxies
keep their existing selected lifecycle/super mechanism.

## Construction and lifetime

Generated typed callback fields are initialized before the selected generative Dart
parent constructor. A real parent-constructor property access can therefore call JS;
Flax validation does not simulate those accesses. Getter, setter and method callback
identifiers are distinct.

Callbacks use the existing invocation guard, escaped-function Finalizer and session
cleanup. Temporary conversion resources are released on success or failure. A failed
constructor may have already retained a callback in Dart, so Flax does not revoke an
escaped callback prematurely. Unretained callbacks are reclaimed by the Dart Finalizer;
session close deterministically revokes all remaining bridge entries without waiting for
GC or disposing application objects. There is no cross-language cycle collector.

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
