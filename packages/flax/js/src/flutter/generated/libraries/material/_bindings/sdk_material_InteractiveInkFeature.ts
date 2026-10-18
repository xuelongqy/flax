// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"borderRadius","required":false,"positional":false},{"name":"canvas","required":true,"positional":false},{"name":"center","required":true,"positional":false},{"name":"clipCallback","required":false,"positional":false},{"name":"customBorder","required":false,"positional":false},{"name":"paint","required":true,"positional":false},{"name":"radius","required":true,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"transform","required":true,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"canvas","required":true,"positional":true},{"name":"transform","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InteractiveInkFeature extends Omit<upstream0.InkFeature, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [] }> { readonly __InteractiveInkFeature: unique symbol;
readonly [_flaxDartTypeValue]: InteractiveInkFeature;

}
defineObject("flax.core/sdk_material#type:InteractiveInkFeature", ["controller","referenceBox","onRemoved","color","customBorder"], ["color","customBorder"], _flaxBindingMethods("flax.core/sdk_material#type:InteractiveInkFeature", "object", {"confirm":_flaxMemberParameters0,"cancel":_flaxMemberParameters0,"paintInkCircle":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_material#type:InkFeature");
const _InteractiveInkFeatureProxy = {type: "flax.core/sdk_material#type:InteractiveInkFeature", parameters: [{"name":"controller","required":true,"positional":false},{"name":"referenceBox","required":true,"positional":false},{"name":"color","required":true,"positional":false},{"name":"customBorder","required":false,"positional":false},{"name":"onRemoved","required":false,"positional":false}], constructors: {"":[{"name":"controller","required":true,"positional":false},{"name":"referenceBox","required":true,"positional":false},{"name":"color","required":true,"positional":false},{"name":"customBorder","required":false,"positional":false},{"name":"onRemoved","required":false,"positional":false}]}, methods: {"dispose":_flaxMemberParameters0,"paintFeature":_flaxMemberParameters2,"toString":_flaxMemberParameters0,"confirm":_flaxMemberParameters0,"cancel":_flaxMemberParameters0,"paintInkCircle":_flaxMemberParameters1}, getters: ["color","customBorder","controller","referenceBox","onRemoved"], setters: ["color","customBorder"], contextMembers: [], superMembers: ["get:color","get:customBorder","get:controller","get:referenceBox","get:onRemoved","set:color","set:customBorder","dispose","toString","confirm","cancel","paintInkCircle"]} as const;
export interface InteractiveInkFeature {
readonly [_flaxDartTypeValue]: InteractiveInkFeature;

dispose(): void;
toString(): string;
confirm(): void;
cancel(): void;
paintInkCircle(options: {canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>; paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>; center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; radius: number; textDirection?: upstream11.TextDirection | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined; clipCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined}): void;
get color(): upstream3.Color;
get customBorder(): upstream4.ShapeBorder | null;
get controller(): upstream1.MaterialInkController;
get referenceBox(): upstream2.RenderBox;
get onRemoved(): (() => void) | null;
set color(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set customBorder(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class InteractiveInkFeature extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InteractiveInkFeature>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InteractiveInkFeature;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InteractiveInkFeature", readonly [], false];
constructor(options: {controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; onRemoved?: (() => void) | null | undefined}) { super(_InteractiveInkFeatureProxy, Array.from(arguments)); }
abstract paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
}
_flaxDefineProxyBase(InteractiveInkFeature.prototype, _InteractiveInkFeatureProxy);
export namespace InteractiveInkFeature { export function implement(args: [options: {controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; onRemoved?: (() => void) | null | undefined}], implementation: {paintFeature: ((canvas: upstream5.Canvas, transform: upstream6.Matrix4) => void)}): InteractiveInkFeature {
return constructProxy(_InteractiveInkFeatureProxy, args, implementation) as InteractiveInkFeature; } }
_flaxBindInstanceType<InteractiveInkFeature, typeof InteractiveInkFeature>(InteractiveInkFeature, "flax.core/sdk_material#type:InteractiveInkFeature", ["flax.core/sdk_material#type:InkFeature","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "controller" | "referenceBox" | "onRemoved" | "color" | "customBorder" | "dispose" | "paintFeature" | "toString" | "confirm" | "cancel" | "paintInkCircle" | "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
