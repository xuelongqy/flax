import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListView extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ListView";
}
export declare function _ListViewFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    scrollDirection?: Bindable<upstream1.Axis> | undefined;
    reverse?: Bindable<boolean> | undefined;
    controller?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> | null> | undefined;
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
    addAutomaticKeepAlives?: Bindable<boolean> | undefined;
    addRepaintBoundaries?: Bindable<boolean> | undefined;
    addSemanticIndexes?: Bindable<boolean> | undefined;
    cacheExtent?: Bindable<number | null> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
    semanticChildCount?: Bindable<number | null> | undefined;
    dragStartBehavior?: Bindable<upstream5.DragStartBehavior> | undefined;
    restorationId?: Bindable<string | null> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
    hitTestBehavior?: Bindable<upstream7.HitTestBehavior> | undefined;
}): ListView;
export declare namespace _ListViewFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> | null> | undefined;
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
        itemBuilder: Bindable<((context: upstream8.BuildContext, index: number) => Widget | null)>;
        findChildIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        itemCount?: Bindable<number | null> | undefined;
        addAutomaticKeepAlives?: Bindable<boolean> | undefined;
        addRepaintBoundaries?: Bindable<boolean> | undefined;
        addSemanticIndexes?: Bindable<boolean> | undefined;
        cacheExtent?: Bindable<number | null> | undefined;
        semanticChildCount?: Bindable<number | null> | undefined;
        dragStartBehavior?: Bindable<upstream5.DragStartBehavior> | undefined;
        restorationId?: Bindable<string | null> | undefined;
        clipBehavior?: Bindable<upstream6.Clip> | undefined;
        hitTestBehavior?: Bindable<upstream7.HitTestBehavior> | undefined;
    }): ListView;
}
export declare namespace _ListViewFactory {
    function separated(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> | null> | undefined;
        primary?: Bindable<boolean | null> | undefined;
        physics?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null> | undefined;
        shrinkWrap?: Bindable<boolean> | undefined;
        padding?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null> | undefined;
        itemBuilder: Bindable<((context: upstream8.BuildContext, index: number) => Widget | null)>;
        findChildIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        findItemIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        separatorBuilder: Bindable<((context: upstream8.BuildContext, index: number) => Widget)>;
        itemCount: Bindable<number>;
        addAutomaticKeepAlives?: Bindable<boolean> | undefined;
        addRepaintBoundaries?: Bindable<boolean> | undefined;
        addSemanticIndexes?: Bindable<boolean> | undefined;
        cacheExtent?: Bindable<number | null> | undefined;
        dragStartBehavior?: Bindable<upstream5.DragStartBehavior> | undefined;
        restorationId?: Bindable<string | null> | undefined;
        clipBehavior?: Bindable<upstream6.Clip> | undefined;
        hitTestBehavior?: Bindable<upstream7.HitTestBehavior> | undefined;
    }): ListView;
}
export declare const ListView: typeof _ListViewFactory & _FlaxInstanceType<ListView> & _FlaxDartType<ListView, readonly ["class", "flax.core/flutter#type:ListView", readonly [], false]>;
