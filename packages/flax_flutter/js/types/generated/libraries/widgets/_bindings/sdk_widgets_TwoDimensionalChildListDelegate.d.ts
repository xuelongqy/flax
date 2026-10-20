import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TwoDimensionalChildListDelegate extends Omit<upstream0.TwoDimensionalChildDelegate, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate | keyof upstream1.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __TwoDimensionalChildListDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;
    readonly hasListeners: boolean;
    readonly children: DartList<DartList<Widget>>;
    readonly addRepaintBoundaries: boolean;
    readonly addAutomaticKeepAlives: boolean;
    build(context: upstream3.BuildContext, vicinity: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity];
    }>): Widget | null;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
}
export declare function _TwoDimensionalChildListDelegateFactory(options: {
    addRepaintBoundaries?: boolean | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>;
}): TwoDimensionalChildListDelegate;
export interface _TwoDimensionalChildListDelegateNative extends TwoDimensionalChildListDelegate {
    readonly [_flaxDartTypeValue]: _TwoDimensionalChildListDelegateNative;
    build(context: upstream3.BuildContext, vicinity: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity];
    }>): Widget | null;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get children(): DartList<DartList<Widget>>;
    get addRepaintBoundaries(): boolean;
    get addAutomaticKeepAlives(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class _TwoDimensionalChildListDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildListDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TwoDimensionalChildListDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false];
    constructor(options: {
        addRepaintBoundaries?: boolean | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>;
    });
}
export declare namespace _TwoDimensionalChildListDelegateFactory {
    function implement(args: [options: {
        addRepaintBoundaries?: boolean | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>;
    }], implementation: {}): TwoDimensionalChildListDelegate;
}
declare const _TwoDimensionalChildListDelegateBinding: typeof _TwoDimensionalChildListDelegateFactory & (new (options: {
    addRepaintBoundaries?: boolean | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    children: DartListInput<DartList<Widget>, DartListInput<Widget, Widget>>;
}) => _TwoDimensionalChildListDelegateNative);
export declare const TwoDimensionalChildListDelegate: typeof _TwoDimensionalChildListDelegateBinding & _FlaxInstanceType<TwoDimensionalChildListDelegate> & _FlaxDartType<TwoDimensionalChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "children" | "addRepaintBoundaries" | "addAutomaticKeepAlives" | "build" | "shouldRebuild" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
