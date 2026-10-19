// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
const _flaxMemberParameters0 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlaceholderSpanIndexSemanticsTag extends Omit<upstream0.SemanticsTag, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [] }> { readonly __PlaceholderSpanIndexSemanticsTag: unique symbol;
readonly [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;

}
defineObject("flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", ["name","index"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", "object", {}, {}), [], undefined, "flax.core/sdk_semantics#type:SemanticsTag");
const _PlaceholderSpanIndexSemanticsTagProxy = {type: "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toString":_flaxMemberParameters1}, getters: ["index","name"], setters: [], contextMembers: [], superMembers: ["get:index","get:name","toString"]} as const;
export interface PlaceholderSpanIndexSemanticsTag {
readonly [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;

toString(): string;
get index(): number;
get name(): string;
}
export abstract class PlaceholderSpanIndexSemanticsTag extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderSpanIndexSemanticsTag>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", readonly [], false];
constructor(index: number) { super(_PlaceholderSpanIndexSemanticsTagProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlaceholderSpanIndexSemanticsTag.prototype, _PlaceholderSpanIndexSemanticsTagProxy);
export namespace PlaceholderSpanIndexSemanticsTag { export function implement(args: [index: number], implementation: {}): PlaceholderSpanIndexSemanticsTag {
return constructProxy(_PlaceholderSpanIndexSemanticsTagProxy, args, implementation) as PlaceholderSpanIndexSemanticsTag; } }
_flaxBindInstanceType<PlaceholderSpanIndexSemanticsTag, typeof PlaceholderSpanIndexSemanticsTag>(PlaceholderSpanIndexSemanticsTag, "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", ["flax.core/sdk_semantics#type:SemanticsTag","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "index" | "toString" | "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag";
