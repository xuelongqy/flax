// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [{"name":"bounds","required":true,"positional":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GradientTransform extends Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::GradientTransform": readonly [] }> { readonly __GradientTransform: unique symbol;
readonly [_flaxDartTypeValue]: GradientTransform;

transform(bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {textDirection?: upstream2.TextDirection | null | undefined}): upstream0.Matrix4 | null;
}
defineObject("flax.core/sdk_painting#type:GradientTransform", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:GradientTransform", "object", {"transform":_flaxMemberParameters0}, {}), []);
const _GradientTransformProxy = {type: "flax.core/sdk_painting#type:GradientTransform", parameters: _flaxMemberParameters1, constructors: {}, methods: {"transform":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _GradientTransformFactory { export function implement(args: [], implementation: {transform: ((bounds: upstream1.Rect, options?: { textDirection?: upstream2.TextDirection | null | undefined }) => Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null)}): GradientTransform {
return constructProxy(_GradientTransformProxy, args, implementation) as GradientTransform; } }
export const GradientTransform: typeof _GradientTransformFactory & _FlaxInstanceType<GradientTransform> & _FlaxDartType<GradientTransform, readonly ["class", "flax.core/sdk_painting#type:GradientTransform", readonly [], false]> = _flaxBindInstanceType<GradientTransform, typeof _GradientTransformFactory>(_GradientTransformFactory, "flax.core/sdk_painting#type:GradientTransform", ["dart:core::Object"]) as typeof _GradientTransformFactory & _FlaxInstanceType<GradientTransform> & _FlaxDartType<GradientTransform, readonly ["class", "flax.core/sdk_painting#type:GradientTransform", readonly [], false]>;
