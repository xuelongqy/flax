import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSSystemContextMenuItem extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
}> {
    readonly __IOSSystemContextMenuItem: unique symbol;
    readonly [_flaxDartTypeValue]: IOSSystemContextMenuItem;
    readonly title: string | null;
    getData(localizations: Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [];
    }>): upstream0.IOSSystemContextMenuItemData;
}
export declare const IOSSystemContextMenuItem: object & _FlaxInstanceType<IOSSystemContextMenuItem> & _FlaxDartType<IOSSystemContextMenuItem, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItem", readonly [], false]>;
