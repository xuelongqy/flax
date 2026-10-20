import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Adaptation<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::Adaptation": readonly [T];
}> {
    readonly __Adaptation: unique symbol;
    readonly [_flaxDartTypeValue]: Adaptation<T>;
    readonly type: upstream0.Type;
    adapt(theme: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, defaultValue: (T | DartInput<T>)): T;
}
export declare function _AdaptationFactory<T extends unknown | null = unknown | null>(): Adaptation<T>;
export declare function _AdaptationFactory(): Adaptation<unknown | null>;
export interface _AdaptationNative<T extends unknown | null = unknown | null> extends Adaptation<T> {
    readonly [_flaxDartTypeValue]: _AdaptationNative<T>;
    adapt(theme: Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, defaultValue: (T | DartInput<T>)): T;
    get type(): upstream0.Type;
}
export declare abstract class _AdaptationNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Adaptation<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Adaptation<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:Adaptation", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace _AdaptationFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): Adaptation<T>;
}
declare const _AdaptationBinding: typeof _AdaptationFactory & (new <T extends unknown | null = unknown | null>() => _AdaptationNative<T>);
export declare const Adaptation: typeof _AdaptationBinding & _FlaxInstanceType<Adaptation<unknown | null>> & _FlaxDartType<Adaptation<unknown | null>, readonly ["class", "flax.core/sdk_material#type:Adaptation", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AdaptationNative<_Selected0>) & {
        (): _AdaptationNative<_Selected0>;
        readonly prototype: _AdaptationNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AdaptationNative<_Selected0>>): _AdaptationNative<_Selected0>;
    } & _FlaxInstanceType<_AdaptationNative<_Selected0>> & _FlaxDartType<_AdaptationNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AdaptationNative<_Selected0>) & {
        (): _AdaptationNative<_Selected0>;
        readonly prototype: _AdaptationNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_AdaptationNative<_Selected0>>): _AdaptationNative<_Selected0>;
    } & _FlaxInstanceType<_AdaptationNative<_Selected0>> & _FlaxDartType<_AdaptationNative<_Selected0>> : never : never;
}
export {};
