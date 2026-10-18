// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageInfo extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }> { readonly __ImageInfo: unique symbol;
readonly [_flaxDartTypeValue]: ImageInfo;

}
defineObject("flax.core/sdk_painting#type:ImageInfo", ["image","sizeBytes","scale","debugLabel"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageInfo", "object", {"clone":_flaxMemberParameters0,"isCloneOf":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _ImageInfoProxy = {type: "flax.core/sdk_painting#type:ImageInfo", parameters: [{"name":"image","required":true,"positional":false},{"name":"scale","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}], constructors: {"":[{"name":"image","required":true,"positional":false},{"name":"scale","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}]}, methods: {"clone":_flaxMemberParameters0,"isCloneOf":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["image","sizeBytes","scale","debugLabel"], setters: [], contextMembers: [], superMembers: ["get:image","get:sizeBytes","get:scale","get:debugLabel","clone","isCloneOf","dispose","toString"]} as const;
export interface ImageInfo {
readonly [_flaxDartTypeValue]: ImageInfo;

clone(): ImageInfo;
isCloneOf(other: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>): boolean;
dispose(): void;
toString(): string;
get image(): upstream0.Image;
get sizeBytes(): number;
get scale(): number;
get debugLabel(): string | null;
}
export abstract class ImageInfo extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageInfo>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageInfo;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageInfo", readonly [], false];
constructor(options: {image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>; scale?: number | undefined; debugLabel?: string | null | undefined}) { super(_ImageInfoProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageInfo.prototype, _ImageInfoProxy);
export namespace ImageInfo { export function implement(args: [options: {image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>; scale?: number | undefined; debugLabel?: string | null | undefined}], implementation: {}): ImageInfo {
return constructProxy(_ImageInfoProxy, args, implementation) as ImageInfo; } }
_flaxBindInstanceType<ImageInfo, typeof ImageInfo>(ImageInfo, "flax.core/sdk_painting#type:ImageInfo", ["dart:core::Object"]);
