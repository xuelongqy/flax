import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface MaxLengthEnforcement extends DartEnum {
    readonly __MaxLengthEnforcement: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MaxLengthEnforcement: Readonly<{
    none: MaxLengthEnforcement;
    enforced: MaxLengthEnforcement;
    truncateAfterCompositionEnds: MaxLengthEnforcement;
    values: readonly MaxLengthEnforcement[];
} & _FlaxInstanceType<MaxLengthEnforcement> & _FlaxDartType<MaxLengthEnforcement, readonly ["class", "flax.core/flutter#type:MaxLengthEnforcement", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
