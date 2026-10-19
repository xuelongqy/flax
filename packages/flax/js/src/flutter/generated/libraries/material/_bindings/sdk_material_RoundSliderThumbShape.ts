// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters245, _flaxMemberParameters145, _flaxMemberParameters125 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundSliderThumbShape extends Omit<upstream0.SliderComponentShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderThumbShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [] }> { readonly __RoundSliderThumbShape: unique symbol;
readonly [_flaxDartTypeValue]: RoundSliderThumbShape;

}
defineObject("flax.core/sdk_material#type:RoundSliderThumbShape", ["enabledThumbRadius","disabledThumbRadius","elevation","pressedElevation"], [], _flaxBindingMethods("flax.core/sdk_material#type:RoundSliderThumbShape", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:SliderComponentShape");
const _RoundSliderThumbShapeProxy = {type: "flax.core/sdk_material#type:RoundSliderThumbShape", parameters: _flaxMemberParameters245, constructors: {"": _flaxMemberParameters245}, methods: {"getPreferredSize":_flaxMemberParameters145,"paint":_flaxMemberParameters125}, getters: ["enabledThumbRadius","disabledThumbRadius","elevation","pressedElevation"], setters: [], contextMembers: [], superMembers: ["get:enabledThumbRadius","get:disabledThumbRadius","get:elevation","get:pressedElevation","getPreferredSize","paint"]} as const;
export interface RoundSliderThumbShape {
readonly [_flaxDartTypeValue]: RoundSliderThumbShape;

getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {activationAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; isDiscrete: boolean; labelPainter: Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }>; parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textDirection: upstream8.TextDirection; value: number; textScaleFactor: number; sizeWithOverflow: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): void;
get enabledThumbRadius(): number;
get disabledThumbRadius(): number | null;
get elevation(): number;
get pressedElevation(): number;
}
export abstract class RoundSliderThumbShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundSliderThumbShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundSliderThumbShape", readonly [], false];
constructor(options?: {enabledThumbRadius?: number | undefined; disabledThumbRadius?: number | null | undefined; elevation?: number | undefined; pressedElevation?: number | undefined}) { super(_RoundSliderThumbShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RoundSliderThumbShape.prototype, _RoundSliderThumbShapeProxy);
export namespace RoundSliderThumbShape { export function implement(args: [options?: {enabledThumbRadius?: number | undefined; disabledThumbRadius?: number | null | undefined; elevation?: number | undefined; pressedElevation?: number | undefined}], implementation: {}): RoundSliderThumbShape {
return constructProxy(_RoundSliderThumbShapeProxy, args, implementation) as RoundSliderThumbShape; } }
_flaxBindInstanceType<RoundSliderThumbShape, typeof RoundSliderThumbShape>(RoundSliderThumbShape, "flax.core/sdk_material#type:RoundSliderThumbShape", ["flax.core/sdk_material#type:SliderComponentShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabledThumbRadius" | "disabledThumbRadius" | "elevation" | "pressedElevation" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderThumbShape" | "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape";
