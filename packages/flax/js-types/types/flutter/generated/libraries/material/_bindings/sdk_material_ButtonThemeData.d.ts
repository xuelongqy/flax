import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ButtonTextTheme';
import '@flax/flutter/material/_bindings/sdk_material_ButtonTextTheme';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_ButtonBarLayoutBehavior';
import '@flax/flutter/material/_bindings/sdk_material_ButtonBarLayoutBehavior';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_ColorScheme';
import '@flax/flutter/material/_bindings/sdk_material_ColorScheme';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_MaterialButton';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonThemeData;
}
export interface ButtonThemeData {
    readonly [_flaxDartTypeValue]: ButtonThemeData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    getBrightness(button: upstream14.MaterialButton): upstream13.Brightness;
    getTextTheme(button: upstream14.MaterialButton): upstream1.ButtonTextTheme;
    getDisabledTextColor(button: upstream14.MaterialButton): upstream5.Color;
    getDisabledFillColor(button: upstream14.MaterialButton): upstream5.Color;
    getFillColor(button: upstream14.MaterialButton): upstream5.Color | null;
    getTextColor(button: upstream14.MaterialButton): upstream5.Color;
    getSplashColor(button: upstream14.MaterialButton): upstream5.Color;
    getFocusColor(button: upstream14.MaterialButton): upstream5.Color;
    getHoverColor(button: upstream14.MaterialButton): upstream5.Color;
    getHighlightColor(button: upstream14.MaterialButton): upstream5.Color;
    getElevation(button: upstream14.MaterialButton): number;
    getFocusElevation(button: upstream14.MaterialButton): number;
    getHoverElevation(button: upstream14.MaterialButton): number;
    getHighlightElevation(button: upstream14.MaterialButton): number;
    getDisabledElevation(button: upstream14.MaterialButton): number;
    getPadding(button: upstream14.MaterialButton): upstream2.EdgeInsetsGeometry;
    getShape(button: upstream14.MaterialButton): upstream3.ShapeBorder;
    getAnimationDuration(button: upstream14.MaterialButton): upstream15.Duration;
    getConstraints(button: upstream14.MaterialButton): upstream8.BoxConstraints;
    getMaterialTapTargetSize(button: upstream14.MaterialButton): upstream7.MaterialTapTargetSize;
    copyWith(options?: {
        textTheme?: upstream1.ButtonTextTheme | null | undefined;
        layoutBehavior?: upstream4.ButtonBarLayoutBehavior | null | undefined;
        minWidth?: number | null | undefined;
        height?: number | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        alignedDropdown?: boolean | null | undefined;
        buttonColor?: Readonly<{
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
        colorScheme?: (Readonly<{
            "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined;
    }): ButtonThemeData;
    get minWidth(): number;
    get height(): number;
    get textTheme(): upstream1.ButtonTextTheme;
    get layoutBehavior(): upstream4.ButtonBarLayoutBehavior;
    get constraints(): upstream8.BoxConstraints;
    get padding(): upstream2.EdgeInsetsGeometry;
    get shape(): upstream3.ShapeBorder;
    get alignedDropdown(): boolean;
    get colorScheme(): upstream6.ColorScheme | null;
}
export declare abstract class ButtonThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ButtonThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ButtonThemeData", readonly [], false];
    constructor(options?: {
        textTheme?: upstream1.ButtonTextTheme | undefined;
        minWidth?: number | undefined;
        height?: number | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined;
        alignedDropdown?: boolean | undefined;
        buttonColor?: Readonly<{
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
        colorScheme?: (Readonly<{
            "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined;
    });
}
export declare namespace ButtonThemeData {
    function implement(args: [options?: {
        textTheme?: upstream1.ButtonTextTheme | undefined;
        minWidth?: number | undefined;
        height?: number | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        layoutBehavior?: upstream4.ButtonBarLayoutBehavior | undefined;
        alignedDropdown?: boolean | undefined;
        buttonColor?: Readonly<{
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
        colorScheme?: (Readonly<{
            "__flaxBound:package:flutter/src/material/color_scheme.dart::ColorScheme": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        materialTapTargetSize?: upstream7.MaterialTapTargetSize | null | undefined;
    }], implementation: {}): ButtonThemeData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "minWidth" | "height" | "textTheme" | "layoutBehavior" | "constraints" | "padding" | "shape" | "alignedDropdown" | "colorScheme" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "getBrightness" | "getTextTheme" | "getDisabledTextColor" | "getDisabledFillColor" | "getFillColor" | "getTextColor" | "getSplashColor" | "getFocusColor" | "getHoverColor" | "getHighlightColor" | "getElevation" | "getFocusElevation" | "getHoverElevation" | "getHighlightElevation" | "getDisabledElevation" | "getPadding" | "getShape" | "getAnimationDuration" | "getConstraints" | "getMaterialTapTargetSize" | "copyWith" | "__flaxBound:package:flutter/src/material/button_theme.dart::ButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
