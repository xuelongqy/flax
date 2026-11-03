// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters1, _flaxMemberParameters32 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioPlayerException extends Readonly<{ "__flaxBound:package:audioplayers/src/audio_logger.dart::AudioPlayerException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __AudioPlayerException: unique symbol;
readonly [_flaxDartTypeValue]: AudioPlayerException;

get cause(): unknown | null;
get player(): upstream0.AudioPlayer;
toString(): string;
set cause(value: unknown | null);
set player(value: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>);
}
defineObject("flax.audio/audio#type:AudioPlayerException", ["cause","player"], ["cause","player"], _flaxBindingMethods("flax.audio/audio#type:AudioPlayerException", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _AudioPlayerExceptionFactory(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>, options: { cause?: unknown | null | undefined } = {}): AudioPlayerException {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioPlayerException", "", [{"name":"player","required":true,"positional":true},{"name":"cause"}], [player], options) as AudioPlayerException;
}
const _AudioPlayerExceptionProxy = {type: "flax.audio/audio#type:AudioPlayerException", parameters: _flaxMemberParameters32, constructors: {"": _flaxMemberParameters32}, methods: {"toString":_flaxMemberParameters1}, getters: ["cause","player"], setters: ["cause","player"], contextMembers: [], superMembers: ["get:cause","get:player","set:cause","set:player","toString"]} as const;
export interface _AudioPlayerExceptionNative extends AudioPlayerException {
readonly [_flaxDartTypeValue]: _AudioPlayerExceptionNative;

toString(): string;
get cause(): unknown | null;
get player(): upstream0.AudioPlayer;
set cause(value: unknown | null);
set player(value: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>);
}
export abstract class _AudioPlayerExceptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioPlayerException>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioPlayerException;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioPlayerException", readonly [], false];
constructor(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>, options?: {cause?: unknown | null | undefined}) { super(_AudioPlayerExceptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioPlayerExceptionNative.prototype, _AudioPlayerExceptionProxy);
export namespace _AudioPlayerExceptionFactory { export function implement(args: [player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>, options?: {cause?: unknown | null | undefined}], implementation: {}): AudioPlayerException {
return constructProxy(_AudioPlayerExceptionProxy, args, implementation) as AudioPlayerException; } }
const _AudioPlayerExceptionBinding = _flaxProxyFactory(_AudioPlayerExceptionFactory, _AudioPlayerExceptionNative) as unknown as typeof _AudioPlayerExceptionFactory & (new(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>, options?: {cause?: unknown | null | undefined}) => _AudioPlayerExceptionNative);
export const AudioPlayerException: typeof _AudioPlayerExceptionBinding & _FlaxInstanceType<AudioPlayerException> & _FlaxDartType<AudioPlayerException, readonly ["class", "flax.audio/audio#type:AudioPlayerException", readonly [], false]> = _flaxBindInstanceType<AudioPlayerException, typeof _AudioPlayerExceptionBinding>(_AudioPlayerExceptionBinding, "flax.audio/audio#type:AudioPlayerException", ["dart:core::Object","dart:core::Exception"]) as typeof _AudioPlayerExceptionBinding & _FlaxInstanceType<AudioPlayerException> & _FlaxDartType<AudioPlayerException, readonly ["class", "flax.audio/audio#type:AudioPlayerException", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cause" | "player" | "toString" | "__flaxBound:package:audioplayers/src/audio_logger.dart::AudioPlayerException" | "__flaxBound:dart:core::Exception";
