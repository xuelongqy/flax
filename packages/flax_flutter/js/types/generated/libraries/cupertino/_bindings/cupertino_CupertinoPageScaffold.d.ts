import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface CupertinoPageScaffold extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoPageScaffold";
}
export declare function CupertinoPageScaffold(options: {
    key?: upstream0.Key | null | undefined;
    navigationBar?: Bindable<upstream1.ObstructingPreferredSizeWidget | null> | undefined;
    backgroundColor?: Bindable<upstream2.Color | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): CupertinoPageScaffold;
