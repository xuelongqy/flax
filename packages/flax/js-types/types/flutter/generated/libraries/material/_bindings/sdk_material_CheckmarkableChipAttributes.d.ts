import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CheckmarkableChipAttributes extends Readonly<{
    "__flaxBound:package:flutter/src/material/chip.dart::CheckmarkableChipAttributes": readonly [];
}> {
    readonly __CheckmarkableChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: CheckmarkableChipAttributes;
    readonly showCheckmark: boolean | null;
    readonly checkmarkColor: upstream0.Color | null;
}
export declare namespace _CheckmarkableChipAttributesFactory {
    function implement(args: [], implementation: {
        get showCheckmark(): boolean | null;
        get checkmarkColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
    }): CheckmarkableChipAttributes;
}
export declare const CheckmarkableChipAttributes: typeof _CheckmarkableChipAttributesFactory & _FlaxInstanceType<CheckmarkableChipAttributes> & _FlaxDartType<CheckmarkableChipAttributes, readonly ["class", "flax.core/sdk_material#type:CheckmarkableChipAttributes", readonly [], false]>;
