import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidOverscrollIndicator extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::AndroidOverscrollIndicator">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::AndroidOverscrollIndicator": readonly [];
}> {
    readonly __AndroidOverscrollIndicator: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidOverscrollIndicator;
    readonly name: string;
    readonly index: number;
}
export declare const AndroidOverscrollIndicator: Readonly<{
    stretch: AndroidOverscrollIndicator;
    glow: AndroidOverscrollIndicator;
    values: readonly AndroidOverscrollIndicator[];
} & _FlaxInstanceType<AndroidOverscrollIndicator> & _FlaxDartType<AndroidOverscrollIndicator, readonly ["class", "flax.core/sdk_widgets#type:AndroidOverscrollIndicator", readonly [], false]>>;
