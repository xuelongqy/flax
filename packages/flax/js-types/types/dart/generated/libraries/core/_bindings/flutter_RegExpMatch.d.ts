import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RegExpMatch extends Omit<upstream0.Match, typeof _flaxDartTypeValue | "start" | "end" | "groupCount" | "input" | "pattern" | "groupNames" | "group" | "groups" | "namedGroup" | "operatorGetIndex">, Readonly<{
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
    operatorGetIndex(group: number): string | null;
}
export declare const RegExpMatch: object & _FlaxInstanceType<RegExpMatch> & _FlaxDartType<RegExpMatch, readonly ["class", "flax.core/flutter#type:RegExpMatch", readonly [], false]>;
