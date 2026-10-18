import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableChangeNotifier<T extends upstream0.ChangeNotifier = upstream0.ChangeNotifier> extends Omit<upstream1.RestorableListenable<T>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream1.RestorableListenable<T>>, Omit<upstream0.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableListenable<T> | keyof upstream2.RestorableProperty<T>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableListenable<T> | keyof upstream2.RestorableProperty<T> | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableChangeNotifier: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableChangeNotifier<T>;
}
export interface RestorableChangeNotifier<T extends upstream0.ChangeNotifier = upstream0.ChangeNotifier> {
    readonly [_flaxDartTypeValue]: RestorableChangeNotifier<T>;
    initWithValue(value: (T | DartInput<T>)): void;
    dispose(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): T;
    get enabled(): boolean;
    get state(): upstream5.State<upstream6.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class RestorableChangeNotifier<T extends upstream0.ChangeNotifier = upstream0.ChangeNotifier> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableChangeNotifier<upstream0.ChangeNotifier>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableChangeNotifier<upstream0.ChangeNotifier>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableChangeNotifier", readonly [readonly ["class", "flax.core/sdk_foundation#type:ChangeNotifier", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract createDefaultValue(): T;
    abstract fromPrimitives(data: unknown | null): T;
    abstract toPrimitives(): unknown | null;
}
export declare namespace RestorableChangeNotifier {
    function implement<T extends upstream0.ChangeNotifier = upstream0.ChangeNotifier>(args: [], implementation: {
        createDefaultValue: (() => (T | DartInput<T>));
        fromPrimitives: ((data: unknown | null) => (T | DartInput<T>));
        toPrimitives: (() => unknown | null);
    }): RestorableChangeNotifier<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.ChangeNotifier] ? (abstract new () => RestorableChangeNotifier<_Selected0>) & {
        readonly prototype: RestorableChangeNotifier<_Selected0>;
        implement(args: readonly [], implementation: Partial<RestorableChangeNotifier<_Selected0>>): RestorableChangeNotifier<_Selected0>;
    } & _FlaxInstanceType<RestorableChangeNotifier<_Selected0>> & _FlaxDartType<RestorableChangeNotifier<_Selected0>> : never : never;
}
export {};
