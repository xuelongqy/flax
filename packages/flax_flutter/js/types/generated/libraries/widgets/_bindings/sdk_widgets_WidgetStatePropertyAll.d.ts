import { type FlaxInstanceType as _FlaxInstanceType, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStatePropertyAll<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T];
}> {
    readonly __WidgetStatePropertyAll: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStatePropertyAll<T>;
}
export interface WidgetStatePropertyAll<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: WidgetStatePropertyAll<T>;
    resolve(states: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>): T;
    toString(): string;
    get value(): T;
}
export declare abstract class WidgetStatePropertyAll<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStatePropertyAll<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStatePropertyAll<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(value: unknown | null);
}
export declare namespace WidgetStatePropertyAll {
    function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): WidgetStatePropertyAll<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "resolve" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => WidgetStatePropertyAll<_Selected0>) & {
        readonly prototype: WidgetStatePropertyAll<_Selected0>;
        implement(args: readonly [unknown | null], implementation: Partial<WidgetStatePropertyAll<_Selected0>>): WidgetStatePropertyAll<_Selected0>;
    } & _FlaxInstanceType<WidgetStatePropertyAll<_Selected0>> & _FlaxDartType<WidgetStatePropertyAll<_Selected0>> : never : never;
}
export {};
