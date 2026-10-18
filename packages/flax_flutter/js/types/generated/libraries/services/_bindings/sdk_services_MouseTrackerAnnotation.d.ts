import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MouseTrackerAnnotation extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MouseTrackerAnnotation: unique symbol;
    readonly [_flaxDartTypeValue]: MouseTrackerAnnotation;
}
export interface MouseTrackerAnnotation {
    readonly [_flaxDartTypeValue]: MouseTrackerAnnotation;
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
    get onEnter(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [];
    }>) => void) | null;
    get onExit(): ((event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [];
    }>) => void) | null;
    get cursor(): upstream3.MouseCursor;
    get validForMouseTracker(): boolean;
}
export declare abstract class MouseTrackerAnnotation extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseTrackerAnnotation>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MouseTrackerAnnotation;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseTrackerAnnotation", readonly [], false];
    constructor(options?: {
        onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined;
        onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined;
        cursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        validForMouseTracker?: boolean | undefined;
    });
}
export declare namespace MouseTrackerAnnotation {
    function implement(args: [options?: {
        onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined;
        onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined;
        cursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        validForMouseTracker?: boolean | undefined;
    }], implementation: {}): MouseTrackerAnnotation;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onEnter" | "onExit" | "cursor" | "validForMouseTracker" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
