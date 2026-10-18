import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface HitTestBehavior extends DartEnum {
    readonly __HitTestBehavior: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const HitTestBehavior: Readonly<{
    deferToChild: HitTestBehavior;
    opaque: HitTestBehavior;
    translucent: HitTestBehavior;
    values: readonly HitTestBehavior[];
} & _FlaxInstanceType<HitTestBehavior> & _FlaxDartType<HitTestBehavior, readonly ["class", "flax.core/flutter#type:HitTestBehavior", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
