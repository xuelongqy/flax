import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformProvidedMenuItemType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItemType">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItemType": readonly [];
}> {
    readonly __PlatformProvidedMenuItemType: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformProvidedMenuItemType;
    readonly name: string;
    readonly index: number;
}
export declare const PlatformProvidedMenuItemType: Readonly<{
    about: PlatformProvidedMenuItemType;
    quit: PlatformProvidedMenuItemType;
    servicesSubmenu: PlatformProvidedMenuItemType;
    hide: PlatformProvidedMenuItemType;
    hideOtherApplications: PlatformProvidedMenuItemType;
    showAllApplications: PlatformProvidedMenuItemType;
    startSpeaking: PlatformProvidedMenuItemType;
    stopSpeaking: PlatformProvidedMenuItemType;
    toggleFullScreen: PlatformProvidedMenuItemType;
    minimizeWindow: PlatformProvidedMenuItemType;
    zoomWindow: PlatformProvidedMenuItemType;
    arrangeWindowsInFront: PlatformProvidedMenuItemType;
    values: readonly PlatformProvidedMenuItemType[];
} & _FlaxInstanceType<PlatformProvidedMenuItemType> & _FlaxDartType<PlatformProvidedMenuItemType, readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", readonly [], false]>>;
