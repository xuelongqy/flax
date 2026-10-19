// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSelectAll';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSelectAll';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import { _flaxMemberParameters201 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemSelectAll extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSelectAll": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }> { readonly __IOSSystemContextMenuItemSelectAll: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemSelectAll;

readonly title: string | null;
getData(localizations: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }>): upstream1.IOSSystemContextMenuItemDataSelectAll;
}
defineObject("flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", ["title"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", "object", {"getData":_flaxMemberParameters201}, {}), [], undefined, "flax.core/sdk_widgets#type:IOSSystemContextMenuItem");
export function _IOSSystemContextMenuItemSelectAllFactory(): IOSSystemContextMenuItemSelectAll {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", "", [], [], {}) as IOSSystemContextMenuItemSelectAll;
}
export const IOSSystemContextMenuItemSelectAll: typeof _IOSSystemContextMenuItemSelectAllFactory & _FlaxInstanceType<IOSSystemContextMenuItemSelectAll> & _FlaxDartType<IOSSystemContextMenuItemSelectAll, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", readonly [], false]> = _flaxBindInstanceType<IOSSystemContextMenuItemSelectAll, typeof _IOSSystemContextMenuItemSelectAllFactory>(_IOSSystemContextMenuItemSelectAllFactory, "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", ["flax.core/sdk_widgets#type:IOSSystemContextMenuItem","dart:core::Object"]) as typeof _IOSSystemContextMenuItemSelectAllFactory & _FlaxInstanceType<IOSSystemContextMenuItemSelectAll> & _FlaxDartType<IOSSystemContextMenuItemSelectAll, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSelectAll", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSelectAll" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem";
