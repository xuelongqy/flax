import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_DraggableDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DraggableDetails';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Draggable<T extends {} = {}> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::Draggable": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Draggable: unique symbol;
    readonly [_flaxDartTypeValue]: Draggable<T>;
    readonly data: T | null;
    readonly axis: upstream2.Axis | null;
    readonly child: Widget;
    readonly childWhenDragging: Widget | null;
    readonly feedback: Widget;
    readonly feedbackOffset: upstream3.Offset;
    readonly dragAnchorStrategy: ((draggable: Draggable<{}>, context: upstream4.BuildContext, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream3.Offset);
    readonly ignoringFeedbackSemantics: boolean;
    readonly ignoringFeedbackPointer: boolean;
    readonly affinity: upstream2.Axis | null;
    readonly maxSimultaneousDrags: number | null;
    readonly onDragStarted: (() => void) | null;
    readonly onDragUpdate: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onDraggableCanceled: ((velocity: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => void) | null;
    readonly onDragCompleted: (() => void) | null;
    readonly onDragEnd: ((details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_target.dart::DraggableDetails": readonly [];
    }>) => void) | null;
    readonly rootOverlay: boolean;
    readonly hitTestBehavior: upstream8.HitTestBehavior;
    readonly allowedButtonsFilter: ((buttons: number) => boolean) | null;
    readonly key: upstream1.Key | null;
    createRecognizer(onStart: ((position: upstream3.Offset) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }> | null)): upstream9.MultiDragGestureRecognizer;
    createState(): upstream11.State<Draggable<T>>;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
export declare function _DraggableFactory<T extends {} = {}>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    feedback: Widget;
    data?: (T | _FlaxDartOutput<T>) | null | undefined;
    axis?: upstream2.Axis | null | undefined;
    childWhenDragging?: Widget | null | undefined;
    feedbackOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    dragAnchorStrategy?: ((draggable: Draggable<{}>, context: upstream4.BuildContext, position: upstream3.Offset) => Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    affinity?: upstream2.Axis | null | undefined;
    maxSimultaneousDrags?: number | null | undefined;
    onDragStarted?: (() => void) | null | undefined;
    onDragUpdate?: ((details: upstream5.DragUpdateDetails) => void) | null | undefined;
    onDraggableCanceled?: ((velocity: upstream6.Velocity, offset: upstream3.Offset) => void) | null | undefined;
    onDragEnd?: ((details: upstream7.DraggableDetails) => void) | null | undefined;
    onDragCompleted?: (() => void) | null | undefined;
    ignoringFeedbackSemantics?: boolean | undefined;
    ignoringFeedbackPointer?: boolean | undefined;
    rootOverlay?: boolean | undefined;
    hitTestBehavior?: upstream8.HitTestBehavior | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
}): Draggable<T>;
export declare function _DraggableFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    feedback: Widget;
    data?: unknown | null | undefined;
    axis?: upstream2.Axis | null | undefined;
    childWhenDragging?: Widget | null | undefined;
    feedbackOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    dragAnchorStrategy?: ((draggable: Draggable<{}>, context: upstream4.BuildContext, position: upstream3.Offset) => Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    affinity?: upstream2.Axis | null | undefined;
    maxSimultaneousDrags?: number | null | undefined;
    onDragStarted?: (() => void) | null | undefined;
    onDragUpdate?: ((details: upstream5.DragUpdateDetails) => void) | null | undefined;
    onDraggableCanceled?: ((velocity: upstream6.Velocity, offset: upstream3.Offset) => void) | null | undefined;
    onDragEnd?: ((details: upstream7.DraggableDetails) => void) | null | undefined;
    onDragCompleted?: (() => void) | null | undefined;
    ignoringFeedbackSemantics?: boolean | undefined;
    ignoringFeedbackPointer?: boolean | undefined;
    rootOverlay?: boolean | undefined;
    hitTestBehavior?: upstream8.HitTestBehavior | undefined;
    allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
}): Draggable<{}>;
export declare const Draggable: typeof _DraggableFactory & _FlaxInstanceType<Draggable<{}>> & _FlaxDartType<Draggable<{}>, readonly ["class", "flax.core/sdk_widgets#type:Draggable", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "axis" | "child" | "childWhenDragging" | "feedback" | "feedbackOffset" | "dragAnchorStrategy" | "ignoringFeedbackSemantics" | "ignoringFeedbackPointer" | "affinity" | "maxSimultaneousDrags" | "onDragStarted" | "onDragUpdate" | "onDraggableCanceled" | "onDragCompleted" | "onDragEnd" | "rootOverlay" | "hitTestBehavior" | "allowedButtonsFilter" | "key" | "createRecognizer" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/drag_target.dart::Draggable" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            child: Widget;
            feedback: Widget;
            data?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            axis?: upstream2.Axis | null | undefined;
            childWhenDragging?: Widget | null | undefined;
            feedbackOffset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | undefined;
            dragAnchorStrategy?: ((draggable: Draggable<{}>, context: upstream4.BuildContext, position: upstream3.Offset) => Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | undefined;
            affinity?: upstream2.Axis | null | undefined;
            maxSimultaneousDrags?: number | null | undefined;
            onDragStarted?: (() => void) | null | undefined;
            onDragUpdate?: ((details: upstream5.DragUpdateDetails) => void) | null | undefined;
            onDraggableCanceled?: ((velocity: upstream6.Velocity, offset: upstream3.Offset) => void) | null | undefined;
            onDragEnd?: ((details: upstream7.DraggableDetails) => void) | null | undefined;
            onDragCompleted?: (() => void) | null | undefined;
            ignoringFeedbackSemantics?: boolean | undefined;
            ignoringFeedbackPointer?: boolean | undefined;
            rootOverlay?: boolean | undefined;
            hitTestBehavior?: upstream8.HitTestBehavior | undefined;
            allowedButtonsFilter?: ((buttons: number) => boolean) | null | undefined;
        }): Draggable<_Selected0>;
        readonly prototype: Draggable<_Selected0>;
    } & _FlaxInstanceType<Draggable<_Selected0>> & _FlaxDartType<Draggable<_Selected0>> : never : never;
}
export {};
