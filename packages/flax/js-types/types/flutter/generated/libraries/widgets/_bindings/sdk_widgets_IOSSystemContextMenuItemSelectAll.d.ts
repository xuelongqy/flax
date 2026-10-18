import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSelectAll';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSelectAll';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemSelectAll extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSelectAll": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}> {
    readonly __IOSSystemContextMenuItemSelectAll: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemSelectAll;
    readonly title: string | null;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream1.IOSSystemContextMenuItemDataSelectAll;
}
export declare function _IOSSystemContextMenuItemSelectAllFactory(): IOSSystemContextMenuItemSelectAll;
export declare const IOSSystemContextMenuItemSelectAll: typeof _IOSSystemContextMenuItemSelectAllFactory & _FlaxInstanceType<IOSSystemContextMenuItemSelectAll> & _FlaxDartType<IOSSystemContextMenuItemSelectAll, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSelectAll" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
export {};
