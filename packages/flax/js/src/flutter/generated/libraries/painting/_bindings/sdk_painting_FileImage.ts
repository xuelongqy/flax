// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_File';
import '@flax/dart/io/_bindings/sdk_dependencies_File';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters2, _flaxMemberParameters51 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FileImage extends Omit<upstream0.ImageProvider<FileImage>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }> { readonly __FileImage: unique symbol;
readonly [_flaxDartTypeValue]: FileImage;

readonly file: upstream1.File;
readonly scale: number;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;
createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void) | null | undefined}): Promise<upstream4.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, handleError: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<FileImage>;
loadBuffer(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
loadImage(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:FileImage", ["file","scale"], [], _flaxBindingMethods("flax.core/sdk_painting#type:FileImage", "object", {"resolve":_flaxMemberParameters4,"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, {}), []);
export function _FileImageFactory(file: Readonly<{ "__flaxBound:dart:io::File": readonly [] }> & Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }>, options: { scale?: number | undefined } = {}): FileImage {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:FileImage", "", [{"name":"file","required":true,"positional":true},{"name":"scale"}], [file], options) as FileImage;
}
const _FileImageProxy = {type: "flax.core/sdk_painting#type:FileImage", parameters: _flaxMemberParameters51, constructors: {"": _flaxMemberParameters51}, methods: {"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, getters: ["file","scale"], setters: [], contextMembers: [], superMembers: ["get:file","get:scale","createStream","obtainCacheStatus","resolveStreamForKey","evict","obtainKey","loadBuffer","loadImage","toString"]} as const;
export interface _FileImageNative extends FileImage {
readonly [_flaxDartTypeValue]: _FileImageNative;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;

createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void) | null | undefined}): Promise<upstream4.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, handleError: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<FileImage>;
loadBuffer(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
loadImage(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [FileImage] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
toString(): string;
get file(): upstream1.File;
get scale(): number;
}
export abstract class _FileImageNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FileImage>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FileImage;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:FileImage", readonly [], false];
constructor(file: Readonly<{ "__flaxBound:dart:io::File": readonly [] }> & Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }>, options?: {scale?: number | undefined}) { super(_FileImageProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FileImageNative.prototype, _FileImageProxy);
export namespace _FileImageFactory { export function implement(args: [file: Readonly<{ "__flaxBound:dart:io::File": readonly [] }> & Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }>, options?: {scale?: number | undefined}], implementation: {}): FileImage {
return constructProxy(_FileImageProxy, args, implementation) as FileImage; } }
const _FileImageBinding = _flaxProxyFactory(_FileImageFactory, _FileImageNative) as unknown as typeof _FileImageFactory & (new(file: Readonly<{ "__flaxBound:dart:io::File": readonly [] }> & Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }>, options?: {scale?: number | undefined}) => _FileImageNative);
export const FileImage: typeof _FileImageBinding & _FlaxInstanceType<FileImage> & _FlaxDartType<FileImage, readonly ["class", "flax.core/sdk_painting#type:FileImage", readonly [], false]> = _flaxBindInstanceType<FileImage, typeof _FileImageBinding>(_FileImageBinding, "flax.core/sdk_painting#type:FileImage", ["flax.core/sdk_painting#type:ImageProvider","dart:core::Object"]) as typeof _FileImageBinding & _FlaxInstanceType<FileImage> & _FlaxDartType<FileImage, readonly ["class", "flax.core/sdk_painting#type:FileImage", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "file" | "scale" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::FileImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
