import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OutlinedButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __OutlinedButtonThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: OutlinedButtonThemeData;
    readonly style: upstream1.ButtonStyle | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _OutlinedButtonThemeDataFactory(options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): OutlinedButtonThemeData;
export interface _OutlinedButtonThemeDataNative extends OutlinedButtonThemeData {
    readonly [_flaxDartTypeValue]: _OutlinedButtonThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get style(): upstream1.ButtonStyle | null;
}
export declare abstract class _OutlinedButtonThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OutlinedButtonThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OutlinedButtonThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:OutlinedButtonThemeData", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _OutlinedButtonThemeDataFactory {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): OutlinedButtonThemeData;
}
declare const _OutlinedButtonThemeDataBinding: typeof _OutlinedButtonThemeDataFactory & (new (options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _OutlinedButtonThemeDataNative);
export declare namespace _OutlinedButtonThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): OutlinedButtonThemeData | null;
}
export declare const OutlinedButtonThemeData: typeof _OutlinedButtonThemeDataBinding & _FlaxInstanceType<OutlinedButtonThemeData> & _FlaxDartType<OutlinedButtonThemeData, readonly ["class", "flax.material/material#type:OutlinedButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
