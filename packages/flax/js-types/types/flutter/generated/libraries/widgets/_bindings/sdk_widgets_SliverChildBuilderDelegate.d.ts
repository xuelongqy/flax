import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverChildBuilderDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
}> {
    readonly __SliverChildBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;
    readonly estimatedChildCount: number | null;
    readonly builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
    readonly childCount: number | null;
    readonly addAutomaticKeepAlives: boolean;
    readonly addRepaintBoundaries: boolean;
    readonly addSemanticIndexes: boolean;
    readonly semanticIndexOffset: number;
    readonly semanticIndexCallback: ((widget: Widget, localIndex: number) => number | null);
    readonly findChildIndexCallback: ((key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => number | null) | null;
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
}
export declare function _SliverChildBuilderDelegateFactory(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {
    findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined;
    childCount?: number | null | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    addRepaintBoundaries?: boolean | undefined;
    addSemanticIndexes?: boolean | undefined;
    semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
    semanticIndexOffset?: number | undefined;
}): SliverChildBuilderDelegate;
export interface _SliverChildBuilderDelegateNative extends SliverChildBuilderDelegate {
    readonly [_flaxDartTypeValue]: _SliverChildBuilderDelegateNative;
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
export declare abstract class _SliverChildBuilderDelegateNative extends _FlaxProxyBase {
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
export declare namespace _SliverChildBuilderDelegateFactory {
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
declare const _SliverChildBuilderDelegateBinding: typeof _SliverChildBuilderDelegateFactory & (new (builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {
    findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined;
    childCount?: number | null | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    addRepaintBoundaries?: boolean | undefined;
    addSemanticIndexes?: boolean | undefined;
    semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
    semanticIndexOffset?: number | undefined;
}) => _SliverChildBuilderDelegateNative);
export declare const SliverChildBuilderDelegate: typeof _SliverChildBuilderDelegateBinding & _FlaxInstanceType<SliverChildBuilderDelegate> & _FlaxDartType<SliverChildBuilderDelegate, readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "findChildIndexCallback" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
export {};
