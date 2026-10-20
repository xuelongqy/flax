import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MouseCursorManager extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorManager": readonly [];
}> {
    readonly __MouseCursorManager: unique symbol;
    readonly [_flaxDartTypeValue]: MouseCursorManager;
    readonly fallbackMouseCursor: upstream0.MouseCursor;
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
}
export declare function _MouseCursorManagerFactory(fallbackMouseCursor: Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>): MouseCursorManager;
export interface _MouseCursorManagerNative extends MouseCursorManager {
    readonly [_flaxDartTypeValue]: _MouseCursorManagerNative;
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
export declare abstract class _MouseCursorManagerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorManager>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MouseCursorManager;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false];
    constructor(fallbackMouseCursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>);
}
export declare namespace _MouseCursorManagerFactory {
    function implement(args: [fallbackMouseCursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>], implementation: {}): MouseCursorManager;
}
declare const _MouseCursorManagerBinding: typeof _MouseCursorManagerFactory & (new (fallbackMouseCursor: Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) => _MouseCursorManagerNative);
export declare const MouseCursorManager: typeof _MouseCursorManagerBinding & _FlaxInstanceType<MouseCursorManager> & _FlaxDartType<MouseCursorManager, readonly ["class", "flax.core/sdk_services#type:MouseCursorManager", readonly [], false]>;
export {};
