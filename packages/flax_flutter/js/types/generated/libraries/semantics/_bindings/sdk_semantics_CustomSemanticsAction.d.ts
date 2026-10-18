import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CustomSemanticsAction extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
}> {
    readonly __CustomSemanticsAction: unique symbol;
    readonly [_flaxDartTypeValue]: CustomSemanticsAction;
}
export interface CustomSemanticsAction {
    readonly [_flaxDartTypeValue]: CustomSemanticsAction;
    toString(): string;
    get label(): string | null;
    get hint(): string | null;
    get action(): upstream0.SemanticsAction | null;
}
export declare abstract class CustomSemanticsAction extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomSemanticsAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CustomSemanticsAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:CustomSemanticsAction", readonly [], false];
    constructor(options: {
        label: string;
    });
}
export declare namespace CustomSemanticsAction {
    function implement(args: [options: {
        label: string;
    }], implementation: {}): CustomSemanticsAction;
}
export declare namespace CustomSemanticsAction {
    function getIdentifier(action: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
    }>): number;
}
export declare namespace CustomSemanticsAction {
    function getAction(id: number): CustomSemanticsAction | null;
}
