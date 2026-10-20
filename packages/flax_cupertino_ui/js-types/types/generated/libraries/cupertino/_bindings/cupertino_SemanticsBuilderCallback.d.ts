import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
export type SemanticsBuilderCallback = ((size: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => DartList<upstream0.CustomPainterSemantics>);
export type SemanticsBuilderCallbackInput = ((size: upstream1.Size) => DartListInput<upstream0.CustomPainterSemantics, Readonly<{
    "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainterSemantics": readonly [];
}>>);
