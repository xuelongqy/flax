import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
export type DecoderBufferCallback = ((buffer: Readonly<{
    "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
}>, options?: {
    allowUpscaling?: boolean | undefined;
    cacheHeight?: number | null | undefined;
    cacheWidth?: number | null | undefined;
}) => Promise<upstream0.Codec>);
export type DecoderBufferCallbackInput = ((buffer: upstream1.ImmutableBuffer, options?: {
    allowUpscaling?: boolean | undefined;
    cacheHeight?: number | null | undefined;
    cacheWidth?: number | null | undefined;
}) => Promise<Readonly<{
    "__flaxBound:dart:ui::Codec": readonly [];
}>>);
