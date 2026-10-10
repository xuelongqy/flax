import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Visibility extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Visibility";
}
declare function _VisibilityFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    visible?: Bindable<boolean> | undefined;
    maintainState?: Bindable<boolean> | undefined;
    maintainAnimation?: Bindable<boolean> | undefined;
    maintainSize?: Bindable<boolean> | undefined;
    maintainSemantics?: Bindable<boolean> | undefined;
    maintainInteractivity?: Bindable<boolean> | undefined;
    maintainFocusability?: Bindable<boolean> | undefined;
}): Visibility;
declare namespace _VisibilityFactory {
    function maintain(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        visible?: Bindable<boolean> | undefined;
    }): Visibility;
}
export declare const Visibility: typeof _VisibilityFactory & _FlaxInstanceType<Visibility>;
export {};
