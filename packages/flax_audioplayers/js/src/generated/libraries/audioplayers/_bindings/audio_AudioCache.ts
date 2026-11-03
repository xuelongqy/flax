// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters0, _flaxMemberParameters4, _flaxMemberParameters1, _flaxMemberParameters5, _flaxMemberParameters6 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioCache extends Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }> { readonly __AudioCache: unique symbol;
readonly [_flaxDartTypeValue]: AudioCache;

readonly loadedFiles: DartMap<string, upstream0.Uri>;
get prefix(): string;
get cacheId(): string | null;
clear(fileName: string): Promise<void>;
clearAll(): Promise<void>;
fetchToMemory(fileName: string): Promise<upstream0.Uri>;
load(fileName: string): Promise<upstream0.Uri>;
loadPath(fileName: string): Promise<string>;
loadAsBytes(fileName: string): Promise<globalThis.Uint8Array>;
loadAll(fileNames: DartListInput<string, string>): Promise<DartList<upstream0.Uri>>;
set prefix(value: string);
set cacheId(value: string | null);
}
defineObject("flax.audio/audio#type:AudioCache", ["loadedFiles","prefix","cacheId"], ["prefix","cacheId"], _flaxBindingMethods("flax.audio/audio#type:AudioCache", "object", {"clear":_flaxMemberParameters4,"clearAll":_flaxMemberParameters1,"fetchToMemory":_flaxMemberParameters4,"load":_flaxMemberParameters4,"loadPath":_flaxMemberParameters4,"loadAsBytes":_flaxMemberParameters4,"loadAll":_flaxMemberParameters5}, {}), []);
export function _AudioCacheFactory(options: { prefix?: string | undefined; cacheId?: string | null | undefined } = {}): AudioCache {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioCache", "", [{"name":"prefix"},{"name":"cacheId"}], [], options) as AudioCache;
}
const _AudioCacheProxy = {type: "flax.audio/audio#type:AudioCache", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"clear":_flaxMemberParameters4,"clearAll":_flaxMemberParameters1,"fetchToMemory":_flaxMemberParameters4,"load":_flaxMemberParameters4,"loadPath":_flaxMemberParameters4,"loadAsBytes":_flaxMemberParameters4,"loadAll":_flaxMemberParameters5}, getters: ["loadedFiles","prefix","cacheId"], setters: ["prefix","cacheId"], contextMembers: [], superMembers: ["get:loadedFiles","get:prefix","get:cacheId","set:prefix","set:cacheId","clear","clearAll","fetchToMemory","load","loadPath","loadAsBytes","loadAll"]} as const;
export interface _AudioCacheNative extends AudioCache {
readonly [_flaxDartTypeValue]: _AudioCacheNative;

clear(fileName: string): Promise<void>;
clearAll(): Promise<void>;
fetchToMemory(fileName: string): Promise<upstream0.Uri>;
load(fileName: string): Promise<upstream0.Uri>;
loadPath(fileName: string): Promise<string>;
loadAsBytes(fileName: string): Promise<globalThis.Uint8Array>;
loadAll(fileNames: DartListInput<string, string>): Promise<DartList<upstream0.Uri>>;
get loadedFiles(): DartMap<string, upstream0.Uri>;
get prefix(): string;
get cacheId(): string | null;
set prefix(value: string);
set cacheId(value: string | null);
}
export abstract class _AudioCacheNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioCache>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioCache;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioCache", readonly [], false];
constructor(options?: {prefix?: string | undefined; cacheId?: string | null | undefined}) { super(_AudioCacheProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioCacheNative.prototype, _AudioCacheProxy);
export namespace _AudioCacheFactory { export function implement(args: [options?: {prefix?: string | undefined; cacheId?: string | null | undefined}], implementation: {}): AudioCache {
return constructProxy(_AudioCacheProxy, args, implementation) as AudioCache; } }
const _AudioCacheBinding = _flaxProxyFactory(_AudioCacheFactory, _AudioCacheNative) as unknown as typeof _AudioCacheFactory & (new(options?: {prefix?: string | undefined; cacheId?: string | null | undefined}) => _AudioCacheNative);
export namespace _AudioCacheFactory { export function setInstance(value: Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioCache.instance%3D", [value], _flaxMemberParameters0);
} }
export namespace _AudioCacheFactory { export declare const instance: AudioCache; }
_flaxDefineStaticGetters(_AudioCacheFactory, "flax.audio/audio#read:AudioCache.", ["instance"]);
export const AudioCache: typeof _AudioCacheBinding & _FlaxInstanceType<AudioCache> & _FlaxDartType<AudioCache, readonly ["class", "flax.audio/audio#type:AudioCache", readonly [], false]> = _flaxBindInstanceType<AudioCache, typeof _AudioCacheBinding>(_AudioCacheBinding, "flax.audio/audio#type:AudioCache", ["dart:core::Object"]) as typeof _AudioCacheBinding & _FlaxInstanceType<AudioCache> & _FlaxDartType<AudioCache, readonly ["class", "flax.audio/audio#type:AudioCache", readonly [], false]>;
