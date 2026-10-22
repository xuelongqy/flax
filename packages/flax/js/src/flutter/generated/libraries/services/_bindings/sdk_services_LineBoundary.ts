// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import '@flax/flutter/services/_bindings/sdk_services_TextBoundary';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextLayoutMetrics';
import '@flax/flutter/services/_bindings/sdk_services_TextLayoutMetrics';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters61, _flaxMemberParameters28 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LineBoundary extends Omit<upstream0.TextBoundary, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary": readonly [] }> { readonly __LineBoundary: unique symbol;
readonly [_flaxDartTypeValue]: LineBoundary;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream2.TextRange;
}
defineObject("flax.core/sdk_services#type:LineBoundary", [], [], _flaxBindingMethods("flax.core/sdk_services#type:LineBoundary", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextBoundary");
export function _LineBoundaryFactory(_textLayout: Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }>): LineBoundary {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:LineBoundary", "", [{"name":"_textLayout","required":true,"positional":true}], [_textLayout], {}) as LineBoundary;
}
const _LineBoundaryProxy = {type: "flax.core/sdk_services#type:LineBoundary", parameters: _flaxMemberParameters61, constructors: {"": _flaxMemberParameters61}, methods: {"getLeadingTextBoundaryAt":_flaxMemberParameters28,"getTrailingTextBoundaryAt":_flaxMemberParameters28,"getTextBoundaryAt":_flaxMemberParameters28}, getters: [], setters: [], contextMembers: [], superMembers: ["getLeadingTextBoundaryAt","getTrailingTextBoundaryAt","getTextBoundaryAt"]} as const;
export interface _LineBoundaryNative extends LineBoundary {
readonly [_flaxDartTypeValue]: _LineBoundaryNative;

getLeadingTextBoundaryAt(position: number): number | null;
getTrailingTextBoundaryAt(position: number): number | null;
getTextBoundaryAt(position: number): upstream2.TextRange;
}
export abstract class _LineBoundaryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LineBoundary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LineBoundary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false];
constructor(_textLayout: Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }>) { super(_LineBoundaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LineBoundaryNative.prototype, _LineBoundaryProxy);
export namespace _LineBoundaryFactory { export function implement(args: [_textLayout: Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }>], implementation: {}): LineBoundary {
return constructProxy(_LineBoundaryProxy, args, implementation) as LineBoundary; } }
const _LineBoundaryBinding = _flaxProxyFactory(_LineBoundaryFactory, _LineBoundaryNative) as unknown as typeof _LineBoundaryFactory & (new(_textLayout: Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }>) => _LineBoundaryNative);
export const LineBoundary: typeof _LineBoundaryBinding & _FlaxInstanceType<LineBoundary> & _FlaxDartType<LineBoundary, readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false]> = _flaxBindInstanceType<LineBoundary, typeof _LineBoundaryBinding>(_LineBoundaryBinding, "flax.core/sdk_services#type:LineBoundary", ["flax.core/sdk_services#type:TextBoundary","dart:core::Object"]) as typeof _LineBoundaryBinding & _FlaxInstanceType<LineBoundary> & _FlaxDartType<LineBoundary, readonly ["class", "flax.core/sdk_services#type:LineBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getLeadingTextBoundaryAt" | "getTrailingTextBoundaryAt" | "getTextBoundaryAt" | "__flaxBound:package:flutter/src/services/text_boundary.dart::LineBoundary" | "__flaxBound:package:flutter/src/services/text_boundary.dart::TextBoundary";
