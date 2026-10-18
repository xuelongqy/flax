import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RuneIterator extends Omit<upstream0.Iterator<number>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:core::RuneIterator": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Iterator": readonly [number];
}> {
    readonly __RuneIterator: unique symbol;
    readonly [_flaxDartTypeValue]: RuneIterator;
    readonly current: number;
    readonly string: string;
    get rawIndex(): number;
    readonly currentSize: number;
    readonly currentAsString: string;
    moveNext(): boolean;
    reset(rawIndex?: number): void;
    movePrevious(): boolean;
    set rawIndex(value: number);
}
export declare function _RuneIteratorFactory(string: string): RuneIterator;
export declare namespace _RuneIteratorFactory {
    function at(string: string, index: number): RuneIterator;
}
export declare const RuneIterator: typeof _RuneIteratorFactory & _FlaxInstanceType<RuneIterator> & _FlaxDartType<RuneIterator, readonly ["class", "flax.core/flutter#type:RuneIterator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "string" | "rawIndex" | "currentSize" | "currentAsString" | "moveNext" | "reset" | "movePrevious" | "__flaxBound:dart:core::RuneIterator" | "__flaxBound:dart:core::Iterator";
export {};
