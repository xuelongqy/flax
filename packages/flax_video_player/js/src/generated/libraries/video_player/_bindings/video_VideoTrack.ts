// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters21 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoTrack extends Readonly<{ "__flaxBound:package:video_player/video_player.dart::VideoTrack": readonly [] }> { readonly __VideoTrack: unique symbol;
readonly [_flaxDartTypeValue]: VideoTrack;

readonly id: string;
readonly isSelected: boolean;
readonly label: string | null;
readonly bitrate: number | null;
readonly width: number | null;
readonly height: number | null;
readonly frameRate: number | null;
readonly codec: string | null;
toString(): string;
}
defineObject("flax.video/video#type:VideoTrack", ["id","isSelected","label","bitrate","width","height","frameRate","codec"], [], _flaxBindingMethods("flax.video/video#type:VideoTrack", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _VideoTrackFactory(options: { id: string; isSelected: boolean; label?: string | null | undefined; bitrate?: number | null | undefined; width?: number | null | undefined; height?: number | null | undefined; frameRate?: number | null | undefined; codec?: string | null | undefined }): VideoTrack {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoTrack", "", [{"name":"id","required":true},{"name":"isSelected","required":true},{"name":"label"},{"name":"bitrate"},{"name":"width"},{"name":"height"},{"name":"frameRate"},{"name":"codec"}], [], options) as VideoTrack;
}
const _VideoTrackProxy = {type: "flax.video/video#type:VideoTrack", parameters: _flaxMemberParameters21, constructors: {"": _flaxMemberParameters21}, methods: {"toString":_flaxMemberParameters0}, getters: ["id","isSelected","label","bitrate","width","height","frameRate","codec"], setters: [], contextMembers: [], superMembers: ["get:id","get:isSelected","get:label","get:bitrate","get:width","get:height","get:frameRate","get:codec","toString"]} as const;
export interface _VideoTrackNative extends VideoTrack {
readonly [_flaxDartTypeValue]: _VideoTrackNative;

toString(): string;
get id(): string;
get isSelected(): boolean;
get label(): string | null;
get bitrate(): number | null;
get width(): number | null;
get height(): number | null;
get frameRate(): number | null;
get codec(): string | null;
}
export abstract class _VideoTrackNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoTrack>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoTrack;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoTrack", readonly [], false];
constructor(options: {id: string; isSelected: boolean; label?: string | null | undefined; bitrate?: number | null | undefined; width?: number | null | undefined; height?: number | null | undefined; frameRate?: number | null | undefined; codec?: string | null | undefined}) { super(_VideoTrackProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VideoTrackNative.prototype, _VideoTrackProxy);
export namespace _VideoTrackFactory { export function implement(args: [options: {id: string; isSelected: boolean; label?: string | null | undefined; bitrate?: number | null | undefined; width?: number | null | undefined; height?: number | null | undefined; frameRate?: number | null | undefined; codec?: string | null | undefined}], implementation: {}): VideoTrack {
return constructProxy(_VideoTrackProxy, args, implementation) as VideoTrack; } }
const _VideoTrackBinding = _flaxProxyFactory(_VideoTrackFactory, _VideoTrackNative) as unknown as typeof _VideoTrackFactory & (new(options: {id: string; isSelected: boolean; label?: string | null | undefined; bitrate?: number | null | undefined; width?: number | null | undefined; height?: number | null | undefined; frameRate?: number | null | undefined; codec?: string | null | undefined}) => _VideoTrackNative);
export const VideoTrack: typeof _VideoTrackBinding & _FlaxInstanceType<VideoTrack> & _FlaxDartType<VideoTrack, readonly ["class", "flax.video/video#type:VideoTrack", readonly [], false]> = _flaxBindInstanceType<VideoTrack, typeof _VideoTrackBinding>(_VideoTrackBinding, "flax.video/video#type:VideoTrack", ["dart:core::Object"]) as typeof _VideoTrackBinding & _FlaxInstanceType<VideoTrack> & _FlaxDartType<VideoTrack, readonly ["class", "flax.video/video#type:VideoTrack", readonly [], false]>;
