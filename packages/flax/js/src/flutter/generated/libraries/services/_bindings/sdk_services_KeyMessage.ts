// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import { _flaxMemberParameters0, _flaxMemberParameters49 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyMessage extends Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [] }> { readonly __KeyMessage: unique symbol;
readonly [_flaxDartTypeValue]: KeyMessage;

readonly events: DartList<upstream0.KeyEvent>;
readonly rawEvent: upstream1.RawKeyEvent | null;
toString(): string;
}
defineObject("flax.core/sdk_services#type:KeyMessage", ["events","rawEvent"], [], _flaxBindingMethods("flax.core/sdk_services#type:KeyMessage", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _KeyMessageFactory(events: DartListInput<upstream0.KeyEvent, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, rawEvent: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): KeyMessage {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:KeyMessage", "", [{"name":"events","required":true,"positional":true},{"name":"rawEvent","required":true,"positional":true}], [events, rawEvent], {}) as KeyMessage;
}
const _KeyMessageProxy = {type: "flax.core/sdk_services#type:KeyMessage", parameters: _flaxMemberParameters49, constructors: {"": _flaxMemberParameters49}, methods: {"toString":_flaxMemberParameters0}, getters: ["events","rawEvent"], setters: [], contextMembers: [], superMembers: ["get:events","get:rawEvent","toString"]} as const;
export interface _KeyMessageNative extends KeyMessage {
readonly [_flaxDartTypeValue]: _KeyMessageNative;

toString(): string;
get events(): DartList<upstream0.KeyEvent>;
get rawEvent(): upstream1.RawKeyEvent | null;
}
export abstract class _KeyMessageNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyMessage>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyMessage;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyMessage", readonly [], false];
constructor(events: DartListInput<upstream0.KeyEvent, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, rawEvent: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) { super(_KeyMessageProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_KeyMessageNative.prototype, _KeyMessageProxy);
export namespace _KeyMessageFactory { export function implement(args: [events: DartListInput<upstream0.KeyEvent, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, rawEvent: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null], implementation: {}): KeyMessage {
return constructProxy(_KeyMessageProxy, args, implementation) as KeyMessage; } }
const _KeyMessageBinding = _flaxProxyFactory(_KeyMessageFactory, _KeyMessageNative) as unknown as typeof _KeyMessageFactory & (new(events: DartListInput<upstream0.KeyEvent, Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, rawEvent: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) => _KeyMessageNative);
export const KeyMessage: typeof _KeyMessageBinding & _FlaxInstanceType<KeyMessage> & _FlaxDartType<KeyMessage, readonly ["class", "flax.core/sdk_services#type:KeyMessage", readonly [], false]> = _flaxBindInstanceType<KeyMessage, typeof _KeyMessageBinding>(_KeyMessageBinding, "flax.core/sdk_services#type:KeyMessage", ["dart:core::Object"]) as typeof _KeyMessageBinding & _FlaxInstanceType<KeyMessage> & _FlaxDartType<KeyMessage, readonly ["class", "flax.core/sdk_services#type:KeyMessage", readonly [], false]>;
