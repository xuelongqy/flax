import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SearchBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/search_bar_theme.dart::SearchBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SearchBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: SearchBarThemeData;
    readonly elevation: upstream1.WidgetStateProperty<number | null> | null;
    readonly backgroundColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly shadowColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly surfaceTintColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly overlayColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly side: upstream1.WidgetStateProperty<upstream3.BorderSide | null> | null;
    readonly shape: upstream1.WidgetStateProperty<upstream4.OutlinedBorder | null> | null;
    readonly padding: upstream1.WidgetStateProperty<upstream5.EdgeInsetsGeometry | null> | null;
    readonly textStyle: upstream1.WidgetStateProperty<upstream6.TextStyle | null> | null;
    readonly hintStyle: upstream1.WidgetStateProperty<upstream6.TextStyle | null> | null;
    readonly constraints: upstream7.BoxConstraints | null;
    readonly textCapitalization: upstream8.TextCapitalization | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        textCapitalization?: upstream8.TextCapitalization | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
    }): SearchBarThemeData;
}
export declare function _SearchBarThemeDataFactory(options?: {
    elevation?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    side?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
    }> | null | undefined;
    textStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    hintStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    textCapitalization?: upstream8.TextCapitalization | null | undefined;
}): SearchBarThemeData;
export interface _SearchBarThemeDataNative extends SearchBarThemeData {
    readonly [_flaxDartTypeValue]: _SearchBarThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
        }> | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        textCapitalization?: upstream8.TextCapitalization | null | undefined;
    }): SearchBarThemeData;
    get elevation(): upstream1.WidgetStateProperty<number | null> | null;
    get backgroundColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get shadowColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get surfaceTintColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get overlayColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get side(): upstream1.WidgetStateProperty<upstream3.BorderSide | null> | null;
    get shape(): upstream1.WidgetStateProperty<upstream4.OutlinedBorder | null> | null;
    get padding(): upstream1.WidgetStateProperty<upstream5.EdgeInsetsGeometry | null> | null;
    get textStyle(): upstream1.WidgetStateProperty<upstream6.TextStyle | null> | null;
    get hintStyle(): upstream1.WidgetStateProperty<upstream6.TextStyle | null> | null;
    get constraints(): upstream7.BoxConstraints | null;
    get textCapitalization(): upstream8.TextCapitalization | null;
}
export declare abstract class _SearchBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SearchBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SearchBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SearchBarThemeData", readonly [], false];
    constructor(options?: {
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
        }> | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        textCapitalization?: upstream8.TextCapitalization | null | undefined;
    });
}
export declare namespace _SearchBarThemeDataFactory {
    function implement(args: [options?: {
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
        }> | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        hintStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
        }> | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        textCapitalization?: upstream8.TextCapitalization | null | undefined;
    }], implementation: {}): SearchBarThemeData;
}
declare const _SearchBarThemeDataBinding: typeof _SearchBarThemeDataFactory & (new (options?: {
    elevation?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    side?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.BorderSide | null];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.OutlinedBorder | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.EdgeInsetsGeometry | null];
    }> | null | undefined;
    textStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    hintStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.TextStyle | null];
    }> | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    textCapitalization?: upstream8.TextCapitalization | null | undefined;
}) => _SearchBarThemeDataNative);
export declare namespace _SearchBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/search_bar_theme.dart::SearchBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/search_bar_theme.dart::SearchBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): SearchBarThemeData | null;
}
export declare const SearchBarThemeData: typeof _SearchBarThemeDataBinding & _FlaxInstanceType<SearchBarThemeData> & _FlaxDartType<SearchBarThemeData, readonly ["class", "flax.material/material#type:SearchBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "elevation" | "backgroundColor" | "shadowColor" | "surfaceTintColor" | "overlayColor" | "side" | "shape" | "padding" | "textStyle" | "hintStyle" | "constraints" | "textCapitalization" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/search_bar_theme.dart::SearchBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
