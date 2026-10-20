import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream10 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream11 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream13 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream15 from '@flax/material-ui/_bindings/material_ChipAnimationStyle';
import '@flax/material-ui/_bindings/material_ChipAnimationStyle';
import type * as upstream16 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
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
export interface ChoiceChip extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/choice_chip.dart::ChoiceChip": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::ChipAttributes": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::SelectableChipAttributes": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::CheckmarkableChipAttributes": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::DisabledChipAttributes": readonly [];
}> {
    readonly __ChoiceChip: unique symbol;
    readonly [_flaxDartTypeValue]: ChoiceChip;
    readonly avatar: Widget | null;
    readonly label: Widget;
    readonly labelStyle: upstream2.TextStyle | null;
    readonly labelPadding: upstream3.EdgeInsetsGeometry | null;
    readonly onSelected: ((value: boolean) => void) | null;
    readonly pressElevation: number | null;
    readonly selected: boolean;
    readonly disabledColor: upstream4.Color | null;
    readonly selectedColor: upstream4.Color | null;
    readonly tooltip: string | null;
    readonly side: upstream5.BorderSide | null;
    readonly shape: upstream6.OutlinedBorder | null;
    readonly clipBehavior: upstream7.Clip;
    readonly focusNode: upstream8.FocusNode | null;
    readonly autofocus: boolean;
    readonly color: upstream9.WidgetStateProperty<upstream4.Color | null> | null;
    readonly backgroundColor: upstream4.Color | null;
    readonly padding: upstream3.EdgeInsetsGeometry | null;
    readonly visualDensity: upstream10.VisualDensity | null;
    readonly materialTapTargetSize: upstream11.MaterialTapTargetSize | null;
    readonly elevation: number | null;
    readonly shadowColor: upstream4.Color | null;
    readonly surfaceTintColor: upstream4.Color | null;
    readonly selectedShadowColor: upstream4.Color | null;
    readonly showCheckmark: boolean | null;
    readonly checkmarkColor: upstream4.Color | null;
    readonly avatarBorder: upstream13.ShapeBorder;
    readonly iconTheme: upstream12.IconThemeData | null;
    readonly avatarBoxConstraints: upstream14.BoxConstraints | null;
    readonly chipAnimationStyle: upstream15.ChipAnimationStyle | null;
    readonly mouseCursor: upstream16.MouseCursor | null;
    readonly isEnabled: boolean;
    readonly key: upstream1.Key | null;
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
export declare function _ChoiceChipFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    avatar?: Widget | null | undefined;
    label: Widget;
    labelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    labelPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    onSelected?: ((value: boolean) => void) | null | undefined;
    pressElevation?: number | null | undefined;
    selected: boolean;
    selectedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    disabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    tooltip?: string | null | undefined;
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    shape?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    clipBehavior?: upstream7.Clip | undefined;
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
    color?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Color | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    materialTapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedShadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    showCheckmark?: boolean | null | undefined;
    checkmarkColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    avatarBorder?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | undefined;
    avatarBoxConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    chipAnimationStyle?: Readonly<{
        "__flaxBound:package:material_ui/src/chip.dart::ChipAnimationStyle": readonly [];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): ChoiceChip;
export declare namespace _ChoiceChipFactory {
    function elevated(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        avatar?: Widget | null | undefined;
        label: Widget;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        labelPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        onSelected?: ((value: boolean) => void) | null | undefined;
        pressElevation?: number | null | undefined;
        selected: boolean;
        selectedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tooltip?: string | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        clipBehavior?: upstream7.Clip | undefined;
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
        color?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Color | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        materialTapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
        elevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedShadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        showCheckmark?: boolean | null | undefined;
        checkmarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        avatarBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | undefined;
        avatarBoxConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        chipAnimationStyle?: Readonly<{
            "__flaxBound:package:material_ui/src/chip.dart::ChipAnimationStyle": readonly [];
        }> | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): ChoiceChip;
}
export declare const ChoiceChip: typeof _ChoiceChipFactory & _FlaxInstanceType<ChoiceChip> & _FlaxDartType<ChoiceChip, readonly ["class", "flax.material/material#type:ChoiceChip", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "avatar" | "label" | "labelStyle" | "labelPadding" | "onSelected" | "pressElevation" | "selected" | "disabledColor" | "selectedColor" | "tooltip" | "side" | "shape" | "clipBehavior" | "focusNode" | "autofocus" | "color" | "backgroundColor" | "padding" | "visualDensity" | "materialTapTargetSize" | "elevation" | "shadowColor" | "surfaceTintColor" | "selectedShadowColor" | "showCheckmark" | "checkmarkColor" | "avatarBorder" | "iconTheme" | "avatarBoxConstraints" | "chipAnimationStyle" | "mouseCursor" | "isEnabled" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/choice_chip.dart::ChoiceChip" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:material_ui/src/chip.dart::ChipAttributes" | "__flaxBound:package:material_ui/src/chip.dart::SelectableChipAttributes" | "__flaxBound:package:material_ui/src/chip.dart::CheckmarkableChipAttributes" | "__flaxBound:package:material_ui/src/chip.dart::DisabledChipAttributes";
export {};
