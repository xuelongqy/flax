// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_CachingAssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_CachingAssetBundle';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true},{"name":"cache"}] as const;
const _flaxMemberParameters3 = [{"name":"key","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformAssetBundle extends Omit<upstream0.CachingAssetBundle, _flaxOwnMembers0>, Omit<upstream1.AssetBundle, _flaxOwnMembers0 | keyof upstream0.CachingAssetBundle>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::PlatformAssetBundle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> { readonly __PlatformAssetBundle: unique symbol;
readonly [_flaxDartTypeValue]: PlatformAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature0;loadStructuredBinaryData: _FlaxSignature1;};
}
defineObject("flax.core/sdk_services#type:PlatformAssetBundle", [], [], _flaxBindingMethods("flax.core/sdk_services#type:PlatformAssetBundle", "object", {"loadStructuredData":_flaxMemberParameters0,"loadStructuredBinaryData":_flaxMemberParameters0}, {"loadStructuredData":{"id":"loadStructuredData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]},"loadStructuredBinaryData":{"id":"loadStructuredBinaryData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_services#type:CachingAssetBundle");
const _PlatformAssetBundleProxy = {type: "flax.core/sdk_services#type:PlatformAssetBundle", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"loadString":_flaxMemberParameters2,"loadStructuredData":_flaxMemberParameters0,"loadStructuredBinaryData":_flaxMemberParameters0,"evict":_flaxMemberParameters3,"clear":_flaxMemberParameters1,"loadBuffer":_flaxMemberParameters3,"load":_flaxMemberParameters3,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: ["loadStructuredData","loadStructuredBinaryData"], superMembers: ["loadString","loadStructuredData","loadStructuredBinaryData","evict","clear","loadBuffer","load","toString"]} as const;
export interface PlatformAssetBundle {
readonly [_flaxDartTypeValue]: PlatformAssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature2;loadStructuredBinaryData: _FlaxSignature3;};
loadString(key: string, options?: {cache?: boolean | undefined}): Promise<string>;
loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
evict(key: string): void;
clear(): void;
loadBuffer(key: string): Promise<upstream2.ImmutableBuffer>;
load(key: string): Promise<globalThis.DataView>;
toString(): string;
}
export abstract class PlatformAssetBundle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformAssetBundle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformAssetBundle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformAssetBundle", readonly [], false];
constructor() { super(_PlatformAssetBundleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlatformAssetBundle.prototype, _PlatformAssetBundleProxy);
export namespace PlatformAssetBundle { export function implement(args: [], implementation: {}): PlatformAssetBundle {
return constructProxy(_PlatformAssetBundleProxy, args, implementation) as PlatformAssetBundle; } }
_flaxBindInstanceType<PlatformAssetBundle, typeof PlatformAssetBundle>(PlatformAssetBundle, "flax.core/sdk_services#type:PlatformAssetBundle", ["flax.core/sdk_services#type:CachingAssetBundle","flax.core/sdk_services#type:AssetBundle","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "loadString" | "loadStructuredData" | "loadStructuredBinaryData" | "evict" | "clear" | "loadBuffer" | "load" | "toString" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::PlatformAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::CachingAssetBundle" | "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
