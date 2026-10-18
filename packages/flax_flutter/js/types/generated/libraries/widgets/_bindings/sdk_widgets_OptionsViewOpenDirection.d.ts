import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OptionsViewOpenDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::OptionsViewOpenDirection">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/autocomplete.dart::OptionsViewOpenDirection": readonly [];
}> {
    readonly __OptionsViewOpenDirection: unique symbol;
    readonly [_flaxDartTypeValue]: OptionsViewOpenDirection;
    readonly name: string;
    readonly index: number;
}
export declare const OptionsViewOpenDirection: Readonly<{
    up: OptionsViewOpenDirection;
    down: OptionsViewOpenDirection;
    mostSpace: OptionsViewOpenDirection;
    values: readonly OptionsViewOpenDirection[];
} & _FlaxInstanceType<OptionsViewOpenDirection> & _FlaxDartType<OptionsViewOpenDirection, readonly ["class", "flax.core/sdk_widgets#type:OptionsViewOpenDirection", readonly [], false]>>;
