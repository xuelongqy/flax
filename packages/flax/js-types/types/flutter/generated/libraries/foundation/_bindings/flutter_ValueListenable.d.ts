import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionSelectionStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LiveTextInputStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerModeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_UndoHistoryValue';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueListenable<T extends unknown | null = unknown | null> extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ValueListenable: unique symbol;
    readonly [_flaxDartTypeValue]: ValueListenable<T>;
}
export interface ValueListenable<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: ValueListenable<T>;
}
export declare abstract class ValueListenable<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueListenable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ValueListenable<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:ValueListenable", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract get value(): T;
}
export declare namespace ValueListenable {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        get value(): (T | DartInput<T>);
    }): ValueListenable<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ValueListenable<_Selected0>) & {
        readonly prototype: ValueListenable<_Selected0>;
        implement(args: readonly [], implementation: Partial<ValueListenable<_Selected0>>): ValueListenable<_Selected0>;
    } & _FlaxInstanceType<ValueListenable<_Selected0>> & _FlaxDartType<ValueListenable<_Selected0>> : never : never;
}
export {};
