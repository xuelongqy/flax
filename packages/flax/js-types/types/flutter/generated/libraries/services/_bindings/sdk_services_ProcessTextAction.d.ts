import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ProcessTextAction extends Readonly<{
    "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextAction": readonly [];
}> {
    readonly __ProcessTextAction: unique symbol;
    readonly [_flaxDartTypeValue]: ProcessTextAction;
}
export interface ProcessTextAction {
    readonly [_flaxDartTypeValue]: ProcessTextAction;
    get id(): string;
    get label(): string;
}
export declare abstract class ProcessTextAction extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ProcessTextAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ProcessTextAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ProcessTextAction", readonly [], false];
    constructor(id: string, label: string);
}
export declare namespace ProcessTextAction {
    function implement(args: [id: string, label: string], implementation: {}): ProcessTextAction;
}
