import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FramePhase extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::FramePhase">, Readonly<{
    "__flaxBound:dart:ui::FramePhase": readonly [];
}> {
    readonly __FramePhase: unique symbol;
    readonly [_flaxDartTypeValue]: FramePhase;
    readonly name: string;
    readonly index: number;
}
export declare const FramePhase: Readonly<{
    vsyncStart: FramePhase;
    buildStart: FramePhase;
    buildFinish: FramePhase;
    rasterStart: FramePhase;
    rasterFinish: FramePhase;
    rasterFinishWallTime: FramePhase;
    values: readonly FramePhase[];
} & _FlaxInstanceType<FramePhase> & _FlaxDartType<FramePhase, readonly ["class", "flax.core/sdk_dart_ui#type:FramePhase", readonly [], false]>>;
