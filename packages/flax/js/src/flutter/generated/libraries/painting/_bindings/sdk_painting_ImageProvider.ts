// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_ResizeImageKey';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_NetworkImage';
import '@flax/flutter/painting/_bindings/sdk_painting_NetworkImage';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_FileImage';
import '@flax/flutter/painting/_bindings/sdk_painting_FileImage';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_MemoryImage';
import '@flax/flutter/painting/_bindings/sdk_painting_MemoryImage';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageProvider<T extends {} = {}> extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [T] }> { readonly __ImageProvider: unique symbol;
readonly [_flaxDartTypeValue]: ImageProvider<T>;

}
defineObject("flax.core/sdk_painting#type:ImageProvider", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageProvider", "object", {"resolve":_flaxMemberParameters4,"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, {}), []);
const _ImageProviderProxy = {type: "flax.core/sdk_painting#type:ImageProvider", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["createStream","obtainCacheStatus","resolveStreamForKey","evict","loadBuffer","loadImage","toString"]} as const;
export interface ImageProvider<T extends {} = {}> {
readonly [_flaxDartTypeValue]: ImageProvider<T>;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream5.ImageStream;

createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream5.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream8.StackTrace | null) => void) | null | undefined}): Promise<upstream7.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: (T | DartInput<T>), handleError: ((exception: {}, stackTrace: upstream8.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
loadBuffer(key: (T | DartInput<T>), decode: ((buffer: upstream12.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream10.ImageStreamCompleter;
loadImage(key: (T | DartInput<T>), decode: ((buffer: upstream12.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream13.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream10.ImageStreamCompleter;
toString(): string;
}
export abstract class ImageProvider<T extends {} = {}> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageProvider<{}>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageProvider<{}>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageProvider", readonly [readonly ["any", null, readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ImageProviderProxy, Array.from(arguments)); }
abstract obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<T>;
}
_flaxDefineProxyBase(ImageProvider.prototype, _ImageProviderProxy);
export namespace ImageProvider { export function implement<T extends {} = {}>(args: [], implementation: {obtainKey: ((configuration: upstream6.ImageConfiguration) => Promise<(T | DartInput<T>)>)}): ImageProvider<T> {
return constructProxy(_ImageProviderProxy, args, implementation) as ImageProvider<T>; } }
_flaxBindInstanceType<ImageProvider<{}>, typeof ImageProvider>(ImageProvider, "flax.core/sdk_painting#type:ImageProvider", ["dart:core::Object"]);
_flaxDefineDartTypes(ImageProvider, "flax.core/sdk_painting#type:ImageProvider", {...{"category":"object","constructors":{}}, proxy: _ImageProviderProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new () => ImageProvider<_Selected0>) & {readonly prototype: ImageProvider<_Selected0>;implement(args: readonly [], implementation: Partial<ImageProvider<_Selected0>>): ImageProvider<_Selected0>;} & _FlaxInstanceType<ImageProvider<_Selected0>> & _FlaxDartType<ImageProvider<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new () => ImageProvider<_Selected0>) & {readonly prototype: ImageProvider<_Selected0>;implement(args: readonly [], implementation: Partial<ImageProvider<_Selected0>>): ImageProvider<_Selected0>;} & _FlaxInstanceType<ImageProvider<_Selected0>> & _FlaxDartType<ImageProvider<_Selected0>> : never : never; }
