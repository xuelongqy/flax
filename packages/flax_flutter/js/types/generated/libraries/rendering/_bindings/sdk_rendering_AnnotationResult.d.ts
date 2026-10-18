import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationEntry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationEntry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotationResult<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [T];
}> {
    readonly __AnnotationResult: unique symbol;
    readonly [_flaxDartTypeValue]: AnnotationResult<T>;
}
export interface AnnotationResult<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: AnnotationResult<T>;
    add(entry: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T];
    }>): void;
    get entries(): DartIterable<upstream0.AnnotationEntry<T>>;
    get annotations(): DartIterable<T>;
}
export declare abstract class AnnotationResult<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotationResult<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnnotationResult<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotationResult", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace AnnotationResult {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): AnnotationResult<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => AnnotationResult<_Selected0>) & {
        readonly prototype: AnnotationResult<_Selected0>;
        implement(args: readonly [], implementation: Partial<AnnotationResult<_Selected0>>): AnnotationResult<_Selected0>;
    } & _FlaxInstanceType<AnnotationResult<_Selected0>> & _FlaxDartType<AnnotationResult<_Selected0>> : never : never;
}
export {};
