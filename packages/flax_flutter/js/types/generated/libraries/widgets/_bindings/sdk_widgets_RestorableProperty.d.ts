import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableProperty: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableProperty<T>;
}
export interface RestorableProperty<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: RestorableProperty<T>;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class RestorableProperty<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableProperty<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableProperty", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract createDefaultValue(): T;
    abstract fromPrimitives(data: unknown | null): T;
    abstract initWithValue(value: (T | DartInput<T>)): void;
    abstract toPrimitives(): unknown | null;
}
export declare namespace RestorableProperty {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        createDefaultValue: (() => (T | DartInput<T>));
        fromPrimitives: ((data: unknown | null) => (T | DartInput<T>));
        initWithValue: ((value: T) => void);
        toPrimitives: (() => unknown | null);
    }): RestorableProperty<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "enabled" | "state" | "isRegistered" | "addListener" | "removeListener" | "dispose" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RestorableProperty<_Selected0>) & {
        readonly prototype: RestorableProperty<_Selected0>;
        implement(args: readonly [], implementation: Partial<RestorableProperty<_Selected0>>): RestorableProperty<_Selected0>;
    } & _FlaxInstanceType<RestorableProperty<_Selected0>> & _FlaxDartType<RestorableProperty<_Selected0>> : never : never;
}
export {};
