import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MouseTracker extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/mouse_tracker.dart::MouseTracker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __MouseTracker: unique symbol;
    readonly [_flaxDartTypeValue]: MouseTracker;
}
export interface MouseTracker {
    readonly [_flaxDartTypeValue]: MouseTracker;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    updateWithEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, hitTestResult: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }> | null): void;
    updateAllDevices(): void;
    get mouseIsConnected(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class MouseTracker extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MouseTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MouseTracker", readonly [], false];
    constructor(hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>));
}
export declare namespace MouseTracker {
    function implement(args: [hitTestInView: ((offset: upstream3.Offset, viewId: number) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>)], implementation: {}): MouseTracker;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "mouseIsConnected" | "addListener" | "removeListener" | "dispose" | "updateWithEvent" | "updateAllDevices" | "__flaxBound:package:flutter/src/rendering/mouse_tracker.dart::MouseTracker" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
