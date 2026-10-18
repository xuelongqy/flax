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
const _flaxMemberParameters0 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"message","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyEventManager extends Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEventManager": readonly [] }> { readonly __KeyEventManager: unique symbol;
readonly [_flaxDartTypeValue]: KeyEventManager;

}
defineObject("flax.core/sdk_services#type:KeyEventManager", ["keyMessageHandler"], ["keyMessageHandler"], _flaxBindingMethods("flax.core/sdk_services#type:KeyEventManager", "object", {"handleKeyData":_flaxMemberParameters0,"handleRawKeyMessage":_flaxMemberParameters1}, {}), []);
const _KeyEventManagerProxy = {type: "flax.core/sdk_services#type:KeyEventManager", parameters: [{"name":"_hardwareKeyboard","required":true,"positional":true},{"name":"_rawKeyboard","required":true,"positional":true}], constructors: {"":[{"name":"_hardwareKeyboard","required":true,"positional":true},{"name":"_rawKeyboard","required":true,"positional":true}]}, methods: {"handleKeyData":_flaxMemberParameters0,"handleRawKeyMessage":_flaxMemberParameters1}, getters: ["keyMessageHandler"], setters: ["keyMessageHandler"], contextMembers: [], superMembers: ["get:keyMessageHandler","set:keyMessageHandler","handleKeyData","handleRawKeyMessage"]} as const;
export interface KeyEventManager {
readonly [_flaxDartTypeValue]: KeyEventManager;

handleKeyData(data: Readonly<{ "__flaxBound:dart:ui::KeyData": readonly [] }>): boolean;
handleRawKeyMessage(message: unknown | null): Promise<DartMap<string, unknown | null>>;
get keyMessageHandler(): ((message: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [] }>) => boolean) | null;
set keyMessageHandler(value: ((message: upstream2.KeyMessage) => boolean) | null);
}
export abstract class KeyEventManager extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyEventManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeyEventManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyEventManager", readonly [], false];
constructor(_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>) { super(_KeyEventManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(KeyEventManager.prototype, _KeyEventManagerProxy);
export namespace KeyEventManager { export function implement(args: [_hardwareKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>, _rawKeyboard: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyboard": readonly [] }>], implementation: {}): KeyEventManager {
return constructProxy(_KeyEventManagerProxy, args, implementation) as KeyEventManager; } }
_flaxBindInstanceType<KeyEventManager, typeof KeyEventManager>(KeyEventManager, "flax.core/sdk_services#type:KeyEventManager", ["dart:core::Object"]);
