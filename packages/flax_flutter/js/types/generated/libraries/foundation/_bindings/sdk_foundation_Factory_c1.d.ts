import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Factory<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/basic_types.dart::Factory": readonly [T];
}> {
    readonly __Factory: unique symbol;
    readonly [_flaxDartTypeValue]: Factory<T>;
    readonly constructor: (() => T);
    readonly type: upstream0.Type;
    toString(): string;
}
export declare function _FactoryFactory<T extends unknown | null = unknown | null>(constructor: (() => (T | _FlaxDartOutput<T>))): Factory<T>;
export declare function _FactoryFactory(constructor: (() => unknown | null)): Factory<unknown | null>;
export interface _FactoryNative<T extends unknown | null = unknown | null> extends Factory<T> {
    readonly [_flaxDartTypeValue]: _FactoryNative<T>;
    toString(): string;
    get constructor(): (() => T);
    get type(): upstream0.Type;
}
export declare abstract class _FactoryNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Factory<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Factory<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(constructor: (() => unknown | null));
}
export declare namespace _FactoryFactory {
    function implement<T extends unknown | null = unknown | null>(args: [constructor: (() => unknown | null)], implementation: {}): Factory<T>;
}
declare const _FactoryBinding: typeof _FactoryFactory & (new <T extends unknown | null = unknown | null>(constructor: (() => unknown | null)) => _FactoryNative<T>);
export declare const Factory: typeof _FactoryBinding & _FlaxInstanceType<Factory<unknown | null>> & _FlaxDartType<Factory<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (constructor: (() => unknown | null)) => _FactoryNative<_Selected0>) & {
        (constructor: (() => (_Selected0 | DartInput<_Selected0>))): _FactoryNative<_Selected0>;
        readonly prototype: _FactoryNative<_Selected0>;
        implement(args: readonly [(() => unknown | null)], implementation: Partial<_FactoryNative<_Selected0>>): _FactoryNative<_Selected0>;
    } & _FlaxInstanceType<_FactoryNative<_Selected0>> & _FlaxDartType<_FactoryNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (constructor: (() => unknown | null)) => _FactoryNative<_Selected0>) & {
        (constructor: (() => (_Selected0 | DartInput<_Selected0>))): _FactoryNative<_Selected0>;
        readonly prototype: _FactoryNative<_Selected0>;
        implement(args: readonly [(() => unknown | null)], implementation: Partial<_FactoryNative<_Selected0>>): _FactoryNative<_Selected0>;
    } & _FlaxInstanceType<_FactoryNative<_Selected0>> & _FlaxDartType<_FactoryNative<_Selected0>> : never : never;
}
export {};
