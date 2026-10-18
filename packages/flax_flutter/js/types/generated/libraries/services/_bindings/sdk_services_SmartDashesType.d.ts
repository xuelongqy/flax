import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SmartDashesType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::SmartDashesType">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SmartDashesType": readonly [];
}> {
    readonly __SmartDashesType: unique symbol;
    readonly [_flaxDartTypeValue]: SmartDashesType;
    readonly name: string;
    readonly index: number;
}
export declare const SmartDashesType: Readonly<{
    disabled: SmartDashesType;
    enabled: SmartDashesType;
    values: readonly SmartDashesType[];
} & _FlaxInstanceType<SmartDashesType> & _FlaxDartType<SmartDashesType, readonly ["class", "flax.core/sdk_services#type:SmartDashesType", readonly [], false]>>;
