import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface CupertinoButton extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoButton";
}
export declare function CupertinoButton(options: {
    key?: upstream0.Key | null | undefined;
    child: Bindable<Widget>;
    onPressed: Bindable<(() => void) | null>;
}): CupertinoButton;
