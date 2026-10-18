import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuItem';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuEntry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuItemState';
import '@flax/flutter/material/_bindings/sdk_material_PopupMenuItemState';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CheckedPopupMenuItem<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.PopupMenuItem<T>, _flaxOwnMembers0>, Omit<upstream1.PopupMenuEntry<T>, _flaxOwnMembers0 | keyof upstream0.PopupMenuItem<T>>, Omit<upstream2.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.PopupMenuItem<T> | keyof upstream1.PopupMenuEntry<T>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.PopupMenuItem<T> | keyof upstream1.PopupMenuEntry<T> | keyof upstream2.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu.dart::CheckedPopupMenuItem": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuItem": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuEntry": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CheckedPopupMenuItem: unique symbol;
    readonly [_flaxDartTypeValue]: CheckedPopupMenuItem<T>;
    readonly checked: boolean;
    readonly child: Widget | null;
    readonly value: T | null;
    readonly onTap: (() => void) | null;
    readonly enabled: boolean;
    readonly height: number;
    readonly padding: upstream4.EdgeInsets | null;
    readonly textStyle: upstream6.TextStyle | null;
    readonly labelTextStyle: upstream5.WidgetStateProperty<upstream6.TextStyle | null> | null;
    readonly mouseCursor: upstream7.MouseCursor | null;
    readonly key: upstream3.Key | null;
    createState(): upstream8.PopupMenuItemState<T, CheckedPopupMenuItem<T>>;
    represents(value: (T | DartInput<T>) | null): boolean;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _CheckedPopupMenuItemFactory<T extends unknown | null = unknown | null>(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value?: (T | _FlaxDartOutput<T>) | null | undefined;
    checked?: boolean | undefined;
    enabled?: boolean | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    height?: number | undefined;
    labelTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    child?: Widget | null | undefined;
    onTap?: (() => void) | null | undefined;
}): CheckedPopupMenuItem<T>;
export declare function _CheckedPopupMenuItemFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value?: unknown | null | undefined;
    checked?: boolean | undefined;
    enabled?: boolean | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    height?: number | undefined;
    labelTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    child?: Widget | null | undefined;
    onTap?: (() => void) | null | undefined;
}): CheckedPopupMenuItem<unknown | null>;
export declare const CheckedPopupMenuItem: typeof _CheckedPopupMenuItemFactory & _FlaxInstanceType<CheckedPopupMenuItem<unknown | null>> & _FlaxDartType<CheckedPopupMenuItem<unknown | null>, readonly ["class", "flax.core/sdk_material#type:CheckedPopupMenuItem", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "checked" | "child" | "value" | "onTap" | "enabled" | "height" | "padding" | "textStyle" | "labelTextStyle" | "mouseCursor" | "key" | "createState" | "represents" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/popup_menu.dart::CheckedPopupMenuItem" | "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuItem" | "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuEntry" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options?: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            value?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            checked?: boolean | undefined;
            enabled?: boolean | undefined;
            padding?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }>) | null | undefined;
            height?: number | undefined;
            labelTextStyle?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
            }> | null | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            child?: Widget | null | undefined;
            onTap?: (() => void) | null | undefined;
        }): CheckedPopupMenuItem<_Selected0>;
        readonly prototype: CheckedPopupMenuItem<_Selected0>;
    } & _FlaxInstanceType<CheckedPopupMenuItem<_Selected0>> & _FlaxDartType<CheckedPopupMenuItem<_Selected0>> : never : never;
}
export {};
