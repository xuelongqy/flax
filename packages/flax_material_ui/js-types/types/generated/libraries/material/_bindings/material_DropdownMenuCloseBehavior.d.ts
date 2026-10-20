import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DropdownMenuCloseBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuCloseBehavior">, Readonly<{
    "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuCloseBehavior": readonly [];
}> {
    readonly __DropdownMenuCloseBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenuCloseBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const DropdownMenuCloseBehavior: Readonly<{
    all: DropdownMenuCloseBehavior;
    self: DropdownMenuCloseBehavior;
    none: DropdownMenuCloseBehavior;
    values: readonly DropdownMenuCloseBehavior[];
} & _FlaxInstanceType<DropdownMenuCloseBehavior> & _FlaxDartType<DropdownMenuCloseBehavior, readonly ["class", "flax.material/material#type:DropdownMenuCloseBehavior", readonly [], false]>>;
