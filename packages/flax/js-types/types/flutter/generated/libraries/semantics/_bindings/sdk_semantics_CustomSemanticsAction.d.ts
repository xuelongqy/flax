import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CustomSemanticsAction extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
}> {
    readonly __CustomSemanticsAction: unique symbol;
    readonly [_flaxDartTypeValue]: CustomSemanticsAction;
    readonly label: string | null;
    readonly hint: string | null;
    readonly action: upstream0.SemanticsAction | null;
    toString(): string;
}
export declare function _CustomSemanticsActionFactory(options: {
    label: string;
}): CustomSemanticsAction;
export declare namespace _CustomSemanticsActionFactory {
    function overridingAction(options: {
        hint: string;
        action: Readonly<{
            "__flaxBound:dart:ui::SemanticsAction": readonly [];
        }>;
    }): CustomSemanticsAction;
}
export interface _CustomSemanticsActionNative extends CustomSemanticsAction {
    readonly [_flaxDartTypeValue]: _CustomSemanticsActionNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            label: string;
        }) => void;
        "overridingAction": (options: {
            hint: string;
            action: Readonly<{
                "__flaxBound:dart:ui::SemanticsAction": readonly [];
            }>;
        }) => void;
    };
    toString(): string;
    get label(): string | null;
    get hint(): string | null;
    get action(): upstream0.SemanticsAction | null;
}
export declare abstract class _CustomSemanticsActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomSemanticsAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CustomSemanticsAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false];
    constructor(options: {
        label: string;
    });
    constructor(call: _FlaxProxySuper<_CustomSemanticsActionNative>);
}
export declare namespace _CustomSemanticsActionFactory {
    function implement(args: [options: {
        label: string;
    }], implementation: {}): CustomSemanticsAction;
}
declare const _CustomSemanticsActionBinding: typeof _CustomSemanticsActionFactory & (new (options: {
    label: string;
}) => _CustomSemanticsActionNative) & (new (call: _FlaxProxySuper<_CustomSemanticsActionNative>) => _CustomSemanticsActionNative);
export declare namespace _CustomSemanticsActionFactory {
    function getIdentifier(action: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
    }>): number;
}
export declare namespace _CustomSemanticsActionFactory {
    function getAction(id: number): CustomSemanticsAction | null;
}
export declare const CustomSemanticsAction: typeof _CustomSemanticsActionBinding & _FlaxInstanceType<CustomSemanticsAction> & _FlaxDartType<CustomSemanticsAction, readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false]>;
export {};
