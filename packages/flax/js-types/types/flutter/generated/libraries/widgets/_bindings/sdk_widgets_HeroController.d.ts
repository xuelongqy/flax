import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HeroController extends Omit<upstream0.NavigatorObserver, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
}> {
    readonly __HeroController: unique symbol;
    readonly [_flaxDartTypeValue]: HeroController;
}
export interface HeroController {
    readonly [_flaxDartTypeValue]: HeroController;
    didPush(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didPop(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didRemove(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didReplace(options?: {
        newRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
        oldRoute?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
        }>) | null | undefined;
    }): void;
    didChangeTop(topRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousTopRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStartUserGesture(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>, previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didStopUserGesture(): void;
    dispose(): void;
    get createRectTween(): ((begin: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, end: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null) => upstream1.Tween<upstream2.Rect | null>) | null;
    get navigator(): upstream3.NavigatorState | null;
}
export declare abstract class HeroController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HeroController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HeroController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:HeroController", readonly [], false];
    constructor(options?: {
        createRectTween?: ((begin: upstream2.Rect | null, end: upstream2.Rect | null) => Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null];
        }>) | null | undefined;
    });
}
export declare namespace HeroController {
    function implement(args: [options?: {
        createRectTween?: ((begin: upstream2.Rect | null, end: upstream2.Rect | null) => Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null];
        }>) | null | undefined;
    }], implementation: {}): HeroController;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "navigator" | "createRectTween" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture" | "dispose" | "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroController" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver";
export {};
