import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import type * as upstream2 from '@flax/material-ui/_bindings/material_StyleVariant';
import '@flax/material-ui/_bindings/material_StyleVariant';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElevatedButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/elevated_button_theme.dart::ElevatedButtonThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ElevatedButtonThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ElevatedButtonThemeData;
    readonly style: upstream1.ButtonStyle | null;
    readonly variant: upstream2.StyleVariant | null;
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
export declare function _ElevatedButtonThemeDataFactory(options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    variant?: upstream2.StyleVariant | null | undefined;
}): ElevatedButtonThemeData;
export interface _ElevatedButtonThemeDataNative extends ElevatedButtonThemeData {
    readonly [_flaxDartTypeValue]: _ElevatedButtonThemeDataNative;
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
    get style(): upstream1.ButtonStyle | null;
    get variant(): upstream2.StyleVariant | null;
}
export declare abstract class _ElevatedButtonThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElevatedButtonThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ElevatedButtonThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ElevatedButtonThemeData", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        variant?: upstream2.StyleVariant | null | undefined;
    });
}
export declare namespace _ElevatedButtonThemeDataFactory {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        variant?: upstream2.StyleVariant | null | undefined;
    }], implementation: {}): ElevatedButtonThemeData;
}
declare const _ElevatedButtonThemeDataBinding: typeof _ElevatedButtonThemeDataFactory & (new (options?: {
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    variant?: upstream2.StyleVariant | null | undefined;
}) => _ElevatedButtonThemeDataNative);
export declare namespace _ElevatedButtonThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/elevated_button_theme.dart::ElevatedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/elevated_button_theme.dart::ElevatedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ElevatedButtonThemeData | null;
}
export declare const ElevatedButtonThemeData: typeof _ElevatedButtonThemeDataBinding & _FlaxInstanceType<ElevatedButtonThemeData> & _FlaxDartType<ElevatedButtonThemeData, readonly ["class", "flax.material/material#type:ElevatedButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "variant" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:material_ui/src/elevated_button_theme.dart::ElevatedButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
