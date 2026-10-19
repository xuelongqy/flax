// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
import '@flax/flutter/painting/_bindings/sdk_painting_AssetBundleImageKey';
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
import { _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters2 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetBundleImageProvider extends Omit<upstream0.ImageProvider<upstream1.AssetBundleImageKey>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [upstream1.AssetBundleImageKey] }> { readonly __AssetBundleImageProvider: unique symbol;
readonly [_flaxDartTypeValue]: AssetBundleImageProvider;

}
defineObject("flax.core/sdk_painting#type:AssetBundleImageProvider", [], [], _flaxBindingMethods("flax.core/sdk_painting#type:AssetBundleImageProvider", "object", {"resolve":_flaxMemberParameters4,"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, {}), []);
const _AssetBundleImageProviderProxy = {type: "flax.core/sdk_painting#type:AssetBundleImageProvider", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"createStream":_flaxMemberParameters4,"obtainCacheStatus":_flaxMemberParameters5,"resolveStreamForKey":_flaxMemberParameters6,"evict":_flaxMemberParameters7,"obtainKey":_flaxMemberParameters4,"loadBuffer":_flaxMemberParameters8,"loadImage":_flaxMemberParameters8,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["createStream","obtainCacheStatus","resolveStreamForKey","evict","loadBuffer","loadImage","toString"]} as const;
export interface AssetBundleImageProvider {
readonly [_flaxDartTypeValue]: AssetBundleImageProvider;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;

createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream2.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void) | null | undefined}): Promise<upstream4.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, handleError: ((exception: {}, stackTrace: upstream5.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
loadBuffer(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
loadImage(key: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>, decode: ((buffer: upstream9.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream10.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream7.ImageStreamCompleter;
toString(): string;
}
export abstract class AssetBundleImageProvider extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetBundleImageProvider>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetBundleImageProvider;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AssetBundleImageProvider", readonly [], false];
constructor() { super(_AssetBundleImageProviderProxy, Array.from(arguments)); }
abstract obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<upstream1.AssetBundleImageKey>;
}
_flaxDefineProxyBase(AssetBundleImageProvider.prototype, _AssetBundleImageProviderProxy);
export namespace AssetBundleImageProvider { export function implement(args: [], implementation: {obtainKey: ((configuration: upstream3.ImageConfiguration) => Promise<Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }>>)}): AssetBundleImageProvider {
return constructProxy(_AssetBundleImageProviderProxy, args, implementation) as AssetBundleImageProvider; } }
_flaxBindInstanceType<AssetBundleImageProvider, typeof AssetBundleImageProvider>(AssetBundleImageProvider, "flax.core/sdk_painting#type:AssetBundleImageProvider", ["flax.core/sdk_painting#type:ImageProvider","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageProvider" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
