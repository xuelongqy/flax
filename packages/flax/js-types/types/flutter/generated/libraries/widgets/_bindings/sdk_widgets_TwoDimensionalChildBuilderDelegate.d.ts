import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TwoDimensionalChildBuilderDelegate extends Omit<upstream0.TwoDimensionalChildDelegate, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate | keyof upstream1.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildBuilderDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __TwoDimensionalChildBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;
}
export interface TwoDimensionalChildBuilderDelegate {
    readonly [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;
    build(context: upstream3.BuildContext, vicinity: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity];
    }>): Widget | null;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get builder(): ((context: upstream3.BuildContext, vicinity: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity];
    }>) => Widget | null);
    get maxXIndex(): number | null;
    get maxYIndex(): number | null;
    get addRepaintBoundaries(): boolean;
    get addAutomaticKeepAlives(): boolean;
    get hasListeners(): boolean;
    set maxXIndex(value: number | null);
    set maxYIndex(value: number | null);
}
export declare abstract class TwoDimensionalChildBuilderDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", readonly [], false];
    constructor(options: {
        builder: ((context: upstream3.BuildContext, vicinity: upstream4.ChildVicinity) => Widget | null);
        maxXIndex?: number | null | undefined;
        maxYIndex?: number | null | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
    });
}
export declare namespace TwoDimensionalChildBuilderDelegate {
    function implement(args: [options: {
        builder: ((context: upstream3.BuildContext, vicinity: upstream4.ChildVicinity) => Widget | null);
        maxXIndex?: number | null | undefined;
        maxYIndex?: number | null | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
    }], implementation: {}): TwoDimensionalChildBuilderDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "builder" | "maxXIndex" | "maxYIndex" | "addRepaintBoundaries" | "addAutomaticKeepAlives" | "build" | "shouldRebuild" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
