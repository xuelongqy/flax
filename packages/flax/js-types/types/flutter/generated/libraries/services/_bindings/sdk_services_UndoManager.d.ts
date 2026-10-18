import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_UndoManagerClient';
import '@flax/flutter/services/_bindings/sdk_services_UndoManagerClient';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UndoManager extends Readonly<{
    "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManager": readonly [];
}> {
    readonly __UndoManager: unique symbol;
    readonly [_flaxDartTypeValue]: UndoManager;
}
export declare namespace _UndoManagerFactory {
    function setClient(value: Readonly<{
        "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManagerClient": readonly [];
    }> | null): void;
}
export declare namespace _UndoManagerFactory {
    const client: upstream0.UndoManagerClient | null;
}
export declare namespace _UndoManagerFactory {
    function setUndoState(options?: {
        canRedo?: boolean | undefined;
        canUndo?: boolean | undefined;
    }): void;
}
export declare const UndoManager: typeof _UndoManagerFactory & _FlaxInstanceType<UndoManager> & _FlaxDartType<UndoManager, readonly ["class", "flax.core/sdk_services#type:UndoManager", readonly [], false]>;
