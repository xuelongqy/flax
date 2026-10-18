import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
export type MouseTrackerHitTest = ((offset: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, viewId: number) => upstream0.HitTestResult);
export type MouseTrackerHitTestInput = ((offset: upstream1.Offset, viewId: number) => Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
}>);
