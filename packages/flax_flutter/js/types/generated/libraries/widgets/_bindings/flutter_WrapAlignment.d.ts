import { type DartEnum } from '@flax/core/bindings';
export interface WrapAlignment extends DartEnum {
    readonly __WrapAlignment: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const WrapAlignment: Readonly<{
    start: WrapAlignment;
    end: WrapAlignment;
    center: WrapAlignment;
    spaceBetween: WrapAlignment;
    spaceAround: WrapAlignment;
    spaceEvenly: WrapAlignment;
    values: readonly WrapAlignment[];
}>;
