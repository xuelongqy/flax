import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MouseCursor extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MouseCursor: unique symbol;
    readonly [_flaxDartTypeValue]: MouseCursor;
    readonly debugDescription: string;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createSession(device: number): upstream5.MouseCursorSession;
}
declare const _MouseCursorFactory: {
    readonly defer: MouseCursor;
    readonly uncontrolled: MouseCursor;
};
export declare const MouseCursor: typeof _MouseCursorFactory & _FlaxInstanceType<MouseCursor> & _FlaxDartType<MouseCursor, readonly ["class", "flax.core/flutter#type:MouseCursor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createSession" | "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
