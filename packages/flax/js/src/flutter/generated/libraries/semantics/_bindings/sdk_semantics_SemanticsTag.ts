// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters49 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsTag extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [] }> { readonly __SemanticsTag: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsTag;

readonly name: string;
toString(): string;
}
defineObject("flax.core/sdk_semantics#type:SemanticsTag", ["name"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsTag", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _SemanticsTagFactory(name: string): SemanticsTag {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:SemanticsTag", "", [{"name":"name","required":true,"positional":true}], [name], {}) as SemanticsTag;
}
const _SemanticsTagProxy = {type: "flax.core/sdk_semantics#type:SemanticsTag", parameters: _flaxMemberParameters49, constructors: {"": _flaxMemberParameters49}, methods: {"toString":_flaxMemberParameters2}, getters: ["name"], setters: [], contextMembers: [], superMembers: ["get:name","toString"]} as const;
export interface _SemanticsTagNative extends SemanticsTag {
readonly [_flaxDartTypeValue]: _SemanticsTagNative;

toString(): string;
get name(): string;
}
export abstract class _SemanticsTagNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsTag>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsTag;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false];
constructor(name: string) { super(_SemanticsTagProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SemanticsTagNative.prototype, _SemanticsTagProxy);
export namespace _SemanticsTagFactory { export function implement(args: [name: string], implementation: {}): SemanticsTag {
return constructProxy(_SemanticsTagProxy, args, implementation) as SemanticsTag; } }
const _SemanticsTagBinding = _flaxProxyFactory(_SemanticsTagFactory, _SemanticsTagNative) as unknown as typeof _SemanticsTagFactory & (new(name: string) => _SemanticsTagNative);
export const SemanticsTag: typeof _SemanticsTagBinding & _FlaxInstanceType<SemanticsTag> & _FlaxDartType<SemanticsTag, readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false]> = _flaxBindInstanceType<SemanticsTag, typeof _SemanticsTagBinding>(_SemanticsTagBinding, "flax.core/sdk_semantics#type:SemanticsTag", ["dart:core::Object"]) as typeof _SemanticsTagBinding & _FlaxInstanceType<SemanticsTag> & _FlaxDartType<SemanticsTag, readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false]>;
