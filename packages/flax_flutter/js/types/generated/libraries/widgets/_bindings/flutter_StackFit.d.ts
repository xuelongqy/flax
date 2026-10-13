import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface StackFit extends DartEnum {
    readonly __StackFit: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const StackFit: Readonly<{
    loose: StackFit;
    expand: StackFit;
    passthrough: StackFit;
    values: readonly StackFit[];
} & _FlaxInstanceType<StackFit> & _FlaxDartType<StackFit, readonly ["class", "flax.core/flutter#type:StackFit", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
