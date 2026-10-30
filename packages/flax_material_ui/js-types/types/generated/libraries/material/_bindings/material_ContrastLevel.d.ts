import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContrastLevel extends Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::ContrastLevel": readonly [];
}> {
    readonly __ContrastLevel: unique symbol;
    readonly [_flaxDartTypeValue]: ContrastLevel;
}
declare const _ContrastLevelFactory: {
    readonly standard: number;
    readonly medium: number;
    readonly high: number;
};
export declare const ContrastLevel: typeof _ContrastLevelFactory & _FlaxInstanceType<ContrastLevel> & _FlaxDartType<ContrastLevel, readonly ["class", "flax.material/material#type:ContrastLevel", readonly [], false]>;
export {};
