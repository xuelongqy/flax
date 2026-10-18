import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> extends Omit<upstream1.RestorableProperty<T>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableProperty<T>>, Omit<upstream0.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableProperty<T> | keyof upstream2.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableListenable: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableListenable<T>;
}
export interface RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> {
    readonly [_flaxDartTypeValue]: RestorableListenable<T>;
    initWithValue(value: (T | DartInput<T>)): void;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): T;
    get enabled(): boolean;
    get state(): upstream4.State<upstream5.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableListenable<upstream0.Listenable>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableListenable<upstream0.Listenable>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableListenable", readonly [readonly ["class", "flax.core/flutter#type:Listenable", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract createDefaultValue(): T;
    abstract fromPrimitives(data: unknown | null): T;
    abstract toPrimitives(): unknown | null;
}
export declare namespace RestorableListenable {
    function implement<T extends upstream0.Listenable = upstream0.Listenable>(args: [], implementation: {
        createDefaultValue: (() => (T | DartInput<T>));
        fromPrimitives: ((data: unknown | null) => (T | DartInput<T>));
        toPrimitives: (() => unknown | null);
    }): RestorableListenable<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "state" | "isRegistered" | "hasListeners" | "value" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Listenable] ? (abstract new () => RestorableListenable<_Selected0>) & {
        readonly prototype: RestorableListenable<_Selected0>;
        implement(args: readonly [], implementation: Partial<RestorableListenable<_Selected0>>): RestorableListenable<_Selected0>;
    } & _FlaxInstanceType<RestorableListenable<_Selected0>> & _FlaxDartType<RestorableListenable<_Selected0>> : never : never;
}
export {};
