// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"addend","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Accumulator extends Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }> { readonly __Accumulator: unique symbol;
readonly [_flaxDartTypeValue]: Accumulator;

}
defineObject("flax.core/sdk_painting#type:Accumulator", ["value"], [], _flaxBindingMethods("flax.core/sdk_painting#type:Accumulator", "object", {"increment":_flaxMemberParameters0}, {}), []);
const _AccumulatorProxy = {type: "flax.core/sdk_painting#type:Accumulator", parameters: [{"name":"_value","required":false,"positional":true}], constructors: {"":[{"name":"_value","required":false,"positional":true}]}, methods: {"increment":_flaxMemberParameters0}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","increment"]} as const;
export interface Accumulator {
readonly [_flaxDartTypeValue]: Accumulator;

increment(addend: number): void;
get value(): number;
}
export abstract class Accumulator extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Accumulator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Accumulator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false];
constructor(_value?: number) { super(_AccumulatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Accumulator.prototype, _AccumulatorProxy);
export namespace Accumulator { export function implement(args: [_value?: number], implementation: {}): Accumulator {
return constructProxy(_AccumulatorProxy, args, implementation) as Accumulator; } }
_flaxBindInstanceType<Accumulator, typeof Accumulator>(Accumulator, "flax.core/sdk_painting#type:Accumulator", ["dart:core::Object"]);
