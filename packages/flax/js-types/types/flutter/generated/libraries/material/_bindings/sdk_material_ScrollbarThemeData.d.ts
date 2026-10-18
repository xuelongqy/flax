import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollbarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScrollbarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollbarThemeData;
}
export interface ScrollbarThemeData {
    readonly [_flaxDartTypeValue]: ScrollbarThemeData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        thumbVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        thickness?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        trackVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        interactive?: boolean | null | undefined;
        radius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackBorderColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        crossAxisMargin?: number | null | undefined;
        mainAxisMargin?: number | null | undefined;
        minThumbLength?: number | null | undefined;
    }): ScrollbarThemeData;
    get thumbVisibility(): upstream1.WidgetStateProperty<boolean | null> | null;
    get thickness(): upstream1.WidgetStateProperty<number | null> | null;
    get trackVisibility(): upstream1.WidgetStateProperty<boolean | null> | null;
    get interactive(): boolean | null;
    get radius(): upstream2.Radius | null;
    get thumbColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get trackColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get trackBorderColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get crossAxisMargin(): number | null;
    get mainAxisMargin(): number | null;
    get minThumbLength(): number | null;
}
export declare abstract class ScrollbarThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollbarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollbarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ScrollbarThemeData", readonly [], false];
    constructor(options?: {
        thumbVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        thickness?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        trackVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        radius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackBorderColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        crossAxisMargin?: number | null | undefined;
        mainAxisMargin?: number | null | undefined;
        minThumbLength?: number | null | undefined;
        interactive?: boolean | null | undefined;
    });
}
export declare namespace ScrollbarThemeData {
    function implement(args: [options?: {
        thumbVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        thickness?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        trackVisibility?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [boolean | null];
        }> | null | undefined;
        radius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        trackBorderColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        crossAxisMargin?: number | null | undefined;
        mainAxisMargin?: number | null | undefined;
        minThumbLength?: number | null | undefined;
        interactive?: boolean | null | undefined;
    }], implementation: {}): ScrollbarThemeData;
}
export declare namespace ScrollbarThemeData {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ScrollbarThemeData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "thumbVisibility" | "thickness" | "trackVisibility" | "interactive" | "radius" | "thumbColor" | "trackColor" | "trackBorderColor" | "crossAxisMargin" | "mainAxisMargin" | "minThumbLength" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/scrollbar_theme.dart::ScrollbarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
