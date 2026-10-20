import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorableDateTime extends Omit<upstream0.RestorableValue<upstream1.DateTime>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<upstream1.DateTime>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime> | keyof upstream2.RestorableProperty<upstream1.DateTime>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime> | keyof upstream2.RestorableProperty<upstream1.DateTime> | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTime": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [upstream1.DateTime];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.DateTime];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableDateTime: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableDateTime;
    get value(): upstream1.DateTime;
    readonly enabled: boolean;
    readonly state: upstream5.State<upstream6.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): void;
    didUpdateValue(oldValue: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): void;
    createDefaultValue(): upstream1.DateTime;
    fromPrimitives(data: unknown | null): upstream1.DateTime;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set value(value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>);
}
export declare function _RestorableDateTimeFactory(defaultValue: DartInput<Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>>): RestorableDateTime;
export interface _RestorableDateTimeNative extends RestorableDateTime {
    readonly [_flaxDartTypeValue]: _RestorableDateTimeNative;
    initWithValue(value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): void;
    didUpdateValue(oldValue: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null): void;
    createDefaultValue(): upstream1.DateTime;
    fromPrimitives(data: unknown | null): upstream1.DateTime;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): upstream1.DateTime;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>);
}
export declare abstract class _RestorableDateTimeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableDateTime>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableDateTime;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTime", readonly [], false];
    constructor(defaultValue: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>);
}
export declare namespace _RestorableDateTimeFactory {
    function implement(args: [defaultValue: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>], implementation: {}): RestorableDateTime;
}
declare const _RestorableDateTimeBinding: typeof _RestorableDateTimeFactory & (new (defaultValue: DartInput<Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>>) => _RestorableDateTimeNative);
export declare const RestorableDateTime: typeof _RestorableDateTimeBinding & _FlaxInstanceType<RestorableDateTime> & _FlaxDartType<RestorableDateTime, readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTime", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTime" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
