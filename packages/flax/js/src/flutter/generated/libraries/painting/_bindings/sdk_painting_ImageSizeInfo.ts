// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters2, _flaxMemberParameters75 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageSizeInfo extends Readonly<{ "__flaxBound:package:flutter/src/painting/debug.dart::ImageSizeInfo": readonly [] }> { readonly __ImageSizeInfo: unique symbol;
readonly [_flaxDartTypeValue]: ImageSizeInfo;

readonly source: string | null;
readonly displaySize: upstream0.Size;
readonly imageSize: upstream0.Size;
readonly displaySizeInBytes: number;
readonly decodedSizeInBytes: number;
toJson(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:ImageSizeInfo", ["source","displaySize","imageSize","displaySizeInBytes","decodedSizeInBytes"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageSizeInfo", "object", {"toJson":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export function _ImageSizeInfoFactory(options: { source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): ImageSizeInfo {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ImageSizeInfo", "", [{"name":"source"},{"name":"displaySize","required":true},{"name":"imageSize","required":true}], [], options) as ImageSizeInfo;
}
const _ImageSizeInfoProxy = {type: "flax.core/sdk_painting#type:ImageSizeInfo", parameters: _flaxMemberParameters75, constructors: {"": _flaxMemberParameters75}, methods: {"toJson":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["source","displaySize","imageSize","displaySizeInBytes","decodedSizeInBytes"], setters: [], contextMembers: [], superMembers: ["get:source","get:displaySize","get:imageSize","get:displaySizeInBytes","get:decodedSizeInBytes","toJson","toString"]} as const;
export interface _ImageSizeInfoNative extends ImageSizeInfo {
readonly [_flaxDartTypeValue]: _ImageSizeInfoNative;

toJson(): DartMap<string, unknown | null>;
toString(): string;
get source(): string | null;
get displaySize(): upstream0.Size;
get imageSize(): upstream0.Size;
get displaySizeInBytes(): number;
get decodedSizeInBytes(): number;
}
export abstract class _ImageSizeInfoNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageSizeInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageSizeInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false];
constructor(options: {source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_ImageSizeInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageSizeInfoNative.prototype, _ImageSizeInfoProxy);
export namespace _ImageSizeInfoFactory { export function implement(args: [options: {source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): ImageSizeInfo {
return constructProxy(_ImageSizeInfoProxy, args, implementation) as ImageSizeInfo; } }
const _ImageSizeInfoBinding = _flaxProxyFactory(_ImageSizeInfoFactory, _ImageSizeInfoNative) as unknown as typeof _ImageSizeInfoFactory & (new(options: {source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _ImageSizeInfoNative);
export const ImageSizeInfo: typeof _ImageSizeInfoBinding & _FlaxInstanceType<ImageSizeInfo> & _FlaxDartType<ImageSizeInfo, readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false]> = _flaxBindInstanceType<ImageSizeInfo, typeof _ImageSizeInfoBinding>(_ImageSizeInfoBinding, "flax.core/sdk_painting#type:ImageSizeInfo", ["dart:core::Object"]) as typeof _ImageSizeInfoBinding & _FlaxInstanceType<ImageSizeInfo> & _FlaxDartType<ImageSizeInfo, readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false]>;
