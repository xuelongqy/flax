import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:StreamBuilder";
}
export declare function StreamBuilder<T extends unknown | null = unknown | null>(options: {
    key?: upstream0.Key | null | undefined;
    initialData?: Bindable<T | null> | undefined;
    stream: Bindable<upstream1.Stream<T> | null>;
    builder: Bindable<((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<T>) => Widget)>;
}): StreamBuilder<T>;
