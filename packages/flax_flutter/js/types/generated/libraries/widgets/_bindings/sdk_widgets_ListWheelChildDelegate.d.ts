import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ListWheelChildDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
}> {
    readonly __ListWheelChildDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildDelegate;
}
export interface ListWheelChildDelegate {
    readonly [_flaxDartTypeValue]: ListWheelChildDelegate;
    trueIndexOf(index: number): number;
}
export declare abstract class ListWheelChildDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListWheelChildDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildDelegate", readonly [], false];
    constructor();
    abstract build(context: upstream0.BuildContext, index: number): Widget | null;
    abstract shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [];
    }>): boolean;
    abstract get estimatedChildCount(): number | null;
}
export declare namespace ListWheelChildDelegate {
    function implement(args: [], implementation: {
        build: ((context: upstream0.BuildContext, index: number) => Widget | null);
        shouldRebuild: ((oldDelegate: ListWheelChildDelegate) => boolean);
        get estimatedChildCount(): number | null;
    }): ListWheelChildDelegate;
}
