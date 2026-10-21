// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters133 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextAlignVertical extends Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [] }> { readonly __TextAlignVertical: unique symbol;
readonly [_flaxDartTypeValue]: TextAlignVertical;

readonly y: number;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:TextAlignVertical", ["y"], [], _flaxBindingMethods("flax.core/sdk_painting#type:TextAlignVertical", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _TextAlignVerticalFactory(options: { y: number }): TextAlignVertical {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:TextAlignVertical", "", [{"name":"y","required":true}], [], options) as TextAlignVertical;
}
const _TextAlignVerticalProxy = {type: "flax.core/sdk_painting#type:TextAlignVertical", parameters: _flaxMemberParameters133, constructors: {"": _flaxMemberParameters133}, methods: {"toString":_flaxMemberParameters2}, getters: ["y"], setters: [], contextMembers: [], superMembers: ["get:y","toString"]} as const;
export interface _TextAlignVerticalNative extends TextAlignVertical {
readonly [_flaxDartTypeValue]: _TextAlignVerticalNative;

toString(): string;
get y(): number;
}
export abstract class _TextAlignVerticalNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextAlignVertical>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextAlignVertical;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false];
constructor(options: {y: number}) { super(_TextAlignVerticalProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextAlignVerticalNative.prototype, _TextAlignVerticalProxy);
export namespace _TextAlignVerticalFactory { export function implement(args: [options: {y: number}], implementation: {}): TextAlignVertical {
return constructProxy(_TextAlignVerticalProxy, args, implementation) as TextAlignVertical; } }
const _TextAlignVerticalBinding = _flaxProxyFactory(_TextAlignVerticalFactory, _TextAlignVerticalNative) as unknown as typeof _TextAlignVerticalFactory & (new(options: {y: number}) => _TextAlignVerticalNative);
export namespace _TextAlignVerticalFactory { export declare const top: TextAlignVertical; }
export namespace _TextAlignVerticalFactory { export declare const center: TextAlignVertical; }
export namespace _TextAlignVerticalFactory { export declare const bottom: TextAlignVertical; }
_flaxDefineStaticGetters(_TextAlignVerticalFactory, "flax.core/sdk_painting#read:TextAlignVertical.", ["top","center","bottom"]);
export const TextAlignVertical: typeof _TextAlignVerticalBinding & _FlaxInstanceType<TextAlignVertical> & _FlaxDartType<TextAlignVertical, readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false]> = _flaxBindInstanceType<TextAlignVertical, typeof _TextAlignVerticalBinding>(_TextAlignVerticalBinding, "flax.core/sdk_painting#type:TextAlignVertical", ["dart:core::Object"]) as typeof _TextAlignVerticalBinding & _FlaxInstanceType<TextAlignVertical> & _FlaxDartType<TextAlignVertical, readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false]>;
