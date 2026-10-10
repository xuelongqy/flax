import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface Directionality {
    readonly __Directionality: unique symbol;
}
declare namespace _DirectionalityFactory {
    function of(context: upstream1.BuildContext): upstream0.TextDirection;
}
export declare const Directionality: typeof _DirectionalityFactory & _FlaxInstanceType<Directionality>;
export {};
