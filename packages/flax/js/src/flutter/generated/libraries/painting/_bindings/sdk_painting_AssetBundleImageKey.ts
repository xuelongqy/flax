// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import { _flaxMemberParameters2, _flaxMemberParameters3 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetBundleImageKey extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [] }> { readonly __AssetBundleImageKey: unique symbol;
readonly [_flaxDartTypeValue]: AssetBundleImageKey;

readonly bundle: upstream0.AssetBundle;
readonly name: string;
readonly scale: number;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:AssetBundleImageKey", ["bundle","name","scale"], [], _flaxBindingMethods("flax.core/sdk_painting#type:AssetBundleImageKey", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _AssetBundleImageKeyFactory(options: { bundle: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }>; name: string; scale: number }): AssetBundleImageKey {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:AssetBundleImageKey", "", [{"name":"bundle","required":true},{"name":"name","required":true},{"name":"scale","required":true}], [], options) as AssetBundleImageKey;
}
const _AssetBundleImageKeyProxy = {type: "flax.core/sdk_painting#type:AssetBundleImageKey", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"toString":_flaxMemberParameters2}, getters: ["bundle","name","scale"], setters: [], contextMembers: [], superMembers: ["get:bundle","get:name","get:scale","toString"]} as const;
export interface _AssetBundleImageKeyNative extends AssetBundleImageKey {
readonly [_flaxDartTypeValue]: _AssetBundleImageKeyNative;

toString(): string;
get bundle(): upstream0.AssetBundle;
get name(): string;
get scale(): number;
}
export abstract class _AssetBundleImageKeyNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetBundleImageKey>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetBundleImageKey;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AssetBundleImageKey", readonly [], false];
constructor(options: {bundle: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }>; name: string; scale: number}) { super(_AssetBundleImageKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AssetBundleImageKeyNative.prototype, _AssetBundleImageKeyProxy);
export namespace _AssetBundleImageKeyFactory { export function implement(args: [options: {bundle: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }>; name: string; scale: number}], implementation: {}): AssetBundleImageKey {
return constructProxy(_AssetBundleImageKeyProxy, args, implementation) as AssetBundleImageKey; } }
const _AssetBundleImageKeyBinding = _flaxProxyFactory(_AssetBundleImageKeyFactory, _AssetBundleImageKeyNative) as unknown as typeof _AssetBundleImageKeyFactory & (new(options: {bundle: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }>; name: string; scale: number}) => _AssetBundleImageKeyNative);
export const AssetBundleImageKey: typeof _AssetBundleImageKeyBinding & _FlaxInstanceType<AssetBundleImageKey> & _FlaxDartType<AssetBundleImageKey, readonly ["class", "flax.core/sdk_painting#type:AssetBundleImageKey", readonly [], false]> = _flaxBindInstanceType<AssetBundleImageKey, typeof _AssetBundleImageKeyBinding>(_AssetBundleImageKeyBinding, "flax.core/sdk_painting#type:AssetBundleImageKey", ["dart:core::Object"]) as typeof _AssetBundleImageKeyBinding & _FlaxInstanceType<AssetBundleImageKey> & _FlaxDartType<AssetBundleImageKey, readonly ["class", "flax.core/sdk_painting#type:AssetBundleImageKey", readonly [], false]>;
