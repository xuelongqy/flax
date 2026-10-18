import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ListWheelChildBuilderDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
}
export interface ListWheelChildBuilderDelegate {
    readonly [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
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
export declare abstract class ListWheelChildBuilderDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", readonly [], false];
    constructor(options: {
        builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
        childCount?: number | null | undefined;
    });
}
export declare namespace ListWheelChildBuilderDelegate {
    function implement(args: [options: {
        builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
        childCount?: number | null | undefined;
    }], implementation: {}): ListWheelChildBuilderDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
export {};
