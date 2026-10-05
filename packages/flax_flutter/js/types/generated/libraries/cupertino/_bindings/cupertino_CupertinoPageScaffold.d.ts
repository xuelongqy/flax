import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface CupertinoPageScaffold extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoPageScaffold";
}
export declare function CupertinoPageScaffold(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    navigationBar?: Bindable<upstream1.ObstructingPreferredSizeWidget | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): CupertinoPageScaffold;
