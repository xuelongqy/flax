import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollPositionAlignmentPolicy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPositionAlignmentPolicy">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPositionAlignmentPolicy": readonly [];
}> {
    readonly __ScrollPositionAlignmentPolicy: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollPositionAlignmentPolicy;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollPositionAlignmentPolicy: Readonly<{
    explicit: ScrollPositionAlignmentPolicy;
    keepVisibleAtEnd: ScrollPositionAlignmentPolicy;
    keepVisibleAtStart: ScrollPositionAlignmentPolicy;
    values: readonly ScrollPositionAlignmentPolicy[];
} & _FlaxInstanceType<ScrollPositionAlignmentPolicy> & _FlaxDartType<ScrollPositionAlignmentPolicy, readonly ["class", "flax.core/sdk_widgets#type:ScrollPositionAlignmentPolicy", readonly [], false]>>;
