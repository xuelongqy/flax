// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters1, _flaxMemberParameters29, _flaxMemberParameters3 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UrlSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::UrlSource": readonly [] }>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> { readonly __UrlSource: unique symbol;
readonly [_flaxDartTypeValue]: UrlSource;

readonly mimeType: string | null;
readonly url: string;
setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
}
defineObject("flax.audio/audio#type:UrlSource", ["mimeType","url"], [], _flaxBindingMethods("flax.audio/audio#type:UrlSource", "object", {"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.audio/audio#type:Source");
export function _UrlSourceFactory(url: string, options: { mimeType?: string | null | undefined } = {}): UrlSource {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:UrlSource", "", [{"name":"url","required":true,"positional":true},{"name":"mimeType"}], [url], options) as UrlSource;
}
const _UrlSourceProxy = {type: "flax.audio/audio#type:UrlSource", parameters: _flaxMemberParameters29, constructors: {"": _flaxMemberParameters29}, methods: {"setOnPlayer":_flaxMemberParameters3,"toString":_flaxMemberParameters1}, getters: ["url","mimeType"], setters: [], contextMembers: [], superMembers: ["get:url","get:mimeType","setOnPlayer","toString"]} as const;
export interface _UrlSourceNative extends UrlSource {
readonly [_flaxDartTypeValue]: _UrlSourceNative;

setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
get url(): string;
get mimeType(): string | null;
}
export abstract class _UrlSourceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UrlSource>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UrlSource;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:UrlSource", readonly [], false];
constructor(url: string, options?: {mimeType?: string | null | undefined}) { super(_UrlSourceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UrlSourceNative.prototype, _UrlSourceProxy);
export namespace _UrlSourceFactory { export function implement(args: [url: string, options?: {mimeType?: string | null | undefined}], implementation: {}): UrlSource {
return constructProxy(_UrlSourceProxy, args, implementation) as UrlSource; } }
const _UrlSourceBinding = _flaxProxyFactory(_UrlSourceFactory, _UrlSourceNative) as unknown as typeof _UrlSourceFactory & (new(url: string, options?: {mimeType?: string | null | undefined}) => _UrlSourceNative);
export const UrlSource: typeof _UrlSourceBinding & _FlaxInstanceType<UrlSource> & _FlaxDartType<UrlSource, readonly ["class", "flax.audio/audio#type:UrlSource", readonly [], false]> = _flaxBindInstanceType<UrlSource, typeof _UrlSourceBinding>(_UrlSourceBinding, "flax.audio/audio#type:UrlSource", ["flax.audio/audio#type:Source","dart:core::Object"]) as typeof _UrlSourceBinding & _FlaxInstanceType<UrlSource> & _FlaxDartType<UrlSource, readonly ["class", "flax.audio/audio#type:UrlSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "url" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::UrlSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
