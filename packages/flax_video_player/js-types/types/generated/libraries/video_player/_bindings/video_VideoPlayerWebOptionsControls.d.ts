import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoPlayerWebOptionsControls extends Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [];
}> {
    readonly __VideoPlayerWebOptionsControls: unique symbol;
    readonly [_flaxDartTypeValue]: VideoPlayerWebOptionsControls;
    readonly enabled: boolean;
    readonly allowDownload: boolean;
    readonly allowFullscreen: boolean;
    readonly allowPlaybackRate: boolean;
    readonly allowPictureInPicture: boolean;
    readonly controlsList: string;
}
export declare namespace _VideoPlayerWebOptionsControlsFactory {
    function implement(args: [], implementation: {
        get enabled(): boolean;
        get allowDownload(): boolean;
        get allowFullscreen(): boolean;
        get allowPlaybackRate(): boolean;
        get allowPictureInPicture(): boolean;
        get controlsList(): string;
    }): VideoPlayerWebOptionsControls;
}
export declare const VideoPlayerWebOptionsControls: typeof _VideoPlayerWebOptionsControlsFactory & _FlaxInstanceType<VideoPlayerWebOptionsControls> & _FlaxDartType<VideoPlayerWebOptionsControls, readonly ["class", "flax.video/video#type:VideoPlayerWebOptionsControls", readonly [], false]>;
