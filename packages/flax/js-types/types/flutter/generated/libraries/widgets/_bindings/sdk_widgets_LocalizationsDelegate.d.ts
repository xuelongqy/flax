import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocalizationsDelegate<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [T];
}> {
    readonly __LocalizationsDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: LocalizationsDelegate<T>;
}
export interface LocalizationsDelegate<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: LocalizationsDelegate<T>;
    toString(): string;
    get type(): upstream1.Type;
}
export declare abstract class LocalizationsDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalizationsDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LocalizationsDelegate<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalizationsDelegate", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract isSupported(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): boolean;
    abstract load(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>): Promise<T>;
    abstract shouldReload(old: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [T];
    }>): boolean;
}
export declare namespace LocalizationsDelegate {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        isSupported: ((locale: upstream2.Locale) => boolean);
        load: ((locale: upstream2.Locale) => Promise<(T | DartInput<T>)>);
        shouldReload: ((old: LocalizationsDelegate<T>) => boolean);
    }): LocalizationsDelegate<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => LocalizationsDelegate<_Selected0>) & {
        readonly prototype: LocalizationsDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<LocalizationsDelegate<_Selected0>>): LocalizationsDelegate<_Selected0>;
    } & _FlaxInstanceType<LocalizationsDelegate<_Selected0>> & _FlaxDartType<LocalizationsDelegate<_Selected0>> : never : never;
}
export {};
