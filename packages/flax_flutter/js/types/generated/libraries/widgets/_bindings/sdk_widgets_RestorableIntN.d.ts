import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNumN';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNumN';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RestorableIntN extends Omit<upstream0.RestorableNumN<number | null>, _flaxOwnMembers0>, Omit<upstream1.RestorableValue<number | null>, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null>>, Omit<upstream2.RestorableProperty<number | null>, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null> | keyof upstream2.RestorableProperty<number | null>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null> | keyof upstream2.RestorableProperty<number | null> | keyof upstream3.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableIntN": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN": readonly [number | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [number | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [number | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [number | null];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableIntN: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableIntN;
}
export interface RestorableIntN {
    readonly [_flaxDartTypeValue]: RestorableIntN;
    createDefaultValue(): number | null;
    didUpdateValue(oldValue: number | null): void;
    fromPrimitives(serialized: unknown | null): number | null;
    toPrimitives(): unknown | null;
    initWithValue(value: number | null): void;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): number | null;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
    set value(value: number | null);
}
export declare abstract class RestorableIntN extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableIntN>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableIntN;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableIntN", readonly [], false];
    constructor(defaultValue: number | null);
}
export declare namespace RestorableIntN {
    function implement(args: [defaultValue: number | null], implementation: {}): RestorableIntN;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "createDefaultValue" | "didUpdateValue" | "fromPrimitives" | "toPrimitives" | "initWithValue" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableIntN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
