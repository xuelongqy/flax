import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface VerticalDirection extends DartEnum {
    readonly __VerticalDirection: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const VerticalDirection: Readonly<{
    up: VerticalDirection;
    down: VerticalDirection;
    values: readonly VerticalDirection[];
} & _FlaxInstanceType<VerticalDirection> & _FlaxDartType<VerticalDirection, readonly ["class", "flax.core/flutter#type:VerticalDirection", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
