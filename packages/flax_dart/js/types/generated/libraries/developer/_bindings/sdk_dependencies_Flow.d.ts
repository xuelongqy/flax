import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Flow extends Readonly<{
    "__flaxBound:dart:developer::Flow": readonly [];
}> {
    readonly __Flow: unique symbol;
    readonly [_flaxDartTypeValue]: Flow;
    readonly id: number;
}
export declare namespace _FlowFactory {
    function begin(options?: {
        id?: number | null | undefined;
    }): Flow;
}
export declare namespace _FlowFactory {
    function step(id: number): Flow;
}
export declare namespace _FlowFactory {
    function end(id: number): Flow;
}
export declare const Flow: typeof _FlowFactory & _FlaxInstanceType<Flow> & _FlaxDartType<Flow, readonly ["class", "flax.core/sdk_dependencies#type:Flow", readonly [], false]>;
