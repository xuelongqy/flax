import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MagnifierController extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [];
}> {
    readonly __MagnifierController: unique symbol;
    readonly [_flaxDartTypeValue]: MagnifierController;
    get animationController(): upstream0.AnimationController | null;
    readonly overlayEntry: upstream1.OverlayEntry | null;
    readonly shown: boolean;
    show(options: {
        below?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        builder: ((context: upstream3.BuildContext) => Widget);
        context: upstream3.BuildContext;
        debugRequiredFor?: Widget | null | undefined;
    }): Promise<void>;
    hide(options?: {
        removeFromOverlay?: boolean | undefined;
    }): Promise<void>;
    set animationController(value: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
    }>) | null);
}
export declare function _MagnifierControllerFactory(options?: {
    animationController?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
    }>) | null | undefined;
}): MagnifierController;
export interface _MagnifierControllerNative extends MagnifierController {
    readonly [_flaxDartTypeValue]: _MagnifierControllerNative;
    show(options: {
        context: upstream3.BuildContext;
        builder: ((context: upstream3.BuildContext) => Widget);
        debugRequiredFor?: Widget | null | undefined;
        below?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    }): Promise<void>;
    hide(options?: {
        removeFromOverlay?: boolean | undefined;
    }): Promise<void>;
    get animationController(): upstream0.AnimationController | null;
    get overlayEntry(): upstream1.OverlayEntry | null;
    get shown(): boolean;
    set animationController(value: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
    }>) | null);
}
export declare abstract class _MagnifierControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MagnifierController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierController", readonly [], false];
    constructor(options?: {
        animationController?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _MagnifierControllerFactory {
    function implement(args: [options?: {
        animationController?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
        }>) | null | undefined;
    }], implementation: {}): MagnifierController;
}
declare const _MagnifierControllerBinding: typeof _MagnifierControllerFactory & (new (options?: {
    animationController?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [];
    }>) | null | undefined;
}) => _MagnifierControllerNative);
export declare namespace _MagnifierControllerFactory {
    function shiftWithinBounds(options: {
        bounds: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }): upstream2.Rect;
}
export declare const MagnifierController: typeof _MagnifierControllerBinding & _FlaxInstanceType<MagnifierController> & _FlaxDartType<MagnifierController, readonly ["class", "flax.core/sdk_widgets#type:MagnifierController", readonly [], false]>;
export {};
