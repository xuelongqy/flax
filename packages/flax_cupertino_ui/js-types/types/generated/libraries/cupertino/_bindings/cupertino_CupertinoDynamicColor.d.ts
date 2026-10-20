import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorSpace';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoDynamicColor extends Omit<upstream0.Color, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Color>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/colors.dart::CupertinoDynamicColor": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoDynamicColor: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoDynamicColor;
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly colorSpace: upstream2.ColorSpace;
    readonly value: number;
    readonly alpha: number;
    readonly opacity: number;
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly color: upstream0.Color;
    readonly darkColor: upstream0.Color;
    readonly highContrastColor: upstream0.Color;
    readonly darkHighContrastColor: upstream0.Color;
    readonly elevatedColor: upstream0.Color;
    readonly darkElevatedColor: upstream0.Color;
    readonly highContrastElevatedColor: upstream0.Color;
    readonly darkHighContrastElevatedColor: upstream0.Color;
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream2.ColorSpace | null | undefined;
        green?: number | null | undefined;
        red?: number | null | undefined;
    }): upstream0.Color;
    withAlpha(a: number): upstream0.Color;
    withOpacity(opacity: number): upstream0.Color;
    withRed(r: number): upstream0.Color;
    withGreen(g: number): upstream0.Color;
    withBlue(b: number): upstream0.Color;
    computeLuminance(): number;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    resolveFrom(context: upstream3.BuildContext): CupertinoDynamicColor;
}
export declare function _CupertinoDynamicColorFactory(options: {
    debugLabel?: string | null | undefined;
    color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    highContrastColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkHighContrastColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    elevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    highContrastElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkHighContrastElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
}): CupertinoDynamicColor;
export declare namespace _CupertinoDynamicColorFactory {
    function withBrightnessAndContrast(options: {
        debugLabel?: string | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        highContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkHighContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
    }): CupertinoDynamicColor;
}
export declare namespace _CupertinoDynamicColorFactory {
    function withBrightness(options: {
        debugLabel?: string | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
    }): CupertinoDynamicColor;
}
export interface _CupertinoDynamicColorNative extends CupertinoDynamicColor {
    readonly [_flaxDartTypeValue]: _CupertinoDynamicColorNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            debugLabel?: string | null | undefined;
            color: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            highContrastColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkHighContrastColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            elevatedColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkElevatedColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            highContrastElevatedColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkHighContrastElevatedColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
        }) => void;
        "withBrightnessAndContrast": (options: {
            debugLabel?: string | null | undefined;
            color: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            highContrastColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkHighContrastColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
        }) => void;
        "withBrightness": (options: {
            debugLabel?: string | null | undefined;
            color: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
            darkColor: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }>;
        }) => void;
    };
    toARGB32(): number;
    withValues(options?: {
        alpha?: number | null | undefined;
        red?: number | null | undefined;
        green?: number | null | undefined;
        blue?: number | null | undefined;
        colorSpace?: upstream2.ColorSpace | null | undefined;
    }): upstream0.Color;
    withAlpha(a: number): upstream0.Color;
    withOpacity(opacity: number): upstream0.Color;
    withRed(r: number): upstream0.Color;
    withGreen(g: number): upstream0.Color;
    withBlue(b: number): upstream0.Color;
    computeLuminance(): number;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    resolveFrom(context: upstream3.BuildContext): CupertinoDynamicColor;
    get color(): upstream0.Color;
    get darkColor(): upstream0.Color;
    get highContrastColor(): upstream0.Color;
    get darkHighContrastColor(): upstream0.Color;
    get elevatedColor(): upstream0.Color;
    get darkElevatedColor(): upstream0.Color;
    get highContrastElevatedColor(): upstream0.Color;
    get darkHighContrastElevatedColor(): upstream0.Color;
    get value(): number;
    get alpha(): number;
    get blue(): number;
    get green(): number;
    get opacity(): number;
    get red(): number;
    get a(): number;
    get r(): number;
    get g(): number;
    get b(): number;
    get colorSpace(): upstream2.ColorSpace;
}
export declare abstract class _CupertinoDynamicColorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoDynamicColor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoDynamicColor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoDynamicColor", readonly [], false];
    constructor(options: {
        debugLabel?: string | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        highContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkHighContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        elevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        highContrastElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkHighContrastElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
    });
    constructor(call: _FlaxProxySuper<_CupertinoDynamicColorNative>);
}
export declare namespace _CupertinoDynamicColorFactory {
    function implement(args: [options: {
        debugLabel?: string | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        highContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkHighContrastColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        elevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        highContrastElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        darkHighContrastElevatedColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
    }], implementation: {}): CupertinoDynamicColor;
}
declare const _CupertinoDynamicColorBinding: typeof _CupertinoDynamicColorFactory & (new (options: {
    debugLabel?: string | null | undefined;
    color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    highContrastColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkHighContrastColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    elevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    highContrastElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    darkHighContrastElevatedColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
}) => _CupertinoDynamicColorNative) & (new (call: _FlaxProxySuper<_CupertinoDynamicColorNative>) => _CupertinoDynamicColorNative);
export declare namespace _CupertinoDynamicColorFactory {
    function resolve(resolvable: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, context: upstream3.BuildContext): upstream0.Color;
}
export declare namespace _CupertinoDynamicColorFactory {
    function maybeResolve(resolvable: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, context: upstream3.BuildContext): upstream0.Color | null;
}
export declare const CupertinoDynamicColor: typeof _CupertinoDynamicColorBinding & _FlaxInstanceType<CupertinoDynamicColor> & _FlaxDartType<CupertinoDynamicColor, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDynamicColor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "r" | "g" | "b" | "colorSpace" | "value" | "alpha" | "opacity" | "red" | "green" | "blue" | "color" | "darkColor" | "highContrastColor" | "darkHighContrastColor" | "elevatedColor" | "darkElevatedColor" | "highContrastElevatedColor" | "darkHighContrastElevatedColor" | "toARGB32" | "withValues" | "withAlpha" | "withOpacity" | "withRed" | "withGreen" | "withBlue" | "computeLuminance" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolveFrom" | "__flaxBound:package:cupertino_ui/src/colors.dart::CupertinoDynamicColor" | "__flaxBound:dart:ui::Color" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
