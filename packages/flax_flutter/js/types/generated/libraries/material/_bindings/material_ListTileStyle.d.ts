import { type DartEnum } from '@flax/core/bindings';
export interface ListTileStyle extends DartEnum {
    readonly __ListTileStyle: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const ListTileStyle: Readonly<{
    list: ListTileStyle;
    drawer: ListTileStyle;
    values: readonly ListTileStyle[];
}>;
