// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidPointerProperties extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [] }> { readonly __AndroidPointerProperties: unique symbol;
readonly [_flaxDartTypeValue]: AndroidPointerProperties;

}
defineObject("flax.core/sdk_services#type:AndroidPointerProperties", ["id","toolType"], [], _flaxBindingMethods("flax.core/sdk_services#type:AndroidPointerProperties", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _AndroidPointerPropertiesProxy = {type: "flax.core/sdk_services#type:AndroidPointerProperties", parameters: [{"name":"id","required":true,"positional":false},{"name":"toolType","required":true,"positional":false}], constructors: {"":[{"name":"id","required":true,"positional":false},{"name":"toolType","required":true,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["id","toolType"], setters: [], contextMembers: [], superMembers: ["get:id","get:toolType","toString"]} as const;
export interface AndroidPointerProperties {
readonly [_flaxDartTypeValue]: AndroidPointerProperties;

toString(): string;
get id(): number;
get toolType(): number;
}
export abstract class AndroidPointerProperties extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerProperties>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AndroidPointerProperties;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false];
constructor(options: {id: number; toolType: number}) { super(_AndroidPointerPropertiesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AndroidPointerProperties.prototype, _AndroidPointerPropertiesProxy);
export namespace AndroidPointerProperties { export function implement(args: [options: {id: number; toolType: number}], implementation: {}): AndroidPointerProperties {
return constructProxy(_AndroidPointerPropertiesProxy, args, implementation) as AndroidPointerProperties; } }
export namespace AndroidPointerProperties { export declare const kToolTypeUnknown: number; }
export namespace AndroidPointerProperties { export declare const kToolTypeFinger: number; }
export namespace AndroidPointerProperties { export declare const kToolTypeStylus: number; }
export namespace AndroidPointerProperties { export declare const kToolTypeMouse: number; }
export namespace AndroidPointerProperties { export declare const kToolTypeEraser: number; }
_flaxDefineStaticGetters(AndroidPointerProperties, "flax.core/sdk_services#read:AndroidPointerProperties.", ["kToolTypeUnknown","kToolTypeFinger","kToolTypeStylus","kToolTypeMouse","kToolTypeEraser"]);
_flaxBindInstanceType<AndroidPointerProperties, typeof AndroidPointerProperties>(AndroidPointerProperties, "flax.core/sdk_services#type:AndroidPointerProperties", ["dart:core::Object"]);
