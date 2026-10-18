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
export interface RestorableEnum<T extends upstream0.Enum = upstream0.Enum> extends Omit<upstream1.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T> | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableEnum: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableEnum<T>;
}
export interface RestorableEnum<T extends upstream0.Enum = upstream0.Enum> {
    readonly [_flaxDartTypeValue]: RestorableEnum<T>;
    initWithValue(value: (T | DartInput<T>)): void;
    didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
    createDefaultValue(): T;
    fromPrimitives(data: unknown | null): T;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get values(): DartSet<T>;
    get value(): T;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: (T | DartInput<T>));
    set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
export declare abstract class RestorableEnum<T extends upstream0.Enum = upstream0.Enum> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableEnum<upstream0.Enum>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableEnum<upstream0.Enum>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableEnum", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }>, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    });
}
export declare namespace RestorableEnum {
    function implement<T extends upstream0.Enum = upstream0.Enum>(args: [defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }>, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    }], implementation: {}): RestorableEnum<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "values" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (abstract new (defaultValue: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }>, options: {
        values: DartIterableInput<upstream0.Enum, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>>;
    }) => RestorableEnum<_Selected0>) & {
        readonly prototype: RestorableEnum<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }>, options: {
            values: DartIterableInput<upstream0.Enum, Readonly<{
                "__flaxBound:dart:core::Enum": readonly [];
            }>>;
        }], implementation: Partial<RestorableEnum<_Selected0>>): RestorableEnum<_Selected0>;
    } & _FlaxInstanceType<RestorableEnum<_Selected0>> & _FlaxDartType<RestorableEnum<_Selected0>> : never : never;
}
export {};
