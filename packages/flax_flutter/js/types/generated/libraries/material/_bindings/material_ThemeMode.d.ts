import { type DartEnum } from '@flax/core/bindings';
export interface ThemeMode extends DartEnum {
    readonly type: "flax.material/material#type:ThemeMode";
}
export declare const ThemeMode: Readonly<{
    system: ThemeMode;
    light: ThemeMode;
    dark: ThemeMode;
}>;
