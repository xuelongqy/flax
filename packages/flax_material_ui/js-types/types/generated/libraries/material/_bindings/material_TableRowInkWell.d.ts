import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InkResponse';
import '@flax/material-ui/_bindings/material_InkResponse';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapUpDetails';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream11 from '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TableRowInkWell extends _FlaxDartWidget, Omit<upstream0.InkResponse, _flaxOwnMembers0>, Omit<upstream1.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.InkResponse>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InkResponse | keyof upstream1.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/data_table.dart::TableRowInkWell": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/ink_well.dart::InkResponse": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TableRowInkWell: unique symbol;
    readonly [_flaxDartTypeValue]: TableRowInkWell;
    readonly child: Widget | null;
    readonly onTap: (() => void) | null;
    readonly onTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onTapUp: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onTapCancel: (() => void) | null;
    readonly onDoubleTap: (() => void) | null;
    readonly onLongPress: (() => void) | null;
    readonly onLongPressUp: (() => void) | null;
    readonly onSecondaryTap: (() => void) | null;
    readonly onSecondaryTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSecondaryTapUp: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapUpDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onSecondaryTapCancel: (() => void) | null;
    readonly onHighlightChanged: ((value: boolean) => void) | null;
    readonly onHover: ((value: boolean) => void) | null;
    readonly mouseCursor: upstream6.MouseCursor | null;
    readonly containedInkWell: boolean;
    readonly highlightShape: upstream8.BoxShape;
    readonly radius: number | null;
    readonly borderRadius: upstream9.BorderRadius | null;
    readonly customBorder: upstream10.ShapeBorder | null;
    readonly focusColor: upstream5.Color | null;
    readonly hoverColor: upstream5.Color | null;
    readonly highlightColor: upstream5.Color | null;
    readonly overlayColor: upstream4.WidgetStateProperty<upstream5.Color | null> | null;
    readonly splashColor: upstream5.Color | null;
    readonly splashFactory: upstream11.InteractiveInkFeatureFactory | null;
    readonly enableFeedback: boolean;
    readonly excludeFromSemantics: boolean;
    readonly onFocusChange: ((value: boolean) => void) | null;
    readonly autofocus: boolean;
    readonly focusNode: upstream12.FocusNode | null;
    readonly canRequestFocus: boolean;
    readonly statesController: upstream13.WidgetStatesController | null;
    readonly hoverDuration: upstream14.Duration | null;
    readonly key: upstream2.Key | null;
    getRectCallback(referenceBox: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
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
    }>): (() => upstream15.Rect);
    debugCheckContext(context: upstream17.BuildContext): boolean;
    build(context: upstream17.BuildContext): Widget;
    createElement(): upstream18.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream21.DiagnosticsNode>;
}
export declare function _TableRowInkWellFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Widget | null | undefined;
    onTap?: (() => void) | null | undefined;
    onDoubleTap?: (() => void) | null | undefined;
    onLongPress?: (() => void) | null | undefined;
    onHighlightChanged?: ((value: boolean) => void) | null | undefined;
    onHover?: ((value: boolean) => void) | null | undefined;
    onSecondaryTap?: (() => void) | null | undefined;
    onSecondaryTapDown?: ((details: upstream3.TapDownDetails) => void) | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Color | null];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): TableRowInkWell;
export declare namespace _TableRowInkWellFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _TableRowInkWellFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _TableRowInkWellFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _TableRowInkWellFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const TableRowInkWell: typeof _TableRowInkWellFactory & _FlaxInstanceType<TableRowInkWell> & _FlaxDartType<TableRowInkWell, readonly ["class", "flax.material/material#type:TableRowInkWell", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "onTap" | "onTapDown" | "onTapUp" | "onTapCancel" | "onDoubleTap" | "onLongPress" | "onLongPressUp" | "onSecondaryTap" | "onSecondaryTapDown" | "onSecondaryTapUp" | "onSecondaryTapCancel" | "onHighlightChanged" | "onHover" | "mouseCursor" | "containedInkWell" | "highlightShape" | "radius" | "borderRadius" | "customBorder" | "focusColor" | "hoverColor" | "highlightColor" | "overlayColor" | "splashColor" | "splashFactory" | "enableFeedback" | "excludeFromSemantics" | "onFocusChange" | "autofocus" | "focusNode" | "canRequestFocus" | "statesController" | "hoverDuration" | "key" | "getRectCallback" | "debugCheckContext" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/data_table.dart::TableRowInkWell" | "__flaxBound:package:material_ui/src/ink_well.dart::InkResponse" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
