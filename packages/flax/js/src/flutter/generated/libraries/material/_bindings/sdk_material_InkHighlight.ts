// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeature';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters2, _flaxMemberParameters149, _flaxMemberParameters150, _flaxMemberParameters147 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InkHighlight extends Omit<upstream0.InteractiveInkFeature, _flaxOwnMembers0>, Omit<upstream1.InkFeature, _flaxOwnMembers0 | keyof upstream0.InteractiveInkFeature>, Readonly<{ "__flaxBound:package:flutter/src/material/ink_highlight.dart::InkHighlight": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [] }> { readonly __InkHighlight: unique symbol;
readonly [_flaxDartTypeValue]: InkHighlight;

}
defineObject("flax.core/sdk_material#type:InkHighlight", ["color","customBorder","controller","referenceBox","onRemoved","active"], ["color","customBorder"], _flaxBindingMethods("flax.core/sdk_material#type:InkHighlight", "object", {"activate":_flaxMemberParameters2,"deactivate":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_material#type:InteractiveInkFeature");
const _InkHighlightProxy = {type: "flax.core/sdk_material#type:InkHighlight", parameters: _flaxMemberParameters149, constructors: {"": _flaxMemberParameters149}, methods: {"confirm":_flaxMemberParameters2,"cancel":_flaxMemberParameters2,"paintInkCircle":_flaxMemberParameters150,"dispose":_flaxMemberParameters2,"paintFeature":_flaxMemberParameters147,"toString":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"deactivate":_flaxMemberParameters2}, getters: ["active","color","customBorder","controller","referenceBox","onRemoved"], setters: ["color","customBorder"], contextMembers: [], superMembers: ["get:active","get:color","get:customBorder","get:controller","get:referenceBox","get:onRemoved","set:color","set:customBorder","confirm","cancel","paintInkCircle","dispose","paintFeature","toString","activate","deactivate"]} as const;
export interface InkHighlight {
readonly [_flaxDartTypeValue]: InkHighlight;

confirm(): void;
cancel(): void;
paintInkCircle(options: {canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>; paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>; center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; radius: number; textDirection?: upstream5.TextDirection | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined; clipCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined}): void;
dispose(): void;
paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
activate(): void;
deactivate(): void;
get active(): boolean;
get color(): upstream4.Color;
get customBorder(): upstream8.ShapeBorder | null;
get controller(): upstream2.MaterialInkController;
get referenceBox(): upstream3.RenderBox;
get onRemoved(): (() => void) | null;
set color(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set customBorder(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class InkHighlight extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkHighlight>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InkHighlight;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InkHighlight", readonly [], false];
constructor(options: {controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; textDirection: upstream5.TextDirection; shape?: upstream6.BoxShape | undefined; radius?: number | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; rectCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined; onRemoved?: (() => void) | null | undefined; fadeDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration] }> | undefined}) { super(_InkHighlightProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(InkHighlight.prototype, _InkHighlightProxy);
export namespace InkHighlight { export function implement(args: [options: {controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; textDirection: upstream5.TextDirection; shape?: upstream6.BoxShape | undefined; radius?: number | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; rectCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined; onRemoved?: (() => void) | null | undefined; fadeDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration] }> | undefined}], implementation: {}): InkHighlight {
return constructProxy(_InkHighlightProxy, args, implementation) as InkHighlight; } }
_flaxBindInstanceType<InkHighlight, typeof InkHighlight>(InkHighlight, "flax.core/sdk_material#type:InkHighlight", ["flax.core/sdk_material#type:InteractiveInkFeature","flax.core/sdk_material#type:InkFeature","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "customBorder" | "controller" | "referenceBox" | "onRemoved" | "active" | "confirm" | "cancel" | "paintInkCircle" | "dispose" | "paintFeature" | "toString" | "activate" | "deactivate" | "__flaxBound:package:flutter/src/material/ink_highlight.dart::InkHighlight" | "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
