import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataSelectAll extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataSelectAll": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
}> {
    readonly __IOSSystemContextMenuItemDataSelectAll: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataSelectAll;
    readonly title: string | null;
}
export declare function _IOSSystemContextMenuItemDataSelectAllFactory(): IOSSystemContextMenuItemDataSelectAll;
export declare const IOSSystemContextMenuItemDataSelectAll: typeof _IOSSystemContextMenuItemDataSelectAllFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataSelectAll> & _FlaxDartType<IOSSystemContextMenuItemDataSelectAll, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataSelectAll", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataSelectAll" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData";
export {};
