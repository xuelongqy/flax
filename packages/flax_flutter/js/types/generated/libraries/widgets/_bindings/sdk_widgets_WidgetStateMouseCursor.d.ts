import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetStateMouseCursor extends Omit<upstream0.MouseCursor, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MouseCursor>, Omit<upstream2.WidgetStateProperty<upstream0.MouseCursor>, _flaxOwnMembers0 | keyof upstream0.MouseCursor | keyof upstream1.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.MouseCursor];
}> {
    readonly __WidgetStateMouseCursor: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateMouseCursor;
    readonly debugDescription: string;
    createSession(device: number): upstream5.MouseCursorSession;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.MouseCursor;
}
export declare namespace _WidgetStateMouseCursorFactory {
    function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), options?: {
        debugDescription?: string | undefined;
    }): WidgetStateMouseCursor;
}
export declare namespace _WidgetStateMouseCursorFactory {
    function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.MouseCursor, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): WidgetStateMouseCursor;
}
export interface _WidgetStateMouseCursorNative extends WidgetStateMouseCursor {
    readonly [_flaxDartTypeValue]: _WidgetStateMouseCursorNative;
    createSession(device: number): upstream5.MouseCursorSession;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare abstract class _WidgetStateMouseCursorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMouseCursor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateMouseCursor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.MouseCursor;
    abstract get debugDescription(): string;
}
export declare namespace _WidgetStateMouseCursorFactory {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
        get debugDescription(): string;
    }): WidgetStateMouseCursor;
}
declare const _WidgetStateMouseCursorBinding: typeof _WidgetStateMouseCursorFactory & (abstract new () => _WidgetStateMouseCursorNative);
export declare namespace _WidgetStateMouseCursorFactory {
    const clickable: WidgetStateMouseCursor;
}
export declare namespace _WidgetStateMouseCursorFactory {
    const adaptiveClickable: WidgetStateMouseCursor;
}
export declare namespace _WidgetStateMouseCursorFactory {
    const textable: WidgetStateMouseCursor;
}
export declare const WidgetStateMouseCursor: typeof _WidgetStateMouseCursorBinding & _FlaxInstanceType<WidgetStateMouseCursor> & _FlaxDartType<WidgetStateMouseCursor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "createSession" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMouseCursor" | "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
