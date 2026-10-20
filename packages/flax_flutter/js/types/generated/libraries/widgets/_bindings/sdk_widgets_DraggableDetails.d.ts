import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DraggableDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::DraggableDetails": readonly [];
}> {
    readonly __DraggableDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DraggableDetails;
    readonly wasAccepted: boolean;
    readonly velocity: upstream0.Velocity;
    readonly offset: upstream1.Offset;
}
export declare function _DraggableDetailsFactory(options: {
    wasAccepted?: boolean | undefined;
    velocity: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>;
    offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): DraggableDetails;
export interface _DraggableDetailsNative extends DraggableDetails {
    readonly [_flaxDartTypeValue]: _DraggableDetailsNative;
    get wasAccepted(): boolean;
    get velocity(): upstream0.Velocity;
    get offset(): upstream1.Offset;
}
export declare abstract class _DraggableDetailsNative extends _FlaxProxyBase {
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
export declare namespace _DraggableDetailsFactory {
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
declare const _DraggableDetailsBinding: typeof _DraggableDetailsFactory & (new (options: {
    wasAccepted?: boolean | undefined;
    velocity: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>;
    offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _DraggableDetailsNative);
export declare const DraggableDetails: typeof _DraggableDetailsBinding & _FlaxInstanceType<DraggableDetails> & _FlaxDartType<DraggableDetails, readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false]>;
export {};
