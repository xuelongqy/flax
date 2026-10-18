import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BrowserContextMenu extends Readonly<{
    "__flaxBound:package:flutter/src/services/browser_context_menu.dart::BrowserContextMenu": readonly [];
}> {
    readonly __BrowserContextMenu: unique symbol;
    readonly [_flaxDartTypeValue]: BrowserContextMenu;
}
export declare namespace _BrowserContextMenuFactory {
    const enabled: boolean;
}
export declare namespace _BrowserContextMenuFactory {
    function disableContextMenu(): Promise<void>;
}
export declare namespace _BrowserContextMenuFactory {
    function enableContextMenu(): Promise<void>;
}
export declare const BrowserContextMenu: typeof _BrowserContextMenuFactory & _FlaxInstanceType<BrowserContextMenu> & _FlaxDartType<BrowserContextMenu, readonly ["class", "flax.core/sdk_services#type:BrowserContextMenu", readonly [], false]>;
