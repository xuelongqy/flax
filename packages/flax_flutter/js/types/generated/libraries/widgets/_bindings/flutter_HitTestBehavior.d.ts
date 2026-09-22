import { type DartEnum } from '@flax/core/bindings';
export interface HitTestBehavior extends DartEnum {
    readonly type: "flax.core/flutter#type:HitTestBehavior";
}
export declare const HitTestBehavior: Readonly<{
    deferToChild: HitTestBehavior;
    opaque: HitTestBehavior;
    translucent: HitTestBehavior;
}>;
