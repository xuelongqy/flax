import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/material-ui/_bindings/material_MenuStyle';
import '@flax/material-ui/_bindings/material_MenuStyle';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MenuThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: MenuThemeData;
    readonly style: upstream1.MenuStyle | null;
    readonly submenuIcon: upstream2.WidgetStateProperty<Widget | null> | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _MenuThemeDataFactory(options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    submenuIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [Widget | null];
    }> | null | undefined;
}): MenuThemeData;
export interface _MenuThemeDataNative extends MenuThemeData {
    readonly [_flaxDartTypeValue]: _MenuThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get style(): upstream1.MenuStyle | null;
    get submenuIcon(): upstream2.WidgetStateProperty<Widget | null> | null;
}
export declare abstract class _MenuThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MenuThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MenuThemeData", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        submenuIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [Widget | null];
        }> | null | undefined;
    });
}
export declare namespace _MenuThemeDataFactory {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        submenuIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [Widget | null];
        }> | null | undefined;
    }], implementation: {}): MenuThemeData;
}
declare const _MenuThemeDataBinding: typeof _MenuThemeDataFactory & (new (options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    submenuIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [Widget | null];
    }> | null | undefined;
}) => _MenuThemeDataNative);
export declare namespace _MenuThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): MenuThemeData | null;
}
export declare const MenuThemeData: typeof _MenuThemeDataBinding & _FlaxInstanceType<MenuThemeData> & _FlaxDartType<MenuThemeData, readonly ["class", "flax.material/material#type:MenuThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "submenuIcon" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:material_ui/src/menu_theme.dart::MenuThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
