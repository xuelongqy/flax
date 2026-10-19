// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import { _flaxMemberParameters331, _flaxMemberParameters1, _flaxMemberParameters300, _flaxMemberParameters48 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionHandler extends Omit<upstream0.ValueListenable<upstream1.SelectionGeometry>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueListenable<upstream1.SelectionGeometry>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.SelectionGeometry] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SelectionHandler: unique symbol;
readonly [_flaxDartTypeValue]: SelectionHandler;

readonly value: upstream1.SelectionGeometry;
readonly contentLength: number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
pushHandleLayers(startHandle: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [] }> | null, endHandle: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [] }> | null): void;
getSelectedContent(): upstream4.SelectedContent | null;
getSelection(): upstream5.SelectedContentRange | null;
dispatchSelectionEvent(event: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }>): upstream6.SelectionResult;
}
defineObject("flax.core/sdk_rendering#type:SelectionHandler", ["value","contentLength"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionHandler", "object", {"pushHandleLayers":_flaxMemberParameters331,"getSelectedContent":_flaxMemberParameters1,"getSelection":_flaxMemberParameters1,"dispatchSelectionEvent":_flaxMemberParameters300}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _SelectionHandlerProxy = {type: "flax.core/sdk_rendering#type:SelectionHandler", parameters: _flaxMemberParameters1, constructors: {}, methods: {"addListener":_flaxMemberParameters48,"removeListener":_flaxMemberParameters48,"pushHandleLayers":_flaxMemberParameters331,"getSelectedContent":_flaxMemberParameters1,"getSelection":_flaxMemberParameters1,"dispatchSelectionEvent":_flaxMemberParameters300}, getters: ["contentLength","value"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SelectionHandlerFactory { export function implement(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); pushHandleLayers: ((startHandle: upstream3.LayerLink | null, endHandle: upstream3.LayerLink | null) => void); getSelectedContent: (() => Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null); getSelection: (() => Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null); dispatchSelectionEvent: ((event: upstream7.SelectionEvent) => upstream6.SelectionResult); get contentLength(): number; get value(): Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}): SelectionHandler {
return constructProxy(_SelectionHandlerProxy, args, implementation) as SelectionHandler; } }
export const SelectionHandler: typeof _SelectionHandlerFactory & _FlaxInstanceType<SelectionHandler> & _FlaxDartType<SelectionHandler, readonly ["class", "flax.core/sdk_rendering#type:SelectionHandler", readonly [], false]> = _flaxBindInstanceType<SelectionHandler, typeof _SelectionHandlerFactory>(_SelectionHandlerFactory, "flax.core/sdk_rendering#type:SelectionHandler", ["dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/flutter#type:Listenable"]) as typeof _SelectionHandlerFactory & _FlaxInstanceType<SelectionHandler> & _FlaxDartType<SelectionHandler, readonly ["class", "flax.core/sdk_rendering#type:SelectionHandler", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "contentLength" | "addListener" | "removeListener" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
