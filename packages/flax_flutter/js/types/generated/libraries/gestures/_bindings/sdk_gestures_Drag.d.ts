import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Drag extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
}> {
    readonly __Drag: unique symbol;
    readonly [_flaxDartTypeValue]: Drag;
}
export interface Drag {
    readonly [_flaxDartTypeValue]: Drag;
    update(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    end(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    cancel(): void;
}
export declare abstract class Drag extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Drag>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Drag;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:Drag", readonly [], false];
    constructor();
}
export declare namespace Drag {
    function implement(args: [], implementation: {}): Drag;
}
