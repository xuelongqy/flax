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
export interface RestorableStringN extends Omit<upstream0.RestorableValue<string | null>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<string | null>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string | null>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string | null> | keyof upstream1.RestorableProperty<string | null>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string | null> | keyof upstream1.RestorableProperty<string | null> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableStringN": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [string | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [string | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [string | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableStringN: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableStringN;
    get value(): string | null;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: string | null): void;
    didUpdateValue(oldValue: string | null): void;
    createDefaultValue(): string | null;
    fromPrimitives(serialized: unknown | null): string | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: string | null);
}
export declare function _RestorableStringNFactory(defaultValue: string | null): RestorableStringN;
export interface _RestorableStringNNative extends RestorableStringN {
    readonly [_flaxDartTypeValue]: _RestorableStringNNative;
    initWithValue(value: string | null): void;
    didUpdateValue(oldValue: string | null): void;
    createDefaultValue(): string | null;
    fromPrimitives(serialized: unknown | null): string | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): string | null;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: string | null);
}
export declare abstract class _RestorableStringNNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableStringN>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableStringN;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableStringN", readonly [], false];
    constructor(defaultValue: string | null);
}
export declare namespace _RestorableStringNFactory {
    function implement(args: [defaultValue: string | null], implementation: {}): RestorableStringN;
}
declare const _RestorableStringNBinding: typeof _RestorableStringNFactory & (new (defaultValue: string | null) => _RestorableStringNNative);
export declare const RestorableStringN: typeof _RestorableStringNBinding & _FlaxInstanceType<RestorableStringN> & _FlaxDartType<RestorableStringN, readonly ["class", "flax.core/sdk_widgets#type:RestorableStringN", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableStringN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
