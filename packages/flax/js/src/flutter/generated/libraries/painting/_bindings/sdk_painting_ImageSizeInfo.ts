// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"source"},{"name":"displaySize","required":true},{"name":"imageSize","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageSizeInfo extends Readonly<{ "__flaxBound:package:flutter/src/painting/debug.dart::ImageSizeInfo": readonly [] }> { readonly __ImageSizeInfo: unique symbol;
readonly [_flaxDartTypeValue]: ImageSizeInfo;

}
defineObject("flax.core/sdk_painting#type:ImageSizeInfo", ["source","displaySize","imageSize","displaySizeInBytes","decodedSizeInBytes"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageSizeInfo", "object", {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _ImageSizeInfoProxy = {type: "flax.core/sdk_painting#type:ImageSizeInfo", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["source","displaySize","imageSize","displaySizeInBytes","decodedSizeInBytes"], setters: [], contextMembers: [], superMembers: ["get:source","get:displaySize","get:imageSize","get:displaySizeInBytes","get:decodedSizeInBytes","toJson","toString"]} as const;
export interface ImageSizeInfo {
readonly [_flaxDartTypeValue]: ImageSizeInfo;

toJson(): DartMap<string, unknown | null>;
toString(): string;
get source(): string | null;
get displaySize(): upstream0.Size;
get imageSize(): upstream0.Size;
get displaySizeInBytes(): number;
get decodedSizeInBytes(): number;
}
export abstract class ImageSizeInfo extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageSizeInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageSizeInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageSizeInfo", readonly [], false];
constructor(options: {source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_ImageSizeInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageSizeInfo.prototype, _ImageSizeInfoProxy);
export namespace ImageSizeInfo { export function implement(args: [options: {source?: string | null | undefined; displaySize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; imageSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): ImageSizeInfo {
return constructProxy(_ImageSizeInfoProxy, args, implementation) as ImageSizeInfo; } }
_flaxBindInstanceType<ImageSizeInfo, typeof ImageSizeInfo>(ImageSizeInfo, "flax.core/sdk_painting#type:ImageSizeInfo", ["dart:core::Object"]);
