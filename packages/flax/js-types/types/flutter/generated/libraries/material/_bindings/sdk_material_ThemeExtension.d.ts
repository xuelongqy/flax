import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeExtension<T extends ThemeExtension<T>> extends Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
}> {
    readonly __ThemeExtension: unique symbol;
    readonly [_flaxDartTypeValue]: ThemeExtension<T>;
}
export interface ThemeExtension<T extends ThemeExtension<T>> {
    readonly [_flaxDartTypeValue]: ThemeExtension<T>;
    get type(): {};
}
export declare abstract class ThemeExtension<T extends ThemeExtension<T>> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ThemeExtension<never>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ThemeExtension<never>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ThemeExtension", readonly [], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract copyWith(): ThemeExtension<T>;
    abstract lerp(other: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
    }> | null, t: number): ThemeExtension<T>;
}
export declare namespace ThemeExtension {
    function implement<T extends ThemeExtension<T>>(args: [], implementation: {
        copyWith: (() => Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
        }>);
        lerp: ((other: ThemeExtension<T> | null, t: number) => Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
        }>);
    }): ThemeExtension<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0 extends ThemeExtension<any>] ? [_Selected0] extends [ThemeExtension<_Selected0>] ? (abstract new () => ThemeExtension<_Selected0>) & {
        readonly prototype: ThemeExtension<_Selected0>;
        implement(args: readonly [], implementation: Partial<ThemeExtension<_Selected0>>): ThemeExtension<_Selected0>;
    } & _FlaxInstanceType<ThemeExtension<_Selected0>> & _FlaxDartType<ThemeExtension<_Selected0>> : never : never;
}
export {};
