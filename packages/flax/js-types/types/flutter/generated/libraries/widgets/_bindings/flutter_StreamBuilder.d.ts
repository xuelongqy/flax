import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:StreamBuilder";
}
declare function _StreamBuilderFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialData?: Bindable<T | null> | undefined;
    stream: Bindable<upstream1.Stream<T> | null>;
    builder: Bindable<((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<T>) => Widget)>;
}): StreamBuilder<T>;
export declare const StreamBuilder: typeof _StreamBuilderFactory & _FlaxInstanceType<StreamBuilder<any>>;
export {};
