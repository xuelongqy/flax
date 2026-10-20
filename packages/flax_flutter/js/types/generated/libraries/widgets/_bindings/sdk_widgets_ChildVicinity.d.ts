import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChildVicinity extends Omit<upstream0.Comparable<ChildVicinity>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [ChildVicinity];
}> {
    readonly __ChildVicinity: unique symbol;
    readonly [_flaxDartTypeValue]: ChildVicinity;
    readonly xIndex: number;
    readonly yIndex: number;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [ChildVicinity];
    }>): number;
    toString(): string;
}
export declare function _ChildVicinityFactory(options: {
    xIndex: number;
    yIndex: number;
}): ChildVicinity;
export interface _ChildVicinityNative extends ChildVicinity {
    readonly [_flaxDartTypeValue]: _ChildVicinityNative;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [ChildVicinity];
    }>): number;
    toString(): string;
    get xIndex(): number;
    get yIndex(): number;
}
export declare abstract class _ChildVicinityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildVicinity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChildVicinity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false];
    constructor(options: {
        xIndex: number;
        yIndex: number;
    });
}
export declare namespace _ChildVicinityFactory {
    function implement(args: [options: {
        xIndex: number;
        yIndex: number;
    }], implementation: {}): ChildVicinity;
}
declare const _ChildVicinityBinding: typeof _ChildVicinityFactory & (new (options: {
    xIndex: number;
    yIndex: number;
}) => _ChildVicinityNative);
export declare namespace _ChildVicinityFactory {
    const invalid: ChildVicinity;
}
export declare const ChildVicinity: typeof _ChildVicinityBinding & _FlaxInstanceType<ChildVicinity> & _FlaxDartType<ChildVicinity, readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "xIndex" | "yIndex" | "compareTo" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity" | "__flaxBound:dart:core::Comparable";
export {};
