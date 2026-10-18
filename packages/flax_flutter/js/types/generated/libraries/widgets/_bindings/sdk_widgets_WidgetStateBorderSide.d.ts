import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import '@flax/flutter/painting/_bindings/flutter_BorderStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
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
}
export interface WidgetStateBorderSide {
    readonly [_flaxDartTypeValue]: WidgetStateBorderSide;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        width?: number | null | undefined;
        style?: upstream4.BorderStyle | null | undefined;
        strokeAlign?: number | null | undefined;
    }): upstream0.BorderSide;
    scale(t: number): upstream0.BorderSide;
    toPaint(): upstream5.Paint;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    get color(): upstream3.Color;
    get width(): number;
    get style(): upstream4.BorderStyle;
    get strokeAlign(): number;
    get strokeInset(): number;
    get strokeOutset(): number;
    get strokeOffset(): number;
}
export declare abstract class WidgetStateBorderSide extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateBorderSide>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateBorderSide;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateBorderSide", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream10.WidgetState, upstream10.WidgetState>): upstream0.BorderSide | null;
}
export declare namespace WidgetStateBorderSide {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream10.WidgetState>) => (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
    }): WidgetStateBorderSide;
}
export declare namespace WidgetStateBorderSide {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.BorderSide | null];
    }> | null, t: number): upstream2.WidgetStateProperty<upstream0.BorderSide | null> | null;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "width" | "style" | "strokeAlign" | "strokeInset" | "strokeOutset" | "strokeOffset" | "copyWith" | "scale" | "toPaint" | "toStringShort" | "debugFillProperties" | "toDiagnosticsNode" | "toString" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateBorderSide" | "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
