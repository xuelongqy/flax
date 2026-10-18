import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectableChipAttributes extends Readonly<{
    "__flaxBound:package:flutter/src/material/chip.dart::SelectableChipAttributes": readonly [];
}> {
    readonly __SelectableChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: SelectableChipAttributes;
    readonly selected: boolean;
    readonly onSelected: ((value: boolean) => void) | null;
    readonly pressElevation: number | null;
    readonly selectedColor: upstream0.Color | null;
    readonly selectedShadowColor: upstream0.Color | null;
    readonly tooltip: string | null;
    readonly avatarBorder: upstream1.ShapeBorder;
}
export declare namespace _SelectableChipAttributesFactory {
    function implement(args: [], implementation: {
        get selected(): boolean;
        get onSelected(): ((value: boolean) => void) | null;
        get pressElevation(): number | null;
        get selectedColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get selectedShadowColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get tooltip(): string | null;
        get avatarBorder(): Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
    }): SelectableChipAttributes;
}
export declare const SelectableChipAttributes: typeof _SelectableChipAttributesFactory & _FlaxInstanceType<SelectableChipAttributes> & _FlaxDartType<SelectableChipAttributes, readonly ["class", "flax.core/sdk_material#type:SelectableChipAttributes", readonly [], false]>;
