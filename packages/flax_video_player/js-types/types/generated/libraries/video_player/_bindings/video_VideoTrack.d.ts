import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoTrack extends Readonly<{
    "__flaxBound:package:video_player/video_player.dart::VideoTrack": readonly [];
}> {
    readonly __VideoTrack: unique symbol;
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
export declare function _VideoTrackFactory(options: {
    id: string;
    isSelected: boolean;
    label?: string | null | undefined;
    bitrate?: number | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    frameRate?: number | null | undefined;
    codec?: string | null | undefined;
}): VideoTrack;
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
export declare abstract class _VideoTrackNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoTrack>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoTrack;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoTrack", readonly [], false];
    constructor(options: {
        id: string;
        isSelected: boolean;
        label?: string | null | undefined;
        bitrate?: number | null | undefined;
        width?: number | null | undefined;
        height?: number | null | undefined;
        frameRate?: number | null | undefined;
        codec?: string | null | undefined;
    });
}
export declare namespace _VideoTrackFactory {
    function implement(args: [options: {
        id: string;
        isSelected: boolean;
        label?: string | null | undefined;
        bitrate?: number | null | undefined;
        width?: number | null | undefined;
        height?: number | null | undefined;
        frameRate?: number | null | undefined;
        codec?: string | null | undefined;
    }], implementation: {}): VideoTrack;
}
declare const _VideoTrackBinding: typeof _VideoTrackFactory & (new (options: {
    id: string;
    isSelected: boolean;
    label?: string | null | undefined;
    bitrate?: number | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    frameRate?: number | null | undefined;
    codec?: string | null | undefined;
}) => _VideoTrackNative);
export declare const VideoTrack: typeof _VideoTrackBinding & _FlaxInstanceType<VideoTrack> & _FlaxDartType<VideoTrack, readonly ["class", "flax.video/video#type:VideoTrack", readonly [], false]>;
export {};
