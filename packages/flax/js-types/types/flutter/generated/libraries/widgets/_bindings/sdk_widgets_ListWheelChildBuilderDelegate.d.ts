import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListWheelChildBuilderDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
    readonly estimatedChildCount: number | null;
    readonly builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
    readonly childCount: number | null;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
}
export declare function _ListWheelChildBuilderDelegateFactory(options: {
    builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
    childCount?: number | null | undefined;
}): ListWheelChildBuilderDelegate;
export interface _ListWheelChildBuilderDelegateNative extends ListWheelChildBuilderDelegate {
    readonly [_flaxDartTypeValue]: _ListWheelChildBuilderDelegateNative;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    trueIndexOf(index: number): number;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
    get builder(): ((context: upstream1.BuildContext, index: number) => Widget | null);
    get childCount(): number | null;
    get estimatedChildCount(): number | null;
}
export declare abstract class _ListWheelChildBuilderDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", readonly [], false];
    constructor(options: {
        builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
        childCount?: number | null | undefined;
    });
}
export declare namespace _ListWheelChildBuilderDelegateFactory {
    function implement(args: [options: {
        builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
        childCount?: number | null | undefined;
    }], implementation: {}): ListWheelChildBuilderDelegate;
}
declare const _ListWheelChildBuilderDelegateBinding: typeof _ListWheelChildBuilderDelegateFactory & (new (options: {
    builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
    childCount?: number | null | undefined;
}) => _ListWheelChildBuilderDelegateNative);
export declare const ListWheelChildBuilderDelegate: typeof _ListWheelChildBuilderDelegateBinding & _FlaxInstanceType<ListWheelChildBuilderDelegate> & _FlaxDartType<ListWheelChildBuilderDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
export {};
