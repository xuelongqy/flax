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
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DragBoundaryDelegate';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableListState';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverReorderableList extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::SliverReorderableList": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverReorderableList: unique symbol;
    readonly [_flaxDartTypeValue]: SliverReorderableList;
    readonly itemBuilder: ((context: upstream2.BuildContext, index: number) => Widget);
    readonly findChildIndexCallback: ((key: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => number | null) | null;
    readonly itemCount: number;
    readonly onReorder: ((oldIndex: number, newIndex: number) => void) | null;
    readonly onReorderItem: ((oldIndex: number, newIndex: number) => void) | null;
    readonly onReorderStart: ((p0: number) => void) | null;
    readonly onReorderEnd: ((p0: number) => void) | null;
    readonly proxyDecorator: ((child: Widget, index: number, animation: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>) => Widget) | null;
    readonly itemExtent: number | null;
    readonly itemExtentBuilder: ((index: number, dimensions: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
    }>) => number | null) | null;
    readonly prototypeItem: Widget | null;
    readonly autoScrollerVelocityScalar: number;
    readonly dragBoundaryProvider: ((context: upstream2.BuildContext) => upstream5.DragBoundaryDelegate<upstream6.Rect> | null) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream7.SliverReorderableListState;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _SliverReorderableListFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream2.BuildContext, index: number) => Widget);
    findChildIndexCallback?: ((key: upstream1.Key) => number | null) | null | undefined;
    itemCount: number;
    onReorder?: ((oldIndex: number, newIndex: number) => void) | null | undefined;
    onReorderItem?: ((oldIndex: number, newIndex: number) => void) | null | undefined;
    onReorderStart?: ((p0: number) => void) | null | undefined;
    onReorderEnd?: ((p0: number) => void) | null | undefined;
    itemExtent?: number | null | undefined;
    itemExtentBuilder?: ((index: number, dimensions: upstream3.SliverLayoutDimensions) => number | null) | null | undefined;
    prototypeItem?: Widget | null | undefined;
    proxyDecorator?: ((child: Widget, index: number, animation: upstream4.Animation<number>) => Widget) | null | undefined;
    dragBoundaryProvider?: ((context: upstream2.BuildContext) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_boundary.dart::DragBoundaryDelegate": readonly [upstream6.Rect];
    }> | null) | null | undefined;
    autoScrollerVelocityScalar?: number | null | undefined;
}): SliverReorderableList;
export declare namespace _SliverReorderableListFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverReorderableListFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _SliverReorderableListFactory {
    function of(context: upstream2.BuildContext): upstream7.SliverReorderableListState;
}
export declare namespace _SliverReorderableListFactory {
    function maybeOf(context: upstream2.BuildContext): upstream7.SliverReorderableListState | null;
}
export declare const SliverReorderableList: typeof _SliverReorderableListFactory & _FlaxInstanceType<SliverReorderableList> & _FlaxDartType<SliverReorderableList, readonly ["class", "flax.core/sdk_widgets#type:SliverReorderableList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "findChildIndexCallback" | "itemCount" | "onReorder" | "onReorderItem" | "onReorderStart" | "onReorderEnd" | "proxyDecorator" | "itemExtent" | "itemExtentBuilder" | "prototypeItem" | "autoScrollerVelocityScalar" | "dragBoundaryProvider" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::SliverReorderableList" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
