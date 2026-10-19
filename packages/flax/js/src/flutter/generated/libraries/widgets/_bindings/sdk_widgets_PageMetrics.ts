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
const _flaxMemberParameters0 = [{"name":"axisDirection"},{"name":"devicePixelRatio"},{"name":"maxScrollExtent"},{"name":"minScrollExtent"},{"name":"pixels"},{"name":"viewportDimension"},{"name":"viewportFraction"}] as const;
const _flaxMemberParameters1 = [{"name":"minScrollExtent","required":true},{"name":"maxScrollExtent","required":true},{"name":"pixels","required":true},{"name":"viewportDimension","required":true},{"name":"axisDirection","required":true},{"name":"viewportFraction","required":true},{"name":"devicePixelRatio","required":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageMetrics extends Omit<upstream0.FixedScrollMetrics, _flaxOwnMembers0>, Omit<upstream1.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.FixedScrollMetrics>, Readonly<{ "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __PageMetrics: unique symbol;
readonly [_flaxDartTypeValue]: PageMetrics;

}
defineObject("flax.core/sdk_widgets#type:PageMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","page","viewportFraction"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageMetrics", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:FixedScrollMetrics");
const _PageMetricsProxy = {type: "flax.core/sdk_widgets#type:PageMetrics", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters2,"copyWith":_flaxMemberParameters0}, getters: ["page","viewportFraction","minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal"], setters: [], contextMembers: [], superMembers: ["get:page","get:viewportFraction","get:minScrollExtent","get:maxScrollExtent","get:hasContentDimensions","get:pixels","get:hasPixels","get:viewportDimension","get:hasViewportDimension","get:axisDirection","get:devicePixelRatio","get:axis","get:outOfRange","get:atEdge","get:extentBefore","get:extentInside","get:extentAfter","get:extentTotal","toString","copyWith"]} as const;
export interface PageMetrics {
readonly [_flaxDartTypeValue]: PageMetrics;

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
export abstract class PageMetrics extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageMetrics", readonly [], false];
constructor(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number}) { super(_PageMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PageMetrics.prototype, _PageMetricsProxy);
export namespace PageMetrics { export function implement(args: [options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream2.AxisDirection; viewportFraction: number; devicePixelRatio: number}], implementation: {}): PageMetrics {
return constructProxy(_PageMetricsProxy, args, implementation) as PageMetrics; } }
_flaxBindInstanceType<PageMetrics, typeof PageMetrics>(PageMetrics, "flax.core/sdk_widgets#type:PageMetrics", ["flax.core/sdk_widgets#type:FixedScrollMetrics","dart:core::Object","flax.core/sdk_widgets#type:ScrollMetrics"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "devicePixelRatio" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "page" | "viewportFraction" | "toString" | "copyWith" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
