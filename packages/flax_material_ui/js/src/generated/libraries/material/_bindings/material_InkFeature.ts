// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_MaterialInkController';
import '@flax/material-ui/_bindings/material_MaterialInkController';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters2, _flaxMemberParameters149, _flaxMemberParameters150 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InkFeature extends Readonly<{ "__flaxBound:package:material_ui/src/material.dart::InkFeature": readonly [] }> { readonly __InkFeature: unique symbol;
readonly [_flaxDartTypeValue]: InkFeature;

}
defineObject("flax.material/material#type:InkFeature", ["controller","referenceBox","onRemoved"], [], _flaxBindingMethods("flax.material/material#type:InkFeature", "object", {"dispose":_flaxMemberParameters2,"paintFeature":_flaxMemberParameters149,"toString":_flaxMemberParameters2}, {}), []);
const _InkFeatureProxy = {type: "flax.material/material#type:InkFeature", parameters: _flaxMemberParameters150, constructors: {"": _flaxMemberParameters150}, methods: {"dispose":_flaxMemberParameters2,"paintFeature":_flaxMemberParameters149,"toString":_flaxMemberParameters2}, getters: ["controller","referenceBox","onRemoved"], setters: [], contextMembers: [], superMembers: ["get:controller","get:referenceBox","get:onRemoved","dispose","toString"]} as const;
export interface InkFeature {
readonly [_flaxDartTypeValue]: InkFeature;

dispose(): void;
toString(): string;
get controller(): upstream0.MaterialInkController;
get referenceBox(): upstream1.RenderBox;
get onRemoved(): (() => void) | null;
}
export abstract class InkFeature extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkFeature>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InkFeature;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:InkFeature", readonly [], false];
constructor(options: {controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}) { super(_InkFeatureProxy, Array.from(arguments)); }
abstract paintFeature(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
}
_flaxDefineProxyBase(InkFeature.prototype, _InkFeatureProxy);
export namespace InkFeature { export function implement(args: [options: {controller: Readonly<{ "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [] }>; referenceBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onRemoved?: (() => void) | null | undefined}], implementation: {paintFeature: ((canvas: upstream2.Canvas, transform: upstream3.Matrix4) => void)}): InkFeature {
return constructProxy(_InkFeatureProxy, args, implementation) as InkFeature; } }
_flaxBindInstanceType<InkFeature, typeof InkFeature>(InkFeature, "flax.material/material#type:InkFeature", ["dart:core::Object"]);
