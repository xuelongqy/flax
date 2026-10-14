import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface State<T extends upstream0.StatefulWidget = upstream0.StatefulWidget> {
    readonly __State: unique symbol;
}
export declare const State: object & _FlaxInstanceType<State<upstream0.StatefulWidget>> & _FlaxDartType<State<upstream0.StatefulWidget>, readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.StatefulWidget] ? {
        readonly prototype: State<_Selected0>;
    } & _FlaxInstanceType<State<_Selected0>> & _FlaxDartType<State<_Selected0>> : never : never;
}
export {};
