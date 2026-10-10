import { type DartEnum } from '@flax/core/bindings';
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
}>;
