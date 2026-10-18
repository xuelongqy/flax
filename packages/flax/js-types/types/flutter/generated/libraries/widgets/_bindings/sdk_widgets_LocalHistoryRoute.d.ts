import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream6 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocalHistoryRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.Route<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}> {
    readonly __LocalHistoryRoute: unique symbol;
    readonly [_flaxDartTypeValue]: LocalHistoryRoute<T>;
    readonly requestFocus: boolean;
    readonly navigator: upstream1.NavigatorState | null;
    readonly settings: upstream2.RouteSettings;
    readonly restorationScopeId: upstream3.ValueListenable<string | null>;
    readonly overlayEntries: DartList<upstream4.OverlayEntry>;
    readonly popDisposition: upstream5.RoutePopDisposition;
    readonly willHandlePopInternally: boolean;
    readonly currentResult: T | null;
    readonly popped: Promise<T | null>;
    readonly isCurrent: boolean;
    readonly isFirst: boolean;
    readonly hasActiveRouteBelow: boolean;
    readonly isActive: boolean;
    install(): void;
    didPush(): upstream6.TickerFuture;
    didAdd(): void;
    didReplace(oldRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    willPop(): Promise<upstream5.RoutePopDisposition>;
    onPopInvoked(didPop: boolean): void;
    onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
    didPop(result: (T | DartInput<T>) | null): boolean;
    didComplete(result: (T | DartInput<T>) | null): void;
    didPopNext(nextRoute: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>): void;
    didChangeNext(nextRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    didChangePrevious(previousRoute: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null): void;
    changedInternalState(): void;
    changedExternalState(): void;
    dispose(): void;
    addLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
    removeLocalHistoryEntry(entry: Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [];
    }>): void;
}
export declare const LocalHistoryRoute: object & _FlaxInstanceType<LocalHistoryRoute<unknown | null>> & _FlaxDartType<LocalHistoryRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:LocalHistoryRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "overlayEntries" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "install" | "didPush" | "didAdd" | "didReplace" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didPop" | "didComplete" | "didPopNext" | "didChangeNext" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "dispose" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: LocalHistoryRoute<_Selected0>;
    } & _FlaxInstanceType<LocalHistoryRoute<_Selected0>> & _FlaxDartType<LocalHistoryRoute<_Selected0>> : never : never;
}
export {};
