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
export interface PageController extends Omit<upstream0.ScrollController, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ScrollController>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ScrollController | keyof upstream1.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_view.dart::PageController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __PageController: unique symbol;
    readonly [_flaxDartTypeValue]: PageController;
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
    readonly hasListeners: boolean;
    readonly initialPage: number;
    readonly keepPage: boolean;
    readonly viewportFraction: number;
    readonly page: number | null;
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
    dispose(): void;
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
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    animateToPage(page: number, options: {
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
    jumpToPage(page: number): void;
    nextPage(options: {
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
    previousPage(options: {
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
}
export declare function _PageControllerFactory(options?: {
    initialPage?: number | undefined;
    keepPage?: boolean | undefined;
    viewportFraction?: number | undefined;
    onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
    onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
}): PageController;
export interface _PageControllerNative extends PageController {
    readonly [_flaxDartTypeValue]: _PageControllerNative;
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
    dispose(): void;
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
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    animateToPage(page: number, options: {
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
    jumpToPage(page: number): void;
    nextPage(options: {
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
    previousPage(options: {
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
    get initialPage(): number;
    get keepPage(): boolean;
    get viewportFraction(): number;
    get page(): number | null;
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
export declare abstract class _PageControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PageController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageController", readonly [], false];
    constructor(options?: {
        initialPage?: number | undefined;
        keepPage?: boolean | undefined;
        viewportFraction?: number | undefined;
        onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
        onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
    });
}
export declare namespace _PageControllerFactory {
    function implement(args: [options?: {
        initialPage?: number | undefined;
        keepPage?: boolean | undefined;
        viewportFraction?: number | undefined;
        onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
        onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
    }], implementation: {}): PageController;
}
declare const _PageControllerBinding: typeof _PageControllerFactory & (new (options?: {
    initialPage?: number | undefined;
    keepPage?: boolean | undefined;
    viewportFraction?: number | undefined;
    onAttach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
    onDetach?: ((position: upstream3.ScrollPosition) => void) | null | undefined;
}) => _PageControllerNative);
export declare const PageController: typeof _PageControllerBinding & _FlaxInstanceType<PageController> & _FlaxDartType<PageController, readonly ["class", "flax.core/sdk_widgets#type:PageController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "initialScrollOffset" | "keepScrollOffset" | "onAttach" | "onDetach" | "debugLabel" | "positions" | "hasClients" | "position" | "offset" | "hasListeners" | "initialPage" | "keepPage" | "viewportFraction" | "page" | "animateTo" | "jumpTo" | "attach" | "detach" | "dispose" | "createScrollPosition" | "toString" | "debugFillDescription" | "addListener" | "removeListener" | "animateToPage" | "jumpToPage" | "nextPage" | "previousPage" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageController" | "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
