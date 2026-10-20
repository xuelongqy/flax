import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/material/tab_controller.dart::TabController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __TabController: unique symbol;
    readonly [_flaxDartTypeValue]: TabController;
    readonly hasListeners: boolean;
    readonly animation: upstream4.Animation<number> | null;
    readonly animationDuration: upstream2.Duration;
    readonly length: number;
    get index(): number;
    readonly previousIndex: number;
    readonly indexIsChanging: boolean;
    get offset(): number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    animateTo(value: number, options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
    }): void;
    set index(value: number);
    set offset(value: number);
}
export declare function _TabControllerFactory(options: {
    initialIndex?: number | undefined;
    animationDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>) | null | undefined;
    length: number;
    vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>;
}): TabController;
export interface _TabControllerNative extends TabController {
    readonly [_flaxDartTypeValue]: _TabControllerNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    animateTo(value: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): void;
    get animation(): upstream4.Animation<number> | null;
    get animationDuration(): upstream2.Duration;
    get length(): number;
    get index(): number;
    get previousIndex(): number;
    get indexIsChanging(): boolean;
    get offset(): number;
    get hasListeners(): boolean;
    set index(value: number);
    set offset(value: number);
}
export declare abstract class _TabControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TabController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TabController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:TabController", readonly [], false];
    constructor(options: {
        initialIndex?: number | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        length: number;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    });
}
export declare namespace _TabControllerFactory {
    function implement(args: [options: {
        initialIndex?: number | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
        }>) | null | undefined;
        length: number;
        vsync: Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }], implementation: {}): TabController;
}
declare const _TabControllerBinding: typeof _TabControllerFactory & (new (options: {
    initialIndex?: number | undefined;
    animationDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>) | null | undefined;
    length: number;
    vsync: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }>;
}) => _TabControllerNative);
export declare const TabController: typeof _TabControllerBinding & _FlaxInstanceType<TabController> & _FlaxDartType<TabController, readonly ["class", "flax.core/sdk_material#type:TabController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "animation" | "animationDuration" | "length" | "index" | "previousIndex" | "indexIsChanging" | "offset" | "addListener" | "removeListener" | "dispose" | "animateTo" | "__flaxBound:package:flutter/src/material/tab_controller.dart::TabController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
