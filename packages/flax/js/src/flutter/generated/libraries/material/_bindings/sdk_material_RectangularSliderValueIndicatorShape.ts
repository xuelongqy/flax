// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters122, _flaxMemberParameters2, _flaxMemberParameters125 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RectangularSliderValueIndicatorShape extends Omit<upstream0.SliderComponentShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::RectangularSliderValueIndicatorShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [] }> { readonly __RectangularSliderValueIndicatorShape: unique symbol;
readonly [_flaxDartTypeValue]: RectangularSliderValueIndicatorShape;

}
defineObject("flax.core/sdk_material#type:RectangularSliderValueIndicatorShape", [], [], _flaxBindingMethods("flax.core/sdk_material#type:RectangularSliderValueIndicatorShape", "object", {"getPreferredSize":_flaxMemberParameters122}, {}), [], undefined, "flax.core/sdk_material#type:SliderComponentShape");
const _RectangularSliderValueIndicatorShapeProxy = {type: "flax.core/sdk_material#type:RectangularSliderValueIndicatorShape", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getPreferredSize":_flaxMemberParameters122,"paint":_flaxMemberParameters125}, getters: [], setters: [], contextMembers: [], superMembers: ["getPreferredSize","paint"]} as const;
export interface RectangularSliderValueIndicatorShape {
readonly [_flaxDartTypeValue]: RectangularSliderValueIndicatorShape;

getPreferredSize(isEnabled: boolean, isDiscrete: boolean, options?: {labelPainter?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }> | null | undefined; textScaleFactor?: number | null | undefined}): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {activationAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; isDiscrete: boolean; labelPainter: Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }>; parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textDirection: upstream8.TextDirection; value: number; textScaleFactor: number; sizeWithOverflow: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): void;
}
export abstract class RectangularSliderValueIndicatorShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RectangularSliderValueIndicatorShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RectangularSliderValueIndicatorShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RectangularSliderValueIndicatorShape", readonly [], false];
constructor() { super(_RectangularSliderValueIndicatorShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RectangularSliderValueIndicatorShape.prototype, _RectangularSliderValueIndicatorShapeProxy);
export namespace RectangularSliderValueIndicatorShape { export function implement(args: [], implementation: {}): RectangularSliderValueIndicatorShape {
return constructProxy(_RectangularSliderValueIndicatorShapeProxy, args, implementation) as RectangularSliderValueIndicatorShape; } }
_flaxBindInstanceType<RectangularSliderValueIndicatorShape, typeof RectangularSliderValueIndicatorShape>(RectangularSliderValueIndicatorShape, "flax.core/sdk_material#type:RectangularSliderValueIndicatorShape", ["flax.core/sdk_material#type:SliderComponentShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::RectangularSliderValueIndicatorShape" | "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape";
