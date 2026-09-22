import { type DartEnum } from '@flax/core/bindings';
export interface MaxLengthEnforcement extends DartEnum {
    readonly type: "flax.core/flutter#type:MaxLengthEnforcement";
}
export declare const MaxLengthEnforcement: Readonly<{
    none: MaxLengthEnforcement;
    enforced: MaxLengthEnforcement;
    truncateAfterCompositionEnds: MaxLengthEnforcement;
}>;
