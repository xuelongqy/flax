// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_Thumb';
import '@flax/flutter/material/_bindings/sdk_material_Thumb';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true},{"name":"center","required":true,"positional":true},{"name":"activationAnimation","required":true,"positional":false},{"name":"enableAnimation","required":true,"positional":false},{"name":"isDiscrete","required":false,"positional":false},{"name":"isEnabled","required":false,"positional":false},{"name":"isOnTop","required":false,"positional":false},{"name":"isPressed","required":false,"positional":false},{"name":"sliderTheme","required":true,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"thumb","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"isEnabled","required":true,"positional":true},{"name":"isDiscrete","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundRangeSliderThumbShape extends Omit<upstream0.RangeSliderThumbShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderThumbShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [] }> { readonly __RoundRangeSliderThumbShape: unique symbol;
readonly [_flaxDartTypeValue]: RoundRangeSliderThumbShape;

}
defineObject("flax.core/sdk_material#type:RoundRangeSliderThumbShape", ["enabledThumbRadius","disabledThumbRadius","elevation","pressedElevation"], [], _flaxBindingMethods("flax.core/sdk_material#type:RoundRangeSliderThumbShape", "object", {"paint":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_material#type:RangeSliderThumbShape");
const _RoundRangeSliderThumbShapeProxy = {type: "flax.core/sdk_material#type:RoundRangeSliderThumbShape", parameters: [{"name":"enabledThumbRadius","required":false,"positional":false},{"name":"disabledThumbRadius","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"pressedElevation","required":false,"positional":false}], constructors: {"":[{"name":"enabledThumbRadius","required":false,"positional":false},{"name":"disabledThumbRadius","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"pressedElevation","required":false,"positional":false}]}, methods: {"getPreferredSize":_flaxMemberParameters1,"paint":_flaxMemberParameters0}, getters: ["enabledThumbRadius","disabledThumbRadius","elevation","pressedElevation"], setters: [], contextMembers: [], superMembers: ["get:enabledThumbRadius","get:disabledThumbRadius","get:elevation","get:pressedElevation","getPreferredSize","paint"]} as const;
export interface RoundRangeSliderThumbShape {
readonly [_flaxDartTypeValue]: RoundRangeSliderThumbShape;

getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {activationAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; isDiscrete?: boolean | undefined; isEnabled?: boolean | undefined; isOnTop?: boolean | null | undefined; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textDirection?: upstream6.TextDirection | null | undefined; thumb?: upstream7.Thumb | null | undefined; isPressed?: boolean | null | undefined}): void;
get enabledThumbRadius(): number;
get disabledThumbRadius(): number | null;
get elevation(): number;
get pressedElevation(): number;
}
export abstract class RoundRangeSliderThumbShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundRangeSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RoundRangeSliderThumbShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderThumbShape", readonly [], false];
constructor(options?: {enabledThumbRadius?: number | undefined; disabledThumbRadius?: number | null | undefined; elevation?: number | undefined; pressedElevation?: number | undefined}) { super(_RoundRangeSliderThumbShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RoundRangeSliderThumbShape.prototype, _RoundRangeSliderThumbShapeProxy);
export namespace RoundRangeSliderThumbShape { export function implement(args: [options?: {enabledThumbRadius?: number | undefined; disabledThumbRadius?: number | null | undefined; elevation?: number | undefined; pressedElevation?: number | undefined}], implementation: {}): RoundRangeSliderThumbShape {
return constructProxy(_RoundRangeSliderThumbShapeProxy, args, implementation) as RoundRangeSliderThumbShape; } }
_flaxBindInstanceType<RoundRangeSliderThumbShape, typeof RoundRangeSliderThumbShape>(RoundRangeSliderThumbShape, "flax.core/sdk_material#type:RoundRangeSliderThumbShape", ["flax.core/sdk_material#type:RangeSliderThumbShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabledThumbRadius" | "disabledThumbRadius" | "elevation" | "pressedElevation" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderThumbShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape";
