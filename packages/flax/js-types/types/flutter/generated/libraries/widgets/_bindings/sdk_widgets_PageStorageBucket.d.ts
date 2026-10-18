import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PageStorageBucket extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageBucket": readonly [];
}> {
    readonly __PageStorageBucket: unique symbol;
    readonly [_flaxDartTypeValue]: PageStorageBucket;
}
export interface PageStorageBucket {
    readonly [_flaxDartTypeValue]: PageStorageBucket;
    writeState(context: upstream0.BuildContext, data: unknown | null, options?: {
        identifier?: unknown | null | undefined;
    }): void;
    readState(context: upstream0.BuildContext, options?: {
        identifier?: unknown | null | undefined;
    }): unknown | null;
}
export declare abstract class PageStorageBucket extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageStorageBucket>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PageStorageBucket;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageStorageBucket", readonly [], false];
    constructor();
}
export declare namespace PageStorageBucket {
    function implement(args: [], implementation: {}): PageStorageBucket;
}
