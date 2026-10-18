import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeExtension<T extends ThemeExtension<T>> extends Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
}> {
    readonly __ThemeExtension: unique symbol;
    readonly [_flaxDartTypeValue]: ThemeExtension<T>;
    readonly type: {};
    copyWith(): ThemeExtension<T>;
    lerp(other: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
    }> | null, t: number): ThemeExtension<T>;
}
export declare namespace _ThemeExtensionFactory {
    function implement<T extends ThemeExtension<T>>(args: [], implementation: {
        copyWith: (() => Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
        }>);
        lerp: ((other: ThemeExtension<T> | null, t: number) => Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T];
        }>);
        get type(): {};
    }): ThemeExtension<T>;
}
export declare const ThemeExtension: typeof _ThemeExtensionFactory & _FlaxInstanceType<ThemeExtension<never>> & _FlaxDartType<ThemeExtension<never>, readonly ["class", "flax.core/sdk_material#type:ThemeExtension", readonly [], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0 extends ThemeExtension<any>] ? [_Selected0] extends [ThemeExtension<_Selected0>] ? {
        readonly prototype: ThemeExtension<_Selected0>;
        implement(args: readonly [], implementation: Partial<ThemeExtension<_Selected0>>): ThemeExtension<_Selected0>;
    } & _FlaxInstanceType<ThemeExtension<_Selected0>> & _FlaxDartType<ThemeExtension<_Selected0>> : never : never;
}
export {};
