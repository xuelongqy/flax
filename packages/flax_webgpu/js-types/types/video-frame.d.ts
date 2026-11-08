/** A host-acquired SDR frame. Timestamp and duration are in microseconds. */
export interface VideoFrame {
    readonly codedWidth: number;
    readonly codedHeight: number;
    readonly displayWidth: number;
    readonly displayHeight: number;
    readonly timestamp: number;
    readonly duration: number | null;
    readonly format: 'NV12' | 'BGRA' | null;
    close(): void;
}
export declare const videoFrameAcquirer: unique symbol;
/** Acquires the current frame of a host-registered source in the main realm. */
export declare function acquireVideoFrame(source: string): VideoFrame | null;
