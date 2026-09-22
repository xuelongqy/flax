import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface StatefulBuilder extends WidgetDescription {
    readonly type: "flax.core/flutter#type:StatefulBuilder";
}
export declare function StatefulBuilder(options: {
    key?: upstream0.Key | null | undefined;
    builder: Bindable<((context: upstream1.BuildContext, setState: ((fn: (() => void)) => void)) => Widget)>;
}): StatefulBuilder;
