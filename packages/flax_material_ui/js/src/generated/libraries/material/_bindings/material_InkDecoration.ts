// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InkFeature';
import '@flax/material-ui/_bindings/material_InkFeature';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream3 from '@flax/material-ui/_bindings/material_MaterialInkController';
import '@flax/material-ui/_bindings/material_MaterialInkController';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters165, _flaxMemberParameters4, _flaxMemberParameters166 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InkDecoration extends Omit<upstream0.InkFeature, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/ink_decoration.dart::InkDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/material.dart::InkFeature": readonly [] }> { readonly __InkDecoration: unique symbol;
readonly [_flaxDartTypeValue]: InkDecoration;

readonly controller: upstream3.MaterialInkController;
readonly referenceBox: upstream4.RenderBox;
readonly onRemoved: (() => void) | null;
get decoration(): upstream1.Decoration | null;
get isVisible(): boolean;
get configuration(): upstream2.ImageConfiguration;
dispose(): void;
paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
set decoration(value: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set isVisible(value: boolean);
set configuration(value: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>);
}
defineObject("flax.material/material#type:InkDecoration", ["controller","referenceBox","onRemoved","decoration","isVisible","configuration"], ["decoration","isVisible","configuration"], _flaxBindingMethods("flax.material/material#type:InkDecoration", "object", {}, {}), [], undefined, "flax.material/material#type:InkFeature");
export function _InkDecorationFactory(options: { decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined }): InkDecoration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:InkDecoration", "", [{"name":"decoration","required":true},{"name":"isVisible"},{"name":"configuration","required":true},{"name":"controller","required":true},{"name":"referenceBox","required":true},{"name":"onRemoved"}], [], options) as InkDecoration;
}
const _InkDecorationProxy = {type: "flax.material/material#type:InkDecoration", parameters: _flaxMemberParameters165, constructors: {"": _flaxMemberParameters165}, methods: {"dispose":_flaxMemberParameters4,"paintFeature":_flaxMemberParameters166,"toString":_flaxMemberParameters4}, getters: ["decoration","isVisible","configuration","controller","referenceBox","onRemoved"], setters: ["decoration","isVisible","configuration"], contextMembers: [], superMembers: ["get:decoration","get:isVisible","get:configuration","get:controller","get:referenceBox","get:onRemoved","set:decoration","set:isVisible","set:configuration","dispose","paintFeature","toString"]} as const;
export interface _InkDecorationNative extends InkDecoration {
readonly [_flaxDartTypeValue]: _InkDecorationNative;

dispose(): void;
paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
toString(): string;
get decoration(): upstream1.Decoration | null;
get isVisible(): boolean;
get configuration(): upstream2.ImageConfiguration;
get controller(): upstream3.MaterialInkController;
get referenceBox(): upstream4.RenderBox;
get onRemoved(): (() => void) | null;
set decoration(value: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set isVisible(value: boolean);
set configuration(value: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>);
}
export abstract class _InkDecorationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InkDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:InkDecoration", readonly [], false];
constructor(options: {decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}) { super(_InkDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_InkDecorationNative.prototype, _InkDecorationProxy);
export namespace _InkDecorationFactory { export function implement(args: [options: {decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}], implementation: {}): InkDecoration {
return constructProxy(_InkDecorationProxy, args, implementation) as InkDecoration; } }
const _InkDecorationBinding = _flaxProxyFactory(_InkDecorationFactory, _InkDecorationNative) as unknown as typeof _InkDecorationFactory & (new(options: {decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}) => _InkDecorationNative);
export const InkDecoration: typeof _InkDecorationBinding & _FlaxInstanceType<InkDecoration> & _FlaxDartType<InkDecoration, readonly ["class", "flax.material/material#type:InkDecoration", readonly [], false]> = _flaxBindInstanceType<InkDecoration, typeof _InkDecorationBinding>(_InkDecorationBinding, "flax.material/material#type:InkDecoration", ["flax.material/material#type:InkFeature","dart:core::Object"]) as typeof _InkDecorationBinding & _FlaxInstanceType<InkDecoration> & _FlaxDartType<InkDecoration, readonly ["class", "flax.material/material#type:InkDecoration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "controller" | "referenceBox" | "onRemoved" | "decoration" | "isVisible" | "configuration" | "dispose" | "paintFeature" | "toString" | "__flaxBound:package:material_ui/src/ink_decoration.dart::InkDecoration" | "__flaxBound:package:material_ui/src/material.dart::InkFeature";
