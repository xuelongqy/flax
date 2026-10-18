import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverflowBarAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/overflow_bar.dart::OverflowBarAlignment">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overflow_bar.dart::OverflowBarAlignment": readonly [];
}> {
    readonly __OverflowBarAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: OverflowBarAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const OverflowBarAlignment: Readonly<{
    start: OverflowBarAlignment;
    end: OverflowBarAlignment;
    center: OverflowBarAlignment;
    values: readonly OverflowBarAlignment[];
} & _FlaxInstanceType<OverflowBarAlignment> & _FlaxDartType<OverflowBarAlignment, readonly ["class", "flax.core/sdk_widgets#type:OverflowBarAlignment", readonly [], false]>>;
