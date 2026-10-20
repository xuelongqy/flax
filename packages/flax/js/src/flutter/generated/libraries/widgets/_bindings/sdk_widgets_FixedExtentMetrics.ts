// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FixedScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FixedScrollMetrics';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { _flaxMemberParameters140, _flaxMemberParameters141, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FixedExtentMetrics extends Omit<upstream0.FixedScrollMetrics, _flaxOwnMembers0>, Omit<upstream1.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.FixedScrollMetrics>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __FixedExtentMetrics: unique symbol;
readonly [_flaxDartTypeValue]: FixedExtentMetrics;

readonly minScrollExtent: number;
readonly maxScrollExtent: number;
readonly hasContentDimensions: boolean;
readonly pixels: number;
readonly hasPixels: boolean;
readonly viewportDimension: number;
readonly hasViewportDimension: boolean;
readonly axisDirection: upstream2.AxisDirection;
readonly devicePixelRatio: number;
readonly axis: upstream3.Axis;
readonly outOfRange: boolean;
readonly atEdge: boolean;
readonly extentBefore: number;
readonly extentInside: number;
readonly extentAfter: number;
readonly extentTotal: number;
readonly itemIndex: number;
toString(): string;
copyWith(options?: {axisDirection?: upstream2.AxisDirection | null | undefined; devicePixelRatio?: number | null | undefined; itemIndex?: number | null | undefined; maxScrollExtent?: number | null | undefined; minScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined}): FixedExtentMetrics;
}
defineObject("flax.core/sdk_widgets#type:FixedExtentMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","itemIndex"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FixedExtentMetrics", "object", {"copyWith":_flaxMemberParameters140}, {}), [], undefined, "flax.core/sdk_widgets#type:FixedScrollMetrics");
export function _FixedExtentMetricsFactory(options: { minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; itemIndex: number; devicePixelRatio: number }): FixedExtentMetrics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FixedExtentMetrics", "", [{"name":"minScrollExtent","required":true},{"name":"maxScrollExtent","required":true},{"name":"pixels","required":true},{"name":"viewportDimension","required":true},{"name":"axisDirection","required":true},{"name":"itemIndex","required":true},{"name":"devicePixelRatio","required":true}], [], options) as FixedExtentMetrics;
}
const _FixedExtentMetricsProxy = {type: "flax.core/sdk_widgets#type:FixedExtentMetrics", parameters: _flaxMemberParameters141, constructors: {"": _flaxMemberParameters141}, methods: {"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters140}, getters: ["itemIndex","minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal"], setters: [], contextMembers: [], superMembers: ["get:itemIndex","get:minScrollExtent","get:maxScrollExtent","get:hasContentDimensions","get:pixels","get:hasPixels","get:viewportDimension","get:hasViewportDimension","get:axisDirection","get:devicePixelRatio","get:axis","get:outOfRange","get:atEdge","get:extentBefore","get:extentInside","get:extentAfter","get:extentTotal","toString","copyWith"]} as const;
export interface _FixedExtentMetricsNative extends FixedExtentMetrics {
readonly [_flaxDartTypeValue]: _FixedExtentMetricsNative;

toString(): string;
copyWith(options?: {minScrollExtent?: number | null | undefined; maxScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined; axisDirection?: upstream2.AxisDirection | null | undefined; itemIndex?: number | null | undefined; devicePixelRatio?: number | null | undefined}): FixedExtentMetrics;
get itemIndex(): number;
get minScrollExtent(): number;
get maxScrollExtent(): number;
get hasContentDimensions(): boolean;
get pixels(): number;
get hasPixels(): boolean;
get viewportDimension(): number;
get hasViewportDimension(): boolean;
get axisDirection(): upstream2.AxisDirection;
get devicePixelRatio(): number;
get axis(): upstream3.Axis;
get outOfRange(): boolean;
get atEdge(): boolean;
get extentBefore(): number;
get extentInside(): number;
get extentAfter(): number;
get extentTotal(): number;
}
export abstract class _FixedExtentMetricsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedExtentMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FixedExtentMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedExtentMetrics", readonly [], false];
constructor(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; itemIndex: number; devicePixelRatio: number}) { super(_FixedExtentMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FixedExtentMetricsNative.prototype, _FixedExtentMetricsProxy);
export namespace _FixedExtentMetricsFactory { export function implement(args: [options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; itemIndex: number; devicePixelRatio: number}], implementation: {}): FixedExtentMetrics {
return constructProxy(_FixedExtentMetricsProxy, args, implementation) as FixedExtentMetrics; } }
const _FixedExtentMetricsBinding = _flaxProxyFactory(_FixedExtentMetricsFactory, _FixedExtentMetricsNative) as unknown as typeof _FixedExtentMetricsFactory & (new(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; itemIndex: number; devicePixelRatio: number}) => _FixedExtentMetricsNative);
export const FixedExtentMetrics: typeof _FixedExtentMetricsBinding & _FlaxInstanceType<FixedExtentMetrics> & _FlaxDartType<FixedExtentMetrics, readonly ["class", "flax.core/sdk_widgets#type:FixedExtentMetrics", readonly [], false]> = _flaxBindInstanceType<FixedExtentMetrics, typeof _FixedExtentMetricsBinding>(_FixedExtentMetricsBinding, "flax.core/sdk_widgets#type:FixedExtentMetrics", ["flax.core/sdk_widgets#type:FixedScrollMetrics","dart:core::Object","flax.core/sdk_widgets#type:ScrollMetrics"]) as typeof _FixedExtentMetricsBinding & _FlaxInstanceType<FixedExtentMetrics> & _FlaxDartType<FixedExtentMetrics, readonly ["class", "flax.core/sdk_widgets#type:FixedExtentMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "devicePixelRatio" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "itemIndex" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
