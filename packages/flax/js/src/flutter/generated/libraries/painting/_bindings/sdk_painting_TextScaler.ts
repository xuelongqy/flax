// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"fontSize","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"maxScaleFactor"},{"name":"minScaleFactor"}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextScaler extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> { readonly __TextScaler: unique symbol;
readonly [_flaxDartTypeValue]: TextScaler;

}
defineObject("flax.core/sdk_painting#type:TextScaler", ["textScaleFactor"], [], _flaxBindingMethods("flax.core/sdk_painting#type:TextScaler", "object", {"scale":_flaxMemberParameters0,"clamp":_flaxMemberParameters1}, {}), []);
const _TextScalerProxy = {type: "flax.core/sdk_painting#type:TextScaler", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"scale":_flaxMemberParameters0,"clamp":_flaxMemberParameters1}, getters: ["textScaleFactor"], setters: [], contextMembers: [], superMembers: ["clamp"]} as const;
export interface TextScaler {
readonly [_flaxDartTypeValue]: TextScaler;

clamp(options?: {minScaleFactor?: number | undefined; maxScaleFactor?: number | undefined}): TextScaler;
}
export abstract class TextScaler extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextScaler>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextScaler;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextScaler", readonly [], false];
constructor() { super(_TextScalerProxy, Array.from(arguments)); }
abstract scale(fontSize: number): number;
abstract get textScaleFactor(): number;
}
_flaxDefineProxyBase(TextScaler.prototype, _TextScalerProxy);
export namespace TextScaler { export function implement(args: [], implementation: {scale: ((fontSize: number) => number); get textScaleFactor(): number}): TextScaler {
return constructProxy(_TextScalerProxy, args, implementation) as TextScaler; } }
export namespace TextScaler { export declare const noScaling: TextScaler; }
_flaxDefineStaticGetters(TextScaler, "flax.core/sdk_painting#read:TextScaler.", ["noScaling"]);
_flaxBindInstanceType<TextScaler, typeof TextScaler>(TextScaler, "flax.core/sdk_painting#type:TextScaler", ["dart:core::Object"]);
