import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
export interface FlaxNavigatorObserver extends upstream0.NavigatorObserver, Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxNavigatorObserver": readonly [];
}> {
    readonly __FlaxNavigatorObserver: unique symbol;
}
declare function _FlaxNavigatorObserverFactory(): FlaxNavigatorObserver;
export declare const FlaxNavigatorObserver: typeof _FlaxNavigatorObserverFactory & _FlaxInstanceType<FlaxNavigatorObserver>;
export {};
