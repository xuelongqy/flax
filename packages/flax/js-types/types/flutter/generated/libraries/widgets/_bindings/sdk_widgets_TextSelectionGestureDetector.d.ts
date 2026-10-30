import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionGestureDetector extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetector": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextSelectionGestureDetector: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionGestureDetector;
    readonly onTapTrackStart: (() => void) | null;
    readonly onTapTrackReset: (() => void) | null;
    readonly onTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onForcePressStart: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onForcePressEnd: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSecondaryTap: (() => void) | null;
    readonly onSecondaryTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSingleTapUp: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSingleTapCancel: (() => void) | null;
    readonly onUserTap: (() => void) | null;
    readonly onSingleLongTapStart: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSingleLongTapMoveUpdate: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSingleLongTapEnd: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSingleLongTapCancel: (() => void) | null;
    readonly onDoubleTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onTripleTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onDragSelectionStart: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onDragSelectionUpdate: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onDragSelectionEnd: ((endDetails: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onUserTapAlwaysCalled: boolean;
    readonly behavior: upstream12.HitTestBehavior | null;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    createState(): upstream13.State<upstream0.StatefulWidget>;
    createElement(): upstream14.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
}
export declare function _TextSelectionGestureDetectorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onTapTrackStart?: (() => void) | null | undefined;
    onTapTrackReset?: (() => void) | null | undefined;
    onTapDown?: ((details: upstream2.TapDragDownDetails) => void) | null | undefined;
    onForcePressStart?: ((details: upstream3.ForcePressDetails) => void) | null | undefined;
    onForcePressEnd?: ((details: upstream3.ForcePressDetails) => void) | null | undefined;
    onSecondaryTap?: (() => void) | null | undefined;
    onSecondaryTapDown?: ((details: upstream4.TapDownDetails) => void) | null | undefined;
    onSingleTapUp?: ((details: upstream5.TapDragUpDetails) => void) | null | undefined;
    onSingleTapCancel?: (() => void) | null | undefined;
    onUserTap?: (() => void) | null | undefined;
    onSingleLongTapStart?: ((details: upstream6.LongPressStartDetails) => void) | null | undefined;
    onSingleLongTapMoveUpdate?: ((details: upstream7.LongPressMoveUpdateDetails) => void) | null | undefined;
    onSingleLongTapEnd?: ((details: upstream8.LongPressEndDetails) => void) | null | undefined;
    onSingleLongTapCancel?: (() => void) | null | undefined;
    onDoubleTapDown?: ((details: upstream2.TapDragDownDetails) => void) | null | undefined;
    onTripleTapDown?: ((details: upstream2.TapDragDownDetails) => void) | null | undefined;
    onDragSelectionStart?: ((details: upstream9.TapDragStartDetails) => void) | null | undefined;
    onDragSelectionUpdate?: ((details: upstream10.TapDragUpdateDetails) => void) | null | undefined;
    onDragSelectionEnd?: ((endDetails: upstream11.TapDragEndDetails) => void) | null | undefined;
    onUserTapAlwaysCalled?: boolean | undefined;
    behavior?: upstream12.HitTestBehavior | null | undefined;
    child: Widget;
}): TextSelectionGestureDetector;
export declare namespace _TextSelectionGestureDetectorFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _TextSelectionGestureDetectorFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _TextSelectionGestureDetectorFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _TextSelectionGestureDetectorFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const TextSelectionGestureDetector: typeof _TextSelectionGestureDetectorFactory & _FlaxInstanceType<TextSelectionGestureDetector> & _FlaxDartType<TextSelectionGestureDetector, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetector", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onTapTrackStart" | "onTapTrackReset" | "onTapDown" | "onForcePressStart" | "onForcePressEnd" | "onSecondaryTap" | "onSecondaryTapDown" | "onSingleTapUp" | "onSingleTapCancel" | "onUserTap" | "onSingleLongTapStart" | "onSingleLongTapMoveUpdate" | "onSingleLongTapEnd" | "onSingleLongTapCancel" | "onDoubleTapDown" | "onTripleTapDown" | "onDragSelectionStart" | "onDragSelectionUpdate" | "onDragSelectionEnd" | "onUserTapAlwaysCalled" | "behavior" | "child" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetector" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
