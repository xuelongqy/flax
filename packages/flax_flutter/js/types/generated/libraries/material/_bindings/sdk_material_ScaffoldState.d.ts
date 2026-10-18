import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_Scaffold';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream21 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import type * as upstream22 from '@flax/flutter/material/_bindings/sdk_material_PersistentBottomSheetController';
import '@flax/flutter/material/_bindings/sdk_material_PersistentBottomSheetController';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream24 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaffoldState extends Omit<upstream0.State<upstream1.Scaffold>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scaffold>>, Omit<upstream3.TickerProviderStateMixin<upstream1.Scaffold>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scaffold> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scaffold> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Scaffold>>, Omit<upstream5.RestorationMixin<upstream1.Scaffold>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scaffold> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Scaffold> | keyof upstream4.TickerProvider>, Omit<upstream6.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scaffold> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Scaffold> | keyof upstream4.TickerProvider | keyof upstream5.RestorationMixin<upstream1.Scaffold>>, Readonly<{
    "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Scaffold];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.Scaffold];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream1.Scaffold];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
}> {
    readonly __ScaffoldState: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldState;
    readonly widget: upstream1.Scaffold;
    readonly context: upstream7.BuildContext;
    readonly mounted: boolean;
    readonly restorationId: string | null;
    readonly bucket: upstream8.RestorationBucket | null;
    readonly restorePending: boolean;
    readonly hasAppBar: boolean;
    readonly hasDrawer: boolean;
    readonly hasEndDrawer: boolean;
    readonly hasFloatingActionButton: boolean;
    readonly appBarMaxHeight: number | null;
    readonly isDrawerOpen: boolean;
    readonly isDrawerBarrierDismissible: boolean;
    readonly isEndDrawerOpen: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createTicker(onTick: ((elapsed: upstream14.Duration) => void)): upstream13.Ticker;
    activate(): void;
    dispose(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.Scaffold): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    build(context: upstream7.BuildContext): Widget;
    didChangeDependencies(): void;
    restoreState(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null, initialRestore: boolean): void;
    didToggleBucket(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null): void;
    registerForRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, restorationId: string): void;
    unregisterFromRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    didUpdateRestorationId(): void;
    didPopRoute(): Promise<boolean>;
    handleStartBackGesture(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): boolean;
    handleUpdateBackGestureProgress(backEvent: Readonly<{
        "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
    }>): void;
    handleCommitBackGesture(): void;
    handleCancelBackGesture(): void;
    handleStatusBarTap(): void;
    didPushRoute(route: string): Promise<boolean>;
    didPushRouteInformation(routeInformation: Readonly<{
        "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [];
    }>): Promise<boolean>;
    didChangeMetrics(): void;
    didChangeTextScaleFactor(): void;
    didChangePlatformBrightness(): void;
    didChangeLocales(locales: DartListInput<upstream18.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null): void;
    didChangeAppLifecycleState(state: upstream19.AppLifecycleState): void;
    didChangeViewFocus(event: Readonly<{
        "__flaxBound:dart:ui::ViewFocusEvent": readonly [];
    }>): void;
    didRequestAppExit(): Promise<upstream21.AppExitResponse>;
    didHaveMemoryPressure(): void;
    didChangeAccessibilityFeatures(): void;
    openDrawer(): void;
    openEndDrawer(): void;
    closeDrawer(): void;
    closeEndDrawer(): void;
    showBottomSheet(builder: ((context: upstream7.BuildContext) => Widget), options?: {
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        clipBehavior?: upstream24.Clip | null | undefined;
        constraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | null | undefined;
        elevation?: number | null | undefined;
        enableDrag?: boolean | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        sheetAnimationStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        showDragHandle?: boolean | null | undefined;
        transitionAnimationController?: (Readonly<{
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
    }): upstream22.PersistentBottomSheetController;
    showBodyScrim(value: boolean, animationValue: number): void;
}
export declare function _ScaffoldStateFactory(): ScaffoldState;
export declare const ScaffoldState: typeof _ScaffoldStateFactory & _FlaxInstanceType<ScaffoldState> & _FlaxDartType<ScaffoldState, readonly ["class", "flax.core/sdk_material#type:ScaffoldState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "restorationId" | "bucket" | "restorePending" | "hasAppBar" | "hasDrawer" | "hasEndDrawer" | "hasFloatingActionButton" | "appBarMaxHeight" | "isDrawerOpen" | "isDrawerBarrierDismissible" | "isEndDrawerOpen" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "restoreState" | "didToggleBucket" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "openDrawer" | "openEndDrawer" | "closeDrawer" | "closeEndDrawer" | "showBottomSheet" | "showBodyScrim" | "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";
export {};
