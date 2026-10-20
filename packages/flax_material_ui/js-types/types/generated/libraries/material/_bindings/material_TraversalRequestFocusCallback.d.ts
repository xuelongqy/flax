import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import type * as upstream2 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
export type TraversalRequestFocusCallback = ((node: Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, options?: {
    alignment?: number | null | undefined;
    alignmentPolicy?: upstream1.ScrollPositionAlignmentPolicy | null | undefined;
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | null | undefined;
    duration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) | null | undefined;
}) => void);
export type TraversalRequestFocusCallbackInput = ((node: upstream0.FocusNode, options?: {
    alignment?: number | null | undefined;
    alignmentPolicy?: upstream1.ScrollPositionAlignmentPolicy | null | undefined;
    curve?: upstream2.Curve | null | undefined;
    duration?: upstream3.Duration | null | undefined;
}) => void);
