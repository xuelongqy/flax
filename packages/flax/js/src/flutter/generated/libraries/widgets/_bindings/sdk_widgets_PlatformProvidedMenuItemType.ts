// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformProvidedMenuItemType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItemType">, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::PlatformProvidedMenuItemType": readonly [] }> { readonly __PlatformProvidedMenuItemType: unique symbol;
readonly [_flaxDartTypeValue]: PlatformProvidedMenuItemType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", ["about","quit","servicesSubmenu","hide","hideOtherApplications","showAllApplications","startSpeaking","stopSpeaking","toggleFullScreen","minimizeWindow","zoomWindow","arrangeWindowsInFront"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PlatformProvidedMenuItemType_api = {
about: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "about"),
quit: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "quit"),
servicesSubmenu: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "servicesSubmenu"),
hide: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "hide"),
hideOtherApplications: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "hideOtherApplications"),
showAllApplications: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "showAllApplications"),
startSpeaking: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "startSpeaking"),
stopSpeaking: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "stopSpeaking"),
toggleFullScreen: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "toggleFullScreen"),
minimizeWindow: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "minimizeWindow"),
zoomWindow: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "zoomWindow"),
arrangeWindowsInFront: enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "arrangeWindowsInFront"),
values: Object.freeze([enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "about"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "quit"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "servicesSubmenu"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "hide"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "hideOtherApplications"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "showAllApplications"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "startSpeaking"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "stopSpeaking"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "toggleFullScreen"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "minimizeWindow"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "zoomWindow"), enumValue<PlatformProvidedMenuItemType>("flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", "arrangeWindowsInFront")]),
};
export const PlatformProvidedMenuItemType = Object.freeze(_flaxBindInstanceType<PlatformProvidedMenuItemType, typeof _flaxEnum_PlatformProvidedMenuItemType_api>(_flaxEnum_PlatformProvidedMenuItemType_api, "flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PlatformProvidedMenuItemType_api & _FlaxInstanceType<PlatformProvidedMenuItemType> & _FlaxDartType<PlatformProvidedMenuItemType, readonly ["class", "flax.core/sdk_widgets#type:PlatformProvidedMenuItemType", readonly [], false]>);
