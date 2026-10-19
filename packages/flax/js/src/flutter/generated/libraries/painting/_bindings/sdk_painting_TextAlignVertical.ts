// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters122 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextAlignVertical extends Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [] }> { readonly __TextAlignVertical: unique symbol;
readonly [_flaxDartTypeValue]: TextAlignVertical;

}
defineObject("flax.core/sdk_painting#type:TextAlignVertical", ["y"], [], _flaxBindingMethods("flax.core/sdk_painting#type:TextAlignVertical", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _TextAlignVerticalProxy = {type: "flax.core/sdk_painting#type:TextAlignVertical", parameters: _flaxMemberParameters122, constructors: {"": _flaxMemberParameters122}, methods: {"toString":_flaxMemberParameters2}, getters: ["y"], setters: [], contextMembers: [], superMembers: ["get:y","toString"]} as const;
export interface TextAlignVertical {
readonly [_flaxDartTypeValue]: TextAlignVertical;

toString(): string;
get y(): number;
}
export abstract class TextAlignVertical extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextAlignVertical>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextAlignVertical;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false];
constructor(options: {y: number}) { super(_TextAlignVerticalProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextAlignVertical.prototype, _TextAlignVerticalProxy);
export namespace TextAlignVertical { export function implement(args: [options: {y: number}], implementation: {}): TextAlignVertical {
return constructProxy(_TextAlignVerticalProxy, args, implementation) as TextAlignVertical; } }
export namespace TextAlignVertical { export declare const top: TextAlignVertical; }
export namespace TextAlignVertical { export declare const center: TextAlignVertical; }
export namespace TextAlignVertical { export declare const bottom: TextAlignVertical; }
_flaxDefineStaticGetters(TextAlignVertical, "flax.core/sdk_painting#read:TextAlignVertical.", ["top","center","bottom"]);
_flaxBindInstanceType<TextAlignVertical, typeof TextAlignVertical>(TextAlignVertical, "flax.core/sdk_painting#type:TextAlignVertical", ["dart:core::Object"]);
