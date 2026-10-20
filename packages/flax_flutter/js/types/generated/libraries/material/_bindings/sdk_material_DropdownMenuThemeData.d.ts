import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DropdownMenuThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DropdownMenuThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenuThemeData;
    readonly textStyle: upstream1.TextStyle | null;
    readonly inputDecorationTheme: upstream4.InputDecorationThemeData | null;
    readonly menuStyle: upstream2.MenuStyle | null;
    readonly disabledColor: upstream3.Color | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        menuStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): DropdownMenuThemeData;
}
export declare function _DropdownMenuThemeDataFactory(options?: {
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    menuStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    disabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): DropdownMenuThemeData;
export interface _DropdownMenuThemeDataNative extends DropdownMenuThemeData {
    readonly [_flaxDartTypeValue]: _DropdownMenuThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        menuStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): DropdownMenuThemeData;
    get textStyle(): upstream1.TextStyle | null;
    get inputDecorationTheme(): upstream4.InputDecorationThemeData | null;
    get menuStyle(): upstream2.MenuStyle | null;
    get disabledColor(): upstream3.Color | null;
}
export declare abstract class _DropdownMenuThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DropdownMenuThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DropdownMenuThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DropdownMenuThemeData", readonly [], false];
    constructor(options?: {
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        menuStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _DropdownMenuThemeDataFactory {
    function implement(args: [options?: {
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        inputDecorationTheme?: unknown | null | undefined;
        menuStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        disabledColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }], implementation: {}): DropdownMenuThemeData;
}
declare const _DropdownMenuThemeDataBinding: typeof _DropdownMenuThemeDataFactory & (new (options?: {
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    menuStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    disabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _DropdownMenuThemeDataNative);
export declare namespace _DropdownMenuThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): DropdownMenuThemeData;
}
export declare const DropdownMenuThemeData: typeof _DropdownMenuThemeDataBinding & _FlaxInstanceType<DropdownMenuThemeData> & _FlaxDartType<DropdownMenuThemeData, readonly ["class", "flax.core/sdk_material#type:DropdownMenuThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textStyle" | "inputDecorationTheme" | "menuStyle" | "disabledColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/dropdown_menu_theme.dart::DropdownMenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
