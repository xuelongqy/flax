// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters141, _flaxMemberParameters142, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextScaler extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> { readonly __TextScaler: unique symbol;
readonly [_flaxDartTypeValue]: TextScaler;

readonly textScaleFactor: number;
scale(fontSize: number): number;
clamp(options?: {maxScaleFactor?: number | undefined; minScaleFactor?: number | undefined}): TextScaler;
}
defineObject("flax.core/sdk_painting#type:TextScaler", ["textScaleFactor"], [], _flaxBindingMethods("flax.core/sdk_painting#type:TextScaler", "object", {"scale":_flaxMemberParameters141,"clamp":_flaxMemberParameters142}, {}), []);
export namespace _TextScalerFactory {
export function linear(textScaleFactor: number): TextScaler {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:TextScaler", "linear", [{"name":"textScaleFactor","required":true,"positional":true}], [textScaleFactor], {}) as TextScaler;
}
}
const _TextScalerProxy = {type: "flax.core/sdk_painting#type:TextScaler", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"scale":_flaxMemberParameters141,"clamp":_flaxMemberParameters142}, getters: ["textScaleFactor"], setters: [], contextMembers: [], superMembers: ["clamp"]} as const;
export interface _TextScalerNative extends TextScaler {
readonly [_flaxDartTypeValue]: _TextScalerNative;

clamp(options?: {minScaleFactor?: number | undefined; maxScaleFactor?: number | undefined}): TextScaler;
}
export abstract class _TextScalerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextScaler>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextScaler;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false];
constructor() { super(_TextScalerProxy, Array.from(arguments)); }
abstract scale(fontSize: number): number;
abstract get textScaleFactor(): number;
}
_flaxDefineProxyBase(_TextScalerNative.prototype, _TextScalerProxy);
export namespace _TextScalerFactory { export function implement(args: [], implementation: {scale: ((fontSize: number) => number); get textScaleFactor(): number}): TextScaler {
return constructProxy(_TextScalerProxy, args, implementation) as TextScaler; } }
const _TextScalerBinding = _flaxProxyFactory(_TextScalerFactory, _TextScalerNative) as unknown as typeof _TextScalerFactory & (abstract new() => _TextScalerNative);
export namespace _TextScalerFactory { export declare const noScaling: TextScaler; }
_flaxDefineStaticGetters(_TextScalerFactory, "flax.core/sdk_painting#read:TextScaler.", ["noScaling"]);
export const TextScaler: typeof _TextScalerBinding & _FlaxInstanceType<TextScaler> & _FlaxDartType<TextScaler, readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false]> = _flaxBindInstanceType<TextScaler, typeof _TextScalerBinding>(_TextScalerBinding, "flax.core/sdk_painting#type:TextScaler", ["dart:core::Object"]) as typeof _TextScalerBinding & _FlaxInstanceType<TextScaler> & _FlaxDartType<TextScaler, readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false]>;
