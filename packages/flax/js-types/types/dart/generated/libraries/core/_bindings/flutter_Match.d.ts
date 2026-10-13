import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
export interface Match extends Readonly<{
    "__flaxBound:dart:core::Match": readonly [];
}> {
    readonly __Match: unique symbol;
    readonly start: number;
    readonly end: number;
    readonly groupCount: number;
    readonly input: string;
    readonly pattern: upstream0.Pattern | string;
    group(group: number): string | null;
    groups(groupIndices: DartListInput<number, number>): DartList<string | null>;
}
export declare const Match: object & _FlaxInstanceType<Match>;
