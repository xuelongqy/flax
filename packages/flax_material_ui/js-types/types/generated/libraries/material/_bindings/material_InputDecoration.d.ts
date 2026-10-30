import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/material-ui/_bindings/material_FloatingLabelBehavior';
import '@flax/material-ui/_bindings/material_FloatingLabelBehavior';
import type * as upstream5 from '@flax/material-ui/_bindings/material_FloatingLabelAlignment';
import '@flax/material-ui/_bindings/material_FloatingLabelAlignment';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream8 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream9 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsService';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InputDecoration extends Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [];
}> {
    readonly __InputDecoration: unique symbol;
    readonly [_flaxDartTypeValue]: InputDecoration;
    readonly icon: Widget | null;
    readonly iconColor: upstream0.Color | null;
    readonly label: Widget | null;
    readonly labelText: string | null;
    readonly labelStyle: upstream1.TextStyle | null;
    readonly floatingLabelStyle: upstream1.TextStyle | null;
    readonly labelTextDirection: upstream2.TextDirection | null;
    readonly helper: Widget | null;
    readonly helperText: string | null;
    readonly helperStyle: upstream1.TextStyle | null;
    readonly helperMaxLines: number | null;
    readonly hintText: string | null;
    readonly hint: Widget | null;
    readonly hintStyle: upstream1.TextStyle | null;
    readonly hintTextDirection: upstream2.TextDirection | null;
    readonly hintMaxLines: number | null;
    readonly hintFadeDuration: upstream3.Duration | null;
    readonly maintainHintHeight: boolean;
    readonly maintainHintSize: boolean;
    readonly maintainLabelSize: boolean;
    readonly error: Widget | null;
    readonly errorText: string | null;
    readonly errorStyle: upstream1.TextStyle | null;
    readonly errorMaxLines: number | null;
    readonly floatingLabelBehavior: upstream4.FloatingLabelBehavior | null;
    readonly floatingLabelAlignment: upstream5.FloatingLabelAlignment | null;
    readonly isDense: boolean | null;
    readonly contentPadding: upstream6.EdgeInsetsGeometry | null;
    readonly isCollapsed: boolean | null;
    readonly prefixIcon: Widget | null;
    readonly prefixIconConstraints: upstream7.BoxConstraints | null;
    readonly prefix: Widget | null;
    readonly prefixText: string | null;
    readonly prefixStyle: upstream1.TextStyle | null;
    readonly prefixIconColor: upstream0.Color | null;
    readonly suffixIcon: Widget | null;
    readonly suffix: Widget | null;
    readonly suffixText: string | null;
    readonly suffixStyle: upstream1.TextStyle | null;
    readonly suffixIconColor: upstream0.Color | null;
    readonly suffixIconConstraints: upstream7.BoxConstraints | null;
    readonly counterText: string | null;
    readonly counter: Widget | null;
    readonly counterStyle: upstream1.TextStyle | null;
    readonly filled: boolean | null;
    readonly fillColor: upstream0.Color | null;
    readonly focusColor: upstream0.Color | null;
    readonly hoverColor: upstream0.Color | null;
    readonly errorBorder: upstream8.InputBorder | null;
    readonly focusedBorder: upstream8.InputBorder | null;
    readonly focusedErrorBorder: upstream8.InputBorder | null;
    readonly disabledBorder: upstream8.InputBorder | null;
    readonly enabledBorder: upstream8.InputBorder | null;
    readonly border: upstream8.InputBorder | null;
    readonly enabled: boolean;
    readonly semanticCounterText: string | null;
    readonly alignLabelWithHint: boolean | null;
    readonly constraints: upstream7.BoxConstraints | null;
    readonly visualDensity: upstream9.VisualDensity | null;
    readonly supportingTextPadding: upstream6.EdgeInsetsGeometry | null;
    copyWith(options?: {
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
        counter?: Widget | null | undefined;
        counterStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        counterText?: string | null | undefined;
        disabledBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabled?: boolean | null | undefined;
        enabledBorder?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        error?: Widget | null | undefined;
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
        errorText?: string | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        filled?: boolean | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
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
        helper?: Widget | null | undefined;
        helperMaxLines?: number | null | undefined;
        helperStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        helperText?: string | null | undefined;
        hint?: Widget | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hintText?: string | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        icon?: Widget | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        isCollapsed?: boolean | null | undefined;
        isDense?: boolean | null | undefined;
        label?: Widget | null | undefined;
        labelStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        labelText?: string | null | undefined;
        labelTextDirection?: upstream2.TextDirection | null | undefined;
        maintainHintHeight?: boolean | null | undefined;
        maintainHintSize?: boolean | null | undefined;
        maintainLabelSize?: boolean | null | undefined;
        prefix?: Widget | null | undefined;
        prefixIcon?: Widget | null | undefined;
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
        prefixText?: string | null | undefined;
        semanticCounterText?: string | null | undefined;
        semanticsService?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics_service.dart::SemanticsService": readonly [];
        }> | null | undefined;
        suffix?: Widget | null | undefined;
        suffixIcon?: Widget | null | undefined;
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
        suffixText?: string | null | undefined;
        supportingTextPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): InputDecoration;
    applyDefaults(inputDecorationTheme: {}): InputDecoration;
    toString(): string;
}
export declare function _InputDecorationFactory(options?: {
    icon?: Widget | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    label?: Widget | null | undefined;
    labelText?: string | null | undefined;
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
    labelTextDirection?: upstream2.TextDirection | null | undefined;
    helper?: Widget | null | undefined;
    helperText?: string | null | undefined;
    helperStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    helperMaxLines?: number | null | undefined;
    hintText?: string | null | undefined;
    hint?: Widget | null | undefined;
    hintStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    hintTextDirection?: upstream2.TextDirection | null | undefined;
    hintMaxLines?: number | null | undefined;
    hintFadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) | null | undefined;
    maintainHintHeight?: boolean | undefined;
    maintainHintSize?: boolean | undefined;
    maintainLabelSize?: boolean | undefined;
    error?: Widget | null | undefined;
    errorText?: string | null | undefined;
    errorStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    errorMaxLines?: number | null | undefined;
    floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
    floatingLabelAlignment?: Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
    }> | null | undefined;
    isCollapsed?: boolean | null | undefined;
    isDense?: boolean | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    prefixIcon?: Widget | null | undefined;
    prefixIconConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    prefix?: Widget | null | undefined;
    prefixText?: string | null | undefined;
    prefixStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    prefixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    suffixIcon?: Widget | null | undefined;
    suffix?: Widget | null | undefined;
    suffixText?: string | null | undefined;
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
    counter?: Widget | null | undefined;
    counterText?: string | null | undefined;
    counterStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    filled?: boolean | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
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
    enabled?: boolean | undefined;
    semanticCounterText?: string | null | undefined;
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
    supportingTextPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): InputDecoration;
