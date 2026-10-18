// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionUtils extends Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionUtils": readonly [] }> { readonly __SelectionUtils: unique symbol;
readonly [_flaxDartTypeValue]: SelectionUtils;

}
defineObject("flax.core/sdk_rendering#type:SelectionUtils", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionUtils", "object", {}, {}), []);
export namespace _SelectionUtilsFactory { export function getResultBasedOnRect(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream0.SelectionResult {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:SelectionUtils.getResultBasedOnRect", [targetRect, point]);
return _flaxResult as upstream0.SelectionResult;
} }
export namespace _SelectionUtilsFactory { export function adjustDragOffset(targetRect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: { direction?: upstream3.TextDirection | undefined } = {}): upstream2.Offset {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["direction"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:SelectionUtils.adjustDragOffset", [targetRect, point, options.direction]);
return _flaxResult as upstream2.Offset;
} }
export const SelectionUtils: typeof _SelectionUtilsFactory & _FlaxInstanceType<SelectionUtils> & _FlaxDartType<SelectionUtils, readonly ["class", "flax.core/sdk_rendering#type:SelectionUtils", readonly [], false]> = _flaxBindInstanceType<SelectionUtils, typeof _SelectionUtilsFactory>(_SelectionUtilsFactory, "flax.core/sdk_rendering#type:SelectionUtils", ["dart:core::Object"]) as typeof _SelectionUtilsFactory & _FlaxInstanceType<SelectionUtils> & _FlaxDartType<SelectionUtils, readonly ["class", "flax.core/sdk_rendering#type:SelectionUtils", readonly [], false]>;
