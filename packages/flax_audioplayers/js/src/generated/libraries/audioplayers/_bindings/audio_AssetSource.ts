// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AssetSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::AssetSource": readonly [] }>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> { readonly __AssetSource: unique symbol;
readonly [_flaxDartTypeValue]: AssetSource;

readonly mimeType: string | null;
readonly path: string;
setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
}
defineObject("flax.audio/audio#type:AssetSource", ["mimeType","path"], [], _flaxBindingMethods("flax.audio/audio#type:AssetSource", "object", {"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.audio/audio#type:Source");
export function _AssetSourceFactory(path: string, options: { mimeType?: string | null | undefined } = {}): AssetSource {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AssetSource", "", [{"name":"path","required":true,"positional":true},{"name":"mimeType"}], [path], options) as AssetSource;
}
const _AssetSourceProxy = {type: "flax.audio/audio#type:AssetSource", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"setOnPlayer":_flaxMemberParameters3,"toString":_flaxMemberParameters1}, getters: ["path","mimeType"], setters: [], contextMembers: [], superMembers: ["get:path","get:mimeType","setOnPlayer","toString"]} as const;
export interface _AssetSourceNative extends AssetSource {
readonly [_flaxDartTypeValue]: _AssetSourceNative;

setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
get path(): string;
get mimeType(): string | null;
}
export abstract class _AssetSourceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetSource>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AssetSource;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AssetSource", readonly [], false];
constructor(path: string, options?: {mimeType?: string | null | undefined}) { super(_AssetSourceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AssetSourceNative.prototype, _AssetSourceProxy);
export namespace _AssetSourceFactory { export function implement(args: [path: string, options?: {mimeType?: string | null | undefined}], implementation: {}): AssetSource {
return constructProxy(_AssetSourceProxy, args, implementation) as AssetSource; } }
const _AssetSourceBinding = _flaxProxyFactory(_AssetSourceFactory, _AssetSourceNative) as unknown as typeof _AssetSourceFactory & (new(path: string, options?: {mimeType?: string | null | undefined}) => _AssetSourceNative);
export const AssetSource: typeof _AssetSourceBinding & _FlaxInstanceType<AssetSource> & _FlaxDartType<AssetSource, readonly ["class", "flax.audio/audio#type:AssetSource", readonly [], false]> = _flaxBindInstanceType<AssetSource, typeof _AssetSourceBinding>(_AssetSourceBinding, "flax.audio/audio#type:AssetSource", ["flax.audio/audio#type:Source","dart:core::Object"]) as typeof _AssetSourceBinding & _FlaxInstanceType<AssetSource> & _FlaxDartType<AssetSource, readonly ["class", "flax.audio/audio#type:AssetSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "path" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::AssetSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
