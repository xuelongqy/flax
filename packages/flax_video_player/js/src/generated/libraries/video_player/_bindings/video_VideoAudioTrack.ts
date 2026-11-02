// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters5 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoAudioTrack extends Readonly<{ "__flaxBound:package:video_player/video_player.dart::VideoAudioTrack": readonly [] }> { readonly __VideoAudioTrack: unique symbol;
readonly [_flaxDartTypeValue]: VideoAudioTrack;

readonly id: string;
readonly label: string | null;
readonly language: string | null;
readonly isSelected: boolean;
readonly bitrate: number | null;
readonly sampleRate: number | null;
readonly channelCount: number | null;
readonly codec: string | null;
toString(): string;
}
defineObject("flax.video/video#type:VideoAudioTrack", ["id","label","language","isSelected","bitrate","sampleRate","channelCount","codec"], [], _flaxBindingMethods("flax.video/video#type:VideoAudioTrack", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _VideoAudioTrackFactory(options: { id: string; isSelected: boolean; label?: string | null | undefined; language?: string | null | undefined; bitrate?: number | null | undefined; sampleRate?: number | null | undefined; channelCount?: number | null | undefined; codec?: string | null | undefined }): VideoAudioTrack {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoAudioTrack", "", [{"name":"id","required":true},{"name":"isSelected","required":true},{"name":"label"},{"name":"language"},{"name":"bitrate"},{"name":"sampleRate"},{"name":"channelCount"},{"name":"codec"}], [], options) as VideoAudioTrack;
}
const _VideoAudioTrackProxy = {type: "flax.video/video#type:VideoAudioTrack", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5}, methods: {"toString":_flaxMemberParameters0}, getters: ["id","label","language","isSelected","bitrate","sampleRate","channelCount","codec"], setters: [], contextMembers: [], superMembers: ["get:id","get:label","get:language","get:isSelected","get:bitrate","get:sampleRate","get:channelCount","get:codec","toString"]} as const;
export interface _VideoAudioTrackNative extends VideoAudioTrack {
readonly [_flaxDartTypeValue]: _VideoAudioTrackNative;

toString(): string;
get id(): string;
get label(): string | null;
get language(): string | null;
get isSelected(): boolean;
get bitrate(): number | null;
get sampleRate(): number | null;
get channelCount(): number | null;
get codec(): string | null;
}
export abstract class _VideoAudioTrackNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoAudioTrack>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoAudioTrack;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoAudioTrack", readonly [], false];
constructor(options: {id: string; isSelected: boolean; label?: string | null | undefined; language?: string | null | undefined; bitrate?: number | null | undefined; sampleRate?: number | null | undefined; channelCount?: number | null | undefined; codec?: string | null | undefined}) { super(_VideoAudioTrackProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VideoAudioTrackNative.prototype, _VideoAudioTrackProxy);
export namespace _VideoAudioTrackFactory { export function implement(args: [options: {id: string; isSelected: boolean; label?: string | null | undefined; language?: string | null | undefined; bitrate?: number | null | undefined; sampleRate?: number | null | undefined; channelCount?: number | null | undefined; codec?: string | null | undefined}], implementation: {}): VideoAudioTrack {
return constructProxy(_VideoAudioTrackProxy, args, implementation) as VideoAudioTrack; } }
const _VideoAudioTrackBinding = _flaxProxyFactory(_VideoAudioTrackFactory, _VideoAudioTrackNative) as unknown as typeof _VideoAudioTrackFactory & (new(options: {id: string; isSelected: boolean; label?: string | null | undefined; language?: string | null | undefined; bitrate?: number | null | undefined; sampleRate?: number | null | undefined; channelCount?: number | null | undefined; codec?: string | null | undefined}) => _VideoAudioTrackNative);
export const VideoAudioTrack: typeof _VideoAudioTrackBinding & _FlaxInstanceType<VideoAudioTrack> & _FlaxDartType<VideoAudioTrack, readonly ["class", "flax.video/video#type:VideoAudioTrack", readonly [], false]> = _flaxBindInstanceType<VideoAudioTrack, typeof _VideoAudioTrackBinding>(_VideoAudioTrackBinding, "flax.video/video#type:VideoAudioTrack", ["dart:core::Object"]) as typeof _VideoAudioTrackBinding & _FlaxInstanceType<VideoAudioTrack> & _FlaxDartType<VideoAudioTrack, readonly ["class", "flax.video/video#type:VideoAudioTrack", readonly [], false]>;
