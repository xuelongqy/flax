import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxNavigatorObserver extends Omit<upstream0.NavigatorObserver, typeof _flaxDartTypeValue | "navigator" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture">, Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxNavigatorObserver": readonly [];
}> {
    readonly __FlaxNavigatorObserver: unique symbol;
    readonly navigator: upstream1.NavigatorState | null;
    didPush(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>, previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didPop(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>, previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didRemove(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>, previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didReplace(options?: {
        newRoute?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> | null | undefined;
        oldRoute?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> | null | undefined;
    }): void;
    didChangeTop(topRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>, previousTopRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didStartUserGesture(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>, previousRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null): void;
    didStopUserGesture(): void;
}
export declare function _FlaxNavigatorObserverFactory(): FlaxNavigatorObserver;
export declare const FlaxNavigatorObserver: typeof _FlaxNavigatorObserverFactory & _FlaxInstanceType<FlaxNavigatorObserver> & _FlaxDartType<FlaxNavigatorObserver, readonly ["class", "flax.core/flutter#type:FlaxNavigatorObserver", readonly [], false]>;
