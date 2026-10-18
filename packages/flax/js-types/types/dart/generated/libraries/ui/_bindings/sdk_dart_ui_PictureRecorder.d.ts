import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PictureRecorder extends Readonly<{
    "__flaxBound:dart:ui::PictureRecorder": readonly [];
}> {
    readonly __PictureRecorder: unique symbol;
    readonly [_flaxDartTypeValue]: PictureRecorder;
    readonly isRecording: boolean;
    endRecording(): upstream0.Picture;
}
export declare function _PictureRecorderFactory(): PictureRecorder;
export declare namespace _PictureRecorderFactory {
    function implement(args: [], implementation: {
        endRecording: (() => Readonly<{
            "__flaxBound:dart:ui::Picture": readonly [];
        }>);
        get isRecording(): boolean;
    }): PictureRecorder;
}
export declare const PictureRecorder: typeof _PictureRecorderFactory & _FlaxInstanceType<PictureRecorder> & _FlaxDartType<PictureRecorder, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRecorder", readonly [], false]>;
