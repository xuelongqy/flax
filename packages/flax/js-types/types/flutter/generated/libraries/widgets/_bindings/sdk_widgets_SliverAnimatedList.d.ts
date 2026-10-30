import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverAnimatedListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverAnimatedListState';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverAnimatedList extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::SliverAnimatedList": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_SliverAnimatedMultiBoxAdaptor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverAnimatedList: unique symbol;
    readonly [_flaxDartTypeValue]: SliverAnimatedList;
    readonly itemBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => Widget);
    readonly findChildIndexCallback: ((key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => number | null) | null;
    readonly initialItemCount: number;
    readonly key: upstream1.Key | null;
    createState(): upstream4.SliverAnimatedListState;
    createElement(): upstream5.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
export declare function _SliverAnimatedListFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget);
    findChildIndexCallback?: ((key: upstream1.Key) => number | null) | null | undefined;
    initialItemCount?: number | undefined;
}): SliverAnimatedList;
export declare namespace _SliverAnimatedListFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverAnimatedListFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _SliverAnimatedListFactory {
    function of(context: upstream2.BuildContext): upstream4.SliverAnimatedListState;
}
export declare namespace _SliverAnimatedListFactory {
    function maybeOf(context: upstream2.BuildContext): upstream4.SliverAnimatedListState | null;
}
export declare const SliverAnimatedList: typeof _SliverAnimatedListFactory & _FlaxInstanceType<SliverAnimatedList> & _FlaxDartType<SliverAnimatedList, readonly ["class", "flax.core/sdk_widgets#type:SliverAnimatedList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "findChildIndexCallback" | "initialItemCount" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::SliverAnimatedList" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_SliverAnimatedMultiBoxAdaptor" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
