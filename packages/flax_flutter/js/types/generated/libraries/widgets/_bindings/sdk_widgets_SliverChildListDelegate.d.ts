import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverChildListDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
}> {
    readonly __SliverChildListDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SliverChildListDelegate;
}
export interface SliverChildListDelegate {
    readonly [_flaxDartTypeValue]: SliverChildListDelegate;
    build(context: upstream1.BuildContext, index: number): Widget | null;
    estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
    didFinishLayout(firstIndex: number, lastIndex: number): void;
    shouldRebuild(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
    }>): boolean;
    findIndexByKey(key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>): number | null;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get addAutomaticKeepAlives(): boolean;
    get addRepaintBoundaries(): boolean;
    get addSemanticIndexes(): boolean;
    get semanticIndexOffset(): number;
    get semanticIndexCallback(): ((widget: Widget, localIndex: number) => number | null);
    get children(): DartList<Widget>;
    get estimatedChildCount(): number | null;
}
export declare abstract class SliverChildListDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildListDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverChildListDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildListDelegate", readonly [], false];
    constructor(children: DartListInput<Widget, Widget>, options?: {
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
        semanticIndexOffset?: number | undefined;
    });
}
export declare namespace SliverChildListDelegate {
    function implement(args: [children: DartListInput<Widget, Widget>, options?: {
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
        semanticIndexOffset?: number | undefined;
    }], implementation: {}): SliverChildListDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "children" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
export {};
