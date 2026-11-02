// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_VideoPlayerWebOptions';
import '@flax/video-player/_bindings/video_VideoPlayerWebOptions';
import { _flaxMemberParameters15 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoPlayerOptions extends Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [] }> { readonly __VideoPlayerOptions: unique symbol;
readonly [_flaxDartTypeValue]: VideoPlayerOptions;

readonly allowBackgroundPlayback: boolean;
readonly mixWithOthers: boolean;
readonly preventsDisplaySleepDuringVideoPlayback: boolean;
readonly webOptions: upstream0.VideoPlayerWebOptions | null;
readonly backBufferDurationMs: number | null;
}
defineObject("flax.video/video#type:VideoPlayerOptions", ["allowBackgroundPlayback","mixWithOthers","preventsDisplaySleepDuringVideoPlayback","webOptions","backBufferDurationMs"], [], _flaxBindingMethods("flax.video/video#type:VideoPlayerOptions", "object", {}, {}), []);
export function _VideoPlayerOptionsFactory(options: { mixWithOthers?: boolean | undefined; allowBackgroundPlayback?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined; webOptions?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [] }> | null | undefined; backBufferDurationMs?: number | null | undefined } = {}): VideoPlayerOptions {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoPlayerOptions", "", [{"name":"mixWithOthers"},{"name":"allowBackgroundPlayback"},{"name":"preventsDisplaySleepDuringVideoPlayback"},{"name":"webOptions"},{"name":"backBufferDurationMs"}], [], options) as VideoPlayerOptions;
}
const _VideoPlayerOptionsProxy = {type: "flax.video/video#type:VideoPlayerOptions", parameters: _flaxMemberParameters15, constructors: {"": _flaxMemberParameters15}, methods: {}, getters: ["allowBackgroundPlayback","mixWithOthers","preventsDisplaySleepDuringVideoPlayback","webOptions","backBufferDurationMs"], setters: [], contextMembers: [], superMembers: ["get:allowBackgroundPlayback","get:mixWithOthers","get:preventsDisplaySleepDuringVideoPlayback","get:webOptions","get:backBufferDurationMs"]} as const;
export interface _VideoPlayerOptionsNative extends VideoPlayerOptions {
readonly [_flaxDartTypeValue]: _VideoPlayerOptionsNative;

get allowBackgroundPlayback(): boolean;
get mixWithOthers(): boolean;
get preventsDisplaySleepDuringVideoPlayback(): boolean;
get webOptions(): upstream0.VideoPlayerWebOptions | null;
get backBufferDurationMs(): number | null;
}
export abstract class _VideoPlayerOptionsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerOptions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoPlayerOptions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerOptions", readonly [], false];
constructor(options?: {mixWithOthers?: boolean | undefined; allowBackgroundPlayback?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined; webOptions?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [] }> | null | undefined; backBufferDurationMs?: number | null | undefined}) { super(_VideoPlayerOptionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VideoPlayerOptionsNative.prototype, _VideoPlayerOptionsProxy);
export namespace _VideoPlayerOptionsFactory { export function implement(args: [options?: {mixWithOthers?: boolean | undefined; allowBackgroundPlayback?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined; webOptions?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [] }> | null | undefined; backBufferDurationMs?: number | null | undefined}], implementation: {}): VideoPlayerOptions {
return constructProxy(_VideoPlayerOptionsProxy, args, implementation) as VideoPlayerOptions; } }
const _VideoPlayerOptionsBinding = _flaxProxyFactory(_VideoPlayerOptionsFactory, _VideoPlayerOptionsNative) as unknown as typeof _VideoPlayerOptionsFactory & (new(options?: {mixWithOthers?: boolean | undefined; allowBackgroundPlayback?: boolean | undefined; preventsDisplaySleepDuringVideoPlayback?: boolean | undefined; webOptions?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [] }> | null | undefined; backBufferDurationMs?: number | null | undefined}) => _VideoPlayerOptionsNative);
export const VideoPlayerOptions: typeof _VideoPlayerOptionsBinding & _FlaxInstanceType<VideoPlayerOptions> & _FlaxDartType<VideoPlayerOptions, readonly ["class", "flax.video/video#type:VideoPlayerOptions", readonly [], false]> = _flaxBindInstanceType<VideoPlayerOptions, typeof _VideoPlayerOptionsBinding>(_VideoPlayerOptionsBinding, "flax.video/video#type:VideoPlayerOptions", ["dart:core::Object"]) as typeof _VideoPlayerOptionsBinding & _FlaxInstanceType<VideoPlayerOptions> & _FlaxDartType<VideoPlayerOptions, readonly ["class", "flax.video/video#type:VideoPlayerOptions", readonly [], false]>;
