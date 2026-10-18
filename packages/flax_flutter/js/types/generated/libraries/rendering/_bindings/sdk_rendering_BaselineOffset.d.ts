export interface BaselineOffset {
    add(this: BaselineOffset, offset: number): number | null;
    readonly offset: number | null;
    minOf(this: BaselineOffset, other: number | null): number | null;
}
export declare const BaselineOffset: {
    view: (receiver: number | null) => BaselineOffset;
    readonly noBaseline: number | null;
};
