import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyEventResult extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_manager.dart::KeyEventResult">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::KeyEventResult": readonly [];
}> {
    readonly __KeyEventResult: unique symbol;
    readonly [_flaxDartTypeValue]: KeyEventResult;
    readonly name: string;
    readonly index: number;
}
export declare const KeyEventResult: Readonly<{
    handled: KeyEventResult;
    ignored: KeyEventResult;
    skipRemainingHandlers: KeyEventResult;
    values: readonly KeyEventResult[];
} & _FlaxInstanceType<KeyEventResult> & _FlaxDartType<KeyEventResult, readonly ["class", "flax.core/sdk_widgets#type:KeyEventResult", readonly [], false]>>;
