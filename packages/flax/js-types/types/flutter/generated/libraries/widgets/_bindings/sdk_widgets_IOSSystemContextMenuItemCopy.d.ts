import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataCopy';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataCopy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemCopy extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCopy": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}> {
    readonly __IOSSystemContextMenuItemCopy: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemCopy;
    readonly title: string | null;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream1.IOSSystemContextMenuItemDataCopy;
}
export declare function _IOSSystemContextMenuItemCopyFactory(): IOSSystemContextMenuItemCopy;
export declare const IOSSystemContextMenuItemCopy: typeof _IOSSystemContextMenuItemCopyFactory & _FlaxInstanceType<IOSSystemContextMenuItemCopy> & _FlaxDartType<IOSSystemContextMenuItemCopy, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemCopy", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemCopy" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
export {};
