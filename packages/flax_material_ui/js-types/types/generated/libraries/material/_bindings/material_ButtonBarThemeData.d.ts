import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ButtonTextTheme';
import '@flax/material-ui/_bindings/material_ButtonTextTheme';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonBarThemeData;
    readonly alignment: upstream1.MainAxisAlignment | null;
    readonly mainAxisSize: upstream2.MainAxisSize | null;
    readonly buttonTextTheme: upstream3.ButtonTextTheme | null;
    readonly buttonMinWidth: number | null;
    readonly buttonHeight: number | null;
    readonly buttonPadding: upstream4.EdgeInsetsGeometry | null;
    readonly buttonAlignedDropdown: boolean | null;
    readonly layoutBehavior: upstream5.ButtonBarLayoutBehavior | null;
    readonly overflowDirection: upstream6.VerticalDirection | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        alignment?: upstream1.MainAxisAlignment | null | undefined;
        buttonAlignedDropdown?: boolean | null | undefined;
        buttonHeight?: number | null | undefined;
        buttonMinWidth?: number | null | undefined;
        buttonPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
        layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
        mainAxisSize?: upstream2.MainAxisSize | null | undefined;
        overflowDirection?: upstream6.VerticalDirection | null | undefined;
    }): ButtonBarThemeData;
}
export declare function _ButtonBarThemeDataFactory(options?: {
    alignment?: upstream1.MainAxisAlignment | null | undefined;
    mainAxisSize?: upstream2.MainAxisSize | null | undefined;
    buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
    buttonMinWidth?: number | null | undefined;
    buttonHeight?: number | null | undefined;
    buttonPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    buttonAlignedDropdown?: boolean | null | undefined;
    layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
    overflowDirection?: upstream6.VerticalDirection | null | undefined;
}): ButtonBarThemeData;
export interface _ButtonBarThemeDataNative extends ButtonBarThemeData {
    readonly [_flaxDartTypeValue]: _ButtonBarThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        alignment?: upstream1.MainAxisAlignment | null | undefined;
        mainAxisSize?: upstream2.MainAxisSize | null | undefined;
        buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
        buttonMinWidth?: number | null | undefined;
        buttonHeight?: number | null | undefined;
        buttonPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        buttonAlignedDropdown?: boolean | null | undefined;
        layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
        overflowDirection?: upstream6.VerticalDirection | null | undefined;
    }): ButtonBarThemeData;
    get alignment(): upstream1.MainAxisAlignment | null;
    get mainAxisSize(): upstream2.MainAxisSize | null;
    get buttonTextTheme(): upstream3.ButtonTextTheme | null;
    get buttonMinWidth(): number | null;
    get buttonHeight(): number | null;
    get buttonPadding(): upstream4.EdgeInsetsGeometry | null;
    get buttonAlignedDropdown(): boolean | null;
    get layoutBehavior(): upstream5.ButtonBarLayoutBehavior | null;
    get overflowDirection(): upstream6.VerticalDirection | null;
}
export declare abstract class _ButtonBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ButtonBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ButtonBarThemeData", readonly [], false];
    constructor(options?: {
        alignment?: upstream1.MainAxisAlignment | null | undefined;
        mainAxisSize?: upstream2.MainAxisSize | null | undefined;
        buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
        buttonMinWidth?: number | null | undefined;
        buttonHeight?: number | null | undefined;
        buttonPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        buttonAlignedDropdown?: boolean | null | undefined;
        layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
        overflowDirection?: upstream6.VerticalDirection | null | undefined;
    });
}
export declare namespace _ButtonBarThemeDataFactory {
    function implement(args: [options?: {
        alignment?: upstream1.MainAxisAlignment | null | undefined;
        mainAxisSize?: upstream2.MainAxisSize | null | undefined;
        buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
        buttonMinWidth?: number | null | undefined;
        buttonHeight?: number | null | undefined;
        buttonPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        buttonAlignedDropdown?: boolean | null | undefined;
        layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
        overflowDirection?: upstream6.VerticalDirection | null | undefined;
    }], implementation: {}): ButtonBarThemeData;
}
declare const _ButtonBarThemeDataBinding: typeof _ButtonBarThemeDataFactory & (new (options?: {
    alignment?: upstream1.MainAxisAlignment | null | undefined;
    mainAxisSize?: upstream2.MainAxisSize | null | undefined;
    buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined;
    buttonMinWidth?: number | null | undefined;
    buttonHeight?: number | null | undefined;
    buttonPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    buttonAlignedDropdown?: boolean | null | undefined;
    layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined;
    overflowDirection?: upstream6.VerticalDirection | null | undefined;
}) => _ButtonBarThemeDataNative);
export declare namespace _ButtonBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ButtonBarThemeData | null;
}
export declare const ButtonBarThemeData: typeof _ButtonBarThemeDataBinding & _FlaxInstanceType<ButtonBarThemeData> & _FlaxDartType<ButtonBarThemeData, readonly ["class", "flax.material/material#type:ButtonBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "alignment" | "mainAxisSize" | "buttonTextTheme" | "buttonMinWidth" | "buttonHeight" | "buttonPadding" | "buttonAlignedDropdown" | "layoutBehavior" | "overflowDirection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
