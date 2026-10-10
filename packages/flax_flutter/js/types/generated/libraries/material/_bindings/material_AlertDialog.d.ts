import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface AlertDialog extends WidgetDescription {
    readonly type: "flax.material/material#type:AlertDialog";
}
declare function _AlertDialogFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    title?: Bindable<Widget | null> | undefined;
    content?: Bindable<Widget | null> | undefined;
    actions?: Bindable<DartListInput<Widget, Widget> | null> | undefined;
    scrollable?: Bindable<boolean> | undefined;
}): AlertDialog;
export declare const AlertDialog: typeof _AlertDialogFactory & _FlaxInstanceType<AlertDialog>;
export {};
