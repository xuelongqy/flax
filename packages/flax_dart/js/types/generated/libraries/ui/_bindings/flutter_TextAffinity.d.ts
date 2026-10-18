import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextAffinity extends DartEnum {
    readonly __TextAffinity: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextAffinity: Readonly<{
    upstream: TextAffinity;
    downstream: TextAffinity;
    values: readonly TextAffinity[];
} & _FlaxInstanceType<TextAffinity> & _FlaxDartType<TextAffinity, readonly ["class", "flax.core/flutter#type:TextAffinity", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
