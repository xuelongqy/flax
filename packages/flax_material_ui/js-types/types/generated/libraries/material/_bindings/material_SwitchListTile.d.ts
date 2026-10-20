import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream7 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream9 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream12 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream13 from '@flax/material-ui/_bindings/material_ListTileControlAffinity';
import '@flax/material-ui/_bindings/material_ListTileControlAffinity';
import type * as upstream14 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream15 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SwitchListTile extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/switch_list_tile.dart::SwitchListTile": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SwitchListTile: unique symbol;
    readonly [_flaxDartTypeValue]: SwitchListTile;
    readonly value: boolean;
    readonly onChanged: ((value: boolean) => void) | null;
    readonly activeColor: upstream2.Color | null;
    readonly activeThumbColor: upstream2.Color | null;
    readonly activeTrackColor: upstream2.Color | null;
    readonly inactiveThumbColor: upstream2.Color | null;
    readonly inactiveTrackColor: upstream2.Color | null;
    readonly activeThumbImage: upstream3.ImageProvider<any> | null;
    readonly onActiveThumbImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly inactiveThumbImage: upstream3.ImageProvider<any> | null;
    readonly onInactiveThumbImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly thumbColor: upstream5.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackColor: upstream5.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackOutlineColor: upstream5.WidgetStateProperty<upstream2.Color | null> | null;
    readonly thumbIcon: upstream5.WidgetStateProperty<upstream6.Icon | null> | null;
    readonly materialTapTargetSize: upstream7.MaterialTapTargetSize | null;
    readonly dragStartBehavior: upstream8.DragStartBehavior;
    readonly mouseCursor: upstream9.MouseCursor | null;
    readonly overlayColor: upstream5.WidgetStateProperty<upstream2.Color | null> | null;
    readonly splashRadius: number | null;
    readonly focusNode: upstream10.FocusNode | null;
    readonly statesController: upstream11.WidgetStatesController | null;
    readonly onFocusChange: ((value: boolean) => void) | null;
    readonly autofocus: boolean;
    readonly tileColor: upstream2.Color | null;
    readonly title: Widget | null;
    readonly subtitle: Widget | null;
    readonly secondary: Widget | null;
    readonly isThreeLine: boolean | null;
    readonly dense: boolean | null;
    readonly contentPadding: upstream12.EdgeInsetsGeometry | null;
    readonly selected: boolean;
    readonly controlAffinity: upstream13.ListTileControlAffinity | null;
    readonly shape: upstream14.ShapeBorder | null;
    readonly selectedTileColor: upstream2.Color | null;
    readonly visualDensity: upstream15.VisualDensity | null;
    readonly enableFeedback: boolean | null;
    readonly horizontalTitleGap: number | null;
    readonly minVerticalPadding: number | null;
    readonly minLeadingWidth: number | null;
    readonly minTileHeight: number | null;
    readonly hoverColor: upstream2.Color | null;
    readonly applyCupertinoTheme: boolean | null;
    readonly internalAddSemanticForOnTap: boolean;
    readonly key: upstream1.Key | null;
    build(context: upstream16.BuildContext): Widget;
    createElement(): upstream17.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
export declare function _SwitchListTileFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: boolean;
    onChanged: ((value: boolean) => void) | null;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeThumbColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeTrackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inactiveThumbColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inactiveTrackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeThumbImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    onActiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    inactiveThumbImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    onInactiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    thumbColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    thumbIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Icon | null];
    }> | null | undefined;
    materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined;
    dragStartBehavior?: upstream8.DragStartBehavior | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
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
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream22.WidgetState>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream22.WidgetState>];
    }>) | null | undefined;
    onFocusChange?: ((value: boolean) => void) | null | undefined;
    autofocus?: boolean | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    title?: Widget | null | undefined;
    subtitle?: Widget | null | undefined;
    isThreeLine?: boolean | null | undefined;
    dense?: boolean | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    secondary?: Widget | null | undefined;
    selected?: boolean | undefined;
    controlAffinity?: upstream13.ListTileControlAffinity | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    minTileHeight?: number | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    internalAddSemanticForOnTap?: boolean | undefined;
}): SwitchListTile;
export declare namespace _SwitchListTileFactory {
    function adaptive(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        value: boolean;
        onChanged: ((value: boolean) => void) | null;
        activeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeThumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveThumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeThumbImage?: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }> | null | undefined;
        onActiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
        inactiveThumbImage?: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }> | null | undefined;
        onInactiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        thumbIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Icon | null];
        }> | null | undefined;
        materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined;
        dragStartBehavior?: upstream8.DragStartBehavior | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
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
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [DartSet<upstream22.WidgetState>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [DartSet<upstream22.WidgetState>];
        }>) | null | undefined;
        onFocusChange?: ((value: boolean) => void) | null | undefined;
        autofocus?: boolean | undefined;
        applyCupertinoTheme?: boolean | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        title?: Widget | null | undefined;
        subtitle?: Widget | null | undefined;
        isThreeLine?: boolean | null | undefined;
        dense?: boolean | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        secondary?: Widget | null | undefined;
        selected?: boolean | undefined;
        controlAffinity?: upstream13.ListTileControlAffinity | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        internalAddSemanticForOnTap?: boolean | undefined;
    }): SwitchListTile;
}
export declare const SwitchListTile: typeof _SwitchListTileFactory & _FlaxInstanceType<SwitchListTile> & _FlaxDartType<SwitchListTile, readonly ["class", "flax.material/material#type:SwitchListTile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "onChanged" | "activeColor" | "activeThumbColor" | "activeTrackColor" | "inactiveThumbColor" | "inactiveTrackColor" | "activeThumbImage" | "onActiveThumbImageError" | "inactiveThumbImage" | "onInactiveThumbImageError" | "thumbColor" | "trackColor" | "trackOutlineColor" | "thumbIcon" | "materialTapTargetSize" | "dragStartBehavior" | "mouseCursor" | "overlayColor" | "splashRadius" | "focusNode" | "statesController" | "onFocusChange" | "autofocus" | "tileColor" | "title" | "subtitle" | "secondary" | "isThreeLine" | "dense" | "contentPadding" | "selected" | "controlAffinity" | "shape" | "selectedTileColor" | "visualDensity" | "enableFeedback" | "horizontalTitleGap" | "minVerticalPadding" | "minLeadingWidth" | "minTileHeight" | "hoverColor" | "applyCupertinoTheme" | "internalAddSemanticForOnTap" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/switch_list_tile.dart::SwitchListTile" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
