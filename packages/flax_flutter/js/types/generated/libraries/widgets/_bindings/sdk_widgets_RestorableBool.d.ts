import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorableBool extends Omit<upstream0.RestorableValue<boolean>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<boolean>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean> | keyof upstream1.RestorableProperty<boolean>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean> | keyof upstream1.RestorableProperty<boolean> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBool": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [boolean];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [boolean];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [boolean];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [boolean];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableBool: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableBool;
    get value(): boolean;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: boolean): void;
    didUpdateValue(oldValue: boolean | null): void;
    createDefaultValue(): boolean;
    fromPrimitives(serialized: unknown | null): boolean;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: boolean);
}
export declare function _RestorableBoolFactory(defaultValue: boolean): RestorableBool;
export interface _RestorableBoolNative extends RestorableBool {
    readonly [_flaxDartTypeValue]: _RestorableBoolNative;
    initWithValue(value: boolean): void;
    didUpdateValue(oldValue: boolean | null): void;
    createDefaultValue(): boolean;
    fromPrimitives(serialized: unknown | null): boolean;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): boolean;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: boolean);
}
export declare abstract class _RestorableBoolNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableBool>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableBool;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableBool", readonly [], false];
    constructor(defaultValue: boolean);
}
export declare namespace _RestorableBoolFactory {
    function implement(args: [defaultValue: boolean], implementation: {}): RestorableBool;
}
declare const _RestorableBoolBinding: typeof _RestorableBoolFactory & (new (defaultValue: boolean) => _RestorableBoolNative);
export declare const RestorableBool: typeof _RestorableBoolBinding & _FlaxInstanceType<RestorableBool> & _FlaxDartType<RestorableBool, readonly ["class", "flax.core/sdk_widgets#type:RestorableBool", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBool" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
