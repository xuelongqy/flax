import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ToolbarOptions extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
}> {
    readonly __ToolbarOptions: unique symbol;
    readonly [_flaxDartTypeValue]: ToolbarOptions;
    readonly copy: boolean;
    readonly cut: boolean;
    readonly paste: boolean;
    readonly selectAll: boolean;
}
export declare function _ToolbarOptionsFactory(options?: {
    copy?: boolean | undefined;
    cut?: boolean | undefined;
    paste?: boolean | undefined;
    selectAll?: boolean | undefined;
}): ToolbarOptions;
export interface _ToolbarOptionsNative extends ToolbarOptions {
    readonly [_flaxDartTypeValue]: _ToolbarOptionsNative;
    get copy(): boolean;
    get cut(): boolean;
    get paste(): boolean;
    get selectAll(): boolean;
}
export declare abstract class _ToolbarOptionsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ToolbarOptions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ToolbarOptions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ToolbarOptions", readonly [], false];
    constructor(options?: {
        copy?: boolean | undefined;
        cut?: boolean | undefined;
        paste?: boolean | undefined;
        selectAll?: boolean | undefined;
    });
}
export declare namespace _ToolbarOptionsFactory {
    function implement(args: [options?: {
        copy?: boolean | undefined;
        cut?: boolean | undefined;
        paste?: boolean | undefined;
        selectAll?: boolean | undefined;
    }], implementation: {}): ToolbarOptions;
}
declare const _ToolbarOptionsBinding: typeof _ToolbarOptionsFactory & (new (options?: {
    copy?: boolean | undefined;
    cut?: boolean | undefined;
    paste?: boolean | undefined;
    selectAll?: boolean | undefined;
}) => _ToolbarOptionsNative);
export declare namespace _ToolbarOptionsFactory {
    const empty: ToolbarOptions;
}
export declare const ToolbarOptions: typeof _ToolbarOptionsBinding & _FlaxInstanceType<ToolbarOptions> & _FlaxDartType<ToolbarOptions, readonly ["class", "flax.core/sdk_widgets#type:ToolbarOptions", readonly [], false]>;
export {};
