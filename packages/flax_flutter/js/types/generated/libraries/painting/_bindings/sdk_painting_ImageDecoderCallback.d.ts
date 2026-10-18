import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
export type ImageDecoderCallback = ((buffer: Readonly<{
    "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
}>, options?: {
    getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => Readonly<{
        "__flaxBound:dart:ui::TargetImageSize": readonly [];
    }>) | null | undefined;
}) => Promise<upstream0.Codec>);
export type ImageDecoderCallbackInput = ((buffer: upstream1.ImmutableBuffer, options?: {
    getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream2.TargetImageSize) | null | undefined;
}) => Promise<Readonly<{
    "__flaxBound:dart:ui::Codec": readonly [];
}>>);
