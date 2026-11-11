export type VideoColorPrimaries =
  'bt709' | 'bt470bg' | 'smpte170m' | 'bt2020' | 'smpte432';
export type VideoTransferCharacteristics =
  'bt709' | 'smpte170m' | 'iec61966-2-1' | 'linear' | 'pq' | 'hlg';
export type VideoMatrixCoefficients =
  'rgb' | 'bt709' | 'bt470bg' | 'smpte170m' | 'bt2020-ncl';
export interface VideoColorSpaceInit {
  primaries?: VideoColorPrimaries | null;
  transfer?: VideoTransferCharacteristics | null;
  matrix?: VideoMatrixCoefficients | null;
  fullRange?: boolean | null;
}
export interface VideoColorSpace {
  readonly primaries: VideoColorPrimaries | null;
  readonly transfer: VideoTransferCharacteristics | null;
  readonly matrix: VideoMatrixCoefficients | null;
  readonly fullRange: boolean | null;
  toJSON(): Required<VideoColorSpaceInit>;
}

/** A readonly full-frame rectangle snapshot; no global geometry API is installed. */
export interface VideoFrameRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
  toJSON(): Omit<VideoFrameRect, 'toJSON'>;
}

/** Existing-frame construction supports timing overrides without image transforms. */
export interface VideoFrameInit {
  duration?: number;
  timestamp?: number;
}

export type VideoPixelFormat =
  | 'I420'
  | 'I420P10'
  | 'I420P12'
  | 'I420A'
  | 'I420AP10'
  | 'I420AP12'
  | 'I422'
  | 'I422P10'
  | 'I422P12'
  | 'I422A'
  | 'I422AP10'
  | 'I422AP12'
  | 'I444'
  | 'I444P10'
  | 'I444P12'
  | 'I444A'
  | 'I444AP10'
  | 'I444AP12'
  | 'NV12'
  | 'RGBA'
  | 'RGBX'
  | 'BGRA'
  | 'BGRX';

export interface PlaneLayout {
  offset: number;
  stride: number;
}

/** Omit format to copy the original planes without color conversion. */
export interface VideoFrameCopyToOptions {
  rect?: { x?: number; y?: number; width?: number; height?: number };
  layout?: Iterable<PlaneLayout>;
  format?: VideoPixelFormat;
  colorSpace?: 'srgb' | 'display-p3';
}

/** A host-acquired SDR frame or a clone. Timing is in microseconds. */
export interface VideoFrame {
  readonly codedWidth: number;
  readonly codedHeight: number;
  readonly codedRect: VideoFrameRect | null;
  readonly visibleRect: VideoFrameRect | null;
  readonly rotation: number;
  readonly flip: boolean;
  readonly displayWidth: number;
  readonly displayHeight: number;
  readonly timestamp: number;
  readonly duration: number | null;
  readonly format: 'NV12' | 'BGRA' | null;
  readonly colorSpace: VideoColorSpace;
  metadata(): Record<string, never>;
  allocationSize(options?: VideoFrameCopyToOptions): number;
  copyTo(
    destination: ArrayBuffer | SharedArrayBuffer | ArrayBufferView,
    options?: VideoFrameCopyToOptions,
  ): Promise<PlaneLayout[]>;
  clone(): VideoFrame;
  close(): void;
}

declare module '@flax/core/host/common' {
  interface FlaxTransferableMap {
    VideoFrame: VideoFrame;
  }
}

type AcquireVideoFrame = (source: string) => VideoFrame | null;

// The public and host module specifiers are bundled separately.
export const videoFrameAcquirer = Symbol.for('flax.webgpu.acquireVideoFrame');

/** Acquires the current frame of a host-registered source granted to this realm. */
export function acquireVideoFrame(source: string): VideoFrame | null {
  if (typeof source !== 'string') throw new TypeError('Expected a video source name');
  const acquire = (
    globalThis as typeof globalThis & {
      [videoFrameAcquirer]?: AcquireVideoFrame;
    }
  )[videoFrameAcquirer];
  return acquire?.(source) ?? null;
}
