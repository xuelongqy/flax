import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Constraints extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}> {
    readonly __Constraints: unique symbol;
    readonly [_flaxDartTypeValue]: Constraints;
}
export interface Constraints {
    readonly [_flaxDartTypeValue]: Constraints;
    debugAssertIsValid(options?: {
        isAppliedConstraint?: boolean | undefined;
        informationCollector?: (() => DartIterableInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    }): boolean;
}
export declare abstract class Constraints extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Constraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Constraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:Constraints", readonly [], false];
    constructor();
    abstract get isTight(): boolean;
    abstract get isNormalized(): boolean;
}
export declare namespace Constraints {
    function implement(args: [], implementation: {
        get isTight(): boolean;
        get isNormalized(): boolean;
    }): Constraints;
}
