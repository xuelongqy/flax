import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TooltipTriggerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipTriggerMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipTriggerMode": readonly [];
}> {
    readonly __TooltipTriggerMode: unique symbol;
    readonly [_flaxDartTypeValue]: TooltipTriggerMode;
    readonly name: string;
    readonly index: number;
}
export declare const TooltipTriggerMode: Readonly<{
    manual: TooltipTriggerMode;
    longPress: TooltipTriggerMode;
    tap: TooltipTriggerMode;
    values: readonly TooltipTriggerMode[];
} & _FlaxInstanceType<TooltipTriggerMode> & _FlaxDartType<TooltipTriggerMode, readonly ["class", "flax.core/sdk_widgets#type:TooltipTriggerMode", readonly [], false]>>;
