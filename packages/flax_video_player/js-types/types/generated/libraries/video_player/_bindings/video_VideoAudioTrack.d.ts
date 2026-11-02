import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoAudioTrack extends Readonly<{
    "__flaxBound:package:video_player/video_player.dart::VideoAudioTrack": readonly [];
}> {
    readonly __VideoAudioTrack: unique symbol;
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
export declare function _VideoAudioTrackFactory(options: {
    id: string;
    isSelected: boolean;
    label?: string | null | undefined;
    language?: string | null | undefined;
    bitrate?: number | null | undefined;
    sampleRate?: number | null | undefined;
    channelCount?: number | null | undefined;
    codec?: string | null | undefined;
}): VideoAudioTrack;
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
export declare abstract class _VideoAudioTrackNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoAudioTrack>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoAudioTrack;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoAudioTrack", readonly [], false];
    constructor(options: {
        id: string;
        isSelected: boolean;
        label?: string | null | undefined;
        language?: string | null | undefined;
        bitrate?: number | null | undefined;
        sampleRate?: number | null | undefined;
        channelCount?: number | null | undefined;
        codec?: string | null | undefined;
    });
}
export declare namespace _VideoAudioTrackFactory {
    function implement(args: [options: {
        id: string;
        isSelected: boolean;
        label?: string | null | undefined;
        language?: string | null | undefined;
        bitrate?: number | null | undefined;
        sampleRate?: number | null | undefined;
        channelCount?: number | null | undefined;
        codec?: string | null | undefined;
    }], implementation: {}): VideoAudioTrack;
}
declare const _VideoAudioTrackBinding: typeof _VideoAudioTrackFactory & (new (options: {
    id: string;
    isSelected: boolean;
    label?: string | null | undefined;
    language?: string | null | undefined;
    bitrate?: number | null | undefined;
    sampleRate?: number | null | undefined;
    channelCount?: number | null | undefined;
    codec?: string | null | undefined;
}) => _VideoAudioTrackNative);
export declare const VideoAudioTrack: typeof _VideoAudioTrackBinding & _FlaxInstanceType<VideoAudioTrack> & _FlaxDartType<VideoAudioTrack, readonly ["class", "flax.video/video#type:VideoAudioTrack", readonly [], false]>;
export {};
