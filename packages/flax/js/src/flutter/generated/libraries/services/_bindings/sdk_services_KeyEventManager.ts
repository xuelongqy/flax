// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_RawKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyboard';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_KeyMessage';
import '@flax/flutter/services/_bindings/sdk_services_KeyMessage';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_KeyData';
import { _flaxMemberParameters29, _flaxMemberParameters21, _flaxMemberParameters53 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyEventManager extends Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEventManager": readonly [] }> { readonly __KeyEventManager: unique symbol;
readonly [_flaxDartTypeValue]: KeyEventManager;

get keyMessageHandler(): ((message: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [] }>) => boolean) | null;
handleKeyData(data: Readonly<{ "__flaxBound:dart:ui::KeyData": readonly [] }>): boolean;
handleRawKeyMessage(message: unknown | null): Promise<DartMap<string, unknown | null>>;
set keyMessageHandler(value: ((message: upstream2.KeyMessage) => boolean) | null);
}
defineObject("flax.core/sdk_services#type:KeyEventManager", ["keyMessageHandler"], ["keyMessageHandler"], _flaxBindingMethods("flax.core/sdk_services#type:KeyEventManager", "object", {"handleKeyData":_flaxMemberParameters29,"handleRawKeyMessage":_flaxMemberParameters21}, {}), []);
export function _KeyEventManagerFactory(_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>): KeyEventManager {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:KeyEventManager", "", [{"name":"_hardwareKeyboard","required":true,"positional":true},{"name":"_rawKeyboard","required":true,"positional":true}], [_hardwareKeyboard, _rawKeyboard], {}) as KeyEventManager;
}
const _KeyEventManagerProxy = {type: "flax.core/sdk_services#type:KeyEventManager", parameters: _flaxMemberParameters53, constructors: {"": _flaxMemberParameters53}, methods: {"handleKeyData":_flaxMemberParameters29,"handleRawKeyMessage":_flaxMemberParameters21}, getters: ["keyMessageHandler"], setters: ["keyMessageHandler"], contextMembers: [], superMembers: ["get:keyMessageHandler","set:keyMessageHandler","handleKeyData","handleRawKeyMessage"]} as const;
export interface _KeyEventManagerNative extends KeyEventManager {
readonly [_flaxDartTypeValue]: _KeyEventManagerNative;

handleKeyData(data: Readonly<{ "__flaxBound:dart:ui::KeyData": readonly [] }>): boolean;
handleRawKeyMessage(message: unknown | null): Promise<DartMap<string, unknown | null>>;
get keyMessageHandler(): ((message: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [] }>) => boolean) | null;
set keyMessageHandler(value: ((message: upstream2.KeyMessage) => boolean) | null);
}
export abstract class _KeyEventManagerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyEventManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyEventManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyEventManager", readonly [], false];
constructor(_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>) { super(_KeyEventManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_KeyEventManagerNative.prototype, _KeyEventManagerProxy);
export namespace _KeyEventManagerFactory { export function implement(args: [_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>], implementation: {}): KeyEventManager {
return constructProxy(_KeyEventManagerProxy, args, implementation) as KeyEventManager; } }
const _KeyEventManagerBinding = _flaxProxyFactory(_KeyEventManagerFactory, _KeyEventManagerNative) as unknown as typeof _KeyEventManagerFactory & (new(_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>) => _KeyEventManagerNative);
export const KeyEventManager: typeof _KeyEventManagerBinding & _FlaxInstanceType<KeyEventManager> & _FlaxDartType<KeyEventManager, readonly ["class", "flax.core/sdk_services#type:KeyEventManager", readonly [], false]> = _flaxBindInstanceType<KeyEventManager, typeof _KeyEventManagerBinding>(_KeyEventManagerBinding, "flax.core/sdk_services#type:KeyEventManager", ["dart:core::Object"]) as typeof _KeyEventManagerBinding & _FlaxInstanceType<KeyEventManager> & _FlaxDartType<KeyEventManager, readonly ["class", "flax.core/sdk_services#type:KeyEventManager", readonly [], false]>;
