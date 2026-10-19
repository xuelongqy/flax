// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageCacheStatus extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCacheStatus": readonly [] }> { readonly __ImageCacheStatus: unique symbol;
readonly [_flaxDartTypeValue]: ImageCacheStatus;

readonly pending: boolean;
readonly keepAlive: boolean;
readonly live: boolean;
readonly tracked: boolean;
readonly untracked: boolean;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:ImageCacheStatus", ["pending","keepAlive","live","tracked","untracked"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageCacheStatus", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _ImageCacheStatusProxy = {type: "flax.core/sdk_painting#type:ImageCacheStatus", parameters: _flaxMemberParameters0, constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["pending","keepAlive","live","tracked","untracked","hashCode"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ImageCacheStatusFactory { export function implement(args: [], implementation: {toString: (() => string); get pending(): boolean; get keepAlive(): boolean; get live(): boolean; get tracked(): boolean; get untracked(): boolean; get hashCode(): number}): ImageCacheStatus {
return constructProxy(_ImageCacheStatusProxy, args, implementation) as ImageCacheStatus; } }
export const ImageCacheStatus: typeof _ImageCacheStatusFactory & _FlaxInstanceType<ImageCacheStatus> & _FlaxDartType<ImageCacheStatus, readonly ["class", "flax.core/sdk_painting#type:ImageCacheStatus", readonly [], false]> = _flaxBindInstanceType<ImageCacheStatus, typeof _ImageCacheStatusFactory>(_ImageCacheStatusFactory, "flax.core/sdk_painting#type:ImageCacheStatus", ["dart:core::Object"]) as typeof _ImageCacheStatusFactory & _FlaxInstanceType<ImageCacheStatus> & _FlaxDartType<ImageCacheStatus, readonly ["class", "flax.core/sdk_painting#type:ImageCacheStatus", readonly [], false]>;
