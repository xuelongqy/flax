import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BoxScrollView';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BoxScrollView';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollView';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream17 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream21 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream24 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GridView extends _FlaxDartWidget, Omit<upstream0.BoxScrollView, _flaxOwnMembers0>, Omit<upstream1.ScrollView, _flaxOwnMembers0 | keyof upstream0.BoxScrollView>, Omit<upstream2.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.BoxScrollView | keyof upstream1.ScrollView>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.BoxScrollView | keyof upstream1.ScrollView | keyof upstream2.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::GridView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::BoxScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __GridView: unique symbol;
    readonly [_flaxDartTypeValue]: GridView;
    readonly gridDelegate: upstream8.SliverGridDelegate;
    readonly childrenDelegate: upstream15.SliverChildDelegate;
    readonly padding: upstream7.EdgeInsetsGeometry | null;
    readonly scrollDirection: upstream4.Axis;
    readonly reverse: boolean;
    readonly controller: upstream5.ScrollController | null;
    readonly primary: boolean | null;
    readonly physics: upstream6.ScrollPhysics | null;
    readonly scrollBehavior: upstream16.ScrollBehavior | null;
    readonly shrinkWrap: boolean;
    readonly center: upstream3.Key | null;
    readonly anchor: number;
    readonly cacheExtent: number | null;
    readonly scrollCacheExtent: upstream9.ScrollCacheExtent | null;
    readonly semanticChildCount: number | null;
    readonly paintOrder: upstream17.SliverPaintOrder;
    readonly dragStartBehavior: upstream10.DragStartBehavior;
    readonly keyboardDismissBehavior: upstream12.ScrollViewKeyboardDismissBehavior | null;
    readonly restorationId: string | null;
    readonly clipBehavior: upstream11.Clip;
    readonly hitTestBehavior: upstream13.HitTestBehavior;
    readonly key: upstream3.Key | null;
    buildChildLayout(context: upstream14.BuildContext): Widget;
    buildSlivers(context: upstream14.BuildContext): DartList<Widget>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    getDirection(context: upstream14.BuildContext): upstream19.AxisDirection;
    buildViewport(context: upstream14.BuildContext, offset: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, axisDirection: upstream19.AxisDirection, slivers: DartListInput<Widget, Widget>): Widget;
    build(context: upstream14.BuildContext): Widget;
    createElement(): upstream21.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream22.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream22.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream24.DiagnosticsTreeStyle | null | undefined;
    }): upstream23.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream23.DiagnosticsNode>;
}
export declare function _GridViewFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
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
    gridDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
    }>;
    addAutomaticKeepAlives?: boolean | undefined;
    addRepaintBoundaries?: boolean | undefined;
    addSemanticIndexes?: boolean | undefined;
    cacheExtent?: number | null | undefined;
    scrollCacheExtent?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
    }> | null | undefined;
    children?: DartListInput<Widget, Widget> | undefined;
    semanticChildCount?: number | null | undefined;
    dragStartBehavior?: upstream10.DragStartBehavior | undefined;
    clipBehavior?: upstream11.Clip | undefined;
    keyboardDismissBehavior?: upstream12.ScrollViewKeyboardDismissBehavior | null | undefined;
    restorationId?: string | null | undefined;
    hitTestBehavior?: upstream13.HitTestBehavior | undefined;
}): GridView;
export declare namespace _GridViewFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
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
        gridDelegate: Readonly<{
            "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
        }>;
        itemBuilder: ((context: upstream14.BuildContext, index: number) => Widget | null);
        findChildIndexCallback?: ((key: upstream3.Key) => number | null) | null | undefined;
        itemCount?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        cacheExtent?: number | null | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        semanticChildCount?: number | null | undefined;
        dragStartBehavior?: upstream10.DragStartBehavior | undefined;
        keyboardDismissBehavior?: upstream12.ScrollViewKeyboardDismissBehavior | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream11.Clip | undefined;
        hitTestBehavior?: upstream13.HitTestBehavior | undefined;
    }): GridView;
}
export declare namespace _GridViewFactory {
    function custom(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
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
        gridDelegate: Readonly<{
            "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
        }>;
        childrenDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
        }>;
        cacheExtent?: number | null | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        semanticChildCount?: number | null | undefined;
        dragStartBehavior?: upstream10.DragStartBehavior | undefined;
        keyboardDismissBehavior?: upstream12.ScrollViewKeyboardDismissBehavior | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream11.Clip | undefined;
        hitTestBehavior?: upstream13.HitTestBehavior | undefined;
    }): GridView;
}
export declare namespace _GridViewFactory {
    function count(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
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
        crossAxisCount: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        cacheExtent?: number | null | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        children?: DartListInput<Widget, Widget> | undefined;
        semanticChildCount?: number | null | undefined;
        dragStartBehavior?: upstream10.DragStartBehavior | undefined;
        keyboardDismissBehavior?: upstream12.ScrollViewKeyboardDismissBehavior | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream11.Clip | undefined;
        hitTestBehavior?: upstream13.HitTestBehavior | undefined;
    }): GridView;
}
export declare namespace _GridViewFactory {
    function extent(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
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
        maxCrossAxisExtent: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
        addAutomaticKeepAlives?: boolean | undefined;
        addRepaintBoundaries?: boolean | undefined;
        addSemanticIndexes?: boolean | undefined;
        cacheExtent?: number | null | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        children?: DartListInput<Widget, Widget> | undefined;
        semanticChildCount?: number | null | undefined;
        dragStartBehavior?: upstream10.DragStartBehavior | undefined;
        keyboardDismissBehavior?: upstream12.ScrollViewKeyboardDismissBehavior | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream11.Clip | undefined;
        hitTestBehavior?: upstream13.HitTestBehavior | undefined;
    }): GridView;
}
export declare const GridView: typeof _GridViewFactory & _FlaxInstanceType<GridView> & _FlaxDartType<GridView, readonly ["class", "flax.core/sdk_widgets#type:GridView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "gridDelegate" | "childrenDelegate" | "padding" | "scrollDirection" | "reverse" | "controller" | "primary" | "physics" | "scrollBehavior" | "shrinkWrap" | "center" | "anchor" | "cacheExtent" | "scrollCacheExtent" | "semanticChildCount" | "paintOrder" | "dragStartBehavior" | "keyboardDismissBehavior" | "restorationId" | "clipBehavior" | "hitTestBehavior" | "key" | "buildChildLayout" | "buildSlivers" | "debugFillProperties" | "getDirection" | "buildViewport" | "build" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::GridView" | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::BoxScrollView" | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
