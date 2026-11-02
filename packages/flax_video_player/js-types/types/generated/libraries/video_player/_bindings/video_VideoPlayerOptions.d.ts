import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_VideoPlayerWebOptions';
import '@flax/video-player/_bindings/video_VideoPlayerWebOptions';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoPlayerOptions extends Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
}> {
    readonly __VideoPlayerOptions: unique symbol;
    readonly [_flaxDartTypeValue]: VideoPlayerOptions;
    readonly allowBackgroundPlayback: boolean;
    readonly mixWithOthers: boolean;
    readonly preventsDisplaySleepDuringVideoPlayback: boolean;
    readonly webOptions: upstream0.VideoPlayerWebOptions | null;
    readonly backBufferDurationMs: number | null;
}
export declare function _VideoPlayerOptionsFactory(options?: {
    mixWithOthers?: boolean | undefined;
    allowBackgroundPlayback?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    webOptions?: Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [];
    }> | null | undefined;
    backBufferDurationMs?: number | null | undefined;
}): VideoPlayerOptions;
export interface _VideoPlayerOptionsNative extends VideoPlayerOptions {
    readonly [_flaxDartTypeValue]: _VideoPlayerOptionsNative;
    get allowBackgroundPlayback(): boolean;
    get mixWithOthers(): boolean;
    get preventsDisplaySleepDuringVideoPlayback(): boolean;
    get webOptions(): upstream0.VideoPlayerWebOptions | null;
    get backBufferDurationMs(): number | null;
}
export declare abstract class _VideoPlayerOptionsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerOptions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoPlayerOptions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerOptions", readonly [], false];
    constructor(options?: {
        mixWithOthers?: boolean | undefined;
        allowBackgroundPlayback?: boolean | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
        webOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [];
        }> | null | undefined;
        backBufferDurationMs?: number | null | undefined;
    });
}
export declare namespace _VideoPlayerOptionsFactory {
    function implement(args: [options?: {
        mixWithOthers?: boolean | undefined;
        allowBackgroundPlayback?: boolean | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
        webOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [];
        }> | null | undefined;
        backBufferDurationMs?: number | null | undefined;
    }], implementation: {}): VideoPlayerOptions;
}
declare const _VideoPlayerOptionsBinding: typeof _VideoPlayerOptionsFactory & (new (options?: {
    mixWithOthers?: boolean | undefined;
    allowBackgroundPlayback?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    webOptions?: Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [];
    }> | null | undefined;
    backBufferDurationMs?: number | null | undefined;
}) => _VideoPlayerOptionsNative);
export declare const VideoPlayerOptions: typeof _VideoPlayerOptionsBinding & _FlaxInstanceType<VideoPlayerOptions> & _FlaxDartType<VideoPlayerOptions, readonly ["class", "flax.video/video#type:VideoPlayerOptions", readonly [], false]>;
export {};
