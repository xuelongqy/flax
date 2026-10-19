// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters129 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputType extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> { readonly __TextInputType: unique symbol;
readonly [_flaxDartTypeValue]: TextInputType;

}
defineObject("flax.core/sdk_services#type:TextInputType", ["index","signed","decimal"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputType", "object", {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _TextInputTypeProxy = {type: "flax.core/sdk_services#type:TextInputType", parameters: _flaxMemberParameters129, constructors: {"numberWithOptions": _flaxMemberParameters129}, methods: {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["index","signed","decimal"], setters: [], contextMembers: [], superMembers: ["get:index","get:signed","get:decimal","toJson","toString"]} as const;
export interface TextInputType {
readonly [_flaxDartTypeValue]: TextInputType;

toJson(): DartMap<string, unknown | null>;
toString(): string;
get index(): number;
get signed(): boolean | null;
get decimal(): boolean | null;
}
export abstract class TextInputType extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputType>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextInputType;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false];
constructor(options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}) { super(_TextInputTypeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextInputType.prototype, _TextInputTypeProxy);
export namespace TextInputType { export function implement(args: [options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}], implementation: {}): TextInputType {
return constructProxy(_TextInputTypeProxy, args, implementation) as TextInputType; } }
export namespace TextInputType { export declare const text: TextInputType; }
export namespace TextInputType { export declare const multiline: TextInputType; }
export namespace TextInputType { export declare const number: TextInputType; }
export namespace TextInputType { export declare const phone: TextInputType; }
export namespace TextInputType { export declare const datetime: TextInputType; }
export namespace TextInputType { export declare const emailAddress: TextInputType; }
export namespace TextInputType { export declare const url: TextInputType; }
export namespace TextInputType { export declare const visiblePassword: TextInputType; }
export namespace TextInputType { export declare const name: TextInputType; }
export namespace TextInputType { export declare const streetAddress: TextInputType; }
export namespace TextInputType { export declare const none: TextInputType; }
export namespace TextInputType { export declare const webSearch: TextInputType; }
export namespace TextInputType { export declare const twitter: TextInputType; }
export namespace TextInputType { export declare const values: DartList<TextInputType>; }
_flaxDefineStaticGetters(TextInputType, "flax.core/sdk_services#read:TextInputType.", ["text","multiline","number","phone","datetime","emailAddress","url","visiblePassword","name","streetAddress","none","webSearch","twitter","values"]);
_flaxBindInstanceType<TextInputType, typeof TextInputType>(TextInputType, "flax.core/sdk_services#type:TextInputType", ["dart:core::Object"]);
