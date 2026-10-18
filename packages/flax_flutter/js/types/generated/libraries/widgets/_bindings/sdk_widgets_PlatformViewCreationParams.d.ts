import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformViewCreationParams extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_view.dart::PlatformViewCreationParams": readonly [];
}> {
    readonly __PlatformViewCreationParams: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformViewCreationParams;
    readonly id: number;
    readonly viewType: string;
    readonly onPlatformViewCreated: ((id: number) => void);
    readonly onFocusChanged: ((value: boolean) => void);
}
export declare namespace _PlatformViewCreationParamsFactory {
    function implement(args: [], implementation: {
        get id(): number;
        get viewType(): string;
        get onPlatformViewCreated(): ((id: number) => void);
        get onFocusChanged(): ((value: boolean) => void);
    }): PlatformViewCreationParams;
}
export declare const PlatformViewCreationParams: typeof _PlatformViewCreationParamsFactory & _FlaxInstanceType<PlatformViewCreationParams> & _FlaxDartType<PlatformViewCreationParams, readonly ["class", "flax.core/sdk_widgets#type:PlatformViewCreationParams", readonly [], false]>;
