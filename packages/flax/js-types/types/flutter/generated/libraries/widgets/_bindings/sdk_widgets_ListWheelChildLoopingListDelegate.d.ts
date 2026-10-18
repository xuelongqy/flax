import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ListWheelChildLoopingListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildLoopingListDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
}
export interface ListWheelChildLoopingListDelegate {
    readonly [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
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
export declare abstract class ListWheelChildLoopingListDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildLoopingListDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false];
    constructor(options: {
        children: DartListInput<Widget, Widget>;
    });
}
export declare namespace ListWheelChildLoopingListDelegate {
    function implement(args: [options: {
        children: DartListInput<Widget, Widget>;
    }], implementation: {}): ListWheelChildLoopingListDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
export {};
