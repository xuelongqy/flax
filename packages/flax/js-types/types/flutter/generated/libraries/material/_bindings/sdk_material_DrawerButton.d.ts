import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_IconButton';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StandardComponentType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StandardComponentType';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream9 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
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
export interface DrawerButton extends _FlaxDartWidget, Omit<upstream0.IconButton, _flaxOwnMembers0>, Omit<upstream1.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.IconButton>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.IconButton | keyof upstream1.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/action_buttons.dart::DrawerButton": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/action_buttons.dart::_ActionButton": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/icon_button.dart::IconButton": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DrawerButton: unique symbol;
    readonly [_flaxDartTypeValue]: DrawerButton;
    readonly standardComponent: upstream5.StandardComponentType | null;
    readonly iconSize: number | null;
    readonly visualDensity: upstream6.VisualDensity | null;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly alignment: upstream8.AlignmentGeometry | null;
    readonly splashRadius: number | null;
    readonly icon: Widget;
    readonly focusColor: upstream3.Color | null;
    readonly hoverColor: upstream3.Color | null;
    readonly color: upstream3.Color | null;
    readonly splashColor: upstream3.Color | null;
    readonly highlightColor: upstream3.Color | null;
    readonly disabledColor: upstream3.Color | null;
    readonly onPressed: (() => void) | null;
    readonly onHover: ((value: boolean) => void) | null;
    readonly onLongPress: (() => void) | null;
    readonly mouseCursor: upstream9.MouseCursor | null;
    readonly focusNode: upstream10.FocusNode | null;
    readonly autofocus: boolean;
    readonly tooltip: string | null;
    readonly enableFeedback: boolean | null;
    readonly constraints: upstream11.BoxConstraints | null;
    readonly style: upstream4.ButtonStyle | null;
    readonly isSelected: boolean | null;
    readonly selectedIcon: Widget | null;
    readonly statesController: upstream12.WidgetStatesController | null;
    readonly key: upstream2.Key | null;
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
export declare function _DrawerButtonFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    onPressed?: (() => void) | null | undefined;
}): DrawerButton;
export declare const DrawerButton: typeof _DrawerButtonFactory & _FlaxInstanceType<DrawerButton> & _FlaxDartType<DrawerButton, readonly ["class", "flax.core/sdk_material#type:DrawerButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "standardComponent" | "iconSize" | "visualDensity" | "padding" | "alignment" | "splashRadius" | "icon" | "focusColor" | "hoverColor" | "color" | "splashColor" | "highlightColor" | "disabledColor" | "onPressed" | "onHover" | "onLongPress" | "mouseCursor" | "focusNode" | "autofocus" | "tooltip" | "enableFeedback" | "constraints" | "style" | "isSelected" | "selectedIcon" | "statesController" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/action_buttons.dart::DrawerButton" | "__flaxBound:package:flutter/src/material/action_buttons.dart::_ActionButton" | "__flaxBound:package:flutter/src/material/icon_button.dart::IconButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
