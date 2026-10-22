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
import { _flaxMemberParameters286, _flaxMemberParameters287, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageMetrics extends Omit<upstream0.FixedScrollMetrics, _flaxOwnMembers0>, Omit<upstream1.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.FixedScrollMetrics>, Readonly<{ "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __PageMetrics: unique symbol;
readonly [_flaxDartTypeValue]: PageMetrics;

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
readonly page: number | null;
readonly viewportFraction: number;
toString(): string;
copyWith(options?: {axisDirection?: upstream2.AxisDirection | null | undefined; devicePixelRatio?: number | null | undefined; maxScrollExtent?: number | null | undefined; minScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined; viewportFraction?: number | null | undefined}): PageMetrics;
}
defineObject("flax.core/sdk_widgets#type:PageMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","page","viewportFraction"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageMetrics", "object", {"copyWith":_flaxMemberParameters286}, {}), [], undefined, "flax.core/sdk_widgets#type:FixedScrollMetrics");
export function _PageMetricsFactory(options: { minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number }): PageMetrics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PageMetrics", "", [{"name":"minScrollExtent","required":true},{"name":"maxScrollExtent","required":true},{"name":"pixels","required":true},{"name":"viewportDimension","required":true},{"name":"axisDirection","required":true},{"name":"viewportFraction","required":true},{"name":"devicePixelRatio","required":true}], [], options) as PageMetrics;
}
const _PageMetricsProxy = {type: "flax.core/sdk_widgets#type:PageMetrics", parameters: _flaxMemberParameters287, constructors: {"": _flaxMemberParameters287}, methods: {"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters286}, getters: ["page","viewportFraction","minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal"], setters: [], contextMembers: [], superMembers: ["get:page","get:viewportFraction","get:minScrollExtent","get:maxScrollExtent","get:hasContentDimensions","get:pixels","get:hasPixels","get:viewportDimension","get:hasViewportDimension","get:axisDirection","get:devicePixelRatio","get:axis","get:outOfRange","get:atEdge","get:extentBefore","get:extentInside","get:extentAfter","get:extentTotal","toString","copyWith"]} as const;
export interface _PageMetricsNative extends PageMetrics {
readonly [_flaxDartTypeValue]: _PageMetricsNative;

toString(): string;
copyWith(options?: {minScrollExtent?: number | null | undefined; maxScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined; axisDirection?: upstream2.AxisDirection | null | undefined; viewportFraction?: number | null | undefined; devicePixelRatio?: number | null | undefined}): PageMetrics;
get page(): number | null;
get viewportFraction(): number;
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
export abstract class _PageMetricsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageMetrics", readonly [], false];
constructor(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number}) { super(_PageMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PageMetricsNative.prototype, _PageMetricsProxy);
export namespace _PageMetricsFactory { export function implement(args: [options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number}], implementation: {}): PageMetrics {
return constructProxy(_PageMetricsProxy, args, implementation) as PageMetrics; } }
const _PageMetricsBinding = _flaxProxyFactory(_PageMetricsFactory, _PageMetricsNative) as unknown as typeof _PageMetricsFactory & (new(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number}) => _PageMetricsNative);
export const PageMetrics: typeof _PageMetricsBinding & _FlaxInstanceType<PageMetrics> & _FlaxDartType<PageMetrics, readonly ["class", "flax.core/sdk_widgets#type:PageMetrics", readonly [], false]> = _flaxBindInstanceType<PageMetrics, typeof _PageMetricsBinding>(_PageMetricsBinding, "flax.core/sdk_widgets#type:PageMetrics", ["flax.core/sdk_widgets#type:FixedScrollMetrics","dart:core::Object","flax.core/sdk_widgets#type:ScrollMetrics"]) as typeof _PageMetricsBinding & _FlaxInstanceType<PageMetrics> & _FlaxDartType<PageMetrics, readonly ["class", "flax.core/sdk_widgets#type:PageMetrics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "devicePixelRatio" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "page" | "viewportFraction" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
