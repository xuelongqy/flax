// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters468 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerModeData extends Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerModeData": readonly [] }> { readonly __TickerModeData: unique symbol;
readonly [_flaxDartTypeValue]: TickerModeData;

readonly enabled: boolean;
readonly forceFrames: boolean;
}
defineObject("flax.core/sdk_widgets#type:TickerModeData", ["enabled","forceFrames"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TickerModeData", "object", {}, {}), []);
export function _TickerModeDataFactory(options: { enabled: boolean; forceFrames: boolean }): TickerModeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TickerModeData", "", [{"name":"enabled","required":true},{"name":"forceFrames","required":true}], [], options) as TickerModeData;
}
const _TickerModeDataProxy = {type: "flax.core/sdk_widgets#type:TickerModeData", parameters: _flaxMemberParameters468, constructors: {"": _flaxMemberParameters468}, methods: {}, getters: ["enabled","forceFrames"], setters: [], contextMembers: [], superMembers: ["get:enabled","get:forceFrames"]} as const;
export interface _TickerModeDataNative extends TickerModeData {
readonly [_flaxDartTypeValue]: _TickerModeDataNative;

get enabled(): boolean;
get forceFrames(): boolean;
}
export abstract class _TickerModeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerModeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TickerModeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false];
constructor(options: {enabled: boolean; forceFrames: boolean}) { super(_TickerModeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TickerModeDataNative.prototype, _TickerModeDataProxy);
export namespace _TickerModeDataFactory { export function implement(args: [options: {enabled: boolean; forceFrames: boolean}], implementation: {}): TickerModeData {
return constructProxy(_TickerModeDataProxy, args, implementation) as TickerModeData; } }
const _TickerModeDataBinding = _flaxProxyFactory(_TickerModeDataFactory, _TickerModeDataNative) as unknown as typeof _TickerModeDataFactory & (new(options: {enabled: boolean; forceFrames: boolean}) => _TickerModeDataNative);
export namespace _TickerModeDataFactory { export declare const fallback: TickerModeData; }
_flaxDefineStaticGetters(_TickerModeDataFactory, "flax.core/sdk_widgets#read:TickerModeData.", ["fallback"]);
export const TickerModeData: typeof _TickerModeDataBinding & _FlaxInstanceType<TickerModeData> & _FlaxDartType<TickerModeData, readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false]> = _flaxBindInstanceType<TickerModeData, typeof _TickerModeDataBinding>(_TickerModeDataBinding, "flax.core/sdk_widgets#type:TickerModeData", ["dart:core::Object"]) as typeof _TickerModeDataBinding & _FlaxInstanceType<TickerModeData> & _FlaxDartType<TickerModeData, readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false]>;
