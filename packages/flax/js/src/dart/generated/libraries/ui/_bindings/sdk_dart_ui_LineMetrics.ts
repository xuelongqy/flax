// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters63 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LineMetrics extends Readonly<{ "__flaxBound:dart:ui::LineMetrics": readonly [] }> { readonly __LineMetrics: unique symbol;
readonly [_flaxDartTypeValue]: LineMetrics;

}
defineObject("flax.core/sdk_dart_ui#type:LineMetrics", ["hardBreak","ascent","descent","unscaledAscent","height","width","left","baseline","lineNumber"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:LineMetrics", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _LineMetricsProxy = {type: "flax.core/sdk_dart_ui#type:LineMetrics", parameters: _flaxMemberParameters63, constructors: {"": _flaxMemberParameters63}, methods: {"toString":_flaxMemberParameters0}, getters: ["hardBreak","ascent","descent","unscaledAscent","height","width","left","baseline","lineNumber"], setters: [], contextMembers: [], superMembers: ["get:hardBreak","get:ascent","get:descent","get:unscaledAscent","get:height","get:width","get:left","get:baseline","get:lineNumber","toString"]} as const;
export interface LineMetrics {
readonly [_flaxDartTypeValue]: LineMetrics;

toString(): string;
get hardBreak(): boolean;
get ascent(): number;
get descent(): number;
get unscaledAscent(): number;
get height(): number;
get width(): number;
get left(): number;
get baseline(): number;
get lineNumber(): number;
}
export abstract class LineMetrics extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LineMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LineMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:LineMetrics", readonly [], false];
constructor(options: {hardBreak: boolean; ascent: number; descent: number; unscaledAscent: number; height: number; width: number; left: number; baseline: number; lineNumber: number}) { super(_LineMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LineMetrics.prototype, _LineMetricsProxy);
export namespace LineMetrics { export function implement(args: [options: {hardBreak: boolean; ascent: number; descent: number; unscaledAscent: number; height: number; width: number; left: number; baseline: number; lineNumber: number}], implementation: {}): LineMetrics {
return constructProxy(_LineMetricsProxy, args, implementation) as LineMetrics; } }
_flaxBindInstanceType<LineMetrics, typeof LineMetrics>(LineMetrics, "flax.core/sdk_dart_ui#type:LineMetrics", ["dart:core::Object"]);
