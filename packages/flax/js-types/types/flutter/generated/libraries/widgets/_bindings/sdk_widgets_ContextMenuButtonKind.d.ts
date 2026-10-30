import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContextMenuButtonKind extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonKind": readonly [];
}> {
    readonly __ContextMenuButtonKind: unique symbol;
    readonly [_flaxDartTypeValue]: ContextMenuButtonKind;
    readonly name: string;
    toString(): string;
}
declare const _ContextMenuButtonKindFactory: {
    readonly cut: ContextMenuButtonKind;
    readonly copy: ContextMenuButtonKind;
    readonly paste: ContextMenuButtonKind;
    readonly selectAll: ContextMenuButtonKind;
    readonly lookUp: ContextMenuButtonKind;
    readonly searchWeb: ContextMenuButtonKind;
    readonly share: ContextMenuButtonKind;
    readonly liveTextInput: ContextMenuButtonKind;
    readonly translate: ContextMenuButtonKind;
    readonly custom: ContextMenuButtonKind;
    readonly values: DartList<ContextMenuButtonKind>;
};
export declare const ContextMenuButtonKind: typeof _ContextMenuButtonKindFactory & _FlaxInstanceType<ContextMenuButtonKind> & _FlaxDartType<ContextMenuButtonKind, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonKind", readonly [], false]>;
export {};
