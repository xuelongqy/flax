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
export interface RestorableNum<T extends number = number> extends Omit<upstream0.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNum": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [T];
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
    readonly __RestorableNum: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableNum<T>;
    get value(): T;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: (T | DartInput<T>)): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T;
    fromPrimitives(serialized: unknown | null): T;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: (T | DartInput<T>));
}
export declare function _RestorableNumFactory<T extends number = number>(defaultValue: (T | DartInput<T>)): RestorableNum<T>;
export declare function _RestorableNumFactory(defaultValue: number): RestorableNum<number>;
export interface _RestorableNumNative<T extends number = number> extends RestorableNum<T> {
    readonly [_flaxDartTypeValue]: _RestorableNumNative<T>;
    initWithValue(value: (T | DartInput<T>)): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T;
    fromPrimitives(serialized: unknown | null): T;
    toPrimitives(): {};
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
export declare abstract class _RestorableNumNative<T extends number = number> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableNum<number>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableNum<number>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableNum", readonly [readonly ["num", null, readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(defaultValue: number);
}
export declare namespace _RestorableNumFactory {
    function implement<T extends number = number>(args: [defaultValue: number], implementation: {}): RestorableNum<T>;
}
declare const _RestorableNumBinding: typeof _RestorableNumFactory & (new <T extends number = number>(defaultValue: number) => _RestorableNumNative<T>);
export declare const RestorableNum: typeof _RestorableNumBinding & _FlaxInstanceType<RestorableNum<number>> & _FlaxDartType<RestorableNum<number>, readonly ["class", "flax.core/sdk_widgets#type:RestorableNum", readonly [readonly ["num", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNum" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number] ? (new (defaultValue: number) => _RestorableNumNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNative<_Selected0>;
        readonly prototype: _RestorableNumNative<_Selected0>;
        implement(args: readonly [number], implementation: Partial<_RestorableNumNative<_Selected0>>): _RestorableNumNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableNumNative<_Selected0>> & _FlaxDartType<_RestorableNumNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number] ? (new (defaultValue: number) => _RestorableNumNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNative<_Selected0>;
        readonly prototype: _RestorableNumNative<_Selected0>;
        implement(args: readonly [number], implementation: Partial<_RestorableNumNative<_Selected0>>): _RestorableNumNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableNumNative<_Selected0>> & _FlaxDartType<_RestorableNumNative<_Selected0>> : never : never;
}
export {};
