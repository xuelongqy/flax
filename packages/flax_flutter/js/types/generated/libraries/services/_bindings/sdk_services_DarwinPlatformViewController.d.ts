import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DarwinPlatformViewController extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController": readonly [];
}> {
    readonly __DarwinPlatformViewController: unique symbol;
    readonly [_flaxDartTypeValue]: DarwinPlatformViewController;
}
export interface DarwinPlatformViewController {
    readonly [_flaxDartTypeValue]: DarwinPlatformViewController;
    setLayoutDirection(layoutDirection: upstream0.TextDirection): Promise<void>;
    acceptGesture(): Promise<void>;
    rejectGesture(): Promise<void>;
    dispose(): Promise<void>;
    get id(): number;
}
export declare abstract class DarwinPlatformViewController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DarwinPlatformViewController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DarwinPlatformViewController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DarwinPlatformViewController", readonly [], false];
    constructor(id: number, layoutDirection: upstream0.TextDirection);
}
export declare namespace DarwinPlatformViewController {
    function implement(args: [id: number, layoutDirection: upstream0.TextDirection], implementation: {}): DarwinPlatformViewController;
}
