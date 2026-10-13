import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ValueListenable<T extends unknown | null = unknown | null> extends upstream0.Listenable, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}> {
    readonly __ValueListenable: unique symbol;
}
export interface ValueListenable<T extends unknown | null = unknown | null> {
}
export declare abstract class ValueListenable<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueListenable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ValueListenable<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:ValueListenable", readonly [readonly ["any", null, readonly [], true]], false];
    static [_flaxDartTypeCases]: {
        arguments: readonly [readonly ["any", null, readonly [], true]];
        value: (abstract new () => ValueListenable<unknown | null>) & {
            readonly prototype: ValueListenable<unknown | null>;
            implement(args: [], implementation: {
                addListener: ((listener: (() => void)) => void);
                removeListener: ((listener: (() => void)) => void);
                get value(): unknown | null;
            }): ValueListenable<unknown | null>;
        } & _FlaxInstanceType<ValueListenable<unknown | null>> & _FlaxDartType<ValueListenable<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueListenable", readonly [readonly ["any", null, readonly [], true]], false]>;
    };
    constructor();
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract get value(): T;
}
export declare namespace ValueListenable {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        get value(): T;
    }): ValueListenable<T>;
}
