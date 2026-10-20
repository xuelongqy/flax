import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StepState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/stepper.dart::StepState">, Readonly<{
    "__flaxBound:package:material_ui/src/stepper.dart::StepState": readonly [];
}> {
    readonly __StepState: unique symbol;
    readonly [_flaxDartTypeValue]: StepState;
    readonly name: string;
    readonly index: number;
}
export declare const StepState: Readonly<{
    indexed: StepState;
    editing: StepState;
    complete: StepState;
    disabled: StepState;
    error: StepState;
    values: readonly StepState[];
} & _FlaxInstanceType<StepState> & _FlaxDartType<StepState, readonly ["class", "flax.material/material#type:StepState", readonly [], false]>>;
