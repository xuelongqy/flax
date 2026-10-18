import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipboardStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatus">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::ClipboardStatus": readonly [];
}> {
    readonly __ClipboardStatus: unique symbol;
    readonly [_flaxDartTypeValue]: ClipboardStatus;
    readonly name: string;
    readonly index: number;
}
export declare const ClipboardStatus: Readonly<{
    pasteable: ClipboardStatus;
    unknown: ClipboardStatus;
    notPasteable: ClipboardStatus;
    values: readonly ClipboardStatus[];
} & _FlaxInstanceType<ClipboardStatus> & _FlaxDartType<ClipboardStatus, readonly ["class", "flax.core/sdk_widgets#type:ClipboardStatus", readonly [], false]>>;
