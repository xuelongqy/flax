// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import { _flaxMemberParameters2, _flaxMemberParameters69, _flaxMemberParameters70, _flaxMemberParameters45 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageCache extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> { readonly __ImageCache: unique symbol;
readonly [_flaxDartTypeValue]: ImageCache;

get maximumSize(): number;
readonly currentSize: number;
get maximumSizeBytes(): number;
readonly currentSizeBytes: number;
readonly liveImageCount: number;
readonly pendingImageCount: number;
clear(): void;
evict(key: {}, options?: {includeLive?: boolean | undefined}): boolean;
putIfAbsent(key: {}, loader: (() => Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>), options?: {onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined}): upstream0.ImageStreamCompleter | null;
statusForKey(key: {}): upstream2.ImageCacheStatus;
containsKey(key: {}): boolean;
clearLiveImages(): void;
set maximumSize(value: number);
set maximumSizeBytes(value: number);
}
defineObject("flax.core/sdk_painting#type:ImageCache", ["maximumSize","currentSize","maximumSizeBytes","currentSizeBytes","liveImageCount","pendingImageCount"], ["maximumSize","maximumSizeBytes"], _flaxBindingMethods("flax.core/sdk_painting#type:ImageCache", "object", {"clear":_flaxMemberParameters2,"evict":_flaxMemberParameters69,"putIfAbsent":_flaxMemberParameters70,"statusForKey":_flaxMemberParameters45,"containsKey":_flaxMemberParameters45,"clearLiveImages":_flaxMemberParameters2}, {}), []);
export function _ImageCacheFactory(): ImageCache {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ImageCache", "", _flaxMemberParameters2, [], {}) as ImageCache;
}
const _ImageCacheProxy = {type: "flax.core/sdk_painting#type:ImageCache", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"clear":_flaxMemberParameters2,"evict":_flaxMemberParameters69,"putIfAbsent":_flaxMemberParameters70,"statusForKey":_flaxMemberParameters45,"containsKey":_flaxMemberParameters45,"clearLiveImages":_flaxMemberParameters2}, getters: ["maximumSize","currentSize","maximumSizeBytes","currentSizeBytes","liveImageCount","pendingImageCount"], setters: ["maximumSize","maximumSizeBytes"], contextMembers: [], superMembers: ["get:maximumSize","get:currentSize","get:maximumSizeBytes","get:currentSizeBytes","get:liveImageCount","get:pendingImageCount","set:maximumSize","set:maximumSizeBytes","clear","evict","putIfAbsent","statusForKey","containsKey","clearLiveImages"]} as const;
export interface _ImageCacheNative extends ImageCache {
readonly [_flaxDartTypeValue]: _ImageCacheNative;

clear(): void;
evict(key: {}, options?: {includeLive?: boolean | undefined}): boolean;
putIfAbsent(key: {}, loader: (() => Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>), options?: {onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined}): upstream0.ImageStreamCompleter | null;
statusForKey(key: {}): upstream2.ImageCacheStatus;
containsKey(key: {}): boolean;
clearLiveImages(): void;
get maximumSize(): number;
get currentSize(): number;
get maximumSizeBytes(): number;
get currentSizeBytes(): number;
get liveImageCount(): number;
get pendingImageCount(): number;
set maximumSize(value: number);
set maximumSizeBytes(value: number);
}
export abstract class _ImageCacheNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageCache>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageCache;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false];
constructor() { super(_ImageCacheProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageCacheNative.prototype, _ImageCacheProxy);
export namespace _ImageCacheFactory { export function implement(args: [], implementation: {}): ImageCache {
return constructProxy(_ImageCacheProxy, args, implementation) as ImageCache; } }
const _ImageCacheBinding = _flaxProxyFactory(_ImageCacheFactory, _ImageCacheNative) as unknown as typeof _ImageCacheFactory & (new() => _ImageCacheNative);
export const ImageCache: typeof _ImageCacheBinding & _FlaxInstanceType<ImageCache> & _FlaxDartType<ImageCache, readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false]> = _flaxBindInstanceType<ImageCache, typeof _ImageCacheBinding>(_ImageCacheBinding, "flax.core/sdk_painting#type:ImageCache", ["dart:core::Object"]) as typeof _ImageCacheBinding & _FlaxInstanceType<ImageCache> & _FlaxDartType<ImageCache, readonly ["class", "flax.core/sdk_painting#type:ImageCache", readonly [], false]>;
