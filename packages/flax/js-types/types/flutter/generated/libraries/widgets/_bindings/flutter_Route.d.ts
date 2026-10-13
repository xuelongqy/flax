import { type FlaxInstanceType as _FlaxInstanceType, type DartValue } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends DartValue {
    readonly __Route: unique symbol;
}
export declare const Route: object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]>;
