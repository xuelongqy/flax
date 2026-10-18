import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverChildDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
}> {
    readonly __SliverChildDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverChildDelegate;
}
export interface SliverChildDelegate {
    readonly [_flaxDartTypeValue]: SliverChildDelegate;
    estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
    didFinishLayout(firstIndex: number, lastIndex: number): void;
    findIndexByKey(key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>): number | null;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get estimatedChildCount(): number | null;
}
export declare abstract class SliverChildDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverChildDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildDelegate", readonly [], false];
    constructor();
    abstract build(context: upstream0.BuildContext, index: number): Widget | null;
    abstract shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
    }>): boolean;
}
export declare namespace SliverChildDelegate {
    function implement(args: [], implementation: {
        build: ((context: upstream0.BuildContext, index: number) => Widget | null);
        shouldRebuild: ((oldDelegate: SliverChildDelegate) => boolean);
    }): SliverChildDelegate;
}
