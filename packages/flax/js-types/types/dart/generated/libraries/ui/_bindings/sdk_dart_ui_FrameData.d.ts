import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FrameData extends Readonly<{
    "__flaxBound:dart:ui::FrameData": readonly [];
}> {
    readonly __FrameData: unique symbol;
    readonly [_flaxDartTypeValue]: FrameData;
    readonly frameNumber: number;
}
export declare namespace _FrameDataFactory {
    function implement(args: [], implementation: {
        get frameNumber(): number;
    }): FrameData;
}
export declare const FrameData: typeof _FrameDataFactory & _FlaxInstanceType<FrameData> & _FlaxDartType<FrameData, readonly ["class", "flax.core/sdk_dart_ui#type:FrameData", readonly [], false]>;
