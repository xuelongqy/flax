import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TextSelectionThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionThemeData;
    readonly cursorColor: upstream1.Color | null;
    readonly selectionColor: upstream1.Color | null;
    readonly selectionHandleColor: upstream1.Color | null;
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
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): TextSelectionThemeData;
}
export declare function _TextSelectionThemeDataFactory(options?: {
    cursorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHandleColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}): TextSelectionThemeData;
export interface _TextSelectionThemeDataNative extends TextSelectionThemeData {
    readonly [_flaxDartTypeValue]: _TextSelectionThemeDataNative;
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
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): TextSelectionThemeData;
    get cursorColor(): upstream1.Color | null;
    get selectionColor(): upstream1.Color | null;
    get selectionHandleColor(): upstream1.Color | null;
}
export declare abstract class _TextSelectionThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:TextSelectionThemeData", readonly [], false];
    constructor(options?: {
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _TextSelectionThemeDataFactory {
    function implement(args: [options?: {
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }], implementation: {}): TextSelectionThemeData;
}
declare const _TextSelectionThemeDataBinding: typeof _TextSelectionThemeDataFactory & (new (options?: {
    cursorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHandleColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _TextSelectionThemeDataNative);
export declare namespace _TextSelectionThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): TextSelectionThemeData | null;
}
export declare const TextSelectionThemeData: typeof _TextSelectionThemeDataBinding & _FlaxInstanceType<TextSelectionThemeData> & _FlaxDartType<TextSelectionThemeData, readonly ["class", "flax.material/material#type:TextSelectionThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cursorColor" | "selectionColor" | "selectionHandleColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/text_selection_theme.dart::TextSelectionThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
