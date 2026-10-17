import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Directionality extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Directionality";
}
export declare function _DirectionalityFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    textDirection: Bindable<upstream1.TextDirection>;
    child: Bindable<Widget>;
}): Directionality;
export declare namespace _DirectionalityFactory {
    function of(context: upstream2.BuildContext): upstream1.TextDirection;
}
export declare namespace _DirectionalityFactory {
    function maybeOf(context: upstream2.BuildContext): upstream1.TextDirection | null;
}
export declare const Directionality: typeof _DirectionalityFactory & _FlaxInstanceType<Directionality> & _FlaxDartType<Directionality, readonly ["class", "flax.core/flutter#type:Directionality", readonly [], false]>;
