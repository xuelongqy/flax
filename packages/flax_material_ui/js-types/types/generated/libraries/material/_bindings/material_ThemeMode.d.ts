import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface ThemeMode extends DartEnum {
    readonly __ThemeMode: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const ThemeMode: Readonly<{
    system: ThemeMode;
    light: ThemeMode;
    dark: ThemeMode;
    values: readonly ThemeMode[];
} & _FlaxInstanceType<ThemeMode> & _FlaxDartType<ThemeMode, readonly ["class", "flax.material/material#type:ThemeMode", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
