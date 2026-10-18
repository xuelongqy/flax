import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotificationObserver';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollNotificationObserverState extends Omit<upstream0.State<upstream1.ScrollNotificationObserver>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.ScrollNotificationObserver>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification_observer.dart::ScrollNotificationObserverState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.ScrollNotificationObserver];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScrollNotificationObserverState: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollNotificationObserverState;
    readonly widget: upstream1.ScrollNotificationObserver;
    readonly context: upstream3.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    addListener(listener: ((notification: upstream8.ScrollNotification) => void)): void;
    removeListener(listener: ((notification: upstream8.ScrollNotification) => void)): void;
    build(context: upstream3.BuildContext): Widget;
    dispose(): void;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.ScrollNotificationObserver): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    didChangeDependencies(): void;
}
export declare function _ScrollNotificationObserverStateFactory(): ScrollNotificationObserverState;
export declare const ScrollNotificationObserverState: typeof _ScrollNotificationObserverStateFactory & _FlaxInstanceType<ScrollNotificationObserverState> & _FlaxDartType<ScrollNotificationObserverState, readonly ["class", "flax.core/sdk_widgets#type:ScrollNotificationObserverState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "addListener" | "removeListener" | "build" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/scroll_notification_observer.dart::ScrollNotificationObserverState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
