import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface ListenableBuilder extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ListenableBuilder";
}
export declare function ListenableBuilder(options: {
    key?: upstream0.Key | null | undefined;
    listenable: Bindable<upstream1.Listenable>;
    builder: Bindable<((context: upstream2.BuildContext, child: Widget | null) => Widget)>;
    child?: Bindable<Widget | null> | undefined;
}): ListenableBuilder;
