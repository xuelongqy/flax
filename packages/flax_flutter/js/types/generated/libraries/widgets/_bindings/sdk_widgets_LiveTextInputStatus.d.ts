import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LiveTextInputStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatus">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::LiveTextInputStatus": readonly [];
}> {
    readonly __LiveTextInputStatus: unique symbol;
    readonly [_flaxDartTypeValue]: LiveTextInputStatus;
    readonly name: string;
    readonly index: number;
}
export declare const LiveTextInputStatus: Readonly<{
    enabled: LiveTextInputStatus;
    unknown: LiveTextInputStatus;
    disabled: LiveTextInputStatus;
    values: readonly LiveTextInputStatus[];
} & _FlaxInstanceType<LiveTextInputStatus> & _FlaxDartType<LiveTextInputStatus, readonly ["class", "flax.core/sdk_widgets#type:LiveTextInputStatus", readonly [], false]>>;
