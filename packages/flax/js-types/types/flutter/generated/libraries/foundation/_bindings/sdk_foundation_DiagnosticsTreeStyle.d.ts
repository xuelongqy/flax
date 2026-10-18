import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticsTreeStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsTreeStyle">, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsTreeStyle": readonly [];
}> {
    readonly __DiagnosticsTreeStyle: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsTreeStyle;
    readonly name: string;
    readonly index: number;
}
export declare const DiagnosticsTreeStyle: Readonly<{
    none: DiagnosticsTreeStyle;
    sparse: DiagnosticsTreeStyle;
    offstage: DiagnosticsTreeStyle;
    dense: DiagnosticsTreeStyle;
    transition: DiagnosticsTreeStyle;
    error: DiagnosticsTreeStyle;
    whitespace: DiagnosticsTreeStyle;
    flat: DiagnosticsTreeStyle;
    singleLine: DiagnosticsTreeStyle;
    errorProperty: DiagnosticsTreeStyle;
    shallow: DiagnosticsTreeStyle;
    truncateChildren: DiagnosticsTreeStyle;
    values: readonly DiagnosticsTreeStyle[];
} & _FlaxInstanceType<DiagnosticsTreeStyle> & _FlaxDartType<DiagnosticsTreeStyle, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsTreeStyle", readonly [], false]>>;
