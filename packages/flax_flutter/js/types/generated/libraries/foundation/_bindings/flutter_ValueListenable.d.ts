import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
export interface ValueListenable<T extends unknown | null = unknown | null> extends upstream0.Listenable, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}> {
    readonly __ValueListenable: unique symbol;
}
export declare abstract class ValueListenable<T extends unknown | null = unknown | null> {
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
