// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"key","required":true},{"name":"targetDevicePixelRatio","required":true},{"name":"main","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetMetadata extends Readonly<{ "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [] }> { readonly __AssetMetadata: unique symbol;
readonly [_flaxDartTypeValue]: AssetMetadata;

}
defineObject("flax.core/sdk_services#type:AssetMetadata", ["targetDevicePixelRatio","key","main"], [], _flaxBindingMethods("flax.core/sdk_services#type:AssetMetadata", "object", {}, {}), []);
const _AssetMetadataProxy = {type: "flax.core/sdk_services#type:AssetMetadata", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["targetDevicePixelRatio","key","main"], setters: [], contextMembers: [], superMembers: ["get:targetDevicePixelRatio","get:key","get:main"]} as const;
export interface AssetMetadata {
readonly [_flaxDartTypeValue]: AssetMetadata;

get targetDevicePixelRatio(): number | null;
get key(): string;
get main(): boolean;
}
export abstract class AssetMetadata extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetMetadata>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetMetadata;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false];
constructor(options: {key: string; targetDevicePixelRatio: number | null; main: boolean}) { super(_AssetMetadataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AssetMetadata.prototype, _AssetMetadataProxy);
export namespace AssetMetadata { export function implement(args: [options: {key: string; targetDevicePixelRatio: number | null; main: boolean}], implementation: {}): AssetMetadata {
return constructProxy(_AssetMetadataProxy, args, implementation) as AssetMetadata; } }
_flaxBindInstanceType<AssetMetadata, typeof AssetMetadata>(AssetMetadata, "flax.core/sdk_services#type:AssetMetadata", ["dart:core::Object"]);
