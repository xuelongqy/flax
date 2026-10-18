import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopEntry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [T];
}> {
    readonly __PopEntry: unique symbol;
    readonly [_flaxDartTypeValue]: PopEntry<T>;
}
export interface PopEntry<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: PopEntry<T>;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    toString(): string;
}
export declare abstract class PopEntry<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PopEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PopEntry<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PopEntry", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    abstract get canPopNotifier(): upstream0.ValueListenable<boolean>;
}
export declare namespace PopEntry {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        get canPopNotifier(): Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
    }): PopEntry<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => PopEntry<_Selected0>) & {
        readonly prototype: PopEntry<_Selected0>;
        implement(args: readonly [], implementation: Partial<PopEntry<_Selected0>>): PopEntry<_Selected0>;
    } & _FlaxInstanceType<PopEntry<_Selected0>> & _FlaxDartType<PopEntry<_Selected0>> : never : never;
}
export {};
