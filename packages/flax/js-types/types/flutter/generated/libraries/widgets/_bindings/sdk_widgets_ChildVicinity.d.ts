import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ChildVicinity extends Omit<upstream0.Comparable<ChildVicinity>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [ChildVicinity];
}> {
    readonly __ChildVicinity: unique symbol;
    readonly [_flaxDartTypeValue]: ChildVicinity;
}
export interface ChildVicinity {
    readonly [_flaxDartTypeValue]: ChildVicinity;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [ChildVicinity];
    }>): number;
    toString(): string;
    get xIndex(): number;
    get yIndex(): number;
}
export declare abstract class ChildVicinity extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChildVicinity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChildVicinity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ChildVicinity", readonly [], false];
    constructor(options: {
        xIndex: number;
        yIndex: number;
    });
}
export declare namespace ChildVicinity {
    function implement(args: [options: {
        xIndex: number;
        yIndex: number;
    }], implementation: {}): ChildVicinity;
}
export declare namespace ChildVicinity {
    const invalid: ChildVicinity;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "xIndex" | "yIndex" | "compareTo" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity" | "__flaxBound:dart:core::Comparable";
export {};
