import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/ui/_bindings/flutter_Size';
declare function _flaxTopLevel_precacheImage(provider: Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
}>, context: upstream1.BuildContext, options?: {
    onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined;
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): Promise<void>;
export { _flaxTopLevel_precacheImage as precacheImage };
