import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableEnumN<T extends upstream0.Enum = upstream0.Enum> extends Omit<upstream1.RestorableValue<T | null>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T | null>, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null> | keyof upstream2.RestorableProperty<T | null>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null> | keyof upstream2.RestorableProperty<T | null> | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnumN": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableEnumN: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableEnumN<T>;
    get value(): T | null;
    readonly enabled: boolean;
    readonly state: upstream5.State<upstream6.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    get values(): DartSet<T>;
    initWithValue(value: (T | DartInput<T>) | null): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T | null;
    fromPrimitives(data: unknown | null): T | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: (T | DartInput<T>) | null);
    set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
export declare function _RestorableEnumNFactory<T extends upstream0.Enum = upstream0.Enum>(defaultValue: (T | DartInput<T>) | null, options: {
    values: DartIterableInput<T, (T | DartInput<T>)>;
}): RestorableEnumN<T>;
export declare function _RestorableEnumNFactory(defaultValue: Readonly<{
    "__flaxBound:dart:core::Enum": readonly [];
}> | null, options: {
    values: DartIterableInput<upstream0.Enum, Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }>>;
}): RestorableEnumN<upstream0.Enum>;
export interface _RestorableEnumNNative<T extends upstream0.Enum = upstream0.Enum> extends RestorableEnumN<T> {
    readonly [_flaxDartTypeValue]: _RestorableEnumNNative<T>;
    initWithValue(value: (T | DartInput<T>) | null): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T | null;
    fromPrimitives(data: unknown | null): T | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get values(): DartSet<T>;
    get value(): T | null;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: (T | DartInput<T>) | null);
    set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
export declare abstract class _RestorableEnumNNative<T extends upstream0.Enum = upstream0.Enum> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableEnumN<upstream0.Enum>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableEnumN<upstream0.Enum>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableEnumN", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    });
}
export declare namespace _RestorableEnumNFactory {
    function implement<T extends upstream0.Enum = upstream0.Enum>(args: [defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    }], implementation: {}): RestorableEnumN<T>;
}
declare const _RestorableEnumNBinding: typeof _RestorableEnumNFactory & (new <T extends upstream0.Enum = upstream0.Enum>(defaultValue: Readonly<{
    "__flaxBound:dart:core::Enum": readonly [];
}> | null, options: {
    values: DartIterableInput<upstream0.Enum, Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }>>;
}) => _RestorableEnumNNative<T>);
export declare const RestorableEnumN: typeof _RestorableEnumNBinding & _FlaxInstanceType<RestorableEnumN<upstream0.Enum>> & _FlaxDartType<RestorableEnumN<upstream0.Enum>, readonly ["class", "flax.core/sdk_widgets#type:RestorableEnumN", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "values" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    }) => _RestorableEnumNNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>) | null, options: {
            values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>;
        }): _RestorableEnumNNative<_Selected0>;
        readonly prototype: _RestorableEnumNNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }> | null, options: {
            values: DartIterableInput<upstream0.Enum, Readonly<{
                "__flaxBound:dart:core::Enum": readonly [];
            }>>;
        }], implementation: Partial<_RestorableEnumNNative<_Selected0>>): _RestorableEnumNNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableEnumNNative<_Selected0>> & _FlaxDartType<_RestorableEnumNNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    }) => _RestorableEnumNNative<_Selected0>) & {
        (defaultValue: (_Selected0 | DartInput<_Selected0>) | null, options: {
            values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>;
        }): _RestorableEnumNNative<_Selected0>;
        readonly prototype: _RestorableEnumNNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }> | null, options: {
            values: DartIterableInput<upstream0.Enum, Readonly<{
                "__flaxBound:dart:core::Enum": readonly [];
            }>>;
        }], implementation: Partial<_RestorableEnumNNative<_Selected0>>): _RestorableEnumNNative<_Selected0>;
    } & _FlaxInstanceType<_RestorableEnumNNative<_Selected0>> & _FlaxDartType<_RestorableEnumNNative<_Selected0>> : never : never;
}
export {};
