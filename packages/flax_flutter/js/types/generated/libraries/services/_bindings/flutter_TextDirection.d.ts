import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextDirection extends DartEnum {
    readonly __TextDirection: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextDirection: Readonly<{
    rtl: TextDirection;
    ltr: TextDirection;
    values: readonly TextDirection[];
} & _FlaxInstanceType<TextDirection> & _FlaxDartType<TextDirection, readonly ["class", "flax.core/flutter#type:TextDirection", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
