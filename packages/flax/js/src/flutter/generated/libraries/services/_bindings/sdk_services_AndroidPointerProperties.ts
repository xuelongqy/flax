// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters3 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidPointerProperties extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }> { readonly __AndroidPointerProperties: unique symbol;
readonly [_flaxDartTypeValue]: AndroidPointerProperties;

readonly id: number;
readonly toolType: number;
toString(): string;
}
defineObject("flax.core/sdk_services#type:AndroidPointerProperties", ["id","toolType"], [], _flaxBindingMethods("flax.core/sdk_services#type:AndroidPointerProperties", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _AndroidPointerPropertiesFactory(options: { id: number; toolType: number }): AndroidPointerProperties {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:AndroidPointerProperties", "", [{"name":"id","required":true},{"name":"toolType","required":true}], [], options) as AndroidPointerProperties;
}
const _AndroidPointerPropertiesProxy = {type: "flax.core/sdk_services#type:AndroidPointerProperties", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"toString":_flaxMemberParameters0}, getters: ["id","toolType"], setters: [], contextMembers: [], superMembers: ["get:id","get:toolType","toString"]} as const;
export interface _AndroidPointerPropertiesNative extends AndroidPointerProperties {
readonly [_flaxDartTypeValue]: _AndroidPointerPropertiesNative;

toString(): string;
get id(): number;
get toolType(): number;
}
export abstract class _AndroidPointerPropertiesNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerProperties>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AndroidPointerProperties;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false];
constructor(options: {id: number; toolType: number}) { super(_AndroidPointerPropertiesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AndroidPointerPropertiesNative.prototype, _AndroidPointerPropertiesProxy);
export namespace _AndroidPointerPropertiesFactory { export function implement(args: [options: {id: number; toolType: number}], implementation: {}): AndroidPointerProperties {
return constructProxy(_AndroidPointerPropertiesProxy, args, implementation) as AndroidPointerProperties; } }
const _AndroidPointerPropertiesBinding = _flaxProxyFactory(_AndroidPointerPropertiesFactory, _AndroidPointerPropertiesNative) as unknown as typeof _AndroidPointerPropertiesFactory & (new(options: {id: number; toolType: number}) => _AndroidPointerPropertiesNative);
export namespace _AndroidPointerPropertiesFactory { export declare const kToolTypeUnknown: number; }
export namespace _AndroidPointerPropertiesFactory { export declare const kToolTypeFinger: number; }
export namespace _AndroidPointerPropertiesFactory { export declare const kToolTypeStylus: number; }
export namespace _AndroidPointerPropertiesFactory { export declare const kToolTypeMouse: number; }
export namespace _AndroidPointerPropertiesFactory { export declare const kToolTypeEraser: number; }
_flaxDefineStaticGetters(_AndroidPointerPropertiesFactory, "flax.core/sdk_services#read:AndroidPointerProperties.", ["kToolTypeUnknown","kToolTypeFinger","kToolTypeStylus","kToolTypeMouse","kToolTypeEraser"]);
export const AndroidPointerProperties: typeof _AndroidPointerPropertiesBinding & _FlaxInstanceType<AndroidPointerProperties> & _FlaxDartType<AndroidPointerProperties, readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false]> = _flaxBindInstanceType<AndroidPointerProperties, typeof _AndroidPointerPropertiesBinding>(_AndroidPointerPropertiesBinding, "flax.core/sdk_services#type:AndroidPointerProperties", ["dart:core::Object"]) as typeof _AndroidPointerPropertiesBinding & _FlaxInstanceType<AndroidPointerProperties> & _FlaxDartType<AndroidPointerProperties, readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false]>;
