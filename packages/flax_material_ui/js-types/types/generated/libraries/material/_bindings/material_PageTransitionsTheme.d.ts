import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageTransitionsBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageTransitionsBuilder';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PageTransitionsTheme extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/page_transitions_theme.dart::PageTransitionsTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PageTransitionsTheme: unique symbol;
    readonly [_flaxDartTypeValue]: PageTransitionsTheme;
    readonly [_flaxDartMethodCases]?: {
        buildTransitions: _FlaxSignature0;
    };
    readonly builders: DartMap<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder>;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
    }>, context: upstream8.BuildContext, animation: Readonly<{
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
    delegatedTransition(platform: upstream2.TargetPlatform): ((context: upstream8.BuildContext, animation: Readonly<{
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
}
export declare function _PageTransitionsThemeFactory(options?: {
    builders?: DartMapInput<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder, upstream2.TargetPlatform, Readonly<{
        "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder": readonly [];
    }>> | undefined;
}): PageTransitionsTheme;
export interface _PageTransitionsThemeNative extends PageTransitionsTheme {
    readonly [_flaxDartTypeValue]: _PageTransitionsThemeNative;
    readonly [_flaxDartMethodCases]?: {
        buildTransitions: _FlaxSignature1;
    };
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
    }>, context: upstream8.BuildContext, animation: Readonly<{
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
    delegatedTransition(platform: upstream2.TargetPlatform): ((context: upstream8.BuildContext, animation: Readonly<{
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
    get builders(): DartMap<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder>;
}
export declare abstract class _PageTransitionsThemeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageTransitionsTheme>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PageTransitionsTheme;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:PageTransitionsTheme", readonly [], false];
    constructor(options?: {
        builders?: DartMapInput<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder, upstream2.TargetPlatform, Readonly<{
            "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder": readonly [];
        }>> | undefined;
    });
}
export declare namespace _PageTransitionsThemeFactory {
    function implement(args: [options?: {
        builders?: DartMapInput<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder, upstream2.TargetPlatform, Readonly<{
            "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder": readonly [];
        }>> | undefined;
    }], implementation: {}): PageTransitionsTheme;
}
declare const _PageTransitionsThemeBinding: typeof _PageTransitionsThemeFactory & (new (options?: {
    builders?: DartMapInput<upstream2.TargetPlatform, upstream1.PageTransitionsBuilder, upstream2.TargetPlatform, Readonly<{
        "__flaxBound:package:flutter/src/widgets/page_transitions_builder.dart::PageTransitionsBuilder": readonly [];
    }>> | undefined;
}) => _PageTransitionsThemeNative);
export declare const PageTransitionsTheme: typeof _PageTransitionsThemeBinding & _FlaxInstanceType<PageTransitionsTheme> & _FlaxDartType<PageTransitionsTheme, readonly ["class", "flax.material/material#type:PageTransitionsTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "builders" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "buildTransitions" | "delegatedTransition" | "__flaxBound:package:material_ui/src/page_transitions_theme.dart::PageTransitionsTheme" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
    }>, context: upstream8.BuildContext, animation: Readonly<{
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
    }>, context: upstream8.BuildContext, animation: Readonly<{
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
