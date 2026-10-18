import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverflowBoxFit extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::OverflowBoxFit">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::OverflowBoxFit": readonly [];
}> {
    readonly __OverflowBoxFit: unique symbol;
    readonly [_flaxDartTypeValue]: OverflowBoxFit;
    readonly name: string;
    readonly index: number;
}
export declare const OverflowBoxFit: Readonly<{
    max: OverflowBoxFit;
    deferToChild: OverflowBoxFit;
    values: readonly OverflowBoxFit[];
} & _FlaxInstanceType<OverflowBoxFit> & _FlaxDartType<OverflowBoxFit, readonly ["class", "flax.core/sdk_rendering#type:OverflowBoxFit", readonly [], false]>>;
