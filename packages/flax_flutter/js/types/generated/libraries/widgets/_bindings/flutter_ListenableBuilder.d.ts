import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export interface ListenableBuilder extends WidgetDescription {
    readonly type: "flax.core/flutter#type:ListenableBuilder";
}
declare function _ListenableBuilderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    listenable: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>;
    builder: Bindable<((context: upstream2.BuildContext, child: Widget | null) => Widget)>;
    child?: Bindable<Widget | null> | undefined;
}): ListenableBuilder;
export declare const ListenableBuilder: typeof _ListenableBuilderFactory & _FlaxInstanceType<ListenableBuilder>;
export {};
