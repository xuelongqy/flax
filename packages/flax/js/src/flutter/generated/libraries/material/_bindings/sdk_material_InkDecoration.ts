// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
const _flaxMemberParameters0 = [{"name":"decoration","required":true},{"name":"isVisible"},{"name":"configuration","required":true},{"name":"controller","required":true},{"name":"referenceBox","required":true},{"name":"onRemoved"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"canvas","required":true,"positional":true},{"name":"transform","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InkDecoration extends Omit<upstream0.InkFeature, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/ink_decoration.dart::InkDecoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [] }> { readonly __InkDecoration: unique symbol;
readonly [_flaxDartTypeValue]: InkDecoration;

}
defineObject("flax.core/sdk_material#type:InkDecoration", ["controller","referenceBox","onRemoved","decoration","isVisible","configuration"], ["decoration","isVisible","configuration"], _flaxBindingMethods("flax.core/sdk_material#type:InkDecoration", "object", {}, {}), [], undefined, "flax.core/sdk_material#type:InkFeature");
const _InkDecorationProxy = {type: "flax.core/sdk_material#type:InkDecoration", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"dispose":_flaxMemberParameters1,"paintFeature":_flaxMemberParameters2,"toString":_flaxMemberParameters1}, getters: ["decoration","isVisible","configuration","controller","referenceBox","onRemoved"], setters: ["decoration","isVisible","configuration"], contextMembers: [], superMembers: ["get:decoration","get:isVisible","get:configuration","get:controller","get:referenceBox","get:onRemoved","set:decoration","set:isVisible","set:configuration","dispose","paintFeature","toString"]} as const;
export interface InkDecoration {
readonly [_flaxDartTypeValue]: InkDecoration;

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
export abstract class InkDecoration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InkDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InkDecoration", readonly [], false];
constructor(options: {decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}) { super(_InkDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(InkDecoration.prototype, _InkDecorationProxy);
export namespace InkDecoration { export function implement(args: [options: {decoration: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null; isVisible?: boolean | undefined; configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; controller: Readonly<{ "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}], implementation: {}): InkDecoration {
return constructProxy(_InkDecorationProxy, args, implementation) as InkDecoration; } }
_flaxBindInstanceType<InkDecoration, typeof InkDecoration>(InkDecoration, "flax.core/sdk_material#type:InkDecoration", ["flax.core/sdk_material#type:InkFeature","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "controller" | "referenceBox" | "onRemoved" | "decoration" | "isVisible" | "configuration" | "dispose" | "paintFeature" | "toString" | "__flaxBound:package:flutter/src/material/ink_decoration.dart::InkDecoration" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
