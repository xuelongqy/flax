// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters149 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputType extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> { readonly __TextInputType: unique symbol;
readonly [_flaxDartTypeValue]: TextInputType;

readonly index: number;
readonly signed: boolean | null;
readonly decimal: boolean | null;
toJson(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.core/sdk_services#type:TextInputType", ["index","signed","decimal"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputType", "object", {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export namespace _TextInputTypeFactory {
export function numberWithOptions(options: { signed?: boolean | null | undefined; decimal?: boolean | null | undefined } = {}): TextInputType {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextInputType", "numberWithOptions", [{"name":"signed"},{"name":"decimal"}], [], options) as TextInputType;
}
}
const _TextInputTypeProxy = {type: "flax.core/sdk_services#type:TextInputType", parameters: _flaxMemberParameters149, constructors: {"numberWithOptions": _flaxMemberParameters149}, methods: {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["index","signed","decimal"], setters: [], contextMembers: [], superMembers: ["get:index","get:signed","get:decimal","toJson","toString"]} as const;
export interface _TextInputTypeNative extends TextInputType {
readonly [_flaxDartTypeValue]: _TextInputTypeNative;
readonly [_flaxDartConstructors]?: {"numberWithOptions": (options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}) => void;};

toJson(): DartMap<string, unknown | null>;
toString(): string;
get index(): number;
get signed(): boolean | null;
get decimal(): boolean | null;
}
export abstract class _TextInputTypeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputType>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextInputType;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false];
constructor(options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}); constructor(call: _FlaxProxySuper<_TextInputTypeNative>); constructor(...args: unknown[]) { super(_TextInputTypeProxy, args); }
}
_flaxDefineProxyBase(_TextInputTypeNative.prototype, _TextInputTypeProxy);
export namespace _TextInputTypeFactory { export function implement(args: [options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}], implementation: {}): TextInputType {
return constructProxy(_TextInputTypeProxy, args, implementation) as TextInputType; } }
const _TextInputTypeBinding = _flaxProxyFactory(_TextInputTypeFactory, _TextInputTypeNative) as unknown as typeof _TextInputTypeFactory & (new(options?: {signed?: boolean | null | undefined; decimal?: boolean | null | undefined}) => _TextInputTypeNative) & (new(call: _FlaxProxySuper<_TextInputTypeNative>) => _TextInputTypeNative);
export namespace _TextInputTypeFactory { export declare const text: TextInputType; }
export namespace _TextInputTypeFactory { export declare const multiline: TextInputType; }
export namespace _TextInputTypeFactory { export declare const number: TextInputType; }
export namespace _TextInputTypeFactory { export declare const phone: TextInputType; }
export namespace _TextInputTypeFactory { export declare const datetime: TextInputType; }
export namespace _TextInputTypeFactory { export declare const emailAddress: TextInputType; }
export namespace _TextInputTypeFactory { export declare const url: TextInputType; }
export namespace _TextInputTypeFactory { export declare const visiblePassword: TextInputType; }
export namespace _TextInputTypeFactory { export declare const name: TextInputType; }
export namespace _TextInputTypeFactory { export declare const streetAddress: TextInputType; }
export namespace _TextInputTypeFactory { export declare const none: TextInputType; }
export namespace _TextInputTypeFactory { export declare const webSearch: TextInputType; }
export namespace _TextInputTypeFactory { export declare const twitter: TextInputType; }
export namespace _TextInputTypeFactory { export declare const values: DartList<TextInputType>; }
_flaxDefineStaticGetters(_TextInputTypeFactory, "flax.core/sdk_services#read:TextInputType.", ["text","multiline","number","phone","datetime","emailAddress","url","visiblePassword","name","streetAddress","none","webSearch","twitter","values"]);
export const TextInputType: typeof _TextInputTypeBinding & _FlaxInstanceType<TextInputType> & _FlaxDartType<TextInputType, readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false]> = _flaxBindInstanceType<TextInputType, typeof _TextInputTypeBinding>(_TextInputTypeBinding, "flax.core/sdk_services#type:TextInputType", ["dart:core::Object"]) as typeof _TextInputTypeBinding & _FlaxInstanceType<TextInputType> & _FlaxDartType<TextInputType, readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false]>;
