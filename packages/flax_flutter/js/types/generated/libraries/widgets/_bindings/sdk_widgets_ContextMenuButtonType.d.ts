import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContextMenuButtonType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonType">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonType": readonly [];
}> {
    readonly __ContextMenuButtonType: unique symbol;
    readonly [_flaxDartTypeValue]: ContextMenuButtonType;
    readonly name: string;
    readonly index: number;
}
export declare const ContextMenuButtonType: Readonly<{
    cut: ContextMenuButtonType;
    copy: ContextMenuButtonType;
    paste: ContextMenuButtonType;
    selectAll: ContextMenuButtonType;
    delete: ContextMenuButtonType;
    lookUp: ContextMenuButtonType;
    searchWeb: ContextMenuButtonType;
    share: ContextMenuButtonType;
    liveTextInput: ContextMenuButtonType;
    custom: ContextMenuButtonType;
    values: readonly ContextMenuButtonType[];
} & _FlaxInstanceType<ContextMenuButtonType> & _FlaxDartType<ContextMenuButtonType, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuButtonType", readonly [], false]>>;
