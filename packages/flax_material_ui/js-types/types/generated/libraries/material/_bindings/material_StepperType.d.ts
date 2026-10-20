import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StepperType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/stepper.dart::StepperType">, Readonly<{
    "__flaxBound:package:material_ui/src/stepper.dart::StepperType": readonly [];
}> {
    readonly __StepperType: unique symbol;
    readonly [_flaxDartTypeValue]: StepperType;
    readonly name: string;
    readonly index: number;
}
export declare const StepperType: Readonly<{
    vertical: StepperType;
    horizontal: StepperType;
    values: readonly StepperType[];
} & _FlaxInstanceType<StepperType> & _FlaxDartType<StepperType, readonly ["class", "flax.material/material#type:StepperType", readonly [], false]>>;
