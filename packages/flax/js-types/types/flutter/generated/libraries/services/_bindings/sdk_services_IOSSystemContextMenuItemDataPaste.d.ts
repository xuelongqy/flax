import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataPaste extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataPaste": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
}> {
    readonly __IOSSystemContextMenuItemDataPaste: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataPaste;
    readonly title: string | null;
}
export declare function _IOSSystemContextMenuItemDataPasteFactory(): IOSSystemContextMenuItemDataPaste;
export declare const IOSSystemContextMenuItemDataPaste: typeof _IOSSystemContextMenuItemDataPasteFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataPaste> & _FlaxDartType<IOSSystemContextMenuItemDataPaste, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataPaste", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataPaste" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData";
export {};
