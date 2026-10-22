// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import { _flaxMemberParameters190 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
function _flaxTopLevel_decodeImageFromPixels(pixels: globalThis.Uint8Array, width: number, height: number, format: upstream0.PixelFormat, callback: ((result: upstream1.Image) => void), options: { allowUpscaling?: boolean | undefined; rowBytes?: number | null | undefined; targetFormat?: upstream2.TargetPixelFormat | undefined; targetHeight?: number | null | undefined; targetWidth?: number | null | undefined } = {}): void {
if (arguments.length > 6) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["allowUpscaling","rowBytes","targetFormat","targetHeight","targetWidth"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:decodeImageFromPixels", [pixels, width, height, format, callback, options.allowUpscaling, options.rowBytes, options.targetFormat, options.targetHeight, options.targetWidth], _flaxMemberParameters190);
}
export { _flaxTopLevel_decodeImageFromPixels as decodeImageFromPixels };
