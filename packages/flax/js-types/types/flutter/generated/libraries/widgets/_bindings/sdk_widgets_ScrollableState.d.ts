import { type FlaxInstanceType as _FlaxInstanceType, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Scrollable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream5 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream9 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPosition';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import type * as upstream18 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream19 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollableState extends Omit<upstream0.State<upstream1.Scrollable>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scrollable>>, Omit<upstream3.ScrollContext, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scrollable> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProviderStateMixin<upstream1.Scrollable>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scrollable> | keyof upstream2.Diagnosticable | keyof upstream3.ScrollContext>, Omit<upstream5.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scrollable> | keyof upstream2.Diagnosticable | keyof upstream3.ScrollContext | keyof upstream4.TickerProviderStateMixin<upstream1.Scrollable>>, Omit<upstream6.RestorationMixin<upstream1.Scrollable>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Scrollable> | keyof upstream2.Diagnosticable | keyof upstream3.ScrollContext | keyof upstream4.TickerProviderStateMixin<upstream1.Scrollable> | keyof upstream5.TickerProvider>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Scrollable];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.Scrollable];
}>, Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream1.Scrollable];
}> {
    readonly __ScrollableState: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollableState;
    readonly notificationContext: upstream7.BuildContext | null;
    readonly storageContext: upstream7.BuildContext;
    readonly vsync: upstream5.TickerProvider;
    readonly axisDirection: upstream8.AxisDirection;
    readonly devicePixelRatio: number;
    readonly widget: upstream1.Scrollable;
    readonly context: upstream7.BuildContext;
    readonly mounted: boolean;
    readonly restorationId: string | null;
    readonly bucket: upstream9.RestorationBucket | null;
    readonly restorePending: boolean;
    readonly position: upstream10.ScrollPosition;
    readonly resolvedPhysics: upstream11.ScrollPhysics | null;
    readonly deltaToScrollOrigin: upstream12.Offset;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    setIgnorePointer(value: boolean): void;
    setCanDrag(value: boolean): void;
    setSemanticsActions(actions: DartSetInput<upstream17.SemanticsAction, Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>>): void;
    saveOffset(offset: number): void;
    createTicker(onTick: ((elapsed: upstream19.Duration) => void)): upstream18.Ticker;
    activate(): void;
    dispose(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.Scrollable): void;
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
}
export declare function _ScrollableStateFactory(): ScrollableState;
export declare const ScrollableState: typeof _ScrollableStateFactory & _FlaxInstanceType<ScrollableState> & _FlaxDartType<ScrollableState, readonly ["class", "flax.core/sdk_widgets#type:ScrollableState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "notificationContext" | "storageContext" | "vsync" | "axisDirection" | "devicePixelRatio" | "widget" | "context" | "mounted" | "restorationId" | "bucket" | "restorePending" | "position" | "resolvedPhysics" | "deltaToScrollOrigin" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "setIgnorePointer" | "setCanDrag" | "setSemanticsActions" | "saveOffset" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "restoreState" | "didToggleBucket" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "__flaxBound:package:flutter/src/widgets/scrollable.dart::ScrollableState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin";
export {};
