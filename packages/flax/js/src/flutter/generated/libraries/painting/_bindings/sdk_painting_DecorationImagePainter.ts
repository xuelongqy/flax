// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import { _flaxMemberParameters49, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DecorationImagePainter extends Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImagePainter": readonly [] }> { readonly __DecorationImagePainter: unique symbol;
readonly [_flaxDartTypeValue]: DecorationImagePainter;

paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, clipPath: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }> | null, configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, options?: {blend?: number | undefined; blendMode?: upstream4.BlendMode | undefined}): void;
dispose(): void;
}
defineObject("flax.core/sdk_painting#type:DecorationImagePainter", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:DecorationImagePainter", "object", {"paint":_flaxMemberParameters49,"dispose":_flaxMemberParameters2}, {}), []);
const _DecorationImagePainterProxy = {type: "flax.core/sdk_painting#type:DecorationImagePainter", parameters: _flaxMemberParameters2, constructors: {}, methods: {"paint":_flaxMemberParameters49,"dispose":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _DecorationImagePainterFactory { export function implement(args: [], implementation: {paint: ((canvas: upstream0.Canvas, rect: upstream1.Rect, clipPath: upstream2.Path | null, configuration: upstream3.ImageConfiguration, options?: { blend?: number | undefined; blendMode?: upstream4.BlendMode | undefined }) => void); dispose: (() => void)}): DecorationImagePainter {
return constructProxy(_DecorationImagePainterProxy, args, implementation) as DecorationImagePainter; } }
export const DecorationImagePainter: typeof _DecorationImagePainterFactory & _FlaxInstanceType<DecorationImagePainter> & _FlaxDartType<DecorationImagePainter, readonly ["class", "flax.core/sdk_painting#type:DecorationImagePainter", readonly [], false]> = _flaxBindInstanceType<DecorationImagePainter, typeof _DecorationImagePainterFactory>(_DecorationImagePainterFactory, "flax.core/sdk_painting#type:DecorationImagePainter", ["dart:core::Object"]) as typeof _DecorationImagePainterFactory & _FlaxInstanceType<DecorationImagePainter> & _FlaxDartType<DecorationImagePainter, readonly ["class", "flax.core/sdk_painting#type:DecorationImagePainter", readonly [], false]>;
