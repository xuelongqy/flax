import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticLevel extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticLevel">, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticLevel": readonly [];
}> {
    readonly __DiagnosticLevel: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticLevel;
    readonly name: string;
    readonly index: number;
}
export declare const DiagnosticLevel: Readonly<{
    hidden: DiagnosticLevel;
    fine: DiagnosticLevel;
    debug: DiagnosticLevel;
    info: DiagnosticLevel;
    warning: DiagnosticLevel;
    hint: DiagnosticLevel;
    summary: DiagnosticLevel;
    error: DiagnosticLevel;
    off: DiagnosticLevel;
    values: readonly DiagnosticLevel[];
} & _FlaxInstanceType<DiagnosticLevel> & _FlaxDartType<DiagnosticLevel, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticLevel", readonly [], false]>>;
