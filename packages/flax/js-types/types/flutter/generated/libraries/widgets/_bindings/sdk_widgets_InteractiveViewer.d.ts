import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PanAxis';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PanAxis';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleEndDetails';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleStartDetails';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ScaleUpdateDetails';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransformationController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransformationController';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_Alignment';
import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/vector_math/_bindings/sdk_dependencies_Quad';
import '@flax/flutter/vector_math/_bindings/sdk_dependencies_Quad';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream19 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InteractiveViewer extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::InteractiveViewer": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __InteractiveViewer: unique symbol;
    readonly [_flaxDartTypeValue]: InteractiveViewer;
    readonly alignment: upstream9.Alignment | null;
    readonly clipBehavior: upstream2.Clip;
    readonly panAxis: upstream3.PanAxis;
    readonly boundaryMargin: upstream4.EdgeInsets;
    readonly builder: ((context: upstream10.BuildContext, viewport: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Quad": readonly [];
    }>) => Widget) | null;
    readonly child: Widget | null;
    readonly constrained: boolean;
    readonly panEnabled: boolean;
    readonly scaleEnabled: boolean;
    readonly trackpadScrollCausesScale: boolean;
    readonly scaleFactor: number;
    readonly maxScale: number;
    readonly minScale: number;
    readonly interactionEndFrictionCoefficient: number;
    readonly onInteractionEnd: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onInteractionStart: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onInteractionUpdate: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly transformationController: upstream8.TransformationController | null;
    readonly key: upstream1.Key | null;
    createState(): upstream12.State<InteractiveViewer>;
    createElement(): upstream13.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
}
export declare function _InteractiveViewerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream2.Clip | undefined;
    panAxis?: upstream3.PanAxis | undefined;
    boundaryMargin?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | undefined;
    constrained?: boolean | undefined;
    maxScale?: number | undefined;
    minScale?: number | undefined;
    interactionEndFrictionCoefficient?: number | undefined;
    onInteractionEnd?: ((details: upstream5.ScaleEndDetails) => void) | null | undefined;
    onInteractionStart?: ((details: upstream6.ScaleStartDetails) => void) | null | undefined;
    onInteractionUpdate?: ((details: upstream7.ScaleUpdateDetails) => void) | null | undefined;
    panEnabled?: boolean | undefined;
    scaleEnabled?: boolean | undefined;
    scaleFactor?: number | undefined;
    transformationController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream19.Matrix4];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream19.Matrix4];
    }>) | null | undefined;
    alignment?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | null | undefined;
    trackpadScrollCausesScale?: boolean | undefined;
    child: Widget;
}): InteractiveViewer;
export declare namespace _InteractiveViewerFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        clipBehavior?: upstream2.Clip | undefined;
        panAxis?: upstream3.PanAxis | undefined;
        boundaryMargin?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        maxScale?: number | undefined;
        minScale?: number | undefined;
        interactionEndFrictionCoefficient?: number | undefined;
        onInteractionEnd?: ((details: upstream5.ScaleEndDetails) => void) | null | undefined;
        onInteractionStart?: ((details: upstream6.ScaleStartDetails) => void) | null | undefined;
        onInteractionUpdate?: ((details: upstream7.ScaleUpdateDetails) => void) | null | undefined;
        panEnabled?: boolean | undefined;
        scaleEnabled?: boolean | undefined;
        scaleFactor?: number | undefined;
        transformationController?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::TransformationController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream19.Matrix4];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream19.Matrix4];
        }>) | null | undefined;
        alignment?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }>) | null | undefined;
        trackpadScrollCausesScale?: boolean | undefined;
        builder: ((context: upstream10.BuildContext, viewport: upstream11.Quad) => Widget);
    }): InteractiveViewer;
}
export declare const InteractiveViewer: typeof _InteractiveViewerFactory & _FlaxInstanceType<InteractiveViewer> & _FlaxDartType<InteractiveViewer, readonly ["class", "flax.core/sdk_widgets#type:InteractiveViewer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "alignment" | "clipBehavior" | "panAxis" | "boundaryMargin" | "builder" | "child" | "constrained" | "panEnabled" | "scaleEnabled" | "trackpadScrollCausesScale" | "scaleFactor" | "maxScale" | "minScale" | "interactionEndFrictionCoefficient" | "onInteractionEnd" | "onInteractionStart" | "onInteractionUpdate" | "transformationController" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/interactive_viewer.dart::InteractiveViewer" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
