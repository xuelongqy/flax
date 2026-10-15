import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RuneIterator extends upstream0.Iterator<number>, Readonly<{
    "__flaxBound:dart:core::RuneIterator": readonly [];
}> {
    readonly __RuneIterator: unique symbol;
    readonly current: number;
    moveNext(): boolean;
}
export declare const RuneIterator: object & _FlaxInstanceType<RuneIterator> & _FlaxDartType<RuneIterator, readonly ["class", "flax.core/flutter#type:RuneIterator", readonly [], false]>;
