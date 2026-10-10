import { type DartEnum } from '@flax/core/bindings';
export interface Brightness extends DartEnum {
    readonly __Brightness: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const Brightness: Readonly<{
    dark: Brightness;
    light: Brightness;
    values: readonly Brightness[];
}>;
