import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderView';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderView';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
export type DebugPaintCallback = ((context: Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
}>, offset: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, renderView: Readonly<{
    "__flaxBound:package:flutter/src/rendering/view.dart::RenderView": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream3.RenderBox];
}>) => void);
export type DebugPaintCallbackInput = ((context: upstream0.PaintingContext, offset: upstream1.Offset, renderView: upstream2.RenderView) => void);
