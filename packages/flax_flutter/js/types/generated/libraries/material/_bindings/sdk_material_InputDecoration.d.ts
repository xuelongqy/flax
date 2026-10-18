import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_FloatingLabelBehavior';
import '@flax/flutter/material/_bindings/sdk_material_FloatingLabelBehavior';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_FloatingLabelAlignment';
import '@flax/flutter/material/_bindings/sdk_material_FloatingLabelAlignment';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import '@flax/flutter/material/_bindings/sdk_material_InputBorder';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsService';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InputDecoration extends Readonly<{
    "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
}> {
    readonly __InputDecoration: unique symbol;
    readonly [_flaxDartTypeValue]: InputDecoration;
}
export interface InputDecoration {
    readonly [_flaxDartTypeValue]: InputDecoration;
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
            "__flaxBound:package:flutter/src/material/input_decorator.dart::FloatingLabelAlignment": readonly [];
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
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedErrorBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        disabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
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
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        semanticsService?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics_service.dart::SemanticsService": readonly [];
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
}
export declare abstract class InputDecoration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InputDecoration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InputDecoration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InputDecoration", readonly [], false];
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
            "__flaxBound:package:flutter/src/material/input_decorator.dart::FloatingLabelAlignment": readonly [];
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
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedErrorBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        disabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
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
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace InputDecoration {
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
            "__flaxBound:package:flutter/src/material/input_decorator.dart::FloatingLabelAlignment": readonly [];
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
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        focusedErrorBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        disabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        enabledBorder?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/material/input_border.dart::InputBorder": readonly [];
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
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): InputDecoration;
}
