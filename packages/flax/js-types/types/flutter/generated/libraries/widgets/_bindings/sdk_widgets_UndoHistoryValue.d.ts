import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface UndoHistoryValue extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
}> {
    readonly __UndoHistoryValue: unique symbol;
    readonly [_flaxDartTypeValue]: UndoHistoryValue;
}
export interface UndoHistoryValue {
    readonly [_flaxDartTypeValue]: UndoHistoryValue;
    toString(): string;
    get canUndo(): boolean;
    get canRedo(): boolean;
}
export declare abstract class UndoHistoryValue extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryValue>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UndoHistoryValue;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false];
    constructor(options?: {
        canUndo?: boolean | undefined;
        canRedo?: boolean | undefined;
    });
}
export declare namespace UndoHistoryValue {
    function implement(args: [options?: {
        canUndo?: boolean | undefined;
        canRedo?: boolean | undefined;
    }], implementation: {}): UndoHistoryValue;
}
export declare namespace UndoHistoryValue {
    const empty: UndoHistoryValue;
}
