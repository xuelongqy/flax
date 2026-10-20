import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableNumN<T extends number | null = number | null> extends Omit<upstream0.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableNumN: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableNumN<T>;
    get value(): T;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: (T | DartInput<T>)): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T;
    fromPrimitives(serialized: unknown | null): T;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: (T | DartInput<T>));
}
export declare function _RestorableNumNFactory<T extends number | null = number | null>(defaultValue: (T | DartInput<T>)): RestorableNumN<T>;
export declare function _RestorableNumNFactory(defaultValue: number | null): RestorableNumN<number | null>;
export interface _RestorableNumNNative<T extends number | null = number | null> extends RestorableNumN<T> {
    readonly [_flaxDartTypeValue]: _RestorableNumNNative<T>;
    initWithValue(value: (T | DartInput<T>)): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T;
    fromPrimitives(serialized: unknown | null): T;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): T;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: (T | DartInput<T>));
}
export declare abstract class _RestorableNumNNative<T extends number | null = number | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableNumN<number | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableNumN<number | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableNumN", readonly [readonly ["num", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(defaultValue: number | null);
}
export declare namespace _RestorableNumNFactory {
    function implement<T extends number | null = number | null>(args: [defaultValue: number | null], implementation: {}): RestorableNumN<T>;
}
declare const _RestorableNumNBinding: typeof _RestorableNumNFactory & (new <T extends number | null = number | null>(defaultValue: number | null) => _RestorableNumNNative<T>);
export declare const RestorableNumN: typeof _RestorableNumNBinding & _FlaxInstanceType<RestorableNumN<number | null>> & _FlaxDartType<RestorableNumN<number | null>, readonly ["class", "flax.core/sdk_widgets#type:RestorableNumN", readonly [readonly ["num", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number | null] ? (new (defaultValue: number | null) => _RestorableNumNNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNNative<_Selected0>;
        readonly prototype: _RestorableNumNNative<_Selected0>;
        implement(args: readonly [number | null], implementation: Partial<_RestorableNumNNative<_Selected0>>): _RestorableNumNNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableNumNNative<_Selected0>> & _FlaxDartType<_RestorableNumNNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number | null] ? (new (defaultValue: number | null) => _RestorableNumNNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNNative<_Selected0>;
        readonly prototype: _RestorableNumNNative<_Selected0>;
        implement(args: readonly [number | null], implementation: Partial<_RestorableNumNNative<_Selected0>>): _RestorableNumNNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableNumNNative<_Selected0>> & _FlaxDartType<_RestorableNumNNative<_Selected0>> : never : never;
}
export {};
