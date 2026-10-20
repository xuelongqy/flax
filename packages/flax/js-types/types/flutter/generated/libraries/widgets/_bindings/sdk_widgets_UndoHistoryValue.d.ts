import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UndoHistoryValue extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/undo_history.dart::UndoHistoryValue": readonly [];
}> {
    readonly __UndoHistoryValue: unique symbol;
    readonly [_flaxDartTypeValue]: UndoHistoryValue;
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    toString(): string;
}
export declare function _UndoHistoryValueFactory(options?: {
    canUndo?: boolean | undefined;
    canRedo?: boolean | undefined;
}): UndoHistoryValue;
export interface _UndoHistoryValueNative extends UndoHistoryValue {
    readonly [_flaxDartTypeValue]: _UndoHistoryValueNative;
    toString(): string;
    get canUndo(): boolean;
    get canRedo(): boolean;
}
export declare abstract class _UndoHistoryValueNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UndoHistoryValue>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UndoHistoryValue;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false];
    constructor(options?: {
        canUndo?: boolean | undefined;
        canRedo?: boolean | undefined;
    });
}
export declare namespace _UndoHistoryValueFactory {
    function implement(args: [options?: {
        canUndo?: boolean | undefined;
        canRedo?: boolean | undefined;
    }], implementation: {}): UndoHistoryValue;
}
declare const _UndoHistoryValueBinding: typeof _UndoHistoryValueFactory & (new (options?: {
    canUndo?: boolean | undefined;
    canRedo?: boolean | undefined;
}) => _UndoHistoryValueNative);
export declare namespace _UndoHistoryValueFactory {
    const empty: UndoHistoryValue;
}
export declare const UndoHistoryValue: typeof _UndoHistoryValueBinding & _FlaxInstanceType<UndoHistoryValue> & _FlaxDartType<UndoHistoryValue, readonly ["class", "flax.core/sdk_widgets#type:UndoHistoryValue", readonly [], false]>;
export {};
