import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoFormat extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoFormat": readonly [];
}> {
    readonly __VideoFormat: unique symbol;
    readonly [_flaxDartTypeValue]: VideoFormat;
    readonly name: string;
    readonly index: number;
}
export declare const VideoFormat: Readonly<{
    dash: VideoFormat;
    hls: VideoFormat;
    ss: VideoFormat;
    other: VideoFormat;
    values: readonly VideoFormat[];
} & _FlaxInstanceType<VideoFormat> & _FlaxDartType<VideoFormat, readonly ["class", "flax.video/video#type:VideoFormat", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoFormat";
export {};
