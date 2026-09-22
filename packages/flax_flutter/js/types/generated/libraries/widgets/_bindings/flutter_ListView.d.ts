import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface ListView extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ListView";
}
export declare namespace ListView {
    function builder(options: {
        key?: upstream0.Key | null | undefined;
        scrollDirection?: Bindable<upstream1.Axis> | undefined;
        reverse?: Bindable<boolean> | undefined;
        controller?: Bindable<upstream2.ScrollController | null> | undefined;
        primary?: Bindable<boolean | null> | undefined;
        physics?: Bindable<upstream3.ScrollPhysics | null> | undefined;
        shrinkWrap?: Bindable<boolean> | undefined;
        padding?: Bindable<upstream4.EdgeInsetsGeometry | null> | undefined;
        itemExtent?: Bindable<number | null> | undefined;
        itemBuilder: Bindable<((context: upstream5.BuildContext, index: number) => Widget | null)>;
        findChildIndexCallback?: Bindable<((key: upstream0.Key) => number | null) | null> | undefined;
        itemCount?: Bindable<number | null> | undefined;
        addAutomaticKeepAlives?: Bindable<boolean> | undefined;
        addRepaintBoundaries?: Bindable<boolean> | undefined;
        addSemanticIndexes?: Bindable<boolean> | undefined;
    }): ListView;
}
