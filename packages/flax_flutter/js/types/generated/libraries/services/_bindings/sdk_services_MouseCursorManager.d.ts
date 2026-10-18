import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MouseCursorManager extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorManager": readonly [];
}> {
    readonly __MouseCursorManager: unique symbol;
    readonly [_flaxDartTypeValue]: MouseCursorManager;
}
export interface MouseCursorManager {
    readonly [_flaxDartTypeValue]: MouseCursorManager;
    debugDeviceActiveCursor(device: number): upstream0.MouseCursor | null;
    handleDeviceCursorUpdate(device: number, triggeringEvent: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, cursorCandidates: DartIterableInput<upstream0.MouseCursor, Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    get fallbackMouseCursor(): upstream0.MouseCursor;
}
export declare abstract class MouseCursorManager extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MouseCursorManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false];
    constructor(fallbackMouseCursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>);
}
export declare namespace MouseCursorManager {
    function implement(args: [fallbackMouseCursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>], implementation: {}): MouseCursorManager;
}
