import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LockState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LockState">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LockState": readonly [];
}> {
    readonly __LockState: unique symbol;
    readonly [_flaxDartTypeValue]: LockState;
    readonly name: string;
    readonly index: number;
}
export declare const LockState: Readonly<{
    ignored: LockState;
    locked: LockState;
    unlocked: LockState;
    values: readonly LockState[];
} & _FlaxInstanceType<LockState> & _FlaxDartType<LockState, readonly ["class", "flax.core/sdk_widgets#type:LockState", readonly [], false]>>;
