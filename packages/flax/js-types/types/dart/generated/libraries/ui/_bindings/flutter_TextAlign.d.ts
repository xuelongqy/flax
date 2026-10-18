import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextAlign extends DartEnum {
    readonly __TextAlign: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextAlign: Readonly<{
    left: TextAlign;
    right: TextAlign;
    center: TextAlign;
    justify: TextAlign;
    start: TextAlign;
    end: TextAlign;
    values: readonly TextAlign[];
} & _FlaxInstanceType<TextAlign> & _FlaxDartType<TextAlign, readonly ["class", "flax.core/flutter#type:TextAlign", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
