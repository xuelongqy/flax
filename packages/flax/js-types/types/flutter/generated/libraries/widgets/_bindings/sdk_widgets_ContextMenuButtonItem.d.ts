import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContextMenuButtonItem extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
}> {
    readonly __ContextMenuButtonItem: unique symbol;
    readonly [_flaxDartTypeValue]: ContextMenuButtonItem;
    readonly onPressed: (() => void) | null;
    readonly type: upstream0.ContextMenuButtonType;
    readonly label: string | null;
    copyWith(options?: {
        label?: string | null | undefined;
        onPressed?: (() => void) | null | undefined;
        type?: upstream0.ContextMenuButtonType | null | undefined;
    }): ContextMenuButtonItem;
    toString(): string;
}
export declare function _ContextMenuButtonItemFactory(options: {
    onPressed: (() => void) | null;
    type?: upstream0.ContextMenuButtonType | undefined;
    label?: string | null | undefined;
}): ContextMenuButtonItem;
export interface _ContextMenuButtonItemNative extends ContextMenuButtonItem {
    readonly [_flaxDartTypeValue]: _ContextMenuButtonItemNative;
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
export declare abstract class _ContextMenuButtonItemNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuButtonItem>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContextMenuButtonItem;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false];
    constructor(options: {
        onPressed: (() => void) | null;
        type?: upstream0.ContextMenuButtonType | undefined;
        label?: string | null | undefined;
    });
}
export declare namespace _ContextMenuButtonItemFactory {
    function implement(args: [options: {
        onPressed: (() => void) | null;
        type?: upstream0.ContextMenuButtonType | undefined;
        label?: string | null | undefined;
    }], implementation: {}): ContextMenuButtonItem;
}
declare const _ContextMenuButtonItemBinding: typeof _ContextMenuButtonItemFactory & (new (options: {
    onPressed: (() => void) | null;
    type?: upstream0.ContextMenuButtonType | undefined;
    label?: string | null | undefined;
}) => _ContextMenuButtonItemNative);
export declare const ContextMenuButtonItem: typeof _ContextMenuButtonItemBinding & _FlaxInstanceType<ContextMenuButtonItem> & _FlaxDartType<ContextMenuButtonItem, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonItem", readonly [], false]>;
export {};
