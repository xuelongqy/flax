import { type FlaxInstanceType as _FlaxInstanceType, type DartValue } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends DartValue {
    readonly __Route: unique symbol;
}
export declare const Route: object & _FlaxInstanceType<Route<any>>;
