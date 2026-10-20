import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaleEndDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleEndDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScaleEndDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ScaleEndDetails;
    readonly velocity: upstream1.Velocity;
    readonly scaleVelocity: number;
    readonly pointerCount: number;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _ScaleEndDetailsFactory(options?: {
    velocity?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }> | undefined;
    scaleVelocity?: number | undefined;
    pointerCount?: number | undefined;
}): ScaleEndDetails;
export interface _ScaleEndDetailsNative extends ScaleEndDetails {
    readonly [_flaxDartTypeValue]: _ScaleEndDetailsNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get velocity(): upstream1.Velocity;
    get scaleVelocity(): number;
    get pointerCount(): number;
}
export declare abstract class _ScaleEndDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaleEndDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScaleEndDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ScaleEndDetails", readonly [], false];
    constructor(options?: {
        velocity?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }> | undefined;
        scaleVelocity?: number | undefined;
        pointerCount?: number | undefined;
    });
}
export declare namespace _ScaleEndDetailsFactory {
    function implement(args: [options?: {
        velocity?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
        }> | undefined;
        scaleVelocity?: number | undefined;
        pointerCount?: number | undefined;
    }], implementation: {}): ScaleEndDetails;
}
declare const _ScaleEndDetailsBinding: typeof _ScaleEndDetailsFactory & (new (options?: {
    velocity?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }> | undefined;
    scaleVelocity?: number | undefined;
    pointerCount?: number | undefined;
}) => _ScaleEndDetailsNative);
export declare const ScaleEndDetails: typeof _ScaleEndDetailsBinding & _FlaxInstanceType<ScaleEndDetails> & _FlaxDartType<ScaleEndDetails, readonly ["class", "flax.core/sdk_gestures#type:ScaleEndDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "velocity" | "scaleVelocity" | "pointerCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleEndDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
