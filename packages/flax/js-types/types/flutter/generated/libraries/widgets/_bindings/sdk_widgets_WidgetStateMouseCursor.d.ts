import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
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
}
export interface WidgetStateMouseCursor {
    readonly [_flaxDartTypeValue]: WidgetStateMouseCursor;
    createSession(device: number): upstream3.MouseCursorSession;
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
}
export declare abstract class WidgetStateMouseCursor extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMouseCursor>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateMouseCursor;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream8.WidgetState, upstream8.WidgetState>): upstream0.MouseCursor;
    abstract get debugDescription(): string;
}
export declare namespace WidgetStateMouseCursor {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream8.WidgetState>) => Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>);
        get debugDescription(): string;
    }): WidgetStateMouseCursor;
}
export declare namespace WidgetStateMouseCursor {
    const clickable: WidgetStateMouseCursor;
}
export declare namespace WidgetStateMouseCursor {
    const adaptiveClickable: WidgetStateMouseCursor;
}
export declare namespace WidgetStateMouseCursor {
    const textable: WidgetStateMouseCursor;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "createSession" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMouseCursor" | "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};
