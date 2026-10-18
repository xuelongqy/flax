import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextBaseline extends DartEnum {
    readonly __TextBaseline: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextBaseline: Readonly<{
    alphabetic: TextBaseline;
    ideographic: TextBaseline;
    values: readonly TextBaseline[];
} & _FlaxInstanceType<TextBaseline> & _FlaxDartType<TextBaseline, readonly ["class", "flax.core/flutter#type:TextBaseline", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
