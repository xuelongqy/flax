// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import { _flaxMemberParameters0, _flaxMemberParameters60, _flaxMemberParameters61 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageDescriptor extends Readonly<{ "__flaxBound:dart:ui::ImageDescriptor": readonly [] }> { readonly __ImageDescriptor: unique symbol;
readonly [_flaxDartTypeValue]: ImageDescriptor;

readonly width: number;
readonly height: number;
readonly bytesPerPixel: number;
dispose(): void;
instantiateCodec(options?: {targetFormat?: upstream3.TargetPixelFormat | undefined; targetHeight?: number | null | undefined; targetWidth?: number | null | undefined}): Promise<upstream2.Codec>;
}
defineObject("flax.core/sdk_dart_ui#type:ImageDescriptor", ["width","height","bytesPerPixel"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ImageDescriptor", "object", {"dispose":_flaxMemberParameters0,"instantiateCodec":_flaxMemberParameters60}, {}), []);
export namespace _ImageDescriptorFactory {
export function raw(buffer: Readonly<{ "__flaxBound:dart:ui::ImmutableBuffer": readonly [] }>, options: { width: number; height: number; rowBytes?: number | null | undefined; pixelFormat: upstream1.PixelFormat }): ImageDescriptor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ImageDescriptor", "raw", [{"name":"buffer","required":true,"positional":true},{"name":"width","required":true},{"name":"height","required":true},{"name":"rowBytes"},{"name":"pixelFormat","required":true}], [buffer], options) as ImageDescriptor;
}
}
const _ImageDescriptorProxy = {type: "flax.core/sdk_dart_ui#type:ImageDescriptor", parameters: _flaxMemberParameters0, constructors: {}, methods: {"dispose":_flaxMemberParameters0,"instantiateCodec":_flaxMemberParameters61}, getters: ["width","height","bytesPerPixel"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ImageDescriptorFactory { export function implement(args: [], implementation: {dispose: (() => void); instantiateCodec: ((options?: { targetWidth?: number | null | undefined; targetHeight?: number | null | undefined; targetFormat?: upstream3.TargetPixelFormat | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>); get width(): number; get height(): number; get bytesPerPixel(): number}): ImageDescriptor {
return constructProxy(_ImageDescriptorProxy, args, implementation) as ImageDescriptor; } }
export namespace _ImageDescriptorFactory { export function encoded(buffer: Readonly<{ "__flaxBound:dart:ui::ImmutableBuffer": readonly [] }>): Promise<ImageDescriptor> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:ImageDescriptor.encoded", [buffer]);
return _flaxResult as Promise<ImageDescriptor>;
} }
export const ImageDescriptor: typeof _ImageDescriptorFactory & _FlaxInstanceType<ImageDescriptor> & _FlaxDartType<ImageDescriptor, readonly ["class", "flax.core/sdk_dart_ui#type:ImageDescriptor", readonly [], false]> = _flaxBindInstanceType<ImageDescriptor, typeof _ImageDescriptorFactory>(_ImageDescriptorFactory, "flax.core/sdk_dart_ui#type:ImageDescriptor", ["dart:core::Object"]) as typeof _ImageDescriptorFactory & _FlaxInstanceType<ImageDescriptor> & _FlaxDartType<ImageDescriptor, readonly ["class", "flax.core/sdk_dart_ui#type:ImageDescriptor", readonly [], false]>;
