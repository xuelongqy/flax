// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { _flaxMemberParameters2, _flaxMemberParameters155, _flaxMemberParameters156 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FixedScrollMetrics extends Omit<upstream0.ScrollMetrics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __FixedScrollMetrics: unique symbol;
readonly [_flaxDartTypeValue]: FixedScrollMetrics;

readonly minScrollExtent: number;
readonly maxScrollExtent: number;
readonly hasContentDimensions: boolean;
readonly pixels: number;
readonly hasPixels: boolean;
readonly viewportDimension: number;
readonly hasViewportDimension: boolean;
readonly axisDirection: upstream1.AxisDirection;
readonly axis: upstream2.Axis;
readonly outOfRange: boolean;
readonly atEdge: boolean;
readonly extentBefore: number;
readonly extentInside: number;
readonly extentAfter: number;
readonly extentTotal: number;
readonly devicePixelRatio: number;
copyWith(options?: {axisDirection?: upstream1.AxisDirection | null | undefined; devicePixelRatio?: number | null | undefined; maxScrollExtent?: number | null | undefined; minScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined}): upstream0.ScrollMetrics;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:FixedScrollMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FixedScrollMetrics", "object", {"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollMetrics");
export function _FixedScrollMetricsFactory(options: { minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number }): FixedScrollMetrics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FixedScrollMetrics", "", [{"name":"minScrollExtent","required":true},{"name":"maxScrollExtent","required":true},{"name":"pixels","required":true},{"name":"viewportDimension","required":true},{"name":"axisDirection","required":true},{"name":"devicePixelRatio","required":true}], [], options) as FixedScrollMetrics;
}
const _FixedScrollMetricsProxy = {type: "flax.core/sdk_widgets#type:FixedScrollMetrics", parameters: _flaxMemberParameters155, constructors: {"": _flaxMemberParameters155}, methods: {"copyWith":_flaxMemberParameters156,"toString":_flaxMemberParameters2}, getters: ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal"], setters: [], contextMembers: [], superMembers: ["get:minScrollExtent","get:maxScrollExtent","get:hasContentDimensions","get:pixels","get:hasPixels","get:viewportDimension","get:hasViewportDimension","get:axisDirection","get:devicePixelRatio","get:axis","get:outOfRange","get:atEdge","get:extentBefore","get:extentInside","get:extentAfter","get:extentTotal","copyWith","toString"]} as const;
export interface _FixedScrollMetricsNative extends FixedScrollMetrics {
readonly [_flaxDartTypeValue]: _FixedScrollMetricsNative;

copyWith(options?: {minScrollExtent?: number | null | undefined; maxScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined; axisDirection?: upstream1.AxisDirection | null | undefined; devicePixelRatio?: number | null | undefined}): upstream0.ScrollMetrics;
toString(): string;
get minScrollExtent(): number;
get maxScrollExtent(): number;
get hasContentDimensions(): boolean;
get pixels(): number;
get hasPixels(): boolean;
get viewportDimension(): number;
get hasViewportDimension(): boolean;
get axisDirection(): upstream1.AxisDirection;
get devicePixelRatio(): number;
get axis(): upstream2.Axis;
get outOfRange(): boolean;
get atEdge(): boolean;
get extentBefore(): number;
get extentInside(): number;
get extentAfter(): number;
get extentTotal(): number;
}
export abstract class _FixedScrollMetricsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedScrollMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FixedScrollMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false];
constructor(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number}) { super(_FixedScrollMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FixedScrollMetricsNative.prototype, _FixedScrollMetricsProxy);
export namespace _FixedScrollMetricsFactory { export function implement(args: [options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number}], implementation: {}): FixedScrollMetrics {
return constructProxy(_FixedScrollMetricsProxy, args, implementation) as FixedScrollMetrics; } }
const _FixedScrollMetricsBinding = _flaxProxyFactory(_FixedScrollMetricsFactory, _FixedScrollMetricsNative) as unknown as typeof _FixedScrollMetricsFactory & (new(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number}) => _FixedScrollMetricsNative);
export const FixedScrollMetrics: typeof _FixedScrollMetricsBinding & _FlaxInstanceType<FixedScrollMetrics> & _FlaxDartType<FixedScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false]> = _flaxBindInstanceType<FixedScrollMetrics, typeof _FixedScrollMetricsBinding>(_FixedScrollMetricsBinding, "flax.core/sdk_widgets#type:FixedScrollMetrics", ["dart:core::Object","flax.core/sdk_widgets#type:ScrollMetrics"]) as typeof _FixedScrollMetricsBinding & _FlaxInstanceType<FixedScrollMetrics> & _FlaxDartType<FixedScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "devicePixelRatio" | "copyWith" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
