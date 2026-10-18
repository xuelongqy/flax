// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BrowserContextMenu extends Readonly<{ "__flaxBound:package:flutter/src/services/browser_context_menu.dart::BrowserContextMenu": readonly [] }> { readonly __BrowserContextMenu: unique symbol;
readonly [_flaxDartTypeValue]: BrowserContextMenu;

}
defineObject("flax.core/sdk_services#type:BrowserContextMenu", [], [], _flaxBindingMethods("flax.core/sdk_services#type:BrowserContextMenu", "object", {}, {}), []);
export namespace _BrowserContextMenuFactory { export declare const enabled: boolean; }
_flaxDefineStaticGetters(_BrowserContextMenuFactory, "flax.core/sdk_services#read:BrowserContextMenu.", ["enabled"]);
export namespace _BrowserContextMenuFactory { export function disableContextMenu(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:BrowserContextMenu.disableContextMenu", []);
return _flaxResult as Promise<void>;
} }
export namespace _BrowserContextMenuFactory { export function enableContextMenu(): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:BrowserContextMenu.enableContextMenu", []);
return _flaxResult as Promise<void>;
} }
export const BrowserContextMenu: typeof _BrowserContextMenuFactory & _FlaxInstanceType<BrowserContextMenu> & _FlaxDartType<BrowserContextMenu, readonly ["class", "flax.core/sdk_services#type:BrowserContextMenu", readonly [], false]> = _flaxBindInstanceType<BrowserContextMenu, typeof _BrowserContextMenuFactory>(_BrowserContextMenuFactory, "flax.core/sdk_services#type:BrowserContextMenu", ["dart:core::Object"]) as typeof _BrowserContextMenuFactory & _FlaxInstanceType<BrowserContextMenu> & _FlaxDartType<BrowserContextMenu, readonly ["class", "flax.core/sdk_services#type:BrowserContextMenu", readonly [], false]>;
