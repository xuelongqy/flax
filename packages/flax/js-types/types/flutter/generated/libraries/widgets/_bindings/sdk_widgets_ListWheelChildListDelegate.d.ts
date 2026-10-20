import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListWheelChildListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildListDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildListDelegate;
    readonly estimatedChildCount: number;
    readonly children: DartList<Widget>;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
}
export declare function _ListWheelChildListDelegateFactory(options: {
    children: DartListInput<Widget, Widget>;
}): ListWheelChildListDelegate;
export interface _ListWheelChildListDelegateNative extends ListWheelChildListDelegate {
    readonly [_flaxDartTypeValue]: _ListWheelChildListDelegateNative;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
    get children(): DartList<Widget>;
    get estimatedChildCount(): number;
}
export declare abstract class _ListWheelChildListDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildListDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildListDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false];
    constructor(options: {
        children: DartListInput<Widget, Widget>;
    });
}
export declare namespace _ListWheelChildListDelegateFactory {
    function implement(args: [options: {
        children: DartListInput<Widget, Widget>;
    }], implementation: {}): ListWheelChildListDelegate;
}
declare const _ListWheelChildListDelegateBinding: typeof _ListWheelChildListDelegateFactory & (new (options: {
    children: DartListInput<Widget, Widget>;
}) => _ListWheelChildListDelegateNative);
export declare const ListWheelChildListDelegate: typeof _ListWheelChildListDelegateBinding & _FlaxInstanceType<ListWheelChildListDelegate> & _FlaxDartType<ListWheelChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
export {};
