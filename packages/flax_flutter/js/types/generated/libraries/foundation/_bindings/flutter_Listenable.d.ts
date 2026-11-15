import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Listenable extends Readonly<{
    "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
}> {
    readonly __Listenable: unique symbol;
    readonly [_flaxDartTypeValue]: Listenable;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare namespace _ListenableFactory {
    function merge(listenables: DartIterableInput<Listenable | null, Readonly<{
        "__flaxBound:package:listen/src/listen.dart::Listenable": readonly [];
    }> | null>): Listenable;
}
export declare namespace _ListenableFactory {
    function setDebugMaybeDispatchCreated(value: ((className: string, object: {}) => void)): void;
}
export declare namespace _ListenableFactory {
    function setDebugMaybeDispatchDisposed(value: ((object: {}) => void)): void;
}
export declare namespace _ListenableFactory {
    const debugMaybeDispatchCreated: ((className: string, object: {}) => void);
}
export declare namespace _ListenableFactory {
    const debugMaybeDispatchDisposed: ((object: {}) => void);
}
export declare const Listenable: typeof _ListenableFactory & _FlaxInstanceType<Listenable> & _FlaxDartType<Listenable, readonly ["class", "flax.core/flutter#type:Listenable", readonly [], false]>;
