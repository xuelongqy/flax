export declare function cssLength(value: string, size?: number, percentage?: boolean): {
    css: string;
    px: number;
} | null;
export type FontDefaults = readonly [number, number, number, string];
export declare function canvasFont(value: string, defaults?: () => FontDefaults): string | null;
