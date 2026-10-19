// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { _flaxMemberParameters2, _flaxMemberParameters174, _flaxMemberParameters175 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FixedScrollMetrics extends Omit<upstream0.ScrollMetrics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __FixedScrollMetrics: unique symbol;
readonly [_flaxDartTypeValue]: FixedScrollMetrics;

}
defineObject("flax.core/sdk_widgets#type:FixedScrollMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FixedScrollMetrics", "object", {"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollMetrics");
const _FixedScrollMetricsProxy = {type: "flax.core/sdk_widgets#type:FixedScrollMetrics", parameters: _flaxMemberParameters174, constructors: {"": _flaxMemberParameters174}, methods: {"copyWith":_flaxMemberParameters175,"toString":_flaxMemberParameters2}, getters: ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","devicePixelRatio","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal"], setters: [], contextMembers: [], superMembers: ["get:minScrollExtent","get:maxScrollExtent","get:hasContentDimensions","get:pixels","get:hasPixels","get:viewportDimension","get:hasViewportDimension","get:axisDirection","get:devicePixelRatio","get:axis","get:outOfRange","get:atEdge","get:extentBefore","get:extentInside","get:extentAfter","get:extentTotal","copyWith","toString"]} as const;
export interface FixedScrollMetrics {
readonly [_flaxDartTypeValue]: FixedScrollMetrics;

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
export abstract class FixedScrollMetrics extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedScrollMetrics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FixedScrollMetrics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedScrollMetrics", readonly [], false];
constructor(options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number}) { super(_FixedScrollMetricsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FixedScrollMetrics.prototype, _FixedScrollMetricsProxy);
export namespace FixedScrollMetrics { export function implement(args: [options: {minScrollExtent: number | null; maxScrollExtent: number | null; pixels: number | null; viewportDimension: number | null; axisDirection: upstream1.AxisDirection; devicePixelRatio: number}], implementation: {}): FixedScrollMetrics {
return constructProxy(_FixedScrollMetricsProxy, args, implementation) as FixedScrollMetrics; } }
_flaxBindInstanceType<FixedScrollMetrics, typeof FixedScrollMetrics>(FixedScrollMetrics, "flax.core/sdk_widgets#type:FixedScrollMetrics", ["dart:core::Object","flax.core/sdk_widgets#type:ScrollMetrics"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "pixels" | "hasPixels" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "devicePixelRatio" | "copyWith" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::FixedScrollMetrics" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
