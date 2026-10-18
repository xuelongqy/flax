import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PixelFormat';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetPixelFormat';
declare function _flaxTopLevel_decodeImageFromPixels(pixels: globalThis.Uint8Array, width: number, height: number, format: upstream0.PixelFormat, callback: ((result: upstream1.Image) => void), options?: {
    allowUpscaling?: boolean | undefined;
    rowBytes?: number | null | undefined;
    targetFormat?: upstream2.TargetPixelFormat | undefined;
    targetHeight?: number | null | undefined;
    targetWidth?: number | null | undefined;
}): void;
export { _flaxTopLevel_decodeImageFromPixels as decodeImageFromPixels };
