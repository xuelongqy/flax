import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RestorableTimeOfDay extends Omit<upstream0.RestorableValue<upstream1.TimeOfDay>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<upstream1.TimeOfDay>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay> | keyof upstream2.RestorableProperty<upstream1.TimeOfDay>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay> | keyof upstream2.RestorableProperty<upstream1.TimeOfDay> | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/material/time.dart::RestorableTimeOfDay": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [upstream1.TimeOfDay];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.TimeOfDay];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableTimeOfDay: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableTimeOfDay;
}
export interface RestorableTimeOfDay {
    readonly [_flaxDartTypeValue]: RestorableTimeOfDay;
    initWithValue(value: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay];
    }>): void;
    didUpdateValue(oldValue: (Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay];
    }>) | null): void;
    createDefaultValue(): upstream1.TimeOfDay;
    fromPrimitives(data: unknown | null): upstream1.TimeOfDay;
    toPrimitives(): unknown | null;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): upstream1.TimeOfDay;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay];
    }>);
}
export declare abstract class RestorableTimeOfDay extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableTimeOfDay>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableTimeOfDay;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RestorableTimeOfDay", readonly [], false];
    constructor(defaultValue: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay];
    }>);
}
export declare namespace RestorableTimeOfDay {
    function implement(args: [defaultValue: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay];
    }>], implementation: {}): RestorableTimeOfDay;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/material/time.dart::RestorableTimeOfDay" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
