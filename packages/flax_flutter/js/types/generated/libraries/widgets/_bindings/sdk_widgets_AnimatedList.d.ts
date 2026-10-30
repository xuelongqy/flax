import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedListState';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimatedList extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedList": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AnimatedList: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedList;
    readonly itemBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => Widget);
    readonly removedSeparatorBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => Widget) | null;
    readonly initialItemCount: number;
    readonly scrollDirection: upstream4.Axis;
    readonly reverse: boolean;
    readonly controller: upstream5.ScrollController | null;
    readonly primary: boolean | null;
    readonly physics: upstream6.ScrollPhysics | null;
    readonly shrinkWrap: boolean;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly clipBehavior: upstream8.Clip;
    readonly scrollCacheExtent: upstream9.ScrollCacheExtent | null;
    readonly key: upstream1.Key | null;
    createState(): upstream10.AnimatedListState;
    createElement(): upstream11.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _AnimatedListFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget);
    initialItemCount?: number | undefined;
    scrollDirection?: upstream4.Axis | undefined;
    reverse?: boolean | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    primary?: boolean | null | undefined;
    physics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    shrinkWrap?: boolean | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream8.Clip | undefined;
    scrollCacheExtent?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
    }> | null | undefined;
}): AnimatedList;
export declare namespace _AnimatedListFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedListFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _AnimatedListFactory {
    function separated(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget);
        separatorBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget);
        removedSeparatorBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget);
        initialItemCount?: number | undefined;
        scrollDirection?: upstream4.Axis | undefined;
        reverse?: boolean | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        primary?: boolean | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        shrinkWrap?: boolean | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        clipBehavior?: upstream8.Clip | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
    }): AnimatedList;
    namespace separated {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof separated>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _AnimatedListFactory {
    function of(context: upstream2.BuildContext): upstream10.AnimatedListState;
}
export declare namespace _AnimatedListFactory {
    function maybeOf(context: upstream2.BuildContext): upstream10.AnimatedListState | null;
}
export declare const AnimatedList: typeof _AnimatedListFactory & _FlaxInstanceType<AnimatedList> & _FlaxDartType<AnimatedList, readonly ["class", "flax.core/sdk_widgets#type:AnimatedList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "removedSeparatorBuilder" | "initialItemCount" | "scrollDirection" | "reverse" | "controller" | "primary" | "physics" | "shrinkWrap" | "padding" | "clipBehavior" | "scrollCacheExtent" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedList" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
