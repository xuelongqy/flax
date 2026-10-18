import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsValidationResult extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::SemanticsValidationResult">, Readonly<{
    "__flaxBound:dart:ui::SemanticsValidationResult": readonly [];
}> {
    readonly __SemanticsValidationResult: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsValidationResult;
    readonly name: string;
    readonly index: number;
}
export declare const SemanticsValidationResult: Readonly<{
    none: SemanticsValidationResult;
    valid: SemanticsValidationResult;
    invalid: SemanticsValidationResult;
    values: readonly SemanticsValidationResult[];
} & _FlaxInstanceType<SemanticsValidationResult> & _FlaxDartType<SemanticsValidationResult, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsValidationResult", readonly [], false]>>;
