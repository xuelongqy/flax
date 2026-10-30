import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ButtonTextTheme';
import '@flax/material-ui/_bindings/material_ButtonTextTheme';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream11 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream12 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialButton extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/material_button.dart::MaterialButton": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MaterialButton: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialButton;
    readonly onPressed: (() => void) | null;
    readonly onLongPress: (() => void) | null;
    readonly onHighlightChanged: ((value: boolean) => void) | null;
    readonly mouseCursor: upstream2.MouseCursor | null;
    readonly textTheme: upstream3.ButtonTextTheme | null;
    readonly textColor: upstream4.Color | null;
    readonly disabledTextColor: upstream4.Color | null;
    readonly color: upstream4.Color | null;
    readonly disabledColor: upstream4.Color | null;
    readonly splashColor: upstream4.Color | null;
    readonly focusColor: upstream4.Color | null;
    readonly hoverColor: upstream4.Color | null;
    readonly highlightColor: upstream4.Color | null;
    readonly elevation: number | null;
    readonly hoverElevation: number | null;
    readonly focusElevation: number | null;
    readonly highlightElevation: number | null;
    readonly disabledElevation: number | null;
    readonly colorBrightness: upstream5.Brightness | null;
    readonly child: Widget | null;
    readonly enabled: boolean;
    readonly padding: upstream6.EdgeInsetsGeometry | null;
    readonly visualDensity: upstream7.VisualDensity | null;
    readonly shape: upstream8.ShapeBorder | null;
    readonly clipBehavior: upstream9.Clip;
    readonly focusNode: upstream10.FocusNode | null;
    readonly autofocus: boolean;
    readonly animationDuration: upstream12.Duration | null;
    readonly materialTapTargetSize: upstream11.MaterialTapTargetSize | null;
    readonly minWidth: number | null;
    readonly height: number | null;
    readonly enableFeedback: boolean;
    readonly key: upstream1.Key | null;
    build(context: upstream13.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream15.StatelessElement;
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
export declare function _MaterialButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPressed: (() => void) | null;
    onLongPress?: (() => void) | null | undefined;
    onHighlightChanged?: ((value: boolean) => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textTheme?: upstream3.ButtonTextTheme | null | undefined;
    textColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    disabledTextColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    disabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    highlightColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    splashColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    colorBrightness?: upstream5.Brightness | null | undefined;
    elevation?: number | null | undefined;
    focusElevation?: number | null | undefined;
    hoverElevation?: number | null | undefined;
    highlightElevation?: number | null | undefined;
    disabledElevation?: number | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream9.Clip | undefined;
    focusNode?: (Readonly<{
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
    }>) | null | undefined;
    autofocus?: boolean | undefined;
    materialTapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
    animationDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
    }>) | null | undefined;
    minWidth?: number | null | undefined;
    height?: number | null | undefined;
    enableFeedback?: boolean | undefined;
    child?: Widget | null | undefined;
}): MaterialButton;
export declare namespace _MaterialButtonFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _MaterialButtonFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _MaterialButtonFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _MaterialButtonFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const MaterialButton: typeof _MaterialButtonFactory & _FlaxInstanceType<MaterialButton> & _FlaxDartType<MaterialButton, readonly ["class", "flax.material/material#type:MaterialButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onPressed" | "onLongPress" | "onHighlightChanged" | "mouseCursor" | "textTheme" | "textColor" | "disabledTextColor" | "color" | "disabledColor" | "splashColor" | "focusColor" | "hoverColor" | "highlightColor" | "elevation" | "hoverElevation" | "focusElevation" | "highlightElevation" | "disabledElevation" | "colorBrightness" | "child" | "enabled" | "padding" | "visualDensity" | "shape" | "clipBehavior" | "focusNode" | "autofocus" | "animationDuration" | "materialTapTargetSize" | "minWidth" | "height" | "enableFeedback" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/material_button.dart::MaterialButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
