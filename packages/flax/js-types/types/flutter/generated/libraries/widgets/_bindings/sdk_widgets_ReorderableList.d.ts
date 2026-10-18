import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableListState';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ReorderableList extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableList": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ReorderableList: unique symbol;
    readonly [_flaxDartTypeValue]: ReorderableList;
    readonly itemBuilder: ((context: upstream2.BuildContext, index: number) => Widget);
    readonly itemCount: number;
    readonly onReorder: ((oldIndex: number, newIndex: number) => void) | null;
    readonly onReorderItem: ((oldIndex: number, newIndex: number) => void) | null;
    readonly onReorderStart: ((index: number) => void) | null;
    readonly onReorderEnd: ((index: number) => void) | null;
    readonly proxyDecorator: ((child: Widget, index: number, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => Widget) | null;
    readonly padding: upstream5.EdgeInsetsGeometry | null;
    readonly scrollDirection: upstream6.Axis;
    readonly reverse: boolean;
    readonly controller: upstream7.ScrollController | null;
    readonly primary: boolean | null;
    readonly physics: upstream8.ScrollPhysics | null;
    readonly shrinkWrap: boolean;
    readonly anchor: number;
    readonly cacheExtent: number | null;
    readonly scrollCacheExtent: upstream9.ScrollCacheExtent | null;
    readonly dragStartBehavior: upstream10.DragStartBehavior;
    readonly keyboardDismissBehavior: upstream11.ScrollViewKeyboardDismissBehavior | null;
    readonly restorationId: string | null;
    readonly clipBehavior: upstream12.Clip;
    readonly itemExtent: number | null;
    readonly itemExtentBuilder: ((index: number, dimensions: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
    }>) => number | null) | null;
    readonly prototypeItem: Widget | null;
    readonly autoScrollerVelocityScalar: number | null;
    readonly dragBoundaryProvider: ((context: upstream2.BuildContext) => upstream13.DragBoundaryDelegate<upstream14.Rect> | null) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream15.ReorderableListState;
    createElement(): upstream16.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream20.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
}
export declare function _ReorderableListFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream2.BuildContext, index: number) => Widget);
    itemCount: number;
    onReorder?: ((oldIndex: number, newIndex: number) => void) | null | undefined;
    onReorderItem?: ((oldIndex: number, newIndex: number) => void) | null | undefined;
    onReorderStart?: ((index: number) => void) | null | undefined;
    onReorderEnd?: ((index: number) => void) | null | undefined;
    itemExtent?: number | null | undefined;
    itemExtentBuilder?: ((index: number, dimensions: upstream3.SliverLayoutDimensions) => number | null) | null | undefined;
    prototypeItem?: Widget | null | undefined;
    proxyDecorator?: ((child: Widget, index: number, animation: upstream4.Animation<number>) => Widget) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    scrollDirection?: upstream6.Axis | undefined;
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
    anchor?: number | undefined;
    cacheExtent?: number | null | undefined;
    scrollCacheExtent?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
    }> | null | undefined;
    dragStartBehavior?: upstream10.DragStartBehavior | undefined;
    keyboardDismissBehavior?: upstream11.ScrollViewKeyboardDismissBehavior | null | undefined;
    restorationId?: string | null | undefined;
    clipBehavior?: upstream12.Clip | undefined;
    autoScrollerVelocityScalar?: number | null | undefined;
    dragBoundaryProvider?: ((context: upstream2.BuildContext) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_boundary.dart::DragBoundaryDelegate": readonly [upstream14.Rect];
    }> | null) | null | undefined;
}): ReorderableList;
export declare namespace _ReorderableListFactory {
    function of(context: upstream2.BuildContext): upstream15.ReorderableListState;
}
export declare namespace _ReorderableListFactory {
    function maybeOf(context: upstream2.BuildContext): upstream15.ReorderableListState | null;
}
export declare const ReorderableList: typeof _ReorderableListFactory & _FlaxInstanceType<ReorderableList> & _FlaxDartType<ReorderableList, readonly ["class", "flax.core/sdk_widgets#type:ReorderableList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "itemCount" | "onReorder" | "onReorderItem" | "onReorderStart" | "onReorderEnd" | "proxyDecorator" | "padding" | "scrollDirection" | "reverse" | "controller" | "primary" | "physics" | "shrinkWrap" | "anchor" | "cacheExtent" | "scrollCacheExtent" | "dragStartBehavior" | "keyboardDismissBehavior" | "restorationId" | "clipBehavior" | "itemExtent" | "itemExtentBuilder" | "prototypeItem" | "autoScrollerVelocityScalar" | "dragBoundaryProvider" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableList" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
