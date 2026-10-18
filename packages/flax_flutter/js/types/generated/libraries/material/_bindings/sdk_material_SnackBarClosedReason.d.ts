import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SnackBarClosedReason extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/snack_bar.dart::SnackBarClosedReason">, Readonly<{
    "__flaxBound:package:flutter/src/material/snack_bar.dart::SnackBarClosedReason": readonly [];
}> {
    readonly __SnackBarClosedReason: unique symbol;
    readonly [_flaxDartTypeValue]: SnackBarClosedReason;
    readonly name: string;
    readonly index: number;
}
export declare const SnackBarClosedReason: Readonly<{
    action: SnackBarClosedReason;
    dismiss: SnackBarClosedReason;
    swipe: SnackBarClosedReason;
    hide: SnackBarClosedReason;
    remove: SnackBarClosedReason;
    timeout: SnackBarClosedReason;
    values: readonly SnackBarClosedReason[];
} & _FlaxInstanceType<SnackBarClosedReason> & _FlaxDartType<SnackBarClosedReason, readonly ["class", "flax.core/sdk_material#type:SnackBarClosedReason", readonly [], false]>>;
