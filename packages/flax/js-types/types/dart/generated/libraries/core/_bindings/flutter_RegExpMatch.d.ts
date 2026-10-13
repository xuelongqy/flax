import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
export interface RegExpMatch extends upstream0.Match, Readonly<{
    "__flaxBound:dart:core::RegExpMatch": readonly [];
}> {
    readonly __RegExpMatch: unique symbol;
    readonly start: number;
    readonly end: number;
    readonly groupCount: number;
    readonly input: string;
    readonly pattern: upstream1.RegExp;
    readonly groupNames: DartIterable<string>;
    group(group: number): string | null;
    groups(groupIndices: DartListInput<number, number>): DartList<string | null>;
    namedGroup(name: string): string | null;
}
export declare const RegExpMatch: object & _FlaxInstanceType<RegExpMatch>;
