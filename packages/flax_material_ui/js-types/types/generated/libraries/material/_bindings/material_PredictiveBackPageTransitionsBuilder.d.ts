import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageTransitionsBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageTransitionsBuilder';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PredictiveBackPageTransitionsBuilder extends Omit<upstream0.PageTransitionsBuilder, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/predictive_back_page_transitions_builder.dart::PredictiveBackPageTransitionsBuilder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder": readonly [];
}> {
    readonly __PredictiveBackPageTransitionsBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: PredictiveBackPageTransitionsBuilder;
    readonly [_flaxDartMethodCases]?: {
        buildTransitions: _FlaxSignature0;
    };
    readonly delegatedTransition: ((context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
    readonly transitionDuration: upstream4.Duration;
    readonly reverseTransitionDuration: upstream4.Duration;
    readonly allowSnapshotting: boolean;
    readonly fallbackColor: upstream1.Color | null;
    buildTransitions<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_FlaxDartOutput<T>];
    }>, context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, child: Widget): Widget;
}
export declare function _PredictiveBackPageTransitionsBuilderFactory(options?: {
    fallbackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    allowSnapshotting?: boolean | undefined;
}): PredictiveBackPageTransitionsBuilder;
export interface _PredictiveBackPageTransitionsBuilderNative extends PredictiveBackPageTransitionsBuilder {
    readonly [_flaxDartTypeValue]: _PredictiveBackPageTransitionsBuilderNative;
    readonly [_flaxDartMethodCases]?: {
        buildTransitions: _FlaxSignature1;
    };
    buildTransitions<T extends unknown | null = unknown | null>(route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_FlaxDartOutput<T>];
    }>, context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, child: Widget): Widget;
    get allowSnapshotting(): boolean;
    get fallbackColor(): upstream1.Color | null;
    get transitionDuration(): upstream4.Duration;
    get delegatedTransition(): ((context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
    get reverseTransitionDuration(): upstream4.Duration;
}
export declare abstract class _PredictiveBackPageTransitionsBuilderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PredictiveBackPageTransitionsBuilder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PredictiveBackPageTransitionsBuilder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:PredictiveBackPageTransitionsBuilder", readonly [], false];
    constructor(options?: {
        fallbackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        allowSnapshotting?: boolean | undefined;
    });
}
export declare namespace _PredictiveBackPageTransitionsBuilderFactory {
    function implement(args: [options?: {
        fallbackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        allowSnapshotting?: boolean | undefined;
    }], implementation: {}): PredictiveBackPageTransitionsBuilder;
}
declare const _PredictiveBackPageTransitionsBuilderBinding: typeof _PredictiveBackPageTransitionsBuilderFactory & (new (options?: {
    fallbackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    allowSnapshotting?: boolean | undefined;
}) => _PredictiveBackPageTransitionsBuilderNative);
export declare const PredictiveBackPageTransitionsBuilder: typeof _PredictiveBackPageTransitionsBuilderBinding & _FlaxInstanceType<PredictiveBackPageTransitionsBuilder> & _FlaxDartType<PredictiveBackPageTransitionsBuilder, readonly ["class", "flax.material/material#type:PredictiveBackPageTransitionsBuilder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegatedTransition" | "transitionDuration" | "reverseTransitionDuration" | "allowSnapshotting" | "fallbackColor" | "buildTransitions" | "__flaxBound:package:material_ui/src/predictive_back_page_transitions_builder.dart::PredictiveBackPageTransitionsBuilder" | "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_Selected0];
    }>, context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, child: Widget) => Widget : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (route: Readonly<{
        "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_Selected0];
    }>, context: upstream2.BuildContext, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, secondaryAnimation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>, child: Widget) => Widget : never : never;
}
export {};
