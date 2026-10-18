import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemContextMenuClient extends Readonly<{
    "__flaxBound:package:flutter/src/services/binding.dart::SystemContextMenuClient": readonly [];
}> {
    readonly __SystemContextMenuClient: unique symbol;
    readonly [_flaxDartTypeValue]: SystemContextMenuClient;
    handleSystemHide(): void;
    handleCustomContextMenuAction(actionId: string): void;
}
export declare const SystemContextMenuClient: object & _FlaxInstanceType<SystemContextMenuClient> & _FlaxDartType<SystemContextMenuClient, readonly ["class", "flax.core/sdk_services#type:SystemContextMenuClient", readonly [], false]>;
