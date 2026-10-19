// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import { _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetImage extends Omit<upstream0.AssetBundleImageProvider, _flaxOwnMembers0>, Omit<upstream1.ImageProvider<upstream2.AssetBundleImageKey>, _flaxOwnMembers0 | keyof upstream0.AssetBundleImageProvider>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_resolution.dart::AssetImage": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [upstream2.AssetBundleImageKey] }> { readonly __AssetImage: unique symbol;
readonly [_flaxDartTypeValue]: AssetImage;

}
defineObject("flax.core/sdk_painting#type:AssetImage", ["assetName","keyName","bundle","package"], [], _flaxBindingMethods("flax.core/sdk_painting#type:AssetImage", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:AssetBundleImageProvider");
const _AssetImageProxy = {type: "flax.core/sdk_painting#type:AssetImage", parameters: _flaxMemberParameters9, constructors: {"": _flaxMemberParameters9}, methods: {"loadImage":_flaxMemberParameters8,"loadBuffer":_flaxMemberParameters8,"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["assetName","keyName","bundle","package"], setters: [], contextMembers: [], superMembers: ["get:assetName","get:keyName","get:bundle","get:package","loadImage","loadBuffer","createStream","obtainCacheStatus","resolveStreamForKey","evict","obtainKey","toString"]} as const;
export interface AssetImage {
readonly [_flaxDartTypeValue]: AssetImage;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream8.ImageStream;

loadImage(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, decode: ((buffer: upstream6.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream7.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream4.ImageStreamCompleter;
loadBuffer(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, decode: ((buffer: upstream6.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream4.ImageStreamCompleter;
createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream8.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream11.StackTrace | null) => void) | null | undefined}): Promise<upstream10.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, handleError: ((exception: {}, stackTrace: upstream11.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<upstream2.AssetBundleImageKey>;
toString(): string;
get assetName(): string;
get keyName(): string;
get bundle(): upstream3.AssetBundle | null;
get package(): string | null;
}
export abstract class AssetImage extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetImage>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetImage;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AssetImage", readonly [], false];
constructor(assetName: string, options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; package?: string | null | undefined}) { super(_AssetImageProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AssetImage.prototype, _AssetImageProxy);
export namespace AssetImage { export function implement(args: [assetName: string, options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; package?: string | null | undefined}], implementation: {}): AssetImage {
return constructProxy(_AssetImageProxy, args, implementation) as AssetImage; } }
_flaxBindInstanceType<AssetImage, typeof AssetImage>(AssetImage, "flax.core/sdk_painting#type:AssetImage", ["flax.core/sdk_painting#type:AssetBundleImageProvider","flax.core/sdk_painting#type:ImageProvider","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "assetName" | "keyName" | "bundle" | "package" | "loadImage" | "loadBuffer" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "toString" | "__flaxBound:package:flutter/src/painting/image_resolution.dart::AssetImage" | "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
