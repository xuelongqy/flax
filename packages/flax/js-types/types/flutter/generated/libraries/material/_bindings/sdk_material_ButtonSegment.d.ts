import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonSegment<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/material/segmented_button.dart::ButtonSegment": readonly [T];
}> {
    readonly __ButtonSegment: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonSegment<T>;
}
export interface ButtonSegment<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: ButtonSegment<T>;
    get value(): T;
    get icon(): Widget | null;
    get label(): Widget | null;
    get tooltip(): string | null;
    get enabled(): boolean;
}
export declare abstract class ButtonSegment<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonSegment<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ButtonSegment<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    });
}
export declare namespace ButtonSegment {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    }], implementation: {}): ButtonSegment<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    }) => ButtonSegment<_Selected0>) & {
        readonly prototype: ButtonSegment<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            icon?: Widget | null | undefined;
            label?: Widget | null | undefined;
            tooltip?: string | null | undefined;
            enabled?: boolean | undefined;
        }], implementation: Partial<ButtonSegment<_Selected0>>): ButtonSegment<_Selected0>;
    } & _FlaxInstanceType<ButtonSegment<_Selected0>> & _FlaxDartType<ButtonSegment<_Selected0>> : never : never;
}
export {};
