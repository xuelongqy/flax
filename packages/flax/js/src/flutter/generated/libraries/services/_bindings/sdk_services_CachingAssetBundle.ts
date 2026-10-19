// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"key","required":true,"positional":true},{"name":"cache"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CachingAssetBundle extends Omit<upstream0.AssetBundle, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> { readonly __CachingAssetBundle: unique symbol;
readonly [_flaxDartTypeValue]: CachingAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature0;loadStructuredBinaryData: _FlaxSignature1;};
}
defineObject("flax.core/sdk_services#type:CachingAssetBundle", [], [], _flaxBindingMethods("flax.core/sdk_services#type:CachingAssetBundle", "object", {"loadStructuredData":_flaxMemberParameters0,"loadStructuredBinaryData":_flaxMemberParameters0}, {"loadStructuredData":{"id":"loadStructuredData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]},"loadStructuredBinaryData":{"id":"loadStructuredBinaryData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_services#type:AssetBundle");
const _CachingAssetBundleProxy = {type: "flax.core/sdk_services#type:CachingAssetBundle", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"load":_flaxMemberParameters2,"loadBuffer":_flaxMemberParameters2,"loadString":_flaxMemberParameters3,"loadStructuredData":_flaxMemberParameters0,"loadStructuredBinaryData":_flaxMemberParameters0,"evict":_flaxMemberParameters2,"clear":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: ["loadStructuredData","loadStructuredBinaryData"], superMembers: ["loadBuffer","loadString","loadStructuredData","loadStructuredBinaryData","evict","clear","toString"]} as const;
export interface CachingAssetBundle {
readonly [_flaxDartTypeValue]: CachingAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature2;loadStructuredBinaryData: _FlaxSignature3;};
loadBuffer(key: string): Promise<upstream1.ImmutableBuffer>;
loadString(key: string, options?: {cache?: boolean | undefined}): Promise<string>;
loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
evict(key: string): void;
clear(): void;
toString(): string;
}
export abstract class CachingAssetBundle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CachingAssetBundle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CachingAssetBundle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:CachingAssetBundle", readonly [], false];
constructor() { super(_CachingAssetBundleProxy, Array.from(arguments)); }
abstract load(key: string): Promise<globalThis.DataView>;
}
_flaxDefineProxyBase(CachingAssetBundle.prototype, _CachingAssetBundleProxy);
export namespace CachingAssetBundle { export function implement(args: [], implementation: {load: ((key: string) => Promise<globalThis.DataView>)}): CachingAssetBundle {
return constructProxy(_CachingAssetBundleProxy, args, implementation) as CachingAssetBundle; } }
_flaxBindInstanceType<CachingAssetBundle, typeof CachingAssetBundle>(CachingAssetBundle, "flax.core/sdk_services#type:CachingAssetBundle", ["flax.core/sdk_services#type:AssetBundle","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "load" | "loadBuffer" | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
