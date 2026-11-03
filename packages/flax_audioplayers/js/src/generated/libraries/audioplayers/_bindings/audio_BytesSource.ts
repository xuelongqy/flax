// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters1, _flaxMemberParameters30, _flaxMemberParameters3 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BytesSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::BytesSource": readonly [] }>, Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> { readonly __BytesSource: unique symbol;
readonly [_flaxDartTypeValue]: BytesSource;

readonly mimeType: string | null;
readonly bytes: globalThis.Uint8Array;
setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
}
defineObject("flax.audio/audio#type:BytesSource", ["mimeType","bytes"], [], _flaxBindingMethods("flax.audio/audio#type:BytesSource", "object", {"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.audio/audio#type:Source");
export function _BytesSourceFactory(bytes: globalThis.Uint8Array, options: { mimeType?: string | null | undefined } = {}): BytesSource {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:BytesSource", "", [{"name":"bytes","required":true,"positional":true},{"name":"mimeType"}], [bytes], options) as BytesSource;
}
const _BytesSourceProxy = {type: "flax.audio/audio#type:BytesSource", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"setOnPlayer":_flaxMemberParameters3,"toString":_flaxMemberParameters1}, getters: ["bytes","mimeType"], setters: [], contextMembers: [], superMembers: ["get:bytes","get:mimeType","setOnPlayer","toString"]} as const;
export interface _BytesSourceNative extends BytesSource {
readonly [_flaxDartTypeValue]: _BytesSourceNative;

setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
toString(): string;
get bytes(): globalThis.Uint8Array;
get mimeType(): string | null;
}
export abstract class _BytesSourceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BytesSource>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BytesSource;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:BytesSource", readonly [], false];
constructor(bytes: globalThis.Uint8Array, options?: {mimeType?: string | null | undefined}) { super(_BytesSourceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BytesSourceNative.prototype, _BytesSourceProxy);
export namespace _BytesSourceFactory { export function implement(args: [bytes: globalThis.Uint8Array, options?: {mimeType?: string | null | undefined}], implementation: {}): BytesSource {
return constructProxy(_BytesSourceProxy, args, implementation) as BytesSource; } }
const _BytesSourceBinding = _flaxProxyFactory(_BytesSourceFactory, _BytesSourceNative) as unknown as typeof _BytesSourceFactory & (new(bytes: globalThis.Uint8Array, options?: {mimeType?: string | null | undefined}) => _BytesSourceNative);
export const BytesSource: typeof _BytesSourceBinding & _FlaxInstanceType<BytesSource> & _FlaxDartType<BytesSource, readonly ["class", "flax.audio/audio#type:BytesSource", readonly [], false]> = _flaxBindInstanceType<BytesSource, typeof _BytesSourceBinding>(_BytesSourceBinding, "flax.audio/audio#type:BytesSource", ["flax.audio/audio#type:Source","dart:core::Object"]) as typeof _BytesSourceBinding & _FlaxInstanceType<BytesSource> & _FlaxDartType<BytesSource, readonly ["class", "flax.audio/audio#type:BytesSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "bytes" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::BytesSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
