import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface ValueListenableBuilder<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ValueListenableBuilder";
}
export declare function ValueListenableBuilder<T extends unknown | null = unknown | null>(options: {
    key?: upstream0.Key | null | undefined;
    valueListenable: Bindable<upstream1.ValueListenable<T>>;
    builder: Bindable<((context: upstream2.BuildContext, value: T, child: Widget | null) => Widget)>;
    child?: Bindable<Widget | null> | undefined;
}): ValueListenableBuilder<T>;
