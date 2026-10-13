import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextOverflow extends DartEnum {
    readonly __TextOverflow: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextOverflow: Readonly<{
    clip: TextOverflow;
    fade: TextOverflow;
    ellipsis: TextOverflow;
    visible: TextOverflow;
    values: readonly TextOverflow[];
} & _FlaxInstanceType<TextOverflow> & _FlaxDartType<TextOverflow, readonly ["class", "flax.core/flutter#type:TextOverflow", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
