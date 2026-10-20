import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CarouselViewThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/carousel_theme.dart::CarouselViewThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CarouselViewThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: CarouselViewThemeData;
    readonly padding: upstream4.EdgeInsets | null;
    readonly backgroundColor: upstream1.Color | null;
    readonly elevation: number | null;
    readonly shape: upstream3.OutlinedBorder | null;
    readonly itemClipBehavior: upstream5.Clip | null;
    readonly overlayColor: upstream2.WidgetStateProperty<upstream1.Color | null> | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
    }): CarouselViewThemeData;
}
export declare function _CarouselViewThemeDataFactory(options?: {
    elevation?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null | undefined;
    shape?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    itemClipBehavior?: upstream5.Clip | null | undefined;
}): CarouselViewThemeData;
export interface _CarouselViewThemeDataNative extends CarouselViewThemeData {
    readonly [_flaxDartTypeValue]: _CarouselViewThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
    }): CarouselViewThemeData;
    get padding(): upstream4.EdgeInsets | null;
    get backgroundColor(): upstream1.Color | null;
    get elevation(): number | null;
    get shape(): upstream3.OutlinedBorder | null;
    get itemClipBehavior(): upstream5.Clip | null;
    get overlayColor(): upstream2.WidgetStateProperty<upstream1.Color | null> | null;
}
export declare abstract class _CarouselViewThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselViewThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CarouselViewThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CarouselViewThemeData", readonly [], false];
    constructor(options?: {
        elevation?: number | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
    });
}
export declare namespace _CarouselViewThemeDataFactory {
    function implement(args: [options?: {
        elevation?: number | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
        }> | null | undefined;
        shape?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
    }], implementation: {}): CarouselViewThemeData;
}
declare const _CarouselViewThemeDataBinding: typeof _CarouselViewThemeDataFactory & (new (options?: {
    elevation?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.Color | null];
    }> | null | undefined;
    shape?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    itemClipBehavior?: upstream5.Clip | null | undefined;
}) => _CarouselViewThemeDataNative);
export declare namespace _CarouselViewThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/carousel_theme.dart::CarouselViewThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/carousel_theme.dart::CarouselViewThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): CarouselViewThemeData;
}
export declare const CarouselViewThemeData: typeof _CarouselViewThemeDataBinding & _FlaxInstanceType<CarouselViewThemeData> & _FlaxDartType<CarouselViewThemeData, readonly ["class", "flax.material/material#type:CarouselViewThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "padding" | "backgroundColor" | "elevation" | "shape" | "itemClipBehavior" | "overlayColor" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/carousel_theme.dart::CarouselViewThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
