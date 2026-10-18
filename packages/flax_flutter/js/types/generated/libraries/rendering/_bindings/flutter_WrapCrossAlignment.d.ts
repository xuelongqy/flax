import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface WrapCrossAlignment extends DartEnum {
    readonly __WrapCrossAlignment: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const WrapCrossAlignment: Readonly<{
    start: WrapCrossAlignment;
    end: WrapCrossAlignment;
    center: WrapCrossAlignment;
    values: readonly WrapCrossAlignment[];
} & _FlaxInstanceType<WrapCrossAlignment> & _FlaxDartType<WrapCrossAlignment, readonly ["class", "flax.core/flutter#type:WrapCrossAlignment", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
