// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerModeData extends Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerModeData": readonly [] }> { readonly __TickerModeData: unique symbol;
readonly [_flaxDartTypeValue]: TickerModeData;

}
defineObject("flax.core/sdk_widgets#type:TickerModeData", ["enabled","forceFrames"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TickerModeData", "object", {}, {}), []);
const _TickerModeDataProxy = {type: "flax.core/sdk_widgets#type:TickerModeData", parameters: [{"name":"enabled","required":true,"positional":false},{"name":"forceFrames","required":true,"positional":false}], constructors: {"":[{"name":"enabled","required":true,"positional":false},{"name":"forceFrames","required":true,"positional":false}]}, methods: {}, getters: ["enabled","forceFrames"], setters: [], contextMembers: [], superMembers: ["get:enabled","get:forceFrames"]} as const;
export interface TickerModeData {
readonly [_flaxDartTypeValue]: TickerModeData;

get enabled(): boolean;
get forceFrames(): boolean;
}
export abstract class TickerModeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerModeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TickerModeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false];
constructor(options: {enabled: boolean; forceFrames: boolean}) { super(_TickerModeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TickerModeData.prototype, _TickerModeDataProxy);
export namespace TickerModeData { export function implement(args: [options: {enabled: boolean; forceFrames: boolean}], implementation: {}): TickerModeData {
return constructProxy(_TickerModeDataProxy, args, implementation) as TickerModeData; } }
export namespace TickerModeData { export declare const fallback: TickerModeData; }
_flaxDefineStaticGetters(TickerModeData, "flax.core/sdk_widgets#read:TickerModeData.", ["fallback"]);
_flaxBindInstanceType<TickerModeData, typeof TickerModeData>(TickerModeData, "flax.core/sdk_widgets#type:TickerModeData", ["dart:core::Object"]);
