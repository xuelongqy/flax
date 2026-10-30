// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InteractiveInkFeature';
import '@flax/material-ui/_bindings/material_InteractiveInkFeature';
import type * as upstream1 from '@flax/material-ui/_bindings/material_InkFeature';
import '@flax/material-ui/_bindings/material_InkFeature';
import type * as upstream2 from '@flax/material-ui/_bindings/material_MaterialInkController';
import '@flax/material-ui/_bindings/material_MaterialInkController';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters247, _flaxMemberParameters4, _flaxMemberParameters171, _flaxMemberParameters168 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NoSplash extends Omit<upstream0.InteractiveInkFeature, _flaxOwnMembers0>, Omit<upstream1.InkFeature, _flaxOwnMembers0 | keyof upstream0.InteractiveInkFeature>, Readonly<{ "__flaxBound:package:material_ui/src/no_splash.dart::NoSplash": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeature": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/material.dart::InkFeature": readonly [] }> { readonly __NoSplash: unique symbol;
readonly [_flaxDartTypeValue]: NoSplash;

get color(): upstream4.Color;
get customBorder(): upstream5.ShapeBorder | null;
readonly controller: upstream2.MaterialInkController;
readonly referenceBox: upstream3.RenderBox;
readonly onRemoved: (() => void) | null;
confirm(): void;
cancel(): void;
paintInkCircle(options: {borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined; canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>; center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; clipCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>; radius: number; textDirection?: upstream12.TextDirection | null | undefined; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>}): void;
dispose(): void;
paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
set color(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set customBorder(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
defineObject("flax.material/material#type:NoSplash", ["color","customBorder","controller","referenceBox","onRemoved"], ["color","customBorder"], _flaxBindingMethods("flax.material/material#type:NoSplash", "object", {}, {}), [], undefined, "flax.material/material#type:InteractiveInkFeature");
export function _NoSplashFactory(options: { controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; onRemoved?: (() => void) | null | undefined }): NoSplash {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:NoSplash", "", [{"name":"controller","required":true},{"name":"referenceBox","required":true},{"name":"color","required":true},{"name":"onRemoved"}], [], options) as NoSplash;
}
const _NoSplashProxy = {type: "flax.material/material#type:NoSplash", parameters: _flaxMemberParameters247, constructors: {"": _flaxMemberParameters247}, methods: {"confirm":_flaxMemberParameters4,"cancel":_flaxMemberParameters4,"paintInkCircle":_flaxMemberParameters171,"dispose":_flaxMemberParameters4,"paintFeature":_flaxMemberParameters168,"toString":_flaxMemberParameters4}, getters: ["color","customBorder","controller","referenceBox","onRemoved"], setters: ["color","customBorder"], contextMembers: [], superMembers: ["get:color","get:customBorder","get:controller","get:referenceBox","get:onRemoved","set:color","set:customBorder","confirm","cancel","paintInkCircle","dispose","paintFeature","toString"]} as const;
export interface _NoSplashNative extends NoSplash {
readonly [_flaxDartTypeValue]: _NoSplashNative;

confirm(): void;
cancel(): void;
paintInkCircle(options: {canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>; transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>; paint: Readonly<{ "__flaxBound:dart:ui::Paint": readonly [] }>; center: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; radius: number; textDirection?: upstream12.TextDirection | null | undefined; customBorder?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined; clipCallback?: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>) | null | undefined}): void;
dispose(): void;
paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
get color(): upstream4.Color;
get customBorder(): upstream5.ShapeBorder | null;
get controller(): upstream2.MaterialInkController;
get referenceBox(): upstream3.RenderBox;
get onRemoved(): (() => void) | null;
set color(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>);
set customBorder(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class _NoSplashNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NoSplash>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NoSplash;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:NoSplash", readonly [], false];
constructor(options: {controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; onRemoved?: (() => void) | null | undefined}) { super(_NoSplashProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NoSplashNative.prototype, _NoSplashProxy);
export namespace _NoSplashFactory { export function implement(args: [options: {controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; onRemoved?: (() => void) | null | undefined}], implementation: {}): NoSplash {
return constructProxy(_NoSplashProxy, args, implementation) as NoSplash; } }
const _NoSplashBinding = _flaxProxyFactory(_NoSplashFactory, _NoSplashNative) as unknown as typeof _NoSplashFactory & (new(options: {controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; onRemoved?: (() => void) | null | undefined}) => _NoSplashNative);
export namespace _NoSplashFactory { export declare const splashFactory: upstream6.InteractiveInkFeatureFactory; }
_flaxDefineStaticGetters(_NoSplashFactory, "flax.material/material#read:NoSplash.", ["splashFactory"]);
export const NoSplash: typeof _NoSplashBinding & _FlaxInstanceType<NoSplash> & _FlaxDartType<NoSplash, readonly ["class", "flax.material/material#type:NoSplash", readonly [], false]> = _flaxBindInstanceType<NoSplash, typeof _NoSplashBinding>(_NoSplashBinding, "flax.material/material#type:NoSplash", ["flax.material/material#type:InteractiveInkFeature","flax.material/material#type:InkFeature","dart:core::Object"]) as typeof _NoSplashBinding & _FlaxInstanceType<NoSplash> & _FlaxDartType<NoSplash, readonly ["class", "flax.material/material#type:NoSplash", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "customBorder" | "controller" | "referenceBox" | "onRemoved" | "confirm" | "cancel" | "paintInkCircle" | "dispose" | "paintFeature" | "toString" | "__flaxBound:package:material_ui/src/no_splash.dart::NoSplash" | "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:material_ui/src/material.dart::InkFeature";
