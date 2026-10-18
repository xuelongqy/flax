import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SmartQuotesType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::SmartQuotesType">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SmartQuotesType": readonly [];
}> {
    readonly __SmartQuotesType: unique symbol;
    readonly [_flaxDartTypeValue]: SmartQuotesType;
    readonly name: string;
    readonly index: number;
}
export declare const SmartQuotesType: Readonly<{
    disabled: SmartQuotesType;
    enabled: SmartQuotesType;
    values: readonly SmartQuotesType[];
} & _FlaxInstanceType<SmartQuotesType> & _FlaxDartType<SmartQuotesType, readonly ["class", "flax.core/sdk_services#type:SmartQuotesType", readonly [], false]>>;
