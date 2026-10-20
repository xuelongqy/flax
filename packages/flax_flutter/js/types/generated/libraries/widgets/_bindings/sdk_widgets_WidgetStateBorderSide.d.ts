import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetStateBorderSide extends Omit<upstream0.BorderSide, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.BorderSide>, Omit<upstream2.WidgetStateProperty<upstream0.BorderSide | null>, _flaxOwnMembers0 | keyof upstream0.BorderSide | keyof upstream1.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateBorderSide": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null];
}> {
    readonly __WidgetStateBorderSide: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateBorderSide;
    readonly color: upstream5.Color;
    readonly width: number;
    readonly style: upstream6.BorderStyle;
    readonly strokeAlign: number;
    readonly strokeInset: number;
    readonly strokeOutset: number;
    readonly strokeOffset: number;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        strokeAlign?: number | null | undefined;
        style?: upstream6.BorderStyle | null | undefined;
        width?: number | null | undefined;
    }): upstream0.BorderSide;
    scale(t: number): upstream0.BorderSide;
    toPaint(): upstream7.Paint;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.BorderSide | null;
}
export declare namespace _WidgetStateBorderSideFactory {
    function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null)): WidgetStateBorderSide;
}
export declare namespace _WidgetStateBorderSideFactory {
    function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.BorderSide | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null>): WidgetStateBorderSide;
}
export interface _WidgetStateBorderSideNative extends WidgetStateBorderSide {
    readonly [_flaxDartTypeValue]: _WidgetStateBorderSideNative;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        width?: number | null | undefined;
        style?: upstream6.BorderStyle | null | undefined;
        strokeAlign?: number | null | undefined;
    }): upstream0.BorderSide;
    scale(t: number): upstream0.BorderSide;
    toPaint(): upstream7.Paint;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    get color(): upstream5.Color;
    get width(): number;
    get style(): upstream6.BorderStyle;
    get strokeAlign(): number;
    get strokeInset(): number;
    get strokeOutset(): number;
    get strokeOffset(): number;
}
export declare abstract class _WidgetStateBorderSideNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateBorderSide>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateBorderSide;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateBorderSide", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.BorderSide | null;
}
export declare namespace _WidgetStateBorderSideFactory {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream3.WidgetState>) => (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
    }): WidgetStateBorderSide;
}
declare const _WidgetStateBorderSideBinding: typeof _WidgetStateBorderSideFactory & (abstract new () => _WidgetStateBorderSideNative);
export declare namespace _WidgetStateBorderSideFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null];
    }> | null, t: number): upstream2.WidgetStateProperty<upstream0.BorderSide | null> | null;
}
export declare const WidgetStateBorderSide: typeof _WidgetStateBorderSideBinding & _FlaxInstanceType<WidgetStateBorderSide> & _FlaxDartType<WidgetStateBorderSide, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateBorderSide", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "width" | "style" | "strokeAlign" | "strokeInset" | "strokeOutset" | "strokeOffset" | "copyWith" | "scale" | "toPaint" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateBorderSide" | "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
