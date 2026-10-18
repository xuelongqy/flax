import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PopupMenuPosition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/popup_menu_theme.dart::PopupMenuPosition">, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu_theme.dart::PopupMenuPosition": readonly [];
}> {
    readonly __PopupMenuPosition: unique symbol;
    readonly [_flaxDartTypeValue]: PopupMenuPosition;
    readonly name: string;
    readonly index: number;
}
export declare const PopupMenuPosition: Readonly<{
    over: PopupMenuPosition;
    under: PopupMenuPosition;
    values: readonly PopupMenuPosition[];
} & _FlaxInstanceType<PopupMenuPosition> & _FlaxDartType<PopupMenuPosition, readonly ["class", "flax.core/sdk_material#type:PopupMenuPosition", readonly [], false]>>;
