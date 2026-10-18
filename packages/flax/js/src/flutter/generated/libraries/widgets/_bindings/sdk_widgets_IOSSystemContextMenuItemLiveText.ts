// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemLiveText extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemLiveText": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }> { readonly __IOSSystemContextMenuItemLiveText: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemLiveText;

readonly title: string | null;
getData(localizations: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }>): upstream1.IOSSystemContextMenuItemData;
}
defineObject("flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", ["title"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:IOSSystemContextMenuItem");
export function _IOSSystemContextMenuItemLiveTextFactory(): IOSSystemContextMenuItemLiveText {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", "", [], [], {}) as IOSSystemContextMenuItemLiveText;
}
export const IOSSystemContextMenuItemLiveText: typeof _IOSSystemContextMenuItemLiveTextFactory & _FlaxInstanceType<IOSSystemContextMenuItemLiveText> & _FlaxDartType<IOSSystemContextMenuItemLiveText, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", readonly [], false]> = _flaxBindInstanceType<IOSSystemContextMenuItemLiveText, typeof _IOSSystemContextMenuItemLiveTextFactory>(_IOSSystemContextMenuItemLiveTextFactory, "flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", ["flax.core/sdk_widgets#type:IOSSystemContextMenuItem","dart:core::Object"]) as typeof _IOSSystemContextMenuItemLiveTextFactory & _FlaxInstanceType<IOSSystemContextMenuItemLiveText> & _FlaxDartType<IOSSystemContextMenuItemLiveText, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemLiveText", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemLiveText" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
