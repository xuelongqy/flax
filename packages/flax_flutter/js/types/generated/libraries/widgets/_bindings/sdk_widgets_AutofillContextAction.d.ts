import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutofillContextAction extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/autofill.dart::AutofillContextAction">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/autofill.dart::AutofillContextAction": readonly [];
}> {
    readonly __AutofillContextAction: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillContextAction;
    readonly name: string;
    readonly index: number;
}
export declare const AutofillContextAction: Readonly<{
    commit: AutofillContextAction;
    cancel: AutofillContextAction;
    values: readonly AutofillContextAction[];
} & _FlaxInstanceType<AutofillContextAction> & _FlaxDartType<AutofillContextAction, readonly ["class", "flax.core/sdk_widgets#type:AutofillContextAction", readonly [], false]>>;
