import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import type * as upstream10 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipPositionContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipPositionContext';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Tooltip extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/tooltip.dart::Tooltip": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Tooltip: unique symbol;
    readonly [_flaxDartTypeValue]: Tooltip;
    readonly message: string | null;
    readonly richMessage: upstream2.InlineSpan | null;
    readonly height: number | null;
    readonly constraints: upstream3.BoxConstraints | null;
    readonly padding: upstream4.EdgeInsetsGeometry | null;
    readonly margin: upstream4.EdgeInsetsGeometry | null;
    readonly verticalOffset: number | null;
    readonly preferBelow: boolean | null;
    readonly excludeFromSemantics: boolean | null;
    readonly child: Widget | null;
    readonly decoration: upstream5.Decoration | null;
    readonly textStyle: upstream6.TextStyle | null;
    readonly textAlign: upstream7.TextAlign | null;
    readonly waitDuration: upstream8.Duration | null;
    readonly showDuration: upstream8.Duration | null;
    readonly exitDuration: upstream8.Duration | null;
    readonly enableTapToDismiss: boolean;
    readonly triggerMode: upstream9.TooltipTriggerMode | null;
    readonly enableFeedback: boolean | null;
    readonly onTriggered: (() => void) | null;
    readonly mouseCursor: upstream10.MouseCursor | null;
    readonly ignorePointer: boolean | null;
    readonly positionDelegate: ((context: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipPositionContext": readonly [];
    }>) => upstream11.Offset) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream13.State<Tooltip>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream15.StatefulElement;
    toStringShort(): string;
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
export declare function _TooltipFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    message?: string | null | undefined;
    richMessage?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    height?: number | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    verticalOffset?: number | null | undefined;
    preferBelow?: boolean | null | undefined;
    excludeFromSemantics?: boolean | null | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream7.TextAlign | null | undefined;
    waitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream8.Duration];
    }>) | null | undefined;
    showDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream8.Duration];
    }>) | null | undefined;
    exitDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream8.Duration];
    }>) | null | undefined;
    enableTapToDismiss?: boolean | undefined;
    triggerMode?: upstream9.TooltipTriggerMode | null | undefined;
    enableFeedback?: boolean | null | undefined;
    onTriggered?: (() => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    ignorePointer?: boolean | null | undefined;
    positionDelegate?: ((context: upstream12.TooltipPositionContext) => Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    child?: Widget | null | undefined;
}): Tooltip;
export declare namespace _TooltipFactory {
    function dismissAllToolTips(): boolean;
}
export declare const Tooltip: typeof _TooltipFactory & _FlaxInstanceType<Tooltip> & _FlaxDartType<Tooltip, readonly ["class", "flax.material/material#type:Tooltip", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "message" | "richMessage" | "height" | "constraints" | "padding" | "margin" | "verticalOffset" | "preferBelow" | "excludeFromSemantics" | "child" | "decoration" | "textStyle" | "textAlign" | "waitDuration" | "showDuration" | "exitDuration" | "enableTapToDismiss" | "triggerMode" | "enableFeedback" | "onTriggered" | "mouseCursor" | "ignorePointer" | "positionDelegate" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/tooltip.dart::Tooltip" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
