import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import type * as upstream6 from '@flax/flutter/material/_bindings/material_VisualDensity';
import '@flax/flutter/material/_bindings/material_VisualDensity';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InputDecoration extends Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [];
}> {
    readonly __InputDecoration: unique symbol;
    readonly icon: Widget | null;
    readonly iconColor: upstream0.Color | null;
    readonly label: Widget | null;
    readonly labelText: string | null;
    readonly labelStyle: upstream1.TextStyle | null;
    readonly floatingLabelStyle: upstream1.TextStyle | null;
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
    readonly isDense: boolean | null;
    readonly contentPadding: upstream4.EdgeInsetsGeometry | null;
    readonly isCollapsed: boolean | null;
    readonly prefixIcon: Widget | null;
    readonly prefixIconConstraints: upstream5.BoxConstraints | null;
    readonly prefix: Widget | null;
    readonly prefixText: string | null;
    readonly prefixStyle: upstream1.TextStyle | null;
    readonly prefixIconColor: upstream0.Color | null;
    readonly suffixIcon: Widget | null;
    readonly suffix: Widget | null;
    readonly suffixText: string | null;
    readonly suffixStyle: upstream1.TextStyle | null;
    readonly suffixIconColor: upstream0.Color | null;
    readonly suffixIconConstraints: upstream5.BoxConstraints | null;
    readonly counterText: string | null;
    readonly counter: Widget | null;
    readonly counterStyle: upstream1.TextStyle | null;
    readonly filled: boolean | null;
    readonly fillColor: upstream0.Color | null;
    readonly focusColor: upstream0.Color | null;
    readonly hoverColor: upstream0.Color | null;
    readonly enabled: boolean;
    readonly semanticCounterText: string | null;
    readonly alignLabelWithHint: boolean | null;
    readonly constraints: upstream5.BoxConstraints | null;
    readonly visualDensity: upstream6.VisualDensity | null;
    copyWith(options?: {
        alignLabelWithHint?: boolean | null | undefined;
        constraints?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        counter?: Widget | null | undefined;
        counterStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        counterText?: string | null | undefined;
        enabled?: boolean | null | undefined;
        error?: Widget | null | undefined;
        errorMaxLines?: number | null | undefined;
        errorStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        errorText?: string | null | undefined;
        fillColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        filled?: boolean | null | undefined;
        floatingLabelStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        focusColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        helper?: Widget | null | undefined;
        helperMaxLines?: number | null | undefined;
        helperStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        helperText?: string | null | undefined;
        hint?: Widget | null | undefined;
        hintFadeDuration?: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
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
        labelStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        labelText?: string | null | undefined;
        maintainHintHeight?: boolean | null | undefined;
        maintainHintSize?: boolean | null | undefined;
        maintainLabelSize?: boolean | null | undefined;
        prefix?: Widget | null | undefined;
        prefixIcon?: Widget | null | undefined;
        prefixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        prefixIconConstraints?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null | undefined;
        prefixStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        prefixText?: string | null | undefined;
        semanticCounterText?: string | null | undefined;
        suffix?: Widget | null | undefined;
        suffixIcon?: Widget | null | undefined;
        suffixIconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        suffixIconConstraints?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null | undefined;
        suffixStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        suffixText?: string | null | undefined;
        visualDensity?: Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> | null | undefined;
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
    labelStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    floatingLabelStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    helper?: Widget | null | undefined;
    helperText?: string | null | undefined;
    helperStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    helperMaxLines?: number | null | undefined;
    hintText?: string | null | undefined;
    hint?: Widget | null | undefined;
    hintStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    hintTextDirection?: upstream2.TextDirection | null | undefined;
    hintMaxLines?: number | null | undefined;
    hintFadeDuration?: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> | null | undefined;
    maintainHintHeight?: boolean | undefined;
    maintainHintSize?: boolean | undefined;
    maintainLabelSize?: boolean | undefined;
    error?: Widget | null | undefined;
    errorText?: string | null | undefined;
    errorStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    errorMaxLines?: number | null | undefined;
    isCollapsed?: boolean | null | undefined;
    isDense?: boolean | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    prefixIcon?: Widget | null | undefined;
    prefixIconConstraints?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null | undefined;
    prefix?: Widget | null | undefined;
    prefixText?: string | null | undefined;
    prefixStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    prefixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    suffixIcon?: Widget | null | undefined;
    suffix?: Widget | null | undefined;
    suffixText?: string | null | undefined;
    suffixStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    suffixIconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    suffixIconConstraints?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null | undefined;
    counter?: Widget | null | undefined;
    counterText?: string | null | undefined;
    counterStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
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
    enabled?: boolean | undefined;
    semanticCounterText?: string | null | undefined;
    alignLabelWithHint?: boolean | null | undefined;
    constraints?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null | undefined;
    visualDensity?: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> | null | undefined;
}): InputDecoration;
export declare namespace _InputDecorationFactory {
    function collapsed(options: {
        hintText: string | null;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        hint?: Widget | null | undefined;
        hintTextDirection?: upstream2.TextDirection | null | undefined;
        hintMaxLines?: number | null | undefined;
        hintFadeDuration?: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> | null | undefined;
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
        enabled?: boolean | undefined;
        constraints?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> | null | undefined;
    }): InputDecoration;
}
export declare const InputDecoration: typeof _InputDecorationFactory & _FlaxInstanceType<InputDecoration> & _FlaxDartType<InputDecoration, readonly ["class", "flax.material/material#type:InputDecoration", readonly [], false]>;
