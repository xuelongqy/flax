import { type DartEnum } from '@flax/core/bindings';
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
}>;
