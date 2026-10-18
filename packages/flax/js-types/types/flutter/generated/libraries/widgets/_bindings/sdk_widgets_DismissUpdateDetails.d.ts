import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DismissUpdateDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissUpdateDetails": readonly [];
}> {
    readonly __DismissUpdateDetails: unique symbol;
    readonly [_flaxDartTypeValue]: DismissUpdateDetails;
}
export interface DismissUpdateDetails {
    readonly [_flaxDartTypeValue]: DismissUpdateDetails;
    get direction(): upstream0.DismissDirection;
    get reached(): boolean;
    get previousReached(): boolean;
    get progress(): number;
}
export declare abstract class DismissUpdateDetails extends _FlaxProxyBase {
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
export declare namespace DismissUpdateDetails {
    function implement(args: [options?: {
        direction?: upstream0.DismissDirection | undefined;
        reached?: boolean | undefined;
        previousReached?: boolean | undefined;
        progress?: number | undefined;
    }], implementation: {}): DismissUpdateDetails;
}
