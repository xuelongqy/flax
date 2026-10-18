import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_UndoDirection';
import '@flax/flutter/services/_bindings/sdk_services_UndoDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UndoManagerClient extends Readonly<{
    "__flaxBound:package:flutter/src/services/undo_manager.dart::UndoManagerClient": readonly [];
}> {
    readonly __UndoManagerClient: unique symbol;
    readonly [_flaxDartTypeValue]: UndoManagerClient;
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    handlePlatformUndo(direction: upstream0.UndoDirection): void;
    undo(): void;
    redo(): void;
}
export declare const UndoManagerClient: object & _FlaxInstanceType<UndoManagerClient> & _FlaxDartType<UndoManagerClient, readonly ["class", "flax.core/sdk_services#type:UndoManagerClient", readonly [], false]>;
