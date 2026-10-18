import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliderInteraction extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/slider.dart::SliderInteraction">, Readonly<{
    "__flaxBound:package:flutter/src/material/slider.dart::SliderInteraction": readonly [];
}> {
    readonly __SliderInteraction: unique symbol;
    readonly [_flaxDartTypeValue]: SliderInteraction;
    readonly name: string;
    readonly index: number;
}
export declare const SliderInteraction: Readonly<{
    tapAndSlide: SliderInteraction;
    tapOnly: SliderInteraction;
    slideOnly: SliderInteraction;
    slideThumb: SliderInteraction;
    values: readonly SliderInteraction[];
} & _FlaxInstanceType<SliderInteraction> & _FlaxDartType<SliderInteraction, readonly ["class", "flax.core/sdk_material#type:SliderInteraction", readonly [], false]>>;
