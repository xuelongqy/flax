import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/widgets/_bindings/flutter_HitTestBehavior';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SingleChildScrollView extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SingleChildScrollView";
}
export declare function _SingleChildScrollViewFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    scrollDirection?: Bindable<upstream1.Axis> | undefined;
    reverse?: Bindable<boolean> | undefined;
    padding?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null> | undefined;
    primary?: Bindable<boolean | null> | undefined;
    physics?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null> | undefined;
    controller?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
    dragStartBehavior?: Bindable<upstream5.DragStartBehavior> | undefined;
    clipBehavior?: Bindable<upstream6.Clip> | undefined;
    hitTestBehavior?: Bindable<upstream7.HitTestBehavior> | undefined;
    restorationId?: Bindable<string | null> | undefined;
}): SingleChildScrollView;
export declare const SingleChildScrollView: typeof _SingleChildScrollViewFactory & _FlaxInstanceType<SingleChildScrollView> & _FlaxDartType<SingleChildScrollView, readonly ["class", "flax.core/flutter#type:SingleChildScrollView", readonly [], false]>;
