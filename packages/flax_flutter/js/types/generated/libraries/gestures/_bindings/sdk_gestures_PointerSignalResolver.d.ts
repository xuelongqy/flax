import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PointerSignalResolver extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/pointer_signal_resolver.dart::PointerSignalResolver": readonly [];
}> {
    readonly __PointerSignalResolver: unique symbol;
    readonly [_flaxDartTypeValue]: PointerSignalResolver;
}
export interface PointerSignalResolver {
    readonly [_flaxDartTypeValue]: PointerSignalResolver;
    register(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [];
    }>, callback: ((event: upstream0.PointerSignalEvent) => void)): void;
    resolve(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [];
    }>): void;
}
export declare abstract class PointerSignalResolver extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerSignalResolver>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerSignalResolver;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerSignalResolver", readonly [], false];
    constructor();
}
export declare namespace PointerSignalResolver {
    function implement(args: [], implementation: {}): PointerSignalResolver;
}
