import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerRouter extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/pointer_router.dart::PointerRouter": readonly [];
}> {
    readonly __PointerRouter: unique symbol;
    readonly [_flaxDartTypeValue]: PointerRouter;
    readonly debugGlobalRouteCount: number;
    addRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    removeRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void)): void;
    addGlobalRoute(route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    removeGlobalRoute(route: ((event: upstream0.PointerEvent) => void)): void;
    route(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
export declare function _PointerRouterFactory(): PointerRouter;
export interface _PointerRouterNative extends PointerRouter {
    readonly [_flaxDartTypeValue]: _PointerRouterNative;
    addRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    removeRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void)): void;
    addGlobalRoute(route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null): void;
    removeGlobalRoute(route: ((event: upstream0.PointerEvent) => void)): void;
    route(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    get debugGlobalRouteCount(): number;
}
export declare abstract class _PointerRouterNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerRouter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerRouter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerRouter", readonly [], false];
    constructor();
}
export declare namespace _PointerRouterFactory {
    function implement(args: [], implementation: {}): PointerRouter;
}
declare const _PointerRouterBinding: typeof _PointerRouterFactory & (new () => _PointerRouterNative);
export declare const PointerRouter: typeof _PointerRouterBinding & _FlaxInstanceType<PointerRouter> & _FlaxDartType<PointerRouter, readonly ["class", "flax.core/sdk_gestures#type:PointerRouter", readonly [], false]>;
export {};
