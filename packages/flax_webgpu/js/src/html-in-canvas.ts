import type { ElementImage, Event, HTMLCanvasElement } from '@flax/core/host/common';
import type { GPUCopyExternalImageDestInfo, GPUExtent3D, GPUQueue } from './types.g.js';

/** An HTMLCanvasElement returned for a registered Flutter Widget source. */
export interface FlaxWidgetCanvasSource extends HTMLCanvasElement {
  readonly width: number;
  readonly height: number;
  readonly offsetWidth: number;
  readonly offsetHeight: number;
  readonly parentNode: FlaxDrawableCanvas | null;
}

export interface FlaxCanvasPaintEvent extends Event {
  readonly changedElements: readonly FlaxWidgetCanvasSource[];
}

/** Available on root HTML canvases when the host registers Widget sources. */
export interface FlaxDrawableCanvas extends HTMLCanvasElement {
  content: string;
  onpaint: ((event: FlaxCanvasPaintEvent) => unknown) | null;
  hasAttribute(name: string): boolean;
  appendChild<T extends FlaxWidgetCanvasSource>(child: T): T;
  removeChild<T extends FlaxWidgetCanvasSource>(child: T): T;
  captureElementImage(child: FlaxWidgetCanvasSource): ElementImage;
  requestPaint(): void;
}

interface ElementImageDrawQueue<Source> extends GPUQueue {
  drawElementImageToTexture(
    source: {
      source: Source;
      sourceX?: number;
      sourceY?: number;
      sourceWidth?: number;
      sourceHeight?: number;
    },
    destination: GPUCopyExternalImageDestInfo & { size?: GPUExtent3D },
  ): void;
}

/** The WebGPU Worker queue can draw captured ElementImages. */
export type FlaxWorkerElementImageQueue = ElementImageDrawQueue<ElementImage>;

/** Available on root queues when the host registers Widget sources. */
export interface FlaxElementImageQueue extends ElementImageDrawQueue<
  FlaxWidgetCanvasSource | ElementImage
> {
  copyElementImageToTexture(
    source: {
      source: FlaxWidgetCanvasSource;
      sx?: number;
      sy?: number;
      swidth?: number;
      sheight?: number;
    },
    destination: {
      destination: GPUCopyExternalImageDestInfo;
      width?: number;
      height?: number;
    },
  ): void;
}
