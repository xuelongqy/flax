import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
export interface Pattern extends Readonly<{
    "__flaxBound:dart:core::Pattern": readonly [];
}> {
    readonly __Pattern: unique symbol;
    allMatches(string: string, start?: number): DartIterable<upstream0.Match>;
    matchAsPrefix(string: string, start?: number): upstream0.Match | null;
}
export declare const Pattern: object & _FlaxInstanceType<Pattern>;
