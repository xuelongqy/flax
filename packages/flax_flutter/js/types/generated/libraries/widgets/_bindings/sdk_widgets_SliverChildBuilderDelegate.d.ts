import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverChildBuilderDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
}> {
    readonly __SliverChildBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;
}
export interface SliverChildBuilderDelegate {
    readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
    didFinishLayout(firstIndex: number, lastIndex: number): void;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
    }>): boolean;
    findIndexByKey(key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>): number | null;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get builder(): ((context: upstream1.BuildContext, index: number) => Widget | null);
    get childCount(): number | null;
    get addAutomaticKeepAlives(): boolean;
    get addRepaintBoundaries(): boolean;
    get addSemanticIndexes(): boolean;
    get semanticIndexOffset(): number;
    get semanticIndexCallback(): ((widget: Widget, localIndex: number) => number | null);
    get findChildIndexCallback(): ((key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => number | null) | null;
    get estimatedChildCount(): number | null;
}
export declare abstract class SliverChildBuilderDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverChildBuilderDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false];
    constructor(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {
        findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined;
        childCount?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
        semanticIndexOffset?: number | undefined;
    });
}
export declare namespace SliverChildBuilderDelegate {
    function implement(args: [builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {
        findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined;
        childCount?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
        semanticIndexOffset?: number | undefined;
    }], implementation: {}): SliverChildBuilderDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "findChildIndexCallback" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
export {};
