import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DraggableDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::DraggableDetails": readonly [];
}> {
    readonly __DraggableDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DraggableDetails;
}
export interface DraggableDetails {
    readonly [_flaxDartTypeValue]: DraggableDetails;
    get wasAccepted(): boolean;
    get velocity(): upstream0.Velocity;
    get offset(): upstream1.Offset;
}
export declare abstract class DraggableDetails extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DraggableDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false];
    constructor(options: {
        wasAccepted?: boolean | undefined;
        velocity: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace DraggableDetails {
    function implement(args: [options: {
        wasAccepted?: boolean | undefined;
        velocity: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): DraggableDetails;
}
