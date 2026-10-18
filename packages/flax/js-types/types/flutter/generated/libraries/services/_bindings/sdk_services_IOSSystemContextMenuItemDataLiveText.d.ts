import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataLiveText extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLiveText": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [];
}> {
    readonly __IOSSystemContextMenuItemDataLiveText: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataLiveText;
    readonly title: string | null;
}
export declare function _IOSSystemContextMenuItemDataLiveTextFactory(): IOSSystemContextMenuItemDataLiveText;
export declare const IOSSystemContextMenuItemDataLiveText: typeof _IOSSystemContextMenuItemDataLiveTextFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataLiveText> & _FlaxDartType<IOSSystemContextMenuItemDataLiveText, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLiveText", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLiveText" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData";
export {};
