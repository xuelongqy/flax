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
const _flaxMemberParameters0 = [{"name":"isEnabled","required":true,"positional":true},{"name":"isDiscrete","required":true,"positional":true},{"name":"labelPainter"},{"name":"textScaleFactor"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true},{"name":"center","required":true,"positional":true},{"name":"activationAnimation","required":true},{"name":"enableAnimation","required":true},{"name":"isDiscrete","required":true},{"name":"labelPainter","required":true},{"name":"parentBox","required":true},{"name":"sizeWithOverflow","required":true},{"name":"sliderTheme","required":true},{"name":"textDirection","required":true},{"name":"textScaleFactor","required":true},{"name":"value","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundedRectSliderValueIndicatorShape extends Omit<upstream0.SliderComponentShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundedRectSliderValueIndicatorShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [] }> { readonly __RoundedRectSliderValueIndicatorShape: unique symbol;
readonly [_flaxDartTypeValue]: RoundedRectSliderValueIndicatorShape;

}
defineObject("flax.core/sdk_material#type:RoundedRectSliderValueIndicatorShape", [], [], _flaxBindingMethods("flax.core/sdk_material#type:RoundedRectSliderValueIndicatorShape", "object", {"getPreferredSize":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_material#type:SliderComponentShape");
const _RoundedRectSliderValueIndicatorShapeProxy = {type: "flax.core/sdk_material#type:RoundedRectSliderValueIndicatorShape", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getPreferredSize":_flaxMemberParameters0,"paint":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["getPreferredSize","paint"]} as const;
export interface RoundedRectSliderValueIndicatorShape {
readonly [_flaxDartTypeValue]: RoundedRectSliderValueIndicatorShape;

getPreferredSize(isEnabled: boolean, isDiscrete: boolean, options?: {labelPainter?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }> | null | undefined; textScaleFactor?: number | null | undefined}): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {activationAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; isDiscrete: boolean; labelPainter: Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }>; parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textDirection: upstream8.TextDirection; value: number; textScaleFactor: number; sizeWithOverflow: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): void;
}
export abstract class RoundedRectSliderValueIndicatorShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundedRectSliderValueIndicatorShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundedRectSliderValueIndicatorShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundedRectSliderValueIndicatorShape", readonly [], false];
constructor() { super(_RoundedRectSliderValueIndicatorShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RoundedRectSliderValueIndicatorShape.prototype, _RoundedRectSliderValueIndicatorShapeProxy);
export namespace RoundedRectSliderValueIndicatorShape { export function implement(args: [], implementation: {}): RoundedRectSliderValueIndicatorShape {
return constructProxy(_RoundedRectSliderValueIndicatorShapeProxy, args, implementation) as RoundedRectSliderValueIndicatorShape; } }
_flaxBindInstanceType<RoundedRectSliderValueIndicatorShape, typeof RoundedRectSliderValueIndicatorShape>(RoundedRectSliderValueIndicatorShape, "flax.core/sdk_material#type:RoundedRectSliderValueIndicatorShape", ["flax.core/sdk_material#type:SliderComponentShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundedRectSliderValueIndicatorShape" | "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape";
