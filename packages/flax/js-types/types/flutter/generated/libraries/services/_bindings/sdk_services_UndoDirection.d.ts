import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UndoDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoDirection">, Readonly<{
    "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoDirection": readonly [];
}> {
    readonly __UndoDirection: unique symbol;
    readonly [_flaxDartTypeValue]: UndoDirection;
    readonly name: string;
    readonly index: number;
}
export declare const UndoDirection: Readonly<{
    undo: UndoDirection;
    redo: UndoDirection;
    values: readonly UndoDirection[];
} & _FlaxInstanceType<UndoDirection> & _FlaxDartType<UndoDirection, readonly ["class", "flax.core/sdk_services#type:UndoDirection", readonly [], false]>>;
