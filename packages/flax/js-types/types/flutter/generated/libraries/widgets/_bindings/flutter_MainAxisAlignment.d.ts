import { type DartEnum } from '@flax/core/bindings';
export interface MainAxisAlignment extends DartEnum {
    readonly __MainAxisAlignment: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MainAxisAlignment: Readonly<{
    start: MainAxisAlignment;
    end: MainAxisAlignment;
    center: MainAxisAlignment;
    spaceBetween: MainAxisAlignment;
    spaceAround: MainAxisAlignment;
    spaceEvenly: MainAxisAlignment;
    values: readonly MainAxisAlignment[];
}>;
