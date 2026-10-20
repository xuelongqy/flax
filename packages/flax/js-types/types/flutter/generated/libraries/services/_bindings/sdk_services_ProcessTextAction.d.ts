import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ProcessTextAction extends Readonly<{
    "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextAction": readonly [];
}> {
    readonly __ProcessTextAction: unique symbol;
    readonly [_flaxDartTypeValue]: ProcessTextAction;
    readonly id: string;
    readonly label: string;
}
export declare function _ProcessTextActionFactory(id: string, label: string): ProcessTextAction;
export interface _ProcessTextActionNative extends ProcessTextAction {
    readonly [_flaxDartTypeValue]: _ProcessTextActionNative;
    get id(): string;
    get label(): string;
}
export declare abstract class _ProcessTextActionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ProcessTextAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ProcessTextAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false];
    constructor(id: string, label: string);
}
export declare namespace _ProcessTextActionFactory {
    function implement(args: [id: string, label: string], implementation: {}): ProcessTextAction;
}
declare const _ProcessTextActionBinding: typeof _ProcessTextActionFactory & (new (id: string, label: string) => _ProcessTextActionNative);
export declare const ProcessTextAction: typeof _ProcessTextActionBinding & _FlaxInstanceType<ProcessTextAction> & _FlaxDartType<ProcessTextAction, readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false]>;
export {};
