import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonSegment<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/material/segmented_button.dart::ButtonSegment": readonly [T];
}> {
    readonly __ButtonSegment: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonSegment<T>;
    readonly value: T;
    readonly icon: Widget | null;
    readonly label: Widget | null;
    readonly tooltip: string | null;
    readonly enabled: boolean;
}
export declare function _ButtonSegmentFactory<T extends unknown | null = unknown | null>(options: {
    value: (T | _FlaxDartOutput<T>);
    icon?: Widget | null | undefined;
    label?: Widget | null | undefined;
    tooltip?: string | null | undefined;
    enabled?: boolean | undefined;
}): ButtonSegment<T>;
export declare function _ButtonSegmentFactory(options: {
    value: unknown | null;
    icon?: Widget | null | undefined;
    label?: Widget | null | undefined;
    tooltip?: string | null | undefined;
    enabled?: boolean | undefined;
}): ButtonSegment<unknown | null>;
export interface _ButtonSegmentNative<T extends unknown | null = unknown | null> extends ButtonSegment<T> {
    readonly [_flaxDartTypeValue]: _ButtonSegmentNative<T>;
    get value(): T;
    get icon(): Widget | null;
    get label(): Widget | null;
    get tooltip(): string | null;
    get enabled(): boolean;
}
export declare abstract class _ButtonSegmentNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
export declare namespace _ButtonSegmentFactory {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    }], implementation: {}): ButtonSegment<T>;
}
declare const _ButtonSegmentBinding: typeof _ButtonSegmentFactory & (new <T extends unknown | null = unknown | null>(options: {
    value: unknown | null;
    icon?: Widget | null | undefined;
    label?: Widget | null | undefined;
    tooltip?: string | null | undefined;
    enabled?: boolean | undefined;
}) => _ButtonSegmentNative<T>);
export declare const ButtonSegment: typeof _ButtonSegmentBinding & _FlaxInstanceType<ButtonSegment<unknown | null>> & _FlaxDartType<ButtonSegment<unknown | null>, readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    }) => _ButtonSegmentNative<_Selected0>) & {
        (options: {
            value: (_Selected0 | DartInput<_Selected0>);
            icon?: Widget | null | undefined;
            label?: Widget | null | undefined;
            tooltip?: string | null | undefined;
            enabled?: boolean | undefined;
        }): _ButtonSegmentNative<_Selected0>;
        readonly prototype: _ButtonSegmentNative<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            icon?: Widget | null | undefined;
            label?: Widget | null | undefined;
            tooltip?: string | null | undefined;
            enabled?: boolean | undefined;
        }], implementation: Partial<_ButtonSegmentNative<_Selected0>>): _ButtonSegmentNative<_Selected0>;
    } & _FlaxInstanceType<_ButtonSegmentNative<_Selected0>> & _FlaxDartType<_ButtonSegmentNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        value: unknown | null;
        icon?: Widget | null | undefined;
        label?: Widget | null | undefined;
        tooltip?: string | null | undefined;
        enabled?: boolean | undefined;
    }) => _ButtonSegmentNative<_Selected0>) & {
        (options: {
            value: (_Selected0 | DartInput<_Selected0>);
            icon?: Widget | null | undefined;
            label?: Widget | null | undefined;
            tooltip?: string | null | undefined;
            enabled?: boolean | undefined;
        }): _ButtonSegmentNative<_Selected0>;
        readonly prototype: _ButtonSegmentNative<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            icon?: Widget | null | undefined;
            label?: Widget | null | undefined;
            tooltip?: string | null | undefined;
            enabled?: boolean | undefined;
        }], implementation: Partial<_ButtonSegmentNative<_Selected0>>): _ButtonSegmentNative<_Selected0>;
    } & _FlaxInstanceType<_ButtonSegmentNative<_Selected0>> & _FlaxDartType<_ButtonSegmentNative<_Selected0>> : never : never;
}
export {};
