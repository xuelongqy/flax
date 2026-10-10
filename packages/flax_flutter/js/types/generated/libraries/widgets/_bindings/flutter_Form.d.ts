import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
export interface Form extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Form";
}
declare function _FormFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean | null> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined;
    onChanged?: Bindable<(() => void) | null> | undefined;
    autovalidateMode?: Bindable<upstream1.AutovalidateMode | null> | undefined;
}): Form;
export declare const Form: typeof _FormFactory & _FlaxInstanceType<Form>;
export {};
