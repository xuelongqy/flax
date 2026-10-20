import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialBasedCupertinoThemeData extends Omit<upstream0.CupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.NoDefaultCupertinoThemeData, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.CupertinoThemeData | keyof upstream1.NoDefaultCupertinoThemeData>, Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialBasedCupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MaterialBasedCupertinoThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;
    readonly primaryColor: upstream4.Color;
    readonly primaryContrastingColor: upstream4.Color;
    readonly textTheme: upstream5.CupertinoTextThemeData;
    readonly barBackgroundColor: upstream4.Color;
    readonly scaffoldBackgroundColor: upstream4.Color;
    readonly selectionHandleColor: upstream4.Color;
    readonly applyThemeToAll: boolean;
    readonly brightness: upstream6.Brightness;
    noDefault(): upstream1.NoDefaultCupertinoThemeData;
    resolveFrom(context: upstream7.BuildContext): upstream0.CupertinoThemeData;
    copyWith(options?: {
        applyThemeToAll?: boolean | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream6.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): MaterialBasedCupertinoThemeData;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
}
export declare function _MaterialBasedCupertinoThemeDataFactory(options: {
    materialTheme: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
}): MaterialBasedCupertinoThemeData;
export interface _MaterialBasedCupertinoThemeDataNative extends MaterialBasedCupertinoThemeData {
    readonly [_flaxDartTypeValue]: _MaterialBasedCupertinoThemeDataNative;
    noDefault(): upstream1.NoDefaultCupertinoThemeData;
    resolveFrom(context: upstream7.BuildContext): upstream0.CupertinoThemeData;
    copyWith(options?: {
        brightness?: upstream6.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        applyThemeToAll?: boolean | null | undefined;
    }): MaterialBasedCupertinoThemeData;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    get brightness(): upstream6.Brightness;
    get primaryColor(): upstream4.Color;
    get primaryContrastingColor(): upstream4.Color;
    get scaffoldBackgroundColor(): upstream4.Color;
    get textTheme(): upstream5.CupertinoTextThemeData;
    get barBackgroundColor(): upstream4.Color;
    get selectionHandleColor(): upstream4.Color;
    get applyThemeToAll(): boolean;
}
export declare abstract class _MaterialBasedCupertinoThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialBasedCupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialBasedCupertinoThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", readonly [], false];
    constructor(options: {
        materialTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    });
}
export declare namespace _MaterialBasedCupertinoThemeDataFactory {
    function implement(args: [options: {
        materialTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }], implementation: {}): MaterialBasedCupertinoThemeData;
}
declare const _MaterialBasedCupertinoThemeDataBinding: typeof _MaterialBasedCupertinoThemeDataFactory & (new (options: {
    materialTheme: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
}) => _MaterialBasedCupertinoThemeDataNative);
export declare const MaterialBasedCupertinoThemeData: typeof _MaterialBasedCupertinoThemeDataBinding & _FlaxInstanceType<MaterialBasedCupertinoThemeData> & _FlaxDartType<MaterialBasedCupertinoThemeData, readonly ["class", "flax.core/sdk_material#type:MaterialBasedCupertinoThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "brightness" | "noDefault" | "resolveFrom" | "copyWith" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/material/theme_data.dart::MaterialBasedCupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
