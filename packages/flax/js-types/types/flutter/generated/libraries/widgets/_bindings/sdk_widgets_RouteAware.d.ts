import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RouteAware extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [];
}> {
    readonly __RouteAware: unique symbol;
    readonly [_flaxDartTypeValue]: RouteAware;
}
export interface RouteAware {
    readonly [_flaxDartTypeValue]: RouteAware;
    didPopNext(): void;
    didPush(): void;
    didPop(): void;
    didPushNext(): void;
}
export declare abstract class RouteAware extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteAware>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RouteAware;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteAware", readonly [], false];
    constructor();
}
export declare namespace RouteAware {
    function implement(args: [], implementation: {}): RouteAware;
}
