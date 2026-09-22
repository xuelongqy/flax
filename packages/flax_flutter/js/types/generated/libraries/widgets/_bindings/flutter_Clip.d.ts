import { type DartEnum } from '@flax/core/bindings';
export interface Clip extends DartEnum {
    readonly type: "flax.core/flutter#type:Clip";
}
export declare const Clip: Readonly<{
    none: Clip;
    hardEdge: Clip;
    antiAlias: Clip;
    antiAliasWithSaveLayer: Clip;
}>;
