import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/material-ui/_bindings/material_FloatingLabelBehavior';
import '@flax/material-ui/_bindings/material_FloatingLabelBehavior';
import type * as upstream7 from '@flax/material-ui/_bindings/material_FloatingLabelAlignment';
import '@flax/material-ui/_bindings/material_FloatingLabelAlignment';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream11 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream12 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream13 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream14 from '@flax/material-ui/_bindings/material_InputDecorationThemeData';
import '@flax/material-ui/_bindings/material_InputDecorationThemeData';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InputDecorationTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecorationTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __InputDecorationTheme: unique symbol;
    readonly [_flaxDartTypeValue]: InputDecorationTheme;
    readonly labelStyle: upstream4.TextStyle | null;
    readonly floatingLabelStyle: upstream4.TextStyle | null;
    readonly helperStyle: upstream4.TextStyle | null;
    readonly helperMaxLines: number | null;
    readonly hintStyle: upstream4.TextStyle | null;
    readonly hintFadeDuration: upstream5.Duration | null;
    readonly hintMaxLines: number | null;
    readonly errorStyle: upstream4.TextStyle | null;
    readonly errorMaxLines: number | null;
    readonly floatingLabelBehavior: upstream6.FloatingLabelBehavior;
    readonly floatingLabelAlignment: upstream7.FloatingLabelAlignment;
    readonly isDense: boolean;
    readonly contentPadding: upstream8.EdgeInsetsGeometry | null;
    readonly isCollapsed: boolean;
    readonly iconColor: upstream9.Color | null;
    readonly prefixStyle: upstream4.TextStyle | null;
    readonly prefixIconColor: upstream9.Color | null;
    readonly prefixIconConstraints: upstream10.BoxConstraints | null;
    readonly suffixStyle: upstream4.TextStyle | null;
    readonly suffixIconColor: upstream9.Color | null;
    readonly suffixIconConstraints: upstream10.BoxConstraints | null;
    readonly counterStyle: upstream4.TextStyle | null;
    readonly filled: boolean;
    readonly fillColor: upstream9.Color | null;
    readonly activeIndicatorBorder: upstream11.BorderSide | null;
    readonly outlineBorder: upstream11.BorderSide | null;
    readonly focusColor: upstream9.Color | null;
    readonly hoverColor: upstream9.Color | null;
    readonly errorBorder: upstream12.InputBorder | null;
    readonly focusedBorder: upstream12.InputBorder | null;
    readonly focusedErrorBorder: upstream12.InputBorder | null;
    readonly disabledBorder: upstream12.InputBorder | null;
    readonly enabledBorder: upstream12.InputBorder | null;
    readonly border: upstream12.InputBorder | null;
    readonly alignLabelWithHint: boolean;
    readonly constraints: upstream10.BoxConstraints | null;
    readonly visualDensity: upstream13.VisualDensity | null;
    readonly data: upstream14.InputDecorationThemeData;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    copyWith(options?: {
        activeIndicatorBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        alignLabelWithHint?: boolean | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        counterStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        disabledBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabledBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        errorBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        errorMaxLines?: number | null | undefined;
        errorStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        filled?: boolean | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        floatingLabelBehavior?: upstream6.FloatingLabelBehavior | null | undefined;
        floatingLabelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        focusedBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedErrorBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        helperMaxLines?: number | null | undefined;
        helperStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
        }>) | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        isCollapsed?: boolean | null | undefined;
        isDense?: boolean | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        outlineBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        prefixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        prefixIconConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        prefixStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        suffixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        suffixIconConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        suffixStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): InputDecorationTheme;
    merge(other: InputDecorationTheme | null): InputDecorationTheme;
    updateShouldNotify(oldWidget: InputDecorationTheme): boolean;
    wrap(context: upstream15.BuildContext, child: Widget): Widget;
    createElement(): upstream16.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream20.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
}
export declare function _InputDecorationThemeFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    labelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    floatingLabelStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    helperStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    helperMaxLines?: number | null | undefined;
    hintStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    hintFadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>) | null | undefined;
    hintMaxLines?: number | null | undefined;
    errorStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    errorMaxLines?: number | null | undefined;
    floatingLabelBehavior?: upstream6.FloatingLabelBehavior | null | undefined;
    floatingLabelAlignment?: Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
    }> | null | undefined;
    isDense?: boolean | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    isCollapsed?: boolean | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    prefixStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    prefixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    prefixIconConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    suffixStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    suffixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    suffixIconConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    counterStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    filled?: boolean | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeIndicatorBorder?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    outlineBorder?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    hoverColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    errorBorder?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    focusedBorder?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    focusedErrorBorder?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    disabledBorder?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    enabledBorder?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    border?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    alignLabelWithHint?: boolean | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    data?: (Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecorationThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    child?: Widget | null | undefined;
}): InputDecorationTheme;
export declare namespace _InputDecorationThemeFactory {
    function of(context: upstream15.BuildContext): upstream14.InputDecorationThemeData;
}
export declare const InputDecorationTheme: typeof _InputDecorationThemeFactory & _FlaxInstanceType<InputDecorationTheme> & _FlaxDartType<InputDecorationTheme, readonly ["class", "flax.material/material#type:InputDecorationTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "labelStyle" | "floatingLabelStyle" | "helperStyle" | "helperMaxLines" | "hintStyle" | "hintFadeDuration" | "hintMaxLines" | "errorStyle" | "errorMaxLines" | "floatingLabelBehavior" | "floatingLabelAlignment" | "isDense" | "contentPadding" | "isCollapsed" | "iconColor" | "prefixStyle" | "prefixIconColor" | "prefixIconConstraints" | "suffixStyle" | "suffixIconColor" | "suffixIconConstraints" | "counterStyle" | "filled" | "fillColor" | "activeIndicatorBorder" | "outlineBorder" | "focusColor" | "hoverColor" | "errorBorder" | "focusedBorder" | "focusedErrorBorder" | "disabledBorder" | "enabledBorder" | "border" | "alignLabelWithHint" | "constraints" | "visualDensity" | "data" | "child" | "key" | "copyWith" | "merge" | "updateShouldNotify" | "wrap" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecorationTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
