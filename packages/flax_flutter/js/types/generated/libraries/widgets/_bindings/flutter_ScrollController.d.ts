import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ScrollController: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollController;
    readonly hasListeners: boolean;
    readonly initialScrollOffset: number;
    readonly keepScrollOffset: boolean;
    readonly onAttach: ((position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>) => void) | null;
    readonly onDetach: ((position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>) => void) | null;
    readonly debugLabel: string | null;
    readonly positions: DartIterable<upstream2.ScrollPosition>;
    readonly hasClients: boolean;
    readonly position: upstream2.ScrollPosition;
    readonly offset: number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    animateTo(offset: number, options: {
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>;
    }): Promise<void>;
    jumpTo(value: number): void;
    attach(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): void;
    detach(position: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): void;
    createScrollPosition(physics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }>, context: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
    }>, oldPosition: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>) | null): upstream2.ScrollPosition;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare function _ScrollControllerFactory(options?: {
    initialScrollOffset?: number | undefined;
    keepScrollOffset?: boolean | undefined;
    debugLabel?: string | null | undefined;
    onAttach?: ((position: upstream2.ScrollPosition) => void) | null | undefined;
    onDetach?: ((position: upstream2.ScrollPosition) => void) | null | undefined;
}): ScrollController;
export declare const ScrollController: typeof _ScrollControllerFactory & _FlaxInstanceType<ScrollController> & _FlaxDartType<ScrollController, readonly ["class", "flax.core/flutter#type:ScrollController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "addListener" | "removeListener" | "dispose" | "animateTo" | "jumpTo" | "attach" | "detach" | "createScrollPosition" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
