import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListWheelChildLoopingListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildLoopingListDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
    readonly estimatedChildCount: number | null;
    readonly children: DartList<Widget>;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
}
export declare function _ListWheelChildLoopingListDelegateFactory(options: {
    children: DartListInput<Widget, Widget>;
}): ListWheelChildLoopingListDelegate;
export interface _ListWheelChildLoopingListDelegateNative extends ListWheelChildLoopingListDelegate {
    readonly [_flaxDartTypeValue]: _ListWheelChildLoopingListDelegateNative;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
    get children(): DartList<Widget>;
    get estimatedChildCount(): number | null;
}
export declare abstract class _ListWheelChildLoopingListDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildLoopingListDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false];
    constructor(options: {
        children: DartListInput<Widget, Widget>;
    });
}
export declare namespace _ListWheelChildLoopingListDelegateFactory {
    function implement(args: [options: {
        children: DartListInput<Widget, Widget>;
    }], implementation: {}): ListWheelChildLoopingListDelegate;
}
declare const _ListWheelChildLoopingListDelegateBinding: typeof _ListWheelChildLoopingListDelegateFactory & (new (options: {
    children: DartListInput<Widget, Widget>;
}) => _ListWheelChildLoopingListDelegateNative);
export declare const ListWheelChildLoopingListDelegate: typeof _ListWheelChildLoopingListDelegateBinding & _FlaxInstanceType<ListWheelChildLoopingListDelegate> & _FlaxDartType<ListWheelChildLoopingListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
export {};
