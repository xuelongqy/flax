import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListView extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ListView": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::BoxScrollView": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollView": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:ListView";
}
export declare function _ListViewFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    scrollDirection?: Bindable<upstream1.Axis> | undefined;
    reverse?: Bindable<boolean> | undefined;
    controller?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null> | undefined;
    primary?: Bindable<boolean | null> | undefined;
    physics?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null> | undefined;
    shrinkWrap?: Bindable<boolean> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    itemExtent?: Bindable<number | null> | undefined;
    itemExtentBuilder?: Bindable<((index: number, dimensions: upstream5.SliverLayoutDimensions) => number | null) | null> | undefined;
    prototypeItem?: Bindable<Widget | null> | undefined;
    addAutomaticKeepAlives?: Bindable<boolean> | undefined;
    addRepaintBoundaries?: Bindable<boolean> | undefined;
    addSemanticIndexes?: Bindable<boolean> | undefined;
    cacheExtent?: Bindable<number | null> | undefined;
    scrollCacheExtent?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
    }> | null> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
    semanticChildCount?: Bindable<number | null> | undefined;
    dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
    keyboardDismissBehavior?: Bindable<upstream8.ScrollViewKeyboardDismissBehavior | null> | undefined;
    restorationId?: Bindable<string | null> | undefined;
    clipBehavior?: Bindable<upstream9.Clip> | undefined;
    hitTestBehavior?: Bindable<upstream10.HitTestBehavior> | undefined;
}): ListView;
export declare namespace _ListViewFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ListViewFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ListViewFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare namespace _ListViewFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null> | undefined;
        primary?: Bindable<boolean | null> | undefined;
        physics?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null> | undefined;
        shrinkWrap?: Bindable<boolean> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        itemExtent?: Bindable<number | null> | undefined;
        itemExtentBuilder?: Bindable<((index: number, dimensions: upstream5.SliverLayoutDimensions) => number | null) | null> | undefined;
        prototypeItem?: Bindable<Widget | null> | undefined;
        itemBuilder: Bindable<((context: upstream11.BuildContext, index: number) => Widget | null)>;
        findChildIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        itemCount?: Bindable<number | null> | undefined;
        addAutomaticKeepAlives?: Bindable<boolean> | undefined;
        addRepaintBoundaries?: Bindable<boolean> | undefined;
        addSemanticIndexes?: Bindable<boolean> | undefined;
        cacheExtent?: Bindable<number | null> | undefined;
        scrollCacheExtent?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null> | undefined;
        semanticChildCount?: Bindable<number | null> | undefined;
        dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
        keyboardDismissBehavior?: Bindable<upstream8.ScrollViewKeyboardDismissBehavior | null> | undefined;
        restorationId?: Bindable<string | null> | undefined;
        clipBehavior?: Bindable<upstream9.Clip> | undefined;
        hitTestBehavior?: Bindable<upstream10.HitTestBehavior> | undefined;
    }): ListView;
    namespace builder {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof builder>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _ListViewFactory {
    function separated(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null> | undefined;
        primary?: Bindable<boolean | null> | undefined;
        physics?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null> | undefined;
        shrinkWrap?: Bindable<boolean> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        itemBuilder: Bindable<((context: upstream11.BuildContext, index: number) => Widget | null)>;
        findChildIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        findItemIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        separatorBuilder: Bindable<((context: upstream11.BuildContext, index: number) => Widget)>;
        itemCount: Bindable<number>;
        addAutomaticKeepAlives?: Bindable<boolean> | undefined;
        addRepaintBoundaries?: Bindable<boolean> | undefined;
        addSemanticIndexes?: Bindable<boolean> | undefined;
        cacheExtent?: Bindable<number | null> | undefined;
        scrollCacheExtent?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null> | undefined;
        dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
        keyboardDismissBehavior?: Bindable<upstream8.ScrollViewKeyboardDismissBehavior | null> | undefined;
        restorationId?: Bindable<string | null> | undefined;
        clipBehavior?: Bindable<upstream9.Clip> | undefined;
        hitTestBehavior?: Bindable<upstream10.HitTestBehavior> | undefined;
    }): ListView;
    namespace separated {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof separated>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _ListViewFactory {
    function custom(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null> | undefined;
        primary?: Bindable<boolean | null> | undefined;
        physics?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null> | undefined;
        shrinkWrap?: Bindable<boolean> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        itemExtent?: Bindable<number | null> | undefined;
        prototypeItem?: Bindable<Widget | null> | undefined;
        itemExtentBuilder?: Bindable<((index: number, dimensions: upstream5.SliverLayoutDimensions) => number | null) | null> | undefined;
        childrenDelegate: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
        }>>;
        cacheExtent?: Bindable<number | null> | undefined;
        scrollCacheExtent?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null> | undefined;
        semanticChildCount?: Bindable<number | null> | undefined;
        dragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined;
        keyboardDismissBehavior?: Bindable<upstream8.ScrollViewKeyboardDismissBehavior | null> | undefined;
        restorationId?: Bindable<string | null> | undefined;
        clipBehavior?: Bindable<upstream9.Clip> | undefined;
        hitTestBehavior?: Bindable<upstream10.HitTestBehavior> | undefined;
    }): ListView;
    namespace custom {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof custom>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const ListView: typeof _ListViewFactory & _FlaxInstanceType<ListView> & _FlaxDartType<ListView, readonly ["class", "flax.core/flutter#type:ListView", readonly [], false]>;
