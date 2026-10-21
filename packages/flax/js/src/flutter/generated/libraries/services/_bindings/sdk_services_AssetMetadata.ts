// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters15 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetMetadata extends Readonly<{ "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [] }> { readonly __AssetMetadata: unique symbol;
readonly [_flaxDartTypeValue]: AssetMetadata;

readonly targetDevicePixelRatio: number | null;
readonly key: string;
readonly main: boolean;
}
defineObject("flax.core/sdk_services#type:AssetMetadata", ["targetDevicePixelRatio","key","main"], [], _flaxBindingMethods("flax.core/sdk_services#type:AssetMetadata", "object", {}, {}), []);
export function _AssetMetadataFactory(options: { key: string; targetDevicePixelRatio: number | null; main: boolean }): AssetMetadata {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:AssetMetadata", "", [{"name":"key","required":true},{"name":"targetDevicePixelRatio","required":true},{"name":"main","required":true}], [], options) as AssetMetadata;
}
const _AssetMetadataProxy = {type: "flax.core/sdk_services#type:AssetMetadata", parameters: _flaxMemberParameters15, constructors: {"": _flaxMemberParameters15}, methods: {}, getters: ["targetDevicePixelRatio","key","main"], setters: [], contextMembers: [], superMembers: ["get:targetDevicePixelRatio","get:key","get:main"]} as const;
export interface _AssetMetadataNative extends AssetMetadata {
readonly [_flaxDartTypeValue]: _AssetMetadataNative;

get targetDevicePixelRatio(): number | null;
get key(): string;
get main(): boolean;
}
export abstract class _AssetMetadataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetMetadata>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetMetadata;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false];
constructor(options: {key: string; targetDevicePixelRatio: number | null; main: boolean}) { super(_AssetMetadataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AssetMetadataNative.prototype, _AssetMetadataProxy);
export namespace _AssetMetadataFactory { export function implement(args: [options: {key: string; targetDevicePixelRatio: number | null; main: boolean}], implementation: {}): AssetMetadata {
return constructProxy(_AssetMetadataProxy, args, implementation) as AssetMetadata; } }
const _AssetMetadataBinding = _flaxProxyFactory(_AssetMetadataFactory, _AssetMetadataNative) as unknown as typeof _AssetMetadataFactory & (new(options: {key: string; targetDevicePixelRatio: number | null; main: boolean}) => _AssetMetadataNative);
export const AssetMetadata: typeof _AssetMetadataBinding & _FlaxInstanceType<AssetMetadata> & _FlaxDartType<AssetMetadata, readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false]> = _flaxBindInstanceType<AssetMetadata, typeof _AssetMetadataBinding>(_AssetMetadataBinding, "flax.core/sdk_services#type:AssetMetadata", ["dart:core::Object"]) as typeof _AssetMetadataBinding & _FlaxInstanceType<AssetMetadata> & _FlaxDartType<AssetMetadata, readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false]>;
