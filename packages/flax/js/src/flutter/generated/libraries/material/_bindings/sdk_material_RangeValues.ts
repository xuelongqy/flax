// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters229 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RangeValues extends Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [] }> { readonly __RangeValues: unique symbol;
readonly [_flaxDartTypeValue]: RangeValues;

}
defineObject("flax.core/sdk_material#type:RangeValues", ["start","end"], [], _flaxBindingMethods("flax.core/sdk_material#type:RangeValues", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _RangeValuesProxy = {type: "flax.core/sdk_material#type:RangeValues", parameters: _flaxMemberParameters229, constructors: {"": _flaxMemberParameters229}, methods: {"toString":_flaxMemberParameters2}, getters: ["start","end"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","toString"]} as const;
export interface RangeValues {
readonly [_flaxDartTypeValue]: RangeValues;

toString(): string;
get start(): number;
get end(): number;
}
export abstract class RangeValues extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeValues>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RangeValues;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeValues", readonly [], false];
constructor(start: number, end: number) { super(_RangeValuesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RangeValues.prototype, _RangeValuesProxy);
export namespace RangeValues { export function implement(args: [start: number, end: number], implementation: {}): RangeValues {
return constructProxy(_RangeValuesProxy, args, implementation) as RangeValues; } }
_flaxBindInstanceType<RangeValues, typeof RangeValues>(RangeValues, "flax.core/sdk_material#type:RangeValues", ["dart:core::Object"]);
