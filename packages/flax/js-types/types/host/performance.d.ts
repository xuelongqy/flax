import type { EventTarget } from './events.js';
export interface PerformanceEntry {
    readonly name: string;
    readonly entryType: string;
    readonly startTime: number;
    readonly duration: number;
    readonly navigationId: number | null;
    toJSON(): {
        name: string;
        entryType: string;
        startTime: number;
        duration: number;
        navigationId: number | null;
    };
}
export interface PerformanceMark extends PerformanceEntry {
    readonly detail: unknown;
}
export interface PerformanceMeasure extends PerformanceEntry {
    readonly detail: unknown;
}
export interface PerformanceMarkOptions {
    detail?: unknown;
    startTime?: number;
}
export interface PerformanceMeasureOptions {
    detail?: unknown;
    start?: string | number;
    end?: string | number;
    duration?: number;
}
export interface Performance extends EventTarget {
    readonly timeOrigin: number;
    now(): number;
    mark(name: string, options?: PerformanceMarkOptions): PerformanceMark;
    measure(name: string, startOrOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    clearMarks(name?: string): void;
    clearMeasures(name?: string): void;
    getEntries(): PerformanceEntry[];
    getEntriesByType(type: string): PerformanceEntry[];
    getEntriesByName(name: string, type?: string): PerformanceEntry[];
    toJSON(): {
        timeOrigin: number;
    };
}
export interface PerformanceObserverInit {
    entryTypes?: Iterable<string>;
    type?: string;
    buffered?: boolean;
}
export interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntry[];
    getEntriesByType(type: string): PerformanceEntry[];
    getEntriesByName(name: string, type?: string): PerformanceEntry[];
}
export interface PerformanceObserver {
    observe(options: PerformanceObserverInit): void;
    disconnect(): void;
    takeRecords(): PerformanceEntry[];
}
export type PerformanceObserverCallback = (this: PerformanceObserver, entries: PerformanceObserverEntryList, observer: PerformanceObserver, options: {
    droppedEntriesCount?: number;
}) => void;
export interface PerformanceObserverConstructor {
    new (callback: PerformanceObserverCallback): PerformanceObserver;
    readonly prototype: PerformanceObserver;
    readonly supportedEntryTypes: readonly string[];
}
export interface PerformanceMarkConstructor {
    new (name: string, options?: PerformanceMarkOptions): PerformanceMark;
    readonly prototype: PerformanceMark;
}
export declare function installPerformance(global: typeof globalThis, clock: () => number, timeOrigin: number, report: (error: unknown) => void, cloneValue?: (value: unknown) => unknown): {
    close(): void;
};
