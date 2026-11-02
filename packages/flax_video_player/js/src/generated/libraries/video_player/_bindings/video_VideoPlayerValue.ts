// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import type * as upstream3 from '@flax/video-player/_bindings/video_DurationRange';
import '@flax/video-player/_bindings/video_DurationRange';
import { _flaxMemberParameters16, _flaxMemberParameters0, _flaxMemberParameters17, _flaxMemberParameters18 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoPlayerValue extends Readonly<{ "__flaxBound:package:video_player/video_player.dart::VideoPlayerValue": readonly [] }> { readonly __VideoPlayerValue: unique symbol;
readonly [_flaxDartTypeValue]: VideoPlayerValue;

readonly duration: upstream0.Duration;
readonly position: upstream0.Duration;
readonly caption: upstream2.Caption;
readonly captionOffset: upstream0.Duration;
readonly buffered: DartList<upstream3.DurationRange>;
readonly isPlaying: boolean;
readonly isLooping: boolean;
readonly isBuffering: boolean;
readonly volume: number;
readonly playbackSpeed: number;
readonly errorDescription: string | null;
readonly isCompleted: boolean;
readonly preventsDisplaySleepDuringVideoPlayback: boolean;
readonly size: upstream1.Size;
readonly rotationCorrection: number;
readonly isInitialized: boolean;
readonly hasError: boolean;
readonly aspectRatio: number;
copyWith(options?: {buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | null | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | null | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; errorDescription?: string | null | undefined; isBuffering?: boolean | null | undefined; isCompleted?: boolean | null | undefined; isInitialized?: boolean | null | undefined; isLooping?: boolean | null | undefined; isPlaying?: boolean | null | undefined; playbackSpeed?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | null | undefined; rotationCorrection?: number | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; volume?: number | null | undefined}): VideoPlayerValue;
toString(): string;
}
defineObject("flax.video/video#type:VideoPlayerValue", ["duration","position","caption","captionOffset","buffered","isPlaying","isLooping","isBuffering","volume","playbackSpeed","errorDescription","isCompleted","preventsDisplaySleepDuringVideoPlayback","size","rotationCorrection","isInitialized","hasError","aspectRatio"], [], _flaxBindingMethods("flax.video/video#type:VideoPlayerValue", "object", {"copyWith":_flaxMemberParameters16,"toString":_flaxMemberParameters0}, {}), []);
export function _VideoPlayerValueFactory(options: { duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | undefined; isInitialized?: boolean | undefined; isPlaying?: boolean | undefined; isLooping?: boolean | undefined; isBuffering?: boolean | undefined; volume?: number | undefined; playbackSpeed?: number | undefined; rotationCorrection?: number | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined }): VideoPlayerValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoPlayerValue", "", [{"name":"duration","required":true},{"name":"size"},{"name":"position"},{"name":"caption"},{"name":"captionOffset"},{"name":"buffered"},{"name":"isInitialized"},{"name":"isPlaying"},{"name":"isLooping"},{"name":"isBuffering"},{"name":"volume"},{"name":"playbackSpeed"},{"name":"rotationCorrection"},{"name":"errorDescription"},{"name":"isCompleted"},{"name":"preventsDisplaySleepDuringVideoPlayback"}], [], options) as VideoPlayerValue;
}
export namespace _VideoPlayerValueFactory {
export function uninitialized(): VideoPlayerValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoPlayerValue", "uninitialized", _flaxMemberParameters0, [], {}) as VideoPlayerValue;
}
}
export namespace _VideoPlayerValueFactory {
export function erroneous(errorDescription: string): VideoPlayerValue {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoPlayerValue", "erroneous", [{"name":"errorDescription","required":true,"positional":true}], [errorDescription], {}) as VideoPlayerValue;
}
}
const _VideoPlayerValueProxy = {type: "flax.video/video#type:VideoPlayerValue", parameters: _flaxMemberParameters17, constructors: {"": _flaxMemberParameters17,"uninitialized": _flaxMemberParameters0,"erroneous": _flaxMemberParameters18}, methods: {"copyWith":_flaxMemberParameters16,"toString":_flaxMemberParameters0}, getters: ["duration","position","caption","captionOffset","buffered","isPlaying","isLooping","isBuffering","volume","playbackSpeed","errorDescription","isCompleted","preventsDisplaySleepDuringVideoPlayback","size","rotationCorrection","isInitialized","hasError","aspectRatio"], setters: [], contextMembers: [], superMembers: ["get:duration","get:position","get:caption","get:captionOffset","get:buffered","get:isPlaying","get:isLooping","get:isBuffering","get:volume","get:playbackSpeed","get:errorDescription","get:isCompleted","get:preventsDisplaySleepDuringVideoPlayback","get:size","get:rotationCorrection","get:isInitialized","get:hasError","get:aspectRatio","copyWith","toString"]} as const;
export interface _VideoPlayerValueNative extends VideoPlayerValue {
readonly [_flaxDartTypeValue]: _VideoPlayerValueNative;
readonly [_flaxDartConstructors]?: {"": (options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | undefined; isInitialized?: boolean | undefined; isPlaying?: boolean | undefined; isLooping?: boolean | undefined; isBuffering?: boolean | undefined; volume?: number | undefined; playbackSpeed?: number | undefined; rotationCorrection?: number | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined}) => void;"uninitialized": () => void;"erroneous": (errorDescription: string) => void;};

