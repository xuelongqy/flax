import { type DartEnum } from '@flax/core/bindings';
export interface MainAxisSize extends DartEnum {
    readonly __MainAxisSize: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MainAxisSize: Readonly<{
    min: MainAxisSize;
    max: MainAxisSize;
    values: readonly MainAxisSize[];
}>;
