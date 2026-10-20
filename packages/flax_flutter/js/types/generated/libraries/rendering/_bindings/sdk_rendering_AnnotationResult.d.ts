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
    readonly entries: DartIterable<upstream0.AnnotationEntry<T>>;
    readonly annotations: DartIterable<T>;
    add(entry: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T];
    }>): void;
}
export declare function _AnnotationResultFactory<T extends unknown | null = unknown | null>(): AnnotationResult<T>;
export declare function _AnnotationResultFactory(): AnnotationResult<unknown | null>;
export interface _AnnotationResultNative<T extends unknown | null = unknown | null> extends AnnotationResult<T> {
    readonly [_flaxDartTypeValue]: _AnnotationResultNative<T>;
    add(entry: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T];
    }>): void;
    get entries(): DartIterable<upstream0.AnnotationEntry<T>>;
    get annotations(): DartIterable<T>;
}
export declare abstract class _AnnotationResultNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotationResult<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AnnotationResult<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotationResult", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace _AnnotationResultFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): AnnotationResult<T>;
}
declare const _AnnotationResultBinding: typeof _AnnotationResultFactory & (new <T extends unknown | null = unknown | null>() => _AnnotationResultNative<T>);
export declare const AnnotationResult: typeof _AnnotationResultBinding & _FlaxInstanceType<AnnotationResult<unknown | null>> & _FlaxDartType<AnnotationResult<unknown | null>, readonly ["class", "flax.core/sdk_rendering#type:AnnotationResult", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AnnotationResultNative<_Selected0>) & {
        (): _AnnotationResultNative<_Selected0>;
        readonly prototype: _AnnotationResultNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AnnotationResultNative<_Selected0>>): _AnnotationResultNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotationResultNative<_Selected0>> & _FlaxDartType<_AnnotationResultNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AnnotationResultNative<_Selected0>) & {
        (): _AnnotationResultNative<_Selected0>;
        readonly prototype: _AnnotationResultNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AnnotationResultNative<_Selected0>>): _AnnotationResultNative<_Selected0>;
    } & _FlaxInstanceType<_AnnotationResultNative<_Selected0>> & _FlaxDartType<_AnnotationResultNative<_Selected0>> : never : never;
}
export {};
