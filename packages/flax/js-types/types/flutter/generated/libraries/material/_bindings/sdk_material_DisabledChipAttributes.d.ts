import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisabledChipAttributes extends Readonly<{
    "__flaxBound:package:flutter/src/material/chip.dart::DisabledChipAttributes": readonly [];
}> {
    readonly __DisabledChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: DisabledChipAttributes;
    readonly isEnabled: boolean;
    readonly disabledColor: upstream0.Color | null;
}
export declare namespace _DisabledChipAttributesFactory {
    function implement(args: [], implementation: {
        get isEnabled(): boolean;
        get disabledColor(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
    }): DisabledChipAttributes;
}
export declare const DisabledChipAttributes: typeof _DisabledChipAttributesFactory & _FlaxInstanceType<DisabledChipAttributes> & _FlaxDartType<DisabledChipAttributes, readonly ["class", "flax.core/sdk_material#type:DisabledChipAttributes", readonly [], false]>;
