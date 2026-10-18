import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
declare function _flaxTopLevel_instantiateImageCodecWithSize(buffer: Readonly<{
    "__flaxBound:dart:ui::ImmutableBuffer": readonly [];
}>, options?: {
    getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => Readonly<{
        "__flaxBound:dart:ui::TargetImageSize": readonly [];
    }>) | null | undefined;
}): Promise<upstream0.Codec>;
export { _flaxTopLevel_instantiateImageCodecWithSize as instantiateImageCodecWithSize };
