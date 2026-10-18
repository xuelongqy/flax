import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataCopy extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataCopy": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
}> {
    readonly __IOSSystemContextMenuItemDataCopy: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataCopy;
    readonly title: string | null;
}
export declare function _IOSSystemContextMenuItemDataCopyFactory(): IOSSystemContextMenuItemDataCopy;
export declare const IOSSystemContextMenuItemDataCopy: typeof _IOSSystemContextMenuItemDataCopyFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataCopy> & _FlaxDartType<IOSSystemContextMenuItemDataCopy, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataCopy", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataCopy" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData";
export {};
