// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
const _flaxMemberParameters0 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextBoundary extends Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [] }> { readonly __TextBoundary: unique symbol;
readonly [_flaxDartTypeValue]: TextBoundary;

}
defineObject("flax.core/sdk_services#type:TextBoundary", [], [], _flaxBindingMethods("flax.core/sdk_services#type:TextBoundary", "object", {"getLeadingTextBoundaryAt":_flaxMemberParameters0,"getTrailingTextBoundaryAt":_flaxMemberParameters0,"getTextBoundaryAt":_flaxMemberParameters0}, {}), []);
const _TextBoundaryProxy = {type: "flax.core/sdk_services#type:TextBoundary", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getLeadingTextBoundaryAt":_flaxMemberParameters0,"getTrailingTextBoundaryAt":_flaxMemberParameters0,"getTextBoundaryAt":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["getLeadingTextBoundaryAt","getTrailingTextBoundaryAt","getTextBoundaryAt"]} as const;
export interface TextBoundary {
readonly [_flaxDartTypeValue]: TextBoundary;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream0.TextRange;
}
export abstract class TextBoundary extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBoundary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextBoundary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextBoundary", readonly [], false];
constructor() { super(_TextBoundaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextBoundary.prototype, _TextBoundaryProxy);
export namespace TextBoundary { export function implement(args: [], implementation: {}): TextBoundary {
return constructProxy(_TextBoundaryProxy, args, implementation) as TextBoundary; } }
_flaxBindInstanceType<TextBoundary, typeof TextBoundary>(TextBoundary, "flax.core/sdk_services#type:TextBoundary", ["dart:core::Object"]);
