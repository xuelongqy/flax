// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import { _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AttributedString extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [] }> { readonly __AttributedString: unique symbol;
readonly [_flaxDartTypeValue]: AttributedString;

readonly string: string;
readonly attributes: DartList<upstream0.StringAttribute>;
toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [] }>): AttributedString;
}
defineObject("flax.core/sdk_semantics#type:AttributedString", ["string","attributes"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:AttributedString", "object", {"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters3}, {}), []);
export function _AttributedStringFactory(string: string, options: { attributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined } = {}): AttributedString {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:AttributedString", "", [{"name":"string","required":true,"positional":true},{"name":"attributes"}], [string], options) as AttributedString;
}
const _AttributedStringProxy = {type: "flax.core/sdk_semantics#type:AttributedString", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"toString":_flaxMemberParameters2,"operatorAdd":_flaxMemberParameters3}, getters: ["string","attributes"], setters: [], contextMembers: [], superMembers: ["get:string","get:attributes","toString","operatorAdd"]} as const;
export interface _AttributedStringNative extends AttributedString {
readonly [_flaxDartTypeValue]: _AttributedStringNative;

toString(): string;
operatorAdd(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [] }>): AttributedString;
get string(): string;
get attributes(): DartList<upstream0.StringAttribute>;
}
export abstract class _AttributedStringNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AttributedString>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AttributedString;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:AttributedString", readonly [], false];
constructor(string: string, options?: {attributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined}) { super(_AttributedStringProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AttributedStringNative.prototype, _AttributedStringProxy);
export namespace _AttributedStringFactory { export function implement(args: [string: string, options?: {attributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined}], implementation: {}): AttributedString {
return constructProxy(_AttributedStringProxy, args, implementation) as AttributedString; } }
const _AttributedStringBinding = _flaxProxyFactory(_AttributedStringFactory, _AttributedStringNative) as unknown as typeof _AttributedStringFactory & (new(string: string, options?: {attributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined}) => _AttributedStringNative);
export const AttributedString: typeof _AttributedStringBinding & _FlaxInstanceType<AttributedString> & _FlaxDartType<AttributedString, readonly ["class", "flax.core/sdk_semantics#type:AttributedString", readonly [], false]> = _flaxBindInstanceType<AttributedString, typeof _AttributedStringBinding>(_AttributedStringBinding, "flax.core/sdk_semantics#type:AttributedString", ["dart:core::Object"]) as typeof _AttributedStringBinding & _FlaxInstanceType<AttributedString> & _FlaxDartType<AttributedString, readonly ["class", "flax.core/sdk_semantics#type:AttributedString", readonly [], false]>;
