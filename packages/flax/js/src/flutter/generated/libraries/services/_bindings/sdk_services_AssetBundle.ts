// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
const _flaxMemberParameters0 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"key","required":true,"positional":true},{"name":"cache"}] as const;
const _flaxMemberParameters2 = [{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetBundle extends Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> { readonly __AssetBundle: unique symbol;
readonly [_flaxDartTypeValue]: AssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature0;loadStructuredBinaryData: _FlaxSignature1;};
}
defineObject("flax.core/sdk_services#type:AssetBundle", [], [], _flaxBindingMethods("flax.core/sdk_services#type:AssetBundle", "object", {"load":_flaxMemberParameters0,"loadBuffer":_flaxMemberParameters0,"loadString":_flaxMemberParameters1,"loadStructuredData":_flaxMemberParameters2,"loadStructuredBinaryData":_flaxMemberParameters2,"evict":_flaxMemberParameters0,"clear":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, {"loadStructuredData":{"id":"loadStructuredData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]},"loadStructuredBinaryData":{"id":"loadStructuredBinaryData","parameters":[{"name":"key","required":true,"positional":true},{"name":"parser","required":true,"positional":true}]}}), []);
const _AssetBundleProxy = {type: "flax.core/sdk_services#type:AssetBundle", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"load":_flaxMemberParameters0,"loadBuffer":_flaxMemberParameters0,"loadString":_flaxMemberParameters1,"loadStructuredData":_flaxMemberParameters2,"loadStructuredBinaryData":_flaxMemberParameters2,"evict":_flaxMemberParameters0,"clear":_flaxMemberParameters3,"toString":_flaxMemberParameters3}, getters: [], setters: [], contextMembers: ["loadStructuredData","loadStructuredBinaryData"], superMembers: ["loadBuffer","loadString","loadStructuredData","loadStructuredBinaryData","evict","clear","toString"]} as const;
export interface AssetBundle {
readonly [_flaxDartTypeValue]: AssetBundle;
readonly [_flaxDartMethodCases]?: {loadStructuredData: _FlaxSignature2;loadStructuredBinaryData: _FlaxSignature3;};
loadBuffer(key: string): Promise<upstream0.ImmutableBuffer>;
loadString(key: string, options?: {cache?: boolean | undefined}): Promise<string>;
loadStructuredData<T extends unknown | null = unknown | null>(key: string, parser: ((value: string) => Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
loadStructuredBinaryData<T extends unknown | null = unknown | null>(key: string, parser: ((data: globalThis.DataView) => (T | _FlaxDartOutput<T>) | Promise<(T | _FlaxDartOutput<T>)>)): Promise<_FlaxDartOutput<T>>;
evict(key: string): void;
clear(): void;
toString(): string;
}
export abstract class AssetBundle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetBundle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetBundle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetBundle", readonly [], false];
constructor() { super(_AssetBundleProxy, Array.from(arguments)); }
abstract load(key: string): Promise<globalThis.DataView>;
}
_flaxDefineProxyBase(AssetBundle.prototype, _AssetBundleProxy);
export namespace AssetBundle { export function implement(args: [], implementation: {load: ((key: string) => Promise<globalThis.DataView>)}): AssetBundle {
return constructProxy(_AssetBundleProxy, args, implementation) as AssetBundle; } }
_flaxBindInstanceType<AssetBundle, typeof AssetBundle>(AssetBundle, "flax.core/sdk_services#type:AssetBundle", ["dart:core::Object"]);
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((value: string) => Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (key: string,parser: ((data: globalThis.DataView) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Promise<_Selected0> : never : never; }
