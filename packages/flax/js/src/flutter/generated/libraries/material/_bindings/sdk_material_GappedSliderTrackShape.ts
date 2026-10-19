// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_BaseSliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_BaseSliderTrackShape';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true},{"name":"offset","required":true,"positional":true},{"name":"additionalActiveTrackHeight"},{"name":"enableAnimation","required":true},{"name":"isDiscrete"},{"name":"isEnabled"},{"name":"parentBox","required":true},{"name":"secondaryOffset"},{"name":"sliderTheme","required":true},{"name":"textDirection","required":true},{"name":"thumbCenter","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"isDiscrete"},{"name":"isEnabled"},{"name":"offset"},{"name":"parentBox","required":true},{"name":"sliderTheme","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GappedSliderTrackShape extends Omit<upstream0.SliderTrackShape, _flaxOwnMembers0>, Omit<upstream1.BaseSliderTrackShape, _flaxOwnMembers0 | keyof upstream0.SliderTrackShape>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::GappedSliderTrackShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/slider_parts.dart::BaseSliderTrackShape": readonly [] }> { readonly __GappedSliderTrackShape: unique symbol;
readonly [_flaxDartTypeValue]: GappedSliderTrackShape;

}
defineObject("flax.core/sdk_material#type:GappedSliderTrackShape", ["isRounded"], [], _flaxBindingMethods("flax.core/sdk_material#type:GappedSliderTrackShape", "object", {"paint":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_material#type:BaseSliderTrackShape");
const _GappedSliderTrackShapeProxy = {type: "flax.core/sdk_material#type:GappedSliderTrackShape", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getPreferredRect":_flaxMemberParameters2,"paint":_flaxMemberParameters0}, getters: ["isRounded"], setters: [], contextMembers: [], superMembers: ["get:isRounded","getPreferredRect","paint"]} as const;
export interface GappedSliderTrackShape {
readonly [_flaxDartTypeValue]: GappedSliderTrackShape;

getPreferredRect(options: {parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; isEnabled?: boolean | undefined; isDiscrete?: boolean | undefined}): upstream2.Rect;
paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {parentBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; sliderTheme: Readonly<{ "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; enableAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; textDirection: upstream8.TextDirection; thumbCenter: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryOffset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; isDiscrete?: boolean | undefined; isEnabled?: boolean | undefined; additionalActiveTrackHeight?: number | undefined}): void;
get isRounded(): boolean;
}
export abstract class GappedSliderTrackShape extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GappedSliderTrackShape>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GappedSliderTrackShape;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:GappedSliderTrackShape", readonly [], false];
constructor() { super(_GappedSliderTrackShapeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GappedSliderTrackShape.prototype, _GappedSliderTrackShapeProxy);
export namespace GappedSliderTrackShape { export function implement(args: [], implementation: {}): GappedSliderTrackShape {
return constructProxy(_GappedSliderTrackShapeProxy, args, implementation) as GappedSliderTrackShape; } }
_flaxBindInstanceType<GappedSliderTrackShape, typeof GappedSliderTrackShape>(GappedSliderTrackShape, "flax.core/sdk_material#type:GappedSliderTrackShape", ["flax.core/sdk_material#type:SliderTrackShape","dart:core::Object","flax.core/sdk_material#type:BaseSliderTrackShape"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isRounded" | "getPreferredRect" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::GappedSliderTrackShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::BaseSliderTrackShape";
