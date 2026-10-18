import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ContextMenuController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/context_menu_controller.dart::ContextMenuController": readonly [];
}> {
    readonly __ContextMenuController: unique symbol;
    readonly [_flaxDartTypeValue]: ContextMenuController;
}
export interface ContextMenuController {
    readonly [_flaxDartTypeValue]: ContextMenuController;
    show(options: {
        context: upstream0.BuildContext;
        contextMenuBuilder: ((context: upstream0.BuildContext) => Widget);
        debugRequiredFor?: Widget | null | undefined;
    }): void;
    markNeedsBuild(): void;
    remove(): void;
    get onRemove(): (() => void) | null;
    get isShown(): boolean;
}
export declare abstract class ContextMenuController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContextMenuController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuController", readonly [], false];
    constructor(options?: {
        onRemove?: (() => void) | null | undefined;
    });
}
export declare namespace ContextMenuController {
    function implement(args: [options?: {
        onRemove?: (() => void) | null | undefined;
    }], implementation: {}): ContextMenuController;
}
export declare namespace ContextMenuController {
    function removeAny(): void;
}
