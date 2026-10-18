// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
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
const _flaxMemberParameters0 = [{"name":"isEnabled","required":true,"positional":false},{"name":"sliderTheme","required":true,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true},{"name":"center","required":true,"positional":true},{"name":"enableAnimation","required":true,"positional":false},{"name":"isEnabled","required":true,"positional":false},{"name":"parentBox","required":true,"positional":false},{"name":"sliderTheme","required":true,"positional":false},{"name":"textDirection","required":true,"positional":false},{"name":"thumbCenter","required":true,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundSliderTickMarkShape extends Omit<upstream0.SliderTickMarkShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderTickMarkShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape": readonly [] }> { readonly __RoundSliderTickMarkShape: unique symbol;
readonly [_flaxDartTypeValue]: RoundSliderTickMarkShape;

}
defineObject("flax.core/sdk_material#type:RoundSliderTickMarkShape", ["tickMarkRadius"], [], _flaxBindingMethods("flax.core/sdk_material#type:RoundSliderTickMarkShape", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:SliderTickMarkShape");
const _RoundSliderTickMarkShapeProxy = {type: "flax.core/sdk_material#type:RoundSliderTickMarkShape", parameters: [{"name":"tickMarkRadius","required":false,"positional":false}], constructors: {"":[{"name":"tickMarkRadius","required":false,"positional":false}]}, methods: {"getPreferredSize":_flaxMemberParameters0,"paint":_flaxMemberParameters1}, getters: ["tickMarkRadius"], setters: [], contextMembers: [], superMembers: ["get:tickMarkRadius","getPreferredSize","paint"]} as const;
export interface RoundSliderTickMarkShape {
readonly [_flaxDartTypeValue]: RoundSliderTickMarkShape;

getPreferredSize(options: {sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; isEnabled: boolean}): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; textDirection: upstream7.TextDirection; thumbCenter: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; isEnabled: boolean}): void;
get tickMarkRadius(): number | null;
}
export abstract class RoundSliderTickMarkShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundSliderTickMarkShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundSliderTickMarkShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundSliderTickMarkShape", readonly [], false];
constructor(options?: {tickMarkRadius?: number | null | undefined}) { super(_RoundSliderTickMarkShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RoundSliderTickMarkShape.prototype, _RoundSliderTickMarkShapeProxy);
export namespace RoundSliderTickMarkShape { export function implement(args: [options?: {tickMarkRadius?: number | null | undefined}], implementation: {}): RoundSliderTickMarkShape {
return constructProxy(_RoundSliderTickMarkShapeProxy, args, implementation) as RoundSliderTickMarkShape; } }
_flaxBindInstanceType<RoundSliderTickMarkShape, typeof RoundSliderTickMarkShape>(RoundSliderTickMarkShape, "flax.core/sdk_material#type:RoundSliderTickMarkShape", ["flax.core/sdk_material#type:SliderTickMarkShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tickMarkRadius" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderTickMarkShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape";
