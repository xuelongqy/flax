import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface CrossAxisAlignment extends DartEnum {
    readonly __CrossAxisAlignment: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const CrossAxisAlignment: Readonly<{
    start: CrossAxisAlignment;
    end: CrossAxisAlignment;
    center: CrossAxisAlignment;
    stretch: CrossAxisAlignment;
    baseline: CrossAxisAlignment;
    values: readonly CrossAxisAlignment[];
} & _FlaxInstanceType<CrossAxisAlignment> & _FlaxDartType<CrossAxisAlignment, readonly ["class", "flax.core/flutter#type:CrossAxisAlignment", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
