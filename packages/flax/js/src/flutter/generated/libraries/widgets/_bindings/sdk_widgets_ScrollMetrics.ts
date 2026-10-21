// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import { _flaxMemberParameters171 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollMetrics extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }> { readonly __ScrollMetrics: unique symbol;
readonly [_flaxDartTypeValue]: ScrollMetrics;

readonly minScrollExtent: number;
readonly maxScrollExtent: number;
readonly hasContentDimensions: boolean;
readonly pixels: number;
readonly hasPixels: boolean;
readonly viewportDimension: number;
readonly hasViewportDimension: boolean;
readonly axisDirection: upstream0.AxisDirection;
readonly axis: upstream1.Axis;
readonly outOfRange: boolean;
readonly atEdge: boolean;
readonly extentBefore: number;
readonly extentInside: number;
readonly extentAfter: number;
readonly extentTotal: number;
readonly devicePixelRatio: number;
copyWith(options?: {axisDirection?: upstream0.AxisDirection | null | undefined; devicePixelRatio?: number | null | undefined; maxScrollExtent?: number | null | undefined; minScrollExtent?: number | null | undefined; pixels?: number | null | undefined; viewportDimension?: number | null | undefined}): ScrollMetrics;
}
defineObject("flax.core/sdk_widgets#type:ScrollMetrics", ["minScrollExtent","maxScrollExtent","hasContentDimensions","pixels","hasPixels","viewportDimension","hasViewportDimension","axisDirection","axis","outOfRange","atEdge","extentBefore","extentInside","extentAfter","extentTotal","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollMetrics", "object", {"copyWith":_flaxMemberParameters171}, {}), []);
export const ScrollMetrics: object & _FlaxInstanceType<ScrollMetrics> & _FlaxDartType<ScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:ScrollMetrics", readonly [], false]> = _flaxBindInstanceType<ScrollMetrics, object>({}, "flax.core/sdk_widgets#type:ScrollMetrics", ["dart:core::Object"]) as object & _FlaxInstanceType<ScrollMetrics> & _FlaxDartType<ScrollMetrics, readonly ["class", "flax.core/sdk_widgets#type:ScrollMetrics", readonly [], false]>;
