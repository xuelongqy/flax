import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueNotifier<T extends unknown | null = unknown | null> extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}> {
    readonly __ValueNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: ValueNotifier<T>;
    readonly hasListeners: boolean;
    get value(): T;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toString(): string;
    set value(value: (T | DartInput<T>));
}
export declare function _ValueNotifierFactory<T extends unknown | null = unknown | null>(_value: (T | _FlaxDartOutput<T>)): ValueNotifier<T>;
export declare function _ValueNotifierFactory(_value: unknown | null): ValueNotifier<unknown | null>;
export interface _ValueNotifierNative<T extends unknown | null = unknown | null> extends ValueNotifier<T> {
    readonly [_flaxDartTypeValue]: _ValueNotifierNative<T>;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toString(): string;
    get value(): T;
    get hasListeners(): boolean;
    set value(value: (T | DartInput<T>));
}
export declare abstract class _ValueNotifierNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueNotifier<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ValueNotifier<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_value: unknown | null);
}
export declare namespace _ValueNotifierFactory {
    function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): ValueNotifier<T>;
}
declare const _ValueNotifierBinding: typeof _ValueNotifierFactory & (new <T extends unknown | null = unknown | null>(_value: unknown | null) => _ValueNotifierNative<T>);
export declare const ValueNotifier: typeof _ValueNotifierBinding & _FlaxInstanceType<ValueNotifier<unknown | null>> & _FlaxDartType<ValueNotifier<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "value" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _ValueNotifierNative<_Selected0>) & {
        (_value: (_Selected0 | DartInput<_Selected0>)): _ValueNotifierNative<_Selected0>;
        readonly prototype: _ValueNotifierNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_ValueNotifierNative<_Selected0>>): _ValueNotifierNative<_Selected0>;
    } & _FlaxInstanceType<_ValueNotifierNative<_Selected0>> & _FlaxDartType<_ValueNotifierNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _ValueNotifierNative<_Selected0>) & {
        (_value: (_Selected0 | DartInput<_Selected0>)): _ValueNotifierNative<_Selected0>;
        readonly prototype: _ValueNotifierNative<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<_ValueNotifierNative<_Selected0>>): _ValueNotifierNative<_Selected0>;
    } & _FlaxInstanceType<_ValueNotifierNative<_Selected0>> & _FlaxDartType<_ValueNotifierNative<_Selected0>> : never : never;
}
export {};
