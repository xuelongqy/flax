import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
export type RenderConstrainedLayoutBuilder<LayoutInfoType extends unknown | null = unknown | null, ChildType extends upstream1.RenderObject = upstream1.RenderObject> = upstream0.RenderAbstractLayoutBuilderMixin<LayoutInfoType, ChildType>;
export type RenderConstrainedLayoutBuilderInput<LayoutInfoType extends unknown | null = unknown | null, ChildType extends upstream1.RenderObject = upstream1.RenderObject> = Readonly<{
    "__flaxBound:package:flutter/src/widgets/layout_builder.dart::RenderAbstractLayoutBuilderMixin": readonly [LayoutInfoType, ChildType];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [ChildType];
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
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithLayoutCallbackMixin": readonly [];
}>;
