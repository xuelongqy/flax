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
export interface RestorableBoolN extends Omit<upstream0.RestorableValue<boolean | null>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<boolean | null>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean | null>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean | null> | keyof upstream1.RestorableProperty<boolean | null>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean | null> | keyof upstream1.RestorableProperty<boolean | null> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBoolN": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [boolean | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [boolean | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [boolean | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableBoolN: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableBoolN;
    get value(): boolean | null;
    readonly enabled: boolean;
    readonly state: upstream4.State<upstream5.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: boolean | null): void;
    didUpdateValue(oldValue: boolean | null): void;
    createDefaultValue(): boolean | null;
    fromPrimitives(serialized: unknown | null): boolean | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: boolean | null);
}
export declare function _RestorableBoolNFactory(defaultValue: boolean | null): RestorableBoolN;
export interface _RestorableBoolNNative extends RestorableBoolN {
    readonly [_flaxDartTypeValue]: _RestorableBoolNNative;
    initWithValue(value: boolean | null): void;
    didUpdateValue(oldValue: boolean | null): void;
    createDefaultValue(): boolean | null;
    fromPrimitives(serialized: unknown | null): boolean | null;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): boolean | null;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: boolean | null);
}
export declare abstract class _RestorableBoolNNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableBoolN>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableBoolN;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableBoolN", readonly [], false];
    constructor(defaultValue: boolean | null);
}
export declare namespace _RestorableBoolNFactory {
    function implement(args: [defaultValue: boolean | null], implementation: {}): RestorableBoolN;
}
declare const _RestorableBoolNBinding: typeof _RestorableBoolNFactory & (new (defaultValue: boolean | null) => _RestorableBoolNNative);
export declare const RestorableBoolN: typeof _RestorableBoolNBinding & _FlaxInstanceType<RestorableBoolN> & _FlaxDartType<RestorableBoolN, readonly ["class", "flax.core/sdk_widgets#type:RestorableBoolN", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBoolN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
