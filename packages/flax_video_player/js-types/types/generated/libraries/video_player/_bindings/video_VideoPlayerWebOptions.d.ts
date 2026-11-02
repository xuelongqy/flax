import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_VideoPlayerWebOptionsControls';
import '@flax/video-player/_bindings/video_VideoPlayerWebOptionsControls';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoPlayerWebOptions extends Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [];
}> {
    readonly __VideoPlayerWebOptions: unique symbol;
    readonly [_flaxDartTypeValue]: VideoPlayerWebOptions;
    readonly controls: upstream0.VideoPlayerWebOptionsControls;
    readonly allowContextMenu: boolean;
    readonly allowRemotePlayback: boolean;
    readonly poster: upstream1.Uri | null;
}
export declare function _VideoPlayerWebOptionsFactory(options?: {
    controls?: Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [];
    }> | undefined;
    allowContextMenu?: boolean | undefined;
    allowRemotePlayback?: boolean | undefined;
    poster?: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null | undefined;
}): VideoPlayerWebOptions;
export interface _VideoPlayerWebOptionsNative extends VideoPlayerWebOptions {
    readonly [_flaxDartTypeValue]: _VideoPlayerWebOptionsNative;
    get controls(): upstream0.VideoPlayerWebOptionsControls;
    get allowContextMenu(): boolean;
    get allowRemotePlayback(): boolean;
    get poster(): upstream1.Uri | null;
}
export declare abstract class _VideoPlayerWebOptionsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerWebOptions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoPlayerWebOptions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerWebOptions", readonly [], false];
    constructor(options?: {
        controls?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [];
        }> | undefined;
        allowContextMenu?: boolean | undefined;
        allowRemotePlayback?: boolean | undefined;
        poster?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
    });
}
export declare namespace _VideoPlayerWebOptionsFactory {
    function implement(args: [options?: {
        controls?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [];
        }> | undefined;
        allowContextMenu?: boolean | undefined;
        allowRemotePlayback?: boolean | undefined;
        poster?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
    }], implementation: {}): VideoPlayerWebOptions;
}
declare const _VideoPlayerWebOptionsBinding: typeof _VideoPlayerWebOptionsFactory & (new (options?: {
    controls?: Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [];
    }> | undefined;
    allowContextMenu?: boolean | undefined;
    allowRemotePlayback?: boolean | undefined;
    poster?: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null | undefined;
}) => _VideoPlayerWebOptionsNative);
export declare const VideoPlayerWebOptions: typeof _VideoPlayerWebOptionsBinding & _FlaxInstanceType<VideoPlayerWebOptions> & _FlaxDartType<VideoPlayerWebOptions, readonly ["class", "flax.video/video#type:VideoPlayerWebOptions", readonly [], false]>;
export {};
