// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters231, _flaxMemberParameters232, _flaxMemberParameters246 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundRangeSliderTickMarkShape extends Omit<upstream0.RangeSliderTickMarkShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderTickMarkShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [] }> { readonly __RoundRangeSliderTickMarkShape: unique symbol;
readonly [_flaxDartTypeValue]: RoundRangeSliderTickMarkShape;

}
defineObject("flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", ["tickMarkRadius"], [], _flaxBindingMethods("flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", "object", {"getPreferredSize":_flaxMemberParameters231,"paint":_flaxMemberParameters232}, {}), [], undefined, "flax.core/sdk_material#type:RangeSliderTickMarkShape");
const _RoundRangeSliderTickMarkShapeProxy = {type: "flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", parameters: _flaxMemberParameters246, constructors: {"": _flaxMemberParameters246}, methods: {"getPreferredSize":_flaxMemberParameters231,"paint":_flaxMemberParameters232}, getters: ["tickMarkRadius"], setters: [], contextMembers: [], superMembers: ["get:tickMarkRadius","getPreferredSize","paint"]} as const;
export interface RoundRangeSliderTickMarkShape {
readonly [_flaxDartTypeValue]: RoundRangeSliderTickMarkShape;

getPreferredSize(options: {sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; isEnabled?: boolean | undefined}): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; startThumbCenter: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; endThumbCenter: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; isEnabled?: boolean | undefined; textDirection: upstream7.TextDirection}): void;
get tickMarkRadius(): number | null;
}
export abstract class RoundRangeSliderTickMarkShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundRangeSliderTickMarkShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundRangeSliderTickMarkShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", readonly [], false];
constructor(options?: {tickMarkRadius?: number | null | undefined}) { super(_RoundRangeSliderTickMarkShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RoundRangeSliderTickMarkShape.prototype, _RoundRangeSliderTickMarkShapeProxy);
export namespace RoundRangeSliderTickMarkShape { export function implement(args: [options?: {tickMarkRadius?: number | null | undefined}], implementation: {}): RoundRangeSliderTickMarkShape {
return constructProxy(_RoundRangeSliderTickMarkShapeProxy, args, implementation) as RoundRangeSliderTickMarkShape; } }
_flaxBindInstanceType<RoundRangeSliderTickMarkShape, typeof RoundRangeSliderTickMarkShape>(RoundRangeSliderTickMarkShape, "flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", ["flax.core/sdk_material#type:RangeSliderTickMarkShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tickMarkRadius" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderTickMarkShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape";
