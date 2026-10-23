export type FilterStep = {
    kind: number;
    values: number[];
};
export declare function parseFilter(value: string, fontSize?: number): FilterStep[] | null;
export declare function acceptedFilter(value: string): string | null;
