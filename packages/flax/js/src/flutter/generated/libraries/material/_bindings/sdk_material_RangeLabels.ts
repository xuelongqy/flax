// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RangeLabels extends Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeLabels": readonly [] }> { readonly __RangeLabels: unique symbol;
readonly [_flaxDartTypeValue]: RangeLabels;

}
defineObject("flax.core/sdk_material#type:RangeLabels", ["start","end"], [], _flaxBindingMethods("flax.core/sdk_material#type:RangeLabels", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _RangeLabelsProxy = {type: "flax.core/sdk_material#type:RangeLabels", parameters: [{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true}], constructors: {"":[{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["start","end"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","toString"]} as const;
export interface RangeLabels {
readonly [_flaxDartTypeValue]: RangeLabels;

toString(): string;
get start(): string;
get end(): string;
}
export abstract class RangeLabels extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeLabels>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RangeLabels;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RangeLabels", readonly [], false];
constructor(start: string, end: string) { super(_RangeLabelsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RangeLabels.prototype, _RangeLabelsProxy);
export namespace RangeLabels { export function implement(args: [start: string, end: string], implementation: {}): RangeLabels {
return constructProxy(_RangeLabelsProxy, args, implementation) as RangeLabels; } }
_flaxBindInstanceType<RangeLabels, typeof RangeLabels>(RangeLabels, "flax.core/sdk_material#type:RangeLabels", ["dart:core::Object"]);
