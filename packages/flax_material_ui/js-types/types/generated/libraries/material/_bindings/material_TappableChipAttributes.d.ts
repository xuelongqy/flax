import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TappableChipAttributes extends Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::TappableChipAttributes": readonly [];
}> {
    readonly __TappableChipAttributes: unique symbol;
    readonly [_flaxDartTypeValue]: TappableChipAttributes;
    readonly onPressed: (() => void) | null;
    readonly pressElevation: number | null;
    readonly tooltip: string | null;
}
export declare namespace _TappableChipAttributesFactory {
    function implement(args: [], implementation: {
        get onPressed(): (() => void) | null;
        get pressElevation(): number | null;
        get tooltip(): string | null;
    }): TappableChipAttributes;
}
export declare const TappableChipAttributes: typeof _TappableChipAttributesFactory & _FlaxInstanceType<TappableChipAttributes> & _FlaxDartType<TappableChipAttributes, readonly ["class", "flax.material/material#type:TappableChipAttributes", readonly [], false]>;
