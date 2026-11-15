import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipOverlapBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::ClipOverlapBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_clip.dart::ClipOverlapBehavior": readonly [];
}> {
    readonly __ClipOverlapBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: ClipOverlapBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const ClipOverlapBehavior: Readonly<{
    none: ClipOverlapBehavior;
    followEdge: ClipOverlapBehavior;
    preserveShape: ClipOverlapBehavior;
    values: readonly ClipOverlapBehavior[];
} & _FlaxInstanceType<ClipOverlapBehavior> & _FlaxDartType<ClipOverlapBehavior, readonly ["class", "flax.core/sdk_rendering#type:ClipOverlapBehavior", readonly [], false]>>;
