import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DividerThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DividerThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: DividerThemeData;
    readonly color: upstream1.Color | null;
    readonly space: number | null;
    readonly thickness: number | null;
    readonly indent: number | null;
    readonly endIndent: number | null;
    readonly radius: upstream2.BorderRadiusGeometry | null;
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
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        endIndent?: number | null | undefined;
        indent?: number | null | undefined;
        radius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
        space?: number | null | undefined;
        thickness?: number | null | undefined;
    }): DividerThemeData;
}
export declare function _DividerThemeDataFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    space?: number | null | undefined;
    thickness?: number | null | undefined;
    indent?: number | null | undefined;
    endIndent?: number | null | undefined;
    radius?: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null | undefined;
}): DividerThemeData;
export interface _DividerThemeDataNative extends DividerThemeData {
    readonly [_flaxDartTypeValue]: _DividerThemeDataNative;
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
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        space?: number | null | undefined;
        thickness?: number | null | undefined;
        indent?: number | null | undefined;
        endIndent?: number | null | undefined;
        radius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
    }): DividerThemeData;
    get color(): upstream1.Color | null;
    get space(): number | null;
    get thickness(): number | null;
    get indent(): number | null;
    get endIndent(): number | null;
    get radius(): upstream2.BorderRadiusGeometry | null;
}
export declare abstract class _DividerThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DividerThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DividerThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        space?: number | null | undefined;
        thickness?: number | null | undefined;
        indent?: number | null | undefined;
        endIndent?: number | null | undefined;
        radius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _DividerThemeDataFactory {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        space?: number | null | undefined;
        thickness?: number | null | undefined;
        indent?: number | null | undefined;
        endIndent?: number | null | undefined;
        radius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): DividerThemeData;
}
declare const _DividerThemeDataBinding: typeof _DividerThemeDataFactory & (new (options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    space?: number | null | undefined;
    thickness?: number | null | undefined;
    indent?: number | null | undefined;
    endIndent?: number | null | undefined;
    radius?: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null | undefined;
}) => _DividerThemeDataNative);
export declare namespace _DividerThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): DividerThemeData;
}
export declare const DividerThemeData: typeof _DividerThemeDataBinding & _FlaxInstanceType<DividerThemeData> & _FlaxDartType<DividerThemeData, readonly ["class", "flax.core/sdk_material#type:DividerThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "space" | "thickness" | "indent" | "endIndent" | "radius" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/divider_theme.dart::DividerThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
