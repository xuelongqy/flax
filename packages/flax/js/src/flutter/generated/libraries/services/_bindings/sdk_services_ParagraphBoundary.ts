// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters24, _flaxMemberParameters25 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParagraphBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::ParagraphBoundary": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [] }> { readonly __ParagraphBoundary: unique symbol;
readonly [_flaxDartTypeValue]: ParagraphBoundary;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream1.TextRange;
}
defineObject("flax.core/sdk_services#type:ParagraphBoundary", [], [], _flaxBindingMethods("flax.core/sdk_services#type:ParagraphBoundary", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextBoundary");
export function _ParagraphBoundaryFactory(_text: string): ParagraphBoundary {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:ParagraphBoundary", "", [{"name":"_text","required":true,"positional":true}], [_text], {}) as ParagraphBoundary;
}
const _ParagraphBoundaryProxy = {type: "flax.core/sdk_services#type:ParagraphBoundary", parameters: _flaxMemberParameters24, constructors: {"": _flaxMemberParameters24}, methods: {"getLeadingTextBoundaryAt":_flaxMemberParameters25,"getTrailingTextBoundaryAt":_flaxMemberParameters25,"getTextBoundaryAt":_flaxMemberParameters25}, getters: [], setters: [], contextMembers: [], superMembers: ["getLeadingTextBoundaryAt","getTrailingTextBoundaryAt","getTextBoundaryAt"]} as const;
export interface _ParagraphBoundaryNative extends ParagraphBoundary {
readonly [_flaxDartTypeValue]: _ParagraphBoundaryNative;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream1.TextRange;
}
export abstract class _ParagraphBoundaryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphBoundary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParagraphBoundary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ParagraphBoundary", readonly [], false];
constructor(_text: string) { super(_ParagraphBoundaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ParagraphBoundaryNative.prototype, _ParagraphBoundaryProxy);
export namespace _ParagraphBoundaryFactory { export function implement(args: [_text: string], implementation: {}): ParagraphBoundary {
return constructProxy(_ParagraphBoundaryProxy, args, implementation) as ParagraphBoundary; } }
const _ParagraphBoundaryBinding = _flaxProxyFactory(_ParagraphBoundaryFactory, _ParagraphBoundaryNative) as unknown as typeof _ParagraphBoundaryFactory & (new(_text: string) => _ParagraphBoundaryNative);
export const ParagraphBoundary: typeof _ParagraphBoundaryBinding & _FlaxInstanceType<ParagraphBoundary> & _FlaxDartType<ParagraphBoundary, readonly ["class", "flax.core/sdk_services#type:ParagraphBoundary", readonly [], false]> = _flaxBindInstanceType<ParagraphBoundary, typeof _ParagraphBoundaryBinding>(_ParagraphBoundaryBinding, "flax.core/sdk_services#type:ParagraphBoundary", ["flax.core/sdk_services#type:TextBoundary","dart:core::Object"]) as typeof _ParagraphBoundaryBinding & _FlaxInstanceType<ParagraphBoundary> & _FlaxDartType<ParagraphBoundary, readonly ["class", "flax.core/sdk_services#type:ParagraphBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::ParagraphBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
