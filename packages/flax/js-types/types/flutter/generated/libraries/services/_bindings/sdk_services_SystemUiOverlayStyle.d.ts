import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemUiOverlayStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SystemUiOverlayStyle: unique symbol;
    readonly [_flaxDartTypeValue]: SystemUiOverlayStyle;
    readonly systemNavigationBarColor: upstream1.Color | null;
    readonly systemNavigationBarDividerColor: upstream1.Color | null;
    readonly systemNavigationBarIconBrightness: upstream2.Brightness | null;
    readonly systemNavigationBarContrastEnforced: boolean | null;
    readonly statusBarColor: upstream1.Color | null;
    readonly statusBarBrightness: upstream2.Brightness | null;
    readonly statusBarIconBrightness: upstream2.Brightness | null;
    readonly systemStatusBarContrastEnforced: boolean | null;
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
        statusBarBrightness?: upstream2.Brightness | null | undefined;
        statusBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        statusBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemNavigationBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarContrastEnforced?: boolean | null | undefined;
        systemNavigationBarDividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemStatusBarContrastEnforced?: boolean | null | undefined;
    }): SystemUiOverlayStyle;
}
export declare function _SystemUiOverlayStyleFactory(options?: {
    systemNavigationBarColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    systemNavigationBarDividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
    systemNavigationBarContrastEnforced?: boolean | null | undefined;
    statusBarColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    statusBarBrightness?: upstream2.Brightness | null | undefined;
    statusBarIconBrightness?: upstream2.Brightness | null | undefined;
    systemStatusBarContrastEnforced?: boolean | null | undefined;
}): SystemUiOverlayStyle;
export interface _SystemUiOverlayStyleNative extends SystemUiOverlayStyle {
    readonly [_flaxDartTypeValue]: _SystemUiOverlayStyleNative;
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
        systemNavigationBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarDividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarContrastEnforced?: boolean | null | undefined;
        statusBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        statusBarBrightness?: upstream2.Brightness | null | undefined;
        statusBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemStatusBarContrastEnforced?: boolean | null | undefined;
        systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
    }): SystemUiOverlayStyle;
    get systemNavigationBarColor(): upstream1.Color | null;
    get systemNavigationBarDividerColor(): upstream1.Color | null;
    get systemNavigationBarIconBrightness(): upstream2.Brightness | null;
    get systemNavigationBarContrastEnforced(): boolean | null;
    get statusBarColor(): upstream1.Color | null;
    get statusBarBrightness(): upstream2.Brightness | null;
    get statusBarIconBrightness(): upstream2.Brightness | null;
    get systemStatusBarContrastEnforced(): boolean | null;
}
export declare abstract class _SystemUiOverlayStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SystemUiOverlayStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SystemUiOverlayStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SystemUiOverlayStyle", readonly [], false];
    constructor(options?: {
        systemNavigationBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarDividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemNavigationBarContrastEnforced?: boolean | null | undefined;
        statusBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        statusBarBrightness?: upstream2.Brightness | null | undefined;
        statusBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemStatusBarContrastEnforced?: boolean | null | undefined;
    });
}
export declare namespace _SystemUiOverlayStyleFactory {
    function implement(args: [options?: {
        systemNavigationBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarDividerColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemNavigationBarContrastEnforced?: boolean | null | undefined;
        statusBarColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        statusBarBrightness?: upstream2.Brightness | null | undefined;
        statusBarIconBrightness?: upstream2.Brightness | null | undefined;
        systemStatusBarContrastEnforced?: boolean | null | undefined;
    }], implementation: {}): SystemUiOverlayStyle;
}
declare const _SystemUiOverlayStyleBinding: typeof _SystemUiOverlayStyleFactory & (new (options?: {
    systemNavigationBarColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    systemNavigationBarDividerColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    systemNavigationBarIconBrightness?: upstream2.Brightness | null | undefined;
    systemNavigationBarContrastEnforced?: boolean | null | undefined;
    statusBarColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    statusBarBrightness?: upstream2.Brightness | null | undefined;
    statusBarIconBrightness?: upstream2.Brightness | null | undefined;
    systemStatusBarContrastEnforced?: boolean | null | undefined;
}) => _SystemUiOverlayStyleNative);
export declare namespace _SystemUiOverlayStyleFactory {
    const light: SystemUiOverlayStyle;
}
export declare namespace _SystemUiOverlayStyleFactory {
    const dark: SystemUiOverlayStyle;
}
export declare const SystemUiOverlayStyle: typeof _SystemUiOverlayStyleBinding & _FlaxInstanceType<SystemUiOverlayStyle> & _FlaxDartType<SystemUiOverlayStyle, readonly ["class", "flax.core/sdk_services#type:SystemUiOverlayStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "systemNavigationBarColor" | "systemNavigationBarDividerColor" | "systemNavigationBarIconBrightness" | "systemNavigationBarContrastEnforced" | "statusBarColor" | "statusBarBrightness" | "statusBarIconBrightness" | "systemStatusBarContrastEnforced" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
