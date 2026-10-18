import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CheckedState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "value" | "hasConflict" | "merge" | "__flaxBound:dart:ui::CheckedState">, Readonly<{
    "__flaxBound:dart:ui::CheckedState": readonly [];
}> {
    readonly __CheckedState: unique symbol;
    readonly [_flaxDartTypeValue]: CheckedState;
    readonly name: string;
    readonly index: number;
    readonly value: number;
    hasConflict(other: CheckedState): boolean;
    merge(other: CheckedState): CheckedState;
}
export declare const CheckedState: Readonly<{
    none: CheckedState;
    isTrue: CheckedState;
    isFalse: CheckedState;
    mixed: CheckedState;
    values: readonly CheckedState[];
} & _FlaxInstanceType<CheckedState> & _FlaxDartType<CheckedState, readonly ["class", "flax.core/sdk_dart_ui#type:CheckedState", readonly [], false]>>;
