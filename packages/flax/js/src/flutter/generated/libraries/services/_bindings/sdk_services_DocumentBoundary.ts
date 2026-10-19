// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters24, _flaxMemberParameters25 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DocumentBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::DocumentBoundary": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [] }> { readonly __DocumentBoundary: unique symbol;
readonly [_flaxDartTypeValue]: DocumentBoundary;

}
defineObject("flax.core/sdk_services#type:DocumentBoundary", [], [], _flaxBindingMethods("flax.core/sdk_services#type:DocumentBoundary", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextBoundary");
const _DocumentBoundaryProxy = {type: "flax.core/sdk_services#type:DocumentBoundary", parameters: _flaxMemberParameters24, constructors: {"": _flaxMemberParameters24}, methods: {"getLeadingTextBoundaryAt":_flaxMemberParameters25,"getTrailingTextBoundaryAt":_flaxMemberParameters25,"getTextBoundaryAt":_flaxMemberParameters25}, getters: [], setters: [], contextMembers: [], superMembers: ["getLeadingTextBoundaryAt","getTrailingTextBoundaryAt","getTextBoundaryAt"]} as const;
export interface DocumentBoundary {
readonly [_flaxDartTypeValue]: DocumentBoundary;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream1.TextRange;
}
export abstract class DocumentBoundary extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentBoundary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DocumentBoundary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DocumentBoundary", readonly [], false];
constructor(_text: string) { super(_DocumentBoundaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DocumentBoundary.prototype, _DocumentBoundaryProxy);
export namespace DocumentBoundary { export function implement(args: [_text: string], implementation: {}): DocumentBoundary {
return constructProxy(_DocumentBoundaryProxy, args, implementation) as DocumentBoundary; } }
_flaxBindInstanceType<DocumentBoundary, typeof DocumentBoundary>(DocumentBoundary, "flax.core/sdk_services#type:DocumentBoundary", ["flax.core/sdk_services#type:TextBoundary","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::DocumentBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
