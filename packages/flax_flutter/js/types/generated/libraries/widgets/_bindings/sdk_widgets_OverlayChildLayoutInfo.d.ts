import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
export interface OverlayChildLayoutInfo {
    readonly childPaintTransform: upstream0.Matrix4;
    readonly childSize: upstream1.Size;
    readonly overlaySize: upstream1.Size;
}
export declare const OverlayChildLayoutInfo: {
    view: (receiver: {
        readonly $1: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        readonly $2: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }>;
        readonly $3: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }) => OverlayChildLayoutInfo;
};
