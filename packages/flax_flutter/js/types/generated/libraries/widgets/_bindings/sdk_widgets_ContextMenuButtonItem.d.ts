import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ContextMenuButtonItem extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
}> {
    readonly __ContextMenuButtonItem: unique symbol;
    readonly [_flaxDartTypeValue]: ContextMenuButtonItem;
}
export interface ContextMenuButtonItem {
    readonly [_flaxDartTypeValue]: ContextMenuButtonItem;
    copyWith(options?: {
        onPressed?: (() => void) | null | undefined;
        type?: upstream0.ContextMenuButtonType | null | undefined;
        label?: string | null | undefined;
    }): ContextMenuButtonItem;
    toString(): string;
    get onPressed(): (() => void) | null;
    get type(): upstream0.ContextMenuButtonType;
    get label(): string | null;
}
export declare abstract class ContextMenuButtonItem extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuButtonItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContextMenuButtonItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false];
    constructor(options: {
        onPressed: (() => void) | null;
        type?: upstream0.ContextMenuButtonType | undefined;
        label?: string | null | undefined;
    });
}
export declare namespace ContextMenuButtonItem {
    function implement(args: [options: {
        onPressed: (() => void) | null;
        type?: upstream0.ContextMenuButtonType | undefined;
        label?: string | null | undefined;
    }], implementation: {}): ContextMenuButtonItem;
}
