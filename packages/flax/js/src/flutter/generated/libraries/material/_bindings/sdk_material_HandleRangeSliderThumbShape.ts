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
import { _flaxMemberParameters144, _flaxMemberParameters2, _flaxMemberParameters145 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HandleRangeSliderThumbShape extends Omit<upstream0.RangeSliderThumbShape, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::HandleRangeSliderThumbShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [] }> { readonly __HandleRangeSliderThumbShape: unique symbol;
readonly [_flaxDartTypeValue]: HandleRangeSliderThumbShape;

}
defineObject("flax.core/sdk_material#type:HandleRangeSliderThumbShape", [], [], _flaxBindingMethods("flax.core/sdk_material#type:HandleRangeSliderThumbShape", "object", {"paint":_flaxMemberParameters144}, {}), [], undefined, "flax.core/sdk_material#type:RangeSliderThumbShape");
const _HandleRangeSliderThumbShapeProxy = {type: "flax.core/sdk_material#type:HandleRangeSliderThumbShape", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getPreferredSize":_flaxMemberParameters145,"paint":_flaxMemberParameters144}, getters: [], setters: [], contextMembers: [], superMembers: ["getPreferredSize","paint"]} as const;
export interface HandleRangeSliderThumbShape {
readonly [_flaxDartTypeValue]: HandleRangeSliderThumbShape;

getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream1.Size;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {activationAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; isDiscrete?: boolean | undefined; isEnabled?: boolean | undefined; isOnTop?: boolean | null | undefined; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textDirection?: upstream6.TextDirection | null | undefined; thumb?: upstream7.Thumb | null | undefined; isPressed?: boolean | null | undefined}): void;
}
export abstract class HandleRangeSliderThumbShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HandleRangeSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HandleRangeSliderThumbShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:HandleRangeSliderThumbShape", readonly [], false];
constructor() { super(_HandleRangeSliderThumbShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HandleRangeSliderThumbShape.prototype, _HandleRangeSliderThumbShapeProxy);
export namespace HandleRangeSliderThumbShape { export function implement(args: [], implementation: {}): HandleRangeSliderThumbShape {
return constructProxy(_HandleRangeSliderThumbShapeProxy, args, implementation) as HandleRangeSliderThumbShape; } }
_flaxBindInstanceType<HandleRangeSliderThumbShape, typeof HandleRangeSliderThumbShape>(HandleRangeSliderThumbShape, "flax.core/sdk_material#type:HandleRangeSliderThumbShape", ["flax.core/sdk_material#type:RangeSliderThumbShape","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::HandleRangeSliderThumbShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape";
