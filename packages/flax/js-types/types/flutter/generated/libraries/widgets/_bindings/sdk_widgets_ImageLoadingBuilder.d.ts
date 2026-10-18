import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
export type ImageLoadingBuilder = ((context: upstream0.BuildContext, child: Widget, loadingProgress: (Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null) => Widget);
export type ImageLoadingBuilderInput = ((context: upstream0.BuildContext, child: Widget, loadingProgress: upstream1.ImageChunkEvent | null) => Widget);