export declare namespace _InputDecorationFactory {
    function collapsed(options: {
        hintText: string | null;
        floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hint?: Widget | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        maintainHintHeight?: boolean | undefined;
        maintainHintSize?: boolean | undefined;
        maintainLabelSize?: boolean | undefined;
        filled?: boolean | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        hoverColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabled?: boolean | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
    }): InputDecoration;
}
export interface _InputDecorationNative extends InputDecoration {
    readonly [_flaxDartTypeValue]: _InputDecorationNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            icon?: Widget | null | undefined;
            iconColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            label?: Widget | null | undefined;
            labelText?: string | null | undefined;
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
            labelTextDirection?: upstream2.TextDirection | null | undefined;
            helper?: Widget | null | undefined;
            helperText?: string | null | undefined;
            helperStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            helperMaxLines?: number | null | undefined;
            hintText?: string | null | undefined;
            hint?: Widget | null | undefined;
            hintStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            hintTextDirection?: upstream2.TextDirection | null | undefined;
            hintMaxLines?: number | null | undefined;
            hintFadeDuration?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
            }>) | null | undefined;
            maintainHintHeight?: boolean | undefined;
            maintainHintSize?: boolean | undefined;
            maintainLabelSize?: boolean | undefined;
            error?: Widget | null | undefined;
            errorText?: string | null | undefined;
            errorStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            errorMaxLines?: number | null | undefined;
            floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
            floatingLabelAlignment?: Readonly<{
                "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
            }> | null | undefined;
            isCollapsed?: boolean | null | undefined;
            isDense?: boolean | null | undefined;
            contentPadding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            prefixIcon?: Widget | null | undefined;
            prefixIconConstraints?: (Readonly<{
                "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
            }>) | null | undefined;
            prefix?: Widget | null | undefined;
            prefixText?: string | null | undefined;
            prefixStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            prefixIconColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            suffixIcon?: Widget | null | undefined;
            suffix?: Widget | null | undefined;
            suffixText?: string | null | undefined;
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
            counter?: Widget | null | undefined;
            counterText?: string | null | undefined;
            counterStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            filled?: boolean | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
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
            enabled?: boolean | undefined;
            semanticCounterText?: string | null | undefined;
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
            supportingTextPadding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
        }) => void;
        "collapsed": (options: {
            hintText: string | null;
            floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
            floatingLabelAlignment?: Readonly<{
                "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
            }> | null | undefined;
            hintStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            hint?: Widget | null | undefined;
            hintTextDirection?: upstream2.TextDirection | null | undefined;
            hintMaxLines?: number | null | undefined;
            hintFadeDuration?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
            }>) | null | undefined;
            maintainHintHeight?: boolean | undefined;
            maintainHintSize?: boolean | undefined;
            maintainLabelSize?: boolean | undefined;
            filled?: boolean | null | undefined;
            fillColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            focusColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            hoverColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            border?: (Readonly<{
                "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
            }>) | null | undefined;
            enabled?: boolean | undefined;
            constraints?: (Readonly<{
                "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
            }>) | null | undefined;
        }) => void;
    };
    copyWith(options?: {
        icon?: Widget | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        label?: Widget | null | undefined;
        labelText?: string | null | undefined;
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
        labelTextDirection?: upstream2.TextDirection | null | undefined;
        helper?: Widget | null | undefined;
        helperText?: string | null | undefined;
        helperStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        helperMaxLines?: number | null | undefined;
        hintText?: string | null | undefined;
        hint?: Widget | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        hintMaxLines?: number | null | undefined;
        maintainHintHeight?: boolean | null | undefined;
        maintainHintSize?: boolean | null | undefined;
        maintainLabelSize?: boolean | null | undefined;
        error?: Widget | null | undefined;
        errorText?: string | null | undefined;
        errorStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        errorMaxLines?: number | null | undefined;
        floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        isCollapsed?: boolean | null | undefined;
        isDense?: boolean | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        prefixIcon?: Widget | null | undefined;
        prefix?: Widget | null | undefined;
        prefixText?: string | null | undefined;
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
        prefixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        suffixIcon?: Widget | null | undefined;
        suffix?: Widget | null | undefined;
        suffixText?: string | null | undefined;
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
        counter?: Widget | null | undefined;
        counterText?: string | null | undefined;
        counterStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        filled?: boolean | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
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
        enabled?: boolean | null | undefined;
        semanticCounterText?: string | null | undefined;
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
        semanticsService?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics_service.dart::SemanticsService": readonly [];
        }> | null | undefined;
        supportingTextPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): InputDecoration;
    applyDefaults(inputDecorationTheme: {}): InputDecoration;
    toString(): string;
    get icon(): Widget | null;
    get iconColor(): upstream0.Color | null;
    get label(): Widget | null;
    get labelText(): string | null;
    get labelStyle(): upstream1.TextStyle | null;
    get floatingLabelStyle(): upstream1.TextStyle | null;
    get labelTextDirection(): upstream2.TextDirection | null;
    get helper(): Widget | null;
    get helperText(): string | null;
    get helperStyle(): upstream1.TextStyle | null;
    get helperMaxLines(): number | null;
    get hintText(): string | null;
    get hint(): Widget | null;
    get hintStyle(): upstream1.TextStyle | null;
    get hintTextDirection(): upstream2.TextDirection | null;
    get hintMaxLines(): number | null;
    get hintFadeDuration(): upstream3.Duration | null;
    get maintainHintHeight(): boolean;
    get maintainHintSize(): boolean;
    get maintainLabelSize(): boolean;
    get error(): Widget | null;
    get errorText(): string | null;
    get errorStyle(): upstream1.TextStyle | null;
    get errorMaxLines(): number | null;
    get floatingLabelBehavior(): upstream4.FloatingLabelBehavior | null;
    get floatingLabelAlignment(): upstream5.FloatingLabelAlignment | null;
    get isDense(): boolean | null;
    get contentPadding(): upstream6.EdgeInsetsGeometry | null;
    get isCollapsed(): boolean | null;
    get prefixIcon(): Widget | null;
    get prefixIconConstraints(): upstream7.BoxConstraints | null;
    get prefix(): Widget | null;
    get prefixText(): string | null;
    get prefixStyle(): upstream1.TextStyle | null;
    get prefixIconColor(): upstream0.Color | null;
    get suffixIcon(): Widget | null;
    get suffix(): Widget | null;
    get suffixText(): string | null;
    get suffixStyle(): upstream1.TextStyle | null;
    get suffixIconColor(): upstream0.Color | null;
    get suffixIconConstraints(): upstream7.BoxConstraints | null;
    get counterText(): string | null;
    get counter(): Widget | null;
    get counterStyle(): upstream1.TextStyle | null;
    get filled(): boolean | null;
    get fillColor(): upstream0.Color | null;
    get focusColor(): upstream0.Color | null;
    get hoverColor(): upstream0.Color | null;
    get errorBorder(): upstream8.InputBorder | null;
    get focusedBorder(): upstream8.InputBorder | null;
    get focusedErrorBorder(): upstream8.InputBorder | null;
    get disabledBorder(): upstream8.InputBorder | null;
    get enabledBorder(): upstream8.InputBorder | null;
    get border(): upstream8.InputBorder | null;
    get enabled(): boolean;
    get semanticCounterText(): string | null;
    get alignLabelWithHint(): boolean | null;
    get constraints(): upstream7.BoxConstraints | null;
    get visualDensity(): upstream9.VisualDensity | null;
    get supportingTextPadding(): upstream6.EdgeInsetsGeometry | null;
}
export declare abstract class _InputDecorationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InputDecoration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InputDecoration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:InputDecoration", readonly [], false];
    constructor(options?: {
        icon?: Widget | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        label?: Widget | null | undefined;
        labelText?: string | null | undefined;
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
        labelTextDirection?: upstream2.TextDirection | null | undefined;
        helper?: Widget | null | undefined;
        helperText?: string | null | undefined;
        helperStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        helperMaxLines?: number | null | undefined;
        hintText?: string | null | undefined;
        hint?: Widget | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        maintainHintHeight?: boolean | undefined;
        maintainHintSize?: boolean | undefined;
        maintainLabelSize?: boolean | undefined;
        error?: Widget | null | undefined;
        errorText?: string | null | undefined;
        errorStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        errorMaxLines?: number | null | undefined;
        floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        isCollapsed?: boolean | null | undefined;
        isDense?: boolean | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        prefixIcon?: Widget | null | undefined;
        prefixIconConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        prefix?: Widget | null | undefined;
        prefixText?: string | null | undefined;
        prefixStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        prefixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        suffixIcon?: Widget | null | undefined;
        suffix?: Widget | null | undefined;
        suffixText?: string | null | undefined;
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
        counter?: Widget | null | undefined;
        counterText?: string | null | undefined;
        counterStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        filled?: boolean | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
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
        enabled?: boolean | undefined;
        semanticCounterText?: string | null | undefined;
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
        supportingTextPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_InputDecorationNative>);
}
export declare namespace _InputDecorationFactory {
    function implement(args: [options?: {
        icon?: Widget | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        label?: Widget | null | undefined;
        labelText?: string | null | undefined;
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
        labelTextDirection?: upstream2.TextDirection | null | undefined;
        helper?: Widget | null | undefined;
        helperText?: string | null | undefined;
        helperStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        helperMaxLines?: number | null | undefined;
        hintText?: string | null | undefined;
        hint?: Widget | null | undefined;
        hintStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintFadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
        }>) | null | undefined;
        maintainHintHeight?: boolean | undefined;
        maintainHintSize?: boolean | undefined;
        maintainLabelSize?: boolean | undefined;
        error?: Widget | null | undefined;
        errorText?: string | null | undefined;
        errorStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        errorMaxLines?: number | null | undefined;
        floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
        floatingLabelAlignment?: Readonly<{
            "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
        }> | null | undefined;
        isCollapsed?: boolean | null | undefined;
        isDense?: boolean | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        prefixIcon?: Widget | null | undefined;
        prefixIconConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        prefix?: Widget | null | undefined;
        prefixText?: string | null | undefined;
        prefixStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        prefixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        suffixIcon?: Widget | null | undefined;
        suffix?: Widget | null | undefined;
        suffixText?: string | null | undefined;
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
        counter?: Widget | null | undefined;
        counterText?: string | null | undefined;
        counterStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        filled?: boolean | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
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
        enabled?: boolean | undefined;
        semanticCounterText?: string | null | undefined;
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
        supportingTextPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): InputDecoration;
}
declare const _InputDecorationBinding: typeof _InputDecorationFactory & (new (options?: {
    icon?: Widget | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    label?: Widget | null | undefined;
    labelText?: string | null | undefined;
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
    labelTextDirection?: upstream2.TextDirection | null | undefined;
    helper?: Widget | null | undefined;
    helperText?: string | null | undefined;
    helperStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    helperMaxLines?: number | null | undefined;
    hintText?: string | null | undefined;
    hint?: Widget | null | undefined;
    hintStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    hintTextDirection?: upstream2.TextDirection | null | undefined;
    hintMaxLines?: number | null | undefined;
    hintFadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>) | null | undefined;
    maintainHintHeight?: boolean | undefined;
    maintainHintSize?: boolean | undefined;
    maintainLabelSize?: boolean | undefined;
    error?: Widget | null | undefined;
    errorText?: string | null | undefined;
    errorStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    errorMaxLines?: number | null | undefined;
    floatingLabelBehavior?: upstream4.FloatingLabelBehavior | null | undefined;
    floatingLabelAlignment?: Readonly<{
        "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
    }> | null | undefined;
    isCollapsed?: boolean | null | undefined;
    isDense?: boolean | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    prefixIcon?: Widget | null | undefined;
    prefixIconConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    prefix?: Widget | null | undefined;
    prefixText?: string | null | undefined;
    prefixStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    prefixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    suffixIcon?: Widget | null | undefined;
    suffix?: Widget | null | undefined;
    suffixText?: string | null | undefined;
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
    counter?: Widget | null | undefined;
    counterText?: string | null | undefined;
    counterStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    filled?: boolean | null | undefined;
    fillColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
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
    enabled?: boolean | undefined;
    semanticCounterText?: string | null | undefined;
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
    supportingTextPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}) => _InputDecorationNative) & (new (call: _FlaxProxySuper<_InputDecorationNative>) => _InputDecorationNative);
export declare const InputDecoration: typeof _InputDecorationBinding & _FlaxInstanceType<InputDecoration> & _FlaxDartType<InputDecoration, readonly ["class", "flax.material/material#type:InputDecoration", readonly [], false]>;
export {};
