// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ResizeImagePolicy';
import '@flax/flutter/painting/_bindings/sdk_painting_ResizeImagePolicy';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
const _flaxMemberParameters0 = [{"name":"configuration","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"configuration","required":true},{"name":"handleError"}] as const;
const _flaxMemberParameters2 = [{"name":"configuration","required":true,"positional":true},{"name":"stream","required":true,"positional":true},{"name":"key","required":true,"positional":true},{"name":"handleError","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"cache"},{"name":"configuration"}] as const;
const _flaxMemberParameters4 = [{"name":"key","required":true,"positional":true},{"name":"decode","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [] as const;
const _flaxMemberParameters6 = [{"name":"imageProvider","required":true,"positional":true},{"name":"width"},{"name":"height"},{"name":"policy"},{"name":"allowUpscaling"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ResizeImage extends Omit<upstream0.ImageProvider<upstream1.ResizeImageKey>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImage": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [upstream1.ResizeImageKey] }> { readonly __ResizeImage: unique symbol;
readonly [_flaxDartTypeValue]: ResizeImage;

}
defineObject("flax.core/sdk_painting#type:ResizeImage", ["imageProvider","width","height","policy","allowUpscaling"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ResizeImage", "object", {"resolve":_flaxMemberParameters0,"createStream":_flaxMemberParameters0,"obtainCacheStatus":_flaxMemberParameters1,"resolveStreamForKey":_flaxMemberParameters2,"evict":_flaxMemberParameters3,"obtainKey":_flaxMemberParameters0,"loadBuffer":_flaxMemberParameters4,"loadImage":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, {}), []);
const _ResizeImageProxy = {type: "flax.core/sdk_painting#type:ResizeImage", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"createStream":_flaxMemberParameters0,"obtainCacheStatus":_flaxMemberParameters1,"resolveStreamForKey":_flaxMemberParameters2,"evict":_flaxMemberParameters3,"obtainKey":_flaxMemberParameters0,"loadBuffer":_flaxMemberParameters4,"loadImage":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, getters: ["imageProvider","width","height","policy","allowUpscaling"], setters: [], contextMembers: [], superMembers: ["get:imageProvider","get:width","get:height","get:policy","get:allowUpscaling","createStream","obtainCacheStatus","resolveStreamForKey","evict","obtainKey","loadBuffer","loadImage","toString"]} as const;
export interface ResizeImage {
readonly [_flaxDartTypeValue]: ResizeImage;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream3.ImageStream;

createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream3.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void) | null | undefined}): Promise<upstream5.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [] }>, handleError: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<upstream1.ResizeImageKey>;
loadBuffer(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [] }>, decode: ((buffer: upstream10.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream8.ImageStreamCompleter;
loadImage(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImageKey": readonly [] }>, decode: ((buffer: upstream10.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream11.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream8.ImageStreamCompleter;
toString(): string;
get imageProvider(): upstream0.ImageProvider<any>;
get width(): number | null;
get height(): number | null;
get policy(): upstream2.ResizeImagePolicy;
get allowUpscaling(): boolean;
}
export abstract class ResizeImage extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ResizeImage>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ResizeImage;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ResizeImage", readonly [], false];
constructor(imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>, options?: {width?: number | null | undefined; height?: number | null | undefined; policy?: upstream2.ResizeImagePolicy | undefined; allowUpscaling?: boolean | undefined}) { super(_ResizeImageProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ResizeImage.prototype, _ResizeImageProxy);
export namespace ResizeImage { export function implement(args: [imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>, options?: {width?: number | null | undefined; height?: number | null | undefined; policy?: upstream2.ResizeImagePolicy | undefined; allowUpscaling?: boolean | undefined}], implementation: {}): ResizeImage {
return constructProxy(_ResizeImageProxy, args, implementation) as ResizeImage; } }
export namespace ResizeImage { export function resizeIfNeeded(cacheWidth: number | null, cacheHeight: number | null, provider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>): upstream0.ImageProvider<any> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:ResizeImage.resizeIfNeeded", [cacheWidth, cacheHeight, provider]);
return _flaxResult as upstream0.ImageProvider<any>;
} }
_flaxBindInstanceType<ResizeImage, typeof ResizeImage>(ResizeImage, "flax.core/sdk_painting#type:ResizeImage", ["flax.core/sdk_painting#type:ImageProvider","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "imageProvider" | "width" | "height" | "policy" | "allowUpscaling" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ResizeImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
