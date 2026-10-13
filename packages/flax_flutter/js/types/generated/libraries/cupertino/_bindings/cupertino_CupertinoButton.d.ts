import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoButton extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoButton";
}
declare function _CupertinoButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    onPressed: Bindable<(() => void) | null>;
}): CupertinoButton;
export declare const CupertinoButton: typeof _CupertinoButtonFactory & _FlaxInstanceType<CupertinoButton> & _FlaxDartType<CupertinoButton, readonly ["class", "flax.cupertino/cupertino#type:CupertinoButton", readonly [], false]>;
export {};
