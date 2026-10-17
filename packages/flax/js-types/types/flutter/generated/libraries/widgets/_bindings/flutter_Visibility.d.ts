import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Visibility extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Visibility";
}
export declare function _VisibilityFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    replacement?: Bindable<Widget> | undefined;
    visible?: Bindable<boolean> | undefined;
    maintainState?: Bindable<boolean> | undefined;
    maintainAnimation?: Bindable<boolean> | undefined;
    maintainSize?: Bindable<boolean> | undefined;
    maintainSemantics?: Bindable<boolean> | undefined;
    maintainInteractivity?: Bindable<boolean> | undefined;
    maintainFocusability?: Bindable<boolean> | undefined;
}): Visibility;
export declare namespace _VisibilityFactory {
    function maintain(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        visible?: Bindable<boolean> | undefined;
    }): Visibility;
}
export declare namespace _VisibilityFactory {
    function of(context: upstream1.BuildContext): boolean;
}
export declare const Visibility: typeof _VisibilityFactory & _FlaxInstanceType<Visibility> & _FlaxDartType<Visibility, readonly ["class", "flax.core/flutter#type:Visibility", readonly [], false]>;
