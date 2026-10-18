import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Factory<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/basic_types.dart::Factory": readonly [T];
}> {
    readonly __Factory: unique symbol;
    readonly [_flaxDartTypeValue]: Factory<T>;
}
export interface Factory<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: Factory<T>;
    toString(): string;
    get constructor(): (() => T);
    get type(): upstream0.Type;
}
export declare abstract class Factory<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Factory<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Factory<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(constructor: (() => unknown | null));
}
export declare namespace Factory {
    function implement<T extends unknown | null = unknown | null>(args: [constructor: (() => unknown | null)], implementation: {}): Factory<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (constructor: (() => unknown | null)) => Factory<_Selected0>) & {
        readonly prototype: Factory<_Selected0>;
        implement(args: readonly [(() => unknown | null)], implementation: Partial<Factory<_Selected0>>): Factory<_Selected0>;
    } & _FlaxInstanceType<Factory<_Selected0>> & _FlaxDartType<Factory<_Selected0>> : never : never;
}
export {};
