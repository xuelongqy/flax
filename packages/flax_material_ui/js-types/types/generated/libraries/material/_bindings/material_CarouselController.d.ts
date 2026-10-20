import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CarouselController extends Omit<upstream0.ScrollController, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ScrollController>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ScrollController | keyof upstream1.ChangeNotifier>, Readonly<{
    "__flaxBound:package:material_ui/src/carousel.dart::CarouselController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __CarouselController: unique symbol;
    readonly [_flaxDartTypeValue]: CarouselController;
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
    readonly positions: DartIterable<upstream3.ScrollPosition>;
    readonly hasClients: boolean;
    readonly position: upstream3.ScrollPosition;
    readonly offset: number;
    readonly initialItem: number;
    readonly leadingItem: number;
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
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
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
    }>) | null): upstream3.ScrollPosition;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    animateToItem(index: number, options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
        }>) | undefined;
    }): Promise<void>;
}
export declare function _CarouselControllerFactory(options?: {
    initialItem?: number | undefined;
}): CarouselController;
export interface _CarouselControllerNative extends CarouselController {
    readonly [_flaxDartTypeValue]: _CarouselControllerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    animateTo(offset: number, options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
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
    }>) | null): upstream3.ScrollPosition;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    animateToItem(index: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
        }>) | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): Promise<void>;
    get initialItem(): number;
    get leadingItem(): number;
    get initialScrollOffset(): number;
    get keepScrollOffset(): boolean;
    get onAttach(): ((position: Readonly<{
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
    get onDetach(): ((position: Readonly<{
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
    get debugLabel(): string | null;
    get positions(): DartIterable<upstream3.ScrollPosition>;
    get hasClients(): boolean;
    get position(): upstream3.ScrollPosition;
    get offset(): number;
    get hasListeners(): boolean;
}
export declare abstract class _CarouselControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CarouselController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CarouselController", readonly [], false];
    constructor(options?: {
        initialItem?: number | undefined;
    });
}
export declare namespace _CarouselControllerFactory {
    function implement(args: [options?: {
        initialItem?: number | undefined;
    }], implementation: {}): CarouselController;
}
declare const _CarouselControllerBinding: typeof _CarouselControllerFactory & (new (options?: {
    initialItem?: number | undefined;
}) => _CarouselControllerNative);
export declare const CarouselController: typeof _CarouselControllerBinding & _FlaxInstanceType<CarouselController> & _FlaxDartType<CarouselController, readonly ["class", "flax.material/material#type:CarouselController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "initialItem" | "leadingItem" | "addListener" | "removeListener" | "dispose" | "animateTo" | "jumpTo" | "attach" | "detach" | "createScrollPosition" | "toString" | "debugFillDescription" | "animateToItem" | "__flaxBound:package:material_ui/src/carousel.dart::CarouselController" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