copyWith(options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | null | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | null | undefined; isInitialized?: boolean | null | undefined; isPlaying?: boolean | null | undefined; isLooping?: boolean | null | undefined; isBuffering?: boolean | null | undefined; volume?: number | null | undefined; playbackSpeed?: number | null | undefined; rotationCorrection?: number | null | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | null | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | null | undefined}): VideoPlayerValue;
toString(): string;
get duration(): upstream0.Duration;
get position(): upstream0.Duration;
get caption(): upstream2.Caption;
get captionOffset(): upstream0.Duration;
get buffered(): DartList<upstream3.DurationRange>;
get isPlaying(): boolean;
get isLooping(): boolean;
get isBuffering(): boolean;
get volume(): number;
get playbackSpeed(): number;
get errorDescription(): string | null;
get isCompleted(): boolean;
get preventsDisplaySleepDuringVideoPlayback(): boolean;
get size(): upstream1.Size;
get rotationCorrection(): number;
get isInitialized(): boolean;
get hasError(): boolean;
get aspectRatio(): number;
}
export abstract class _VideoPlayerValueNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerValue>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoPlayerValue;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerValue", readonly [], false];
constructor(options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | undefined; isInitialized?: boolean | undefined; isPlaying?: boolean | undefined; isLooping?: boolean | undefined; isBuffering?: boolean | undefined; volume?: number | undefined; playbackSpeed?: number | undefined; rotationCorrection?: number | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined}); constructor(call: _FlaxProxySuper<_VideoPlayerValueNative>); constructor(...args: unknown[]) { super(_VideoPlayerValueProxy, args); }
}
_flaxDefineProxyBase(_VideoPlayerValueNative.prototype, _VideoPlayerValueProxy);
export namespace _VideoPlayerValueFactory { export function implement(args: [options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | undefined; isInitialized?: boolean | undefined; isPlaying?: boolean | undefined; isLooping?: boolean | undefined; isBuffering?: boolean | undefined; volume?: number | undefined; playbackSpeed?: number | undefined; rotationCorrection?: number | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined}], implementation: {}): VideoPlayerValue {
return constructProxy(_VideoPlayerValueProxy, args, implementation) as VideoPlayerValue; } }
const _VideoPlayerValueBinding = _flaxProxyFactory(_VideoPlayerValueFactory, _VideoPlayerValueNative) as unknown as typeof _VideoPlayerValueFactory & (new(options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; caption?: Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }> | undefined; captionOffset?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; buffered?: DartListInput<upstream3.DurationRange, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }>> | undefined; isInitialized?: boolean | undefined; isPlaying?: boolean | undefined; isLooping?: boolean | undefined; isBuffering?: boolean | undefined; volume?: number | undefined; playbackSpeed?: number | undefined; rotationCorrection?: number | undefined; errorDescription?: string | null | undefined; isCompleted?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined}) => _VideoPlayerValueNative) & (new(call: _FlaxProxySuper<_VideoPlayerValueNative>) => _VideoPlayerValueNative);
export const VideoPlayerValue: typeof _VideoPlayerValueBinding & _FlaxInstanceType<VideoPlayerValue> & _FlaxDartType<VideoPlayerValue, readonly ["class", "flax.video/video#type:VideoPlayerValue", readonly [], false]> = _flaxBindInstanceType<VideoPlayerValue, typeof _VideoPlayerValueBinding>(_VideoPlayerValueBinding, "flax.video/video#type:VideoPlayerValue", ["dart:core::Object"]) as typeof _VideoPlayerValueBinding & _FlaxInstanceType<VideoPlayerValue> & _FlaxDartType<VideoPlayerValue, readonly ["class", "flax.video/video#type:VideoPlayerValue", readonly [], false]>;
