import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_MenuThemeData';
import '@flax/flutter/material/_bindings/sdk_material_MenuThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuBarThemeData extends Omit<upstream0.MenuThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MenuThemeData>, Readonly<{
    "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MenuBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: MenuBarThemeData;
    readonly style: upstream2.MenuStyle | null;
    readonly submenuIcon: upstream3.WidgetStateProperty<Widget | null> | null;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
}
export declare function _MenuBarThemeDataFactory(options?: {
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): MenuBarThemeData;
export interface _MenuBarThemeDataNative extends MenuBarThemeData {
    readonly [_flaxDartTypeValue]: _MenuBarThemeDataNative;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    get style(): upstream2.MenuStyle | null;
    get submenuIcon(): upstream3.WidgetStateProperty<Widget | null> | null;
}
export declare abstract class _MenuBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MenuBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MenuBarThemeData", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _MenuBarThemeDataFactory {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): MenuBarThemeData;
}
declare const _MenuBarThemeDataBinding: typeof _MenuBarThemeDataFactory & (new (options?: {
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _MenuBarThemeDataNative);
export declare namespace _MenuBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): MenuBarThemeData | null;
}
export declare const MenuBarThemeData: typeof _MenuBarThemeDataBinding & _FlaxInstanceType<MenuBarThemeData> & _FlaxDartType<MenuBarThemeData, readonly ["class", "flax.core/sdk_material#type:MenuBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "submenuIcon" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/material/menu_bar_theme.dart::MenuBarThemeData" | "__flaxBound:package:flutter/src/material/menu_theme.dart::MenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
