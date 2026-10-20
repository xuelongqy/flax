import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SegmentedButtonThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SegmentedButtonThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: SegmentedButtonThemeData;
    readonly style: upstream1.ButtonStyle | null;
    readonly selectedIcon: Widget | null;
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
    copyWith(options?: {
        selectedIcon?: Widget | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): SegmentedButtonThemeData;
}
export declare function _SegmentedButtonThemeDataFactory(options?: {
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedIcon?: Widget | null | undefined;
}): SegmentedButtonThemeData;
export interface _SegmentedButtonThemeDataNative extends SegmentedButtonThemeData {
    readonly [_flaxDartTypeValue]: _SegmentedButtonThemeDataNative;
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
    copyWith(options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedIcon?: Widget | null | undefined;
    }): SegmentedButtonThemeData;
    get style(): upstream1.ButtonStyle | null;
    get selectedIcon(): Widget | null;
}
export declare abstract class _SegmentedButtonThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SegmentedButtonThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SegmentedButtonThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SegmentedButtonThemeData", readonly [], false];
    constructor(options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedIcon?: Widget | null | undefined;
    });
}
export declare namespace _SegmentedButtonThemeDataFactory {
    function implement(args: [options?: {
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectedIcon?: Widget | null | undefined;
    }], implementation: {}): SegmentedButtonThemeData;
}
declare const _SegmentedButtonThemeDataBinding: typeof _SegmentedButtonThemeDataFactory & (new (options?: {
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectedIcon?: Widget | null | undefined;
}) => _SegmentedButtonThemeDataNative);
export declare namespace _SegmentedButtonThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/segmented_button_theme.dart::SegmentedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): SegmentedButtonThemeData;
}
export declare const SegmentedButtonThemeData: typeof _SegmentedButtonThemeDataBinding & _FlaxInstanceType<SegmentedButtonThemeData> & _FlaxDartType<SegmentedButtonThemeData, readonly ["class", "flax.core/sdk_material#type:SegmentedButtonThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "selectedIcon" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/segmented_button_theme.dart::SegmentedButtonThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
