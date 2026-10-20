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
export interface RestorableString extends Omit<upstream0.RestorableValue<string>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<string>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string> | keyof upstream1.RestorableProperty<string>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string> | keyof upstream1.RestorableProperty<string> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableString": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [string];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [string];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [string];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [string];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableString: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableString;
    get value(): string;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: string): void;
    didUpdateValue(oldValue: string | null): void;
    createDefaultValue(): string;
    fromPrimitives(serialized: unknown | null): string;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: string);
}
export declare function _RestorableStringFactory(defaultValue: string): RestorableString;
export interface _RestorableStringNative extends RestorableString {
    readonly [_flaxDartTypeValue]: _RestorableStringNative;
    initWithValue(value: string): void;
    didUpdateValue(oldValue: string | null): void;
    createDefaultValue(): string;
    fromPrimitives(serialized: unknown | null): string;
    toPrimitives(): {};
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): string;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: string);
}
export declare abstract class _RestorableStringNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableString>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableString;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableString", readonly [], false];
    constructor(defaultValue: string);
}
export declare namespace _RestorableStringFactory {
    function implement(args: [defaultValue: string], implementation: {}): RestorableString;
}
declare const _RestorableStringBinding: typeof _RestorableStringFactory & (new (defaultValue: string) => _RestorableStringNative);
export declare const RestorableString: typeof _RestorableStringBinding & _FlaxInstanceType<RestorableString> & _FlaxDartType<RestorableString, readonly ["class", "flax.core/sdk_widgets#type:RestorableString", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableString" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
