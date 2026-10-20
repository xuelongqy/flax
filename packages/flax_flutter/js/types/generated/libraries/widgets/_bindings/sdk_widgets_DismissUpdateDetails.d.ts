import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DismissUpdateDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissUpdateDetails": readonly [];
}> {
    readonly __DismissUpdateDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DismissUpdateDetails;
    readonly direction: upstream0.DismissDirection;
    readonly reached: boolean;
    readonly previousReached: boolean;
    readonly progress: number;
}
export declare function _DismissUpdateDetailsFactory(options?: {
    direction?: upstream0.DismissDirection | undefined;
    reached?: boolean | undefined;
    previousReached?: boolean | undefined;
    progress?: number | undefined;
}): DismissUpdateDetails;
export interface _DismissUpdateDetailsNative extends DismissUpdateDetails {
    readonly [_flaxDartTypeValue]: _DismissUpdateDetailsNative;
    get direction(): upstream0.DismissDirection;
    get reached(): boolean;
    get previousReached(): boolean;
    get progress(): number;
}
export declare abstract class _DismissUpdateDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DismissUpdateDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DismissUpdateDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false];
    constructor(options?: {
        direction?: upstream0.DismissDirection | undefined;
        reached?: boolean | undefined;
        previousReached?: boolean | undefined;
        progress?: number | undefined;
    });
}
export declare namespace _DismissUpdateDetailsFactory {
    function implement(args: [options?: {
        direction?: upstream0.DismissDirection | undefined;
        reached?: boolean | undefined;
        previousReached?: boolean | undefined;
        progress?: number | undefined;
    }], implementation: {}): DismissUpdateDetails;
}
declare const _DismissUpdateDetailsBinding: typeof _DismissUpdateDetailsFactory & (new (options?: {
    direction?: upstream0.DismissDirection | undefined;
    reached?: boolean | undefined;
    previousReached?: boolean | undefined;
    progress?: number | undefined;
}) => _DismissUpdateDetailsNative);
export declare const DismissUpdateDetails: typeof _DismissUpdateDetailsBinding & _FlaxInstanceType<DismissUpdateDetails> & _FlaxDartType<DismissUpdateDetails, readonly ["class", "flax.core/sdk_widgets#type:DismissUpdateDetails", readonly [], false]>;
export {};
