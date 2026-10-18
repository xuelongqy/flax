// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidPointerCoords extends Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [] }> { readonly __AndroidPointerCoords: unique symbol;
readonly [_flaxDartTypeValue]: AndroidPointerCoords;

}
defineObject("flax.core/sdk_services#type:AndroidPointerCoords", ["orientation","pressure","size","toolMajor","toolMinor","touchMajor","touchMinor","x","y"], [], _flaxBindingMethods("flax.core/sdk_services#type:AndroidPointerCoords", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _AndroidPointerCoordsProxy = {type: "flax.core/sdk_services#type:AndroidPointerCoords", parameters: [{"name":"orientation","required":true,"positional":false},{"name":"pressure","required":true,"positional":false},{"name":"size","required":true,"positional":false},{"name":"toolMajor","required":true,"positional":false},{"name":"toolMinor","required":true,"positional":false},{"name":"touchMajor","required":true,"positional":false},{"name":"touchMinor","required":true,"positional":false},{"name":"x","required":true,"positional":false},{"name":"y","required":true,"positional":false}], constructors: {"":[{"name":"orientation","required":true,"positional":false},{"name":"pressure","required":true,"positional":false},{"name":"size","required":true,"positional":false},{"name":"toolMajor","required":true,"positional":false},{"name":"toolMinor","required":true,"positional":false},{"name":"touchMajor","required":true,"positional":false},{"name":"touchMinor","required":true,"positional":false},{"name":"x","required":true,"positional":false},{"name":"y","required":true,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["orientation","pressure","size","toolMajor","toolMinor","touchMajor","touchMinor","x","y"], setters: [], contextMembers: [], superMembers: ["get:orientation","get:pressure","get:size","get:toolMajor","get:toolMinor","get:touchMajor","get:touchMinor","get:x","get:y","toString"]} as const;
export interface AndroidPointerCoords {
readonly [_flaxDartTypeValue]: AndroidPointerCoords;

toString(): string;
get orientation(): number;
get pressure(): number;
get size(): number;
get toolMajor(): number;
get toolMinor(): number;
get touchMajor(): number;
get touchMinor(): number;
get x(): number;
get y(): number;
}
export abstract class AndroidPointerCoords extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerCoords>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AndroidPointerCoords;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerCoords", readonly [], false];
constructor(options: {orientation: number; pressure: number; size: number; toolMajor: number; toolMinor: number; touchMajor: number; touchMinor: number; x: number; y: number}) { super(_AndroidPointerCoordsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AndroidPointerCoords.prototype, _AndroidPointerCoordsProxy);
export namespace AndroidPointerCoords { export function implement(args: [options: {orientation: number; pressure: number; size: number; toolMajor: number; toolMinor: number; touchMajor: number; touchMinor: number; x: number; y: number}], implementation: {}): AndroidPointerCoords {
return constructProxy(_AndroidPointerCoordsProxy, args, implementation) as AndroidPointerCoords; } }
_flaxBindInstanceType<AndroidPointerCoords, typeof AndroidPointerCoords>(AndroidPointerCoords, "flax.core/sdk_services#type:AndroidPointerCoords", ["dart:core::Object"]);
