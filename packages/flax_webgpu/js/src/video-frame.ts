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

type AcquireVideoFrame = (source: string) => VideoFrame | null;

// The public and host module specifiers are bundled separately.
export const videoFrameAcquirer = Symbol.for('flax.webgpu.acquireVideoFrame');

/** Acquires the current frame of a host-registered source in the main realm. */
export function acquireVideoFrame(source: string): VideoFrame | null {
  if (typeof source !== 'string') throw new TypeError('Expected a video source name');
  const acquire = (
    globalThis as typeof globalThis & {
      [videoFrameAcquirer]?: AcquireVideoFrame;
    }
  )[videoFrameAcquirer];
  return acquire?.(source) ?? null;
}
