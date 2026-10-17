import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigatorObserver extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
}> {
    readonly __NavigatorObserver: unique symbol;
    readonly navigator: upstream0.NavigatorState | null;
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
export declare function _NavigatorObserverFactory(): NavigatorObserver;
export declare const NavigatorObserver: typeof _NavigatorObserverFactory & _FlaxInstanceType<NavigatorObserver> & _FlaxDartType<NavigatorObserver, readonly ["class", "flax.core/flutter#type:NavigatorObserver", readonly [], false]>;
