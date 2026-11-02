import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoViewType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoViewType": readonly [];
}> {
    readonly __VideoViewType: unique symbol;
    readonly [_flaxDartTypeValue]: VideoViewType;
    readonly name: string;
    readonly index: number;
}
export declare const VideoViewType: Readonly<{
    textureView: VideoViewType;
    platformView: VideoViewType;
    values: readonly VideoViewType[];
} & _FlaxInstanceType<VideoViewType> & _FlaxDartType<VideoViewType, readonly ["class", "flax.video/video#type:VideoViewType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoViewType";
export {};
