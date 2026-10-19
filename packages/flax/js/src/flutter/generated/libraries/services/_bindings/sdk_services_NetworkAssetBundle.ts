// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import { _flaxMemberParameters12, _flaxMemberParameters63, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NetworkAssetBundle extends Omit<upstream0.AssetBundle, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::NetworkAssetBundle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> { readonly __NetworkAssetBundle: unique symbol;
readonly [_flaxDartTypeValue]: NetworkAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature0;loadStructuredBinaryData: _FlaxSignature1;};
}
defineObject("flax.core/sdk_services#type:NetworkAssetBundle", [], [], _flaxBindingMethods("flax.core/sdk_services#type:NetworkAssetBundle", "object", {"loadStructuredData":_flaxMemberParameters12,"loadStructuredBinaryData":_flaxMemberParameters12}, {"loadStructuredData":{"id":"loadStructuredData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]},"loadStructuredBinaryData":{"id":"loadStructuredBinaryData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_services#type:AssetBundle");
const _NetworkAssetBundleProxy = {type: "flax.core/sdk_services#type:NetworkAssetBundle", parameters: _flaxMemberParameters63, constructors: {"": _flaxMemberParameters63}, methods: {"load":_flaxMemberParameters10,"loadBuffer":_flaxMemberParameters10,"loadString":_flaxMemberParameters11,"loadStructuredData":_flaxMemberParameters12,"loadStructuredBinaryData":_flaxMemberParameters12,"evict":_flaxMemberParameters10,"clear":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: ["loadStructuredData","loadStructuredBinaryData"], superMembers: ["load","loadBuffer","loadString","loadStructuredData","loadStructuredBinaryData","evict","clear","toString"]} as const;
export interface NetworkAssetBundle {
readonly [_flaxDartTypeValue]: NetworkAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature2;loadStructuredBinaryData: _FlaxSignature3;};
load(key: string): Promise<globalThis.DataView>;
loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
loadString(key: string, options?: {cache?: boolean | undefined}): Promise<string>;
loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
evict(key: string): void;
clear(): void;
toString(): string;
}
export abstract class NetworkAssetBundle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NetworkAssetBundle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NetworkAssetBundle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:NetworkAssetBundle", readonly [], false];
constructor(baseUrl: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>) { super(_NetworkAssetBundleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(NetworkAssetBundle.prototype, _NetworkAssetBundleProxy);
export namespace NetworkAssetBundle { export function implement(args: [baseUrl: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>], implementation: {}): NetworkAssetBundle {
return constructProxy(_NetworkAssetBundleProxy, args, implementation) as NetworkAssetBundle; } }
_flaxBindInstanceType<NetworkAssetBundle, typeof NetworkAssetBundle>(NetworkAssetBundle, "flax.core/sdk_services#type:NetworkAssetBundle", ["flax.core/sdk_services#type:AssetBundle","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "load" | "loadBuffer" | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::NetworkAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
