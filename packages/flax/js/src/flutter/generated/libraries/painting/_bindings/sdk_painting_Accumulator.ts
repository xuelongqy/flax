// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Accumulator extends Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }> { readonly __Accumulator: unique symbol;
readonly [_flaxDartTypeValue]: Accumulator;

readonly value: number;
increment(addend: number): void;
}
defineObject("flax.core/sdk_painting#type:Accumulator", ["value"], [], _flaxBindingMethods("flax.core/sdk_painting#type:Accumulator", "object", {"increment":_flaxMemberParameters0}, {}), []);
export function _AccumulatorFactory(_value?: number): Accumulator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:Accumulator", "", [{"name":"_value","positional":true}], [_value], {}) as Accumulator;
}
const _AccumulatorProxy = {type: "flax.core/sdk_painting#type:Accumulator", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"increment":_flaxMemberParameters0}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","increment"]} as const;
export interface _AccumulatorNative extends Accumulator {
readonly [_flaxDartTypeValue]: _AccumulatorNative;

increment(addend: number): void;
get value(): number;
}
export abstract class _AccumulatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Accumulator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Accumulator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false];
constructor(_value?: number) { super(_AccumulatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AccumulatorNative.prototype, _AccumulatorProxy);
export namespace _AccumulatorFactory { export function implement(args: [_value?: number], implementation: {}): Accumulator {
return constructProxy(_AccumulatorProxy, args, implementation) as Accumulator; } }
const _AccumulatorBinding = _flaxProxyFactory(_AccumulatorFactory, _AccumulatorNative) as unknown as typeof _AccumulatorFactory & (new(_value?: number) => _AccumulatorNative);
export const Accumulator: typeof _AccumulatorBinding & _FlaxInstanceType<Accumulator> & _FlaxDartType<Accumulator, readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false]> = _flaxBindInstanceType<Accumulator, typeof _AccumulatorBinding>(_AccumulatorBinding, "flax.core/sdk_painting#type:Accumulator", ["dart:core::Object"]) as typeof _AccumulatorBinding & _FlaxInstanceType<Accumulator> & _FlaxDartType<Accumulator, readonly ["class", "flax.core/sdk_painting#type:Accumulator", readonly [], false]>;
