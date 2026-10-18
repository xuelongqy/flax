import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream12 from '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import type * as upstream13 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadioListTile<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/radio_list_tile.dart::RadioListTile": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RadioListTile: unique symbol;
    readonly [_flaxDartTypeValue]: RadioListTile<T>;
    readonly value: T;
    readonly groupValue: T | null;
    readonly onChanged: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly mouseCursor: upstream2.MouseCursor | null;
    readonly toggleable: boolean;
    readonly activeColor: upstream3.Color | null;
    readonly fillColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly materialTapTargetSize: upstream5.MaterialTapTargetSize | null;
    readonly hoverColor: upstream3.Color | null;
    readonly overlayColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly splashRadius: number | null;
    readonly title: Widget | null;
    readonly subtitle: Widget | null;
    readonly secondary: Widget | null;
    readonly isThreeLine: boolean | null;
    readonly dense: boolean | null;
    readonly selected: boolean;
    readonly controlAffinity: upstream6.ListTileControlAffinity | null;
    readonly autofocus: boolean;
    readonly contentPadding: upstream7.EdgeInsetsGeometry | null;
    readonly shape: upstream8.ShapeBorder | null;
    readonly tileColor: upstream3.Color | null;
    readonly selectedTileColor: upstream3.Color | null;
    readonly visualDensity: upstream9.VisualDensity | null;
    readonly focusNode: upstream10.FocusNode | null;
    readonly statesController: upstream11.WidgetStatesController | null;
    readonly onFocusChange: ((value: boolean) => void) | null;
    readonly enableFeedback: boolean | null;
    readonly horizontalTitleGap: number | null;
    readonly minVerticalPadding: number | null;
    readonly minLeadingWidth: number | null;
    readonly minTileHeight: number | null;
    readonly titleAlignment: upstream12.ListTileTitleAlignment | null;
    readonly internalAddSemanticForOnTap: boolean;
    readonly useCupertinoCheckmarkStyle: boolean;
    readonly radioScaleFactor: number;
    readonly enabled: boolean | null;
    readonly radioBackgroundColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
    readonly radioSide: upstream13.BorderSide | null;
    readonly radioInnerRadius: upstream4.WidgetStateProperty<number | null> | null;
    readonly checked: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream14.State<RadioListTile<T>>;
    createElement(): upstream15.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream17.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream17.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream19.DiagnosticsTreeStyle | null | undefined;
    }): upstream18.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream18.DiagnosticsNode>;
}
export declare function _RadioListTileFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: (T | _FlaxDartOutput<T>);
    groupValue?: (T | _FlaxDartOutput<T>) | null | undefined;
    onChanged?: ((value: _FlaxDartOutput<T> | null) => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    toggleable?: boolean | undefined;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
    title?: Widget | null | undefined;
    subtitle?: Widget | null | undefined;
    isThreeLine?: boolean | null | undefined;
    dense?: boolean | null | undefined;
    secondary?: Widget | null | undefined;
    selected?: boolean | undefined;
    controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
    autofocus?: boolean | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
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
    statesController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
    }>) | null | undefined;
    onFocusChange?: ((value: boolean) => void) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    minTileHeight?: number | null | undefined;
    radioScaleFactor?: number | undefined;
    titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
    enabled?: boolean | null | undefined;
    internalAddSemanticForOnTap?: boolean | undefined;
    radioBackgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    radioSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    radioInnerRadius?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
}): RadioListTile<T>;
export declare function _RadioListTileFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: unknown | null;
    groupValue?: unknown | null | undefined;
    onChanged?: ((value: unknown | null) => void) | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    toggleable?: boolean | undefined;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
    title?: Widget | null | undefined;
    subtitle?: Widget | null | undefined;
    isThreeLine?: boolean | null | undefined;
    dense?: boolean | null | undefined;
    secondary?: Widget | null | undefined;
    selected?: boolean | undefined;
    controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
    autofocus?: boolean | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
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
    statesController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
    }>) | null | undefined;
    onFocusChange?: ((value: boolean) => void) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    minTileHeight?: number | null | undefined;
    radioScaleFactor?: number | undefined;
    titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
    enabled?: boolean | null | undefined;
    internalAddSemanticForOnTap?: boolean | undefined;
    radioBackgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    radioSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    radioInnerRadius?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
}): RadioListTile<unknown | null>;
export declare namespace _RadioListTileFactory {
    function adaptive<T extends unknown | null = unknown | null>(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: (T | _FlaxDartOutput<T>);
        groupValue?: (T | _FlaxDartOutput<T>) | null | undefined;
        onChanged?: ((value: _FlaxDartOutput<T> | null) => void) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        toggleable?: boolean | undefined;
        activeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
        title?: Widget | null | undefined;
        subtitle?: Widget | null | undefined;
        isThreeLine?: boolean | null | undefined;
        dense?: boolean | null | undefined;
        secondary?: Widget | null | undefined;
        selected?: boolean | undefined;
        controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
        autofocus?: boolean | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
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
        statesController?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
        }>) | null | undefined;
        onFocusChange?: ((value: boolean) => void) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        radioScaleFactor?: number | undefined;
        enabled?: boolean | null | undefined;
        useCupertinoCheckmarkStyle?: boolean | undefined;
        titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
        internalAddSemanticForOnTap?: boolean | undefined;
        radioBackgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        radioSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        radioInnerRadius?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
    }): RadioListTile<T>;
    function adaptive(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: unknown | null;
        groupValue?: unknown | null | undefined;
        onChanged?: ((value: unknown | null) => void) | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        toggleable?: boolean | undefined;
        activeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
        title?: Widget | null | undefined;
        subtitle?: Widget | null | undefined;
        isThreeLine?: boolean | null | undefined;
        dense?: boolean | null | undefined;
        secondary?: Widget | null | undefined;
        selected?: boolean | undefined;
        controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
        autofocus?: boolean | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
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
        statesController?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
        }>) | null | undefined;
        onFocusChange?: ((value: boolean) => void) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        radioScaleFactor?: number | undefined;
        enabled?: boolean | null | undefined;
        useCupertinoCheckmarkStyle?: boolean | undefined;
        titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
        internalAddSemanticForOnTap?: boolean | undefined;
        radioBackgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        radioSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        radioInnerRadius?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
    }): RadioListTile<unknown | null>;
}
export declare const RadioListTile: typeof _RadioListTileFactory & _FlaxInstanceType<RadioListTile<unknown | null>> & _FlaxDartType<RadioListTile<unknown | null>, readonly ["class", "flax.core/sdk_material#type:RadioListTile", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "groupValue" | "onChanged" | "mouseCursor" | "toggleable" | "activeColor" | "fillColor" | "materialTapTargetSize" | "hoverColor" | "overlayColor" | "splashRadius" | "title" | "subtitle" | "secondary" | "isThreeLine" | "dense" | "selected" | "controlAffinity" | "autofocus" | "contentPadding" | "shape" | "tileColor" | "selectedTileColor" | "visualDensity" | "focusNode" | "statesController" | "onFocusChange" | "enableFeedback" | "horizontalTitleGap" | "minVerticalPadding" | "minLeadingWidth" | "minTileHeight" | "titleAlignment" | "internalAddSemanticForOnTap" | "useCupertinoCheckmarkStyle" | "radioScaleFactor" | "enabled" | "radioBackgroundColor" | "radioSide" | "radioInnerRadius" | "checked" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/radio_list_tile.dart::RadioListTile" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            groupValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onChanged?: ((value: _Selected0 | null) => void) | null | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            toggleable?: boolean | undefined;
            activeColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            hoverColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            overlayColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            splashRadius?: number | null | undefined;
            materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
            title?: Widget | null | undefined;
            subtitle?: Widget | null | undefined;
            isThreeLine?: boolean | null | undefined;
            dense?: boolean | null | undefined;
            secondary?: Widget | null | undefined;
            selected?: boolean | undefined;
            controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
            autofocus?: boolean | undefined;
            contentPadding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            shape?: Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
            }> | null | undefined;
            tileColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            selectedTileColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            visualDensity?: (Readonly<{
                "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
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
            statesController?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
            }>) | null | undefined;
            onFocusChange?: ((value: boolean) => void) | null | undefined;
            enableFeedback?: boolean | null | undefined;
            horizontalTitleGap?: number | null | undefined;
            minVerticalPadding?: number | null | undefined;
            minLeadingWidth?: number | null | undefined;
            minTileHeight?: number | null | undefined;
            radioScaleFactor?: number | undefined;
            titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
            enabled?: boolean | null | undefined;
            internalAddSemanticForOnTap?: boolean | undefined;
            radioBackgroundColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            radioSide?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            radioInnerRadius?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
            }> | null | undefined;
        }): RadioListTile<_Selected0>;
        adaptive: (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            groupValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onChanged?: ((value: _Selected0 | null) => void) | null | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            toggleable?: boolean | undefined;
            activeColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            hoverColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            overlayColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            splashRadius?: number | null | undefined;
            materialTapTargetSize?: upstream5.MaterialTapTargetSize | null | undefined;
            title?: Widget | null | undefined;
            subtitle?: Widget | null | undefined;
            isThreeLine?: boolean | null | undefined;
            dense?: boolean | null | undefined;
            secondary?: Widget | null | undefined;
            selected?: boolean | undefined;
            controlAffinity?: upstream6.ListTileControlAffinity | null | undefined;
            autofocus?: boolean | undefined;
            contentPadding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            shape?: Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
            }> | null | undefined;
            tileColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            selectedTileColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            visualDensity?: (Readonly<{
                "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
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
            statesController?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesController": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream20.WidgetState>];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream20.WidgetState>];
            }>) | null | undefined;
            onFocusChange?: ((value: boolean) => void) | null | undefined;
            enableFeedback?: boolean | null | undefined;
            horizontalTitleGap?: number | null | undefined;
            minVerticalPadding?: number | null | undefined;
            minLeadingWidth?: number | null | undefined;
            minTileHeight?: number | null | undefined;
            radioScaleFactor?: number | undefined;
            enabled?: boolean | null | undefined;
            useCupertinoCheckmarkStyle?: boolean | undefined;
            titleAlignment?: upstream12.ListTileTitleAlignment | null | undefined;
            internalAddSemanticForOnTap?: boolean | undefined;
            radioBackgroundColor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
            }> | null | undefined;
            radioSide?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            radioInnerRadius?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
            }> | null | undefined;
        }) => RadioListTile<_Selected0>;
        readonly prototype: RadioListTile<_Selected0>;
    } & _FlaxInstanceType<RadioListTile<_Selected0>> & _FlaxDartType<RadioListTile<_Selected0>> : never : never;
}
export {};
