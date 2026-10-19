// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AssetMetadata';
import '@flax/flutter/services/_bindings/sdk_services_AssetMetadata';
import { _flaxMemberParameters0, _flaxMemberParameters10 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetManifest extends Readonly<{ "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetManifest": readonly [] }> { readonly __AssetManifest: unique symbol;
readonly [_flaxDartTypeValue]: AssetManifest;

listAssets(): DartList<string>;
getAssetVariants(key: string): DartList<upstream1.AssetMetadata> | null;
}
defineObject("flax.core/sdk_services#type:AssetManifest", [], [], _flaxBindingMethods("flax.core/sdk_services#type:AssetManifest", "object", {"listAssets":_flaxMemberParameters0,"getAssetVariants":_flaxMemberParameters10}, {}), []);
const _AssetManifestProxy = {type: "flax.core/sdk_services#type:AssetManifest", parameters: _flaxMemberParameters0, constructors: {}, methods: {"listAssets":_flaxMemberParameters0,"getAssetVariants":_flaxMemberParameters10}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _AssetManifestFactory { export function implement(args: [], implementation: {listAssets: (() => DartListInput<string, string>); getAssetVariants: ((key: string) => DartListInput<upstream1.AssetMetadata, Readonly<{ "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [] }>> | null)}): AssetManifest {
return constructProxy(_AssetManifestProxy, args, implementation) as AssetManifest; } }
export namespace _AssetManifestFactory { export function loadFromAssetBundle(bundle: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }>): Promise<AssetManifest> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:AssetManifest.loadFromAssetBundle", [bundle]);
return _flaxResult as Promise<AssetManifest>;
} }
export const AssetManifest: typeof _AssetManifestFactory & _FlaxInstanceType<AssetManifest> & _FlaxDartType<AssetManifest, readonly ["class", "flax.core/sdk_services#type:AssetManifest", readonly [], false]> = _flaxBindInstanceType<AssetManifest, typeof _AssetManifestFactory>(_AssetManifestFactory, "flax.core/sdk_services#type:AssetManifest", ["dart:core::Object"]) as typeof _AssetManifestFactory & _FlaxInstanceType<AssetManifest> & _FlaxDartType<AssetManifest, readonly ["class", "flax.core/sdk_services#type:AssetManifest", readonly [], false]>;
