// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataPaste';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataPaste';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { _flaxMemberParameters182 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemPaste extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemPaste": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }> { readonly __IOSSystemContextMenuItemPaste: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemPaste;

readonly title: string | null;
getData(localizations: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }>): upstream1.IOSSystemContextMenuItemDataPaste;
}
defineObject("flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", ["title"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", "object", {"getData":_flaxMemberParameters182}, {}), [], undefined, "flax.core/sdk_widgets#type:IOSSystemContextMenuItem");
export function _IOSSystemContextMenuItemPasteFactory(): IOSSystemContextMenuItemPaste {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", "", [], [], {}) as IOSSystemContextMenuItemPaste;
}
export const IOSSystemContextMenuItemPaste: typeof _IOSSystemContextMenuItemPasteFactory & _FlaxInstanceType<IOSSystemContextMenuItemPaste> & _FlaxDartType<IOSSystemContextMenuItemPaste, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", readonly [], false]> = _flaxBindInstanceType<IOSSystemContextMenuItemPaste, typeof _IOSSystemContextMenuItemPasteFactory>(_IOSSystemContextMenuItemPasteFactory, "flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", ["flax.core/sdk_widgets#type:IOSSystemContextMenuItem","dart:core::Object"]) as typeof _IOSSystemContextMenuItemPasteFactory & _FlaxInstanceType<IOSSystemContextMenuItemPaste> & _FlaxDartType<IOSSystemContextMenuItemPaste, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemPaste", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemPaste" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
