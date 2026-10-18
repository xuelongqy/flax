import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxHitTestResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxHitTestResult';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
export type BoxHitTest = ((result: Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}>, position: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => boolean);
export type BoxHitTestInput = ((result: upstream0.BoxHitTestResult, position: upstream1.Offset) => boolean);
