import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OffsetPair extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
}> {
    readonly __OffsetPair: unique symbol;
    readonly [_flaxDartTypeValue]: OffsetPair;
    readonly local: upstream0.Offset;
    readonly global: upstream0.Offset;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
}
export declare function _OffsetPairFactory(options: {
    local: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    global: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): OffsetPair;
export declare namespace _OffsetPairFactory {
    function fromEventPosition(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): OffsetPair;
}
export declare namespace _OffsetPairFactory {
    function fromEventDelta(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): OffsetPair;
}
export interface _OffsetPairNative extends OffsetPair {
    readonly [_flaxDartTypeValue]: _OffsetPairNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            local: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
            global: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
        }) => void;
        "fromEventPosition": (event: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) => void;
        "fromEventDelta": (event: Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) => void;
    };
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::OffsetPair": readonly [];
    }>): OffsetPair;
    get local(): upstream0.Offset;
    get global(): upstream0.Offset;
}
export declare abstract class _OffsetPairNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetPair>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OffsetPair;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false];
    constructor(options: {
        local: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        global: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
    constructor(call: _FlaxProxySuper<_OffsetPairNative>);
}
export declare namespace _OffsetPairFactory {
    function implement(args: [options: {
        local: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        global: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): OffsetPair;
}
declare const _OffsetPairBinding: typeof _OffsetPairFactory & (new (options: {
    local: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    global: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _OffsetPairNative) & (new (call: _FlaxProxySuper<_OffsetPairNative>) => _OffsetPairNative);
export declare namespace _OffsetPairFactory {
    const zero: OffsetPair;
}
export declare const OffsetPair: typeof _OffsetPairBinding & _FlaxInstanceType<OffsetPair> & _FlaxDartType<OffsetPair, readonly ["class", "flax.core/sdk_gestures#type:OffsetPair", readonly [], false]>;
export {};
