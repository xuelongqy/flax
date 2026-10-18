import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemLiveText extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemLiveText": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}> {
    readonly __IOSSystemContextMenuItemLiveText: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemLiveText;
    readonly title: string | null;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream1.IOSSystemContextMenuItemData;
}
export declare function _IOSSystemContextMenuItemLiveTextFactory(): IOSSystemContextMenuItemLiveText;
export declare const IOSSystemContextMenuItemLiveText: typeof _IOSSystemContextMenuItemLiveTextFactory & _FlaxInstanceType<IOSSystemContextMenuItemLiveText> & _FlaxDartType<IOSSystemContextMenuItemLiveText, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemLiveText" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
export {};
