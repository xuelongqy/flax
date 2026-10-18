import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ScrollDirection">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ScrollDirection": readonly [];
}> {
    readonly __ScrollDirection: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollDirection;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollDirection: Readonly<{
    idle: ScrollDirection;
    forward: ScrollDirection;
    reverse: ScrollDirection;
    values: readonly ScrollDirection[];
} & _FlaxInstanceType<ScrollDirection> & _FlaxDartType<ScrollDirection, readonly ["class", "flax.core/sdk_rendering#type:ScrollDirection", readonly [], false]>>;
