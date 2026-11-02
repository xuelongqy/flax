import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClosedCaptionFile extends Readonly<{
    "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
}> {
    readonly __ClosedCaptionFile: unique symbol;
    readonly [_flaxDartTypeValue]: ClosedCaptionFile;
    readonly captions: DartList<upstream0.Caption>;
}
export declare namespace _ClosedCaptionFileFactory {
    function implement(args: [], implementation: {
        get captions(): DartListInput<upstream0.Caption, Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
        }>>;
    }): ClosedCaptionFile;
}
export declare const ClosedCaptionFile: typeof _ClosedCaptionFileFactory & _FlaxInstanceType<ClosedCaptionFile> & _FlaxDartType<ClosedCaptionFile, readonly ["class", "flax.video/video#type:ClosedCaptionFile", readonly [], false]>;
