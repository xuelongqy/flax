import { type DartEnum } from '@flax/core/bindings';
export interface MaterialType extends DartEnum {
    readonly __MaterialType: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MaterialType: Readonly<{
    canvas: MaterialType;
    card: MaterialType;
    circle: MaterialType;
    button: MaterialType;
    transparency: MaterialType;
    values: readonly MaterialType[];
}>;
